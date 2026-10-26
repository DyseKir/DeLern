// tb_words.txt + tb_match.json + tb_tr.txt → db/textbook.js
const fs = require('fs'), path = require('path');
const SP = __dirname, ROOT = path.join(__dirname, '..', '..') + '/';
global.window = {}; require(ROOT + 'db/words.js');
const byId = {}; for (const c of window.VOCAB_DATA) for (const w of c.words) if (!byId[w.id]) byId[w.id] = w;

// темы (tb_topics.txt): каждое слово учебника ровно в одной теме по смыслу
const topics = [], topicOf = {};
{
  let cur = null;
  for (const l of fs.readFileSync(path.join(SP, 'tb_topics.txt'), 'utf8').split(/\r?\n/)) {
    if (!l.trim() || l.startsWith('#')) continue;
    if (l.startsWith('@')) {
      const [id, emoji, de, ru, uk] = l.slice(1).split('|');
      cur = { id, emoji, de, ru, uk, pos: { n: [], v: [], a: [], o: [] } };
      topics.push(cur); continue;
    }
    for (let k of l.split(';')) {
      k = k.trim(); if (!k) continue;
      if (topicOf[k]) throw new Error('word in two topics: ' + k);
      topicOf[k] = cur;
    }
  }
}
const entries = JSON.parse(fs.readFileSync(path.join(SP, 'tb_match.json'), 'utf8'));

// переводы и алиасы
const alias = {}, tr = {}, forceNew = new Set();
for (const l of fs.readFileSync(path.join(SP, 'tb_tr.txt'), 'utf8').split(/\r?\n/)) {
  if (!l.trim()) continue;
  if (l.startsWith('@new ')) { forceNew.add(l.slice(5).trim()); continue; }
  if (l.startsWith('@alias ')) { const [k, id] = l.slice(7).split('='); alias[k] = id; continue; }
  const [k, ru, uk, exRu] = l.split('|');
  if (tr[k]) throw new Error('dup tr ' + k);
  tr[k] = { ru, uk, exRu };
}
for (const id of Object.values(alias)) if (!byId[id]) throw new Error('alias id missing ' + id);

const NEW = {}, EX = {}, UK = {}, newKey = {};
// постоянная таблица ключ → id (tb_ids.json): id не сдвигаются при вставке слов в середину
const IDS_FILE = path.join(SP, 'tb_ids.json');
const IDS = fs.existsSync(IDS_FILE) ? JSON.parse(fs.readFileSync(IDS_FILE, 'utf8')) : {};
let seq = Math.max(0, ...Object.values(IDS).map(v => +v.slice(3))), missing = [];
for (const e of entries) {
  const key = (e.art ? e.art + ' ' : '') + e.word;
  let id = forceNew.has(key) ? null : (e.ref || alias[key]);
  if (!id) {
    if (newKey[key]) id = newKey[key];
    else {
      const t = tr[key];
      if (!t) { missing.push(key); continue; }
      id = IDS[key] || ('tb_' + String(++seq).padStart(3, '0'));
      IDS[key] = id;
      newKey[key] = id;
      NEW[id] = { id, article: e.art || '-', word: e.word.replace(/ \((Singular|Plural|Possessiv)\)$/, ''), translation: t.ru };
      UK[id] = t.uk;
      if (e.ex && t.exRu) EX[id] = [e.ex, t.exRu];
    }
  }
  const T = topicOf[key];
  if (!T) { missing.push('NO TOPIC: ' + key); continue; }
  if (!Object.values(T.pos).some(b => b.includes(id))) T.pos[e.pos].push(id);
}
if (missing.length) { console.log('MISSING TR:\n' + [...new Set(missing)].join('\n')); process.exit(1); }
const unusedTr = Object.keys(tr).filter(k => !newKey[k]);
if (unusedTr.length) console.log('unused translations:', unusedTr.join(', '));

// члены предложения для новых примеров: spaCy + ручные правки
const ROLES = {};
{
  const auto = JSON.parse(fs.readFileSync(path.join(SP, 'roles_tb.json'), 'utf8'));
  const ov = {};
  for (const line of fs.readFileSync(path.join(SP, 'overrides_tb.txt'), 'utf8').split(/\r?\n/)) {
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
// одно и то же слово (id) не должно оказаться в двух темах
{ const where = {}; topics.forEach(T => Object.values(T.pos).flat().forEach(id => {
    if (where[id] && where[id] !== T.id) throw new Error('id in two topics: ' + id + ' ' + where[id] + '/' + T.id);
    where[id] = T.id; })); }
const TOPIC_DATA = topics.map(T => ({ id: T.id, de: T.de, ru: T.ru, uk: T.uk, emoji: T.emoji,
  pos: Object.fromEntries(Object.entries(T.pos).filter(([, ids]) => ids.length)) }));

const out = `/* ══════════════════════════════════════════════════════════════
   УЧЕБНИК «Schritte international Neu» (A1) — Lernwortschatz, уроки 1–14,
   разложенные по темам: каждое слово — в одной теме по смыслу
   Слова, которые уже есть в основных карточках, берутся ОТТУДА ЖЕ
   (тот же id) — прогресс общий: выучил в учебнике = выучил и в основной
   карточке. Новые слова учебника — id tb_NNN (новые добавлять в конец).
   Генерируется скриптом из списка слов — правки лучше вносить там.
══════════════════════════════════════════════════════════════ */
(function () {
  const NEW = ${JSON.stringify(NEW, null, 0).replace(/\},"/g, '},\n    "')};
  const TOPICS = ${JSON.stringify(TOPIC_DATA, null, 0).replace(/\},\{"id"/g, '},\n    {"id"')};
  const EX = ${JSON.stringify(EX, null, 0).replace(/\],"/g, '],\n    "')};
  const UK = ${JSON.stringify(UK, null, 0).replace(/","/g, '",\n    "')};
  const ROLES = ${JSON.stringify(ROLES, null, 0).replace(/","/g, '",\n    "')};
  const POSN = ${JSON.stringify(POSN)};

  const byId = {};
  (window.VOCAB_DATA || []).forEach(c => (c.words || []).forEach(w => { if (!byId[w.id]) byId[w.id] = w; }));
  const keys = [];
  TOPICS.forEach(T => {
    keys.push('schritte_' + T.id);
    Object.entries(T.pos).forEach(([p, ids]) => {
      const words = ids.map(id => NEW[id] || byId[id]).filter(Boolean);
      if (!words.length) return;
      window.VOCAB_DATA.push({
        level: 'A1', category: 'schritte_' + T.id + '_' + p, textbook: true, group: T.id,
        name: T.de + ' (' + POSN[p][0] + ')',
        name_ru: T.ru + ' — ' + POSN[p][1],
        name_uk: T.uk + ' — ' + POSN[p][2],
        group_title: [T.de, T.ru, T.uk],
        emoji: T.emoji, words,
      });
    });
  });
  window.THEMES_DATA = window.THEMES_DATA || [];
  window.THEMES_DATA.unshift({ id: 'schritte', emoji: '📘', de: 'Lehrbuch (Schritte)', ru: 'Учебник (Schritte)',
                               uk: 'Підручник (Schritte)', cats: keys, textbook: true });
  window.EXAMPLES = Object.assign(window.EXAMPLES || {}, EX);
  window.TRANSLATIONS_UK = Object.assign(window.TRANSLATIONS_UK || {}, UK);
  window.EXAMPLE_ROLES = Object.assign(window.EXAMPLE_ROLES || {}, ROLES);
})();
`;
fs.writeFileSync(ROOT + 'db/textbook.js', out);
fs.writeFileSync(IDS_FILE, JSON.stringify(IDS, null, 1));
const shared = new Set(); topics.forEach(T => Object.values(T.pos).flat().forEach(id => { if (!NEW[id]) shared.add(id); }));
console.log('new words', Object.keys(NEW).length, '| shared with main', shared.size, '| examples', Object.keys(EX).length,
  '| topics', topics.length, '| categories', topics.reduce((s, T) => s + Object.values(T.pos).filter(a => a.length).length, 0),
  '| KB', (out.length / 1024).toFixed(0));
