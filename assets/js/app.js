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
    nav_wortschatz: 'Wortschatz',  nav_grammatik: 'Grammatik',  nav_profil: 'Profil', nav_shop: 'Shop', nav_pet: 'Haustier', nav_exam: 'Prüfung',
    exam_title: 'Globale Prüfung', exam_desc: 'Prüfung über alle gelernten Wörter in zufälliger Reihenfolge. Ohne Punkte — nur ein Test.',
    exam_start: 'Prüfung starten', exam_again: 'Nochmal', exam_none: 'Lerne zuerst ein paar Wörter, dann kannst du die Prüfung machen!',
    exam_done: 'Prüfung beendet!', exam_correct: 'Richtig', exam_total: 'Wörter gesamt', exam_chart_title: 'Verlauf',
    conj_banner: 'Konjugiere das Verb in allen Personen', conj_check: 'Prüfen', conj_legend_t: '📖 Wann welches Modalverb?',
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
    done_section: 'Abgeschlossen',
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
    tt_phase:      'Prüfung — schreibe das Wort mit Artikel',
    peek_rule:     'Regel',
    defer_later:   'Später',
  },
  ru: {
    nav_home: 'Главная',          nav_lektionen: 'Уроки',
    nav_wortschatz: 'Словарь',    nav_grammatik: 'Грамматика',  nav_profil: 'Профиль', nav_shop: 'Магазин', nav_pet: 'Питомец', nav_exam: 'Экзамен',
    exam_title: 'Глобальный экзамен', exam_desc: 'Экзамен по всем выученным словам вразброс. Без баллов — просто проверка.',
    exam_start: 'Начать экзамен', exam_again: 'Пройти ещё раз', exam_none: 'Сначала выучи несколько слов, тогда сможешь пройти экзамен!',
    exam_done: 'Экзамен завершён!', exam_correct: 'Правильно', exam_total: 'Всего слов', exam_chart_title: 'История попыток',
    conj_banner: 'Спряги глагол по всем лицам', conj_check: 'Проверить', conj_legend_t: '📖 Когда какой модальный глагол использовать',
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
    done_section: 'Пройденное',
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
    tt_phase:      'Контрольная проверка — напиши слово с артиклем',
    peek_rule:     'Правило',
    defer_later:   'На потом',
  },
  uk: {
    nav_home: 'Головна',          nav_lektionen: 'Уроки',
    nav_wortschatz: 'Словник',    nav_grammatik: 'Граматика',  nav_profil: 'Профіль', nav_shop: 'Магазин', nav_pet: 'Вихованець', nav_exam: 'Іспит',
    exam_title: 'Глобальний іспит', exam_desc: 'Іспит з усіх вивчених слів врозкид. Без балів — просто перевірка.',
    exam_start: 'Почати іспит', exam_again: 'Пройти ще раз', exam_none: 'Спочатку вивчи кілька слів, тоді зможеш пройти іспит!',
    exam_done: 'Іспит завершено!', exam_correct: 'Правильно', exam_total: 'Усього слів', exam_chart_title: 'Історія спроб',
    conj_banner: 'Відміняй дієслово за всіма особами', conj_check: 'Перевірити', conj_legend_t: '📖 Коли яке модальне дієслово вживати',
    cart_title: 'Кошик', cart_empty: 'Порожньо', cart_total: 'Разом:', cart_buy: 'Купити!',
    home_title: 'Ласкаво просимо до DeutschLernen!',
    home_subtitle: 'Обери свій курс.',
    user_hi: 'Привіт!',
    sec_level: 'Обери рівень',
    sec_area:  'Обери розділ',
    a1_name:'(Початківець)',   a1_sub:'Активний',
    a2_name:'(Основи)',        a2_sub:'Навчаюсь',
    b1_name:'(Просунутий)',    b1_sub:'Просуваюсь',
    b2_name:'(Самостійний)',   b2_sub:'Самостійний',
    area_grammar_title: 'ГРАМАТИКА І ПРАВИЛА',
    area_grammar_desc:  'Вивчай граматичні теми і правила німецької.',
    area_vocab_title:   'СЛОВНИК І ТЕМИ',
    area_vocab_desc:    'Вчи слова за категоріями з артиклями.',
    btn_back:      '← Назад',
    btn_repeat:    'Повторити',
    btn_home_ov:   'На головну',
    btn_review_all:'Повторити все',
    modal_needs_review: 'Вчити ще',
    modal_mark_done:    'Зрозумів ✓',
    hint_keys:   'Клавіші: [1] der  [2] die  [3] das',
    session_done: 'Сесію завершено!',
    label_correct:'Правильно', label_wrong:'Невірно', label_learned:'Вивчено',
    all_learned_h:'Всі слова вивчені!',
    all_learned_p:'Ти освоїв усі слова цієї категорії.',
    vocab_screen_h:   'Словник',
    grammar_screen_h: 'Граматика',
    profile_title: 'Мій профіль і прогрес',
    themes_title:    (lvl) => `${lvl} — теми`,
    cat_learned_txt: (a, b) => `${a} / ${b} вивчено`,
    btn_start:   'Почати урок',
    btn_learn:   'Вчити',
    done_section: 'Пройдене',
    no_cats:     (lvl) => `Немає категорій для ${lvl}.`,
    rule_label:  (n) => `Правило ${n}`,
    studied_badge: '✓ Вивчено',
    examples_h:  'Приклади',
    stat_learned:  'Вивчених слів',
    stat_learning: 'В процесі',
    stat_grammar:  'Правил граматики',
    progress_lbl:  (lvl) => `Прогрес ${lvl}`,
    learned_sec:   '⭐ Вивчені слова',
    no_words_yet:  'Слів ще немає. Починай вчити! 🚀',
    start_unit:    'Почни урок!',
    loading:       'Завантаження…',
    fb_correct:    '✓ Правильно!',
    fb_wrong:      (art, word) => `✗ Невірно! Правильно: ${art} ${word}`,
    streak_txt:    (n) => `🔥 Поспіль: ${n} / ${LEARNED_THRESHOLD}`,
    streak_done:   (n) => `⭐ Вивчено! (${n}/${n})`,
    already_lrn:   '⭐ Вже вивчено',
    tt_phase:      'Контрольна перевірка — напиши слово з артиклем',
    peek_rule:     'Правило',
    defer_later:   'На потім',
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
    deferKey:`dl_defer_${activeProfile}`,
    examKey: `dl_exam_${activeProfile}`,
    petImg:  PET_IMGS[Math.max(0, idx) % PET_IMGS.length],
  };
}

/* ── Магазин ── */
const SHOP_ITEMS = [
  { id:'sh_001', emoji:'🥤', name_ru:'Бутылка кока колы', name_uk:'Пляшка коки',        name_de:'Coca-Cola',    price:10 },
  { id:'sh_002', emoji:'🧃', name_ru:'Бутылка сока',      name_uk:'Пляшка соку',         name_de:'Saftflasche',  price:10 },
  { id:'sh_003', emoji:'🍫', name_ru:'Чикалятка',         name_uk:'Шоколадка',           name_de:'Schokolade',   price:15 },
  { id:'sh_004', emoji:'🍟', name_ru:'Чипсеки',           name_uk:'Чіпси',               name_de:'Chips',        price:15 },
  { id:'sh_005', emoji:'⚡', name_ru:'Энергос',           name_uk:'Енергетик',           name_de:'Energy-Drink', price:20 },
  { id:'sh_006', emoji:'🍅', name_ru:'Помидор',           name_uk:'Помідор',             name_de:'Tomate',       price:5  },
  { id:'sh_007', emoji:'🍬', name_ru:'Желейки',           name_uk:'Желейки',             name_de:'Gummibärchen', price:10 },
  { id:'sh_008', emoji:'🍕', name_ru:'Пицка',             name_uk:'Піца',                name_de:'Pizza',        price:40 },
  { id:'sh_009', emoji:'🍔', name_ru:'Бургер',            name_uk:'Бургер',              name_de:'Burger',       price:35 },
  { id:'sh_010', emoji:'🥤', name_ru:'Молочный коктейль', name_uk:'Молочний коктейль',   name_de:'Milchshake',   price:15 },
];

/* t(key, ...args) — получить строку перевода */
function t(key, ...args) {
  const val = (TR[lang] || TR.ru)[key] ?? TR.ru[key];
  if (typeof val === 'function') return val(...args);
  return val ?? key;
}
/* lstr(de, ru, uk) — inline трёхъязычная строка */
function lstr(de, ru, uk) { return lang==='de' ? de : lang==='uk' ? (uk||ru) : ru; }
/* lname(item) — имя товара по текущему языку */
function lname(item) { return lang==='de' ? item.name_de : lang==='uk' ? (item.name_uk||item.name_ru) : item.name_ru; }

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
    const next = lang === 'de' ? 'RU' : lang === 'ru' ? 'UK' : 'DE';
    btn.textContent = next;
    btn.dataset.nextLang = next.toLowerCase();
    btn.title = lang === 'de' ? 'Перейти на русский' : lang === 'ru' ? 'Перейти на українську' : 'Switch to German';
  }
  document.documentElement.lang = lang;
  // greeting depends on both lang and profile
  if ($('user-hi')) {
    const prof = P();
    if (prof) $('user-hi').textContent = lstr(`Hi, ${prof.name}!`,`Привет, ${prof.name}!`,`Привіт, ${prof.name}!`);
  }
}

/* нормализация ответа: нижний регистр, ß→ss, убираем ударения (é→e и т.п.) */
function normAnswer(s) {
  return (s||'').trim().toLowerCase()
    .replace(/\s+/g,' ')
    .replace(/ß/g,'ss')
    .replace(/[éèê]/g,'e').replace(/[áàâ]/g,'a').replace(/[íìî]/g,'i')
    .replace(/[óòô]/g,'o').replace(/[úùû]/g,'u');
}

/* ── Приблизительная транскрипция немецкого русскими буквами ── */
function deTranscribe(word) {
  if (!word) return '';
  let s = ' ' + word.toLowerCase().replace(/ß/g,'с') + ' ';
  s = s
    .replace(/tsch/g,'ч')
    .replace(/sch/g,'ш')
    .replace(/chs/g,'кс')
    .replace(/ch/g,'х')
    .replace(/ck/g,'к')
    .replace(/qu/g,'кв')
    .replace(/ph/g,'ф')
    .replace(/th/g,'т')
    .replace(/tion/g,'цьон')
    .replace(/ ст/g,' шт').replace(/ sp/g,' шп').replace(/ st/g,' шт')
    .replace(/([aeiouäöü])h/g,'$1')         // h после гласной — удлинение, не читается
    .replace(/ei/g,'ай').replace(/ai/g,'ай')
    .replace(/eu/g,'ой').replace(/äu/g,'ой')
    .replace(/ie/g,'и')
    .replace(/ee/g,'э').replace(/aa/g,'а').replace(/oo/g,'о')
    .replace(/ (s)([aeiouäöü])/g,' з$2')    // s в начале перед гласной → з
    .replace(/([aeiouäöü])s([aeiouäöü])/g,'$1з$2') // s между гласными → з
    .replace(/ig /g,'ихь ')                 // -ig на конце
    .replace(/er /g,'эр ');
  const map = {
    a:'а', ä:'э', b:'б', c:'к', d:'д', e:'э', f:'ф', g:'г', h:'х', i:'и',
    j:'й', k:'к', l:'л', m:'м', n:'н', o:'о', ö:'ё', p:'п', q:'к', r:'р',
    s:'с', t:'т', u:'у', ü:'ю', v:'ф', w:'в', x:'кс', y:'ю', z:'ц',
  };
  let out = '';
  for (const ch of s) out += (map[ch] !== undefined ? map[ch] : ch);
  return out.trim();
}

/* ── Фото слова из немецкой Википедии (для конкретных существительных) ── */
/* Уточнение статьи для многозначных слов (чтобы фото было по теме) */
const WIKI_TITLE_FIX = {
  // животные — «домашние» статьи, у них чёткие фото
  Hund:'Haushund', Katze:'Hauskatze', Kuh:'Hausrind', Pferd:'Hauspferd',
  Maus:'Hausmaus', Hahn:'Haushuhn', Gans:'Hausgans', Ziege:'Hausziege',
  // фрукты/овощи (не лампочка/политик/цвет)
  Birne:'Kulturbirne', Kohl:'Gemüsekohl', Orange:'Orange (Frucht)',
  Traube:'Weintraube', Kirsche:'Kirschen', Pilz:'Pilze',
  Paprika:'Gemüsepaprika', Salat:'Kopfsalat',
  // транспорт
  Bus:'Omnibus', Zug:'Reisezug',
};
const imgCache = {};
function fetchWordImage(word) {
  return new Promise(resolve => {
    if (imgCache[word] !== undefined) { resolve(imgCache[word]); return; }
    let ls = null;
    try { ls = localStorage.getItem('dl_img2_' + word); } catch(e) {}
    if (ls !== null) { const v = ls || null; imgCache[word] = v; resolve(v); return; }
    const title = WIKI_TITLE_FIX[word] || word;
    const url = `https://de.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=320&redirects=1&titles=${encodeURIComponent(title)}&origin=*`;
    fetch(url).then(r => r.json()).then(d => {
      let img = null;
      const pages = (d && d.query && d.query.pages) || {};
      for (const k in pages) { if (pages[k].thumbnail && pages[k].thumbnail.source) { img = pages[k].thumbnail.source; break; } }
      imgCache[word] = img;
      try { localStorage.setItem('dl_img2_' + word, img || ''); } catch(e) {}
      resolve(img);
    }).catch(() => { imgCache[word] = null; resolve(null); });
  });
}
/* ставит фото или эмодзи в элемент карточки */
function setCardVisual(el, card, fallbackEmoji) {
  const emoji = EMOJI[card.word] || fallbackEmoji || '📝';
  el.textContent = emoji;
  el.classList.remove('has-photo');
  const wantImg = card.article && card.article !== '-' && !/\s/.test(card.word);
  if (!wantImg) return;
  const reqWord = card.word;
  fetchWordImage(reqWord).then(src => {
    if (!src || S.currentWord !== reqWord) return;  // карточка уже сменилась
    const img = document.createElement('img');
    img.className = 'card-photo';
    img.alt = reqWord;
    img.onerror = () => { el.textContent = emoji; el.classList.remove('has-photo'); };
    img.onload  = () => { el.textContent = ''; el.appendChild(img); el.classList.add('has-photo'); };
    img.src = src;
  });
}

/* ── Озвучка слова (немецкий TTS) ── */
function speakWord(word) {
  try {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'de-DE'; u.rate = .85;
    const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.startsWith('de'));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch(e) {}
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
  // Körper — расширение
  Zunge:'👅', Schnurrbart:'👨', Bart:'🧔', Lippe:'👄',
  Oberkörper:'🧍', Unterkörper:'🦵', Nacken:'💆', Handgelenk:'⌚', Taille:'📏',
  Hintern:'🍑', Oberschenkel:'🦵', Unterschenkel:'🦵', Kniekehle:'🦵', Wade:'🦵',
  Fußgelenk:'🦶', Knöchel:'🦶', Herz:'❤️', Lunge:'🫁', Gehirn:'🧠', Niere:'🫘',
  Magen:'🩻', Darm:'🌀', Leber:'🫀', Blut:'🩸', Muskel:'💪', Knochen:'🦴',
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
  // Новые части тела
  Stirn:'😮', Augenbraue:'🤨', Kinn:'🫦', Wange:'😊',
  Brust:'💪', Zeh:'🦶', Ellbogen:'💪', Po:'🍑', Körper:'🧍',
  // Доп. слова
  'zu Fuß':'🚶', Strumpf:'🧦', Gürtel:'👔', Hut:'🎩',
  Faust:'✊', Arztpraxis:'🏥', Platz:'🏟️', Rakete:'🚀',
  // Zahlen расширенные
  dreizehn:'1️⃣3️⃣', vierzehn:'1️⃣4️⃣', fünfzehn:'1️⃣5️⃣', sechzehn:'1️⃣6️⃣',
  siebzehn:'1️⃣7️⃣', achtzehn:'1️⃣8️⃣', neunzehn:'1️⃣9️⃣',
  einundzwanzig:'2️⃣1️⃣', sechzig:'6️⃣0️⃣', siebzig:'7️⃣0️⃣',
  achtzig:'8️⃣0️⃣', neunzig:'9️⃣0️⃣', zweihundert:'2️⃣0️⃣0️⃣',
  // Wichtige Verben
  gehen:'🚶', kommen:'🏃', fliegen:'✈️', schwimmen:'🏊', trinken:'🥤',
  schreiben:'✍️', lernen:'📖', spielen:'🎮', geben:'🤲', nehmen:'👐',
  kaufen:'🛍️', brauchen:'🤔', hören:'👂', sagen:'💬', fragen:'❓',
  antworten:'💡', machen:'🔨', suchen:'🔍', bleiben:'🏠', denken:'🧠',
  singen:'🎤', tanzen:'💃', schlafen:'😴', wohnen:'🏡', arbeiten:'💼',
  beginnen:'🚀', helfen:'🤝', treffen:'👋', rufen:'📣',
  // Am Bahnhof
  Fahrkartenautomat:'🎫', Fahrkarte:'🎫', Anzeigetafel:'📋',
  Zugnummer:'🔢', Zielstation:'📍', Ticketkontrolle:'✅',
  Serviceschalter:'🏧', Stationen:'🚉', Uhrzeit:'🕐',
  Minute:'⏱️', Stunde:'⏰',
  // Nützliche Wörter
  Musik:'🎵', Ruhe:'🤫', Spaß:'🎉', Zentrum:'🏙️', Haustür:'🚪',
  Schere:'✂️', Museum:'🏛️', Kuli:'✒️', Handy:'📱',
  Verkehrsmittel:'🚌', Parkgebühren:'💶',
  praktisch:'🛠️', öffentlich:'🏛️', teuer:'💎', billig:'💸',
  wichtig:'⚠️', richtig:'✅', falsch:'❌', schwer:'🏋️', leicht:'🪶', fit:'💪',
  // Länder 2
  Slowakei:'🇸🇰', Niederlande:'🇳🇱', Iran:'🇮🇷', Sudan:'🌍',
  Irak:'🌍', Uganda:'🇺🇬', USA:'🇺🇸', 'Saudi-Arabien':'🇸🇦',
  Vietnam:'🇻🇳', Japan:'🇯🇵',
  // Wetter
  Wetter:'🌤️', Wind:'💨', Regen:'🌧️', Schnee:'❄️', Wolke:'☁️',
  Gewitter:'⛈️', Sonne:'☀️', Temperatur:'🌡️', Frost:'🥶', Nebel:'🌫️',
  sonnig:'☀️', bewölkt:'☁️', windig:'💨', regnerisch:'🌧️',
  // Jahreszeiten
  Frühling:'🌸', Sommer:'☀️', Herbst:'🍂', Winter:'❄️',
  Morgen:'🌅', Vormittag:'🌤️', Mittag:'🌞', Nachmittag:'🌇', Abend:'🌆', Nacht:'🌙',
  Jahr:'📅', vorgestern:'⏪', gestern:'◀️', heute:'📍', übermorgen:'⏩',
  // Monate
  Januar:'❄️', Februar:'💝', März:'🌱', April:'🌷', Mai:'🌸', Juni:'🌻',
  Juli:'🏖️', August:'☀️', September:'🍂', Oktober:'🎃', November:'🍁', Dezember:'🎄',
  // Sprachen
  Deutsch:'🇩🇪', Russisch:'🇷🇺', Englisch:'🇬🇧', Französisch:'🇫🇷',
  Italienisch:'🇮🇹', Türkisch:'🇹🇷', Arabisch:'🌙', Spanisch:'🇪🇸',
  Persisch:'🌹', Polnisch:'🇵🇱', Chinesisch:'🇨🇳', Ukrainisch:'🇺🇦',
  // Länder
  Deutschland:'🇩🇪', Russland:'🇷🇺', Österreich:'🇦🇹', Frankreich:'🇫🇷',
  Italien:'🇮🇹', Spanien:'🇪🇸', Türkei:'🇹🇷', Polen:'🇵🇱',
  Ukraine:'🇺🇦', Schweiz:'🇨🇭', Kanada:'🇨🇦', China:'🇨🇳',
  Afghanistan:'🇦🇫', Senegal:'🇸🇳', Nigeria:'🇳🇬', Ghana:'🇬🇭',
  Eritrea:'🌍', Marokko:'🇲🇦', Dänemark:'🇩🇰', Belgien:'🇧🇪',
  // Fahrzeuge 2
  Roller:'🛴', LKW:'🚛', Traktor:'🚜', Bagger:'🏗️', Gabelstapler:'🏭',
  Hubschrauber:'🚁', Heißluftballon:'🎈', ICE:'🚄', Seilbahn:'🚡',
  Fähre:'⛴️', Boot:'🚤', Wohnmobil:'🚌', Motorboot:'🚤',
  Segelboot:'⛵', Kanu:'🛶', Kajak:'🛶', 'U-Boot':'🌊',
  // Möbel 2
  Tisch:'🪵', Stuhl:'🪑', Sessel:'🛋️', Schrank:'🗄️', Ofen:'🔥',
  Leuchter:'🕯️', Fernseher:'📺', Hocker:'🪑', Computer:'💻',
  Schlüssel:'🔑', Topf:'🫕', Stift:'✏️', Brief:'✉️', Pinsel:'🖌️',
  // Orte das
  Kino:'🎬', Hotel:'🏨', Rathaus:'🏛️', Restaurant:'🍽️', Café:'☕',
  Haus:'🏠', Dach:'🏠', Gleis:'🛤️',
  // Essen 2
  Döner:'🌯', Pfeffer:'🌶️', Mais:'🌽', Speck:'🥓', Schinken:'🍖',
  Lachs:'🐟', Ketchup:'🍅', Hamburger:'🍔', Toast:'🍞',
  Ananas:'🍍', Waffel:'🧇', Torte:'🎂', Eis:'🍦', Ticket:'🎫',
  // Menschen
  Junge:'👦', Mädchen:'👧', Freund:'🤝', Freundin:'👭',
  Enkel:'👦', Enkelin:'👧', Kollege:'👔', Kollegin:'👩‍💼',
  Nachbar:'🏘️', Nachbarin:'🏘️', Rentner:'👴', Anwalt:'⚖️',
  Schüler:'📚', Schülerin:'📚',
  // Grüße
  Hallo:'👋', Tschüss:'👋', 'Auf Wiedersehen':'🤝', 'Guten Morgen':'🌅',
  'Guten Tag':'☀️', 'Guten Abend':'🌆', 'Gute Nacht':'🌙',
  Bitte:'🙏', Danke:'💙', Entschuldigung:'🙇', 'Es tut mir leid':'😔',
  Ja:'✅', Nein:'❌',
  // Tiere 2
  Frosch:'🐸', Igel:'🦔', Esel:'🫏', Mücke:'🦟', Maus:'🐭',
  Spinne:'🕷️', Pony:'🐴', Rind:'🐄', Gans:'🪿', Kaninchen:'🐰',
  Hahn:'🐓', Ziege:'🐐',
  // Berufe (женские формы)
  Ärztin:'👩‍⚕️', Lehrerin:'👩‍🏫', Studentin:'🎓', Köchin:'👩‍🍳', Bäckerin:'🥐',
  Ingenieurin:'⚙️', Krankenpfleger:'👨‍⚕️', Polizistin:'👮‍♀️', Verkäuferin:'🛍️',
  Fahrerin:'🚗', Kellnerin:'🍽️', Mechanikerin:'🔧', Friseurin:'💈', Sekretärin:'📝',
  // Modalverben
  können:'💪', müssen:'❗', dürfen:'✅', wollen:'🙋', sollen:'📋', mögen:'❤️',
  möchten:'🙏', wissen:'🧠',
  // Lage / Wo?
  vor:'⬅️', hinter:'➡️', neben:'↔️', über:'⬆️', unter:'⬇️', an:'📌', auf:'🔝',
  in:'📥', zwischen:'↔️', gegenüber:'🔄', links:'👈', rechts:'👉',
  oben:'🔼', unten:'🔽', innen:'🔵', außen:'⭕',
  // Wegbeschreibung
  geradeaus:'⬆️', abbiegen:'↩️', 'nach links abbiegen':'↰', 'nach rechts abbiegen':'↱',
  'überqueren':'🚶', 'die Straße überqueren':'🚸', 'über die Brücke gehen':'🌉',
  'über die Kreuzung gehen':'🚦', vorbeigehen:'➡️', 'an ... vorbei':'➡️', entlang:'🛣️',
  'die erste Straße links':'1️⃣', 'die zweite Straße rechts':'2️⃣', weitergehen:'🚶',
  'bis zur Ampel':'🚥', 'gegenüber von':'🔄', Weg:'🛤️', Richtung:'🧭',
  'zu Fuß gehen':'🚶', 'die Treppe hinauf':'🪜',
  // Krankheiten & Gesundheit
  Kopfschmerzen:'🤕', Bauchschmerzen:'😣', Halsschmerzen:'😷', Zahnschmerzen:'🦷',
  Rückenschmerzen:'🔙', Fieber:'🌡️', Erkältung:'🤧', Husten:'😮‍💨', Schnupfen:'🤧',
  Depression:'😔', Durchfall:'🚽', Ausschlag:'🔴', Grippe:'🤒', Schmerzen:'💢',
  Beschwerden:'😖', Gesundheit:'💚', Krankheit:'🤒', Übelkeit:'🤢', Wunde:'🩹', Medikament:'💊',
  // Beim Arzt & Apotheke
  Hausarzt:'👨‍⚕️', Zahnarzt:'🦷', Frauenarzt:'👩‍⚕️', Kinderarzt:'🧒', 'HNO-Arzt':'👂',
  Orthopäde:'🦴', Facharzt:'🩺', Termin:'📅', Sprechstunde:'🕐', Sprechstundenhilfe:'💁',
  Wartezimmer:'🪑', Untersuchung:'🔬', Blutentnahme:'🩸', Impfung:'💉', Impfpass:'📗',
  Röntgenbild:'🩻', Vorsorge:'🛡️', Rezept:'📝', Überweisung:'📄', Krankschreibung:'📋',
  Krankmeldung:'📋', Gesundheitskarte:'💳', Krankenkasse:'🏥', Behandlungsschein:'🎫',
  Spritze:'💉', Tablette:'💊', Salbe:'🧴', Hustensaft:'🍯', Verband:'🩹',
  Fieberthermometer:'🌡️', Augentropfen:'💧', Verhütungsmittel:'🛡️',
  // Zahlen
  null:'0️⃣', eins:'1️⃣', zwei:'2️⃣', drei:'3️⃣', vier:'4️⃣', fünf:'5️⃣',
  sechs:'6️⃣', sieben:'7️⃣', acht:'8️⃣', neun:'9️⃣', zehn:'🔟',
  elf:'1️⃣1️⃣', zwölf:'1️⃣2️⃣', zwanzig:'2️⃣0️⃣', dreißig:'3️⃣0️⃣',
  vierzig:'4️⃣0️⃣', fünfzig:'5️⃣0️⃣', hundert:'💯', tausend:'🔢',
  // Gefühle
  glücklich:'😊', traurig:'😢', wütend:'😠', müde:'😴', hungrig:'🍽️',
  krank:'🤒', verliebt:'😍', ängstlich:'😨', aufgeregt:'🤩',
  überrascht:'😲', nervös:'😬', froh:'😄', langweilig:'😑',
  gut:'✅', schlecht:'❌',
  // Adjektive
  alt:'👴', jung:'🧒', lang:'📏', kurz:'📐', groß:'🏔️', klein:'🐭',
  dick:'🐘', dünn:'🦴', hässlich:'👺', schön:'🌸', hell:'☀️', dunkel:'🌑',
  stark:'💪', schwach:'🪶', reich:'💰', arm:'🪙', schnell:'⚡', langsam:'🐢',
  laut:'📢', leise:'🤫', neu:'✨', interessant:'🔍', lustig:'😂',
  freundlich:'😊', unfreundlich:'😤', sauber:'🧹', schmutzig:'🗑️',
  unglücklich:'😞',
  // Möbel & Haushalt
  Glas:'🥛', Messer:'🔪', Sofa:'🛋️', Bett:'🛏️', Buch:'📚',
  Heft:'📓', Lineal:'📏', Foto:'📷', Bild:'🖼️', Kissen:'🛏️',
  Bücherregal:'📚', Gabel:'🍴', Kanne:'🫖', Tasse:'☕', Pfanne:'🍳',
  Vase:'🌸', Flasche:'🍶', Wanne:'🛁', Wand:'🧱', Couch:'🛋️',
  Telefonzelle:'📞', Löffel:'🥄', Teller:'🍽️', Kühlschrank:'🥶', Herd:'🔥',
  Handschelle:'⛓️',
  // Stadt erweitert
  Bahnhof:'🚉', Zoo:'🦁', Baum:'🌳', Kiosk:'🏪', Spielplatz:'🛝',
  Zaun:'🚧', Fahrradweg:'🚲', Zebrastreifen:'🦓', Fahrplan:'📅',
  Post:'📬', Straße:'🛣️', Kirche:'⛪', Bibliothek:'📚', Wiese:'🌿',
  'S-Bahn':'🚆', Tankstelle:'⛽', Zeitung:'📰', Moschee:'🕌',
  Polizei:'👮', Polizeiwache:'🚔', Abfahrt:'🚀', Ankunft:'🛬',
  Kantenautomat:'🤖',
  // Verwandte
  Cousin:'👦', Cousine:'👧', Ehemann:'💍', Ehefrau:'💍',
  Eltern:'👨‍👩‍👧', Geschwister:'👫', Großeltern:'👴👵', Verwandten:'👨‍👩‍👧‍👦',
  Hochzeit:'💒', ledig:'🧍', verheiratet:'💑', Beziehung:'❤️', Scheidung:'💔',
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
  phase:'study',   // 'study' | 'test'
  testCards:[], testIdx:0, testCorrect:0, testRequeued:new Set(),
  catMode:'',      // '' | 'possessive'
  possePerson:'',  // 'leo' | 'lea'
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

/* ── Отложенные на потом ── */
function loadDeferred()    { try { return JSON.parse(localStorage.getItem(P().deferKey)||'[]'); } catch { return []; } }
function saveDeferred(arr) { localStorage.setItem(P().deferKey, JSON.stringify([...new Set(arr)])); }
function isDeferred(id)    { return loadDeferred().includes(id); }
function addDeferred(id)   { const a = loadDeferred(); a.push(id); saveDeferred(a); }
function removeDeferred(id){ saveDeferred(loadDeferred().filter(x => x !== id)); }
/* виртуальная категория из отложенных слов */
function getDeferredCategory() {
  const ids = loadDeferred();
  if (!ids.length) return null;
  const words = [];
  (window.VOCAB_DATA||[]).forEach(cat => (cat.words||[]).forEach(w => {
    if (ids.includes(w.id)) words.push(w);
  }));
  if (!words.length) return null;
  return { level: S.level, category: 'deferred', name: 'Aufschieben',
           name_ru: 'Отложенные на потом', emoji: '⏰', words, isDeferred: true };
}
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
  const locale = lang==='de'?'de-DE':lang==='uk'?'uk-UA':'ru-RU';
  const date = d.toLocaleDateString(locale, {day:'numeric', month:'long', year:'numeric'});
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

// streak накапливается ТОЛЬКО через печатный тест; learned = 3 верных ввода
function updateWP(id, correct) {
  const p  = loadProg();
  const wp = p[id] || {streak:0,total:0,wrong:0,status:'new',seen:null};
  wp.seen  = new Date().toISOString().slice(0,10);
  if (correct) {
    wp.streak++; wp.total++;
    wp.status = wp.streak >= LEARNED_THRESHOLD ? 'learned' : 'learning';
  } else {
    wp.wrong++; wp.streak = 0;
    if (wp.status !== 'learned') wp.status = 'learning';
  }
  p[id] = wp; saveProg(p); return wp;
}

/* Сброс всех ранее «выученных» слов — теперь выученным считается только после 3x печатного теста */
function resetLearnedWords() {
  if (localStorage.getItem('_typing_reset_v2')) return;
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('dl_prog_')) keys.push(k);
  }
  keys.forEach(key => {
    try {
      const prog = JSON.parse(localStorage.getItem(key) || '{}');
      Object.keys(prog).forEach(id => {
        if (!id.startsWith('g_') && prog[id] && prog[id].status === 'learned') {
          prog[id].status = 'new';
          prog[id].streak = 0;
        }
      });
      localStorage.setItem(key, JSON.stringify(prog));
    } catch(e) {}
  });
  localStorage.setItem('_typing_reset_v2', '1');
}

/* Сбросить прогресс одного слова (снова "новое") */
function resetWord(id) {
  const p = loadProg();
  if (p[id]) { delete p[id]; saveProg(p); }
  removeDeferred(id);
}
/* Сбросить прогресс всей категории */
function resetCategory(catKey, level) {
  const cat = findCat(level, catKey);
  if (!cat || !cat.words) return;
  const p = loadProg();
  if (cat.mode === 'conjugation') {
    cat.words.forEach(w => { if (p[w.id]) delete p[w.id]; });
  } else {
    cat.words.forEach(w => { if (p[w.id]) delete p[w.id]; removeDeferred(w.id); });
  }
  saveProg(p);
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
  else if (S.screen==='exam')       renderExamScreen();
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
        <span class="po-name">${lstr('Neues Konto','Новый аккаунт','Новий акаунт')}</span>
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
    if (isDeferred(w.id)) return; // отложенные не считаем
    total++;
    if (!p[w.id]) return;
    if (p[w.id].status==='learned')   learned++;
    else if (p[w.id].streak>0)        learning++;
  }));
  // learned = полные 100%, learning = пропорционально streak/threshold
  const pct = total ? Math.round((learned + learning*(1/LEARNED_THRESHOLD)) / total * 100) : 0;
  $('overall-progress').style.width = pct+'%';
  $('overall-pct').textContent       = pct+'%';
  const wc = $('overall-words-count');
  if (wc) wc.textContent = `⭐ ${learned} / ${total} ${lstr('Wörter','слов','слів')}`;
}

function isCatComplete(level, catKey) {
  const cat = findCat(level, catKey);
  if (!cat || !cat.words || !cat.words.length) return false;
  const p = loadProg();
  return cat.words.every(w => p[w.id] && p[w.id].status === 'learned');
}

function makeCatCardHTML(cat, total, learned, p) {
  // Проверяем блокировку
  if (cat.requiresCategory && !isCatComplete(cat.level, cat.requiresCategory)) {
    const reqCat = findCat(cat.level, cat.requiresCategory);
    const reqName = reqCat ? (reqCat.name_ru || reqCat.name) : cat.requiresCategory;
    return `
      <div class="cat-card cat-card-locked" data-cat="${cat.category}" data-locked="1">
        <span class="cat-emoji">🔒</span>
        <span class="cat-name">${cat.name}${cat.name_ru?`<span class="cat-name-ru"> (${cat.name_ru})</span>`:''}</span>
        <div class="cat-locked-hint">${lstr(`Erst «${reqName}» lernen`,`Сначала выучи «${reqName}»`,`Спочатку вивчи «${reqName}»`)}</div>
      </div>`;
  }

  const pct      = total ? Math.round(learned/total*100) : 0;
  const pvWords  = cat.category === 'deferred' ? cat.words : cat.words.filter(w => !isDeferred(w.id));
  const preview  = pvWords.slice(0,4)
    .map(w=>`<div>• <span class="art-${w.article}">${w.article!=='-'?w.article:''}</span> ${w.word}</div>`).join('');
  const resetBtn = cat.category === 'deferred' ? '' :
    `<button class="cat-reset-btn" title="${lstr('Zurücksetzen','Сбросить','Скинути')}">↻</button>`;
  return `
    <div class="cat-card" data-cat="${cat.category}">
      ${resetBtn}
      <span class="cat-emoji">${cat.emoji||'📁'}</span>
      <span class="cat-name">${cat.name}${cat.name_ru?`<span class="cat-name-ru"> (${cat.name_ru})</span>`:''}</span>
      <div class="cat-bar-wrap"><div class="cat-bar-fill" style="width:${pct}%"></div></div>
      <div class="cat-stats">${t('cat_learned_txt',learned,total)}</div>
      <div class="cat-words-preview">${preview}</div>
      <button class="cat-start-btn">${t('btn_start')}</button>
    </div>`;
}

function attachCatEvents(container, level) {
  container.querySelectorAll('.cat-card').forEach(card => {
    if (card.dataset.locked) return; // заблокирована — игнорируем клики
    const key = card.dataset.cat;
    const resolve = () => key === 'deferred' ? getDeferredCategory() : findCat(level, key);
    card.querySelector('.cat-start-btn')?.addEventListener('click', e=>{e.stopPropagation(); const c=resolve(); if(c) startSession(c);});
    // кнопка сброса прогресса категории
    card.querySelector('.cat-reset-btn')?.addEventListener('click', e=>{
      e.stopPropagation();
      const c = resolve();
      const nm = c ? (c.name_ru || c.name) : key;
      if (confirm(lstr(`«${nm}» zurücksetzen?`,`Сбросить прогресс «${nm}»?`,`Скинути прогрес «${nm}»?`))) {
        resetCategory(key, level);
        renderHome();
      }
    });
    card.addEventListener('click', ()=>{ const c=resolve(); if(c) startSession(c); });
  });
}

function renderCatPreview() {
  const wrap     = $('categories-preview');
  const doneWrap = $('categories-done');
  const doneSec  = $('done-section');
  const cats = getCats(S.level);
  if (!cats.length) { wrap.innerHTML=`<div class="loading-hint">${t('no_cats',S.level)}</div>`; doneSec.classList.add('hidden'); return; }
  const p = loadProg();

  const active = [], done = [];
  cats.forEach(cat => {
    let total, learned;
    if (cat.mode === 'conjugation') {
      const verbs = cat.words.filter(w => w.conj);
      total   = verbs.length;
      learned = verbs.filter(w => p[w.id] && p[w.id].status === 'learned').length;
    } else {
      // отложенные слова не учитываются в общем количестве категории
      const visible = cat.words.filter(w => !isDeferred(w.id));
      total   = visible.length;
      learned = visible.filter(w=>p[w.id]&&p[w.id].status==='learned').length;
    }
    (total > 0 && learned === total ? done : active).push({cat, total, learned});
  });

  // Сортировка активных: по проценту выученного (по убыванию);
  // заблокированные карточки уходят в конец списка
  active.sort((a, b) => {
    const aLocked = a.cat.requiresCategory && !isCatComplete(a.cat.level, a.cat.requiresCategory);
    const bLocked = b.cat.requiresCategory && !isCatComplete(b.cat.level, b.cat.requiresCategory);
    if (aLocked !== bLocked) return aLocked ? 1 : -1;
    const aPct = a.total ? a.learned / a.total : 0;
    const bPct = b.total ? b.learned / b.total : 0;
    return bPct - aPct;
  });

  // Виртуальная карточка "Отложенные на потом" — в самом начале
  const deferredCat = getDeferredCategory();
  let deferredHTML = '';
  if (deferredCat) {
    const dl = deferredCat.words.filter(w=>p[w.id]&&p[w.id].status==='learned').length;
    deferredHTML = makeCatCardHTML(deferredCat, deferredCat.words.length, dl, p);
  }

  wrap.innerHTML = deferredHTML + (active.length
    ? active.map(({cat,total,learned})=>makeCatCardHTML(cat,total,learned,p)).join('')
    : (deferredHTML ? '' : `<div class="loading-hint">Alle Kategorien abgeschlossen! 🎉</div>`));
  attachCatEvents(wrap, S.level);

  if (done.length) {
    doneSec.classList.remove('hidden');
    doneWrap.innerHTML = done.map(({cat,total,learned})=>makeCatCardHTML(cat,total,learned,p)).join('');
    attachCatEvents(doneWrap, S.level);
  } else {
    doneSec.classList.add('hidden');
    doneWrap.innerHTML = '';
  }
}

/* ══════════════════════════════════════════════════════════════
   WORTSCHATZ
══════════════════════════════════════════════════════════════ */
const LEVELS = ['A1','A2','B1','B2'];

function renderVocabScreen() {
  show('wortschatz');

  /* ─ фильтр уровней ─ */
  const filterWrap = $('vocab-level-filter');
  const allLabel   = lstr('Alle','Все','Всі');
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
  const title = lstr('⭐ Gelernte Wörter','⭐ Выученные слова','⭐ Вивчені слова');
  const hint  = lstr('Tippe ✕ um ein Wort zurückzusetzen','Нажми ✕ чтобы сбросить слово','Натисни ✕ щоб скинути слово');
  section.innerHTML = `
    <h3 class="vocab-learned-title">${title} <span class="vl-hint">— ${hint}</span></h3>
    <div class="vocab-learned-grid">
      ${learnedWords.map(w=>`
        <div class="vl-word-card" data-wid="${w.id}" data-word="${w.word}">
          <button class="vl-reset" title="${lstr('Zurücksetzen','Сбросить','Скинути')}">✕</button>
          <span class="vl-emoji">${EMOJI[w.word]||w.catEmoji||'📝'}</span>
          <span class="vl-art art-${w.article}">${w.article!=='-'?w.article:''}</span>
          <span class="vl-word">${w.word} <button class="vl-speak" title="🔊">🔊</button></span>
          <span class="vl-translit">[${w.translit || deTranscribe(w.word)}]</span>
          <span class="vl-trans">${(lang==='uk'&&window.TRANSLATIONS_UK&&window.TRANSLATIONS_UK[w.id])||w.translation}</span>
        </div>`).join('')}
    </div>`;
  section.querySelectorAll('.vl-reset').forEach(btn =>
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.closest('.vl-word-card').dataset.wid;
      resetWord(id);
      renderVocabLearned();
      refreshOverallBar();
    }));
  section.querySelectorAll('.vl-speak').forEach(btn =>
    btn.addEventListener('click', e => {
      e.stopPropagation();
      speakWord(btn.closest('.vl-word-card').dataset.word);
    }));
}

/* ══════════════════════════════════════════════════════════════
   КАРТОЧКИ
══════════════════════════════════════════════════════════════ */
function startSession(cat) {
  const p = loadProg();

  // Режим спряжения глаголов — сразу печатный тест по всем формам
  if (cat.mode === 'conjugation') { startConjugation(cat); return; }

  const isDeferredCat = cat.category === 'deferred';
  let active = (cat.words||[]).filter(w => {
    if (p[w.id] && p[w.id].status === 'learned') return false;
    if (!isDeferredCat && isDeferred(w.id)) return false; // отложенные не показываем в обычных категориях
    return true;
  });
  shuffle(active);
  S.phase='study'; S.testCards=[]; S.testIdx=0; S.testCorrect=0; S.testRequeued=new Set();
  S.catMode = cat.mode || '';
  S.catKey  = cat.category;
  S.cards=active; S.cardIdx=0; S.sessionCorrect=0; S.sessionWrong=0; S.sessionLearned=0; S.busy=false; S.requeued=new Set();
  S.currentCatEmoji = cat.emoji || '📁';
  S.catRuleId = cat.ruleId || null;
  const peekBtn = $('rule-peek-btn');
  if (peekBtn) peekBtn.classList.toggle('hidden', !cat.ruleId);
  $('cards-category-title').textContent = cat.name_ru ? `${cat.name} (${cat.name_ru})` : cat.name;
  $('cards-level-badge').textContent    = S.level;
  show('cards');
  $('flashcard').classList.remove('hidden');
  $('typing-test').classList.add('hidden');
  $('conj-area')?.classList.add('hidden');
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
  if (S.cardIdx >= S.cards.length) {
    if (S.phase === 'study') { startTypingTest(); } else { showComplete(); }
    return;
  }
  const card = S.cards[S.cardIdx];
  const wp   = getWP(card.id);
  $('cards-progress-fill').style.width = (S.cards.length>1 ? S.cardIdx/S.cards.length*100 : 0)+'%';
  $('card-counter').textContent         = (S.cardIdx+1)+' / '+S.cards.length;
  $('card-word').textContent            = card.word;
  if ($('card-translit')) $('card-translit').textContent = `[${card.translit || deTranscribe(card.word)}]`;
  S.currentWord = card.word;
  setCardVisual($('card-emoji'), card, S.currentCatEmoji);
  $('card-translation').textContent     = (lang==='uk' && window.TRANSLATIONS_UK && window.TRANSLATIONS_UK[card.id]) || card.translation;
  $('stat-correct').textContent         = '✓ '+S.sessionCorrect;
  $('stat-wrong').textContent           = '✗ '+S.sessionWrong;
  $('card-streak').textContent = wp.status==='learned' ? t('already_lrn') : wp.streak>0 ? t('streak_txt',wp.streak) : '';
  const fb=$('card-feedback'); fb.textContent=''; fb.className='card-feedback';
  const noArt = !card.article || card.article === '-';
  const isPoss = S.catMode === 'possessive';

  $('article-buttons').classList.toggle('hidden', noArt || isPoss);
  $('weiter-btn').classList.toggle('hidden', !noArt || isPoss);
  $('card-hint').classList.toggle('hidden', noArt || isPoss);
  $('possessive-area').classList.toggle('hidden', !isPoss);

  // Кнопка "На потом" / "Вернуть" — только в учебной фазе
  const deferBtn = $('defer-btn');
  if (deferBtn) {
    deferBtn.classList.remove('hidden');
    if (S.catKey === 'deferred') {
      deferBtn.innerHTML = `↩️ ${lstr('Zurück','Вернуть','Повернути')}`;
    } else {
      deferBtn.innerHTML = `⏰ ${lstr('Später','На потом','На потім')}`;
    }
  }

  if (isPoss) {
    // Случайно выбираем лицо из набора режима
    const persons = POSS_MODES[S.catMode] || POSS_MODES.possessive;
    S.possePerson = persons[Math.floor(Math.random()*persons.length)];
    $('poss-person').textContent  = POSS_FORMS[S.possePerson].label;
    $('poss-example').textContent = `___ ${card.word}`;
    // Рендерим кнопки динамически под режим
    $('poss-btns').innerHTML = possButtonsForMode()
      .map(f=>`<button class="poss-btn" data-poss="${f}">${f}</button>`).join('');
    $('poss-btns').querySelectorAll('.poss-btn').forEach(b=>
      b.addEventListener('click', ()=>{ if(!S.busy) handlePossessive(b.dataset.poss); }));
  }

  document.querySelectorAll('.art-btn').forEach(b=>{b.disabled=false;b.classList.remove('show-correct','show-wrong','highlight-correct');});
  $('flashcard').classList.remove('flash-correct','flash-wrong');
  S.busy=false;
}

function handleArticle(article) {
  if (S.busy) return; S.busy=true;
  const card=S.cards[S.cardIdx];
  const noArt = !card.article || card.article === '-';
  const correct = noArt || article===card.article;

  // Для слов без артикля — обновляем прогресс как раньше
  // Для слов с артиклем — только визуал, прогресс только через печатный тест
  const wp = noArt ? updateWP(card.id, correct) : getWP(card.id);

  const fb=$('card-feedback'), se=$('card-streak');
  document.querySelectorAll('.art-btn').forEach(b=>b.disabled=true);
  if (correct) {
    S.sessionCorrect++;
    $('flashcard').classList.add('flash-correct');
    fb.textContent=t('fb_correct'); fb.className='card-feedback ok';
    if (!noArt) document.querySelector(`.art-btn[data-article="${article}"]`).classList.add('show-correct');
    addCoins(1, $('flashcard'));
    if (wp.status==='learned'){
      se.textContent=t('streak_done',LEARNED_THRESHOLD); if(noArt) S.sessionLearned++;
    } else {
      se.textContent = wp.streak>0 ? t('streak_txt',wp.streak) : '';
    }
    setTimeout(()=>{S.cardIdx++;drawCard();},700);
  } else {
    S.sessionWrong++;
    $('flashcard').classList.add('flash-wrong');
    fb.textContent=t('fb_wrong',card.article,card.word); fb.className='card-feedback bad';
    document.querySelector(`.art-btn[data-article="${article}"]`).classList.add('show-wrong');
    document.querySelector(`.art-btn[data-article="${card.article}"]`).classList.add('highlight-correct');
    se.textContent='';
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
  $('defer-btn')?.classList.add('hidden');
  $('flashcard').classList.add('hidden');
  $('typing-test').classList.add('hidden');
  $('conj-area')?.classList.add('hidden');
  $('session-complete').classList.remove('hidden');
  $('cards-progress-fill').style.width='100%';
  $('cs-correct').textContent=S.sessionCorrect + S.testCorrect;
  $('cs-wrong').textContent  =S.sessionWrong;
  $('cs-learned').textContent=S.sessionLearned;
  refreshOverallBar();
}

/* Притяжательные формы по лицам.
   base  = форма для der/das (без -e)
   baseE = форма для die / множественного (с -e) */
const POSS_FORMS = {
  ich:   { base:'mein',  baseE:'meine',  label:'🧑 Ich (я)'        },
  du:    { base:'dein',  baseE:'deine',  label:'🫵 Du (ты)'        },
  leo:   { base:'sein',  baseE:'seine',  label:'👦 Leo (er)'       },
  lea:   { base:'ihr',   baseE:'ihre',   label:'👧 Lea (sie)'      },
  wir:   { base:'unser', baseE:'unsere', label:'👨‍👩‍👧 Wir (мы)'    },
  ihrpl: { base:'euer',  baseE:'eure',   label:'👥 Ihr (вы)'       },
  siepl: { base:'ihr',   baseE:'ihre',   label:'👨‍👩‍👧‍👦 Sie (они)'  },
  Sie:   { base:'Ihr',   baseE:'Ihre',   label:'🎩 Sie (Вы, вежл.)'},
};
/* Какие лица практикуются: все */
const POSS_MODES = {
  possessive: ['ich','du','leo','lea','wir','ihrpl','siepl','Sie'],
};

function correctPossessive(person, article) {
  const femOrPl = article === 'die' || article === '-';
  const f = POSS_FORMS[person] || POSS_FORMS.leo;
  return femOrPl ? f.baseE : f.base;
}

/* набор кнопок для текущего режима — все формы участвующих лиц, без дублей */
function possButtonsForMode() {
  const persons = POSS_MODES[S.catMode] || POSS_MODES.possessive;
  const forms = [];
  persons.forEach(pr => { forms.push(POSS_FORMS[pr].base, POSS_FORMS[pr].baseE); });
  return [...new Set(forms)];
}

function handlePossessive(chosen) {
  if (S.busy) return; S.busy = true;
  const card    = S.cards[S.cardIdx];
  const correct = correctPossessive(S.possePerson, card.article);
  const isOk    = chosen === correct;
  const wp      = updateWP(card.id, isOk);
  const fb      = $('card-feedback'), se = $('card-streak');

  document.querySelectorAll('.poss-btn').forEach(b => b.disabled = true);

  if (isOk) {
    S.sessionCorrect++;
    $('flashcard').classList.add('flash-correct');
    document.querySelector(`.poss-btn[data-poss="${chosen}"]`).classList.add('poss-correct');
    $('poss-example').textContent = `${correct} ${card.word}`;
    fb.textContent = t('fb_correct'); fb.className = 'card-feedback ok';
    addCoins(1, $('flashcard'));
    se.textContent = wp.status==='learned' ? t('streak_done',LEARNED_THRESHOLD) : wp.streak>0 ? t('streak_txt',wp.streak) : '';
    setTimeout(()=>{ S.cardIdx++; drawCard(); }, 700);
  } else {
    S.sessionWrong++;
    $('flashcard').classList.add('flash-wrong');
    document.querySelector(`.poss-btn[data-poss="${chosen}"]`).classList.add('poss-wrong');
    document.querySelector(`.poss-btn[data-poss="${correct}"]`).classList.add('poss-hint');
    $('poss-example').textContent = `${correct} ${card.word}`;
    fb.textContent = `✗ ${correct} ${card.word}`; fb.className = 'card-feedback bad';
    se.textContent = '';
    if (!S.requeued.has(card.id)) { S.requeued.add(card.id); S.cards.push(card); }
    setTimeout(()=>{ S.cardIdx++; drawCard(); }, 1800);
  }
  $('stat-correct').textContent = '✓ '+S.sessionCorrect;
  $('stat-wrong').textContent   = '✗ '+S.sessionWrong;
}

/* Отложить текущее слово на потом (или вернуть из отложенных) — работает в обеих фазах */
function handleDefer() {
  if (S.busy) return;
  const isTest = S.phase === 'test';
  const card = isTest ? S.testCards[S.testIdx] : S.cards[S.cardIdx];
  if (!card) return;

  if (S.catKey === 'deferred') removeDeferred(card.id);  // вернуть
  else                         addDeferred(card.id);     // отложить

  // убираем все вхождения слова из обеих колод
  S.cards     = S.cards.filter(c => c.id !== card.id);
  S.testCards = S.testCards.filter(c => c.id !== card.id);

  if (isTest) {
    if (!S.testCards.length) { showComplete(); return; }
    if (S.testIdx >= S.testCards.length) S.testIdx = 0;
    drawTestCard();
  } else {
    if (!S.cards.length) {
      if (S.catKey === 'deferred') { showComplete(); return; }
      startTypingTest(); return;
    }
    if (S.cardIdx >= S.cards.length) S.cardIdx = 0;
    drawCard();
  }
}

/* ── Спряжение глаголов (одна карточка = глагол, 6 полей) ── */
const CONJ_PRONOUNS = [
  ['ich', 'ich'],
  ['du',  'du'],
  ['er',  'er / sie / es'],
  ['wir', 'wir'],
  ['ihr', 'ihr'],
  ['sie', 'sie / Sie'],
];
const CONJ = { verbs: [], idx: 0 };

function startConjugation(cat) {
  const p = loadProg();
  S.catMode = 'conjugation'; S.catKey = cat.category; S.catRuleId = cat.ruleId || null;
  S.currentCatEmoji = cat.emoji || '🔑';
  S.sessionCorrect = 0; S.sessionWrong = 0; S.sessionLearned = 0; S.testCorrect = 0;
  const peekBtn = $('rule-peek-btn');
  if (peekBtn) peekBtn.classList.toggle('hidden', !cat.ruleId);
  $('cards-category-title').textContent = cat.name_ru ? `${cat.name} (${cat.name_ru})` : cat.name;
  $('cards-level-badge').textContent = S.level;

  CONJ.verbs = shuffle((cat.words||[]).filter(w => w.conj && (!p[w.id] || p[w.id].status !== 'learned')));
  CONJ.idx = 0;

  show('cards');
  $('session-complete').classList.add('hidden');
  $('all-learned').classList.add('hidden');
  $('flashcard').classList.add('hidden');
  $('typing-test').classList.add('hidden');
  $('defer-btn')?.classList.add('hidden');

  if (!CONJ.verbs.length) {
    $('conj-area').classList.add('hidden');
    $('all-learned').classList.remove('hidden');
    return;
  }
  $('conj-area').classList.remove('hidden');
  drawConjCard();
}

function drawConjCard() {
  if (CONJ.idx >= CONJ.verbs.length) { showComplete(); return; }
  const v = CONJ.verbs[CONJ.idx];
  const wp = getWP(v.id);
  const streak = wp.streak || 0;
  $('conj-verb').textContent = v.word;
  $('conj-tr').textContent   = (lang==='uk' && window.TRANSLATIONS_UK && window.TRANSLATIONS_UK[v.id]) || v.translation;
  $('conj-counter').textContent = `${CONJ.idx+1} / ${CONJ.verbs.length}`;
  $('conj-streak').textContent  = '⭐'.repeat(streak) + '☆'.repeat(LEARNED_THRESHOLD - streak) + ` ${streak}/${LEARNED_THRESHOLD}`;
  $('conj-feedback').textContent = '';
  $('conj-feedback').className = 'conj-feedback';
  $('conj-fields').innerHTML = CONJ_PRONOUNS.map(([pr,label]) => `
    <div class="conj-row">
      <span class="conj-pron">${label}</span>
      <input class="conj-input" data-pron="${pr}" type="text"
        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
      <span class="conj-correct" data-for="${pr}"></span>
    </div>`).join('');
  $('cards-progress-fill').style.width = (CONJ.idx / CONJ.verbs.length * 100) + '%';
  // Enter в последнем поле = проверить; в остальных — переход к следующему
  const inputs = [...$('conj-fields').querySelectorAll('.conj-input')];
  inputs.forEach((inp, i) => {
    inp.addEventListener('focus', () => { CONJ.lastInput = inp; });
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (i < inputs.length - 1) inputs[i+1].focus();
        else handleConjSubmit();
      }
    });
  });
  setTimeout(()=>{ try{ inputs[0].focus(); }catch(e){} }, 80);
}

function handleConjSubmit() {
  const v = CONJ.verbs[CONJ.idx];
  if (!v) return;
  const inputs = [...$('conj-fields').querySelectorAll('.conj-input')];
  let allOk = true, anyEmpty = false;
  inputs.forEach(inp => {
    const pron = inp.dataset.pron;
    const expected = normAnswer(v.conj[pron]||'');
    const got      = normAnswer(inp.value);
    const hint     = $('conj-fields').querySelector(`.conj-correct[data-for="${pron}"]`);
    if (!got) anyEmpty = true;
    inp.classList.remove('conj-ok','conj-bad');
    if (hint) hint.textContent = '';
    if (got === expected && got) {
      inp.classList.add('conj-ok');
    } else {
      inp.classList.add('conj-bad');
      if (hint) hint.textContent = `→ ${v.conj[pron]}`;  // показываем правильную форму рядом
      allOk = false;
    }
  });

  if (anyEmpty && allOk) return; // ничего не введено

  const fb = $('conj-feedback');
  if (allOk) {
    const wp = updateWP(v.id, true);
    S.sessionCorrect++;
    if (wp.status === 'learned') {
      S.sessionLearned++;
      addCoins(5, $('conj-area'));
      fb.innerHTML = `✓ Выучено! 🎉 (${LEARNED_THRESHOLD}/${LEARNED_THRESHOLD})`;
    } else {
      addCoins(2, $('conj-area'));
      fb.innerHTML = `✓ Всё верно! (${wp.streak}/${LEARNED_THRESHOLD})`;
    }
    fb.className = 'conj-feedback ok';
    setTimeout(()=>{ CONJ.idx++; drawConjCard(); }, 1100);
  } else {
    updateWP(v.id, false);
    S.sessionWrong++;
    fb.innerHTML = `✗ Есть ошибки — правильные формы показаны`;
    fb.className = 'conj-feedback bad';
    // даём посмотреть и пройти заново этот глагол позже
    if (!CONJ.requeued) CONJ.requeued = new Set();
    if (!CONJ.requeued.has(v.id)) { CONJ.requeued.add(v.id); CONJ.verbs.push(v); }
    setTimeout(()=>{ CONJ.idx++; drawConjCard(); }, 2600);
  }
}

function startTypingTest() {
  S.phase = 'test';
  const p = loadProg();
  // Все слова которые ещё не выучены — с артиклем пишем "der/die/das Wort", без артикля — просто "Wort"
  S.testCards = S.cards.filter(w => !p[w.id] || p[w.id].status !== 'learned');
  shuffle(S.testCards);
  S.testIdx = 0; S.testCorrect = 0; S.testRequeued = new Set();

  $('flashcard').classList.add('hidden');

  if (!S.testCards.length) { showComplete(); return; }

  $('typing-test').classList.remove('hidden');
  drawTestCard();
}

function drawTestCard() {
  if (S.testIdx >= S.testCards.length) { showComplete(); return; }
  const card   = S.testCards[S.testIdx];
  const noArt  = !card.article || card.article === '-';
  const streak = getWP(card.id).streak || 0;
  const dots   = '⭐'.repeat(streak) + '☆'.repeat(LEARNED_THRESHOLD - streak);
  $('tt-emoji').textContent    = EMOJI[card.word] || S.currentCatEmoji;
  $('tt-ru').textContent       = (lang==='uk' && window.TRANSLATIONS_UK && window.TRANSLATIONS_UK[card.id]) || card.translation;
  $('tt-counter').textContent  = `${S.testIdx+1} / ${S.testCards.length}`;
  $('tt-score').textContent    = `${dots} ${streak}/${LEARNED_THRESHOLD}`;
  $('tt-feedback').textContent = '';
  $('tt-feedback').className   = 'tt-feedback';
  $('tt-input').value          = '';
  $('tt-input').placeholder    = noArt ? 'Напиши слово...' : 'der / die / das + Wort';
  $('cards-progress-fill').style.width = (S.testIdx / S.testCards.length * 100) + '%';
  // кнопка "На потом" доступна и в тесте
  const deferBtn = $('defer-btn');
  if (deferBtn) {
    deferBtn.classList.remove('hidden');
    deferBtn.innerHTML = S.catKey === 'deferred'
      ? `↩️ ${lstr('Zurück','Вернуть','Повернути')}`
      : `⏰ ${lstr('Später','На потом','На потім')}`;
  }
  setTimeout(()=>{ try{$('tt-input').focus();}catch(e){} }, 100);
}

function handleTypingSubmit() {
  const card = S.testCards[S.testIdx];
  if (!card) return;
  const raw      = $('tt-input').value.trim();
  const input    = normAnswer(raw);
  const noArt    = !card.article || card.article === '-';
  const expected = normAnswer(noArt ? card.word : `${card.article} ${card.word}`);
  if (!input) return;
  const isOk = input === expected;

  if (isOk) {
    const wp = updateWP(card.id, true);
    S.testCorrect++;
    if (wp.status === 'learned') {
      S.sessionLearned++;
      addCoins(3, $('typing-test'));
      $('tt-feedback').innerHTML = `✓ Выучено! 🎉 (${LEARNED_THRESHOLD}/${LEARNED_THRESHOLD})`;
    } else {
      addCoins(1, $('typing-test'));
      $('tt-feedback').innerHTML = `✓ Richtig! (${wp.streak}/${LEARNED_THRESHOLD})`;
    }
    $('tt-feedback').className  = 'tt-feedback ok';
    $('tt-score').textContent   = `✓ ${S.testCorrect}`;
    setTimeout(()=>{ S.testIdx++; drawTestCard(); }, 800);
  } else {
    updateWP(card.id, false);
    const ans = noArt ? card.word : `${card.article} ${card.word}`;
    $('tt-feedback').innerHTML = `<span class="tt-your-ans">${raw||'—'}</span> → <strong class="tt-right-ans">${ans}</strong>`;
    $('tt-feedback').className = 'tt-feedback bad';
    if (!S.testRequeued.has(card.id)) {
      S.testRequeued.add(card.id);
      S.testCards.push(card);
    }
    setTimeout(()=>{ $('tt-input').value=''; S.testIdx++; drawTestCard(); }, 2000);
  }
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
      <span>${lstr('Gelernt','Изучено','Вивчено')}: <strong>${studiedR} / ${totalR}</strong></span>
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

/* возвращает нужный языковой вариант поля правила
   uk → uk || ru || de ; ru → ru || de ; de → de */
function ruleField(rule, field) {
  if (lang === 'uk') return rule[field+'_uk'] || rule[field+'_ru'] || rule[field+'_de'] || rule[field] || '';
  if (lang === 'ru') return rule[field+'_ru'] || rule[field+'_de'] || rule[field] || '';
  return rule[field+'_de'] || rule[field] || '';
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
    const name  = lname(item);
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
          : `<button class="si-btn" data-sid="${item.id}">${lstr('In den Warenkorb','В корзину','До кошика')}</button>`
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
    list.innerHTML = `<div class="cart-empty">${lstr('Leer','Пусто','Порожньо')}</div>`;
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
    const name = lname(item);
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
          ${lstr('Einlösen ✓','Использовать ✓','Використати ✓')}
        </button>
      </div>` : '';

    return `
      <div class="pur-item-wrap">
        <div class="pur-item ${avail===0?'pur-used':''} ${isOpen?'pur-active':''}" data-pid="${id}">
          <span class="pur-emoji">${item.emoji}</span>
          <div class="pur-info">
            <span class="pur-name">${name}</span>
            <span class="pur-avail">${lstr('Verfügbar','Осталось','Залишилось')}: <strong>${avail}</strong> / ${total}</span>
          </div>
          ${avail > 0
            ? `<span class="pur-arrow ${isOpen?'open':''}">▾</span>`
            : `<span class="pur-done-badge">${lstr('Verw.','Исп.','Вик.')}</span>`}
        </div>
        ${popupHtml}
      </div>`;
  }).join('');

  /* история использования */
  const used = loadUsed().slice().reverse();
  const histHtml = used.length ? used.map(entry => {
    const item = SHOP_ITEMS.find(i=>i.id===entry.id);
    if (!item) return '';
    const name = lname(item);
    const {date, time} = fmtDatetime(entry.datetime);
    return `
      <div class="used-card">
        <span class="uc-emoji">${item.emoji}</span>
        <div class="uc-info">
          <div class="uc-name">${name} <span class="uc-qty">× ${entry.qty}</span></div>
          <div class="uc-datetime">📅 ${date} &nbsp;&nbsp; 🕐 ${time}</div>
        </div>
      </div>`;
  }).join('') : `<div class="uc-empty">${lstr('Noch nichts eingelöst','Ещё ничего не использовано','Ще нічого не використано')}</div>`;

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
   ГЛОБАЛЬНЫЙ ЭКЗАМЕН
══════════════════════════════════════════════════════════════ */
const EX = { cards:[], idx:0, correct:0, total:0 };

function loadExamHistory()    { try { return JSON.parse(localStorage.getItem(P().examKey)||'[]'); } catch { return []; } }
function saveExamHistory(arr) { localStorage.setItem(P().examKey, JSON.stringify(arr)); }

/* все выученные слова (status 'learned') по всем категориям */
function getLearnedWords() {
  const p = loadProg();
  const words = [];
  (window.VOCAB_DATA||[]).forEach(cat => (cat.words||[]).forEach(w => {
    if (p[w.id] && p[w.id].status === 'learned') words.push(w);
  }));
  return words;
}

function renderExamScreen() {
  show('exam');
  $('exam-run').classList.add('hidden');
  $('exam-result').classList.add('hidden');
  $('exam-intro').classList.remove('hidden');

  const learned = getLearnedWords();
  const startBtn = $('exam-start');
  if (!learned.length) {
    startBtn.disabled = true;
    startBtn.textContent = t('exam_none');
  } else {
    startBtn.disabled = false;
    startBtn.textContent = `${t('exam_start')} (${learned.length})`;
  }
  $('exam-chart').innerHTML = buildExamChart(loadExamHistory());
}

function startExam() {
  const learned = getLearnedWords();
  if (!learned.length) return;
  EX.cards = shuffle(learned.slice());
  EX.idx = 0; EX.correct = 0; EX.total = learned.length;
  $('exam-intro').classList.add('hidden');
  $('exam-result').classList.add('hidden');
  $('exam-run').classList.remove('hidden');
  drawExamCard();
}

function drawExamCard() {
  if (EX.idx >= EX.cards.length) { finishExam(); return; }
  const card = EX.cards[EX.idx];
  $('exam-emoji').textContent = EMOJI[card.word] || '📝';
  $('exam-ru').textContent    = (lang==='uk' && window.TRANSLATIONS_UK && window.TRANSLATIONS_UK[card.id]) || card.translation;
  $('exam-counter').textContent = `${EX.idx+1} / ${EX.cards.length}`;
  $('exam-score').textContent   = `✓ ${EX.correct}`;
  $('exam-feedback').textContent = '';
  $('exam-feedback').className   = 'exam-feedback';
  $('exam-input').value = '';
  const noArt = !card.article || card.article === '-';
  $('exam-input').placeholder = noArt ? 'Wort...' : 'der / die / das + Wort';
  $('exam-progress-fill').style.width = (EX.idx / EX.cards.length * 100) + '%';
  setTimeout(()=>{ try{$('exam-input').focus();}catch(e){} }, 80);
}

function handleExamSubmit() {
  const card = EX.cards[EX.idx];
  if (!card) return;
  const raw      = $('exam-input').value.trim();
  const input    = normAnswer(raw);
  const noArt    = !card.article || card.article === '-';
  const expected = normAnswer(noArt ? card.word : `${card.article} ${card.word}`);
  if (!input) return;

  const fb = $('exam-feedback');
  if (input === expected) {
    EX.correct++;
    fb.textContent = '✓'; fb.className = 'exam-feedback ok';
  } else {
    const ans = noArt ? card.word : `${card.article} ${card.word}`;
    fb.innerHTML = `<span class="tt-your-ans">${raw||'—'}</span> → <strong class="tt-right-ans">${ans}</strong>`;
    fb.className = 'exam-feedback bad';
  }
  $('exam-score').textContent = `✓ ${EX.correct}`;
  const delay = input === expected ? 500 : 1400;
  setTimeout(()=>{ EX.idx++; drawExamCard(); }, delay);
}

function finishExam() {
  // сохраняем попытку
  const hist = loadExamHistory();
  hist.push({ t: Date.now(), total: EX.total, correct: EX.correct });
  saveExamHistory(hist);

  $('exam-run').classList.add('hidden');
  $('exam-result').classList.remove('hidden');
  $('exam-result-title').textContent = t('exam_done');
  const pct = EX.total ? Math.round(EX.correct / EX.total * 100) : 0;
  $('exam-result-stats').innerHTML = `
    <div class="exam-rs-big">${EX.correct} / ${EX.total}</div>
    <div class="exam-rs-pct">${pct}%</div>`;
}

/* SVG-график: серая линия — всего выученных слов, зелёная — правильных за попытку */
function buildExamChart(hist) {
  const title = `<h3 class="exam-chart-title">${t('exam_chart_title')}</h3>`;
  if (!hist.length) return title + `<div class="exam-chart-empty">—</div>`;

  const W = 340, H = 180, pad = 30, padB = 40;
  const n = hist.length;
  const maxY = Math.max(...hist.map(a => a.total), 1);
  const xOf = i => pad + (n === 1 ? (W-2*pad)/2 : (W - 2*pad) * i / (n - 1));
  const yOf = v => H - padB - (H - pad - padB) * (v / maxY);
  const fmtD = ts => { const d = new Date(ts); return `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}`; };

  const C_MUTED = '#7a7d9a', C_OK = '#4ecb71', C_BORDER = '#2a2f4a', C_DIM = '#6a6d8a';

  const lineOf = (key, color) => {
    // одна попытка — рисуем горизонтальную линию через весь график
    if (n === 1) {
      const y = yOf(hist[0][key]).toFixed(1);
      return `<line x1="${pad}" y1="${y}" x2="${W-pad}" y2="${y}" stroke="${color}" stroke-width="2.5"/>
              <circle cx="${xOf(0).toFixed(1)}" cy="${y}" r="3.5" fill="${color}"/>`;
    }
    const pts  = hist.map((a,i) => `${xOf(i).toFixed(1)},${yOf(a[key]).toFixed(1)}`).join(' ');
    const dots = hist.map((a,i) => `<circle cx="${xOf(i).toFixed(1)}" cy="${yOf(a[key]).toFixed(1)}" r="3" fill="${color}"/>`).join('');
    return `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round"/>${dots}`;
  };

  // оси
  const axis = `<line x1="${pad}" y1="${H-padB}" x2="${W-pad}" y2="${H-padB}" stroke="${C_BORDER}" stroke-width="1"/>
                <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${H-padB}" stroke="${C_BORDER}" stroke-width="1"/>
                <text x="${pad-6}" y="${yOf(maxY)+4}" fill="${C_DIM}" font-size="9" text-anchor="end">${maxY}</text>
                <text x="${pad-6}" y="${H-padB+3}" fill="${C_DIM}" font-size="9" text-anchor="end">0</text>`;

  // подписи дат под точками (если попыток много — прореживаем)
  const step = n > 6 ? Math.ceil(n / 6) : 1;
  const dateLabels = hist.map((a,i) => {
    if (i % step !== 0 && i !== n-1) return '';
    return `<text x="${xOf(i).toFixed(1)}" y="${H-padB+15}" fill="${C_DIM}" font-size="8.5" text-anchor="middle">${fmtD(a.t)}</text>`;
  }).join('');

  // значение «правильных» над каждой точкой
  const valLabels = hist.map((a,i) => {
    if (n>1 && i % step !== 0 && i !== n-1) return '';
    return `<text x="${xOf(i).toFixed(1)}" y="${(yOf(a.correct)-7).toFixed(1)}" fill="${C_OK}" font-size="9" font-weight="700" text-anchor="middle">${a.correct}</text>`;
  }).join('');

  const legend = `
    <div class="exam-legend">
      <span><i style="background:${C_MUTED}"></i> ${t('exam_total')}</span>
      <span><i style="background:${C_OK}"></i> ${t('exam_correct')}</span>
    </div>`;

  return title + `<svg viewBox="0 0 ${W} ${H}" class="exam-svg">${axis}${lineOf('total',C_MUTED)}${lineOf('correct',C_OK)}${dateLabels}${valLabels}</svg>` + legend;
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
      <p class="egg-sub">${lstr(`${clicks}/3 Klicks`,`${clicks}/3 нажатий`,`${clicks}/3 натискань`)}</p>
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
    if (sEl) sEl.textContent = lstr(`${next}/3 Klicks`,`${next}/3 нажатий`,`${next}/3 натискань`);
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
function shuffle(arr)   { for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr; }

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
      else if(s==='exam')       renderExamScreen();
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

  /* Typing test */
  $('tt-submit').addEventListener('click', handleTypingSubmit);
  $('tt-input').addEventListener('keydown', e=>{ if(e.key==='Enter') handleTypingSubmit(); });

  /* Кнопка "На потом" / "Вернуть" */
  $('defer-btn')?.addEventListener('click', handleDefer);

  /* (Притяжательные кнопки рендерятся динамически в drawCard) */

  /* Umlaut buttons — вставляем символ в позицию курсора нужного поля */
  document.querySelectorAll('.uml-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      let inp;
      if (btn.closest('#exam-umlauts'))      inp = $('exam-input');
      else if (btn.closest('#conj-umlauts')) inp = CONJ.lastInput || $('conj-fields')?.querySelector('.conj-input');
      else                                   inp = $('tt-input');
      if (!inp) return;
      const ch  = btn.dataset.char;
      const s   = inp.selectionStart ?? inp.value.length;
      const e2  = inp.selectionEnd   ?? inp.value.length;
      inp.value = inp.value.slice(0, s) + ch + inp.value.slice(e2);
      inp.setSelectionRange(s + 1, s + 1);
      inp.focus();
    });
  });

  /* Озвучка слова */
  $('speak-btn')?.addEventListener('click', () => { if (S.currentWord) speakWord(S.currentWord); });

  /* Спряжение */
  $('conj-submit')?.addEventListener('click', handleConjSubmit);

  /* Экзамен */
  $('exam-start')?.addEventListener('click', startExam);
  $('exam-again')?.addEventListener('click', renderExamScreen);
  $('exam-submit')?.addEventListener('click', handleExamSubmit);
  $('exam-input')?.addEventListener('keydown', e=>{ if(e.key==='Enter') handleExamSubmit(); });
  $('exam-back')?.addEventListener('click', ()=>{ show('home'); renderHome(); });

  /* Артикли */
  document.querySelectorAll('.art-btn').forEach(btn=>
    btn.addEventListener('click',()=>handleArticle(btn.dataset.article)));

  /* Подсмотреть правило грамматики во время карточек */
  $('rule-peek-btn')?.addEventListener('click', () => {
    if (!S.catRuleId) return;
    const rule = (window.GRAMMAR_DATA||[]).find(r => r.id === S.catRuleId);
    if (rule) openModal(rule);
  });

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
    lang = lang==='de' ? 'ru' : lang==='ru' ? 'uk' : 'de';
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
      <h2 class="reg-title">${lstr('Konto wählen','Выбери аккаунт','Оберіть акаунт')}</h2>
      <div class="reg-accounts">
        ${accounts.map(acc => `
          <div class="reg-acc-card" data-id="${acc.id}">
            <div class="reg-acc-avatar">${acc.name[0]?.toUpperCase() || '?'}</div>
            <div class="reg-acc-name">${acc.name}</div>
          </div>`).join('')}
      </div>
      <div class="reg-divider"><span>${lstr('oder','или','або')}</span></div>
      <button class="reg-new-btn" id="reg-new-btn">＋ ${lstr('Neues Konto erstellen','Создать новый аккаунт','Створити новий акаунт')}</button>`;

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
      <h1 class="reg-title">${hasBack
        ? lstr('Neues Konto','Новый аккаунт','Новий акаунт')
        : lstr('Willkommen!','Добро пожаловать!','Ласкаво просимо!')}</h1>
      <p class="reg-sub">${hasBack
        ? lstr('Gib einen Nicknamen für das neue Konto ein','Введи никнейм для нового аккаунта','Введи нікнейм для нового акаунта')
        : lstr('Gib deinen Nicknamen ein, um Deutsch zu lernen','Введи свой никнейм чтобы начать учить немецкий','Введи свій нікнейм щоб почати вчити німецьку')}</p>
      <input type="text" id="reg-input" class="reg-input" placeholder="${lstr('Dein Nickname...','Твой никнейм...','Твій нікнейм...')}" maxlength="20" autocomplete="off" spellcheck="false">
      ${hasBack ? `<button class="reg-back-btn" id="reg-back-btn">${lstr('← Zurück','← Назад','← Назад')}</button>` : ''}
      <button class="btn-primary reg-btn" id="reg-btn">${lstr('Starten →','Начать →','Почати →')}</button>`;

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
  resetLearnedWords();
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
