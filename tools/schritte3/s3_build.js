// s3_words.txt + s3_tr.txt (+ roles_s3.json, overrides_s3.txt) → db/textbook_a2.js
// Учебник «Schritte international Neu 3» (A2.1), слова по темам.
// Слова, которые уже есть на сайте, в учебнике A1 или в «Моих записях», берутся оттуда (тот же id) — прогресс общий.
//   node s3_build.js        — собрать
//   node s3_build.js --new  — показать новые слова без перевода
//   node s3_build.js --ex   — ex_s3.json для spaCy
const fs = require('fs'), path = require('path');
const SP = __dirname, ROOT = path.join(__dirname, '..', '..');
global.window = { THEMES_DATA: [], EXAMPLES: {}, TRANSLATIONS_UK: {}, EXAMPLE_ROLES: {} };
for (const f of ['words.js', 'irregular_verbs.js', 'textbook.js']) require(path.join(ROOT, 'db', f));
// на сайте textbook_a2.js грузится ДО notizen.js: общие с «Моими записями» слова кладём в файл целиком (тот же id)
const base = new Set(); window.VOCAB_DATA.forEach(c => c.words.forEach(w => base.add(w.id)));
const EX0 = { ...window.EXAMPLES }, UK0 = { ...window.TRANSLATIONS_UK }, ROLES0 = { ...window.EXAMPLE_ROLES };
require(path.join(ROOT, 'db', 'notizen.js'));
const nzById = {}; window.VOCAB_DATA.forEach(c => c.words.forEach(w => { if (!base.has(w.id)) nzById[w.id] = w; }));
const norm = s => s.toLowerCase().replace(/^sich\s+/, '').replace(/[.!?]/g, '').replace(/ß/g, 'ss').trim();
const idx = new Map(), known = new Set();
const cats = window.VOCAB_DATA.slice().sort((a, b) => (a.mode === 'conjugation') - (b.mode === 'conjugation') || a.level.localeCompare(b.level));
for (const c of cats) for (const w of c.words) {
  known.add(w.id);
  const art = w.article && w.article !== '-' ? w.article : '';
  for (const k of [norm(w.word) + '|' + art, norm(w.word) + '|*']) if (!idx.has(k)) idx.set(k, w);
}
// темы и слова
const topics = [], entries = [], seen = new Set();
let T = null;
for (const l of fs.readFileSync(path.join(SP, 's3_words.txt'), 'utf8').split(/\r?\n/)) {
  if (!l.trim() || l.startsWith('#')) continue;
  if (l.startsWith('@')) {
    const [id, emoji, de, ru, uk] = l.slice(1).split('|');
    T = { id, emoji, de, ru, uk, pos: { n: [], v: [], a: [], o: [] } }; topics.push(T); continue;
  }
  const [pos, art, word, ex] = l.split('|');
  const key = (art ? art + ' ' : '') + word;
  if (seen.has(key)) throw new Error('word twice: ' + key);
  seen.add(key);
  entries.push({ T, pos, art, word, ex, key });
}
// переводы, алиасы, @new (отдельное слово, даже если такое написание уже есть)
const alias = {}, tr = {}, forceNew = new Set();
for (const l of fs.readFileSync(path.join(SP, 's3_tr.txt'), 'utf8').split(/\r?\n/)) {
  if (!l.trim() || l.startsWith('#')) continue;
  if (l.startsWith('@new ')) { forceNew.add(l.slice(5).trim()); continue; }
  if (l.startsWith('@alias ')) { const [k, id] = l.slice(7).split('='); alias[k] = id; continue; }
  const [k, ru, uk, exRu] = l.split('|');
  if (tr[k]) throw new Error('dup tr ' + k);
  tr[k] = { ru, uk, exRu };
}
for (const id of Object.values(alias)) if (!known.has(id)) throw new Error('alias id missing ' + id);
const refOf = e => {
  if (forceNew.has(e.key)) return null;
  if (alias[e.key]) return alias[e.key];
  const h = idx.get(norm(e.word) + '|' + (e.art || '')) || (!e.art && idx.get(norm(e.word) + '|*'));
  return h ? h.id : null;
};
if (process.argv.includes('--new')) {
  const un = entries.filter(e => !refOf(e) && !tr[e.key]);
  console.log('total', entries.length, 'shared', entries.filter(refOf).length, 'without tr', un.length);
  console.log(un.map(e => e.key + ' | ' + e.ex).join('\n'));
  process.exit(0);
}
const IDS_FILE = path.join(SP, 's3_ids.json');
const IDS = fs.existsSync(IDS_FILE) ? JSON.parse(fs.readFileSync(IDS_FILE, 'utf8')) : {};
let seq = Math.max(0, ...Object.values(IDS).map(v => +v.slice(4)));
const NEW = {}, EX = {}, UK = {}, NZROLES = {}, missing = [], where = {};
for (const e of entries) {
  let id = refOf(e);
  if (!id) {
    const t = tr[e.key];
    if (!t) { missing.push(e.key); continue; }
    id = IDS[e.key] || ('tb3_' + String(++seq).padStart(3, '0'));
    IDS[e.key] = id;
    NEW[id] = { id, article: e.art || '-', word: e.word, translation: t.ru };
    UK[id] = t.uk;
    if (e.ex && t.exRu) EX[id] = [e.ex, t.exRu];
  }
  if (!NEW[id] && nzById[id]) {
    const w = nzById[id];
    NEW[id] = { id, article: w.article, word: w.word, translation: w.translation };
    if (window.TRANSLATIONS_UK[id]) UK[id] = window.TRANSLATIONS_UK[id];
    if (window.EXAMPLES[id]) EX[id] = window.EXAMPLES[id];
    if (window.EXAMPLE_ROLES[id]) NZROLES[id] = window.EXAMPLE_ROLES[id];
  }
  if (where[id] && where[id] !== e.T.id) throw new Error('id in two topics: ' + e.key + ' (' + id + ') ' + where[id] + '/' + e.T.id);
  where[id] = e.T.id;
  if (!Object.values(e.T.pos).some(b => b.includes(id))) e.T.pos[e.pos].push(id);
}
if (missing.length) { console.log('MISSING TR:\n' + missing.join('\n')); process.exit(1); }
const unused = Object.keys(tr).filter(k => !IDS[k]);
const nzShared = Object.keys(NEW).filter(id => !id.startsWith('tb3_'));
if (unused.length) console.log('unused translations:', unused.join(', '));
if (process.argv.includes('--ex')) {
  fs.writeFileSync(path.join(SP, 'ex_s3.json'), JSON.stringify(Object.fromEntries(Object.entries(EX).filter(([k]) => !nzShared.includes(k)).map(([k, v]) => [k, v[0]]))));
  console.log('ex', Object.keys(EX).length); process.exit(0);
}
// члены предложения: spaCy + ручные правки
const ROLES = {};
{
  const autoF = path.join(SP, 'roles_s3.json'), ovF = path.join(SP, 'overrides_s3.txt');
  const auto = fs.existsSync(autoF) ? JSON.parse(fs.readFileSync(autoF, 'utf8')) : {};
  const ov = {};
  if (fs.existsSync(ovF)) for (const line of fs.readFileSync(ovF, 'utf8').split(/\r?\n/)) {
    if (!line.trim()) continue;
    const i = line.indexOf(' | '), id = line.slice(0, i), marked = line.slice(i + 3);
    let plain = '', spans = [], pos = 0, m; const re = /\[([SVADEZ]) ([^\]]+)\]/g;
    while ((m = re.exec(marked))) { plain += marked.slice(pos, m.index); spans.push([plain.length, plain.length + m[2].length, m[1]]); plain += m[2]; pos = m.index + m[0].length; }
    plain += marked.slice(pos);
    if (!EX[id]) throw new Error('override for unknown ' + id);
    if (plain !== EX[id][0]) throw new Error('text mismatch ' + id);
    ov[id] = spans;
  }
  Object.assign(ROLES, NZROLES);
  for (const id of Object.keys(EX)) {
    if (NZROLES[id]) continue;
    const sp = ov[id] || auto[id] || [];
    if (sp.length) ROLES[id] = sp.map(([a, b, r]) => r + a + ',' + b).join(' ');
  }
}
const POSN = { n: ['Substantive', 'существительные', 'іменники'], v: ['Verben', 'глаголы', 'дієслова'],
               a: ['Adjektive', 'прилагательные', 'прикметники'], o: ['Sonstiges', 'другое', 'інше'] };
const TOPIC_DATA = topics.map(T => ({ id: T.id, de: T.de, ru: T.ru, uk: T.uk, emoji: T.emoji,
  pos: Object.fromEntries(Object.entries(T.pos).filter(([, ids]) => ids.length)) }));
const out = `/* ══════════════════════════════════════════════════════════════
   УЧЕБНИК «Schritte international Neu 3» (A2.1) — Lernwortschatz, уроки 1–7, по темам.
   Слова, которые уже есть на сайте, в учебнике A1 или в «Моих записях», берутся ОТТУДА ЖЕ
   (тот же id): прогресс общий, в общем счёте каждое слово считается один раз.
   Новые слова — id tb3_NNN. Генерируется tools/schritte3/s3_build.js — правки вносить там.
══════════════════════════════════════════════════════════════ */
(function () {
  const NEW = ${JSON.stringify(NEW).replace(/\},"/g, '},\n    "')};
  const TOPICS = ${JSON.stringify(TOPIC_DATA).replace(/\},\{"id"/g, '},\n    {"id"')};
  const EX = ${JSON.stringify(EX).replace(/\],"/g, '],\n    "')};
  const UK = ${JSON.stringify(UK).replace(/","/g, '",\n    "')};
  const ROLES = ${JSON.stringify(ROLES).replace(/","/g, '",\n    "')};
  const POSN = ${JSON.stringify(POSN)};

  const byId = {};
  (window.VOCAB_DATA || []).forEach(c => (c.words || []).forEach(w => { if (!byId[w.id]) byId[w.id] = w; }));
  const keys = [];
  TOPICS.forEach(T => {
    keys.push('schritte3_' + T.id);
    Object.entries(T.pos).forEach(([p, ids]) => {
      const words = ids.map(id => NEW[id] || byId[id]).filter(Boolean);
      if (!words.length) return;
      window.VOCAB_DATA.push({
        level: 'A2', category: 'schritte3_' + T.id + '_' + p, textbook: true, group: T.id,
        name: T.de + ' (' + POSN[p][0] + ')', name_ru: T.ru + ' — ' + POSN[p][1], name_uk: T.uk + ' — ' + POSN[p][2],
        group_title: [T.de, T.ru, T.uk], emoji: T.emoji, words,
      });
    });
  });
  window.THEMES_DATA = window.THEMES_DATA || [];
  const at = window.THEMES_DATA.findIndex(t => t.id === 'schritte') + 1;   // сразу после учебника A1
  window.THEMES_DATA.splice(at, 0, { id: 'schritte3', emoji: '📗', de: 'Lehrbuch A2.1 (Schritte 3)', ru: 'Учебник A2.1 (Schritte 3)',
    uk: 'Підручник A2.1 (Schritte 3)', cats: keys, textbook: true, idPrefix: 'tb3_',
    note: ['Wörter aus „Schritte international Neu 3“ (A2.1, Lektion 1–7), nach Themen sortiert.',
           'Слова из «Schritte international Neu 3» (A2.1, уроки 1–7), разложены по темам.',
           'Слова з «Schritte international Neu 3» (A2.1, уроки 1–7), розкладені за темами.'] });
  window.EXAMPLES = Object.assign(window.EXAMPLES || {}, EX);
  window.TRANSLATIONS_UK = Object.assign(window.TRANSLATIONS_UK || {}, UK);
  window.EXAMPLE_ROLES = Object.assign(window.EXAMPLE_ROLES || {}, ROLES);
})();
`;
fs.writeFileSync(path.join(ROOT, 'db', 'textbook_a2.js'), out);
fs.writeFileSync(IDS_FILE, JSON.stringify(IDS, null, 1));
const shared = new Set(Object.keys(where).filter(id => !id.startsWith('tb3_')));
console.log('new words', Object.keys(NEW).length - nzShared.length, '| shared', shared.size, '| examples', Object.keys(EX).length,
  '| topics', topics.length, '| KB', (out.length / 1024).toFixed(0));
