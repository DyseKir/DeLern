/* ══════════════════════════════════════════════════════════════
   AUSBILDUNG — подготовка к Einstellungstest (db/ausbildung.js — теория и карточки).
   Экран: обзор тем → тема (📖 теория / 🃏 карточки / ✍️ тренировка) → 🎯 пробный тест.
   Задачи генерируются (AU_GEN[id]() → задача), схемы — inline SVG (currentColor).
   Прогресс в общем прогрессе (синхронизируется): au_<тема> = { best, n, updatedAt } — тренировка,
   auk_<тема> = { ids: [ключи карточек], updatedAt } — выученные карточки, au__test — пробный тест.
══════════════════════════════════════════════════════════════ */
const AU = { view: 'home', topic: null, tab: 'theory', ru: true, run: null, deck: null, onlyNew: false };
let AU_TIMER = null;

/* ── числа ── */
const auR = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const auP = arr => arr[Math.floor(Math.random() * arr.length)];
const auRound = x => Math.round(x * 1e6) / 1e6;
const auGcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
const auLcm = (a, b) => a / auGcd(a, b) * b;
function auShuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
/* немецкая запись: запятая, пробел между тысячами (от 10 000) */
function auF(x, dec) {
  x = auRound(x);
  let s = dec != null ? Math.abs(x).toFixed(dec) : String(Math.abs(x));
  if (s.includes('e')) s = Math.abs(x).toFixed(9).replace(/\.?0+$/, '');
  let [i, f] = s.split('.');
  if (i.length > 4) i = i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return (x < 0 ? '−' : '') + i + (f ? ',' + f : '');
}
const auE = x => auF(x, 2);
const AU_SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
const auSup = n => String(n).split('').map(c => AU_SUP[c] || c).join('');

/* ── конструкторы задач ── */
function T(q, qr, a, steps, o = {}) { return Object.assign({ q, qr, a, steps: steps.filter(Boolean), type: 'num' }, o); }
function MC(q, qr, right, wrongs, steps, o = {}) {
  const opts = auShuffle([right, ...wrongs.slice(0, 3)]);
  return Object.assign({ q, qr, type: 'mc', opts, a: opts.indexOf(right), steps: steps.filter(Boolean) }, o);
}

/* ══════════════ SVG ══════════════ */
const auSvg = (vb, inner, cls = 'au-svg', label = '') =>
  `<svg class="${cls}" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" role="img"${label ? ` aria-label="${label}"` : ''}>${inner}</svg>`;
const auTxt = (x, y, t, size = 14, anchor = 'middle', w = 700) => `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${w}" fill="currentColor" stroke="none" font-family="inherit">${t}</text>`;
const AU_SYMG = {   // символы по DIN: ширина 80, линия на y = 20
  widerstand: '<line x1="0" y1="20" x2="22" y2="20"/><rect x="22" y="12" width="36" height="16"/><line x1="58" y1="20" x2="80" y2="20"/>',
  lampe: '<line x1="0" y1="20" x2="27" y2="20"/><circle cx="40" cy="20" r="13"/><line x1="30.8" y1="10.8" x2="49.2" y2="29.2"/><line x1="49.2" y1="10.8" x2="30.8" y2="29.2"/><line x1="53" y1="20" x2="80" y2="20"/>',
  schalter: '<line x1="0" y1="26" x2="24" y2="26"/><circle cx="24" cy="26" r="2.2" fill="currentColor"/><line x1="24" y1="26" x2="54" y2="10"/><line x1="56" y1="19" x2="56" y2="26"/><line x1="56" y1="26" x2="80" y2="26"/>',
  batterie: '<line x1="0" y1="20" x2="35" y2="20"/><line x1="35" y1="5" x2="35" y2="35"/><line x1="45" y1="12" x2="45" y2="28" stroke-width="5"/><line x1="45" y1="20" x2="80" y2="20"/>' + auTxt(26, 11, '+', 12),
  sicherung: '<line x1="0" y1="20" x2="80" y2="20"/><rect x="20" y="13" width="40" height="14"/>',
  motor: '<line x1="0" y1="20" x2="26" y2="20"/><circle cx="40" cy="20" r="14"/>' + auTxt(40, 25.5, 'M', 15) + '<line x1="54" y1="20" x2="80" y2="20"/>',
  generator: '<line x1="0" y1="20" x2="26" y2="20"/><circle cx="40" cy="20" r="14"/>' + auTxt(40, 25.5, 'G', 15) + '<line x1="54" y1="20" x2="80" y2="20"/>',
  voltmeter: '<line x1="0" y1="20" x2="26" y2="20"/><circle cx="40" cy="20" r="14"/>' + auTxt(40, 25.5, 'V', 15) + '<line x1="54" y1="20" x2="80" y2="20"/>',
  amperemeter: '<line x1="0" y1="20" x2="26" y2="20"/><circle cx="40" cy="20" r="14"/>' + auTxt(40, 25.5, 'A', 15) + '<line x1="54" y1="20" x2="80" y2="20"/>',
  diode: '<line x1="0" y1="20" x2="30" y2="20"/><polygon points="30,9 30,31 50,20"/><line x1="50" y1="9" x2="50" y2="31"/><line x1="50" y1="20" x2="80" y2="20"/>',
  led: '<line x1="0" y1="20" x2="30" y2="20"/><polygon points="30,9 30,31 50,20"/><line x1="50" y1="9" x2="50" y2="31"/><line x1="50" y1="20" x2="80" y2="20"/><line x1="40" y1="8" x2="48" y2="1"/><polyline points="44,1 48,1 48,5"/><line x1="47" y1="11" x2="55" y2="4"/><polyline points="51,4 55,4 55,8"/>',
  erde: '<line x1="40" y1="2" x2="40" y2="18"/><line x1="24" y1="18" x2="56" y2="18"/><line x1="30" y1="25" x2="50" y2="25"/><line x1="36" y1="32" x2="44" y2="32"/>',
  kondensator: '<line x1="0" y1="20" x2="36" y2="20"/><line x1="36" y1="7" x2="36" y2="33"/><line x1="44" y1="7" x2="44" y2="33"/><line x1="44" y1="20" x2="80" y2="20"/>',
};
const AU_SYMN = {
  lampe: ['Lampe', 'лампа', 'круг с крестом'], widerstand: ['Widerstand', 'резистор', 'прямоугольник на линии'], schalter: ['Schalter', 'выключатель', 'линия с откинутым контактом'],
  batterie: ['Batterie', 'батарея', 'длинная (+) и короткая (−) черта'], sicherung: ['Sicherung', 'предохранитель', 'прямоугольник, линия проходит насквозь'], motor: ['Motor', 'мотор', 'круг с буквой M'],
  generator: ['Generator', 'генератор', 'круг с буквой G'], voltmeter: ['Voltmeter', 'вольтметр', 'круг с буквой V'], amperemeter: ['Amperemeter', 'амперметр', 'круг с буквой A'],
  diode: ['Diode', 'диод', 'треугольник с чертой — ток идёт по стрелке'], led: ['Leuchtdiode (LED)', 'светодиод', 'диод со стрелками наружу (светит)'], erde: ['Erdung', 'заземление', 'черты, уменьшающиеся книзу'],
  kondensator: ['Kondensator', 'конденсатор', 'две параллельные пластины'],
};
const auSym = (k, cls = 'au-sym') => auSvg('-2 -2 84 44', AU_SYMG[k] || '', cls, AU_SYMN[k] ? AU_SYMN[k][0] : '');
/* символ, повёрнутый вертикально, в точке (x, y) — для схем */
const auSymV = (k, x, y) => `<g transform="translate(${x},${y}) rotate(90)"><g transform="translate(0,-20)">${AU_SYMG[k]}</g></g>`;
const auSymH = (k, x, y) => `<g transform="translate(${x},${y - 20})">${AU_SYMG[k]}</g>`;

function auGearPts(cx, cy, r, z) {
  const st = 2 * Math.PI / z, pts = [];
  for (let i = 0; i < z; i++) {
    const a = i * st;
    [[r - 3, 0], [r - 3, 0.22], [r + 4, 0.34], [r + 4, 0.66], [r - 3, 0.78]].forEach(([rr, f]) => pts.push(`${(cx + rr * Math.cos(a + f * st)).toFixed(1)},${(cy + rr * Math.sin(a + f * st)).toFixed(1)}`));
  }
  return pts.join(' ');
}
const auGear = (cx, cy, r, z) => `<polygon points="${auGearPts(cx, cy, r, z)}"/><circle cx="${cx}" cy="${cy}" r="${Math.max(4, r * 0.18)}"/>`;
/* цепочка из n шестерён; стрелка у первой */
function auGearChain(n, cw) {
  const r = 22, gap = 2 * r + 5, w = 24 + gap * (n - 1) + 2 * r + 24;
  let g = '';
  for (let i = 0; i < n; i++) {
    const cx = 24 + r + i * gap;
    g += `<g transform="rotate(${i % 2 ? 360 / 12 / 2 : 0} ${cx} 52)">${auGear(cx, 52, r, 12)}</g>` + auTxt(cx, 104, String.fromCharCode(65 + i), 15);
  }
  g += auTxt(24 + r, 22, cw ? '↻' : '↺', 22);
  return auSvg(`0 0 ${w} 112`, g);
}
/* столбчатая диаграмма */
function auChart(labels, vals, title) {
  const max = Math.ceil(Math.max(...vals) / 10) * 10 + 10, x0 = 40, x1 = 310, y0 = 168, y1 = 24, h = y0 - y1;
  const Y = v => y0 - v / max * h;
  let g = auTxt(175, 14, title, 13, 'middle', 600);
  for (let v = 0; v <= max; v += 5) {
    const y = Y(v).toFixed(1), major = v % 10 === 0;
    g += `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke-width="${major ? 1 : 0.5}" opacity="${major ? 0.45 : 0.2}"/>`;
    if (major) g += auTxt(x0 - 6, +y + 4, v, 11, 'end', 400);
  }
  const bw = (x1 - x0) / labels.length;
  labels.forEach((l, i) => {
    const x = x0 + i * bw + bw * 0.2, y = Y(vals[i]);
    g += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${(bw * 0.6).toFixed(1)}" height="${(y0 - y).toFixed(1)}" fill="currentColor" fill-opacity="0.35" stroke-width="1.5"/>`;
    g += auTxt(x + bw * 0.3, y0 + 16, l, 12, 'middle', 600);
  });
  g += `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1 - 4}"/>`;
  return auSvg('0 0 320 192', g, 'au-svg au-chart');
}
const AU_SVG = {
  demoChart: () => auChart(['Jan', 'Feb', 'Mär', 'Apr', 'Mai'], [30, 45, 25, 40, 60], 'Verkaufte Geräte'),
  uriTriangle: () => auSvg('0 0 160 128', '<polygon points="80,6 154,122 6,122"/><line x1="44" y1="70" x2="116" y2="70"/><line x1="80" y1="70" x2="80" y2="122"/>' +
    auTxt(80, 56, 'U', 26) + auTxt(56, 108, 'R', 24) + auTxt(104, 108, 'I', 24), 'au-svg au-svg-sm'),
  reihe: () => auSvg('0 0 260 150', '<line x1="20" y1="20" x2="50" y2="20"/>' + auSymH('lampe', 50, 20) + auSymH('lampe', 130, 20) + '<line x1="210" y1="20" x2="240" y2="20"/><line x1="240" y1="20" x2="240" y2="110"/>' +
    '<line x1="240" y1="110" x2="170" y2="110"/>' + auSymH('batterie', 90, 110) + '<line x1="90" y1="110" x2="20" y2="110"/><line x1="20" y1="110" x2="20" y2="20"/>' +
    auTxt(90, 50, 'L1', 12, 'middle', 600) + auTxt(170, 50, 'L2', 12, 'middle', 600) + auTxt(156, 96, 'U', 12, 'middle', 600) + auTxt(130, 145, 'I überall gleich', 11, 'middle', 500)),
  parallel: () => auSvg('0 0 260 130', '<line x1="40" y1="20" x2="200" y2="20"/><line x1="40" y1="100" x2="200" y2="100"/>' + auSymV('batterie', 40, 20) + auSymV('lampe', 120, 20) + auSymV('lampe', 200, 20) +
    auTxt(138, 64, 'L1', 12, 'start', 600) + auTxt(218, 64, 'L2', 12, 'start', 600) + auTxt(14, 64, 'U', 12, 'middle', 600) + auTxt(130, 124, 'U überall gleich', 11, 'middle', 500)),
  hebel: () => auSvg('0 0 320 130', '<line x1="20" y1="50" x2="300" y2="50" stroke-width="5"/><polygon points="120,52 104,82 136,82"/><line x1="96" y1="84" x2="144" y2="84"/>' +
    '<line x1="30" y1="6" x2="30" y2="44"/><polyline points="24,36 30,46 36,36"/>' + auTxt(30, 4, '', 1) + auTxt(46, 22, 'F₁ (Kraft)', 12, 'start', 600) +
    '<rect x="268" y="54" width="28" height="26"/>' + auTxt(282, 72, 'F₂', 12) + auTxt(282, 96, 'Last', 11, 'middle', 500) +
    '<line x1="30" y1="108" x2="120" y2="108" stroke-width="1.4"/><line x1="120" y1="108" x2="282" y2="108" stroke-width="1.4"/><line x1="30" y1="102" x2="30" y2="114" stroke-width="1.4"/><line x1="120" y1="102" x2="120" y2="114" stroke-width="1.4"/><line x1="282" y1="102" x2="282" y2="114" stroke-width="1.4"/>' +
    auTxt(75, 124, 'l₁ (Kraftarm)', 11, 'middle', 600) + auTxt(201, 124, 'l₂ (Lastarm)', 11, 'middle', 600) + auTxt(120, 98, 'Drehpunkt', 10, 'middle', 500)),
  gears: () => auSvg('0 0 270 200', auGear(66, 104, 36, 20) + `<g transform="rotate(4.5 178 104)">${auGear(178, 104, 72, 40)}</g>` +
    auTxt(66, 52, '↻', 24) + auTxt(178, 22, '↺', 24) + auTxt(66, 162, '20 Zähne', 11, 'middle', 600) + auTxt(66, 176, 'schnell', 11, 'middle', 400) + auTxt(178, 196, '40 Zähne · langsam (½)', 11, 'middle', 600)),
};

/* ══════════════ ГЕНЕРАТОРЫ ЗАДАЧ ══════════════ */
const AU_GEN = {
  kopf(sub) {
    const t = sub != null ? sub : auR(0, 5);
    if (t === 0) { const a = auR(2, 20), b = auR(2, 9), c = auR(2, 9), r = a + b * c;
      return T(`${a} + ${b} · ${c} = ?`, 'Вычислите (помни: Punkt vor Strich).', r, [`Сначала умножение: ${b} · ${c} = ${b * c}`, `Потом сложение: ${a} + ${b * c} = ${r}`]); }
    if (t === 1) { const a = auR(6, 15), b = auR(2, a - 2), c = auR(2, 9), r = (a - b) * c;
      return T(`(${a} − ${b}) · ${c} = ?`, 'Вычислите.', r, [`Скобки первыми: ${a} − ${b} = ${a - b}`, `${a - b} · ${c} = ${r}`]); }
    if (t === 2) { const d = auP([1.5, 2.5, 3.5, 4.5, 0.5, 1.2, 2.4, 0.25, 0.75, 1.25]), n = auP([4, 6, 8, 12, 16, 20, 24]), w = Math.floor(d), fr = auRound(d - w), r = auRound(d * n);
      const part = fr === 0.5 ? 'половина' : fr === 0.25 ? 'четверть' : fr === 0.75 ? 'три четверти' : '';
      return T(`${auF(d)} · ${n} = ?`, 'Вычислите без калькулятора.', r, w
        ? [`Разбей: ${auF(d)} = ${w} + ${auF(fr)}`, `${w} · ${n} = ${w * n},  ${auF(fr)} · ${n} = ${auF(fr * n)}`, `${w * n} + ${auF(fr * n)} = ${auF(r)}`]
        : [`${auF(d)} · ${n} — это ${part} от ${n}`, `= ${auF(r)}`]); }
    if (t === 3) { const b = auP([0.2, 0.4, 0.5, 0.8, 1.2, 1.5]), q = auR(2, 12), a = auRound(b * q);
      return T(`${auF(a)} : ${auF(b)} = ?`, 'Вычислите без калькулятора.', q, [`Сдвинь запятую в обоих числах на 1 знак вправо: ${auF(a * 10)} : ${auF(b * 10)}`, `${auF(a * 10)} : ${auF(b * 10)} = ${q}`]); }
    if (t === 4) { const a = auR(12, 49), b = auR(3, 9), tn = Math.floor(a / 10) * 10, on = a % 10;
      return T(`${a} · ${b} = ?`, 'Вычислите в уме.', a * b, [`Разбей: ${a} = ${tn} + ${on}`, `${tn} · ${b} = ${tn * b},  ${on} · ${b} = ${on * b}`, `${tn * b} + ${on * b} = ${a * b}`]); }
    const b = auR(3, 12), x = auR(3, 12);
    return T(`${b} · ? = ${b * x}`, 'Какое число пропущено?', x, [`? = ${b * x} : ${b}`, `= ${x}`]);
  },

  brueche(sub) {
    const t = sub != null ? sub : auR(0, 6), fr = (n, d) => `${n}/${d}`;
    if (t === 0) {
      let d = auR(3, 12), n = auR(1, d - 1); while (auGcd(n, d) !== 1) n = auR(1, d - 1);
      const k = auR(2, 6);
      return T(`Kürzen Sie so weit wie möglich: ${fr(n * k, d * k)}`, 'Сократите дробь до конца.', [n, d], [`Числитель и знаменатель делятся на ${k}`, `${n * k} : ${k} = ${n},  ${d * k} : ${k} = ${d}`, `${fr(n, d)} дальше не сокращается`], { type: 'frac', reduce: true });
    }
    if (t === 1 || t === 2) {
      const [d1, d2] = auP([[2, 4], [2, 8], [4, 8], [3, 6], [2, 6], [3, 12], [4, 12], [6, 12], [2, 3], [3, 4], [4, 6], [2, 5], [5, 10]]), L = auLcm(d1, d2);
      let n1, n2, N1, N2, tries = 0;
      do { n1 = auR(1, d1 - 1); n2 = auR(1, d2 - 1); N1 = n1 * L / d1; N2 = n2 * L / d2; tries++; } while (t === 2 && N1 <= N2 && tries < 40);
      if (t === 2 && N1 <= N2) { [n1, n2, N1, N2] = [1, 1, L / d1, L / d2]; if (N1 <= N2) return AU_GEN.brueche(sub); }
      const N = t === 1 ? N1 + N2 : N1 - N2, g = auGcd(N, L), op = t === 1 ? '+' : '−';
      return T(`${fr(n1, d1)} ${op} ${fr(n2, d2)} = ?`, t === 1 ? 'Сложите дроби (ответ — дробью, например 7/8).' : 'Вычтите дроби (ответ — дробью).', [N / g, L / g],
        [`Общий знаменатель: ${L}`, `${fr(n1, d1)} = ${fr(N1, L)},  ${fr(n2, d2)} = ${fr(N2, L)}`, `${fr(N1, L)} ${op} ${fr(N2, L)} = ${fr(N, L)}`, g > 1 ? `Сокращаем на ${g}: ${fr(N / g, L / g)}` : null], { type: 'frac' });
    }
    if (t === 3 || t === 4) {
      const n1 = auR(1, 5), d1 = auR(n1 + 1, 8), n2 = auR(1, 5), d2 = auR(n2 + 1, 8);
      const N = t === 3 ? n1 * n2 : n1 * d2, D = t === 3 ? d1 * d2 : d1 * n2, g = auGcd(N, D);
      return T(`${fr(n1, d1)} ${t === 3 ? '·' : ':'} ${fr(n2, d2)} = ?`, t === 3 ? 'Умножьте дроби (ответ — дробью).' : 'Разделите дроби (ответ — дробью).', [N / g, D / g],
        [t === 4 ? `Делить = умножить на перевёрнутую: ${fr(n1, d1)} · ${fr(d2, n2)}` : null, `Верх · верх: ${t === 3 ? n1 + ' · ' + n2 : n1 + ' · ' + d2} = ${N}`, `Низ · низ: ${t === 3 ? d1 + ' · ' + d2 : d1 + ' · ' + n2} = ${D}`, g > 1 ? `Сокращаем на ${g}: ${fr(N / g, D / g)}` : `Ответ: ${fr(N, D)}`], { type: 'frac' });
    }
    if (t === 5) {
      const pool = auShuffle([[1, 2], [2, 3], [3, 4], [3, 5], [5, 8], [4, 5], [2, 5], [5, 6], [7, 10], [3, 8], [1, 3], [9, 10]]), pick = [];
      pool.forEach(f => { if (pick.length < 4 && !pick.some(p => p[0] * f[1] === f[0] * p[1])) pick.push(f); });
      const big = Math.random() < 0.6, best = pick.reduce((m, f) => (big ? f[0] / f[1] > m[0] / m[1] : f[0] / f[1] < m[0] / m[1]) ? f : m);
      return MC(`Welcher Bruch ist am ${big ? 'größten' : 'kleinsten'}?`, `Какая дробь самая ${big ? 'большая' : 'маленькая'}?`, fr(...best), pick.filter(f => f !== best).map(f => fr(...f)),
        [`Переводим в десятичные: ${pick.map(f => `${fr(...f)} = ${auF(Math.round(f[0] / f[1] * 1000) / 1000)}`).join(',  ')}`, `Самая ${big ? 'большая' : 'маленькая'}: ${fr(...best)}`]);
    }
    const [n, d] = auP([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 8], [3, 8], [1, 10], [7, 10], [1, 20]]);
    return T(`Schreiben Sie als Dezimalzahl: ${fr(n, d)}`, 'Запишите десятичной дробью.', n / d, [`Черта дроби — это деление: ${n} : ${d}`, `= ${auF(n / d)}`]);
  },

  prozent(sub) {
    const t = sub != null ? sub : auR(0, 4);
    if (t === 0) {
      const p = auP([5, 10, 15, 19, 20, 25, 30, 40, 50, 75]), G = auP([40, 60, 80, 120, 150, 200, 240, 250, 300, 400, 500, 600, 800]), W = G * p / 100;
      let st;
      if (p === 10) st = [`10 % — запятая на 1 знак влево: ${auE(W)} €`];
      else if (p === 19) st = [`10 % = ${auE(G / 10)} €, значит 20 % = ${auE(G / 5)} €`, `1 % = ${auE(G / 100)} €`, `19 % = 20 % − 1 % = ${auE(G / 5)} − ${auE(G / 100)} = ${auE(W)} €`];
      else if (p === 25 || p === 50 || p === 75) st = [`${p} % = ${p === 25 ? '1/4' : p === 50 ? '1/2' : '3/4'}`, `${G} · ${p === 25 ? '1/4' : p === 50 ? '1/2' : '3/4'} = ${auE(W)} €`];
      else st = [`10 % = ${auE(G / 10)} €,  1 % = ${auE(G / 100)} €`, `${p} % = ${auE(G / 100)} · ${p} = ${auE(W)} €`];
      return T(`Wie viel sind ${p} % von ${G} €?`, `Сколько составляет ${p} % от ${G} €?`, W, st, { unit: '€', tol: 0.005 });
    }
    if (t === 1) {
      const combos = []; [5, 10, 20, 25, 40, 50, 75].forEach(p => [20, 40, 60, 80, 120, 200, 400].forEach(G => { if (G * p % 100 === 0) combos.push([p, G]); }));
      const [p, G] = auP(combos), W = G * p / 100, g = auGcd(W, G);
      return T(`Wie viel Prozent sind ${W} von ${G}?`, `Сколько процентов составляет ${W} от ${G}?`, p, [`Доля: ${W} / ${G}${g > 1 ? ` = ${W / g}/${G / g}` : ''}`, `${W / g}/${G / g} · 100 = ${p} %`], { unit: '%' });
    }
    if (t === 2) {
      const P = auP([40, 60, 80, 120, 150, 200, 250, 300, 400]), r = auP([10, 15, 20, 25, 30, 50]), R = P * r / 100;
      return T(`Ein Werkzeugkoffer kostet ${P} €. Es gibt ${r} % Rabatt. Wie viel kostet er jetzt?`, `Набор инструментов стоит ${P} €, скидка ${r} %. Сколько он стоит теперь?`, P - R,
        [`${r} % от ${P} € = ${auE(R)} €`, `${P} − ${auE(R)} = ${auE(P - R)} €`, `Или сразу: ${100 - r} % от ${P} = ${auE(P - R)} €`], { unit: '€', tol: 0.005 });
    }
    if (t === 3) {
      const N = auP([50, 100, 150, 200, 300, 400, 500, 1000]), M = N * 0.19;
      return T(`Der Nettopreis beträgt ${N} €. Wie hoch ist der Bruttopreis mit 19 % MwSt.?`, `Цена без НДС — ${N} €. Какая цена с НДС 19 %?`, N + M,
        [`1 % = ${auE(N / 100)} €,  19 % = ${auE(N / 100)} · 19 = ${auE(M)} €`, `Brutto = ${N} + ${auE(M)} = ${auE(N + M)} €`], { unit: '€', tol: 0.005 });
    }
    const p = auP([10, 20, 25, 50]), G = auP([80, 120, 200, 240, 300, 400, 600]), W = G * p / 100;
    return T(`${p} % eines Betrags sind ${W} €. Wie groß ist der ganze Betrag?`, `${p} % от суммы — это ${W} €. Какова вся сумма?`, G,
      [`${p} % = ${W} €`, `1 % = ${W} : ${p} = ${auF(W / p)} €`, `100 % = ${auF(W / p)} · 100 = ${G} €`], { unit: '€' });
  },

  dreisatz(sub) {
    const t = sub != null ? sub : auR(0, 3);
    if (t === 0) {
      const [de, ru] = auP([['m Kabel', 'м кабеля'], ['Steckdosen', 'розеток'], ['Packungen Schrauben', 'упаковок винтов'], ['Liter Farbe', 'литров краски']]);
      const q1 = auP([2, 3, 4, 5, 6, 8, 10]), u = auP([0.5, 0.75, 1.2, 1.5, 2.5, 3, 4.5, 12]); let q2 = auR(3, 25); while (q2 === q1) q2 = auR(3, 25);
      return T(`${q1} ${de} kosten ${auE(q1 * u)} €. Wie viel kosten ${q2} ${de}?`, `${q1} ${ru} стоят ${auE(q1 * u)} €. Сколько стоят ${q2}?`, q2 * u,
        ['Прямая пропорция: больше → дороже', `1 — ${auE(q1 * u)} : ${q1} = ${auE(u)} €`, `${q2} — ${auE(u)} · ${q2} = ${auE(q2 * u)} €`], { unit: '€', tol: 0.005 });
    }
    if (t === 1) {
      const w1 = auP([2, 3, 4, 6]), h1 = auP([4, 6, 8, 10, 12]), P = w1 * h1, c = []; for (let w = 2; w <= 12; w++) if (w !== w1 && P % w === 0) c.push(w);
      const w2 = auP(c);
      return T(`${w1} Elektriker brauchen für einen Auftrag ${h1} Stunden. Wie lange brauchen ${w2} Elektriker (gleich schnell)?`, `${w1} электрика делают заказ за ${h1} ч. Сколько часов нужно ${w2} электрикам?`, P / w2,
        ['Обратная пропорция: больше людей → меньше часов', `1 электрик: ${h1} · ${w1} = ${P} ч`, `${w2}: ${P} : ${w2} = ${auF(P / w2)} ч`], { unit: 'h' });
    }
    if (t === 2) {
      const l = auP([5, 6, 7, 8]), km = auP([50, 150, 200, 250, 300, 350, 400]), a = l * km / 100;
      return T(`Ein Firmenwagen verbraucht ${l} Liter auf 100 km. Wie viel Liter braucht er für ${km} km?`, `Служебная машина тратит ${l} л на 100 км. Сколько литров нужно на ${km} км?`, a,
        ['Прямая пропорция: больше км → больше литров', `1 км — ${l} : 100 = ${auF(l / 100)} л`, `${km} км — ${auF(l / 100)} · ${km} = ${auF(a)} л`], { unit: 'l' });
    }
    const [de, ru, k] = auP([['Kabellänge und Preis', 'длина кабеля и цена', 'p'], ['Anzahl der Arbeiter und Arbeitszeit', 'число рабочих и время работы', 'a'], ['Geschwindigkeit und Fahrzeit', 'скорость и время в пути', 'a'],
      ['Liter Benzin und gefahrene Kilometer', 'литры бензина и километры', 'p'], ['Anzahl der Maschinen und Produktionszeit', 'число станков и время производства', 'a'], ['Arbeitsstunden und Lohn', 'часы работы и зарплата', 'p']]);
    const P = 'proportional (je mehr, desto mehr)', A = 'antiproportional (je mehr, desto weniger)';
    return MC(`Wie hängen diese Größen zusammen: ${de}?`, `Как связаны величины: ${ru}?`, k === 'p' ? P : A, [k === 'p' ? A : P],
      [k === 'p' ? 'Если первого становится больше — второго тоже больше → прямая пропорция' : 'Если первого становится больше — второго становится меньше → обратная пропорция']);
  },

  einheiten(sub) {
    const C = [['m', 'mm', 1000, [0.5, 1.2, 2.5, 3.75, 0.08, 4.2]], ['mm', 'm', 0.001, [2500, 750, 1200, 85, 3400]], ['cm', 'm', 0.01, [250, 75, 120, 1500]], ['km', 'm', 1000, [1.5, 0.8, 2.25, 12]],
      ['m', 'cm', 100, [1.5, 0.35, 2.8, 0.07]], ['m²', 'cm²', 10000, [1.5, 0.5, 2, 0.25]], ['cm²', 'm²', 0.0001, [15000, 5000, 25000, 200000]], ['mm²', 'cm²', 0.01, [150, 250, 600, 1500]],
      ['l', 'ml', 1000, [0.5, 1.5, 0.25, 2]], ['m³', 'l', 1000, [1.5, 0.5, 2, 0.25]], ['kg', 'g', 1000, [0.5, 2.5, 0.75, 1.2]], ['g', 'kg', 0.001, [500, 2500, 750, 150]], ['t', 'kg', 1000, [1.5, 0.5, 3.2]],
      ['h', 'min', 60, [1.5, 0.25, 0.75, 2.5, 1.2, 0.5]], ['min', 'h', 1 / 60, [90, 45, 15, 30, 135, 150]], ['mA', 'A', 0.001, [450, 1500, 20, 250, 5000]], ['A', 'mA', 1000, [0.45, 0.02, 1.5, 0.005]],
      ['W', 'kW', 0.001, [3200, 1500, 750, 2300]], ['kW', 'W', 1000, [2.3, 0.5, 1.25, 3.6]], ['kΩ', 'Ω', 1000, [4.7, 2.2, 0.47, 10]], ['Ω', 'kΩ', 0.001, [4700, 1500, 220, 33000]], ['mV', 'V', 0.001, [500, 1500, 250]]];
    const GR = [[0, 5], [5, 8], [8, 13], [13, 15], [15, 22]], g = sub != null ? GR[sub] : [0, C.length];
    const [u1, u2, f, vs] = auP(C.slice(g[0], g[1])), v = auP(vs), a = auRound(v * f);
    const st = f > 1 ? `1 ${u1} = ${auF(f)} ${u2} → в маленькую единицу, умножаем на ${auF(f)}` : `1 ${u2} = ${auF(Math.round(1 / f))} ${u1} → в большую единицу, делим на ${auF(Math.round(1 / f))}`;
    return T(`Rechnen Sie um: ${auF(v)} ${u1} = ? ${u2}`, `Переведите: ${auF(v)} ${u1} = ? ${u2}`, a, [st, `${auF(v)} ${f > 1 ? '·' : ':'} ${auF(f > 1 ? f : Math.round(1 / f))} = ${auF(a)} ${u2}`], { unit: u2 });
  },

  gleichungen(sub) {
    const t = sub != null ? sub : auR(0, 4);
    if (t === 0) { const a = auR(2, 9), x = auR(1, 12), b = auR(1, 20), c = a * x + b;
      return T(`${a}x + ${b} = ${c}`, 'Решите уравнение: чему равен x?', x, [`−${b} с обеих сторон: ${a}x = ${c - b}`, `: ${a} с обеих сторон: x = ${x}`, `Проверка: ${a} · ${x} + ${b} = ${c} ✓`], { unit: '', pre: 'x =' }); }
    if (t === 1) { const a = auR(2, 9), x = auR(2, 12), b = auR(1, a * x - 1), c = a * x - b;
      return T(`${a}x − ${b} = ${c}`, 'Решите уравнение: чему равен x?', x, [`+${b} с обеих сторон: ${a}x = ${c + b}`, `: ${a}: x = ${x}`, `Проверка: ${a} · ${x} − ${b} = ${c} ✓`], { pre: 'x =' }); }
    if (t === 2) { const x = auR(1, 9), c = auR(1, 4), a = c + auR(1, 5), b = auR(1, 15), d = (a - c) * x + b;
      return T(`${a}x + ${b} = ${c}x + ${d}`, 'Решите уравнение: чему равен x?', x, [`x — влево, числа — вправо: ${a}x − ${c}x = ${d} − ${b}`, `${a - c}x = ${d - b}`, `x = ${d - b} : ${a - c} = ${x}`], { pre: 'x =' }); }
    if (t === 3) { const a = auP([2, 3, 4, 5]), k = auR(2, 9), b = auR(1, 10), c = k + b;
      return T(`x / ${a} + ${b} = ${c}`, 'Решите уравнение: чему равен x?', a * k, [`−${b}: x / ${a} = ${k}`, `· ${a}: x = ${a * k}`], { pre: 'x =' }); }
    const [f, v, ...o] = auP([['P = U · I', 'I', 'I = P / U', 'I = U / P', 'I = P · U', 'I = P − U'], ['P = U · I', 'U', 'U = P / I', 'U = I / P', 'U = P · I', 'U = P − I'],
      ['U = R · I', 'R', 'R = U / I', 'R = I / U', 'R = U · I', 'R = U − I'], ['U = R · I', 'I', 'I = U / R', 'I = R / U', 'I = U · R', 'I = U + R'], ['W = P · t', 't', 't = W / P', 't = P / W', 't = W · P', 't = W − P'],
      ['A = l · b', 'b', 'b = A / l', 'b = l / A', 'b = A · l', 'b = A − l'], ['v = s / t', 's', 's = v · t', 's = v / t', 's = t / v', 's = v + t']]);
    return MC(`Stellen Sie die Formel ${f} nach ${v} um.`, `Выразите ${v} из формулы ${f}.`, o[0], o.slice(1),
      [f.includes('/') ? `${v} стоит в делении — умножаем обе части на знаменатель` : `${v} умножается на другую величину → делим обе части на неё`, `Треугольник формулы: закрой ${v} — увидишь ${o[0].split('= ')[1]}`]);
  },

  geometrie(sub) {
    const t = sub != null ? sub : auR(0, 5);
    if (t === 0 || t === 1) {
      const a = auP([3, 4, 5, 6, 8, 2.5, 3.5, 4.5]), b = auP([2, 3, 4, 5, 6]);
      if (t === 0) return T(`Ein Raum ist ${auF(a)} m lang und ${b} m breit. Wie groß ist die Fläche?`, `Комната ${auF(a)} м в длину и ${b} м в ширину. Какая площадь?`, a * b, [`A = a · b = ${auF(a)} · ${b}`, `= ${auF(a * b)} m²`], { unit: 'm²' });
      return T(`Ein Raum ist ${auF(a)} m lang und ${b} m breit. Wie viel Meter Fußleiste braucht man ringsum (Umfang)?`, `Комната ${auF(a)} × ${b} м. Сколько метров плинтуса нужно по периметру?`, 2 * (a + b),
        [`U = 2 · (a + b) = 2 · (${auF(a)} + ${b})`, `= 2 · ${auF(a + b)} = ${auF(2 * (a + b))} m`], { unit: 'm' });
    }
    if (t === 2) { const g = auP([4, 6, 8, 10, 12]), h = auP([3, 4, 5, 6, 7, 9]);
      return T(`Ein Dreieck hat die Grundseite ${g} cm und die Höhe ${h} cm. Wie groß ist die Fläche?`, `Треугольник: основание ${g} см, высота ${h} см. Какая площадь?`, g * h / 2, [`A = g · h / 2 = ${g} · ${h} / 2`, `= ${g * h} / 2 = ${auF(g * h / 2)} cm²`], { unit: 'cm²' }); }
    if (t === 3) { const d = auP([2, 4, 10, 20]), A = auRound(3.14 * d * d / 4);
      return T(`Berechnen Sie den Querschnitt eines Drahtes mit d = ${d} mm (π ≈ 3,14).`, `Вычислите сечение провода диаметром ${d} мм (π ≈ 3,14).`, A,
        [`A = π · d² / 4 = 3,14 · ${d} · ${d} / 4`, `= 3,14 · ${d * d} / 4 = 3,14 · ${auF(d * d / 4)}`, `= ${auF(A)} mm²`], { unit: 'mm²', tol: 0.011 }); }
    if (t === 4) { const a = auP([2, 1.5, 3, 4]), b = auP([1, 2, 0.5]), c = auP([0.5, 1, 1.5]), V = auRound(a * b * c);
      return T(`Ein Behälter ist ${auF(a)} m lang, ${auF(b)} m breit und ${auF(c)} m hoch. Wie viel Liter passen hinein?`, `Ёмкость ${auF(a)} × ${auF(b)} × ${auF(c)} м. Сколько литров в неё помещается?`, V * 1000,
        [`V = a · b · c = ${auF(a)} · ${auF(b)} · ${auF(c)} = ${auF(V)} m³`, `1 m³ = 1000 l → ${auF(V)} · 1000 = ${auF(V * 1000)} l`], { unit: 'l' }); }
    const [a, h] = auP([[4, 2.5], [5, 2], [6, 2.5], [8, 2.5], [5, 2.5], [4, 2]]), A = a * h;
    return T(`Eine Wand ist ${a} m breit und ${auF(h)} m hoch. 1 Liter Farbe reicht für 5 m². Wie viel Liter braucht man?`, `Стена ${a} м шириной и ${auF(h)} м высотой. 1 литра краски хватает на 5 м². Сколько литров нужно?`, A / 5,
      [`Площадь стены: ${a} · ${auF(h)} = ${auF(A)} m²`, `${auF(A)} : 5 = ${auF(A / 5)} l`], { unit: 'l' });
  },

  text(sub) {
    const t = sub != null ? sub : auR(0, 3);
    if (t === 0) {
      const pool = auShuffle([['Steckdosen', [2.4, 3.2, 4.5, 2.8], [4, 15]], ['Schalter', [3.5, 4.2, 5.9], [3, 10]], ['Abzweigdosen', [1.2, 0.8, 1.5], [5, 20]], ['Rollen Kabel', [45, 39, 52], [1, 3]], ['LED-Lampen', [6.5, 4.9, 8], [2, 10]]]).slice(0, auR(2, 3));
      const it = pool.map(([de, ps, [lo, hi]]) => ({ de, p: auP(ps), n: auR(lo, hi) })), sum = auRound(it.reduce((s, i) => s + i.n * i.p, 0));
      const list = it.map(i => `${i.n} ${i.de} à ${auE(i.p)} €`);
      return T(`Ein Elektriker kauft ${list.slice(0, -1).join(', ')} und ${list[list.length - 1]}. Wie viel kostet das insgesamt?`, 'Электрик покупает материал по списку. Сколько всё стоит вместе? (à — «по … за штуку»)', sum,
        [...it.map(i => `${i.n} · ${auE(i.p)} = ${auE(i.n * i.p)} €`), `Всего: ${it.map(i => auE(i.n * i.p)).join(' + ')} = ${auE(sum)} €`], { unit: '€', tol: 0.005 });
    }
    if (t === 1) { const h = auP([2, 3, 4, 5, 6, 8]), r = auP([38, 42, 45, 48, 55]), an = auP([20, 25, 30, 35]);
      return T(`Ein Monteur arbeitet ${h} Stunden. Der Stundenlohn beträgt ${r} €, dazu kommen ${an} € Anfahrt. Wie hoch ist die Rechnung?`, `Монтажник работает ${h} ч по ${r} € в час, плюс ${an} € за выезд. Какая сумма счёта?`, h * r + an,
        [`Работа: ${h} · ${r} = ${h * r} €`, `+ выезд: ${h * r} + ${an} = ${h * r + an} €`], { unit: '€' }); }
    if (t === 2) { const L = auP([50, 100]), per = auP([12, 15, 18, 22, 35]), n = Math.floor(L / per);
      return T(`Eine Kabelrolle hat ${L} m. Für ein Zimmer braucht man ${per} m. Für wie viele Zimmer reicht die Rolle?`, `В бухте ${L} м кабеля. На одну комнату нужно ${per} м. На сколько комнат хватит бухты?`, n,
        [`${L} : ${per} ≈ ${auF(Math.floor(L / per * 100) / 100)}`, `Нужны только целые комнаты → ${n}`], { unit: 'Zimmer' }); }
    const x = auP([12.5, 18, 22.5, 15.5, 24]), rest = auRound(100 - 3 * x);
    return T(`Von einer 100-m-Kabelrolle werden dreimal je ${auF(x)} m abgeschnitten. Wie viel Meter bleiben übrig?`, `От бухты 100 м трижды отрезают по ${auF(x)} м. Сколько метров остаётся?`, rest,
      [`Отрезали: 3 · ${auF(x)} = ${auF(3 * x)} m`, `Осталось: 100 − ${auF(3 * x)} = ${auF(rest)} m`], { unit: 'm' });
  },

  diagramme(sub) {
    const labels = auP([['Jan', 'Feb', 'Mär', 'Apr', 'Mai'], ['Mo', 'Di', 'Mi', 'Do', 'Fr'], ['2020', '2021', '2022', '2023', '2024']]);
    const [tde, tru] = auP([['Verkaufte Geräte', 'проданные приборы'], ['Aufträge', 'заказы'], ['Reparaturen', 'ремонты']]);
    const v = labels.map(() => auR(2, 16) * 5), t = sub != null ? sub : auR(0, 3), i = auR(0, 4); let j = auR(0, 4); while (j === i) j = auR(0, 4);
    if (t === 2) { const mx = Math.max(...v); if (v.filter(x => x === mx).length > 1) v[v.indexOf(mx)] += 5; }
    const svg = auChart(labels, v, tde), sum = v.reduce((s, x) => s + x, 0);
    if (t === 0) return T(`Welchen Wert hat „${labels[i]}“?`, `Какое значение у «${labels[i]}» (${tru})?`, v[i], [`Найди столбик «${labels[i]}» и посмотри по линиям сетки на ось слева`, `= ${v[i]}`], { svg });
    if (t === 1) return T(`Wie groß ist der Unterschied zwischen „${labels[i]}“ und „${labels[j]}“?`, `Какая разница между «${labels[i]}» и «${labels[j]}»?`, Math.abs(v[i] - v[j]),
      [`«${labels[i]}» = ${v[i]},  «${labels[j]}» = ${v[j]}`, `${Math.max(v[i], v[j])} − ${Math.min(v[i], v[j])} = ${Math.abs(v[i] - v[j])}`], { svg });
    if (t === 2) { const k = v.indexOf(Math.max(...v));
      return MC('Wo ist der Wert am höchsten?', 'Где значение самое высокое?', labels[k], auShuffle(labels.filter((_, x) => x !== k)), [`Самый высокий столбик — «${labels[k]}» (${v[k]})`], { svg }); }
    return T('Wie hoch ist der Durchschnitt aller Werte?', 'Какое среднее значение всех столбиков?', sum / 5, [`Сумма: ${v.join(' + ')} = ${sum}`, `Среднее = сумма : количество = ${sum} : 5 = ${sum / 5}`], { svg });
  },

  potenzen(sub) {
    const t = sub != null ? sub : auR(0, 3);
    if (t === 0) { const P = [['Kilo', '10³'], ['Mega', '10⁶'], ['Giga', '10⁹'], ['Milli', '10⁻³'], ['Mikro', '10⁻⁶'], ['Nano', '10⁻⁹']], k = auP(P);
      return MC(`Für welche Zehnerpotenz steht die Vorsilbe „${k[0]}“?`, `Какую степень десяти означает приставка «${k[0]}»?`, k[1], auShuffle(P.filter(x => x !== k).map(x => x[1])), [`${k[0]} = ${k[1]}`]); }
    if (t === 1) { const [v, u1, u2, f] = auP([[0.002, 'A', 'mA', 1000], [0.005, 'A', 'mA', 1000], [0.000005, 'A', 'µA', 1e6], [4700, 'Ω', 'kΩ', 0.001], [2200, 'Ω', 'kΩ', 0.001], [3, 'MW', 'kW', 1000],
      [0.5, 'kV', 'V', 1000], [2500000, 'Hz', 'MHz', 1e-6], [0.047, 'V', 'mV', 1000]]);
      return T(`Rechnen Sie um: ${auF(v)} ${u1} = ? ${u2}`, `Переведите: ${auF(v)} ${u1} = ? ${u2}`, auRound(v * f), [f > 1 ? `1 ${u1} = ${auF(f)} ${u2} → умножаем` : `1 ${u2} = ${auF(1 / f)} ${u1} → делим`, `= ${auF(v * f)} ${u2}`], { unit: u2 }); }
    if (t === 2) { const a = auR(1, 6), b = auR(1, 5), mul = Math.random() < 0.6;
      return T(`10${auSup(a)} ${mul ? '·' : ':'} 10${auSup(b)} = 10^?`, `Какой будет показатель степени? (${mul ? 'умножение' : 'деление'})`, mul ? a + b : a - b,
        [mul ? `При умножении показатели складываются: ${a} + ${b} = ${a + b}` : `При делении показатели вычитаются: ${a} − ${b} = ${a - b}`, `Ответ: 10${auSup(mul ? a + b : a - b)}`], { pre: '10^' }); }
    const e = auP([1, 2, 3, 6]);
    return T(`Schreiben Sie 10${auSup(-e)} als Dezimalzahl.`, `Запишите 10${auSup(-e)} десятичной дробью.`, Math.pow(10, -e), [`Минус в степени = деление: 1 : 10${auSup(e)}`, `= ${auF(Math.pow(10, -e))} (запятая на ${e} знак(а) влево)`]);
  },

  groessen(sub) {
    const G = [['die Spannung', 'напряжение', 'U', 'Volt (V)'], ['die Stromstärke', 'сила тока', 'I', 'Ampere (A)'], ['der Widerstand', 'сопротивление', 'R', 'Ohm (Ω)'],
      ['die Leistung', 'мощность', 'P', 'Watt (W)'], ['die elektrische Arbeit', 'электрическая работа', 'W', 'Kilowattstunde (kWh)'], ['die Frequenz', 'частота', 'f', 'Hertz (Hz)']];
    const t = sub != null ? sub : auR(0, 3), g = auP(G), oth = auShuffle(G.filter(x => x !== g));
    if (t === 0) return MC(`Welche Einheit hat ${g[0]}?`, `Какая единица у величины «${g[1]}»?`, g[3], oth.map(x => x[3]), [`${g[0]} (${g[1]}) — ${g[2]}, единица ${g[3]}`]);
    if (t === 1) return MC(`Welches Formelzeichen hat ${g[0]}?`, `Какой буквой обозначают «${g[1]}»?`, g[2], oth.map(x => x[2]), [`${g[0]} (${g[1]}) — буква ${g[2]}`]);
    if (t === 2) return MC(`Was wird in ${g[3]} gemessen?`, `Что измеряется в ${g[3]}?`, g[0], oth.map(x => x[0]), [`${g[3]} — единица величины «${g[1]}» (${g[0]})`]);
    const [q, qr, r, ...w] = auP([['Wie wird ein Spannungsmessgerät (Voltmeter) angeschlossen?', 'Как подключают вольтметр?', 'parallel zum Verbraucher', 'in Reihe zum Verbraucher', 'nur an die Sicherung', 'an die Erde'],
      ['Wie wird ein Strommessgerät (Amperemeter) angeschlossen?', 'Как подключают амперметр?', 'in Reihe (in den Stromkreis)', 'parallel zum Verbraucher', 'an die Erde', 'an den Schalter'],
      ['Welche Spannung hat eine normale Steckdose in Deutschland?', 'Какое напряжение у обычной розетки в Германии?', '230 V', '110 V', '12 V', '400 V'],
      ['Welche Spannung hat das Bordnetz eines Autos?', 'Какое напряжение в бортовой сети автомобиля?', '12 V', '230 V', '1,5 V', '400 V']]);
    return MC(q, qr, r, w, [`Правильно: ${r}`]);
  },

  ohm(sub) {
    const t = sub != null ? sub : auR(0, 3);
    if (t === 3) { const [U, k] = auP([[9, 3], [12, 4], [10, 2], [5, 1], [12, 3], [10, 5], [6, 2]]);
      return T(`An ${U} V liegt ein Widerstand von ${k} kΩ. Wie groß ist der Strom in mA?`, `Резистор ${k} кОм подключён к ${U} В. Какой ток в миллиамперах?`, U / k,
        [`R = ${k} kΩ = ${k * 1000} Ω`, `I = U / R = ${U} / ${k * 1000} = ${auF(U / (k * 1000))} A`, `= ${auF(U / k)} mA  (трюк: V / kΩ = mA)`], { unit: 'mA' }); }
    let R, I, U; do { R = auP([2, 4, 5, 6, 10, 12, 20, 23, 46, 50, 100]); I = auP([0.5, 1, 2, 3, 4, 5, 10]); U = auRound(R * I); } while (U > 1000);
    if (t === 0) return T(`Ein Verbraucher mit ${R} Ω liegt an ${auF(U)} V. Wie groß ist der Strom?`, `Потребитель ${R} Ом подключён к ${auF(U)} В. Какой ток?`, I, [`Дано: U = ${auF(U)} V, R = ${R} Ω. Найти: I`, `I = U / R = ${auF(U)} / ${R}`, `= ${auF(I)} A`], { unit: 'A' });
    if (t === 1) return T(`Durch einen Widerstand von ${R} Ω fließt ein Strom von ${auF(I)} A. Welche Spannung liegt an?`, `Через резистор ${R} Ом течёт ток ${auF(I)} А. Какое напряжение?`, U, [`U = R · I = ${R} · ${auF(I)}`, `= ${auF(U)} V`], { unit: 'V' });
    return T(`An ${auF(U)} V fließt ein Strom von ${auF(I)} A. Wie groß ist der Widerstand?`, `При ${auF(U)} В течёт ток ${auF(I)} А. Какое сопротивление?`, R, [`R = U / I = ${auF(U)} / ${auF(I)}`, `= ${R} Ω`], { unit: 'Ω' });
  },

  leistung(sub) {
    const t = sub != null ? sub : auR(0, 3);
    if (t === 0) { const [art, de, ru, P] = auP([['Ein', 'Wasserkocher', 'Чайник', 2300], ['Ein', 'Föhn', 'Фен', 1150], ['Ein', 'Toaster', 'Тостер', 920], ['Ein', 'Heizlüfter', 'Тепловентилятор', 2070],
      ['Ein', 'Staubsauger', 'Пылесос', 1610], ['Ein', 'Bügeleisen', 'Утюг', 1380], ['Eine', 'Lampe', 'Лампа', 46], ['Ein', 'Fernseher', 'Телевизор', 115]]);
      return T(`${art} ${de} hat eine Leistung von ${P} W und läuft an 230 V. Welcher Strom fließt?`, `${ru} мощностью ${P} Вт работает от 230 В. Какой ток?`, P / 230, [`I = P / U = ${P} / 230`, `= ${auF(P / 230)} A`], { unit: 'A' }); }
    if (t === 1) { const U = auP([12, 24, 230]), I = U === 230 ? auP([2, 4, 5, 10]) : auP([0.5, 2, 3, 4, 5, 10]);
      return T(`Ein Gerät nimmt bei ${U} V einen Strom von ${auF(I)} A auf. Wie groß ist die Leistung?`, `Прибор при ${U} В потребляет ${auF(I)} А. Какая мощность?`, U * I, [`P = U · I = ${U} · ${auF(I)}`, `= ${auF(U * I)} W`], { unit: 'W' }); }
    if (t === 2) { const I = auP([6, 10, 13, 16, 20]);
      return T(`Eine Leitung ist mit ${I} A abgesichert (230 V). Welche Leistung darf höchstens angeschlossen werden?`, `Линия защищена предохранителем ${I} А (230 В). Какую максимальную мощность можно подключить?`, 230 * I,
        [`P = U · I = 230 · ${I}`, `= ${230 * I} W`], { unit: 'W' }); }
    const P = auP([1.15, 2.3, 3.45, 0.92]);
    return T(`Ein Gerät hat ${auF(P)} kW und läuft an 230 V. Wie groß ist der Strom?`, `Прибор ${auF(P)} кВт работает от 230 В. Какой ток?`, P * 1000 / 230, [`${auF(P)} kW = ${auF(P * 1000)} W`, `I = P / U = ${auF(P * 1000)} / 230 = ${auF(P * 1000 / 230)} A`], { unit: 'A' });
  },

  schaltzeichen(sub) {
    const keys = Object.keys(AU_SYMN), k = auP(keys), oth = auShuffle(keys.filter(x => x !== k)).slice(0, 3), nm = x => `${AU_SYMN[x][0]} — ${AU_SYMN[x][1]}`;
    if (sub != null ? sub === 0 : Math.random() < 0.6) return MC('Welches Bauteil zeigt dieses Schaltzeichen?', 'Какую деталь изображает этот значок?', nm(k), oth.map(nm), [`Это ${nm(k)}: ${AU_SYMN[k][2]}`], { svg: auSym(k, 'au-sym au-sym-big') });
    return MC(`Welches Schaltzeichen gehört zu: ${AU_SYMN[k][0]}?`, `Какое обозначение у детали «${AU_SYMN[k][1]}»?`, k, oth, [`${nm(k)}: ${AU_SYMN[k][2]}`], { optSvg: true });
  },

  stromkreis(sub) {
    const t = sub != null ? sub : auR(0, 4);
    if (t === 0) { const n = auR(2, 3), rs = Array.from({ length: n }, () => auP([4, 6, 8, 10, 12, 20, 22, 33, 47, 50, 100, 150])), s = rs.reduce((a, b) => a + b, 0);
      return T(`Die Widerstände ${rs.map(r => r + ' Ω').join(', ')} sind in Reihe geschaltet. Wie groß ist der Gesamtwiderstand?`, `Резисторы ${rs.map(r => r + ' Ом').join(', ')} соединены последовательно. Какое общее сопротивление?`, s,
        ['Последовательно: сопротивления складываются', `R = ${rs.join(' + ')} = ${s} Ω`], { unit: 'Ω' }); }
    if (t === 1) { const [a, b, R] = auP([[10, 10, 5], [6, 3, 2], [12, 6, 4], [20, 30, 12], [10, 40, 8], [4, 12, 3], [60, 30, 20], [8, 8, 4], [100, 100, 50], [20, 20, 10], [15, 10, 6], [24, 8, 6], [6, 6, 3]]);
      return T(`${a} Ω und ${b} Ω sind parallel geschaltet. Wie groß ist der Gesamtwiderstand?`, `${a} Ом и ${b} Ом соединены параллельно. Какое общее сопротивление?`, R,
        ['Параллельно: R = R₁ · R₂ / (R₁ + R₂)', `= ${a} · ${b} / (${a} + ${b}) = ${a * b} / ${a + b}`, `= ${R} Ω — меньше самого маленького резистора ✓`], { unit: 'Ω' }); }
    if (t === 2) { const R1 = auP([2, 4, 5, 10, 20]), R2 = auP([4, 6, 10, 20, 30]), I = auP([0.5, 1, 2]), S = R1 + R2, U = S * I;
      return T(`An einer Reihenschaltung aus ${R1} Ω und ${R2} Ω liegen ${auF(U)} V. Welcher Strom fließt?`, `Последовательно соединены ${R1} Ом и ${R2} Ом, напряжение ${auF(U)} В. Какой ток?`, I,
        [`R = ${R1} + ${R2} = ${S} Ω`, `I = U / R = ${auF(U)} / ${S} = ${auF(I)} A`], { unit: 'A' }); }
    if (t === 3) { const a = auP([0.5, 1, 2, 3, 4]), b = auP([0.5, 1, 1.5, 2, 5]);
      return T(`In zwei parallelen Zweigen fließen ${auF(a)} A und ${auF(b)} A. Wie groß ist der Gesamtstrom?`, `В двух параллельных ветвях текут ${auF(a)} А и ${auF(b)} А. Какой общий ток?`, a + b,
        ['Параллельно: токи складываются', `I = ${auF(a)} + ${auF(b)} = ${auF(a + b)} A`], { unit: 'A' }); }
    const [q, qr, r, ...w] = auP([['Welche Größe ist in einer Reihenschaltung überall gleich?', 'Что одинаково везде при последовательном соединении?', 'die Stromstärke', 'die Spannung', 'der Widerstand', 'die Leistung'],
      ['Welche Größe ist in einer Parallelschaltung an allen Zweigen gleich?', 'Что одинаково на всех ветках при параллельном соединении?', 'die Spannung', 'die Stromstärke', 'der Widerstand', 'die Leistung'],
      ['In einer Reihenschaltung brennt eine Lampe durch. Was passiert?', 'В последовательной цепи перегорела одна лампа. Что будет?', 'Alle Lampen gehen aus.', 'Nur diese Lampe geht aus.', 'Die anderen leuchten heller.', 'Nichts passiert.'],
      ['Wie sind die Steckdosen in einer Wohnung geschaltet?', 'Как подключены розетки в квартире?', 'parallel', 'in Reihe', 'gar nicht', 'abwechselnd'],
      ['Der Schalter ist offen. Leuchtet die Lampe?', 'Выключатель разомкнут. Горит ли лампа?', 'Nein, der Stromkreis ist unterbrochen.', 'Ja, aber schwächer.', 'Ja, normal.', 'Nur bei Wechselstrom.'],
      ['Der Gesamtwiderstand einer Parallelschaltung ist …', 'Общее сопротивление параллельной цепи …', 'kleiner als der kleinste Einzelwiderstand', 'größer als der größte Einzelwiderstand', 'genau die Summe', 'immer 0 Ω']]);
    return MC(q, qr, r, w, [`Правильно: ${r}`]);
  },

  hebel(sub) {
    const t = sub != null ? sub : auR(0, 3);
    const F1 = auP([50, 100, 150, 200, 300, 400, 600]), l1 = auP([0.2, 0.25, 0.4, 0.5, 1, 1.5, 2]), M = auRound(F1 * l1);
    if (t === 0) {
      const c = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1, 1.2, 1.5, 2, 2.5, 3, 4, 5].filter(l => l !== l1 && Math.abs(M / l - Math.round(M / l)) < 1e-9);
      const l2 = auP(c), F2 = auRound(M / l2);
      return T(`An einem Hebel wirkt eine Kraft von ${F1} N im Abstand ${auF(l1)} m vom Drehpunkt. Welche Kraft hält im Abstand ${auF(l2)} m das Gleichgewicht?`, `На рычаг действует сила ${F1} Н на расстоянии ${auF(l1)} м от опоры. Какая сила на расстоянии ${auF(l2)} м уравновесит рычаг?`, F2,
        ['F₁ · l₁ = F₂ · l₂', `${F1} · ${auF(l1)} = ${auF(M)}`, `F₂ = ${auF(M)} : ${auF(l2)} = ${auF(F2)} N`], { unit: 'N', svg: AU_SVG.hebel() });
    }
    if (t === 1) {
      const c = [25, 50, 75, 100, 120, 150, 200, 250, 300, 400, 500, 600, 800, 1000, 1200].filter(F => F !== F1 && M / F >= 0.1 && M / F <= 5 && Math.abs(M / F * 100 - Math.round(M / F * 100)) < 1e-9);
      if (!c.length) return AU_GEN.hebel(sub);
      const F2 = auP(c), l2 = auRound(M / F2);
      return T(`Eine Last von ${F1} N wirkt im Abstand ${auF(l1)} m vom Drehpunkt. Wie lang muss der andere Hebelarm sein, wenn dort ${F2} N wirken?`, `Груз ${F1} Н на расстоянии ${auF(l1)} м от опоры. Какой длины должно быть другое плечо, если там действует ${F2} Н?`, l2,
        ['F₁ · l₁ = F₂ · l₂', `${F1} · ${auF(l1)} = ${auF(M)}`, `l₂ = ${auF(M)} : ${F2} = ${auF(l2)} m`], { unit: 'm', svg: AU_SVG.hebel() });
    }
    if (t === 2) { const m = auP([5, 12, 25, 40, 60, 80]);
      return T(`Eine Last hat eine Masse von ${m} kg. Wie groß ist ungefähr ihre Gewichtskraft (1 kg ≈ 10 N)?`, `Масса груза ${m} кг. Примерно какая у него сила тяжести (1 кг ≈ 10 Н)?`, m * 10, [`1 kg ≈ 10 N`, `${m} · 10 = ${m * 10} N`], { unit: 'N' }); }
    const F = auP([40, 50, 80, 100, 120]), l = auP([0.2, 0.25, 0.4, 0.5]);
    return T(`Am ${auF(l)} m langen Schraubenschlüssel wirkt eine Kraft von ${F} N. Wie groß ist das Drehmoment?`, `На ключ длиной ${auF(l)} м действует сила ${F} Н. Какой крутящий момент?`, auRound(F * l), [`M = F · l = ${F} · ${auF(l)}`, `= ${auF(F * l)} Nm`], { unit: 'Nm' });
  },

  zahnraeder(sub) {
    const t = sub != null ? sub : auR(0, 3), Z = [10, 12, 15, 20, 24, 30, 40, 45, 60], N = [60, 90, 100, 120, 150, 180, 200, 240, 300, 360, 600, 900, 1200];
    if (t === 0 || t === 2) {
      let z1, z2, n1, c, tries = 0;
      do { z1 = auP(Z); z2 = auP(Z); c = N.filter(n => z1 * n % z2 === 0); tries++; } while ((z1 === z2 || !c.length) && tries < 50);
      n1 = auP(c); const n2 = z1 * n1 / z2;
      if (t === 0) return T(`Ein Zahnrad mit ${z1} Zähnen dreht sich mit ${n1} U/min und treibt ein Zahnrad mit ${z2} Zähnen an. Wie schnell dreht sich das zweite Rad?`, `Шестерня с ${z1} зубьями вращается со скоростью ${n1} об/мин и ведёт шестерню с ${z2} зубьями. С какой скоростью вращается вторая?`, n2,
        ['z₁ · n₁ = z₂ · n₂', `${z1} · ${n1} = ${z1 * n1}`, `n₂ = ${z1 * n1} : ${z2} = ${n2} U/min`, z2 > z1 ? 'Второе колесо больше → крутится медленнее ✓' : 'Второе колесо меньше → крутится быстрее ✓'], { unit: 'U/min' });
      return T(`Ein Antriebsrad mit ${z1} Zähnen dreht sich mit ${n1} U/min. Das angetriebene Rad soll sich mit ${n2} U/min drehen. Wie viele Zähne braucht es?`, `Ведущая шестерня: ${z1} зубьев, ${n1} об/мин. Ведомая должна вращаться со скоростью ${n2} об/мин. Сколько у неё должно быть зубьев?`, z2,
        ['z₁ · n₁ = z₂ · n₂', `${z1} · ${n1} = ${z1 * n1}`, `z₂ = ${z1 * n1} : ${n2} = ${z2} Zähne`], { unit: 'Zähne' });
    }
    if (t === 1) {
      const n = auR(2, 6), cw = Math.random() < 0.5, last = String.fromCharCode(64 + n), same = n % 2 === 1;
      const R = 'im Uhrzeigersinn', L = 'gegen den Uhrzeigersinn', right = (cw === same) ? R : L;
      return MC(`Zahnrad A dreht sich ${cw ? R : L}. Die Zahnräder A bis ${last} greifen nacheinander ineinander. Wie dreht sich ${last}?`, `Шестерня A вращается ${cw ? 'по часовой' : 'против часовой'}. Шестерни от A до ${last} сцеплены по очереди. Как вращается ${last}?`, right, [right === R ? L : R],
        ['Соседние шестерни крутятся в разные стороны', `${last} — ${n}-я по счёту: ${same ? 'нечётная → как A' : 'чётная → наоборот от A'}`], { svg: auGearChain(n, cw) });
    }
    const [q, qr, r, ...w] = auP([['Zwei Zahnräder greifen ineinander. Wie drehen sie sich?', 'Как вращаются две сцепленные шестерни?', 'in entgegengesetzte Richtungen', 'in die gleiche Richtung', 'gar nicht', 'abwechselnd'],
      ['Ein kleines Zahnrad treibt ein großes an. Das große Rad dreht sich …', 'Маленькая шестерня ведёт большую. Большая вращается …', 'langsamer', 'schneller', 'gleich schnell', 'nur rückwärts'],
      ['Wozu dient ein Zwischenrad?', 'Зачем нужна промежуточная шестерня?', 'Es ändert die Drehrichtung.', 'Es verdoppelt die Drehzahl.', 'Es bremst das Getriebe.', 'Es zählt die Umdrehungen.'],
      ['Zwei Riemenscheiben sind mit einem (nicht gekreuzten) Riemen verbunden. Wie drehen sie sich?', 'Два шкива соединены ремнём (не перекрещённым). Как они вращаются?', 'in die gleiche Richtung', 'in entgegengesetzte Richtungen', 'gar nicht', 'abwechselnd']]);
    return MC(q, qr, r, w, [`Правильно: ${r}`]);
  },

  arbeit(sub) {
    const t = sub != null ? sub : auR(0, 3);
    if (t === 0) { const P = auP([0.5, 1, 1.5, 2, 2.5, 3]), h = auP([2, 3, 4, 5, 6, 8]);
      return T(`Ein Gerät mit ${auF(P)} kW läuft ${h} Stunden. Wie viel Energie verbraucht es?`, `Прибор ${auF(P)} кВт работает ${h} ч. Сколько энергии он тратит?`, P * h, [`W = P · t = ${auF(P)} kW · ${h} h`, `= ${auF(P * h)} kWh`], { unit: 'kWh' }); }
    if (t === 1) { const P = auP([1, 2, 2.5, 3]), h = auP([2, 3, 4, 5, 6]), pr = auP([0.3, 0.35, 0.4]), W = P * h;
      return T(`Ein Heizlüfter (${auF(P)} kW) läuft ${h} Stunden. 1 kWh kostet ${auE(pr)} €. Wie hoch sind die Kosten?`, `Обогреватель ${auF(P)} кВт работает ${h} ч. 1 кВт·ч стоит ${auE(pr)} €. Сколько это стоит?`, auRound(W * pr),
        [`W = ${auF(P)} · ${h} = ${auF(W)} kWh`, `Kosten = ${auF(W)} · ${auE(pr)} = ${auE(W * pr)} €`], { unit: '€', tol: 0.005 }); }
    if (t === 2) { const P = auP([10, 20, 50, 60, 100]), h = auP([2, 4, 5, 6]), d = auP([10, 30]), W = P * h * d / 1000;
      return T(`Eine ${P}-W-Lampe brennt täglich ${h} Stunden, ${d} Tage lang. Wie viele kWh verbraucht sie?`, `Лампа ${P} Вт горит ${h} ч в день, ${d} дней. Сколько кВт·ч она потребляет?`, W,
        [`${P} W · ${h} h · ${d} = ${P * h * d} Wh`, `${P * h * d} Wh : 1000 = ${auF(W)} kWh`], { unit: 'kWh' }); }
    const P = auP([1000, 1500, 2000, 2400]), m = auP([15, 30, 45]), W = P / 1000 * m / 60;
    return T(`Ein ${P}-W-Gerät läuft ${m} Minuten. Wie viele kWh verbraucht es?`, `Прибор ${P} Вт работает ${m} минут. Сколько кВт·ч он тратит?`, auRound(W),
      [`${P} W = ${auF(P / 1000)} kW,  ${m} min = ${auF(m / 60)} h`, `W = ${auF(P / 1000)} · ${auF(m / 60)} = ${auF(W)} kWh`], { unit: 'kWh' });
  },

  acdc(sub) {
    const [q, qr, r, ...w] = auP([['Was liefert eine Batterie?', 'Что даёт батарейка?', 'Gleichstrom', 'Wechselstrom', 'Drehstrom', 'gar keinen Strom'],
      ['Welche Frequenz hat das Stromnetz in Deutschland?', 'Какая частота электросети в Германии?', '50 Hz', '60 Hz', '230 Hz', '12 Hz'],
      ['Welche Spannung hat eine Haushaltssteckdose?', 'Какое напряжение в бытовой розетке?', '230 V Wechselspannung', '230 V Gleichspannung', '12 V Wechselspannung', '400 V Gleichspannung'],
      ['Wofür steht die Abkürzung DC?', 'Что означает DC?', 'Gleichstrom', 'Wechselstrom', 'Drehstrom', 'Doppelstrom'], ['Wofür steht die Abkürzung AC?', 'Что означает AC?', 'Wechselstrom', 'Gleichstrom', 'Akkustrom', 'Ampere-Strom'],
      ['Was macht ein Netzteil (z. B. ein Handy-Ladegerät)?', 'Что делает блок питания (например, зарядка телефона)?', 'Es wandelt Wechselstrom in Gleichstrom um.', 'Es erzeugt Strom aus Wärme.', 'Es wandelt Gleichstrom in Drehstrom um.', 'Es speichert Strom für Jahre.'],
      ['Welches Zeichen steht für Wechselstrom?', 'Какой знак означает переменный ток?', '~', '=', '+', 'Ω'], ['Welche Spannung hat Drehstrom (Starkstrom) im Haus?', 'Какое напряжение у трёхфазного тока в доме?', '400 V', '230 V', '110 V', '12 V'],
      ['Bei welcher Stromart ändert sich die Richtung ständig?', 'При каком токе направление постоянно меняется?', 'beim Wechselstrom', 'beim Gleichstrom', 'beim Akku', 'bei der Batterie']]);
    return MC(q, qr, r, w, [`Правильно: ${r}`]);
  },

  leiter(sub) {
    const L = [['Kupfer', 'медь'], ['Aluminium', 'алюминий'], ['Silber', 'серебро'], ['Eisen', 'железо'], ['Gold', 'золото'], ['Graphit', 'графит'], ['Messing', 'латунь']];
    const I = [['Gummi', 'резина'], ['Kunststoff (PVC)', 'пластик (PVC)'], ['Glas', 'стекло'], ['Porzellan', 'фарфор'], ['trockenes Holz', 'сухое дерево'], ['Keramik', 'керамика'], ['Luft', 'воздух']];
    const t = sub != null ? sub : auR(0, 3);
    if (t === 0) { const r = auP(L); return MC('Welcher Stoff leitet den elektrischen Strom?', 'Какой материал проводит электрический ток?', r[0], auShuffle(I).slice(0, 3).map(x => x[0]), [`${r[0]} (${r[1]}) — металл/проводник, остальные — изоляторы`]); }
    if (t === 1) { const r = auP(I); return MC('Welcher Stoff ist ein Isolator (Nichtleiter)?', 'Какой материал — изолятор (не проводит ток)?', r[0], auShuffle(L).slice(0, 3).map(x => x[0]), [`${r[0]} (${r[1]}) — изолятор, остальные проводят ток`]); }
    if (t === 2) { const all = [...L.map(x => [...x, 'Leiter']), ...I.map(x => [...x, 'Nichtleiter (Isolator)']), ['Silizium', 'кремний', 'Halbleiter'], ['Germanium', 'германий', 'Halbleiter']], x = auP(all);
      return MC(`Ist ${x[0]} ein Leiter, ein Nichtleiter oder ein Halbleiter?`, `${x[1]} — проводник, изолятор или полупроводник?`, x[2], ['Leiter', 'Nichtleiter (Isolator)', 'Halbleiter'].filter(o => o !== x[2]), [`${x[0]} (${x[1]}) — ${x[2]}`]); }
    const [q, qr, r, ...w] = auP([['Welches Metall wird am häufigsten für Kabeladern verwendet?', 'Какой металл чаще всего используют для жил кабеля?', 'Kupfer', 'Eisen', 'Gold', 'Blei'],
      ['Welcher Stoff leitet am besten?', 'Какой материал проводит лучше всего?', 'Silber', 'Kupfer', 'Eisen', 'Aluminium'], ['Woraus bestehen Computerchips hauptsächlich?', 'Из чего в основном делают компьютерные чипы?', 'Silizium (Halbleiter)', 'Kupfer', 'Gummi', 'Glas'],
      ['Leitet Leitungswasser den Strom?', 'Проводит ли водопроводная вода ток?', 'Ja, wegen der gelösten Salze.', 'Nein, nie.', 'Nur wenn es kalt ist.', 'Nur Gleichstrom.']]);
    return MC(q, qr, r, w, [`Правильно: ${r}`]);
  },

  sensor(sub) {
    const S = [['Temperatursensor', 'датчик температуры'], ['Drehzahlsensor', 'датчик оборотов'], ['Lambdasonde', 'лямбда-зонд (кислород в выхлопе)'], ['Drucksensor', 'датчик давления'], ['Lichtsensor', 'датчик света'],
      ['Regensensor', 'датчик дождя'], ['Ultraschallsensor', 'ультразвуковой датчик (парктроник)'], ['Endschalter', 'концевой выключатель'], ['Füllstandssensor', 'датчик уровня']];
    const A = [['Elektromotor', 'электромотор'], ['Magnetventil', 'электромагнитный клапан'], ['Relais', 'реле'], ['Einspritzdüse', 'форсунка'], ['Lautsprecher', 'динамик'], ['Pneumatikzylinder', 'пневмоцилиндр'],
      ['Heizelement', 'нагревательный элемент'], ['Scheibenwischermotor', 'мотор дворников'], ['LED-Leuchte', 'светодиодный фонарь']];
    const t = sub != null ? sub : auR(0, 3);
    if (t === 0) { const isS = Math.random() < 0.5, x = auP(isS ? S : A);
      return MC(`Ist ein ${x[0]} ein Sensor oder ein Aktor?`, `${x[1]} — это датчик (Sensor) или исполнительное устройство (Aktor)?`, isS ? 'Sensor' : 'Aktor', [isS ? 'Aktor' : 'Sensor'],
        [isS ? `${x[0]} (${x[1]}) измеряет / замечает → Sensor` : `${x[0]} (${x[1]}) выполняет действие → Aktor`]); }
    if (t === 1) { const r = auP(S); return MC('Welches Bauteil ist ein Sensor?', 'Какая деталь — датчик (Sensor)?', r[0], auShuffle(A).slice(0, 3).map(x => x[0]), [`${r[0]} (${r[1]}) измеряет → Sensor; остальные выполняют действие → Aktoren`]); }
    if (t === 2) { const r = auP(A); return MC('Welches Bauteil ist ein Aktor?', 'Какая деталь — исполнительное устройство (Aktor)?', r[0], auShuffle(S).slice(0, 3).map(x => x[0]), [`${r[0]} (${r[1]}) выполняет действие → Aktor; остальные измеряют → Sensoren`]); }
    const [q, qr, r, ...w] = auP([['Wofür steht EVA?', 'Что означает EVA?', 'Eingabe – Verarbeitung – Ausgabe', 'Energie – Volt – Ampere', 'Erde – Ventil – Aktor', 'Einbau – Verkabelung – Abnahme'],
      ['Welche Aufgabe hat ein Steuergerät?', 'Какая задача у блока управления?', 'Es verarbeitet die Sensorsignale und steuert die Aktoren.', 'Es misst die Temperatur.', 'Es erzeugt Strom.', 'Es dreht den Motor.'],
      ['Was macht ein Sensor?', 'Что делает датчик?', 'Er misst eine Größe und gibt ein Signal weiter.', 'Er führt eine Bewegung aus.', 'Er speichert Energie.', 'Er schaltet die Zündung.']]);
    return MC(q, qr, r, w, [`Правильно: ${r}`]);
  },
};

/* ── немецкие числительные (до 999 999) ── */
const AU_E = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
const AU_Z = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];
function auDe100(n) { return n < 20 ? AU_E[n] : (n % 10 ? (n % 10 === 1 ? 'ein' : AU_E[n % 10]) + 'und' + AU_Z[Math.floor(n / 10)] : AU_Z[n / 10]); }
function auDe1000(n) { const h = Math.floor(n / 100), r = n % 100; return (h ? (h === 1 ? 'ein' : AU_E[h]) + 'hundert' : '') + (r ? auDe100(r) : ''); }
function deNum(n) {
  if (!n) return 'null';
  if (n < 1000) return auDe1000(n);
  const th = Math.floor(n / 1000), r = n % 1000;
  return (th === 1 ? 'ein' : auDe1000(th)) + 'tausend' + (r ? auDe1000(r) : '');
}
function deNumParts(n) {
  const th = Math.floor(n / 1000), h = Math.floor(n % 1000 / 100), r = n % 100, p = [];
  if (th) p.push(`${th === 1 ? 'ein' : auDe1000(th)}tausend = ${th * 1000}`);
  if (h) p.push(`${h === 1 ? 'ein' : AU_E[h]}hundert = ${h * 100}`);
  if (r) p.push(`${auDe100(r)} = ${r}${r > 20 && r % 10 ? ` (${AU_E[r % 10]} und ${AU_Z[Math.floor(r / 10)]} — единицы идут первыми)` : ''}`);
  return p.join(' + ');
}
const AU_ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

Object.assign(AU_GEN, {
  zahlen(sub) {
    const t = sub != null ? sub : auR(0, 6);
    if (t === 0) { const a = auP([6, 7, 8, 9, 6, 7, 8, 9, 3, 4, 11, 12]), b = auR(3, 12);
      return T(`${a} · ${b} = ?`, 'Таблица умножения: сколько будет?', a * b, [`${a} · ${b} = ${a * b}`, b > 2 ? `Если забыл: ${a} · ${b - 1} = ${a * (b - 1)}, плюс ещё ${a} → ${a * b}` : null]); }
    if (t === 1) { const a = auR(3, 12), b = auR(3, 12);
      return T(`${a * b} : ${a} = ?`, 'Деление по таблице умножения.', b, [`Какое число умножить на ${a}, чтобы получилось ${a * b}?`, `${a} · ${b} = ${a * b} → ${b}`]); }
    if (t === 2) { const n = auP([auR(13, 99), auR(21, 99), auR(101, 999), auR(1001, 9999)]);
      return T(`Schreiben Sie in Ziffern: „${deNum(n)}“`, 'Запишите это число цифрами.', n, [`По частям: ${deNumParts(n)}`, `= ${n}`]); }
    if (t === 3) {
      let n; do { n = auR(21, 98); } while (n % 10 === 0 || Math.floor(n / 10) === n % 10);
      const sw = (n % 10) * 10 + Math.floor(n / 10), wr = [...new Set([sw, n + 10 <= 99 ? n + 10 : n - 10, n + 1 <= 99 && (n + 1) % 10 ? n + 1 : n - 1].filter(x => x !== n))].map(deNum);
      return MC(`Wie schreibt man ${n} auf Deutsch?`, `Как по-немецки ${n}?`, deNum(n), wr, [`Сначала единицы, потом десятки: ${n % 10} → ${AU_E[n % 10]}, «und», ${Math.floor(n / 10) * 10} → ${AU_Z[Math.floor(n / 10)]}`, `${n} = ${deNum(n)}`]);
    }
    if (t === 4) {
      const k = auR(0, 2);
      if (k === 0) { const n = auR(101, 999), v = n / 100, r = Math.round(n / 10) / 10, d = n % 10;
        return T(`Runden Sie auf eine Nachkommastelle: ${auF(v)}`, `Округлите до одного знака после запятой: ${auF(v)}`, r, [`Смотрим на вторую цифру после запятой: ${d}`, d >= 5 ? `${d} ≥ 5 → вверх` : `${d} < 5 → вниз`, `≈ ${auF(r)}`]); }
      if (k === 1) { const n = auR(1001, 9999), r = Math.round(n / 100) * 100, d = Math.floor(n / 10) % 10;
        return T(`Runden Sie auf Hunderter: ${n}`, `Округлите до сотен: ${n}`, r, [`Смотрим на цифру десятков: ${d}`, d >= 5 ? `${d} ≥ 5 → вверх` : `${d} < 5 → вниз`, `≈ ${r}`]); }
      const n = auR(1001, 9999), v = n / 1000, r = Math.round(n / 10) / 100, d = n % 10;
      return T(`Runden Sie auf zwei Nachkommastellen: ${auF(v)}`, `Округлите до двух знаков после запятой: ${auF(v)}`, r, [`Смотрим на третью цифру после запятой: ${d}`, d >= 5 ? `${d} ≥ 5 → вверх` : `${d} < 5 → вниз`, `≈ ${auF(r)}`]);
    }
    if (t === 5) {
      const d = auP([3, 4, 5, 9]), ok = d * auR(Math.ceil(100 / d), Math.floor(999 / d)), wr = new Set();
      while (wr.size < 3) { const x = auR(100, 999); if (x % d) wr.add(x); }
      const rule = { 3: 'сумма цифр делится на 3', 4: 'две последние цифры делятся на 4', 5: 'оканчивается на 0 или 5', 9: 'сумма цифр делится на 9' }[d];
      const qs = String(ok).split('').reduce((s, c) => s + +c, 0);
      return MC(`Welche Zahl ist durch ${d} teilbar?`, `Какое число делится на ${d}?`, String(ok), [...wr].map(String), [`Признак: ${rule}`, d === 3 || d === 9 ? `${ok}: ${String(ok).split('').join(' + ')} = ${qs} → делится на ${d}` : `${ok} : ${d} = ${ok / d}`]);
    }
    const k = auR(0, 2), a = auR(2, 9), b = auR(a + 1, 15);
    if (k === 0) return T(`${a} − ${b} = ?`, 'Вычислите (ответ может быть отрицательным).', a - b, [`Из меньшего вычитаем большее → минус`, `${b} − ${a} = ${b - a} → ${a - b}`]);
    if (k === 1) return T(`−${b} + ${a} = ?`, 'Вычислите.', a - b, [`Как температура: было −${b}, стало теплее на ${a}`, `= ${a - b}`]);
    return T(`(−${a}) · ${b - a} = ?`, 'Вычислите (минус на плюс → минус).', -a * (b - a), [`${a} · ${b - a} = ${a * (b - a)}`, `Минус на плюс → минус: ${-a * (b - a)}`]);
  },

  mechanik(sub) {
    const t = sub != null ? sub : auR(0, 6);
    if (t === 0) { const h = auP([2, 3, 4, 5]), v = auP([40, 50, 60, 75, 80, 90, 100]);
      return T(`Ein Lkw fährt ${v * h} km in ${h} Stunden. Wie hoch ist seine Durchschnittsgeschwindigkeit?`, `Грузовик проезжает ${v * h} км за ${h} ч. Какая у него средняя скорость?`, v, [`v = s / t = ${v * h} / ${h}`, `= ${v} km/h`], { unit: 'km/h' }); }
    if (t === 1) { const [kmh, ms] = auP([[36, 10], [54, 15], [72, 20], [90, 25], [108, 30], [18, 5]]);
      return Math.random() < 0.5
        ? T(`Rechnen Sie um: ${kmh} km/h = ? m/s`, `Переведите: ${kmh} км/ч = ? м/с`, ms, ['km/h → m/s: делим на 3,6', `${kmh} : 3,6 = ${ms} m/s`], { unit: 'm/s' })
        : T(`Rechnen Sie um: ${ms} m/s = ? km/h`, `Переведите: ${ms} м/с = ? км/ч`, kmh, ['m/s → km/h: умножаем на 3,6', `${ms} · 3,6 = ${kmh} km/h`], { unit: 'km/h' }); }
    if (t === 2) { const n = auP([2, 3, 4, 6]), L = n * auP([50, 100, 150, 200]);
      return T(`Ein Flaschenzug hat ${n} tragende Seile. Die Last beträgt ${L} N. Mit welcher Kraft muss man ziehen (ohne Reibung)?`, `У полиспаста ${n} несущих верёвки. Груз ${L} Н. С какой силой нужно тянуть (без трения)?`, L / n,
        ['F = Last : Anzahl der tragenden Seile', `= ${L} : ${n} = ${L / n} N`], { unit: 'N' }); }
    if (t === 3) { const A1 = auP([1, 2, 5]), k = auP([5, 10, 20]), F1 = auP([20, 50, 100]);
      return T(`Hydraulische Presse: kleiner Kolben ${A1} cm², großer Kolben ${A1 * k} cm². Auf den kleinen Kolben wirken ${F1} N. Welche Kraft entsteht am großen Kolben?`, `Гидравлический пресс: малый поршень ${A1} см², большой ${A1 * k} см². На малый давят ${F1} Н. Какая сила на большом?`, F1 * k,
        [`Площадь больше в ${A1 * k} : ${A1} = ${k} раз`, `F₂ = ${F1} · ${k} = ${F1 * k} N`], { unit: 'N' }); }
    if (t === 4) { const c = [[100, 2], [100, 4], [100, 5], [200, 4], [200, 5], [500, 10], [500, 25], [1000, 20], [1000, 50], [600, 20]], [F, A] = auP(c);
      return T(`Eine Kraft von ${F} N wirkt auf eine Fläche von ${A} cm². Wie groß ist der Druck in N/cm²?`, `Сила ${F} Н действует на площадь ${A} см². Какое давление в Н/см²?`, F / A, [`p = F / A = ${F} / ${A}`, `= ${auF(F / A)} N/cm²`], { unit: 'N/cm²' }); }
    if (t === 5) { const v = auP([60, 80, 100, 120]), h = auP([0.5, 1.5, 2.5, 3]);
      return T(`Ein Auto fährt ${h} Stunden mit ${v} km/h. Welche Strecke legt es zurück?`, `Машина едет ${auF(h)} ч со скоростью ${v} км/ч. Какой путь она проедет?`, v * h, [`s = v · t = ${v} · ${auF(h)}`, `= ${auF(v * h)} km`], { unit: 'km' }); }
    const [q, qr, r, ...w] = auP([['Was bewirkt eine feste Rolle?', 'Что даёт неподвижный блок?', 'Sie ändert nur die Richtung der Kraft.', 'Sie halbiert die Kraft.', 'Sie verdoppelt die Kraft.', 'Sie verkürzt das Seil.'],
      ['Was bewirkt eine lose Rolle?', 'Что даёт подвижный блок?', 'Man braucht die halbe Kraft, aber den doppelten Seilweg.', 'Man braucht die doppelte Kraft.', 'Sie ändert nur die Richtung.', 'Sie hat keine Wirkung.'],
      ['Warum schneidet ein scharfes Messer besser?', 'Почему острый нож режет лучше?', 'Die Fläche ist kleiner, deshalb ist der Druck größer.', 'Die Kraft ist kleiner.', 'Das Messer ist schwerer.', 'Der Druck ist kleiner.'],
      ['Was sagt die „goldene Regel der Mechanik“?', 'Что говорит «золотое правило механики»?', 'Was man an Kraft spart, muss man an Weg zusetzen.', 'Kraft und Weg werden beide kleiner.', 'Die Kraft ist immer gleich der Last.', 'Schwere Körper fallen schneller.'],
      ['Wie groß ist die Gewichtskraft von 1 kg ungefähr?', 'Какая примерно сила тяжести у 1 кг?', '10 N', '1 N', '100 N', '1000 N'],
      ['Wozu dient Schmieröl an Maschinen?', 'Зачем нужна смазка в машинах?', 'Es verringert die Reibung.', 'Es erhöht die Reibung.', 'Es erhöht den Druck.', 'Es leitet den Strom.']]);
    return MC(q, qr, r, w, [`Правильно: ${r}`]);
  },

  sicherheit(sub) {
    const R = ['Freischalten', 'Gegen Wiedereinschalten sichern', 'Spannungsfreiheit feststellen', 'Erden und kurzschließen', 'Benachbarte, unter Spannung stehende Teile abdecken oder abschranken'];
    const order = `Порядок: ${R.map((r, k) => `${k + 1}. ${r}`).join(';  ')}`, t = sub != null ? sub : auR(0, 3);
    if (t === 0) { const i = auR(0, 4); return MC(`Welche ist die ${i + 1}. Sicherheitsregel?`, `Какое ${i + 1}-е правило безопасности?`, R[i], auShuffle(R.filter((_, k) => k !== i)), [order]); }
    if (t === 1) { const i = auR(0, 3); return MC(`Welche Sicherheitsregel kommt nach „${R[i]}“?`, `Какое правило идёт после «${R[i]}»?`, R[i + 1], auShuffle(R.filter((_, k) => k !== i + 1 && k !== i)), [order]); }
    const pool = t === 2 ? [['Welche Farbe hat der Schutzleiter (PE)?', 'Какого цвета защитный провод (PE)?', 'grün-gelb', 'blau', 'braun', 'schwarz'],
      ['Welche Farbe hat der Neutralleiter (N)?', 'Какого цвета нулевой провод (N)?', 'blau', 'grün-gelb', 'braun', 'rot'], ['Welche Farbe hat der Außenleiter (L) meistens?', 'Какого цвета обычно фаза (L)?', 'braun', 'blau', 'grün-gelb', 'weiß']]
      : [['Bei welchem Fehlerstrom löst ein üblicher FI-Schutzschalter aus?', 'При каком токе утечки срабатывает обычное УЗО?', '30 mA', '3 A', '16 A', '300 A'],
        ['Ab welchem Strom durch den Körper besteht Lebensgefahr (ungefähr)?', 'Примерно с какого тока через тело возникает опасность для жизни?', 'etwa 50 mA', 'etwa 5 A', 'etwa 1 µA', 'erst ab 100 A'],
        ['Was ist ein Kurzschluss?', 'Что такое короткое замыкание?', 'Außenleiter und Neutralleiter berühren sich fast ohne Widerstand.', 'Ein sehr kurzes Kabel.', 'Ein ausgeschalteter Stromkreis.', 'Eine Lampe mit kleiner Leistung.'],
        ['Wozu dient ein Leitungsschutzschalter (LS)?', 'Для чего нужен автоматический выключатель (LS)?', 'Er schützt die Leitung vor Überlast und Kurzschluss.', 'Er misst den Stromverbrauch.', 'Er erhöht die Spannung.', 'Er ersetzt den Schutzleiter.'],
        ['Womit stellt man die Spannungsfreiheit fest?', 'Чем проверяют отсутствие напряжения?', 'mit einem zweipoligen Spannungsprüfer', 'mit dem Finger', 'mit einem einpoligen Phasenprüfer', 'mit einem Hammer'],
        ['Ab welcher Berührungsspannung (Wechselspannung) gilt es als gefährlich?', 'С какого напряжения прикосновения (переменного) считается опасным?', 'über 50 V', 'über 500 V', 'über 5 V', 'erst über 1000 V']];
    const [q, qr, r, ...w] = auP(pool);
    return MC(q, qr, r, w, [`Правильно: ${r}`]);
  },

  logik(sub) {
    const t = sub != null ? sub : auR(0, 7), fmt = a => a.join(',  ');
    let s, ans, st;
    if (t === 0) { const d = auP([2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15]), neg = Math.random() < 0.25, a = neg ? auR(60, 99) : auR(1, 30), dd = neg ? -d : d;
      s = [0, 1, 2, 3, 4].map(i => a + dd * i); ans = a + dd * 5; st = [`Разности: ${dd > 0 ? '+' : '−'}${d} каждый раз`, `${s[4]} ${dd > 0 ? '+' : '−'} ${d} = ${ans}`]; }
    else if (t === 1) { const a = auP([1, 2, 3, 4, 5]), q = auP([2, 3]); s = [0, 1, 2, 3, 4].map(i => a * q ** i); ans = a * q ** 5; st = [`Каждое следующее ×${q}`, `${s[4]} · ${q} = ${ans}`]; }
    else if (t === 2) { const a = auR(1, 10), d0 = auR(1, 3), inc = auR(1, 2); s = [a]; for (let i = 0; i < 4; i++) s.push(s[i] + d0 + inc * i); ans = s[4] + d0 + inc * 4;
      st = [`Разности: ${[0, 1, 2, 3].map(i => '+' + (d0 + inc * i)).join(', ')} — растут на ${inc}`, `Следующая разность +${d0 + inc * 4}: ${s[4]} + ${d0 + inc * 4} = ${ans}`]; }
    else if (t === 3) { const [o1, v1, o2, v2] = auP([['×', 2, '−', 3], ['+', 5, '−', 2], ['×', 3, '−', 4], ['+', 4, '×', 2], ['×', 2, '+', 1]]), ap = (x, o, v) => o === '×' ? x * v : o === '+' ? x + v : x - v;
      s = [auR(3, 8)]; for (let i = 0; i < 5; i++) s.push(i % 2 ? ap(s[i], o2, v2) : ap(s[i], o1, v1)); ans = ap(s[5], o1, v1);
      st = [`Действия чередуются: ${o1}${v1}, ${o2}${v2}, ${o1}${v1}, ${o2}${v2} …`, `Следующее: ${s[5]} ${o1} ${v1} = ${ans}`]; }
    else if (t === 4) { const a = auR(1, 9), da = auR(2, 5), b = auR(20, 40), db = auR(1, 4);
      s = []; for (let i = 0; i < 3; i++) s.push(a + da * i, b - db * i); ans = a + da * 3;
      st = [`Два ряда через одно: ${a}, ${a + da}, ${a + 2 * da} (+${da}) и ${b}, ${b - db}, ${b - 2 * db} (−${db})`, `Следующее — из первого ряда: ${a + 2 * da} + ${da} = ${ans}`]; }
    else if (t === 5) { const k = auR(1, 6), plus = Math.random() < 0.4 ? 1 : 0; s = [0, 1, 2, 3, 4].map(i => (k + i) ** 2 + plus); ans = (k + 5) ** 2 + plus;
      st = [`Квадраты${plus ? ' плюс 1' : ''}: ${s.map((x, i) => `${k + i}²${plus ? '+1' : ''}`).join(', ')}`, `${k + 5}²${plus ? ' + 1' : ''} = ${ans}`]; }
    else if (t === 6) { s = [auR(1, 5), auR(1, 6)]; for (let i = 2; i < 6; i++) s.push(s[i - 1] + s[i - 2]); ans = s[4] + s[5]; st = ['Каждое число = сумма двух предыдущих', `${s[4]} + ${s[5]} = ${ans}`]; }
    else {
      const d = auR(2, 4), a = auR(0, 25 - d * 5), L = [0, 1, 2, 3, 4].map(i => AU_ABC[a + d * i]), ai = a + d * 5, A = AU_ABC[ai];
      const wr = [ai - 1, ai + 1, ai - 2, ai + 2, ai + 3].filter(i => i >= 0 && i < 26 && i !== ai).slice(0, 3).map(i => AU_ABC[i]);
      return MC(`Welcher Buchstabe folgt? ${L.join(',  ')},  ?`, 'Какая буква продолжает ряд?', A, wr, [`Номера в алфавите: ${L.map(c => `${c}=${AU_ABC.indexOf(c) + 1}`).join(', ')} — шаг +${d}`, `${a + d * 4 + 1} + ${d} = ${a + d * 5 + 1} → ${A}`]);
    }
    return T(`Welche Zahl folgt? ${fmt(s)},  ?`, 'Какое число логично продолжает ряд?', ans, st);
  },

  konz(sub) {
    const t = sub != null ? sub : auR(0, 2), grp = x => x.match(/.{1,3}/g).join(' ');
    const mk = (n, pool) => Array.from({ length: n }, () => pool[auR(0, pool.length - 1)]).join('');
    const mutate = (x, pool) => { const a = x.split(''), i = auR(0, a.length - 1); let c; do { c = pool[auR(0, pool.length - 1)]; } while (c === a[i]); a[i] = c; return { s: a.join(''), i }; };
    if (t === 0) {
      const pool = Math.random() < 0.4 ? 'ABCDEFHKLMNPRSTUVWXZ0123456789' : '0123456789', a = mk(auR(8, 11), pool), same = Math.random() < 0.5, m = mutate(a, pool), b = same ? a : m.s;
      return MC('Sind die beiden Zeichenfolgen genau gleich?', 'Две строки совпадают полностью?', same ? 'gleich' : 'verschieden', [same ? 'verschieden' : 'gleich'],
        [same ? 'Все знаки совпадают' : `Отличие в ${m.i + 1}-м знаке: «${a[m.i]}» и «${b[m.i]}»`, `По группам: ${grp(a)}   |   ${grp(b)}`], { code: a + '\n' + b });
    }
    if (t === 1) { const s = mk(24, '0123456789'), d = String(auR(0, 9)), n = s.split('').filter(c => c === d).length, g = s.match(/.{4}/g);
      return T(`Wie oft kommt die Ziffer ${d} vor?`, `Сколько раз в строке встречается цифра ${d}?`, n, [`По группам из 4: ${g.map(x => `${x} (${x.split('').filter(c => c === d).length})`).join(', ')}`, `Всего: ${n}`], { code: g.join(' ') }); }
    const pool = 'ABCDEFHKLMNPRSTUVWXZ', orig = `${mk(2, pool)}-${mk(4, '0123456789')}-${mk(1, pool)}`, wr = new Set();
    while (wr.size < 3) { const m = mutate(orig.replace(/-/g, ''), orig.replace(/-/g, '').split('').some(c => /\d/.test(c)) ? '0123456789ABCDEFHKLMNPRSTUVWXZ' : pool).s; wr.add(`${m.slice(0, 2)}-${m.slice(2, 6)}-${m.slice(6)}`); }
    wr.delete(orig);
    return MC('Welche Bestellnummer stimmt genau mit dem Original überein?', 'Какой номер заказа точно совпадает с оригиналом?', orig, [...wr], [`Оригинал: ${orig}`, 'Сравнивай по частям: буквы, цифры, последняя буква'], { code: 'Original: ' + orig, mono: true });
  },

  deutsch(sub) {
    const t = sub != null ? sub : auR(0, 4);
    if (t === 0) {
      const [s, a] = auP([['Ich hoffe, ___ du morgen kommst.', 'dass'], ['Das ist das Werkzeug, ___ ich gestern gekauft habe.', 'das'], ['Er sagt, ___ die Maschine kaputt ist.', 'dass'], ['___ Kabel ist zu kurz.', 'Das'],
        ['Es ist wichtig, ___ man pünktlich ist.', 'dass'], ['Wo ist das Buch, ___ auf dem Tisch lag?', 'das'], ['Ich weiß, ___ ich noch viel lernen muss.', 'dass'], ['___ habe ich nicht gewusst.', 'Das'],
        ['Wir freuen uns, ___ Sie da sind.', 'dass'], ['Das Auto, ___ dort steht, gehört meinem Chef.', 'das']]);
      const other = a === 'dass' ? 'das' : a === 'das' ? 'dass' : 'Dass';
      return MC(`Setzen Sie ein: ${s}`, 'Вставьте das или dass.', a, [other], [a.toLowerCase() === 'dass' ? 'Это союз «что» (глагол в конце), на dieses/welches не заменить → dass' : 'Можно заменить на dieses / welches (артикль, «который» или «это») → das', `${s.replace('___', a)}`]);
    }
    if (t === 1) {
      const [c, ...w] = auP([['Maschine', 'Maschiene', 'Mashine', 'Maschinne'], ['Reparatur', 'Reperatur', 'Reparattur', 'Repratur'], ['Standard', 'Standart', 'Standarth', 'Stantard'], ['Ergebnis', 'Ergebniss', 'Ergäbnis', 'Ergebnisz'],
        ['wahrscheinlich', 'warscheinlich', 'wahrscheinlig', 'warscheinlig'], ['vielleicht', 'vieleicht', 'fielleicht', 'vielleich'], ['nämlich', 'nähmlich', 'nämmlich', 'nemlich'], ['endlich', 'entlich', 'endtlich', 'ändlich'],
        ['Adresse', 'Addresse', 'Adrese', 'Adreße'], ['Paket', 'Packet', 'Packett', 'Pakett'], ['Werkstatt', 'Werkstat', 'Werckstatt', 'Werkstadt'], ['Elektriker', 'Elecktriker', 'Elektricker', 'Electriker'],
        ['interessant', 'interresant', 'intressant', 'interesant'], ['Batterie', 'Baterie', 'Batteri', 'Battarie'], ['Widerstand', 'Wiederstand', 'Wiederstandt', 'Widerstant'], ['Rhythmus', 'Rytmus', 'Rhytmus', 'Rythmus']]);
      return MC('Welches Wort ist richtig geschrieben?', 'Какое слово написано правильно?', c, w, [`Правильно: ${c}`, c === 'Widerstand' ? 'wider = «против» (сопротивление), а wieder = «снова»' : null]);
    }
    if (t === 2) {
      const [w, a, n] = auP([['die Stra__e', 'ß', 'долгое «а»'], ['der Flu__', 'ss', 'краткое «u»'], ['gro__', 'ß', 'долгое «о»'], ['ich mu__', 'ss', 'краткое «u»'], ['hei__en', 'ß', 'дифтонг «ei»'], ['e__en', 'ss', 'краткое «е»'],
        ['der Fu__', 'ß', 'долгое «u»'], ['das Schlo__', 'ss', 'краткое «о»'], ['drau__en', 'ß', 'дифтонг «au»'], ['bi__chen', 'ss', 'краткое «i»'], ['die Grü__e', 'ß', 'долгое «ü»'], ['wi__en', 'ss', 'краткое «i»']]);
      return MC(`ss oder ß?  ${w.replace('__', '…')}`, 'Что вставить: ss или ß?', a, [a === 'ß' ? 'ss' : 'ß'], [`${n} → ${a}`, w.replace('__', a)]);
    }
    if (t === 3) {
      const [s, a, o, n] = auP([['Ich wohne ___ drei Jahren in Köln.', 'seit', 'seid', 'seit = с какого времени'], ['Ihr ___ heute sehr pünktlich.', 'seid', 'seit', 'seid = вы есть (ihr seid)'],
        ['___ wann arbeiten Sie hier?', 'Seit', 'Seid', 'seit = с какого времени'], ['___ ihr fertig?', 'Seid', 'Seit', 'seid = вы есть'], ['Kannst du das bitte ___holen?', 'wieder', 'wider', 'wieder = снова'],
        ['Er hat mir ___sprochen.', 'wider', 'wieder', 'wider = против (widersprechen)'], ['Wir sehen uns morgen ___.', 'wieder', 'wider', 'wieder = снова'], ['Der ___stand ist zu groß.', 'Wider', 'Wieder', 'Widerstand — от wider «против»']]);
      return MC(`Setzen Sie ein: ${s}`, 'Что вставить?', a, [o], [n, s.replace('___', a)]);
    }
    const [c, ...w] = auP([['Ich komme heute nicht, weil ich krank bin.', 'Ich komme heute nicht weil, ich krank bin.', 'Ich komme, heute nicht weil ich krank bin.', 'Ich komme heute, nicht, weil ich krank bin.'],
      ['Er kauft Kabel, Schalter und Dosen.', 'Er kauft Kabel, Schalter, und Dosen.', 'Er kauft, Kabel Schalter und Dosen.', 'Er kauft Kabel Schalter, und Dosen.'],
      ['Ich hoffe, dass es klappt.', 'Ich hoffe dass, es klappt.', 'Ich, hoffe dass es klappt.', 'Ich hoffe dass es, klappt.'],
      ['Der Kollege, der neu ist, hilft mir.', 'Der Kollege der neu ist, hilft mir.', 'Der Kollege, der neu ist hilft mir.', 'Der, Kollege der neu ist hilft mir.'],
      ['Das Gerät ist klein, aber sehr stark.', 'Das Gerät ist klein aber, sehr stark.', 'Das Gerät, ist klein aber sehr stark.', 'Das Gerät ist, klein, aber sehr stark.']]);
    return MC('Welcher Satz ist richtig (Kommas)?', 'В каком предложении запятые стоят правильно?', c, w, ['Запятая перед weil, dass, aber и вокруг придаточного; перед und при перечислении — нет', `Правильно: ${c}`]);
  },

  wissen(sub) {
    const caps = [['Bayern', 'München'], ['Nordrhein-Westfalen', 'Düsseldorf'], ['Baden-Württemberg', 'Stuttgart'], ['Niedersachsen', 'Hannover'], ['Hessen', 'Wiesbaden'], ['Sachsen', 'Dresden'], ['Rheinland-Pfalz', 'Mainz'],
      ['Thüringen', 'Erfurt'], ['Schleswig-Holstein', 'Kiel'], ['Brandenburg', 'Potsdam'], ['Sachsen-Anhalt', 'Magdeburg'], ['Mecklenburg-Vorpommern', 'Schwerin'], ['Saarland', 'Saarbrücken']];
    if (sub != null ? sub === 0 : Math.random() < 0.35) { const c = auP(caps); return MC(`Wie heißt die Landeshauptstadt von ${c[0]}?`, `Какая столица земли ${c[0]}?`, c[1], auShuffle(caps.filter(x => x !== c)).slice(0, 3).map(x => x[1]), [`${c[0]} — ${c[1]}`]); }
    const [q, qr, r, ...w] = auP([['Wie viele Bundesländer hat Deutschland?', 'Сколько федеральных земель в Германии?', '16', '12', '14', '18'], ['Wie heißt die Hauptstadt Deutschlands?', 'Какая столица Германии?', 'Berlin', 'Bonn', 'Frankfurt am Main', 'München'],
      ['Wann ist der Tag der Deutschen Einheit?', 'Когда День германского единства?', 'am 3. Oktober', 'am 1. Mai', 'am 9. November', 'am 3. Juni'], ['Seit wann gibt es das Grundgesetz?', 'С какого года действует Основной закон?', 'seit 1949', 'seit 1945', 'seit 1990', 'seit 1871'],
      ['Wie heißt das Parlament Deutschlands?', 'Как называется парламент Германии?', 'der Bundestag', 'der Bundesrat', 'das Kanzleramt', 'der Landtag'], ['Wer wählt den Bundeskanzler oder die Bundeskanzlerin?', 'Кто избирает федерального канцлера?', 'der Bundestag', 'das Volk direkt', 'der Bundespräsident', 'die Bundesländer'],
      ['Wer ist das Staatsoberhaupt Deutschlands?', 'Кто глава государства в Германии?', 'der Bundespräsident / die Bundespräsidentin', 'der Bundeskanzler', 'der Bundestagspräsident', 'der Ministerpräsident'],
      ['Alle wie viele Jahre wird der Bundestag normalerweise gewählt?', 'Раз в сколько лет обычно выбирают бундестаг?', 'alle 4 Jahre', 'alle 2 Jahre', 'alle 5 Jahre', 'alle 6 Jahre'],
      ['Wie heißt der höchste Berg Deutschlands?', 'Как называется самая высокая гора Германии?', 'die Zugspitze', 'der Brocken', 'der Feldberg', 'der Watzmann'], ['Welcher ist der längste Fluss in Deutschland?', 'Какая река самая длинная в Германии?', 'der Rhein', 'die Elbe', 'die Weser', 'der Main'],
      ['Wie viele Nachbarländer hat Deutschland?', 'Сколько соседних стран у Германии?', '9', '5', '7', '11'], ['An welchen Meeren liegt Deutschland?', 'У каких морей лежит Германия?', 'Nordsee und Ostsee', 'Mittelmeer und Nordsee', 'Ostsee und Schwarzes Meer', 'nur an der Nordsee'],
      ['Seit wann gibt es den Euro als Bargeld?', 'С какого года евро есть наличными?', 'seit 2002', 'seit 1990', 'seit 1999', 'seit 2010'], ['In welcher Stadt sitzt die Europäische Zentralbank?', 'В каком городе Европейский центральный банк?', 'Frankfurt am Main', 'Berlin', 'Brüssel', 'Paris'],
      ['Was ist der Nettolohn?', 'Что такое Nettolohn?', 'der Lohn nach Abzug von Steuern und Sozialabgaben', 'der Lohn vor allen Abzügen', 'der Lohn für Überstunden', 'das Urlaubsgeld'],
      ['Welche Versicherung gehört NICHT zur gesetzlichen Sozialversicherung?', 'Какая страховка НЕ входит в обязательное соцстрахование?', 'die Haftpflichtversicherung', 'die Krankenversicherung', 'die Rentenversicherung', 'die Arbeitslosenversicherung'],
      ['Wer nimmt die Abschlussprüfung im Handwerk ab?', 'Кто принимает выпускной экзамен в ремесле?', 'die Handwerkskammer (HWK)', 'die Agentur für Arbeit', 'die Berufsschule allein', 'das Finanzamt'],
      ['Wo lernen Auszubildende die Theorie?', 'Где азубы изучают теорию?', 'in der Berufsschule', 'an der Universität', 'im Gymnasium', 'im Jobcenter'],
      ['Welches Bundesland hat die meisten Einwohner?', 'В какой земле больше всего жителей?', 'Nordrhein-Westfalen', 'Bayern', 'Berlin', 'Niedersachsen'], ['Welches Bundesland ist flächenmäßig am größten?', 'Какая земля самая большая по площади?', 'Bayern', 'Niedersachsen', 'Nordrhein-Westfalen', 'Brandenburg']]);
    return MC(q, qr, r, w, [`Правильно: ${r}`]);
  },
});

/* ══════════════ ПРОВЕРКА ОТВЕТА ══════════════ */
function auNumCands(raw) {
  let s = String(raw == null ? '' : raw).replace(/[−–]/g, '-').replace(/[^0-9,.\- ]/g, ' ').trim();
  s = s.replace(/(\d) (?=\d{3}(\D|$))/g, '$1').replace(/\s+/g, '');
  if (!/\d/.test(s)) return [];
  const out = [];
  if (s.includes(',')) out.push(parseFloat(s.replace(/\./g, '').replace(',', '.')));
  else if (s.includes('.')) { out.push(parseFloat(s)); out.push(parseFloat(s.replace(/\./g, ''))); }
  else out.push(parseFloat(s));
  return out.filter(x => !isNaN(x));
}
function auFrac(raw) {
  const s = String(raw || '').replace(/[−–]/g, '-').trim();
  let m = s.match(/^(-?\d+)\s+(\d+)\s*\/\s*(\d+)$/);
  if (m && +m[3]) { const w = +m[1], n = +m[2], d = +m[3], N = Math.abs(w) * d + n; return { v: (w < 0 ? -1 : 1) * N / d, n: (w < 0 ? -N : N), d }; }
  m = s.match(/^(-?\d+)\s*\/\s*(\d+)$/);
  if (m && +m[2]) return { v: +m[1] / +m[2], n: +m[1], d: +m[2] };
  const c = auNumCands(s); return c.length ? { v: c[0], n: null, d: null } : null;
}
/* → { ok, note } */
function auCheck(task, raw) {
  if (task.type === 'mc') return { ok: raw === task.a };
  if (task.type === 'frac') {
    const f = auFrac(raw), [n, d] = task.a; if (!f) return { ok: false };
    const ok = Math.abs(f.v - n / d) < 1e-9;
    if (ok && task.reduce && (f.n == null || auGcd(f.n, f.d) !== 1)) return { ok: false, note: 'Значение верное, но дробь нужно сократить до конца.' };
    if (ok && f.n != null && auGcd(f.n, f.d) !== 1) return { ok: true, note: `Верно! Короче: ${n}/${d}.` };
    return { ok };
  }
  const tol = task.tol != null ? task.tol : Math.max(1e-9, Math.abs(task.a) * 1e-6);
  return { ok: auNumCands(raw).some(x => Math.abs(x - task.a) <= tol) };
}
function auAnsText(task) {
  if (task.type === 'mc') return task.optSvg ? `${AU_SYMN[task.opts[task.a]][0]} — ${AU_SYMN[task.opts[task.a]][1]}` : task.opts[task.a];
  if (task.type === 'frac') return `${task.a[0]}/${task.a[1]}`;
  return `${task.pre ? task.pre + ' ' : ''}${task.unit === '€' ? auE(task.a) : auF(task.a)}${task.unit ? ' ' + task.unit : ''}`;
}

/* ══════════════ ПРОГРЕСС ══════════════ */
const auTopics = () => window.AU_TOPICS || [];
const auTopic = id => auTopics().find(t => t.id === id);
const auHash = s => { let h = 5381; for (const c of String(s)) h = ((h << 5) + h + c.charCodeAt(0)) | 0; return (h >>> 0).toString(36); };
const auCardKey = c => auHash((c[2] || '') + '|' + c[0] + '|' + c[1]);
function auKnown(id, p = loadProg()) { const r = p['auk_' + id]; return new Set(r && Array.isArray(r.ids) ? r.ids : []); }
function auSetKnown(id, key, on) {
  const p = loadProg(), s = auKnown(id, p);
  if (on) s.add(key); else s.delete(key);
  p['auk_' + id] = { ids: [...s], updatedAt: Date.now() }; saveProg(p);
}
function auBest(key, p = loadProg()) { return (p[key] && p[key].best) || 0; }
function auSaveBest(key, pct) { const p = loadProg(), c = p[key] || {}; p[key] = { best: Math.max(c.best || 0, pct), n: (c.n || 0) + 1, updatedAt: Date.now() }; saveProg(p); }

/* ══════════════ ЭКРАН ══════════════ */
function renderAusbildungScreen() { show('ausbildung'); auRender(); }
function auStopTimer() { if (AU_TIMER) { clearInterval(AU_TIMER); AU_TIMER = null; } }
function auGo(view, extra = {}) { auStopTimer(); Object.assign(AU, { view }, extra); auRender(); window.scrollTo({ top: 0 }); }
function auRender() {
  const b = $('au-body'); if (!b) return;
  if (AU.view === 'topic' && auTopic(AU.topic)) auTopicView(b);
  else if (AU.view === 'path') auPathView(b);
  else if (AU.view === 'drill' && auDrill(AU.drill)) auDrillView(b);
  else if (AU.view === 'page' && auPage(AU.page)) auPageView(b);
  else if (AU.view === 'cards') auDeckView(b, null);
  else if (AU.view === 'test') auRunView(b);
  else { AU.view = 'home'; auHomeView(b); }
}
const auTx = s => escapeHtml(String(s)).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`(.+?)`/g, '<code>$1</code>').replace(/\n/g, '<br>');
/* ── план с нуля ── */
const auPage = id => (window.AU_PAGES || []).find(x => x.id === id);
const auDrills = () => window.AU_DRILLS || [];
const auDrill = id => auDrills().find(d => d.id === id);
const auDrillNo = id => auDrills().findIndex(d => d.id === id) + 1;
function auDrillStat(id, p = loadProg()) { return p['aud_' + id] || { n: 0, ok: 0, streak: 0, best: 0, done: false }; }
/* шаги этапа: страница «по желанию» → задания этапа → остальные шаги (тест, страница) */
function auStageItems(i) {
  const s = (window.AU_PATH || [])[i]; if (!s) return [];
  return [...s.items.filter(it => it.opt), ...auDrills().filter(d => d.st === i).map(d => ({ drill: d.id })), ...s.items.filter(it => !it.opt)];
}
function auItemDone(it, p) {
  if (it.drill) return !!auDrillStat(it.drill, p).done;
  if (it.topic) return auBest('au_' + it.topic, p) >= 80;
  if (it.page) return !!(p['aur_' + it.page] && p['aur_' + it.page].on);
  if (it.test) return auBest('au__test', p) >= it.test || !!(p['au__testok'] && p['au__testok'].on);
  return false;
}
function auPathInfo(p = loadProg()) {
  const st = (window.AU_PATH || []).map((s, i) => { const its = auStageItems(i).filter(it => !it.opt); return { s, i, its, done: its.filter(it => auItemDone(it, p)).length, n: its.length }; });
  const cur = st.findIndex(x => x.done < x.n);
  return { st, cur: cur < 0 ? st.length : cur, items: st.reduce((a, x) => a + x.n, 0), doneItems: st.reduce((a, x) => a + x.done, 0) };
}
function auNextItem(p = loadProg()) {
  for (let i = 0; i < (window.AU_PATH || []).length; i++) for (const it of auStageItems(i)) if (!it.opt && !auItemDone(it, p)) return it;
  return null;
}
function auStageOf(topicId) { const d = auDrills().find(x => x.gen === topicId); return d ? d.st : -1; }
function auItemInfo(it, p = loadProg()) {
  if (it.drill) { const d = auDrill(it.drill); if (!d) return null; const st = auDrillStat(d.id, p), t = auTopic(d.gen);
    return { e: t ? t.emoji : '✍️', no: auDrillNo(d.id), de: d.de, ru: d.ru, meta: st.n ? `${st.ok} ✓ / ${st.n}` : lstr('noch nicht geübt', 'ещё не решал', 'ще не розв’язував') }; }
  if (it.topic) { const t = auTopic(it.topic); if (!t) return null; return { e: t.emoji, de: t.de, ru: t.ru, meta: '' }; }
  if (it.page) { const g = auPage(it.page); return g && { e: g.emoji, de: g.de, ru: g.ru + (it.opt ? lstr(' (optional)', ' (по желанию)', ' (за бажанням)') : ''), meta: auItemDone(it, p) ? lstr('gelesen', 'прочитано', 'прочитано') : lstr('lesen', 'прочитать', 'прочитати') }; }
  if (it.test) { const b = auBest('au__test', p); return { e: '🎯', de: 'Probetest', ru: lstr('Probetest: alle Themen gemischt', 'Пробный тест: все темы вперемешку', 'Пробний тест: усі теми'), meta: `${lstr('bestes', 'лучший', 'найкращий')}: ${b ? b + '%' : '—'}` }; }
  return null;
}
const auItemTitle = inf => `${inf.no ? lstr('Aufgabe', 'Задание', 'Завдання') + ' ' + inf.no + '. ' : inf.e + ' '}${lstr(inf.de, inf.ru, inf.ru)}`;
function auOpenItem(it) {
  AU.deck = null; AU.run = null;
  if (it.drill) auGo('drill', { drill: it.drill, dtask: null });
  else if (it.topic) auGo('topic', { topic: it.topic, tab: 'theory' });
  else if (it.page) auGo('page', { page: it.page });
  else if (it.test) auStartRun('test');
}
const auPrio = t => t.prio === 1 ? '<span class="au-prio au-p1" title="почти в каждом тесте">🔴</span>' : '<span class="au-prio au-p2" title="бывает часто">🟡</span>';

function auHomeView(b) {
  const p = loadProg(), T = auTopics();
  const allCards = T.reduce((s, t) => s + t.cards.length, 0), allKnown = T.reduce((s, t) => s + t.cards.filter(c => auKnown(t.id, p).has(auCardKey(c))).length, 0);
  const tb = auBest('au__test', p);
  b.innerHTML = `
    <div class="sg-intro">${lstr(
      'Einen einheitlichen Einstellungstest gibt es nicht — jede Firma hat ihren eigenen. Aber in den Vorbereitungsbüchern (Ausbildungspark, Profiling Institut) kommen immer dieselben Themen vor: Mathe ohne Taschenrechner und Physik/Elektrotechnik — für Elektroniker, Mechatroniker, Kfz-Mechatroniker.',
      'Единого теста при поступлении нет — у каждой фирмы свой. Но в сборниках для подготовки (Ausbildungspark, Profiling Institut) везде повторяются одни и те же темы: математика без калькулятора и физика с электрикой — для Elektroniker, Mechatroniker, Kfz-Mechatroniker.',
      'Єдиного вступного тесту немає — у кожної фірми свій. Але у збірниках для підготовки (Ausbildungspark, Profiling Institut) повторюються ті самі теми: математика без калькулятора та фізика з електрикою.')}
      <div class="br-note">${lstr('In jedem Thema: 📖 Theorie von null an mit Beispielen · 🃏 Karten zum Auswendiglernen · ✍️ Übungsaufgaben (immer neu, mit Lösungsweg).',
        'В каждой теме: 📖 теория с нуля с разобранными примерами · 🃏 карточки для зубрёжки · ✍️ тренировка (задачи каждый раз новые, с решением по шагам).', 'У кожній темі: 📖 теорія з нуля · 🃏 картки · ✍️ тренування.')}
        <br>🔴 — ${lstr('kommt in fast jedem Test', 'есть почти в каждом тесте', 'є майже в кожному тесті')} · 🟡 — ${lstr('kommt oft vor', 'бывает часто', 'буває часто')}</div></div>
    ${(() => { const P = auPathInfo(p), stg = (window.AU_PATH || [])[P.cur], nx = auNextItem(p), ni = nx && auItemInfo(nx, p);
      return `<button class="au-pathcard" id="au-path"><span class="au-act-i">🗺️</span><span class="au-pc-body"><b>${lstr('Plan von null an — Schritt für Schritt', 'План с нуля — шаг за шагом', 'План з нуля — крок за кроком')}</b>
        <small>${stg ? `${lstr('Etappe', 'Этап', 'Етап')} ${P.cur} / ${P.st.length - 1}: ${escapeHtml(lstr(stg.de, stg.ru, stg.ru))}` : '🏆 ' + lstr('Alle Etappen geschafft!', 'Все этапы пройдены!', 'Усі етапи пройдено!')}${ni ? ` · ${lstr('weiter', 'дальше', 'далі')}: ${escapeHtml(auItemTitle(ni))}` : ''}</small>
        <span class="au-bar"><div style="width:${P.items ? P.doneItems / P.items * 100 : 0}%"></div></span></span><span class="au-pc-go">→</span></button>`; })()}
    <div class="au-actions">
      <button class="au-act au-act-sm" data-page="basics"><span class="au-act-i">🎓</span><span><b>${lstr('Was ist eine Ausbildung?', 'Как устроена Ausbildung', 'Як влаштована Ausbildung')}</b><small>${lstr('Ablauf, Bewerbung, Testteile', 'обучение, поступление, части теста', 'навчання, вступ, частини тесту')}</small></span></button>
      <button class="au-act au-act-sm" data-page="bewerbung"><span class="au-act-i">📨</span><span><b>${lstr('Bewerbung und Gespräch', 'Bewerbung и собеседование', 'Bewerbung і співбесіда')}</b><small>${lstr('Anschreiben, Lebenslauf, Fragen', 'документы, письмо, вопросы и ответы', 'документи, лист, питання')}</small></span></button>
    </div>
    <div class="au-actions">
      <button class="au-act" id="au-allcards"><span class="au-act-i">🃏</span><span><b>${lstr('Alle Formeln und Begriffe pauken', 'Зубрёжка: все формулы и термины', 'Зубрити всі формули й терміни')}</b>
        <small>${lstr('gelernt', 'знаю', 'знаю')} ${allKnown} / ${allCards}</small></span></button>
      <button class="au-act au-act-test" id="au-test"><span class="au-act-i">🎯</span><span><b>${lstr('Probetest', 'Пробный тест', 'Пробний тест')}</b>
        <small>${lstr('20 gemischte Aufgaben, ohne Taschenrechner', '20 задач вперемешку, без калькулятора', '20 задач, без калькулятора')}${tb ? ` · ${lstr('bestes', 'лучший', 'найкращий')}: ${tb}%` : ''}</small></span></button>
    </div>
    ${(window.AU_GROUPS || []).map(g => `<h3 class="au-gh">${g.emoji} ${escapeHtml(lstr(g.de, g.ru, g.ru))}</h3>
      <div class="au-grid">${T.filter(t => t.group === g.id).map(t => {
        const best = auBest('au_' + t.id, p), kn = t.cards.filter(c => auKnown(t.id, p).has(auCardKey(c))).length;
        return `<button class="au-tile" data-id="${t.id}">${auPrio(t)}<span class="au-t-e">${t.emoji}</span><b class="au-t-de">${escapeHtml(t.de)}</b><span class="au-t-ru">${escapeHtml(t.ru)}</span>
          <span class="au-t-meta"><span title="${lstr('beste Übung', 'лучшая тренировка', 'найкраще тренування')}">✍️ ${best ? best + '%' : '—'}</span><span title="${lstr('Karten', 'карточки', 'картки')}">🃏 ${kn}/${t.cards.length}</span></span></button>`;
      }).join('')}</div>`).join('')}`;
  $('au-allcards').addEventListener('click', () => { AU.deck = null; auGo('cards'); });
  $('au-path').addEventListener('click', () => auGo('path'));
  b.querySelectorAll('[data-page]').forEach(x => x.addEventListener('click', () => auGo('page', { page: x.dataset.page })));
  $('au-test').addEventListener('click', () => auStartRun('test'));
  b.querySelectorAll('.au-tile').forEach(t => t.addEventListener('click', () => { AU.deck = null; AU.run = null; auGo('topic', { topic: t.dataset.id, tab: 'theory' }); }));
}

function auTopicView(b) {
  const t = auTopic(AU.topic);
  b.innerHTML = `
    <button class="au-back" id="au-home">← ${lstr('Alle Themen', 'Все темы', 'Усі теми')}</button>
    <div class="au-head"><span class="au-head-e">${t.emoji}</span><div>
      <h2 class="au-h2">${escapeHtml(t.de)} ${auPrio(t)}</h2><div class="au-head-ru">${escapeHtml(t.ru)}</div>
      ${auStageOf(t.id) >= 0 ? `<button class="au-stagechip" id="au-tostage">🗺️ ${lstr('Etappe', 'Этап', 'Етап')} ${auStageOf(t.id)} ${lstr('des Plans', 'плана', 'плану')}</button>` : ''}
      <div class="au-head-skill"><b>${lstr('Was du können musst', 'Что уметь', 'Що вміти')}:</b> ${escapeHtml(t.skill)}${t.sample ? ` · <b>${lstr('Beispiel', 'Пример', 'Приклад')}:</b> ${escapeHtml(t.sample)}` : ''}</div></div></div>
    <div class="br-tabs">
      <button class="vlf-btn ${AU.tab === 'theory' ? 'active' : ''}" data-tab="theory">📖 ${lstr('Theorie', 'Теория', 'Теорія')}</button>
      <button class="vlf-btn ${AU.tab === 'cards' ? 'active' : ''}" data-tab="cards">🃏 ${lstr('Karten', 'Карточки', 'Картки')} (${t.cards.length})</button>
      <button class="vlf-btn ${AU.tab === 'train' ? 'active' : ''}" data-tab="train">✍️ ${lstr('Üben', 'Тренировка', 'Тренування')}</button>
    </div>
    <div id="au-pane"></div>`;
  $('au-home').addEventListener('click', () => auGo('home'));
  $('au-tostage')?.addEventListener('click', () => auGo('path'));
  b.querySelectorAll('[data-tab]').forEach(x => x.addEventListener('click', () => { AU.tab = x.dataset.tab; if (AU.tab === 'train') AU.run = null; AU.deck = null; auStopTimer(); auTopicView(b); }));
  const pane = $('au-pane');
  if (AU.tab === 'cards') auDeckView(pane, t.id);
  else if (AU.tab === 'train') { if (!AU.run || AU.run.topic !== t.id) auStartRun('train', t.id, true); auRunView(pane); }
  else auTheory(pane, t);
}

function auTheory(pane, t) {
  const blocks = auBlocksHtml(t.theory);
  pane.innerHTML = auTheoryTail(t, blocks);
  auTheoryBind(pane);
}
function auBlocksHtml(theory) {
  return theory.map(x => {
    switch (x[0]) {
      case 'p': return `<p class="au-p">${auTx(x[1])}</p>`;
      case 'h': return `<h4 class="au-h">${auTx(x[1])}</h4>`;
      case 'rule': return `<div class="au-box au-rule">📌 ${auTx(x[1])}</div>`;
      case 'tip': return `<div class="au-box au-tip">💡 ${auTx(x[1])}</div>`;
      case 'warn': return `<div class="au-box au-warn">⚠️ ${auTx(x[1])}</div>`;
      case 'ex': return `<div class="au-ex"><div class="au-ex-q">✏️ ${auTx(x[1])}</div><ol>${x[2].map(s => `<li>${auTx(s)}</li>`).join('')}</ol><div class="au-ex-a">${lstr('Antwort', 'Ответ', 'Відповідь')}: <b>${auTx(x[3])}</b></div></div>`;
      case 'table': { const [h, ...rows] = x[1], head = h.some(c => c);
        return `<div class="rt-scroll"><table class="rt au-tbl">${head ? `<thead><tr>${h.map(c => `<th>${auTx(c)}</th>`).join('')}</tr></thead>` : ''}<tbody>${rows.map(r => `<tr>${r.filter((c, i) => head || c || i < 2).map(c => `<td>${auTx(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; }
      case 'svg': return AU_SVG[x[1]] ? `<div class="au-fig">${AU_SVG[x[1]]()}</div>` : '';
      case 'syms': return `<div class="au-syms">${Object.keys(AU_SYMN).map(k => `<div class="au-symc">${auSym(k)}<b>${AU_SYMN[k][0]}</b><span>${AU_SYMN[k][1]}</span></div>`).join('')}</div>`;
      default: return '';
    }
  }).join('');
}
function auTheoryTail(t, blocks) {
  return `<div class="au-theory">${blocks}</div>
    <div class="au-block"><h4>🇩🇪 ${lstr('Wörter für den Test', 'Немецкие слова этой темы', 'Німецькі слова теми')}</h4>
      <div class="rt-scroll"><table class="rt au-tbl">${t.words.map(w => `<tr><td><b>${escapeHtml(w[0])}</b> <button class="au-say" data-say="${escapeHtml(w[0].replace(/\(.*?\)/g, ''))}" title="🔊">🔊</button></td><td>${escapeHtml(w[1])}</td></tr>`).join('')}</table></div></div>
    <div class="au-block"><h4>❓ ${lstr('So wird im Test gefragt', 'Как спрашивают в тесте', 'Як питають у тесті')}</h4>
      <ul class="au-asks">${t.asks.map(a => `<li><b>${escapeHtml(a[0])}</b><span>${escapeHtml(a[1])}</span></li>`).join('')}</ul></div>
    <div class="au-btnrow"><button class="btn-secondary" data-go="cards">🃏 ${lstr('Karten lernen', 'Учить карточки', 'Вчити картки')}</button>
      <button class="btn-primary" data-go="train">✍️ ${lstr('Jetzt üben', 'Тренироваться', 'Тренуватися')}</button></div>`;
}
function auTheoryBind(pane) {
  pane.querySelectorAll('[data-go]').forEach(x => x.addEventListener('click', () => { AU.tab = x.dataset.go; AU.run = null; AU.deck = null; auTopicView($('au-body')); window.scrollTo({ top: 0 }); }));
  pane.querySelectorAll('.au-say').forEach(x => x.addEventListener('click', () => { if (typeof speakWord === 'function') speakWord(x.dataset.say.trim()); }));
}

/* ── карточки (одна тема или все) ── */
function auBuildDeck(topicId) {
  const p = loadProg(), list = [];
  auTopics().filter(t => !topicId || t.id === topicId).forEach(t => {
    const kn = auKnown(t.id, p);
    t.cards.forEach(c => { const k = auCardKey(c); list.push({ t: t.id, k, f: c[0], b: c[1], svg: c[2] || null, known: kn.has(k) }); });
  });
  const unk = auShuffle(list.filter(c => !c.known)), kn = auShuffle(list.filter(c => c.known));
  return { topic: topicId, all: list.length, queue: AU.onlyNew ? unk : [...unk, ...kn], flipped: false, seen: 0 };
}
function auDeckView(host, topicId) {
  if (!AU.deck || AU.deck.topic !== topicId) AU.deck = auBuildDeck(topicId);
  const d = AU.deck, p = loadProg();
  const knownN = auTopics().filter(t => !topicId || t.id === topicId).reduce((s, t) => s + t.cards.filter(c => auKnown(t.id, p).has(auCardKey(c))).length, 0);
  const c = d.queue[0];
  const top = `${!topicId ? `<button class="au-back" id="au-home">← ${lstr('Alle Themen', 'Все темы', 'Усі теми')}</button><h3 class="au-gh">🃏 ${lstr('Alle Formeln und Begriffe', 'Все формулы и термины', 'Усі формули й терміни')}</h3>` : ''}
    <div class="au-deck-top"><span>${lstr('Gelernt', 'Знаю', 'Знаю')}: <b>${knownN} / ${d.all}</b></span>
      <label class="au-chk"><input type="checkbox" id="au-onlynew" ${AU.onlyNew ? 'checked' : ''}> ${lstr('nur noch nicht gelernte', 'только невыученные', 'лише невивчені')}</label></div>`;
  if (!c) {
    host.innerHTML = top + `<div class="au-block au-done">🎉 ${lstr('Runde fertig!', 'Круг пройден!', 'Коло пройдено!')} ${lstr('Gelernt', 'Знаю', 'Знаю')}: <b>${knownN} / ${d.all}</b>
      <div class="au-btnrow"><button class="btn-primary" id="au-again">↻ ${lstr('Noch eine Runde', 'Ещё круг', 'Ще коло')}</button>
      <button class="btn-secondary" id="au-reset">🗑 ${lstr('Markierungen löschen', 'Сбросить отметки «знаю»', 'Скинути позначки')}</button></div></div>`;
    $('au-again').addEventListener('click', () => { AU.deck = null; auDeckView(host, topicId); });
    $('au-reset').addEventListener('click', () => {
      if (!confirm(lstr('Alle „gelernt“-Markierungen hier löschen?', 'Сбросить все отметки «знаю» в этих карточках?', 'Скинути всі позначки?'))) return;
      const pr = loadProg(); auTopics().filter(t => !topicId || t.id === topicId).forEach(t => { pr['auk_' + t.id] = { ids: [], updatedAt: Date.now() }; }); saveProg(pr);
      AU.deck = null; auDeckView(host, topicId);
    });
  } else {
    const tp = auTopic(c.t);
    host.innerHTML = top + `
      <div class="au-card ${d.flipped ? 'flipped' : ''}" id="au-card" tabindex="0">
        ${!topicId ? `<div class="au-card-tp">${tp.emoji} ${escapeHtml(tp.de)}</div>` : ''}
        <div class="au-card-f">${c.svg ? auSym(c.svg, 'au-sym au-sym-big') : ''}${c.f ? `<div>${auTx(c.f)}</div>` : ''}${c.known ? '<span class="au-card-kn">✓</span>' : ''}</div>
        ${d.flipped ? `<div class="au-card-b">${auTx(c.b)}</div>` : `<div class="au-card-hint">${lstr('Tippen, um die Antwort zu sehen', 'Нажми, чтобы увидеть ответ', 'Натисни, щоб побачити відповідь')}</div>`}
      </div>
      <div class="au-btnrow au-card-btns">${d.flipped
        ? `<button class="btn-secondary" id="au-no">↻ ${lstr('Nochmal', 'Ещё раз', 'Ще раз')}</button><button class="btn-primary" id="au-yes">✓ ${lstr('Kann ich', 'Знаю', 'Знаю')}</button>`
        : `<button class="btn-primary" id="au-flip">${lstr('Antwort zeigen', 'Показать ответ', 'Показати відповідь')}</button>`}</div>
      <div class="br-note au-center">${lstr('Noch in dieser Runde', 'Осталось в этом круге', 'Залишилось у колі')}: ${d.queue.length}</div>`;
    const flip = () => { d.flipped = true; auDeckView(host, topicId); };
    $('au-card').addEventListener('click', () => { if (!d.flipped) flip(); });
    $('au-flip')?.addEventListener('click', flip);
    $('au-yes')?.addEventListener('click', () => { auSetKnown(c.t, c.k, true); d.queue.shift(); d.flipped = false; auDeckView(host, topicId); });
    $('au-no')?.addEventListener('click', () => {
      if (c.known) auSetKnown(c.t, c.k, false);
      c.known = false; d.queue.shift(); d.queue.splice(Math.min(d.queue.length, 3 + Math.floor(Math.random() * 3)), 0, c); d.flipped = false; auDeckView(host, topicId);
    });
  }
  $('au-home')?.addEventListener('click', () => auGo('home'));
  $('au-onlynew').addEventListener('change', e => { AU.onlyNew = e.target.checked; AU.deck = null; auDeckView(host, topicId); });
}

/* ── тренировка / пробный тест ── */
function auStartRun(mode, topicId, silent) {
  const n = mode === 'test' ? 20 : 10, tasks = [];
  if (mode === 'test') {
    const slots = auShuffle(auTopics().flatMap(t => t.prio === 1 ? [t.id, t.id] : [t.id])).slice(0, n);
    slots.forEach(id => { const x = AU_GEN[id](); x.topic = id; tasks.push(x); });
  } else for (let i = 0; i < n; i++) { const x = AU_GEN[topicId](); x.topic = topicId; tasks.push(x); }
  AU.run = { mode, topic: topicId || null, tasks, i: 0, answers: [], checked: false, start: Date.now(), saved: false };
  if (!silent) auGo(mode === 'test' ? 'test' : 'topic');
}
function auRunView(host) {
  const R = AU.run; if (!R) return;
  if (R.i >= R.tasks.length) return auRunResult(host);
  const task = R.tasks[R.i], isTest = R.mode === 'test', correct = R.answers.filter(a => a.ok).length;
  const tp = auTopic(task.topic);
  host.innerHTML = `${isTest ? `<button class="au-back" id="au-home">← ${lstr('Abbrechen', 'Прервать тест', 'Перервати')}</button><h3 class="au-gh">🎯 ${lstr('Probetest', 'Пробный тест', 'Пробний тест')}</h3>` : ''}
    <div class="au-run-top"><span>${lstr('Aufgabe', 'Задача', 'Задача')} <b>${R.i + 1} / ${R.tasks.length}</b></span>
      ${isTest ? `<span id="au-timer">⏱ 0:00</span>` : `<span>✓ ${correct}</span>`}
      <button class="au-rubtn ${AU.ru ? 'on' : ''}" id="au-ru" title="${lstr('Übersetzung', 'Перевод', 'Переклад')}">RU</button></div>
    <div class="au-bar"><div style="width:${R.i / R.tasks.length * 100}%"></div></div>
    <div class="au-q">${isTest ? `<div class="au-q-tp">${tp.emoji} ${escapeHtml(tp.de)}</div>` : ''}
      ${task.svg ? `<div class="au-fig">${task.svg}</div>` : ''}
      <div class="au-q-de">${escapeHtml(task.q)}</div>${task.code ? `<div class="au-code">${escapeHtml(task.code)}</div>` : ''}${AU.ru ? `<div class="au-q-ru">${escapeHtml(task.qr)}</div>` : ''}</div>
    ${task.type === 'mc'
      ? `<div class="au-opts ${task.optSvg ? 'au-opts-svg' : ''} ${task.mono ? 'au-opts-mono' : ''}">${task.opts.map((o, i) => `<button class="au-opt" data-i="${i}">${task.optSvg ? auSym(o) : escapeHtml(o)}</button>`).join('')}</div>`
      : `<div class="au-in">${task.pre ? `<span class="au-pre">${escapeHtml(task.pre)}</span>` : ''}<input id="au-input" type="text" inputmode="${task.type === 'frac' ? 'text' : 'decimal'}" autocomplete="off" placeholder="${task.type === 'frac' ? 'z. B. 7/8' : lstr('Antwort', 'Ответ', 'Відповідь')}">${task.unit ? `<span class="au-unit">${escapeHtml(task.unit)}</span>` : ''}
          <button class="btn-primary" id="au-check">${isTest ? lstr('Weiter', 'Дальше', 'Далі') : lstr('Prüfen', 'Проверить', 'Перевірити')}</button></div>
         ${task.type === 'frac' ? `<div class="br-note">${lstr('Bruch mit Schrägstrich eingeben: 7/8, gemischt: 1 1/2', 'Дробь вводи через косую черту: 7/8, смешанное число: 1 1/2', 'Дріб через скісну риску: 7/8')}</div>` : ''}`}
    <div id="au-fb"></div>`;
  $('au-home')?.addEventListener('click', () => { if (R.i === 0 || confirm(lstr('Test abbrechen?', 'Прервать тест? Результат не сохранится.', 'Перервати тест?'))) { AU.run = null; auGo('home'); } });
  $('au-ru').addEventListener('click', () => { AU.ru = !AU.ru; auRunView(host); });
  if (isTest) { auStopTimer(); const tick = () => { const el = $('au-timer'); if (!el) return auStopTimer(); const s = Math.floor((Date.now() - R.start) / 1000); el.textContent = `⏱ ${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }; tick(); AU_TIMER = setInterval(tick, 1000); }
  const answer = raw => {
    if (R.checked) return;
    const res = auCheck(task, raw);
    R.answers.push({ ok: res.ok, raw, note: res.note });
    if (isTest) { R.i++; auRunView(host); return; }
    R.checked = true;
    host.querySelectorAll('.au-opt').forEach(b => { const i = +b.dataset.i; b.disabled = true; if (i === task.a) b.classList.add('ok'); else if (i === raw) b.classList.add('bad'); });
    const inp = $('au-input'); if (inp) { inp.disabled = true; inp.classList.add(res.ok ? 'ok' : 'bad'); }
    $('au-check')?.remove();
    $('au-fb').innerHTML = `<div class="au-fb ${res.ok ? 'ok' : 'bad'}">${res.ok ? '✅ ' + lstr('Richtig!', 'Правильно!', 'Правильно!') : '❌ ' + lstr('Falsch.', 'Неверно.', 'Неправильно.') + ` ${lstr('Richtig ist', 'Правильный ответ', 'Правильна відповідь')}: <b>${escapeHtml(auAnsText(task))}</b>`}${res.note ? `<div>${escapeHtml(res.note)}</div>` : ''}</div>
      <div class="au-steps"><b>${lstr('Lösungsweg', 'Решение', 'Розв’язок')}:</b><ol>${task.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ol></div>
      <div class="au-btnrow"><button class="btn-primary" id="au-next">${R.i + 1 < R.tasks.length ? lstr('Weiter →', 'Дальше →', 'Далі →') : lstr('Ergebnis', 'Результат', 'Результат')}</button></div>`;
    const nx = $('au-next'); nx.addEventListener('click', () => { R.i++; R.checked = false; auRunView(host); }); nx.focus();
  };
  host.querySelectorAll('.au-opt').forEach(b => b.addEventListener('click', () => answer(+b.dataset.i)));
  const inp = $('au-input');
  if (inp) {
    inp.focus();
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (inp.value.trim()) answer(inp.value); } });
    $('au-check').addEventListener('click', () => { if (inp.value.trim()) answer(inp.value); else inp.focus(); });
  }
}
function auRunResult(host) {
  auStopTimer();
  const R = AU.run, ok = R.answers.filter(a => a.ok).length, pct = Math.round(ok / R.tasks.length * 100), isTest = R.mode === 'test';
  if (!R.saved) { auSaveBest(isTest ? 'au__test' : 'au_' + R.topic, pct); R.saved = true; R.secs = Math.floor((Date.now() - R.start) / 1000); }
  const verdict = pct >= 85 ? lstr('Sehr gut!', 'Отлично!', 'Чудово!') : pct >= 60 ? lstr('Gut — wiederhole die Fehler.', 'Хорошо — разбери ошибки.', 'Добре — розбери помилки.') : lstr('Lies die Theorie noch einmal und übe weiter.', 'Перечитай теорию и потренируйся ещё.', 'Перечитай теорію й потренуйся ще.');
  let byTopic = '';
  if (isTest) {
    const m = {}; R.tasks.forEach((t, i) => { const x = m[t.topic] || (m[t.topic] = { ok: 0, n: 0 }); x.n++; if (R.answers[i].ok) x.ok++; });
    const weak = Object.entries(m).filter(([, x]) => x.ok < x.n).map(([id]) => id);
    byTopic = `<div class="au-block"><h4>📊 ${lstr('Nach Themen', 'По темам', 'За темами')}</h4><div class="au-bytopic">${Object.entries(m).map(([id, x]) => { const t = auTopic(id);
      return `<button class="au-bt ${x.ok === x.n ? 'ok' : 'bad'}" data-id="${id}">${t.emoji} ${escapeHtml(t.de)} <b>${x.ok}/${x.n}</b></button>`; }).join('')}</div>
      ${weak.length ? `<div class="br-note">${lstr('Tippe auf ein Thema, um es zu wiederholen.', 'Нажми на тему с ошибками, чтобы её повторить.', 'Натисни на тему, щоб повторити.')}</div>` : ''}</div>`;
  }
  host.innerHTML = `${isTest ? `<button class="au-back" id="au-home">← ${lstr('Alle Themen', 'Все темы', 'Усі теми')}</button>` : ''}
    <div class="au-block au-result"><div class="br-score"><b>${pct}%</b> · ${ok} / ${R.tasks.length} · ${verdict}</div>
      ${isTest ? `<div class="br-note">⏱ ${Math.floor(R.secs / 60)}:${String(R.secs % 60).padStart(2, '0')} · ${lstr('bestes Ergebnis', 'лучший результат', 'найкращий результат')}: ${auBest('au__test')}%</div>` : `<div class="br-note">${lstr('bestes Ergebnis', 'лучший результат', 'найкращий результат')}: ${auBest('au_' + R.topic)}%</div>`}
      <div class="au-btnrow"><button class="btn-primary" id="au-again">↻ ${isTest ? lstr('Neuer Test', 'Новый тест', 'Новий тест') : lstr('Neue Aufgaben', 'Новые задачи', 'Нові задачі')}</button>
        ${isTest && !auItemDone({ test: 70 }, loadProg()) ? `<button class="btn-secondary" id="au-testok">✓ ${lstr('Probetest als geschafft markieren', 'Отметить финальный тест пройденным', 'Позначити тест пройденим')}</button>` : ''}</div></div>
    ${byTopic}
    <div class="au-block"><h4>🔍 ${lstr('Alle Aufgaben', 'Разбор задач', 'Розбір задач')}</h4>${R.tasks.map((t, i) => { const a = R.answers[i];
      const yours = t.type === 'mc' ? (t.optSvg ? AU_SYMN[t.opts[a.raw]][0] : t.opts[a.raw]) : a.raw;
      return `<details class="au-rev ${a.ok ? 'ok' : 'bad'}" ${!a.ok && isTest ? 'open' : ''}><summary>${a.ok ? '✅' : '❌'} ${escapeHtml(t.q)}</summary>
        ${t.svg ? `<div class="au-fig au-fig-sm">${t.svg}</div>` : ''}${t.code ? `<div class="au-code">${escapeHtml(t.code)}</div>` : ''}<div class="au-q-ru">${escapeHtml(t.qr)}</div>
        <div>${lstr('Deine Antwort', 'Твой ответ', 'Твоя відповідь')}: <b>${escapeHtml(String(yours))}</b> · ${lstr('richtig', 'правильно', 'правильно')}: <b>${escapeHtml(auAnsText(t))}</b></div>
        <ol>${t.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ol></details>`; }).join('')}</div>`;
  $('au-home')?.addEventListener('click', () => { AU.run = null; auGo('home'); });
  $('au-testok')?.addEventListener('click', () => { const pr = loadProg(); pr['au__testok'] = { on: true, updatedAt: Date.now() }; saveProg(pr); AU.run = null; auGo('path'); });
  $('au-again').addEventListener('click', () => { if (isTest) auStartRun('test'); else { auStartRun('train', R.topic, true); auRunView(host); window.scrollTo({ top: 0 }); } });
  host.querySelectorAll('.au-bt').forEach(x => x.addEventListener('click', () => { AU.run = null; AU.deck = null; auGo('topic', { topic: x.dataset.id, tab: 'theory' }); }));
}

/* ── вид: план с нуля ── */
function auPathView(b) {
  const p = loadProg(), P = auPathInfo(p), nx = auNextItem(p), nd = auDrills().length, dDone = auDrills().filter(d => auDrillStat(d.id, p).done).length;
  b.innerHTML = `<button class="au-back" id="au-home">← ${lstr('Alle Themen', 'Все темы', 'Усі теми')}</button>
    <h3 class="au-gh">🗺️ ${lstr('Plan von null an — Aufgabe für Aufgabe', 'План с нуля — задание за заданием', 'План з нуля — завдання за завданням')}</h3>
    <div class="au-block au-howto"><b>${lstr('So gehst du vor', 'Как идти по плану', 'Як іти за планом')}:</b>
      <ol><li>${lstr('Öffne die nächste Aufgabe und lies den kurzen Tipp.', 'Открой следующее задание и прочитай короткую подсказку «как решать».', 'Відкрий наступне завдання й прочитай підказку.')}</li>
        <li>${lstr('Löse Aufgaben dieses Typs — sie hören nicht auf, so viele du willst.', 'Решай задачи этого типа — они не заканчиваются, решай сколько нужно.', 'Розв’язуй задачі цього типу — скільки треба.')}</li>
        <li>${lstr('Wenn du sicher und ohne Fehler rechnest, drücke „✓ Ich kann das“ — weiter zur nächsten Aufgabe.', 'Когда чувствуешь, что решаешь уверенно и без ошибок, нажми «✓ Я выучил» — откроется следующее задание.', 'Коли впевнено — натисни «✓ Я вивчив».')}</li></ol>
      <div class="br-note">${lstr('Tipp: 10 richtige hintereinander sind ein gutes Zeichen. Lieber jeden Tag 20–30 Minuten.', 'Подсказка: 10 подряд без ошибок — хороший знак. Лучше 20–30 минут каждый день, чем 3 часа раз в неделю.', 'Порада: 10 правильних підряд — добрий знак.')}</div>
      <div class="au-pp"><span>${lstr('Gelernt', 'Выучено заданий', 'Вивчено завдань')}: <b>${dDone} / ${nd}</b></span><span class="au-bar"><div style="width:${nd ? dDone / nd * 100 : 0}%"></div></span></div>
      ${nx ? `<div class="au-btnrow"><button class="btn-primary" id="au-continue">▶ ${lstr('Weiter', 'Продолжить', 'Продовжити')}: ${escapeHtml(auItemTitle(auItemInfo(nx, p)))}</button></div>` : ''}</div>
    <div class="au-path">${P.st.map(x => {
      const items = auStageItems(x.i);
      if (!items.length) return '';
      const cls = x.n && x.done === x.n ? 'done' : x.i === P.cur ? 'cur' : 'todo';
      return `<div class="au-stage ${cls}"><div class="au-st-n">${cls === 'done' ? '✓' : x.i}</div><div class="au-st-body">
        <div class="au-st-h">${x.s.emoji} ${lstr('Etappe', 'Этап', 'Етап')} ${x.i}. ${escapeHtml(lstr(x.s.de, x.s.ru, x.s.ru))} ${cls === 'cur' ? `<span class="au-here">▶ ${lstr('du bist hier', 'ты здесь', 'ти тут')}</span>` : ''}</div>
        <div class="au-st-goal">${escapeHtml(x.s.goal)}</div>
        <div class="au-st-items">${items.map((it, k) => { const inf = auItemInfo(it, p); if (!inf) return ''; const ok = auItemDone(it, p), isNext = nx && JSON.stringify(nx) === JSON.stringify(it);
          return `<button class="au-si ${ok ? 'ok' : ''} ${isNext ? 'next' : ''}" data-st="${x.i}" data-k="${k}"><span class="au-si-c">${ok ? '✓' : inf.no ? inf.no : '○'}</span><span class="au-si-e">${inf.e}</span>
            <span class="au-si-t"><b>${escapeHtml(inf.no ? inf.ru : lstr(inf.de, inf.ru, inf.ru))}</b><small>${escapeHtml(inf.no ? inf.de : inf.de)}</small></span><span class="au-si-m">${escapeHtml(inf.meta)}</span></button>`; }).join('')}</div>
        ${x.n ? `<div class="au-st-prog">${x.done} / ${x.n}</div>` : ''}</div></div>`; }).join('')}</div>`;
  $('au-home').addEventListener('click', () => auGo('home'));
  $('au-continue')?.addEventListener('click', () => auOpenItem(nx));
  b.querySelectorAll('.au-si').forEach(x => x.addEventListener('click', () => auOpenItem(auStageItems(+x.dataset.st)[+x.dataset.k])));
  const cur = b.querySelector('.au-si.next') || b.querySelector('.au-stage.cur'); if (cur) setTimeout(() => cur.scrollIntoView({ block: 'center', behavior: 'smooth' }), 50);
}

/* ── вид: задание — задачи одного типа без конца, «✓ Я выучил» ставишь сам ── */
function auDrillTask(d) { const x = AU_GEN[d.gen](d.subs.length ? auP(d.subs) : undefined); x.topic = d.gen; return x; }
function auDrillView(b) {
  const d = auDrill(AU.drill), no = auDrillNo(d.id), stg = (window.AU_PATH || [])[d.st], t = auTopic(d.gen), p = loadProg(), st = auDrillStat(d.id, p);
  if (!AU.dtask || AU.dtask.drill !== d.id) AU.dtask = { drill: d.id, task: auDrillTask(d), checked: false, hint: false };
    b.innerHTML = `<button class="au-back" id="au-topath">← ${lstr('Zum Plan', 'К плану', 'До плану')}</button>
    <div class="au-head au-dhead"><span class="au-dno">${no}</span><div>
      <div class="au-st-goal">${stg ? `${stg.emoji} ${lstr('Etappe', 'Этап', 'Етап')} ${d.st}. ${escapeHtml(lstr(stg.de, stg.ru, stg.ru))}` : ''} · ${lstr('Aufgabe', 'задание', 'завдання')} ${no} / ${auDrills().length}</div>
      <h2 class="au-h2">${lstr('Aufgabe', 'Задание', 'Завдання')} ${no}. ${escapeHtml(lstr(d.de, d.ru, d.ru))}</h2><div class="au-head-ru">${escapeHtml(d.de)}</div></div></div>
    <div class="au-box au-rule">📌 <b>${lstr('So geht’s', 'Как решать', 'Як розв’язувати')}:</b> ${auTx(d.how)}
      ${t ? `<div><button class="au-link" id="au-dtheory">📖 ${lstr('Ausführliche Theorie', 'Подробная теория с примерами', 'Детальна теорія')}: ${escapeHtml(lstr(t.de, t.ru, t.ru))}</button></div>` : ''}</div>
    <div class="au-dstats" id="au-dstats"></div>
    <div id="au-dtask"></div>
    <div class="au-dfoot">${st.done
      ? `<div class="au-fb ok">✓ ${lstr('Du hast diese Aufgabe als gelernt markiert.', 'Ты отметил это задание как выученное.', 'Ти позначив це завдання як вивчене.')} <button class="au-link" id="au-undone">${lstr('Markierung entfernen', 'снять отметку', 'зняти позначку')}</button></div>`
      : ''}
      <button class="btn-primary au-learned" id="au-learned">✓ ${lstr('Ich kann das — nächste Aufgabe', 'Я выучил — следующее задание', 'Я вивчив — наступне завдання')} →</button></div>`;
  const stats = () => { const s2 = auDrillStat(d.id); const a2 = s2.n ? Math.round(s2.ok / s2.n * 100) : 0;
    $('au-dstats').innerHTML = `<span>${lstr('Gelöst', 'Решено', 'Розв’язано')}: <b>${s2.n}</b></span><span>${lstr('richtig', 'верно', 'правильно')}: <b>${s2.ok}</b>${s2.n ? ` (${a2}%)` : ''}</span><span>${lstr('in Folge', 'подряд', 'підряд')}: <b>${s2.streak}</b>${s2.best ? ` · ${lstr('Rekord', 'рекорд', 'рекорд')} ${s2.best}` : ''}</span>`; };
  stats();
    auDrillTaskView($('au-dtask'), d, stats);
  $('au-topath').addEventListener('click', () => auGo('path'));
  $('au-dtheory')?.addEventListener('click', () => { AU.deck = null; AU.run = null; auGo('topic', { topic: d.gen, tab: 'theory' }); });
  $('au-undone')?.addEventListener('click', () => { const pr = loadProg(), s2 = auDrillStat(d.id, pr); pr['aud_' + d.id] = { ...s2, done: false, updatedAt: Date.now() }; saveProg(pr); auDrillView(b); });
  $('au-learned').addEventListener('click', () => {
    const pr = loadProg(), s2 = auDrillStat(d.id, pr); pr['aud_' + d.id] = { ...s2, done: true, updatedAt: Date.now() }; saveProg(pr);
    const nx = auNextItem(pr); AU.dtask = null;
    if (nx) auOpenItem(nx); else auGo('path');
  });
}
function auDrillTaskView(host, d, onStats) {
  const D = AU.dtask, task = D.task;
  host.innerHTML = `<div class="au-q">${task.svg ? `<div class="au-fig">${task.svg}</div>` : ''}
      <div class="au-q-de">${escapeHtml(task.q)}</div>${task.code ? `<div class="au-code">${escapeHtml(task.code)}</div>` : ''}
      ${AU.ru ? `<div class="au-q-ru">${escapeHtml(task.qr)}</div>` : ''}
      <button class="au-rubtn ${AU.ru ? 'on' : ''}" id="au-ru" title="${lstr('Übersetzung', 'Перевод', 'Переклад')}">RU</button></div>
    ${task.type === 'mc'
      ? `<div class="au-opts ${task.optSvg ? 'au-opts-svg' : ''} ${task.mono ? 'au-opts-mono' : ''}">${task.opts.map((o, i) => `<button class="au-opt" data-i="${i}">${task.optSvg ? auSym(o) : escapeHtml(o)}</button>`).join('')}</div>`
      : `<div class="au-in">${task.pre ? `<span class="au-pre">${escapeHtml(task.pre)}</span>` : ''}<input id="au-input" type="text" inputmode="${task.type === 'frac' ? 'text' : 'decimal'}" autocomplete="off" placeholder="${task.type === 'frac' ? 'z. B. 7/8' : lstr('Antwort', 'Ответ', 'Відповідь')}">${task.unit ? `<span class="au-unit">${escapeHtml(task.unit)}</span>` : ''}
          <button class="btn-primary" id="au-check">${lstr('Prüfen', 'Проверить', 'Перевірити')}</button></div>`}
    <div id="au-fb"></div>`;
  $('au-ru').addEventListener('click', () => { AU.ru = !AU.ru; auDrillTaskView(host, d, onStats); });
  const next = () => { AU.dtask = { drill: d.id, task: auDrillTask(d), checked: false, hint: D.hint }; auDrillTaskView(host, d, onStats); };
  const answer = raw => {
    if (D.checked) return;
    D.checked = true;
    const res = auCheck(task, raw), pr = loadProg(), s2 = auDrillStat(d.id, pr);
    const ns = { ...s2, n: s2.n + 1, ok: s2.ok + (res.ok ? 1 : 0), streak: res.ok ? s2.streak + 1 : 0, updatedAt: Date.now() }; ns.best = Math.max(s2.best || 0, ns.streak);
    pr['aud_' + d.id] = ns; saveProg(pr); onStats();
    host.querySelectorAll('.au-opt').forEach(x => { const i = +x.dataset.i; x.disabled = true; if (i === task.a) x.classList.add('ok'); else if (i === raw) x.classList.add('bad'); });
    const inp = $('au-input'); if (inp) { inp.disabled = true; inp.classList.add(res.ok ? 'ok' : 'bad'); }
    $('au-check')?.remove();
    const hint = res.ok && ns.streak % 10 === 0 && !ns.done;
    $('au-fb').innerHTML = `<div class="au-fb ${res.ok ? 'ok' : 'bad'}">${res.ok ? '✅ ' + lstr('Richtig!', 'Правильно!', 'Правильно!') : '❌ ' + lstr('Falsch.', 'Неверно.', 'Неправильно.') + ` ${lstr('Richtig ist', 'Правильный ответ', 'Правильна відповідь')}: <b>${escapeHtml(auAnsText(task))}</b>`}${res.note ? `<div>${escapeHtml(res.note)}</div>` : ''}</div>
      ${hint ? `<div class="au-box au-tip">🎉 ${lstr('10 richtig hintereinander! Wenn du dich sicher fühlst, drücke unten „✓ Ich kann das“.', '10 подряд без ошибок! Если чувствуешь, что выучил, — нажми внизу «✓ Я выучил».', '10 підряд! Якщо впевнений — натисни «✓ Я вивчив».')}</div>` : ''}
      ${res.ok ? `<details class="au-steps-d"><summary>${lstr('Lösungsweg', 'Решение', 'Розв’язок')}</summary><ol>${task.steps.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ol></details>`
        : `<div class="au-steps"><b>${lstr('Lösungsweg', 'Решение', 'Розв’язок')}:</b><ol>${task.steps.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ol></div>`}
      <div class="au-btnrow"><button class="btn-primary" id="au-next">${lstr('Nächste Aufgabe', 'Следующая задача', 'Наступна задача')} →</button></div>`;
    const nb = $('au-next'); nb.addEventListener('click', next); nb.focus();
  };
  host.querySelectorAll('.au-opt').forEach(x => x.addEventListener('click', () => answer(+x.dataset.i)));
  const inp = $('au-input');
  if (inp) {
    inp.focus({ preventScroll: true });
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (inp.value.trim()) answer(inp.value); } });
    $('au-check').addEventListener('click', () => { if (inp.value.trim()) answer(inp.value); else inp.focus(); });
  }
}

/* ── вид: информационная страница ── */
function auPageView(b) {
  const g = auPage(AU.page), p = loadProg(), read = auItemDone({ page: g.id }, p);
  b.innerHTML = `<button class="au-back" id="au-topath">← ${lstr('Zum Plan', 'К плану', 'До плану')}</button>
    <div class="au-head"><span class="au-head-e">${g.emoji}</span><div><h2 class="au-h2">${escapeHtml(lstr(g.de, g.ru, g.ru))}</h2><div class="au-head-ru">${escapeHtml(g.de)}</div></div></div>
    <div class="au-theory">${auBlocksHtml(g.theory)}</div>
    <div class="au-btnrow"><button class="${read ? 'btn-secondary' : 'btn-primary'}" id="au-read">${read ? '✓ ' + lstr('Gelesen', 'Прочитано', 'Прочитано') : '✓ ' + lstr('Gelesen — weiter', 'Прочитано — дальше по плану', 'Прочитано — далі')}</button></div>`;
  $('au-topath').addEventListener('click', () => auGo('path'));
  $('au-read').addEventListener('click', () => {
    const pr = loadProg(); pr['aur_' + g.id] = { on: true, updatedAt: Date.now() }; saveProg(pr);
    const nx = auNextItem(); if (nx && !read) auOpenItem(nx); else auGo('path');
  });
}
