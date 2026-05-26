/* ══════════════════════════════════════════════════════════════
   DeutschLernen — main app
   Данные: db/words.js (window.VOCAB_DATA) + db/grammar.js (window.GRAMMAR_DATA)
   Открывай index.html напрямую — сервер не нужен.
══════════════════════════════════════════════════════════════ */

const LEARNED_THRESHOLD = 3;

/* ══════════════════════════════════════════════════════════════
   I18N — переводы интерфейса
══════════════════════════════════════════════════════════════ */
const TR = {
  de: {
    nav_home: 'Startseite',        nav_lektionen: 'Lektionen',
    nav_wortschatz: 'Wortschatz',  nav_grammatik: 'Grammatik',  nav_profil: 'Profil', nav_shop: 'Shop', nav_pet: 'Haustier',
    cart_title: 'Warenkorb', cart_empty: 'Leer', cart_total: 'Gesamt:', cart_buy: 'Kaufen!',
    home_title: 'Willkommen bei DeutschLernen!',
    home_subtitle: 'Wähle deinen Kurs aus.',
    user_hi: 'Hi!',
    sec_level: 'Dein Lernniveau wählen',
    sec_area:  'Lernbereich wählen',
    a1_name:'(Anfänger)',      a1_sub:'Active',
    a2_name:'(Grundlagen)',    a2_sub:'Lernolagen',
    b1_name:'(Fortgeschritten)', b1_sub:'Lerngeschritten',
    b2_name:'(Selbstständig)', b2_sub:'Lerne Selbstständig',
    area_grammar_title: 'GRAMMATIK & REGELN',
    area_grammar_desc:  'Lerne grundlegende Grammatikthemen und Regeln.',
    area_vocab_title:   'WORTSCHATZ & THEMEN',
    area_vocab_desc:    'Lerne Vokabeln nach Kategorien mit Artikeln.',
    btn_back:      '← Zurück',
    btn_repeat:    'Wiederholen',
    btn_home_ov:   'Zurück zur Übersicht',
    btn_review_all:'Alle wiederholen',
    modal_needs_review: 'Nochmal lernen',
    modal_mark_done:    'Verstanden ✓',
    hint_keys:   'Tipp: Tasten [1] der  [2] die  [3] das',
    session_done: 'Sitzung abgeschlossen!',
    label_correct:'Richtig',   label_wrong:'Falsch',  label_learned:'Neu gelernt',
    all_learned_h:'Alle Wörter gelernt!',
    all_learned_p:'Du hast alle Wörter dieser Kategorie gemeistert.',
    vocab_screen_h:   'Wortschatz',
    grammar_screen_h: 'Grammatik & Regeln',
    profile_title: 'Mein Profil & Fortschritt',
    // динамические
    themes_title:    (lvl) => `${lvl} Themen wählen`,
    cat_learned_txt: (a, b) => `${a} / ${b} gelernt`,
    btn_start:   'Start Lerneinheit',
    btn_learn:   'Lernen starten',
    no_cats:     (lvl) => `Keine Kategorien für ${lvl}. Füge Wörter in db/words.js hinzu.`,
    rule_label:  (n) => `Regel ${n}`,
    studied_badge: '✓ Gelernt',
    examples_h:  'Beispiele',
    stat_learned:  'Gelernte Wörter',
    stat_learning: 'In Bearbeitung',
    stat_grammar:  'Grammatikregeln',
    progress_lbl:  (lvl) => `Fortschritt ${lvl}`,
    learned_sec:   '⭐ Gelernte Wörter',
    no_words_yet:  "Noch keine Wörter gelernt. Los geht's! 🚀",
    start_unit:    'Starte eine Lerneinheit!',
    loading:       'Lädt…',
    fb_correct:    '✓ Richtig!',
    fb_wrong:      (art, word) => `✗ Falsch! Richtig: ${art} ${word}`,
    streak_txt:    (n) => `🔥 Streak: ${n} / ${LEARNED_THRESHOLD}`,
    streak_done:   (n) => `⭐ Gelernt! (${n}/${n})`,
    already_lrn:   '⭐ Bereits gelernt',
  },
  ru: {
    nav_home: 'Главная',          nav_lektionen: 'Уроки',
    nav_wortschatz: 'Словарь',    nav_grammatik: 'Грамматика',  nav_profil: 'Профиль', nav_shop: 'Магазин', nav_pet: 'Питомец',
    cart_title: 'Корзина', cart_empty: 'Пусто', cart_total: 'Итого:', cart_buy: 'Купить!',
    home_title: 'Добро пожаловать в DeutschLernen!',
    home_subtitle: 'Выбери свой курс.',
    user_hi: 'Привет!',
    sec_level: 'Выбери уровень',
    sec_area:  'Выбери раздел',
    a1_name:'(Начинающий)',    a1_sub:'Активный',
    a2_name:'(Основы)',        a2_sub:'Учусь',
    b1_name:'(Продвинутый)',   b1_sub:'Продвигаюсь',
    b2_name:'(Самостоятельный)', b2_sub:'Самостоятельный',
    area_grammar_title: 'ГРАММАТИКА И ПРАВИЛА',
    area_grammar_desc:  'Изучай грамматические темы и правила немецкого.',
    area_vocab_title:   'СЛОВАРЬ И ТЕМЫ',
    area_vocab_desc:    'Учи слова по категориям с артиклями.',
    btn_back:      '← Назад',
    btn_repeat:    'Повторить',
    btn_home_ov:   'На главную',
    btn_review_all:'Повторить всё',
    modal_needs_review: 'Учить ещё',
    modal_mark_done:    'Понял ✓',
    hint_keys:   'Клавиши: [1] der  [2] die  [3] das',
    session_done: 'Сессия завершена!',
    label_correct:'Правильно', label_wrong:'Неверно', label_learned:'Выучено',
    all_learned_h:'Все слова выучены!',
    all_learned_p:'Ты освоил все слова этой категории.',
    vocab_screen_h:   'Словарь',
    grammar_screen_h: 'Грамматика',
    profile_title: 'Мой профиль и прогресс',
    // динамические
    themes_title:    (lvl) => `${lvl} — темы`,
    cat_learned_txt: (a, b) => `${a} / ${b} выучено`,
    btn_start:   'Начать урок',
    btn_learn:   'Учить',
    no_cats:     (lvl) => `Нет категорий для ${lvl}. Добавь слова в db/words.js.`,
    rule_label:  (n) => `Правило ${n}`,
    studied_badge: '✓ Изучено',
    examples_h:  'Примеры',
    stat_learned:  'Выученных слов',
    stat_learning: 'В процессе',
    stat_grammar:  'Правил грамматики',
    progress_lbl:  (lvl) => `Прогресс ${lvl}`,
    learned_sec:   '⭐ Выученные слова',
    no_words_yet:  'Слов ещё нет. Начинай учить! 🚀',
    start_unit:    'Начни урок!',
    loading:       'Загрузка…',
    fb_correct:    '✓ Правильно!',
    fb_wrong:      (art, word) => `✗ Неверно! Правильно: ${art} ${word}`,
    streak_txt:    (n) => `🔥 Подряд: ${n} / ${LEARNED_THRESHOLD}`,
    streak_done:   (n) => `⭐ Выучено! (${n}/${n})`,
    already_lrn:   '⭐ Уже выучено',
  }
};

let lang = localStorage.getItem('dl_lang') || 'ru';

/* ── Аккаунты (динамические) ── */
let activeProfile = null; // id активного аккаунта

const PET_IMGS = ['assets/images/Pet1.png', 'assets/images/Pet2.png'];

function getAccounts() {
  try { return JSON.parse(localStorage.getItem('dl_accounts') || '[]'); } catch { return []; }
}
function saveAccounts(arr) { localStorage.setItem('dl_accounts', JSON.stringify(arr)); }
function createAccount(name) {
  const accounts = getAccounts();
  const id = 'u' + Date.now().toString(36);
  accounts.push({ id, name });
  saveAccounts(accounts);
  return id;
}

/* Возвращает объект активного профиля */
function P() {
  const accounts = getAccounts();
  const idx = accounts.findIndex(a => a.id === activeProfile);
  const acc = idx >= 0 ? accounts[idx] : { name: '?' };
  return {
    name:    acc.name || '?',
    avatar:  (acc.name || '?')[0].toUpperCase(),
    key:     `dl_prog_${activeProfile}`,
    coinKey: `dl_coins_${activeProfile}`,
    shopKey: `dl_shop_${activeProfile}`,
    usedKey: `dl_used_${activeProfile}`,
    petKey:  `dl_pet_${activeProfile}`,
    petImg:  PET_IMGS[Math.max(0, idx) % PET_IMGS.length],
  };
}

/* ── Магазин ── */
const SHOP_ITEMS = [
  { id:'sh_001', emoji:'🥤', name_ru:'Бутылка кока колы', name_de:'Coca-Cola',       price:10 },
  { id:'sh_002', emoji:'🧃', name_ru:'Бутылка сока',      name_de:'Saftflasche',     price:10 },
  { id:'sh_003', emoji:'🍫', name_ru:'Чикалятка',         name_de:'Schokolade',      price:15 },
  { id:'sh_004', emoji:'🍟', name_ru:'Чипсеки',           name_de:'Chips',           price:15 },
  { id:'sh_005', emoji:'⚡', name_ru:'Энергос',           name_de:'Energy-Drink',    price:20 },
  { id:'sh_006', emoji:'🍅', name_ru:'Помидор',           name_de:'Tomate',          price:5  },
  { id:'sh_007', emoji:'🍬', name_ru:'Желейки',           name_de:'Gummibärchen',    price:10 },
  { id:'sh_008', emoji:'🍕', name_ru:'Пицка',             name_de:'Pizza',           price:40 },
  { id:'sh_009', emoji:'🍔', name_ru:'Бургер',            name_de:'Burger',          price:35 },
  { id:'sh_010', emoji:'🥤', name_ru:'Молочный коктейль', name_de:'Milchshake',      price:15 },
];

/* t(key, ...args) — получить строку перевода */
function t(key, ...args) {
  const val = TR[lang][key];
  if (typeof val === 'function') return val(...args);
  return val ?? key;
}

/* Применить язык ко всем data-i18n элементам */
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = TR[lang][key];
    if (val !== undefined && typeof val !== 'function') el.textContent = val;
  });
  /* кнопка-переключатель */
  const btn = $('lang-btn');
  if (btn) {
    btn.textContent = lang === 'de' ? 'RU' : 'DE';
    btn.classList.toggle('ru', lang === 'ru');
    btn.title = lang === 'de' ? 'Переключить на русский' : 'Switch to German';
  }
  document.documentElement.lang = lang;
  // greeting depends on both lang and profile
  if ($('user-hi')) {
    const prof = P();
    if (prof) $('user-hi').textContent = lang==='ru'
      ? `Привет, ${prof.name}!` : `Hi, ${prof.name}!`;
  }
}

/* ── Emoji по словам ── */
const EMOJI = {
  Apfel:'🍎', Milch:'🥛', Brot:'🍞', Pizza:'🍕', Käse:'🧀',
  Wasser:'💧', Tee:'🍵', Kaffee:'☕', Butter:'🧈', Ei:'🥚',
  Banane:'🍌', Tomate:'🍅', Kartoffel:'🥔', Fleisch:'🥩', Saft:'🧃',
  Auto:'🚗', Bus:'🚌', Fahrrad:'🚲', Zug:'🚂', Flugzeug:'✈️',
  Schiff:'🚢', 'U-Bahn':'🚇', Motorrad:'🏍️', Straßenbahn:'🚊', Taxi:'🚕',
  Hund:'🐶', Katze:'🐱', Vogel:'🐦', Pferd:'🐴', Kuh:'🐄',
  Fisch:'🐟', Bär:'🐻', Löwe:'🦁', Elefant:'🐘', Schlange:'🐍',
  Supermarkt:'🏪', Geld:'💰', Tasche:'👜', Preis:'🏷️', Kasse:'💳',
  Geschäft:'🏬', Markt:'🛒', Rechnung:'🧾',
  Musik:'🎵', Buch:'📚', Sport:'⚽', Spiel:'🎮', Film:'🎬',
  Foto:'📷', Kunst:'🎨', Tanz:'💃',
  Haus:'🏠', Wohnung:'🏢', Zimmer:'🚪', Küche:'🍳', Bett:'🛏️',
  Tisch:'🪑', Stuhl:'🪑', Fenster:'🪟', Tür:'🚪', Lampe:'💡',
  Arzt:'👨‍⚕️', Ärztin:'👩‍⚕️', Lehrer:'👨‍🏫', Schule:'🏫', Büro:'🏢',
  Arbeit:'💼', Chef:'👔', Gehalt:'💶', Kollege:'🤝', Firma:'🏭',
  // Stadt & Orientierung
  Ampel:'🚦', Brücke:'🌉', Ecke:'📐', Seite:'↔️', Bank:'🏦',
  Bäckerei:'🥐', Kindergarten:'🧒', Park:'🌳', Theater:'🎭',
  Krankenhaus:'🏥', Apotheke:'💊', Brille:'👓', Land:'🌍', Telefon:'📱',
  // Stadt & Behörden
  Kreuzung:'✖️', Jobcenter:'🏢', Schwimmbad:'🏊', Metzgerei:'🥩',
  Busbahnhof:'🚌', Bushaltestelle:'🚏', Augenarzt:'👁️', Augentropfen:'💧',
  Geldgeschenk:'🎁', Einkommen:'💰', Geburtsort:'📍', Geburtsdatum:'📅',
  Staatsangehörigkeit:'🛂',
  // Behörden & Optiker
  Kreisverkehr:'🔄', Kurzsichtigkeit:'🔍', Weitsichtigkeit:'🔭',
  Brillenpass:'📋', Bescheinigung:'📄', Befreiung:'✅',
  Rundfunkbeitrag:'📺', Rentenversicherungsnummer:'🔢', Geburtsname:'📝',
  // Medizin & Bürokratie
  Astigmatismus:'👁️', Messbrille:'👓', Hyaluronsäure:'💉',
  Veränderungsmitteilung:'📬', Transitgeld:'💸', Mitwirkungspflicht:'⚖️',
  Bedarfsgemeinschaft:'👨‍👩‍👧', Kontoauszug:'🏦', Nachweis:'📋', Leistungsbezug:'📑',
  // Familie
  Vater:'👨', Mutter:'👩', Sohn:'👦', Tochter:'👧', Bruder:'🧑', Schwester:'👧',
  Kind:'🧒', Mann:'🧔', Frau:'👩', Großvater:'👴', Großmutter:'👵',
  Opa:'👴', Oma:'👵', Onkel:'🧑', Tante:'👩',
  // Wochentage
  Montag:'📅', Dienstag:'📅', Mittwoch:'📅', Donnerstag:'📅',
  Freitag:'🎉', Samstag:'🌅', Sonntag:'☀️', Wochenende:'🏖️',
  // Obst & Gemüse
  Karotte:'🥕', Zwiebel:'🧅', Orange:'🍊', Birne:'🍐', Kirsche:'🍒',
  Mango:'🥭', Traube:'🍇', Pilz:'🍄', Salat:'🥗', Paprika:'🫑',
  Gurke:'🥒', Möhre:'🥕', Melone:'🍈', Kohl:'🥬',
  // Lebensmittel
  Brötchen:'🥖', Reis:'🍚', Honig:'🍯', Marmelade:'🫙', Schokolade:'🍫',
  Sahne:'🥛', Mehl:'🌾', Salz:'🧂', Wein:'🍷', Bier:'🍺',
  Limonade:'🥤', Cola:'🥤', Kuchen:'🎂', Joghurt:'🥛', Zucker:'🍬',
  Nudel:'🍝', Öl:'🫙', Essig:'🍶', Wurst:'🌭', Müsli:'🥣',
  // Körperpflege
  Zahnbürste:'🪥', Kamm:'💈', Haarbürste:'💇', Toilettenpapier:'🧻',
  Creme:'🧴', Rasierer:'🪒', Pflaster:'🩹', Deo:'🧴', Shampoo:'🧴',
  Zahnpasta:'🪥', Seife:'🧼', Duschgel:'🚿',
  // Sich vorstellen
  Name:'🪪', Alter:'🎂', Beruf:'💼', Wohnort:'📍', Nationalität:'🌍',
  Sprache:'🗣️', Adresse:'🏠', Hobby:'🎯', Telefonnummer:'📱',
  'E-Mail':'📧', Stadt:'🏙️', Vorname:'🪪', Nachname:'🪪', Formular:'📋',
  // Körper
  Kopf:'🧠', Haar:'💇', Auge:'👁️', Nase:'👃', Mund:'👄', Ohr:'👂',
  Arm:'💪', Bein:'🦵', Hand:'✋', Fuß:'🦶', Bauch:'🫃', Rücken:'🔙',
  Schulter:'🤷', Finger:'☝️', Hals:'🦒', Gesicht:'😊', Knie:'🦵', Zahn:'🦷',
  // Kleidung
  Hemd:'👔', Hose:'👖', Jacke:'🧥', Schuh:'👟', Socke:'🧦',
  Pullover:'🧶', Rock:'👗', Kleid:'👗', Mantel:'🧥', Mütze:'🧢',
  Bluse:'👚', 'T-Shirt':'👕', Jeans:'👖', Schal:'🧣', Handschuh:'🧤',
  // Berufe
  Arzt:'👨‍⚕️', Lehrer:'👨‍🏫', Student:'🎓', Koch:'👨‍🍳', Bäcker:'🥐',
  Ingenieur:'⚙️', Krankenschwester:'👩‍⚕️', Polizist:'👮', Verkäufer:'🛍️',
  Fahrer:'🚗', Kellner:'🍽️', Mechaniker:'🔧', Friseur:'💈', Sekretär:'📝',
  // Fragewörter
  Wer:'❓', Was:'❓', Wo:'📍', Woher:'🗺️', Wohin:'➡️', Wie:'🤔',
  'Wie alt':'🎂', 'Wie viel':'🔢', Wann:'🕐', Warum:'🤷', Welcher:'☝️',
  Welche:'☝️', 'Was für':'🔍', 'Wie lange':'⏱️',
  // Farben
  rot:'🔴', blau:'🔵', grün:'🟢', gelb:'🟡', schwarz:'⚫', weiß:'⚪',
  grau:'🩶', orange:'🟠', lila:'🟣', rosa:'🌸', braun:'🟤', bunt:'🌈',
  // Zahlen
  null:'0️⃣', eins:'1️⃣', zwei:'2️⃣', drei:'3️⃣', vier:'4️⃣', fünf:'5️⃣',
  sechs:'6️⃣', sieben:'7️⃣', acht:'8️⃣', neun:'9️⃣', zehn:'🔟',
  elf:'1️⃣1️⃣', zwölf:'1️⃣2️⃣', zwanzig:'2️⃣0️⃣', dreißig:'3️⃣0️⃣',
  vierzig:'4️⃣0️⃣', fünfzig:'5️⃣0️⃣', hundert:'💯', tausend:'🔢',
};

/* ══════════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════════ */
const S = {
  level:'A1', screen:'home',
  cards:[], cardIdx:0,
  sessionCorrect:0, sessionWrong:0, sessionLearned:0,
  busy:false, currentCatEmoji:'',
  openRuleId:null, wordCache:{},
  vocabFilter:'all',
  cart:{},
  rewardPop: null, // { itemId, useQty }
};

function buildWordCache() {
  (window.VOCAB_DATA || []).forEach(cat =>
    (cat.words || []).forEach(w => { S.wordCache[w.id] = w; }));
}

/* ══════════════════════════════════════════════════════════════
   ПРОГРЕСС
══════════════════════════════════════════════════════════════ */
function loadProg()   { try { return JSON.parse(localStorage.getItem(P().key)||'{}'); } catch { return {}; } }
function saveProg(p)  { localStorage.setItem(P().key, JSON.stringify(p)); }
function loadCoins()  { return parseInt(localStorage.getItem(P().coinKey)||'0',10); }
function saveCoins(n) { localStorage.setItem(P().coinKey, String(Math.max(0,n))); }

/* Евро — общий баланс для обоих профилей */
const EURO_KEY      = 'dl_euros_shared';
const EURO_DEFAULT  = 4000;
function loadEuros()  { const v = localStorage.getItem(EURO_KEY); return v === null ? EURO_DEFAULT : parseInt(v, 10); }
function saveEuros(n) { localStorage.setItem(EURO_KEY, String(Math.max(0, n))); }
function updateEuroDisplay() {
  const v = loadEuros().toLocaleString('ru-RU');
  if ($('euro-balance-header')) $('euro-balance-header').textContent = v;
  if ($('euro-balance-shop'))   $('euro-balance-shop').textContent   = v;
}
function loadShop()   { try { return JSON.parse(localStorage.getItem(P().shopKey)||'[]'); } catch { return []; } }
function saveShop(a)  { localStorage.setItem(P().shopKey, JSON.stringify(a)); }
function loadUsed()   { try { return JSON.parse(localStorage.getItem(P().usedKey)||'[]'); } catch { return []; } }
function saveUsed(a)  { localStorage.setItem(P().usedKey, JSON.stringify(a)); }
function loadPet()    { try { return JSON.parse(localStorage.getItem(P().petKey)||'{"clicks":0,"hatched":false}'); } catch { return {clicks:0,hatched:false}; } }
function savePet(p)   { localStorage.setItem(P().petKey, JSON.stringify(p)); }

function getAvailableQty(itemId) {
  const bought = loadShop().filter(e=>e.id===itemId).reduce((s,e)=>s+(e.qty||1), 0);
  const used   = loadUsed().filter(e=>e.id===itemId).reduce((s,e)=>s+(e.qty||1), 0);
  return Math.max(0, bought - used);
}

function useReward(itemId, qty) {
  if (qty <= 0 || qty > getAvailableQty(itemId)) return;
  const list = loadUsed();
  list.push({ id: itemId, qty, datetime: new Date().toISOString() });
  saveUsed(list);
  S.rewardPop = null;
  renderPurchased();
}

function fmtDatetime(iso) {
  const d = new Date(iso);
  const date = d.toLocaleDateString(lang==='ru'?'ru-RU':'de-DE', {day:'numeric', month:'long', year:'numeric'});
  const time = d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  return { date, time };
}

function addCoins(n, anchorEl) {
  const bal = loadCoins() + n;
  saveCoins(bal);
  updateCoinDisplay();
  if (anchorEl && n > 0) showCoinPop(n, anchorEl);
}

function updateCoinDisplay() {
  const b = loadCoins();
  if ($('coin-balance-header')) $('coin-balance-header').textContent = b;
  if ($('coin-balance-shop'))   $('coin-balance-shop').textContent   = b;
}

/* одноразовое начисление монет за уже пройденный прогресс */
function migrateCoins() {
  const flagKey = P().coinKey + '_v3';
  if (localStorage.getItem(flagKey)) return;
  // сбрасываем монеты и пересчитываем по новым правилам:
  // +1 за каждый правильный ответ (p[id].total), +5 за каждое правило грамматики
  const p = loadProg();
  let award = 0;
  Object.keys(p).forEach(key => {
    if (!key.startsWith('g_')) {
      award += (p[key].total || 0);   // каждый правильный ответ = 1 монета
    } else {
      if (p[key].studied) award += 10; // правило грамматики = 10 монет
    }
  });
  saveCoins(award); // полный сброс и пересчёт
  localStorage.setItem(flagKey, '1');
  updateCoinDisplay();
}

const COIN = '<span class="coin-symbol"></span>';
const COINXS = '<span class="coin-xs"></span>';

function showCoinPop(n, anchor) {
  const pop = document.createElement('div');
  pop.className = 'coin-pop';
  pop.innerHTML = `+${n} ${COIN}`;
  document.body.appendChild(pop);
  const r = anchor.getBoundingClientRect();
  pop.style.left = (r.left + r.width/2 - 24) + 'px';
  pop.style.top  = (r.top + window.scrollY - 28) + 'px';
  setTimeout(() => pop.remove(), 900);
}
function getWP(id) { return loadProg()[id] || {streak:0,total:0,wrong:0,status:'new',seen:null}; }

function updateWP(id, correct) {
  const p  = loadProg();
  const wp = p[id] || {streak:0,total:0,wrong:0,status:'new',seen:null};
  wp.seen  = new Date().toISOString().slice(0,10);
  if (correct) { wp.streak++; wp.total++;  wp.status = wp.streak >= LEARNED_THRESHOLD ? 'learned' : 'learning'; }
  else         { wp.wrong++;  wp.streak=0; wp.status = 'learning'; }
  p[id] = wp; saveProg(p); return wp;
}

function setGrammarStudied(id) {
  const alreadyDone = isStudied(id);
  const p = loadProg();
  p['g_'+id] = {studied:true, seen:new Date().toISOString().slice(0,10)};
  saveProg(p);
  if (!alreadyDone) addCoins(10, $('grammar-modal'));
}
function isStudied(id) { const p=loadProg(); return !!(p['g_'+id]&&p['g_'+id].studied); }

/* ══════════════════════════════════════════════════════════════
   РОУТИНГ
══════════════════════════════════════════════════════════════ */
function show(name) {
  if (S.screen !== name) {
    // переход на другой экран — анимация
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    const el = $('screen-'+name);
    if (el) el.classList.add('active');
  }
  S.screen = name;
  document.querySelectorAll('.nav-link').forEach(l =>
    l.classList.toggle('active',
      l.dataset.screen===name ||
      (name==='home' && (l.dataset.screen==='home'||l.dataset.screen==='lektionen')) ||
      (name==='shop' && l.dataset.screen==='shop')));
}

/* перерисовывает динамический контент текущего экрана без анимации перехода */
function rerenderCurrent() {
  if      (S.screen==='home')       renderHome();
  else if (S.screen==='wortschatz') renderVocabScreen();
  else if (S.screen==='grammatik')  renderGrammarScreen();
  else if (S.screen==='profil')     renderProfile();
  else if (S.screen==='shop')       renderShop();
  else if (S.screen==='pet')        renderPetScreen();
  else if (S.screen==='cards')      rerenderCardsUI();
}

/* обновляет только динамические строки на экране карточек */
function rerenderCardsUI() {
  $('cards-back').textContent = t('btn_back');
}

/* перерисовывает модал грамматики если он открыт */
function rerenderModalIfOpen() {
  const modal = $('grammar-modal');
  if (!modal.classList.contains('hidden') && S.openRule) {
    renderModal(S.openRule);
    // data-i18n кнопки уже обновлены через applyLang()
  }
}

/* ══════════════════════════════════════════════════════════════
   ГЛАВНЫЙ ЭКРАН
══════════════════════════════════════════════════════════════ */
function renderHome() {
  document.querySelectorAll('.level-card').forEach(c =>
    c.classList.toggle('selected', c.dataset.level === S.level));
  $('current-level-badge').textContent = S.level;
  $('themes-title').textContent        = t('themes_title', S.level);
  if ($('grammar-level-title')) $('grammar-level-title').textContent = S.level;
  updateProfileUI();
  renderCatPreview();
  refreshOverallBar();
}

function updateProfileUI() {
  const prof = P();
  const accounts = getAccounts();
  if ($('header-avatar')) $('header-avatar').textContent = prof.avatar;
  if ($('user-avatar-lg')) $('user-avatar-lg').textContent = prof.avatar;
  if ($('user-hi')) $('user-hi').textContent = lang==='ru'
    ? `Привет, ${prof.name}!` : `Hi, ${prof.name}!`;
  // перерисовываем дропдаун динамически
  const dd = $('profile-dropdown');
  if (dd) {
    dd.innerHTML = accounts.map(acc => `
      <div class="profile-option ${acc.id === activeProfile ? 'active' : ''}" data-profile="${acc.id}">
        <span class="po-avatar po-av-letter">${acc.name[0]?.toUpperCase() || '?'}</span>
        <span class="po-name">${acc.name}</span>
        ${acc.id === activeProfile ? '<span class="po-check">✓</span>' : ''}
      </div>
    `).join('') + `
      <div class="profile-option po-new-acc" id="po-new-acc">
        <span class="po-avatar">＋</span>
        <span class="po-name">${lang==='ru' ? 'Новый аккаунт' : 'Neues Konto'}</span>
      </div>`;
    dd.querySelectorAll('[data-profile]').forEach(opt =>
      opt.addEventListener('click', e => { e.stopPropagation(); switchProfile(opt.dataset.profile); }));
    const newBtn = $('po-new-acc');
    if (newBtn) newBtn.addEventListener('click', e => { e.stopPropagation(); dd.classList.add('hidden'); showRegOverlay(true); });
  }
}

function switchProfile(id) {
  if (!getAccounts().find(a => a.id === id)) return;
  activeProfile = id;
  localStorage.setItem('dl_active_id', id);
  S.cart = {};
  $('profile-dropdown').classList.add('hidden');
  updateProfileUI();
  migrateCoins();
  updateCoinDisplay();
  updateEuroDisplay();
  rerenderCurrent();
  refreshOverallBar();
}

function refreshOverallBar() {
  const cats = getCats(S.level), p = loadProg();
  let total=0, learned=0, learning=0;
  cats.forEach(cat => (cat.words||[]).forEach(w => {
    total++;
    if (!p[w.id]) return;
    if (p[w.id].status==='learned')   learned++;
    else if (p[w.id].streak>0)        learning++;
  }));
  // learned = полные 100%, learning = пропорционально streak/threshold
  const pct = total ? Math.round((learned + learning*(1/LEARNED_THRESHOLD)) / total * 100) : 0;
  $('overall-progress').style.width = pct+'%';
  $('overall-pct').textContent       = pct+'%';
}

function renderCatPreview() {
  const wrap = $('categories-preview');
  const cats = getCats(S.level);
  if (!cats.length) { wrap.innerHTML=`<div class="loading-hint">${t('no_cats',S.level)}</div>`; return; }
  const p = loadProg();
  wrap.innerHTML = cats.map(cat => {
    const total   = cat.words.length;
    const learned = cat.words.filter(w=>p[w.id]&&p[w.id].status==='learned').length;
    const pct     = total ? Math.round(learned/total*100) : 0;
    const preview = cat.words.slice(0,4)
      .map(w=>`<div>• <span class="art-${w.article}">${w.article}</span> ${w.word}</div>`).join('');
    return `
      <div class="cat-card" data-cat="${cat.category}">
        <span class="cat-emoji">${cat.emoji||'📁'}</span>
        <span class="cat-name">${cat.name}${cat.name_ru ? `<span class="cat-name-ru"> (${cat.name_ru})</span>` : ''}</span>
        <div class="cat-bar-wrap"><div class="cat-bar-fill" style="width:${pct}%"></div></div>
        <div class="cat-stats">${t('cat_learned_txt',learned,total)}</div>
        <div class="cat-words-preview">${preview}</div>
        <button class="cat-start-btn">${t('btn_start')}</button>
      </div>`;
  }).join('');
  wrap.querySelectorAll('.cat-card').forEach(card => {
    const cat = findCat(S.level, card.dataset.cat);
    card.querySelector('.cat-start-btn').addEventListener('click', e=>{e.stopPropagation();startSession(cat);});
    card.addEventListener('click', ()=>startSession(cat));
  });
}

/* ══════════════════════════════════════════════════════════════
   WORTSCHATZ
══════════════════════════════════════════════════════════════ */
const LEVELS = ['A1','A2','B1','B2'];

function renderVocabScreen() {
  show('wortschatz');

  /* ─ фильтр уровней ─ */
  const filterWrap = $('vocab-level-filter');
  const allLabel   = lang==='ru' ? 'Все' : 'Alle';
  filterWrap.innerHTML = `<button class="vlf-btn ${S.vocabFilter==='all'?'active':''}" data-vf="all">${allLabel}</button>`
    + LEVELS.map(lv=>`<button class="vlf-btn ${S.vocabFilter===lv?'active':''}" data-vf="${lv}">${lv}</button>`).join('');
  filterWrap.querySelectorAll('.vlf-btn').forEach(btn =>
    btn.addEventListener('click', () => { S.vocabFilter = btn.dataset.vf; renderVocabScreen(); }));

  /* ─ категории ─ */
  const wrap = $('vocab-categories-grid');
  const cats = S.vocabFilter==='all'
    ? (window.VOCAB_DATA||[])
    : (window.VOCAB_DATA||[]).filter(c=>c.level===S.vocabFilter);

  if (!cats.length) { wrap.innerHTML=`<div class="loading-hint">${t('no_cats', S.vocabFilter)}</div>`; }
  else {
    const p = loadProg();
    wrap.innerHTML = cats.map(cat => {
      const total   = cat.words.length;
      const learned = cat.words.filter(w=>p[w.id]&&p[w.id].status==='learned').length;
      const pct     = total ? Math.round(learned/total*100) : 0;
      const done    = total > 0 && learned === total;
      return `
        <div class="cat-card ${done?'cat-complete':''}" data-cat="${cat.category}" data-lvl="${cat.level}">
          ${done?'<div class="cat-star-badge">⭐</div>':''}
          <span class="cat-emoji" style="font-size:2.5rem">${cat.emoji||'📁'}</span>
          <div class="cat-level-chip">${cat.level}</div>
          <span class="cat-name" style="font-size:14px;font-weight:700;display:block;margin:6px 0">${cat.name}${cat.name_ru ? `<span class="cat-name-ru"> (${cat.name_ru})</span>` : ''}</span>
          <div class="cat-bar-wrap"><div class="cat-bar-fill" style="width:${pct}%"></div></div>
          <div class="cat-stats">${t('cat_learned_txt',learned,total)}</div>
          <button class="cat-start-btn" style="margin-top:14px">${t('btn_learn')}</button>
        </div>`;
    }).join('');
    wrap.querySelectorAll('.cat-card').forEach(card => {
      const cat = (window.VOCAB_DATA||[]).find(c=>c.category===card.dataset.cat&&c.level===card.dataset.lvl)||{};
      if (!cat.words) return;
      card.querySelector('.cat-start-btn').addEventListener('click',e=>{e.stopPropagation();startSession(cat);});
      card.addEventListener('click',()=>startSession(cat));
    });
  }

  /* ─ выученные слова ─ */
  renderVocabLearned();
}

function renderVocabLearned() {
  const section = $('vocab-learned-section');
  const p       = loadProg();
  const allCats = S.vocabFilter==='all' ? (window.VOCAB_DATA||[]) : (window.VOCAB_DATA||[]).filter(c=>c.level===S.vocabFilter);
  const learnedWords = [];
  allCats.forEach(cat => cat.words.forEach(w => {
    if (p[w.id]&&p[w.id].status==='learned') learnedWords.push({...w, catEmoji: cat.emoji});
  }));
  if (!learnedWords.length) { section.innerHTML=''; return; }
  const title = lang==='ru' ? '⭐ Выученные слова' : '⭐ Gelernte Wörter';
  section.innerHTML = `
    <h3 class="vocab-learned-title">${title}</h3>
    <div class="vocab-learned-grid">
      ${learnedWords.map(w=>`
        <div class="vl-word-card">
          <span class="vl-emoji">${EMOJI[w.word]||w.catEmoji||'📝'}</span>
          <span class="vl-art art-${w.article}">${w.article}</span>
          <span class="vl-word">${w.word}</span>
          <span class="vl-trans">${w.translation}</span>
        </div>`).join('')}
    </div>`;
}

/* ══════════════════════════════════════════════════════════════
   КАРТОЧКИ
══════════════════════════════════════════════════════════════ */
function startSession(cat) {
  const p = loadProg();
  let active = (cat.words||[]).filter(w=>!p[w.id]||p[w.id].status!=='learned');
  active.sort((a,b)=>{const o={new:0,learning:1};return(o[(p[a.id]||{}).status]||0)-(o[(p[b.id]||{}).status]||0);});
  S.cards=active; S.cardIdx=0; S.sessionCorrect=0; S.sessionWrong=0; S.sessionLearned=0; S.busy=false; S.requeued=new Set();
  S.currentCatEmoji = cat.emoji || '📁';
  $('cards-category-title').textContent = cat.name_ru ? `${cat.name} (${cat.name_ru})` : cat.name;
  $('cards-level-badge').textContent    = S.level;
  show('cards');
  $('flashcard').classList.remove('hidden');
  $('session-complete').classList.add('hidden');
  $('all-learned').classList.add('hidden');
  if (!active.length) {
    S.cards = cat.words;
    $('flashcard').classList.add('hidden');
    $('all-learned').classList.remove('hidden');
    return;
  }
  drawCard();
}

function drawCard() {
  if (S.cardIdx >= S.cards.length) { showComplete(); return; }
  const card = S.cards[S.cardIdx];
  const wp   = getWP(card.id);
  $('cards-progress-fill').style.width = (S.cards.length>1 ? S.cardIdx/S.cards.length*100 : 0)+'%';
  $('card-counter').textContent         = (S.cardIdx+1)+' / '+S.cards.length;
  $('card-emoji').textContent           = EMOJI[card.word] || S.currentCatEmoji;
  $('card-word').textContent            = card.word;
  $('card-translation').textContent     = card.translation;
  $('stat-correct').textContent         = '✓ '+S.sessionCorrect;
  $('stat-wrong').textContent           = '✗ '+S.sessionWrong;
  $('card-streak').textContent = wp.status==='learned' ? t('already_lrn') : wp.streak>0 ? t('streak_txt',wp.streak) : '';
  const fb=$('card-feedback'); fb.textContent=''; fb.className='card-feedback';
  const noArt = !card.article || card.article === '-';
  $('article-buttons').classList.toggle('hidden', noArt);
  $('weiter-btn').classList.toggle('hidden', !noArt);
  $('card-hint').classList.toggle('hidden', noArt);
  document.querySelectorAll('.art-btn').forEach(b=>{b.disabled=false;b.classList.remove('show-correct','show-wrong','highlight-correct');});
  $('flashcard').classList.remove('flash-correct','flash-wrong');
  S.busy=false;
}

function handleArticle(article) {
  if (S.busy) return; S.busy=true;
  const card=S.cards[S.cardIdx];
  const noArt = !card.article || card.article === '-';
  const correct = noArt || article===card.article;
  const wp=updateWP(card.id,correct);
  const fb=$('card-feedback'), se=$('card-streak');
  document.querySelectorAll('.art-btn').forEach(b=>b.disabled=true);
  if (correct) {
    S.sessionCorrect++;
    $('flashcard').classList.add('flash-correct');
    fb.textContent=t('fb_correct'); fb.className='card-feedback ok';
    if (!noArt) document.querySelector(`.art-btn[data-article="${article}"]`).classList.add('show-correct');
    addCoins(1, $('flashcard'));
    if (wp.status==='learned'){
      se.textContent=t('streak_done',LEARNED_THRESHOLD); S.sessionLearned++;
    } else {
      se.textContent=t('streak_txt',wp.streak);
    }
    setTimeout(()=>{S.cardIdx++;drawCard();},700);
  } else {
    S.sessionWrong++;
    $('flashcard').classList.add('flash-wrong');
    fb.textContent=t('fb_wrong',card.article,card.word); fb.className='card-feedback bad';
    document.querySelector(`.art-btn[data-article="${article}"]`).classList.add('show-wrong');
    document.querySelector(`.art-btn[data-article="${card.article}"]`).classList.add('highlight-correct');
    se.textContent='';
    // возвращаем слово в конец колоды (один раз за сессию)
    if (!S.requeued.has(card.id)) {
      S.requeued.add(card.id);
      S.cards.push(card);
    }
    setTimeout(()=>{S.cardIdx++;drawCard();},1600);
  }
  $('stat-correct').textContent='✓ '+S.sessionCorrect;
  $('stat-wrong').textContent  ='✗ '+S.sessionWrong;
}

function showComplete() {
  $('flashcard').classList.add('hidden');
  $('session-complete').classList.remove('hidden');
  $('cards-progress-fill').style.width='100%';
  $('cs-correct').textContent=S.sessionCorrect;
  $('cs-wrong').textContent  =S.sessionWrong;
  $('cs-learned').textContent=S.sessionLearned;
}

/* ══════════════════════════════════════════════════════════════
   ГРАММАТИКА
══════════════════════════════════════════════════════════════ */
function renderGrammarScreen() {
  show('grammatik');
  $('grammar-level-title').textContent = S.level;
  const wrap  = $('grammar-grid');
  const rules = (window.GRAMMAR_DATA||[]).filter(r=>r.level===S.level);
  if (!rules.length) { wrap.innerHTML=`<div class="loading-hint">${t('no_cats',S.level)}</div>`; return; }

  const totalR   = rules.length;
  const studiedR = rules.filter(r=>isStudied(r.id)).length;
  const pctR     = totalR ? Math.round(studiedR/totalR*100) : 0;
  let barEl = $('grammar-progress-bar-wrap');
  if (!barEl) {
    barEl = document.createElement('div');
    barEl.id = 'grammar-progress-bar-wrap';
    barEl.className = 'grammar-progress-wrap';
    wrap.parentNode.insertBefore(barEl, wrap);
  }
  barEl.innerHTML = `
    <div class="grammar-progress-label">
      <span>${lang==='ru'?'Изучено':'Gelernt'}: <strong>${studiedR} / ${totalR}</strong></span>
      <span class="grammar-progress-pct">${pctR}%</span>
    </div>
    <div class="grammar-progress-track"><div class="grammar-progress-fill" style="width:${pctR}%"></div></div>`;

  wrap.innerHTML = rules.map((rule,i)=>{
    const studied = isStudied(rule.id);
    const title   = ruleField(rule, 'title');
    const badges  = (rule.examples||[]).slice(0,3)
      .map(ex=>`<span class="rule-badge">${ex.de.split('→')[0].split('–')[0].trim().slice(0,22)}</span>`).join('');
    return `
      <div class="rule-card ${studied?'studied':''}" data-id="${rule.id}">
        <div class="rule-num">${t('rule_label',i+1)}${studied?` <span class="studied-badge">${t('studied_badge')}</span>`:''}</div>
        <div class="rule-title">${title}</div>
        <div class="rule-badges">${badges}</div>
      </div>`;
  }).join('');
  wrap.querySelectorAll('.rule-card').forEach(card=>{
    const rule=(window.GRAMMAR_DATA||[]).find(r=>r.id===card.dataset.id);
    if(rule) card.addEventListener('click',()=>openModal(rule));
  });
}

/* возвращает нужный языковой вариант поля правила */
function ruleField(rule, field) {
  return (lang === 'ru' && rule[field+'_ru']) ? rule[field+'_ru']
       : (rule[field+'_de'] || rule[field] || '');
}

function openModal(rule) {
  S.openRuleId = rule.id;
  S.openRule   = rule;   // сохраняем для перерисовки при смене языка
  renderModal(rule);
  $('grammar-modal').classList.remove('hidden');
}

function renderModal(rule) {
  const title = ruleField(rule, 'title');
  const expl  = ruleField(rule, 'explanation');
  const tip   = ruleField(rule, 'tip');
  const exHtml = (rule.examples||[]).map(ex=>`
    <div class="ex-row">
      <span class="ex-de">${colorArticles(ex.de)}</span>
      <span class="ex-ru">${ex.ru}</span>
    </div>`).join('');
  $('modal-content').innerHTML=`
    <h2>${title}</h2>
    <div class="modal-explain">${expl}</div>
    ${rule.examples?`<div class="ex-heading">${t('examples_h')}</div>${exHtml}`:''}
    ${tip?`<div class="modal-tip">💡 ${tip}</div>`:''}`;
}

function colorArticles(txt) {
  return txt
    .replace(/\b(der)\b/g,'<span class="art-der">$1</span>')
    .replace(/\b(die)\b/g,'<span class="art-die">$1</span>')
    .replace(/\b(das)\b/g,'<span class="art-das">$1</span>')
    .replace(/\b(Der)\b/g,'<span class="art-der">$1</span>')
    .replace(/\b(Die)\b/g,'<span class="art-die">$1</span>')
    .replace(/\b(Das)\b/g,'<span class="art-das">$1</span>');
}

/* ══════════════════════════════════════════════════════════════
   ПРОФИЛЬ
══════════════════════════════════════════════════════════════ */
function renderProfile() {
  show('profil');
  const p=loadProg();
  const wids    = Object.keys(p).filter(k=>!k.startsWith('g_'));
  const learned = wids.filter(k=>p[k].status==='learned');
  const learning= wids.filter(k=>p[k].status==='learning');
  const grammar = Object.keys(p).filter(k=>k.startsWith('g_')&&p[k].studied);
  const catHtml = getCats(S.level).map(cat=>{
    const total=cat.words.length;
    const lrn=cat.words.filter(w=>p[w.id]&&p[w.id].status==='learned').length;
    const pct=total?Math.round(lrn/total*100):0;
    return `<div class="cat-prog-item">
      <div class="cpi-row"><span>${cat.emoji} ${cat.name}${cat.name_ru ? ` (${cat.name_ru})` : ''}</span><span style="color:var(--text-muted)">${lrn}/${total}</span></div>
      <div class="cpi-bar"><div class="cpi-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
  const learnedHtml = learned.length
    ? learned.map(id=>{
        const w=S.wordCache[id]; if(!w) return '';
        return `<div class="lw-item">
          <span class="lw-emoji">${EMOJI[w.word]||'📝'}</span>
          <span class="lw-art ${w.article}">${w.article}</span>
          <span class="lw-word">${w.word}</span>
          <span class="lw-trans">${w.translation}</span>
        </div>`;
      }).filter(Boolean).join('')
    : `<div style="color:var(--text-muted);font-size:13px">${t('no_words_yet')}</div>`;
  const prof = P();
  $('profile-layout').innerHTML=`
    <div>
      <div class="profile-card">
        <div class="profile-card-avatar">${prof.avatar}</div>
        <div class="profile-card-info">
          <div class="profile-card-name">${prof.name}</div>
          <div class="profile-card-switch">
            ${getAccounts().map(acc=>`
              <button class="profile-switch-btn ${acc.id===activeProfile?'active':''}" data-pid="${acc.id}">
                ${acc.name[0]?.toUpperCase()||'?'} ${acc.name}
              </button>`).join('')}
          </div>
        </div>
      </div>
      <div class="stat-block"><div class="stat-big" style="color:var(--correct)">${learned.length}</div><div class="stat-label">${t('stat_learned')}</div></div>
      <div class="stat-block"><div class="stat-big" style="color:var(--warn)">${learning.length}</div><div class="stat-label">${t('stat_learning')}</div></div>
      <div class="stat-block"><div class="stat-big" style="color:var(--accent)">${grammar.length}</div><div class="stat-label">${t('stat_grammar')}</div></div>
      <div class="stat-block" style="text-align:left">
        <div style="font-size:13px;font-weight:600;margin-bottom:12px">${t('progress_lbl',S.level)}</div>
        ${catHtml||`<div style="color:var(--text-muted);font-size:12px">${t('start_unit')}</div>`}
      </div>
    </div>
    <div class="learned-section">
      <h3>${t('learned_sec')}</h3>
      ${learnedHtml}
    </div>`;
  $('profile-layout').querySelectorAll('.profile-switch-btn').forEach(btn =>
    btn.addEventListener('click', () => { switchProfile(btn.dataset.pid); renderProfile(); }));
}

/* ══════════════════════════════════════════════════════════════
   МАГАЗИН
   S.cart = { 'sh_001': 2, 'sh_003': 1, ... }  (id → кол-во)
══════════════════════════════════════════════════════════════ */
function cartTotal() {
  return Object.entries(S.cart).reduce((sum,[id,qty])=>{
    const i=SHOP_ITEMS.find(x=>x.id===id); return sum+(i?i.price*qty:0);
  },0);
}
function cartCount() {
  return Object.values(S.cart).reduce((s,q)=>s+q, 0);
}

function addToCart(itemId) {
  S.cart[itemId] = (S.cart[itemId] || 0) + 1;
  renderShop();
}
function changeQty(itemId, delta) {
  const q = (S.cart[itemId] || 0) + delta;
  if (q <= 0) delete S.cart[itemId];
  else        S.cart[itemId] = q;
  renderShop();
}

function renderShop() {
  show('shop');
  updateCoinDisplay();
  updateEuroDisplay();

  /* ─ сетка товаров ─ */
  const grid = $('shop-items-grid');
  grid.innerHTML = SHOP_ITEMS.map(item => {
    const name  = lang==='ru' ? item.name_ru : item.name_de;
    const qty   = S.cart[item.id] || 0;
    const inCart = qty > 0;
    return `
      <div class="shop-item-card ${inCart?'in-cart':''}" data-sid="${item.id}">
        <div class="si-emoji">${item.emoji}</div>
        <div class="si-name">${name}</div>
        <div class="si-price">€ ${item.price}</div>
        ${inCart
          ? `<div class="si-qty-ctrl">
               <button class="si-qty-btn" data-sid="${item.id}" data-d="-1">−</button>
               <span class="si-qty-num">${qty}</span>
               <button class="si-qty-btn" data-sid="${item.id}" data-d="1">+</button>
             </div>`
          : `<button class="si-btn" data-sid="${item.id}">${lang==='ru'?'В корзину':'In den Warenkorb'}</button>`
        }
      </div>`;
  }).join('');
  grid.querySelectorAll('.si-btn').forEach(btn =>
    btn.addEventListener('click', e => { e.stopPropagation(); addToCart(btn.dataset.sid); }));
  grid.querySelectorAll('.si-qty-btn').forEach(btn =>
    btn.addEventListener('click', e => { e.stopPropagation(); changeQty(btn.dataset.sid, +btn.dataset.d); }));

  renderCart();
  renderPurchased();
}

function renderCart() {
  const list    = $('cart-items-list');
  const totalEl = $('cart-total-val');
  const buyBtn  = $('cart-buy-btn');
  const badge   = $('cart-count-badge');
  const count   = cartCount();
  if (!count) {
    list.innerHTML = `<div class="cart-empty">${lang==='ru'?'Пусто':'Leer'}</div>`;
    totalEl.textContent = '0';
    buyBtn.disabled = true;
    badge.textContent = '0';
    return;
  }
  let total = 0;
  list.innerHTML = Object.entries(S.cart).map(([id, qty]) => {
    const item = SHOP_ITEMS.find(i=>i.id===id);
    if (!item) return '';
    const line = item.price * qty;
    total += line;
    const name = lang==='ru' ? item.name_ru : item.name_de;
    return `<div class="cart-item-row">
      <span class="cir-emoji">${item.emoji}</span>
      <span class="cir-name">${name}</span>
      <div class="cir-qty-ctrl">
        <button class="cir-qty-btn" data-sid="${id}" data-d="-1">−</button>
        <span class="cir-qty">${qty}</span>
        <button class="cir-qty-btn" data-sid="${id}" data-d="1">+</button>
      </div>
      <span class="cir-price">€ ${line}</span>
    </div>`;
  }).join('');
  list.querySelectorAll('.cir-qty-btn').forEach(btn =>
    btn.addEventListener('click', () => changeQty(btn.dataset.sid, +btn.dataset.d)));
  totalEl.textContent = total;
  badge.textContent   = count;
  const euros = loadEuros();
  buyBtn.disabled = total > euros;
  buyBtn.title    = total > euros ? (lang==='ru'?`Нужно ещё €${total-euros}`:`Noch €${total-euros} fehlen`) : '';
}

function renderPurchased() {
  const wrap = $('shop-purchased-wrap');
  const purchased = loadShop();
  if (!purchased.length) { wrap.innerHTML=''; return; }

  /* группируем по itemId → суммируем купленное */
  const grouped = {};
  purchased.forEach(e => { grouped[e.id] = (grouped[e.id]||0) + (e.qty||1); });

  const rewardsTitle = lang==='ru' ? '🎁 Мои награды' : '🎁 Meine Belohnungen';
  const histTitle    = lang==='ru' ? '📋 История использования' : '📋 Verwendungsverlauf';
  const pop = S.rewardPop;

  const rewardsHtml = Object.entries(grouped).map(([id, total]) => {
    const item   = SHOP_ITEMS.find(i=>i.id===id);
    if (!item) return '';
    const name   = lang==='ru' ? item.name_ru : item.name_de;
    const avail  = getAvailableQty(id);
    const isOpen = pop && pop.itemId === id;

    const popupHtml = isOpen ? `
      <div class="pur-popup">
        <div class="pp-header">
          <span>${item.emoji} ${name}</span>
          <button class="pp-close pp-cancel">✕</button>
        </div>
        <div class="pp-qty-row">
          <span>${lang==='ru'?'Кол-во:':'Anzahl:'}</span>
          <button class="pp-qty-btn" data-ppd="-1">−</button>
          <span class="pp-qty-num">${pop.useQty}</span>
          <button class="pp-qty-btn" data-ppd="1">+</button>
        </div>
        <button class="btn-primary pp-apply" style="width:100%;padding:7px;font-size:13px">
          ${lang==='ru'?'Использовать ✓':'Einlösen ✓'}
        </button>
      </div>` : '';

    return `
      <div class="pur-item-wrap">
        <div class="pur-item ${avail===0?'pur-used':''} ${isOpen?'pur-active':''}" data-pid="${id}">
          <span class="pur-emoji">${item.emoji}</span>
          <div class="pur-info">
            <span class="pur-name">${name}</span>
            <span class="pur-avail">${lang==='ru'?'Осталось':'Verfügbar'}: <strong>${avail}</strong> / ${total}</span>
          </div>
          ${avail > 0
            ? `<span class="pur-arrow ${isOpen?'open':''}">▾</span>`
            : `<span class="pur-done-badge">${lang==='ru'?'Исп.':'Verw.'}</span>`}
        </div>
        ${popupHtml}
      </div>`;
  }).join('');

  /* история использования */
  const used = loadUsed().slice().reverse();
  const histHtml = used.length ? used.map(entry => {
    const item = SHOP_ITEMS.find(i=>i.id===entry.id);
    if (!item) return '';
    const name = lang==='ru' ? item.name_ru : item.name_de;
    const {date, time} = fmtDatetime(entry.datetime);
    return `
      <div class="used-card">
        <span class="uc-emoji">${item.emoji}</span>
        <div class="uc-info">
          <div class="uc-name">${name} <span class="uc-qty">× ${entry.qty}</span></div>
          <div class="uc-datetime">📅 ${date} &nbsp;&nbsp; 🕐 ${time}</div>
        </div>
      </div>`;
  }).join('') : `<div class="uc-empty">${lang==='ru'?'Ещё ничего не использовано':'Noch nichts eingelöst'}</div>`;

  wrap.innerHTML = `
    <h3 class="purchased-title">${rewardsTitle}</h3>
    <div class="purchased-grid">${rewardsHtml}</div>
    <h3 class="purchased-title" style="margin-top:1.8rem">${histTitle}</h3>
    <div class="used-history">${histHtml}</div>`;

  /* клик по карточке — открыть/закрыть попап */
  wrap.querySelectorAll('.pur-item').forEach(card => {
    if (card.classList.contains('pur-used')) return;
    card.addEventListener('click', () => {
      const pid = card.dataset.pid;
      S.rewardPop = (pop && pop.itemId===pid) ? null : { itemId: pid, useQty: 1 };
      renderPurchased();
    });
  });

  /* кнопки −/+ количества */
  wrap.querySelectorAll('.pp-qty-btn').forEach(btn =>
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (!S.rewardPop) return;
      const avail = getAvailableQty(S.rewardPop.itemId);
      S.rewardPop.useQty = Math.min(avail, Math.max(1, S.rewardPop.useQty + (+btn.dataset.ppd)));
      renderPurchased();
    }));

  /* Использовать */
  const applyBtn = wrap.querySelector('.pp-apply');
  if (applyBtn) applyBtn.addEventListener('click', e => {
    e.stopPropagation();
    useReward(S.rewardPop.itemId, S.rewardPop.useQty);
  });

  /* Закрыть */
  wrap.querySelectorAll('.pp-cancel').forEach(btn =>
    btn.addEventListener('click', e => {
      e.stopPropagation();
      S.rewardPop = null;
      renderPurchased();
    }));
}

function checkoutCart() {
  const total = cartTotal();
  const euros = loadEuros();
  if (total > euros) return;
  saveEuros(euros - total);
  updateEuroDisplay();
  const shop = loadShop();
  const date = new Date().toISOString().slice(0,10);
  Object.entries(S.cart).forEach(([id, qty]) => shop.push({id, qty, date}));
  saveShop(shop);
  S.cart = {};
  updateCoinDisplay();
  renderShop();
}

/* ══════════════════════════════════════════════════════════════
   ПИТОМЕЦ
══════════════════════════════════════════════════════════════ */
function renderPetScreen() {
  show('pet');
  const area = $('pet-area');
  if (!area) return;
  const pet = loadPet();
  if (pet.hatched) {
    showPetCharacter(area, false);
  } else {
    showEgg(area, pet.clicks);
  }
}

function showEgg(area, clicks) {
  const hints = lang==='ru'
    ? ['✨ Нажми на яйцо, чтобы разбудить питомца!', '🌟 Ещё раз!', '💫 Последний раз — давай!']
    : ['✨ Klicke auf das Ei!', '🌟 Nochmal!', '💫 Letztes Mal!'];
  area.innerHTML = `
    <div class="egg-scene">
      <p class="egg-hint">${hints[clicks] || hints[0]}</p>
      <div class="egg-wrap" id="egg-wrap">
        <img class="egg-img" id="egg-img" src="assets/images/EggPet2.png" alt="Egg"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="egg-fallback" style="display:none">🥚</div>
      </div>
      <div class="egg-dots">
        ${[0,1,2].map(i=>`<span class="ep-dot ${i<clicks?'filled':''}"></span>`).join('')}
      </div>
      <p class="egg-sub">${lang==='ru'?`${clicks}/3 нажатий`:`${clicks}/3 Klicks`}</p>
    </div>`;
  $('egg-img').addEventListener('click', onEggClick);
  document.querySelector('.egg-fallback').addEventListener('click', onEggClick);
}

function onEggClick() {
  const pet  = loadPet();
  if (pet.hatched) return;
  const next = pet.clicks + 1;
  const img  = $('egg-img');
  if (next >= 3) {
    savePet({ clicks: 3, hatched: true });
    if (img) img.classList.add('egg-hatching');
    setTimeout(() => {
      const area = $('pet-area');
      if (area) showPetCharacter(area, true);
    }, 1100);
  } else {
    savePet({ clicks: next, hatched: false });
    if (img) {
      img.classList.remove('egg-wobble');
      void img.offsetWidth; // reflow to restart animation
      img.classList.add('egg-wobble');
    }
    // обновляем точки и подпись
    document.querySelectorAll('.ep-dot').forEach((d,i) => d.classList.toggle('filled', i < next));
    const hints = lang==='ru'
      ? ['✨ Нажми на яйцо, чтобы разбудить питомца!', '🌟 Ещё раз!', '💫 Последний раз — давай!']
      : ['✨ Klicke auf das Ei!', '🌟 Nochmal!', '💫 Letztes Mal!'];
    const hEl = document.querySelector('.egg-hint');
    const sEl = document.querySelector('.egg-sub');
    if (hEl) hEl.textContent = hints[next] || hints[0];
    if (sEl) sEl.textContent = lang==='ru' ? `${next}/3 нажатий` : `${next}/3 Klicks`;
  }
}

function showPetCharacter(area, animate) {
  const prof = P();
  const greeting = lang==='ru'
    ? `Питомец ${prof.name} вылупился! 🎉`
    : `Das Haustier von ${prof.name} ist geschlüpft! 🎉`;
  area.innerHTML = `
    <div class="pet-scene ${animate?'pet-appear':''}">
      <p class="pet-greeting">${animate ? greeting : ''}</p>
      <img class="pet-img" src="${prof.petImg}" alt="Pet"
           onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <div class="pet-fallback" style="display:none">🦊</div>
      <div class="pet-name-badge">${prof.name}</div>
    </div>`;
}

/* ══════════════════════════════════════════════════════════════
   ПОМОЩНИКИ
══════════════════════════════════════════════════════════════ */
function $(id)          { return document.getElementById(id); }
function getCats(lvl)   { return (window.VOCAB_DATA||[]).filter(c=>c.level===lvl); }
function findCat(lvl,c) { return (window.VOCAB_DATA||[]).find(c2=>c2.level===lvl&&c2.category===c)||{}; }

/* ══════════════════════════════════════════════════════════════
   СОБЫТИЯ
══════════════════════════════════════════════════════════════ */
function closeMobileNav() {
  const nav = $('main-nav');
  const btn = $('burger-btn');
  nav.classList.remove('mobile-open');
  btn.classList.remove('open');
}

function initEvents() {
  /* Бургер-меню */
  $('burger-btn').addEventListener('click', ()=>{
    const nav = $('main-nav');
    const btn = $('burger-btn');
    const isOpen = nav.classList.toggle('mobile-open');
    btn.classList.toggle('open', isOpen);
  });

  /* Навигация */
  document.querySelectorAll('.nav-link').forEach(link=>{
    link.addEventListener('click',e=>{
      e.preventDefault();
      closeMobileNav();
      const s=link.dataset.screen;
      if(s==='home'||s==='lektionen'){show('home');renderHome();}
      else if(s==='wortschatz') renderVocabScreen();
      else if(s==='grammatik')  renderGrammarScreen();
      else if(s==='profil')     renderProfile();
      else if(s==='shop')       renderShop();
      else if(s==='pet')        renderPetScreen();
    });
  });

  /* Уровни */
  document.querySelectorAll('.level-card').forEach(card=>
    card.addEventListener('click',()=>{S.level=card.dataset.level;renderHome();}));

  /* Разделы */
  document.querySelector('.grammar-card').addEventListener('click',renderGrammarScreen);
  document.querySelector('.vocab-card').addEventListener('click',  renderVocabScreen);

  /* Weiter (для слов без артикля) */
  $('weiter-btn').addEventListener('click', ()=>{ if(!S.busy) handleArticle('-'); });

  /* Артикли */
  document.querySelectorAll('.art-btn').forEach(btn=>
    btn.addEventListener('click',()=>handleArticle(btn.dataset.article)));

  /* Кнопки назад */
  $('cards-back').addEventListener('click',  ()=>{show('home');renderHome();});
  $('grammar-back').addEventListener('click',()=>{show('home');renderHome();});
  $('vocab-back').addEventListener('click',  ()=>{show('home');renderHome();});
  $('shop-back').addEventListener('click',   ()=>{show('home');renderHome();});
  $('pet-back').addEventListener('click',    ()=>{show('home');renderHome();});
  $('cart-buy-btn').addEventListener('click', checkoutCart);

  /* Конец сессии */
  $('btn-repeat').addEventListener('click',()=>{
    S.cardIdx=S.sessionCorrect=S.sessionWrong=S.sessionLearned=0;
    $('session-complete').classList.add('hidden');
    $('flashcard').classList.remove('hidden');
    drawCard();
  });
  $('btn-home').addEventListener('click', ()=>{show('home');renderHome();});
  $('btn-home2').addEventListener('click',()=>{show('home');renderHome();});
  $('btn-review-learned').addEventListener('click',()=>{
    S.cardIdx=S.sessionCorrect=S.sessionWrong=S.sessionLearned=0;
    $('all-learned').classList.add('hidden');
    $('flashcard').classList.remove('hidden');
    drawCard();
  });

  /* Модал грамматики */
  $('modal-close').addEventListener('click',        ()=>$('grammar-modal').classList.add('hidden'));
  $('modal-needs-review').addEventListener('click', ()=>$('grammar-modal').classList.add('hidden'));
  $('modal-mark-done').addEventListener('click',()=>{
    if(S.openRuleId) setGrammarStudied(S.openRuleId);
    $('grammar-modal').classList.add('hidden');
    renderGrammarScreen();
  });
  $('grammar-modal').addEventListener('click',e=>{
    if(e.target===$('grammar-modal')) $('grammar-modal').classList.add('hidden');
  });

  /* Переключатель профиля */
  $('header-avatar').addEventListener('click', e => {
    e.stopPropagation();
    updateProfileUI(); // перерисовываем свежий список аккаунтов
    $('profile-dropdown').classList.toggle('hidden');
  });
  document.addEventListener('click', () => {
    const dd = $('profile-dropdown');
    if (dd) dd.classList.add('hidden');
  });

  /* Переключатель языка */
  $('lang-btn').addEventListener('click',()=>{
    lang = lang==='de' ? 'ru' : 'de';
    localStorage.setItem('dl_lang', lang);
    applyLang();                          // обновляет data-i18n элементы
    rerenderCurrent();                    // обновляет динамический контент экрана
    rerenderModalIfOpen();                // обновляет модал если открыт
  });

  /* Горячие клавиши 1/2/3 */
  document.addEventListener('keydown',e=>{
    if(S.screen!=='cards') return;
    if(e.key==='1') handleArticle('der');
    if(e.key==='2') handleArticle('die');
    if(e.key==='3') handleArticle('das');
  });
}

/* ══════════════════════════════════════════════════════════════
   РЕГИСТРАЦИЯ / ВХОД
══════════════════════════════════════════════════════════════ */
function showRegOverlay(addingNew) {
  renderRegCard(addingNew);
  $('reg-overlay').classList.remove('hidden');
}
function hideRegOverlay() { $('reg-overlay').classList.add('hidden'); }

function renderRegCard(addingNew) {
  const accounts = getAccounts();
  const card = $('reg-card');
  const logo = `<div class="reg-logo"><div class="logo-badge">D</div><span class="logo-text">DEUTSCHLERNEN</span></div>`;

  if (accounts.length > 0 && !addingNew) {
    /* ── Выбор существующего аккаунта ── */
    card.innerHTML = `
      ${logo}
      <h2 class="reg-title">Выбери аккаунт</h2>
      <div class="reg-accounts">
        ${accounts.map(acc => `
          <div class="reg-acc-card" data-id="${acc.id}">
            <div class="reg-acc-avatar">${acc.name[0]?.toUpperCase() || '?'}</div>
            <div class="reg-acc-name">${acc.name}</div>
          </div>`).join('')}
      </div>
      <div class="reg-divider"><span>или</span></div>
      <button class="reg-new-btn" id="reg-new-btn">＋ Создать новый аккаунт</button>`;

    card.querySelectorAll('.reg-acc-card').forEach(el =>
      el.addEventListener('click', () => {
        activeProfile = el.dataset.id;
        localStorage.setItem('dl_active_id', activeProfile);
        hideRegOverlay();
        if (appStarted) { S.cart = {}; updateProfileUI(); migrateCoins(); updateCoinDisplay(); updateEuroDisplay(); rerenderCurrent(); refreshOverallBar(); }
        else startApp();
      }));
    $('reg-new-btn').addEventListener('click', () => renderRegCard(true));

  } else {
    /* ── Создание нового аккаунта ── */
    const hasBack = accounts.length > 0;
    card.innerHTML = `
      ${logo}
      <div class="reg-flag">🇩🇪</div>
      <h1 class="reg-title">${hasBack ? 'Новый аккаунт' : 'Добро пожаловать!'}</h1>
      <p class="reg-sub">${hasBack ? 'Введи никнейм для нового аккаунта' : 'Введи свой никнейм чтобы начать учить немецкий'}</p>
      <input type="text" id="reg-input" class="reg-input" placeholder="Твой никнейм..." maxlength="20" autocomplete="off" spellcheck="false">
      ${hasBack ? '<button class="reg-back-btn" id="reg-back-btn">← Назад</button>' : ''}
      <button class="btn-primary reg-btn" id="reg-btn">Начать →</button>`;

    const input = $('reg-input');
    const backBtn = $('reg-back-btn');

    function submitNew() {
      const name = input.value.trim();
      if (!name) { input.classList.remove('shake'); void input.offsetWidth; input.classList.add('shake'); return; }
      const id = createAccount(name);
      activeProfile = id;
      localStorage.setItem('dl_active_id', id);
      hideRegOverlay();
      if (appStarted) { S.cart = {}; updateProfileUI(); migrateCoins(); updateCoinDisplay(); updateEuroDisplay(); rerenderCurrent(); refreshOverallBar(); }
      else startApp();
    }

    $('reg-btn').addEventListener('click', submitNew);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') submitNew(); });
    if (backBtn) backBtn.addEventListener('click', () => renderRegCard(false));
    setTimeout(() => input.focus(), 50);
  }
}

/* ══════════════════════════════════════════════════════════════
   СТАРТ
══════════════════════════════════════════════════════════════ */
let appStarted = false;

function startApp() {
  appStarted = true;
  initEvents();
  applyLang();
  migrateCoins();
  updateCoinDisplay();
  updateEuroDisplay();
  renderHome();
  show('home');
}

/* Переносит данные со старых хардкодных ключей на новые динамические */
function migrateOldProfileData() {
  if (localStorage.getItem('_prof_mig_done')) return;
  const OLD = {
    'Кирилл': { prog:'dl_prog_kirill', coins:'dl_coins_kirill', shop:'dl_shop_kirill', used:'dl_used_kirill', pet:'dl_pet_kirill' },
    'Альбина': { prog:'dl_prog_albina', coins:'dl_coins_albina', shop:'dl_shop_albina', used:'dl_used_albina', pet:'dl_pet_albina' },
  };
  getAccounts().forEach(acc => {
    const old = OLD[acc.name];
    if (!old) return;
    const map = [
      [old.prog,  `dl_prog_${acc.id}`],
      [old.coins, `dl_coins_${acc.id}`],
      [old.shop,  `dl_shop_${acc.id}`],
      [old.used,  `dl_used_${acc.id}`],
      [old.pet,   `dl_pet_${acc.id}`],
    ];
    map.forEach(([oldKey, newKey]) => {
      const val = localStorage.getItem(oldKey);
      if (val !== null && localStorage.getItem(newKey) === null)
        localStorage.setItem(newKey, val);
    });
  });
  localStorage.setItem('_prof_mig_done', '1');
}

document.addEventListener('DOMContentLoaded', () => {
  buildWordCache();
  migrateOldProfileData();
  showRegOverlay(false);
});
