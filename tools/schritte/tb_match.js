const fs = require('fs'), path = require('path');
global.window = {}; require(path.join(__dirname, '..', '..', 'db', 'words.js'));
const V = window.VOCAB_DATA;
const norm = s => s.toLowerCase().replace(/^sich\s+/, '').replace(/[.!?]/g, '').replace(/ß/g, 'ss').trim();
const idx = new Map();
// не-спряжения раньше спряжений, A1 раньше остальных
const cats = V.slice().sort((a, b) => (a.mode === 'conjugation') - (b.mode === 'conjugation') || a.level.localeCompare(b.level));
for (const c of cats) for (const w of c.words) {
  const k = norm(w.word) + '|' + (w.article && w.article !== '-' ? w.article : '');
  if (!idx.has(k)) idx.set(k, { w, c });
  const k2 = norm(w.word) + '|*';
  if (!idx.has(k2)) idx.set(k2, { w, c });
}
const lines = fs.readFileSync(path.join(__dirname, 'tb_words.txt'), 'utf8').split(/\r?\n/);
let lesson = null, matched = 0, un = [];
const out = [];
for (const l of lines) {
  if (!l.trim()) continue;
  if (l.startsWith('#')) { lesson = l.slice(2).split('|')[0]; continue; }
  const [pos, art, word, ex] = l.split('|');
  const w0 = word.replace(/ \((Singular|Plural|Possessiv)\)$/, '');
  let hit = idx.get(norm(w0) + '|' + (art || '')) || (!art && idx.get(norm(w0) + '|*'));
  if (hit) { matched++; out.push({ lesson, pos, art, word, ex, ref: hit.w.id, tr: hit.w.translation }); }
  else { un.push(`${lesson}|${pos}|${art}|${word}`); out.push({ lesson, pos, art, word, ex }); }
}
fs.writeFileSync(path.join(__dirname, 'tb_match.json'), JSON.stringify(out, null, 0));
console.log('total', out.length, 'matched', matched, 'new', un.length);
console.log(un.join('\n'));
