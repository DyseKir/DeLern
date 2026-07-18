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
    options: { data: { display_name: displayName } }
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

/* ── Загрузка прогресса из облака в localStorage (при входе) ── */
async function pullCloudProgress(userId) {
  const { data, error } = await sb.from('progress').select('data').eq('user_id', userId).single();
  if (error || !data || !data.data) return;
  const blob = data.data;
  PROGRESS_KEYS.forEach(kind => {
    if (blob[kind] !== undefined) {
      localStorage.setItem(progressLocalKey(kind, userId), JSON.stringify(blob[kind]));
    }
  });
}

/* ── Выгрузка прогресса из localStorage в облако (дебаунс) ── */
let _syncTimer = null;
function queueCloudSync() {
  if (!activeProfile) return;
  clearTimeout(_syncTimer);
  _syncTimer = setTimeout(() => pushCloudProgress(activeProfile), 1500);
}
async function pushCloudProgress(userId) {
  const blob = {};
  PROGRESS_KEYS.forEach(kind => {
    const raw = localStorage.getItem(progressLocalKey(kind, userId));
    if (raw !== null) { try { blob[kind] = JSON.parse(raw); } catch { /* skip bad value */ } }
  });
  await sb.from('progress').update({ data: blob, updated_at: new Date().toISOString() }).eq('user_id', userId);
}

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
  const blob = {};
  PROGRESS_KEYS.forEach(kind => {
    const raw = localStorage.getItem(legacyLocalKey(kind, legacyId));
    if (raw !== null) {
      try { blob[kind] = JSON.parse(raw); } catch { /* skip bad value */ }
      localStorage.setItem(progressLocalKey(kind, newUserId), raw);
    }
  });
  await sb.from('progress').update({ data: blob, updated_at: new Date().toISOString() }).eq('user_id', newUserId);
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
