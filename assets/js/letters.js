/* ══════════════════════════════════════════════════════════════
   ПИСЬМА (db/letters.js): две вкладки
     📖 Образцы  — задание + готовое письмо + полезные фразы
     ✍️ Написать — своё письмо по заданию, проверка по правилам экзамена
   Фильтры: тип (неофициальное / официальное), уровень, тема (или 🎲 случайная).
   Каждое «генерирование» подставляет новые имена (друг, адресат, автор).
   Прогресс: prog['br_<id>'] = { best, n, updatedAt }; черновик — localStorage.
══════════════════════════════════════════════════════════════ */
const BR = { tab: 'models', type: 'any', level: 'any', topic: 'random', inst: null, showRu: false, checked: null };

const BR_FRIENDS = [['Anna', 'f'], ['Lena', 'f'], ['Sophie', 'f'], ['Maria', 'f'], ['Julia', 'f'], ['Eva', 'f'], ['Clara', 'f'],
  ['Tom', 'm'], ['Max', 'm'], ['Paul', 'm'], ['Jonas', 'm'], ['Lukas', 'm'], ['David', 'm'], ['Felix', 'm']];
const BR_SURN = ['Becker', 'Schneider', 'Fischer', 'Weber', 'Wagner', 'Hoffmann', 'Schulz', 'Koch', 'Richter', 'Wolf', 'Neumann', 'Braun'];
const BR_ME = ['Alex', 'Sascha', 'Kim', 'Robin', 'Nika', 'Mika'];
const brPick = a => a[Math.floor(Math.random() * a.length)];
const brTasks = () => window.LETTER_TASKS || [];

function brFiltered() {
  return brTasks().filter(t => (BR.type === 'any' || t.type === BR.type) && (BR.level === 'any' || t.level === BR.level));
}

/* новое задание: тема + случайные имена */
function brGenerate(id) {
  const pool = brFiltered();
  let task = id ? brTasks().find(t => t.id === id) : null;
  if (!task) {
    const others = pool.filter(t => !BR.inst || t.id !== BR.inst.task.id);
    task = brPick(others.length ? others : pool);
  }
  if (!task) { BR.inst = null; return; }
  const fr = brPick(BR_FRIENDS), sn = brPick(BR_SURN), g = Math.random() < 0.5 ? 'f' : 'm', me = brPick(BR_ME), meS = brPick(BR_SURN.filter(s => s !== sn));
  const vars = {
    NAME: fr[0], LIEBE: fr[1] === 'f' ? 'Liebe' : 'Lieber',
    NN: (g === 'f' ? 'Frau ' : 'Herr ') + sn,
    ANREDE: task.to === 'org' ? 'Sehr geehrte Damen und Herren' : (g === 'f' ? 'Sehr geehrte Frau ' : 'Sehr geehrter Herr ') + sn,
    ICH: me, ICHV: `${me} ${meS}`,
  };
  BR.inst = { task, vars };
  BR.checked = null;
}
const brFill = (s, v) => String(s || '').replace(/\{(\w+)\}/g, (m, k) => v[k] != null ? v[k] : m);

/* ── черновики и прогресс ── */
const brDraftKey = id => 'dl_brdraft_' + P().key + '_' + id;
function brDraftLoad(id) { try { return localStorage.getItem(brDraftKey(id)) || ''; } catch { return ''; } }
function brDraftSave(id, txt) { try { if (txt) localStorage.setItem(brDraftKey(id), txt); else localStorage.removeItem(brDraftKey(id)); } catch {} }
function brProg(id) { return loadProg()['br_' + id] || null; }
function brSaveResult(id, pct) {
  const p = loadProg(), cur = p['br_' + id] || {};
  p['br_' + id] = { best: Math.max(cur.best || 0, pct), n: (cur.n || 0) + 1, updatedAt: Date.now() };
  saveProg(p);
}

/* ══════════════ экран ══════════════ */
function renderLettersScreen() {
  show('briefe');
  if (!BR.inst || !brFiltered().some(t => t.id === BR.inst.task.id)) brGenerate(BR.topic !== 'random' ? BR.topic : null);
  const body = $('br-body');
  const chip = (k, v, label, on) => `<button class="sc-chip ${on ? 'active' : ''}" data-k="${k}" data-v="${v}">${label}</button>`;
  const pool = brFiltered();
  const done = brTasks().filter(t => brProg(t.id)).length;
  body.innerHTML = `
    <div class="br-tabs">
      <button class="vlf-btn ${BR.tab === 'models' ? 'active' : ''}" data-tab="models">📖 ${lstr('Musterbriefe', 'Готовые письма', 'Готові листи')}</button>
      <button class="vlf-btn ${BR.tab === 'write' ? 'active' : ''}" data-tab="write">✍️ ${lstr('Selbst schreiben', 'Написать своё', 'Написати своє')}</button>
    </div>
    <div class="sg-intro">${BR.tab === 'models'
      ? lstr('Aufgaben wie in den echten Prüfungen (Goethe A1–B1, telc DTZ) mit Musterlösung und nützlichen Redemitteln.',
        'Задания как на настоящих экзаменах (Goethe A1–B1, telc DTZ) — с образцом письма и полезными фразами.', 'Завдання як на справжніх іспитах (Goethe A1–B1, telc DTZ) — зі зразком листа й корисними фразами.')
      : lstr('Schreib deinen Brief zur Aufgabe — die Prüfung zeigt Länge, Anrede, Gruß, du/Sie, alle Punkte, Kommas und Großschreibung. Danach siehst du den Musterbrief.',
        'Напиши своё письмо по заданию — проверка покажет длину, обращение, прощание, du/Sie, все ли пункты раскрыты, запятые и заглавные буквы. После проверки увидишь образец.',
        'Напиши свій лист за завданням — перевірка покаже довжину, звертання, прощання, du/Sie, чи розкрито всі пункти, коми й великі літери.')}
      <div class="sg-total">${lstr('Geschrieben', 'Написано писем по темам', 'Написано листів за темами')}: <b>${done} / ${brTasks().length}</b></div></div>
    <div class="sent-cfg br-cfg">
      <div class="sc-row"><span class="sc-label">${lstr('Art des Briefes', 'Тип письма', 'Тип листа')}</span><div class="sc-chips">
        ${chip('type', 'any', '🔀 ' + lstr('Egal', 'Любое', 'Будь-який'), BR.type === 'any')}
        ${chip('type', 'inf', '👋 ' + lstr('Informell (Freund)', 'Неофициальное (другу)', 'Неофіційний (другу)'), BR.type === 'inf')}
        ${chip('type', 'form', '🎩 ' + lstr('Formell', 'Официальное', 'Офіційний'), BR.type === 'form')}</div></div>
      <div class="sc-row"><span class="sc-label">${lstr('Niveau', 'Уровень', 'Рівень')}</span><div class="sc-chips">
        ${chip('level', 'any', lstr('Alle', 'Все', 'Усі'), BR.level === 'any')}
        ${['A1', 'A2', 'B1'].map(l => chip('level', l, l, BR.level === l)).join('')}</div></div>
      <div class="sc-row"><span class="sc-label">${lstr('Thema', 'Тема', 'Тема')}</span><div class="sc-chips">
        ${chip('topic', 'random', '🎲 ' + lstr('Zufällig', 'Случайная', 'Випадкова'), BR.topic === 'random')}
        ${pool.map(t => chip('topic', t.id, `${t.emoji} ${escapeHtml(lstr(t.de, t.ru, t.ru))}${brProg(t.id) ? ' ✓' : ''}`, BR.topic === t.id)).join('')}</div></div>
      <button class="btn-primary br-gen" id="br-gen">🎲 ${lstr('Neue Aufgabe generieren', 'Сгенерировать задание', 'Згенерувати завдання')}</button>
    </div>
    <div id="br-main"></div>`;
  body.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => { BR.tab = b.dataset.tab; BR.checked = null; renderLettersScreen(); }));
  body.querySelectorAll('.br-cfg .sc-chip').forEach(b => b.addEventListener('click', () => {
    const k = b.dataset.k, v = b.dataset.v;
    BR[k] = v;
    if (k === 'topic') brGenerate(v === 'random' ? null : v);
    else { if (BR.topic !== 'random' && !brFiltered().some(t => t.id === BR.topic)) BR.topic = 'random'; brGenerate(BR.topic === 'random' ? null : BR.topic); }
    renderLettersScreen();
  }));
  $('br-gen').addEventListener('click', () => { brGenerate(BR.topic === 'random' ? null : BR.topic); renderLettersScreen(); });
  brRenderMain();
}

function brTaskCard() {
  const { task, vars } = BR.inst;
  const typeL = task.type === 'inf' ? '👋 ' + lstr('informell · du', 'неофициальное · du', 'неофіційний · du') : '🎩 ' + lstr('formell · Sie', 'официальное · Sie', 'офіційний · Sie');
  return `<div class="br-task">
    <div class="br-badges"><span>${task.level}</span><span>${escapeHtml(task.exam)}</span><span>${typeL}</span><span>📏 ${task.words[0]}–${task.words[1]} ${lstr('Wörter', 'слов', 'слів')}</span></div>
    <h3 class="br-title">${task.emoji} ${escapeHtml(task.de)} <small>· ${escapeHtml(task.ru)}</small></h3>
    <div class="br-sit">${escapeHtml(brFill(task.sit_de, vars))}</div>
    <div class="br-sit-ru ${BR.showRu ? '' : 'hidden'}">${escapeHtml(brFill(task.sit_ru, vars))}</div>
    <ol class="br-points">${task.points.map(p => `<li><b>${escapeHtml(brFill(p.de, vars))}</b><span class="br-sit-ru ${BR.showRu ? '' : 'hidden'}"> — ${escapeHtml(brFill(p.ru, vars))}</span></li>`).join('')}</ol>
    <button class="btn-secondary br-ru-btn" id="br-ru">${BR.showRu ? lstr('Übersetzung ausblenden', 'Скрыть перевод', 'Сховати переклад') : lstr('Übersetzung zeigen', 'Показать перевод задания', 'Показати переклад')}</button>
  </div>`;
}
function brLetterHtml(text) { return `<div class="br-letter">${escapeHtml(text)}</div>`; }
function brPhrasesHtml(task) {
  const guide = (window.LETTER_GUIDE || {})[task.type];
  return `<div class="br-block"><h4>💬 ${lstr('Nützliche Redemittel', 'Полезные фразы', 'Корисні фрази')}</h4>
      <table class="rt br-ph">${task.phrases.map(p => `<tr><td><b>${escapeHtml(p[0])}</b></td><td>${escapeHtml(p[1])}</td></tr>`).join('')}</table></div>
    ${guide ? `<div class="br-block"><h4>🧱 ${lstr('Aufbau', 'Структура', 'Структура')}: ${escapeHtml(guide.ru)}</h4>
      <table class="rt br-ph">${guide.parts.map(r => `<tr><td><b>${r[0]}</b></td><td>${escapeHtml(r[1])}${r[2] ? `<div class="br-note">⚠️ ${escapeHtml(r[2])}</div>` : ''}</td></tr>`).join('')}</table></div>` : ''}`;
}

function brRenderMain() {
  const main = $('br-main');
  if (!BR.inst) { main.innerHTML = `<div class="loading-hint">${lstr('Keine Aufgaben für diese Auswahl.', 'Нет заданий для такого выбора.', 'Немає завдань для такого вибору.')}</div>`; return; }
  const { task, vars } = BR.inst;
  if (BR.tab === 'models') {
    main.innerHTML = brTaskCard() + `<div class="br-block"><h4>✉️ ${lstr('Musterbrief', 'Образец письма', 'Зразок листа')}</h4>${brLetterHtml(brFill(task.model, vars))}
        <div class="br-note">${lstr('Wörter', 'Слов', 'Слів')}: ${brWords(brFill(task.model, vars)).length}</div>
        <button class="btn-primary" id="br-try">✍️ ${lstr('Diese Aufgabe selbst schreiben', 'Написать это задание самому', 'Написати це завдання самому')}</button></div>` + brPhrasesHtml(task);
    $('br-try').addEventListener('click', () => { BR.tab = 'write'; BR.checked = null; renderLettersScreen(); });
  } else {
    const pr = brProg(task.id);
    main.innerHTML = brTaskCard() + `<div class="br-block">
        <h4>✍️ ${lstr('Dein Brief', 'Твоё письмо', 'Твій лист')}${pr ? ` <small class="br-best">${lstr('bestes Ergebnis', 'лучший результат', 'найкращий результат')}: ${pr.best}%</small>` : ''}</h4>
        <textarea id="br-text" class="br-text" spellcheck="false" placeholder="${task.type === 'inf' ? 'Liebe … , / Lieber … ,' : 'Sehr geehrte … ,'}"></textarea>
        <div class="br-bar"><span id="br-count"></span>
          <span class="br-uml">${['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(c => `<button class="uml-btn" data-char="${c}">${c}</button>`).join('')}</span></div>
        <div class="br-actions">
          <button class="btn-primary" id="br-check">✅ ${lstr('Prüfen', 'Проверить', 'Перевірити')}</button>
          <button class="btn-secondary" id="br-ai">🤖 ${lstr('Prompt für KI kopieren', 'Скопировать запрос для ИИ', 'Скопіювати запит для ШІ')}</button>
          <button class="btn-secondary" id="br-clear">🗑 ${lstr('Leeren', 'Очистить', 'Очистити')}</button>
        </div>
        <div id="br-result"></div></div>
      <details class="br-block br-help"><summary>💡 ${lstr('Hilfe: Redemittel und Aufbau', 'Подсказка: фразы и структура', 'Підказка: фрази й структура')}</summary>${brPhrasesHtml(task)}</details>`;
    const ta = $('br-text');
    ta.value = brDraftLoad(task.id);
    const upd = () => {
      const n = brWords(ta.value).length, [a, b] = task.words;
      $('br-count').innerHTML = `${lstr('Wörter', 'Слов', 'Слів')}: <b class="${n >= a && n <= b * 1.3 ? 'br-ok' : n ? 'br-warn' : ''}">${n}</b> / ${a}–${b}`;
    };
    ta.addEventListener('input', () => { brDraftSave(task.id, ta.value); upd(); });
    upd();
    main.querySelectorAll('.br-uml .uml-btn').forEach(b => b.addEventListener('click', () => {
      const s = ta.selectionStart, e = ta.selectionEnd;
      ta.value = ta.value.slice(0, s) + b.dataset.char + ta.value.slice(e);
      ta.selectionStart = ta.selectionEnd = s + 1; ta.focus(); ta.dispatchEvent(new Event('input'));
    }));
    $('br-check').addEventListener('click', () => brShowCheck(ta.value));
    $('br-clear').addEventListener('click', () => { if (!ta.value || confirm(lstr('Text löschen?', 'Удалить текст?', 'Видалити текст?'))) { ta.value = ''; ta.dispatchEvent(new Event('input')); $('br-result').innerHTML = ''; } });
    $('br-ai').addEventListener('click', () => brCopyPrompt(ta.value));
    if (BR.checked && BR.checked.id === task.id) brShowCheck(ta.value);
  }
  $('br-ru').addEventListener('click', () => { BR.showRu = !BR.showRu; brRenderMain(); });
}

/* ══════════════ проверка ══════════════ */
const brWords = s => String(s || '').match(/[A-Za-zÄÖÜäöüß]+(?:-[A-Za-zÄÖÜäöüß]+)*/g) || [];
let BR_NOUNS = null;
function brNouns() {
  if (BR_NOUNS) return BR_NOUNS;
  BR_NOUNS = new Set();
  const skip = new Set(['morgen', 'abend', 'mittag', 'recht', 'angst', 'schuld', 'leid', 'heim', 'teil', 'weg', 'hand', 'acht', 'mal', 'ende', 'gut', 'alt', 'neu']);
  (window.VOCAB_DATA || []).flatMap(c => c.words || [c]).forEach(w => {
    if (!/^(der|die|das)$/.test(w.article || '') || !w.word || /\s/.test(w.word)) return;
    const lw = w.word.toLowerCase();
    if (lw.length < 4 || skip.has(lw) || /(en|ern|eln)$/.test(lw)) return;   // не путать с глаголами (essen, leben …)
    BR_NOUNS.add(lw);
  });
  return BR_NOUNS;
}

function brCheck(task, vars, raw) {
  const text = String(raw || '').replace(/\r/g, '').trim();
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const low = text.toLowerCase();
  const inf = task.type === 'inf';
  const R = [];   // { st: 'ok'|'warn'|'bad'|'info', t, m }
  const add = (st, t, m) => R.push({ st, t, m });
  const words = brWords(text), n = words.length, [wa, wb] = task.words;

  /* 1. длина */
  if (n >= wa && n <= Math.round(wb * 1.3)) add('ok', 'Длина', `${n} слов — в норме (${wa}–${wb}).`);
  else if (n < wa) add(n >= wa * 0.7 ? 'warn' : 'bad', 'Длина', `${n} слов — мало, нужно ${wa}–${wb}. На экзамене слишком короткий текст теряет баллы.`);
  else add('warn', 'Длина', `${n} слов — многовато (нужно ${wa}–${wb}). Лишний текст = больше шансов на ошибки.`);

  /* 2. обращение */
  const first = lines[0] || '';
  const greetInf = /^(liebe|lieber|hallo|hi|hey|servus|moin|guten (tag|morgen|abend))\b/i, greetForm = /^(sehr geehrte|guten tag)/i;
  if (inf) {
    if (greetInf.test(first)) add('ok', 'Обращение', `«${first}» — подходит для письма другу.`);
    else if (greetForm.test(first)) add('warn', 'Обращение', 'Слишком официально для друга. Лучше: «Liebe Anna,» / «Lieber Tom,» / «Hallo Max,».');
    else add('bad', 'Обращение', 'Нет обращения в начале. Напиши: «Liebe …,» / «Lieber …,» / «Hallo …,».');
  } else {
    if (/^sehr geehrte herr\b/i.test(first)) add('bad', 'Обращение', 'К мужчине — «Sehr geehrter Herr …» (с -r).');
    else if (/^sehr geehrter frau\b/i.test(first)) add('bad', 'Обращение', 'К женщине — «Sehr geehrte Frau …» (без -r).');
    else if (/^sehr geehrte(r)? (frau|herr|damen und herren)/i.test(first) || /^guten tag/i.test(first)) add('ok', 'Обращение', `«${first}» — правильно.`);
    else if (greetInf.test(first)) add('bad', 'Обращение', 'В официальном письме нельзя «Hallo / Liebe». Нужно: «Sehr geehrte Frau …,» / «Sehr geehrter Herr …,» / «Sehr geehrte Damen und Herren,».');
    else add('bad', 'Обращение', 'Нет обращения. Начни с «Sehr geehrte Frau …,» / «Sehr geehrter Herr …,» / «Sehr geehrte Damen und Herren,».');
  }
  const hasGreet = greetInf.test(first) || greetForm.test(first);
  if (hasGreet && lines.length > 1 && !/,\s*$/.test(first) && !/[,!]/.test(first.slice(-1))) add('warn', 'Запятая после обращения', 'После обращения ставится запятая: «Liebe Anna,».');
  // после запятой — с маленькой буквы
  if (hasGreet && /,\s*$/.test(first) && lines[1]) {
    const w = (lines[1].match(/^[A-Za-zÄÖÜäöüß]+/) || [''])[0];
    const smallWords = /^(ich|wie|vielen|herzlichen|leider|heute|morgen|gestern|am|im|in|mit|seit|wir|es|das|hast|kannst|bitte|danke|entschuldige|schon|jetzt|endlich|nach|vor|hier|letzte|letzten|bald|hoffentlich|was|wann|wo|ist|bist|habe|möchte|darf|könnten|als|wegen|da|weil|zuerst|erst|sorry|tut|mein|meine|unser|unsere|ihr)$/i;
    if (w && /^[A-ZÄÖÜ]/.test(w) && smallWords.test(w) && w !== 'Sie' && w !== 'Ihr' && w !== 'Ihre')
      add('warn', 'Маленькая буква после обращения', `После «${first}» первое слово пишется с маленькой буквы: «${w.toLowerCase()} …» (кроме существительных и Sie).`);
  }

  /* 3. прощание и подпись */
  const tail = lines.slice(-3).join('\n');
  const closeInf = /(viele|liebe|herzliche|beste|schöne|sonnige) grüße|\blg\b|bis (bald|dann|gleich|morgen|später)|alles liebe|tschüss|ciao|dein[e]? /i;
  const closeForm = /(mit )?freundlichen grüßen|freundliche grüße|mit besten grüßen|viele grüße/i;
  if (inf) {
    if (/mit freundlichen grüßen/i.test(tail)) add('warn', 'Прощание', '«Mit freundlichen Grüßen» — для официальных писем. Другу: «Viele Grüße», «Liebe Grüße», «Bis bald».');
    else if (closeInf.test(tail)) add('ok', 'Прощание', 'Есть прощание — отлично.');
    else add(task.words[1] <= 35 ? 'warn' : 'bad', 'Прощание', 'Нет прощания. В конце: «Viele Grüße» / «Liebe Grüße» / «Bis bald» и имя.');
  } else {
    if (/mit freundlichen grüßen|freundliche grüße|mit besten grüßen/i.test(tail)) add('ok', 'Прощание', 'Официальное прощание — правильно.');
    else if (/viele grüße/i.test(tail)) add('warn', 'Прощание', '«Viele Grüße» допустимо (преподавателю), но надёжнее «Mit freundlichen Grüßen».');
    else if (closeInf.test(tail)) add('bad', 'Прощание', 'Слишком неформально. Нужно: «Mit freundlichen Grüßen» и имя с фамилией.');
    else add('bad', 'Прощание', 'Нет прощания. В конце: «Mit freundlichen Grüßen» и имя с фамилией.');
  }
  if (/grü(ß|ss)en?\s*,/i.test(tail) || /grüße\s*,/i.test(tail)) add('warn', 'Запятая после Grüße', 'В немецком после «Viele Grüße» / «Mit freundlichen Grüßen» запятая НЕ ставится.');
  const last = lines[lines.length - 1] || '';
  const lastIsClose = (inf ? closeInf : closeForm).test(last) && !/^(dein|deine)\s+\S+$/i.test(last);
  const sigOk = lines.length > 2 && !lastIsClose && brWords(last).length >= 1 && brWords(last).length <= 4 && /^[A-ZÄÖÜ]/.test(last) && !/[.?]$/.test(last);
  if (task.words[1] > 35 || lines.length > 2) {
    if (sigOk) add(!inf && brWords(last).length < 2 ? 'warn' : 'ok', 'Подпись', !inf && brWords(last).length < 2 ? 'В официальном письме подписывайся именем и фамилией.' : 'Письмо подписано.');
    else add('warn', 'Подпись', inf ? 'Подпиши письмо своим именем на отдельной строке.' : 'Подпиши письмо: имя и фамилия на отдельной строке после «Mit freundlichen Grüßen».');
  }

  /* 4. du / Sie — без строки обращения и подписи */
  const core = lines.length >= 3 ? lines.slice(1, -1).join(' ') : text;   // SMS одной строкой — проверяем весь текст
  const duRe = /\b(du|dich|dir|dein|deine|deinen|deinem|deiner|deines)\b/i;
  const sieMid = /[a-zäöüß,]\s+(Sie|Ihnen|Ihr|Ihre|Ihren|Ihrem|Ihrer)\b/;
  if (inf) {
    if (sieMid.test(core)) add('warn', 'du / Sie', 'Похоже, ты обращаешься на «Sie». Другу пиши на du: du, dich, dir, dein.');
    else if (duRe.test(core)) add('ok', 'du / Sie', 'Обращение на du — правильно для письма другу.');
    else add('warn', 'du / Sie', 'Нет обращения к другу (du, dich, dir, dein). Задай вопрос или обратись к нему лично: «Hast du Zeit?».');
  } else {
    const m = core.match(duRe);
    if (m) add('bad', 'du / Sie', `В официальном письме нельзя «${m[0]}». Используй Sie / Ihnen / Ihr.`);
    else if (/\b(Sie|Ihnen|Ihr|Ihre|Ihren|Ihrem|Ihrer)\b/.test(core)) add('ok', 'du / Sie', 'Вежливое обращение на Sie — правильно.');
    else if (/[a-zäöüß,]\s+(ihnen|ihren|ihrem)\b/.test(core)) add('warn', 'du / Sie', 'Вежливые Sie / Ihnen / Ihr пишутся с большой буквы.');
    else add('info', 'du / Sie', 'Обращения к адресату (Sie, Ihnen) нет — можно добавить вежливую просьбу: «Könnten Sie …?».');
  }

  /* 5. пункты задания */
  task.points.forEach((p, i) => {
    const hit = p.kw.some(k => low.includes(k.toLowerCase()));
    add(hit ? 'ok' : 'warn', `Пункт ${i + 1}: ${brFill(p.de, vars)}`, hit ? 'Похоже, раскрыт.' : 'Не нашёл слов по этому пункту — проверь, ответил(а) ли ты на него. Каждый пропущенный пункт на экзамене стоит баллов.');
  });

  /* 6. запятые перед придаточными */
  const noComma = [];
  const reSub = /([A-Za-zÄÖÜäöüß]+)\s+(weil|dass|ob|obwohl|damit|wenn|nachdem|bevor)\b/g;
  let mm;
  while ((mm = reSub.exec(text))) {
    if (/^(und|oder|aber|denn|sondern|auch|nur|so|als|erst|selbst|immer|gerade|vor|außer)$/i.test(mm[1])) continue;
    noComma.push(`${mm[1]} ${mm[2]}`);
  }
  if (noComma.length) add('warn', 'Запятые', `Перед weil / dass / wenn / ob … нужна запятая: ${[...new Set(noComma)].slice(0, 4).map(s => '«' + s.replace(' ', ', ') + '»').join(', ')}.`);
  else if (/\b(weil|dass|wenn|ob|obwohl|damit)\b/i.test(text)) add('ok', 'Запятые', 'Перед придаточными запятые на месте.');

  /* 7. заглавные буквы */
  const caps = [];
  const reStart = /[a-zäöüß]{2,}[.!?]\s+([a-zäöüß][a-zäöüß]*)/g;
  while ((mm = reStart.exec(text))) caps.push(mm[1]);
  if (caps.length) add('warn', 'Начало предложения', `После точки — с большой буквы: ${[...new Set(caps)].slice(0, 4).map(w => '«' + w.charAt(0).toUpperCase() + w.slice(1) + '»').join(', ')}.`);
  if (/[a-zäöüß,]\s+Ich\b/.test(core)) add('warn', '«ich»', 'В середине предложения «ich» пишется с маленькой буквы.');
  const nouns = brNouns(), lowNouns = [];
  (core.match(/(?<=[\s,(„"])[a-zäöüß]{4,}\b/g) || []).forEach(w => { if (nouns.has(w)) lowNouns.push(w); });
  if (lowNouns.length) add('warn', 'Существительные', `Существительные пишутся с большой буквы: ${[...new Set(lowNouns)].slice(0, 5).map(w => '«' + w.charAt(0).toUpperCase() + w.slice(1) + '»').join(', ')}.`);

  /* 8. стиль: связки и однообразное начало */
  const sentences = core.split(/(?<=[.!?])\s+/).filter(s => brWords(s).length > 1);
  const ichStarts = sentences.filter(s => /^ich\b/i.test(s)).length;
  if (sentences.length >= 4 && ichStarts >= 3 && ichStarts / sentences.length >= 0.5)
    add('info', 'Стиль', `${ichStarts} предложений начинаются с «Ich». Разнообразь: «Leider …», «Heute …», «Deshalb …», «Am Samstag …» (глагол остаётся на 2-м месте).`);
  const conns = ['aber', 'denn', 'weil', 'dass', 'wenn', 'deshalb', 'dann', 'trotzdem', 'außerdem', 'damit', 'ob', 'oder', 'danach', 'zuerst', 'leider', 'deswegen', 'obwohl'];
  const used = conns.filter(c => new RegExp(`\\b${c}\\b`, 'i').test(text));
  const need = { A1: 1, A2: 2, B1: 3 }[task.level] || 2;
  if (used.length >= need) add('ok', 'Связность', `Связки: ${used.join(', ')} — хорошо.`);
  else add('info', 'Связность', `Добавь связки (${need}+ для ${task.level}): aber, denn, weil, deshalb, dann, außerdem, trotzdem …`);

  return R;
}

function brShowCheck(raw) {
  const { task, vars } = BR.inst;
  if (!brWords(raw).length) { $('br-result').innerHTML = `<div class="br-note">${lstr('Schreib zuerst deinen Brief.', 'Сначала напиши письмо.', 'Спершу напиши лист.')}</div>`; return; }
  const R = brCheck(task, vars, raw);
  const scored = R.filter(r => r.st !== 'info');
  const pts = scored.reduce((s, r) => s + (r.st === 'ok' ? 1 : r.st === 'warn' ? 0.5 : 0), 0);
  const pct = scored.length ? Math.round(pts / scored.length * 100) : 0;
  const firstTime = !BR.checked || BR.checked.id !== task.id;
  BR.checked = { id: task.id };
  if (firstTime) brSaveResult(task.id, pct);
  const ic = { ok: '✅', warn: '⚠️', bad: '❌', info: '💡' };
  const verdict = pct >= 85 ? lstr('Sehr gut!', 'Отлично!', 'Чудово!') : pct >= 65 ? lstr('Gut, aber verbessere die Punkte unten.', 'Хорошо, но поправь пункты ниже.', 'Добре, але виправ пункти нижче.') : lstr('Es fehlt noch einiges.', 'Пока многого не хватает — смотри подсказки.', 'Поки багато чого бракує.');
  $('br-result').innerHTML = `
    <div class="br-score"><b>${pct}%</b> · ${verdict}</div>
    <ul class="br-checks">${R.map(r => `<li class="br-${r.st}"><span>${ic[r.st]}</span><div><b>${escapeHtml(r.t)}</b><div>${escapeHtml(r.m)}</div></div></li>`).join('')}</ul>
    <div class="br-note">${lstr('Die automatische Prüfung findet Form- und Strukturfehler, aber nicht jeden Grammatikfehler. Für eine genaue Korrektur: „Prompt für KI kopieren“.',
      'Автоматическая проверка ловит ошибки формы и структуры, но не каждую грамматическую ошибку (окончания, порядок слов). Для точной правки — кнопка «Скопировать запрос для ИИ».',
      'Автоматична перевірка знаходить помилки форми й структури, але не кожну граматичну помилку.')}</div>
    <div class="br-block br-compare"><h4>✉️ ${lstr('Zum Vergleich: Musterbrief', 'Сравни с образцом', 'Порівняй зі зразком')}</h4>${brLetterHtml(brFill(task.model, vars))}</div>
    <div class="br-actions"><button class="btn-primary" id="br-next">🎲 ${lstr('Nächste Aufgabe', 'Следующее задание', 'Наступне завдання')}</button></div>`;
  $('br-next').addEventListener('click', () => { brGenerate(BR.topic === 'random' ? null : BR.topic); renderLettersScreen(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

/* запрос для любого ИИ-чата: задание + письмо + что сделать */
function brCopyPrompt(raw) {
  const { task, vars } = BR.inst;
  const txt = `Проверь моё письмо на немецком как экзаменатор (${task.exam}, уровень ${task.level}, ${task.type === 'inf' ? 'неофициальное письмо, на du' : 'официальное письмо, на Sie'}, ${task.words[0]}–${task.words[1]} слов).

Задание: ${brFill(task.sit_de, vars)}
Пункты:
${task.points.map((p, i) => `${i + 1}. ${brFill(p.de, vars)}`).join('\n')}

Моё письмо:
"""
${String(raw || '').trim() || '(пока пусто)'}
"""

Пожалуйста:
1) найди все ошибки (грамматика, порядок слов, окончания, орфография, стиль) и объясни каждую по-русски;
2) оцени, раскрыты ли все пункты задания и подходит ли стиль;
3) поставь оценку по критериям экзамена;
4) дай исправленную версию моего письма, сохранив мои мысли.`;
  const done = () => { const b = $('br-ai'); if (b) { const o = b.innerHTML; b.innerHTML = '✓ ' + lstr('Kopiert', 'Скопировано — вставь в любой ИИ-чат', 'Скопійовано'); setTimeout(() => { if ($('br-ai')) $('br-ai').innerHTML = o; }, 2500); } };
  const fallback = () => { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch {} ta.remove(); done(); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, fallback); else fallback();
}
