// Сверяет nz_words.txt со словами сайта (db/words.js) и учебника (db/textbook.js) → nz_match.json
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
global.window = { THEMES_DATA: [], EXAMPLES: {}, TRANSLATIONS_UK: {}, EXAMPLE_ROLES: {} };
require(path.join(ROOT, 'db', 'words.js'));
require(path.join(ROOT, 'db', 'textbook.js'));
const norm = s => s.toLowerCase().replace(/^sich\s+/, '').replace(/[.!?]/g, '').replace(/ß/g, 'ss').trim();
const idx = new Map();
const cats = window.VOCAB_DATA.slice().sort((a, b) => (a.mode === 'conjugation') - (b.mode === 'conjugation') || a.level.localeCompare(b.level));
for (const c of cats) for (const w of c.words) {
  const art = w.article && w.article !== '-' ? w.article : '';
  for (const k of [norm(w.word) + '|' + art, norm(w.word) + '|*']) if (!idx.has(k)) idx.set(k, w);
}
const out = [], seen = new Set(), un = [];
let topic = null;
for (const l of fs.readFileSync(path.join(__dirname, 'nz_words.txt'), 'utf8').split(/\r?\n/)) {
  if (!l.trim() || l.startsWith('#')) continue;
  if (l.startsWith('@')) { topic = l.slice(1).split('|')[0]; continue; }
  const [pos, art, word] = l.split('|');
  const key = (art ? art + ' ' : '') + word;
  if (seen.has(key)) throw new Error('word twice: ' + key);
  seen.add(key);
  const hit = idx.get(norm(word) + '|' + (art || '')) || (!art && idx.get(norm(word) + '|*'));
  out.push({ topic, pos, art, word, ref: hit ? hit.id : undefined, tr: hit ? hit.translation : undefined });
  if (!hit) un.push(key);
}
fs.writeFileSync(path.join(__dirname, 'nz_match.json'), JSON.stringify(out));
console.log('total', out.length, 'matched', out.length - un.length, 'new', un.length);
console.log(un.join(' ; '));
