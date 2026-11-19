/* ══════════════════════════════════════════════════════════════
   Слой работы с Supabase: аккаунты, активация, синхронизация прогресса.
══════════════════════════════════════════════════════════════ */
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const PROGRESS_KEYS = ['prog', 'defer', 'coins', 'shop', 'used', 'pet', 'mem', 'exam'];

function progressLocalKey(kind, userId) {
  return { prog: 'dl_prog_', defer: 'dl_defer_', coins: 'dl_coins_', shop: 'dl_shop_',
    used: 'dl_used_', pet: 'dl_pet_', mem: 'dl_mem_', exam: 'dl_exam_' }[kind] + userId;
}

/* ── Регистрация / вход / выход ── */
async function authSignUp(email, password, displayName) {
  return sb.auth.signUp({
    email, password,
    options: {
      data: { display_name: displayName },
      emailRedirectTo: window.location.origin + window.location.pathname,
    }
  });
}
async function authSignIn(email, password) {
  return sb.auth.signInWithPassword({ email, password });
}
async function authSignOut() {
  return sb.auth.signOut();
}
async function authGetSession() {
  const { data } = await sb.auth.getSession();
  return data.session;
}
async function authResetPassword(email) {
  return sb.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + window.location.pathname });
}
async function authUpdatePassword(newPassword) {
  return sb.auth.updateUser({ password: newPassword });
}

/* ── Профиль текущего пользователя ── */
async function fetchMyProfile(userId) {
  const { data, error } = await sb.from('profiles').select('*').eq('id', userId).single();
  if (error) return null;
  return data;
}

/* ── Слияние прогресса между устройствами ──
   Синхронизация никогда не заменяет данные "последним, кто записал" —
   всегда объединяет локальную и облачную версию так, чтобы результат
   был не хуже, чем на любом из устройств по отдельности. */
function mergeWordMap(a, b) {
  const out = { ...(a || {}) };
  Object.entries(b || {}).forEach(([id, rec]) => {
    const cur = out[id];
    if (!cur) { out[id] = rec; return; }
    // Если у обеих записей есть метка времени (streak-сброс через resetWord/resetCategory
    // тоже её ставит) — побеждает более свежая, иначе слитый сброс мог бы снова
    // "воскресить" старое learned-состояние из облака. Без меток — старое поведение
    // (побеждает более прогрессированная запись), для совместимости со старыми данными.
    if (cur.updatedAt || rec.updatedAt) {
      out[id] = (rec.updatedAt || 0) > (cur.updatedAt || 0) ? rec : cur;
      return;
    }
    const score = r => (r.status === 'learned' ? 1000 : 0) + (r.streak || 0);
    out[id] = score(rec) > score(cur) ? rec : cur;
  });
  return out;
}
/* Дубли слов (db/aliases.js): прогресс с id-дубля переносится на основной id.
   Один раз: перенесённая запись помечается migrated (со свежей меткой времени),
   чтобы облачная копия дубля потом не "воскресила" старое состояние. */
function applyIdAliases(prog) {
  const A = (typeof window !== 'undefined' && window.ID_ALIASES) || {};
  const p = prog || {};
  let changed = false;
  const score = r => (r.status === 'learned' ? 1000 : 0) + (r.streak || 0) * 10 + (r.total || 0);
  Object.entries(A).forEach(([dup, canon]) => {
    const d = p[dup];
    if (!d || d.migrated) return;
    const c = p[canon], now = Date.now();
    if (!c || score(d) > score(c)) p[canon] = { ...d, updatedAt: Math.max(now, (c && c.updatedAt) || 0, d.updatedAt || 0) };
    p[dup] = { ...d, migrated: true, updatedAt: now };
    changed = true;
  });
  return changed;
}
function mergeArrayLog(a, b) {
  const seen = new Set(); const out = [];
  [...(a || []), ...(b || [])].forEach(entry => {
    const key = JSON.stringify(entry);
    if (!seen.has(key)) { seen.add(key); out.push(entry); }
  });
  return out;
}
function mergePet(a, b) {
  if (!a) return b || { clicks: 0, hatched: false };
  if (!b) return a;
  return { clicks: Math.max(a.clicks || 0, b.clicks || 0), hatched: !!(a.hatched || b.hatched) };
}
function mergeProgressBlobs(local, cloud) {
  local = local || {}; cloud = cloud || {};
  return {
    prog:  (m => (applyIdAliases(m), m))(mergeWordMap(local.prog, cloud.prog)),
    defer: mergeArrayLog(local.defer, cloud.defer).map(id => ((typeof window !== 'undefined' && window.ID_ALIASES) || {})[id] || id).filter((id, i, arr) => arr.indexOf(id) === i),
    mem:   mergeArrayLog(local.mem, cloud.mem),
    used:  mergeArrayLog(local.used, cloud.used),
    shop:  mergeArrayLog(local.shop, cloud.shop),
    exam:  mergeArrayLog(local.exam, cloud.exam),
    coins: Math.max(local.coins || 0, cloud.coins || 0),
    pet:   mergePet(local.pet, cloud.pet),
  };
}
function readLocalProgressBlob(userId) {
  const blob = {};
  PROGRESS_KEYS.forEach(kind => {
    const raw = localStorage.getItem(progressLocalKey(kind, userId));
    if (raw !== null) { try { blob[kind] = JSON.parse(raw); } catch { /* skip bad value */ } }
  });
  return blob;
}
function writeLocalProgressBlob(userId, blob) {
  PROGRESS_KEYS.forEach(kind => {
    if (blob[kind] !== undefined) localStorage.setItem(progressLocalKey(kind, userId), JSON.stringify(blob[kind]));
  });
}
async function fetchCloudProgressBlob(userId) {
  const { data, error } = await sb.from('progress').select('data').eq('user_id', userId).single();
  return (!error && data && data.data) ? data.data : {};
}

/* ── Общий рейтинг (дневные снимки, для линейного графика на главной) ── */
let _snapGrammarCol = true;   // false, если в таблице ещё нет grammar_count (migration_6 не выполнена)
async function upsertDailySnapshot(userId, displayName, learnedCount, grammarCount) {
  const today = new Date().toISOString().slice(0, 10);
  const row = { user_id: userId, display_name: displayName, snapshot_date: today, learned_count: learnedCount };
  if (_snapGrammarCol && grammarCount != null) {
    const res = await sb.from('progress_daily_snapshots').upsert({ ...row, grammar_count: grammarCount }, { onConflict: 'user_id,snapshot_date' });
    if (!res.error) return res;
    if (!/grammar_count/i.test(res.error.message || '')) return res;
    _snapGrammarCol = false;   // колонки нет — пишем по-старому
  }
  return sb.from('progress_daily_snapshots').upsert(row, { onConflict: 'user_id,snapshot_date' });
}

async function fetchAllDailySnapshots() {
  const { data, error } = await sb.from('progress_daily_snapshots').select('*').order('snapshot_date', { ascending: true });
  if (error) return [];
  return data;
}
async function fetchMySnapshotDates(userId) {
  const { data, error } = await sb.from('progress_daily_snapshots').select('snapshot_date').eq('user_id', userId).order('snapshot_date', { ascending: true });
  if (error) return [];
  return data.map(r => r.snapshot_date);
}
function syncDailySnapshotFromMerged(userId, merged) {
  if (typeof computeUserStats !== 'function') return;
  const name = (typeof currentUserProfile !== 'undefined' && currentUserProfile && currentUserProfile.display_name) || '';
  const g = typeof computeGrammarStats === 'function' ? computeGrammarStats(merged.prog).done : null;
  upsertDailySnapshot(userId, name, computeUserStats(merged.prog).learned, g);
}

/* ── Загрузка прогресса из облака при входе — сливается с тем, что уже
   есть локально (на случай если это устройство тоже успело что-то накопить),
   и сразу отправляет объединённый результат обратно в облако. ── */
async function pullCloudProgress(userId) {
  const cloudBlob = await fetchCloudProgressBlob(userId);
  const localBlob = readLocalProgressBlob(userId);
  const merged = mergeProgressBlobs(localBlob, cloudBlob);
  writeLocalProgressBlob(userId, merged);
  await sb.from('progress').update({ data: merged, updated_at: new Date().toISOString() }).eq('user_id', userId);
  syncDailySnapshotFromMerged(userId, merged);
}

/* ── Выгрузка прогресса из localStorage в облако (дебаунс) ──
   Перед записью подтягивает актуальное состояние облака и сливается с ним —
   это защищает от гонки, если другое устройство синхронизировалось только что. */
let _syncTimer = null;
function queueCloudSync() {
  if (!activeProfile) return;
  clearTimeout(_syncTimer);
  _syncTimer = setTimeout(() => pushCloudProgress(activeProfile), 1500);
}
async function pushCloudProgress(userId) {
  const localBlob = readLocalProgressBlob(userId);
  const cloudBlob = await fetchCloudProgressBlob(userId);
  const merged = mergeProgressBlobs(localBlob, cloudBlob);
  writeLocalProgressBlob(userId, merged);
  await sb.from('progress').update({ data: merged, updated_at: new Date().toISOString() }).eq('user_id', userId);
  syncDailySnapshotFromMerged(userId, merged);
}

/* Досрочно "проталкиваем" несинхронизированные изменения при сворачивании/закрытии
   вкладки — иначе последние секунды прогресса могут не успеть уйти в облако. */
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && activeProfile) {
    clearTimeout(_syncTimer);
    pushCloudProgress(activeProfile);
  }
});

/* ── Перенос старого локального аккаунта (имя + прогресс) в облачный ──
   Несколько человек могли раньше сидеть в одном браузере (общий компьютер),
   поэтому "забранность" отслеживается по каждому старому профилю отдельно,
   а не одним общим флагом на весь браузер. */
function getLegacyAccounts() {
  try { return JSON.parse(localStorage.getItem('dl_accounts') || '[]'); } catch { return []; }
}
function getClaimedLegacyIds() {
  try { return JSON.parse(localStorage.getItem('_legacy_claimed_ids') || '[]'); } catch { return []; }
}
function getUnclaimedLegacyAccounts() {
  const claimed = getClaimedLegacyIds();
  return getLegacyAccounts().filter(acc => !claimed.includes(acc.id));
}
function markLegacyClaimed(legacyId) {
  const ids = getClaimedLegacyIds();
  if (!ids.includes(legacyId)) { ids.push(legacyId); localStorage.setItem('_legacy_claimed_ids', JSON.stringify(ids)); }
}
function hasDecidedLegacyClaim(userId) {
  return !!localStorage.getItem('_legacy_decided_' + userId);
}
function markLegacyDecided(userId) {
  localStorage.setItem('_legacy_decided_' + userId, '1');
}
function legacyLocalKey(kind, legacyId) {
  return { prog: 'dl_prog_', defer: 'dl_defer_', coins: 'dl_coins_', shop: 'dl_shop_',
    used: 'dl_used_', pet: 'dl_pet_', mem: 'dl_mem_', exam: 'dl_exam_' }[kind] + legacyId;
}
async function claimLegacyAccount(newUserId, legacyId) {
  const legacyBlob = {};
  PROGRESS_KEYS.forEach(kind => {
    const raw = localStorage.getItem(legacyLocalKey(kind, legacyId));
    if (raw !== null) { try { legacyBlob[kind] = JSON.parse(raw); } catch { /* skip bad value */ } }
  });
  const cloudBlob = await fetchCloudProgressBlob(newUserId);
  const merged = mergeProgressBlobs(legacyBlob, cloudBlob);
  writeLocalProgressBlob(newUserId, merged);
  await sb.from('progress').update({ data: merged, updated_at: new Date().toISOString() }).eq('user_id', newUserId);
  syncDailySnapshotFromMerged(newUserId, merged);
  markLegacyClaimed(legacyId);
  markLegacyDecided(newUserId);
}

/* ── Админ-функции ── */
async function adminListProfiles() {
  const { data, error } = await sb.from('profiles').select('*').order('created_at', { ascending: false });
  if (error) return [];
  return data;
}
async function adminSetActive(userId, isActive) {
  return sb.from('profiles').update({ is_active: isActive, activated_at: isActive ? new Date().toISOString() : null }).eq('id', userId);
}
async function adminSetNote(userId, note) {
  return sb.from('profiles').update({ note }).eq('id', userId);
}
/* Продлить — всегда до 20 числа СЛЕДУЮЩЕГО месяца, считая от момента нажатия
   (единая дата отсечки для всех, легко держать в голове: "плати до 20-го"). */
function next20thFromNow() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 20, 23, 59, 59);
}
async function adminExtendAccess(userId) {
  return sb.from('profiles').update({ access_until: next20thFromNow().toISOString() }).eq('id', userId);
}
async function adminSetAccessUntil(userId, iso) {
  return sb.from('profiles').update({ access_until: iso }).eq('id', userId);
}
async function adminSetUnlimited(userId, on) {
  return sb.from('profiles').update({ unlimited: on }).eq('id', userId);
}
async function adminSetHiddenFromLeaderboard(userId, hidden) {
  return sb.from('profiles').update({ hide_from_leaderboard: hidden }).eq('id', userId);
}
/* id скрытых с графика (пустой список, если migration_7 ещё не выполнена) */
async function fetchLeaderboardHiddenIds() {
  try {
    const { data, error } = await sb.rpc('leaderboard_hidden_ids');
    if (error || !Array.isArray(data)) return [];
    return data.map(r => (typeof r === 'string' ? r : r.leaderboard_hidden_ids || r.id)).filter(Boolean);
  } catch { return []; }
}
async function adminListAllProgress() {
  const { data, error } = await sb.from('progress').select('user_id, data');
  if (error) return [];
  return data;
}
async function adminListRecentSnapshots(days) {
  const since = new Date(Date.now() - (days || 30) * 86400000).toISOString().slice(0, 10);
  const { data, error } = await sb.from('progress_daily_snapshots').select('user_id, snapshot_date').gte('snapshot_date', since);
  if (error) return [];
  return data;
}
async function adminListCategoryEvents(days) {
  const since = new Date(Date.now() - (days || 30) * 86400000).toISOString();
  const { data, error } = await sb.from('category_events').select('level, category').gte('created_at', since);
  if (error) return [];
  return data;
}

/* ── Учёт открытий темы (для аналитики популярности категорий) ── */
async function logCategoryEvent(level, category) {
  if (!activeProfile) return;
  try { await sb.from('category_events').insert({ user_id: activeProfile, level, category }); } catch { /* не критично */ }
}

/* ── Доступ по таймеру ──
   Аккаунты без access_until (созданные до введения пробного периода) остаются
   открытыми, пока админ явно не поставит им дату — чтобы никого не отключило задним числом. */
function hasAccess(profile) {
  if (!profile || !profile.is_active) return false;
  if (profile.unlimited || !profile.access_until) return true;
  return new Date(profile.access_until) > new Date();
}
function accessCountdown(accessUntil) {
  if (!accessUntil) return null;
  return new Date(accessUntil).getTime() - Date.now();
}
