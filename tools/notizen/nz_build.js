// nz_words.txt + nz_match.json + nz_tr.txt (+ roles_nz.json, overrides_nz.txt) → db/notizen.js
// Слова, которые уже есть на сайте или в учебнике, берутся оттуда (тот же id) — прогресс общий.
const fs = require('fs'), path = require('path');
const SP = __dirname, ROOT = path.join(__dirname, '..', '..');
global.window = { THEMES_DATA: [], EXAMPLES: {}, TRANSLATIONS_UK: {}, EXAMPLE_ROLES: {} };
require(path.join(ROOT, 'db', 'words.js'));
require(path.join(ROOT, 'db', 'textbook.js'));
const known = new Set(); window.VOCAB_DATA.forEach(c => c.words.forEach(w => known.add(w.id)));

// темы
const topics = [];
for (const l of fs.readFileSync(path.join(SP, 'nz_words.txt'), 'utf8').split(/\r?\n/)) {
  if (!l.startsWith('@')) continue;
  const [id, emoji, de, ru, uk] = l.slice(1).split('|');
  topics.push({ id, emoji, de, ru, uk, pos: { n: [], v: [], a: [], o: [] } });
}
const entries = JSON.parse(fs.readFileSync(path.join(SP, 'nz_match.json'), 'utf8'));

// переводы и алиасы
const alias = {}, tr = {};
for (const l of fs.readFileSync(path.join(SP, 'nz_tr.txt'), 'utf8').split(/\r?\n/)) {
  if (!l.trim()) continue;
  if (l.startsWith('@alias ')) { const [k, id] = l.slice(7).split('='); alias[k] = id; continue; }
  const [k, ru, uk, exDe, exRu] = l.split('|');
  if (tr[k]) throw new Error('dup tr ' + k);
  tr[k] = { ru, uk, exDe, exRu };
}
for (const id of Object.values(alias)) if (!known.has(id)) throw new Error('alias id missing ' + id);

// постоянная таблица ключ → id: id не сдвигаются при вставке слов
const IDS_FILE = path.join(SP, 'nz_ids.json');
const IDS = fs.existsSync(IDS_FILE) ? JSON.parse(fs.readFileSync(IDS_FILE, 'utf8')) : {};
let seq = Math.max(0, ...Object.values(IDS).map(v => +v.slice(3)));
const NEW = {}, EX = {}, UK = {}, missing = [], where = {};
for (const e of entries) {
  const key = (e.art ? e.art + ' ' : '') + e.word;
  let id = alias[key] || e.ref;
  if (!id) {
    const t = tr[key];
    if (!t) { missing.push(key); continue; }
    id = IDS[key] || ('nz_' + String(++seq).padStart(3, '0'));
    IDS[key] = id;
    NEW[id] = { id, article: e.art || '-', word: e.word, translation: t.ru };
    UK[id] = t.uk;
    if (t.exDe) EX[id] = [t.exDe, t.exRu];
  }
  if (where[id] && where[id] !== e.topic) throw new Error('id in two topics: ' + key);
  where[id] = e.topic;
  const T = topics.find(x => x.id === e.topic);
  if (!Object.values(T.pos).some(b => b.includes(id))) T.pos[e.pos].push(id);
}
if (missing.length) { console.log('MISSING TR:\n' + missing.join('\n')); process.exit(1); }
const unused = Object.keys(tr).filter(k => !IDS[k]);
if (unused.length) console.log('unused translations:', unused.join(', '));

// члены предложения: spaCy + ручные правки
const ROLES = {};
{
  const autoF = path.join(SP, 'roles_nz.json'), ovF = path.join(SP, 'overrides_nz.txt');
  const auto = fs.existsSync(autoF) ? JSON.parse(fs.readFileSync(autoF, 'utf8')) : {};
  const ov = {};
  if (fs.existsSync(ovF)) for (const line of fs.readFileSync(ovF, 'utf8').split(/\r?\n/)) {
    if (!line.trim()) continue;
    const i = line.indexOf(' | '), id = line.slice(0, i), marked = line.slice(i + 3);
    let plain = '', spans = [], pos = 0, m; const re = /\[([SVADEZ]) ([^\]]+)\]/g;
    while ((m = re.exec(marked))) { plain += marked.slice(pos, m.index); spans.push([plain.length, plain.length + m[2].length, m[1]]); plain += m[2]; pos = m.index + m[0].length; }
    plain += marked.slice(pos);
    if (!EX[id]) throw new Error('override for unknown ' + id);
    if (plain !== EX[id][0]) throw new Error('text mismatch ' + id + ': ' + plain + ' <> ' + EX[id][0]);
    ov[id] = spans;
  }
  for (const id of Object.keys(EX)) {
    const sp = ov[id] || auto[id] || [];
    if (sp.length) ROLES[id] = sp.map(([a, b, r]) => r + a + ',' + b).join(' ');
  }
}
const POSN = { n: ['Substantive', 'существительные', 'іменники'], v: ['Verben', 'глаголы', 'дієслова'],
               a: ['Adjektive', 'прилагательные', 'прикметники'], o: ['Sonstiges', 'другое', 'інше'] };
const TOPIC_DATA = topics.map(T => ({ id: T.id, de: T.de, ru: T.ru, uk: T.uk, emoji: T.emoji,
  pos: Object.fromEntries(Object.entries(T.pos).filter(([, ids]) => ids.length)) }));
const j = (o, sep) => JSON.stringify(o).replace(sep, m => m[0] + ',\n    ' + m.slice(2));

const out = `/* ══════════════════════════════════════════════════════════════
   МОИ ЗАПИСИ — слова из тетради, листов с курса, истории словаря и картинок.
   Слова, которые уже есть на сайте или в учебнике, берутся ОТТУДА ЖЕ (тот же id):
   прогресс общий, в общем счёте каждое слово считается один раз.
   Новые слова — id nz_NNN. Генерируется tools/notizen/nz_build.js — правки вносить там.
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
    keys.push('notiz_' + T.id);
    Object.entries(T.pos).forEach(([p, ids]) => {
      const words = ids.map(id => NEW[id] || byId[id]).filter(Boolean);
      if (!words.length) return;
      window.VOCAB_DATA.push({
        level: 'A1', category: 'notiz_' + T.id + '_' + p, textbook: true, group: T.id,
        name: T.de + ' (' + POSN[p][0] + ')', name_ru: T.ru + ' — ' + POSN[p][1], name_uk: T.uk + ' — ' + POSN[p][2],
        group_title: [T.de, T.ru, T.uk], emoji: T.emoji, words,
      });
    });
  });
  window.THEMES_DATA = window.THEMES_DATA || [];
  const at = window.THEMES_DATA.findIndex(t => t.id === 'schritte') + 1;   // сразу после учебника
  window.THEMES_DATA.splice(at, 0, { id: 'notizen', emoji: '📝', de: 'Meine Notizen', ru: 'Мои записи', uk: 'Мої записи',
    cats: keys, textbook: true, idPrefix: 'nz_',
    note: ['Wörter aus deinen Notizen, Kursblättern und dem Wörterbuch, nach Themen sortiert.',
           'Слова из твоей тетради, листов с курса, словаря и картинок, разложены по темам.',
           'Слова з твого зошита, аркушів з курсу, словника і картинок, розкладені за темами.'] });
  window.EXAMPLES = Object.assign(window.EXAMPLES || {}, EX);
  window.TRANSLATIONS_UK = Object.assign(window.TRANSLATIONS_UK || {}, UK);
  window.EXAMPLE_ROLES = Object.assign(window.EXAMPLE_ROLES || {}, ROLES);
})();
`;
fs.writeFileSync(path.join(ROOT, 'db', 'notizen.js'), out);
fs.writeFileSync(IDS_FILE, JSON.stringify(IDS, null, 1));
const shared = new Set(); topics.forEach(T => Object.values(T.pos).flat().forEach(id => { if (!NEW[id]) shared.add(id); }));
console.log('new', Object.keys(NEW).length, '| shared', shared.size, '| examples', Object.keys(EX).length, '| roles', Object.keys(ROLES).length,
  '| topics', topics.length, '| cards', topics.reduce((s, T) => s + Object.values(T.pos).filter(a => a.length).length, 0));
// примеры для разметки spaCy
if (process.argv.includes('--ex')) fs.writeFileSync(path.join(SP, 'ex_nz.json'), JSON.stringify(Object.fromEntries(Object.entries(EX).map(([k, v]) => [k, v[0]]))));
