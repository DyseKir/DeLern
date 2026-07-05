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
    nav_wortschatz: 'Wortschatz',  nav_grammatik: 'Grammatik',  nav_tables: 'Tabellen', tables_title: 'Tabellen (Spickzettel)', nav_translate: 'Übersetzen', translate_title: 'Sätze übersetzen', translate_desc: 'Zufällige Sätze aus deinen gelernten Wörtern. Übersetze ins Deutsche.', translate_start: 'Übersetzen starten', translate_again: 'Nochmal', translate_skip: 'Antwort zeigen / weiter', translate_finish: 'Beenden', translate_none: 'Lerne erst ein paar Wörter!', nav_profil: 'Profil', nav_shop: 'Shop', nav_pet: 'Haustier', nav_exam: 'Prüfung',
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
    nav_wortschatz: 'Словарь',    nav_grammatik: 'Грамматика',  nav_tables: 'Таблицы', tables_title: 'Таблицы-шпаргалки', nav_translate: 'Перевод', translate_title: 'Перевод предложений', translate_desc: 'Случайные предложения из выученных слов. Переведи с русского на немецкий.', translate_start: 'Начать перевод', translate_again: 'Ещё раз', translate_skip: 'Показать ответ / дальше', translate_finish: 'Завершить', translate_none: 'Сначала выучи несколько слов!', nav_profil: 'Профиль', nav_shop: 'Магазин', nav_pet: 'Питомец', nav_exam: 'Экзамен',
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
    nav_wortschatz: 'Словник',    nav_grammatik: 'Граматика',  nav_tables: 'Таблиці', tables_title: 'Таблиці-шпаргалки', nav_translate: 'Переклад', translate_title: 'Переклад речень', translate_desc: 'Випадкові речення з вивчених слів. Переклади українською→німецькою.', translate_start: 'Почати переклад', translate_again: 'Ще раз', translate_skip: 'Показати відповідь / далі', translate_finish: 'Завершити', translate_none: 'Спершу вивчи кілька слів!', nav_profil: 'Профіль', nav_shop: 'Магазин', nav_pet: 'Вихованець', nav_exam: 'Іспит',
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
  // конкретные, но многозначные/неузнаваемые
  Polizei:'Streifenwagen', Polizeiwache:'Polizeidienststelle',
  Brücke:'Steinbrücke', Ampel:'Lichtsignalanlage', Zebrastreifen:'Fußgängerüberweg',
  Spritze:'Injektion', Verband:'Verband (Erste Hilfe)', Rezept:'Arzneimittelrezept',
};
/* слова, для которых фото не передаёт смысл — оставляем эмодзи */
const NO_PHOTO = new Set([
  'Termin','Sprechstunde','Sprechstundenhilfe','Wartezimmer','Untersuchung',
  'Blutentnahme','Impfung','Impfpass','Röntgenbild','Vorsorge','Überweisung',
  'Krankschreibung','Krankmeldung','Gesundheitskarte','Krankenkasse',
  'Behandlungsschein','Verhütungsmittel',
  'Fahrkartenautomat','Fahrkarte','Anzeigetafel','Zugnummer','Zielstation',
  'Ticketkontrolle','Serviceschalter','Stationen','Uhrzeit','Fahrplan','Abfahrt','Ankunft',
  'Beziehung','Scheidung','Nationalität','Sprache','Hobby','Beruf','Wohnort',
  'Name','Vorname','Nachname','Alter','Adresse','Geburtsort','Geburtsdatum',
  'Geburtsname','Einkommen','Geldgeschenk','Staatsangehörigkeit','Gesundheit',
  'Krankheit','Beschwerden','Schmerzen','Kopfschmerzen','Bauchschmerzen',
  'Halsschmerzen','Zahnschmerzen','Rückenschmerzen','Erkältung','Depression',
  'Richtung','Weg','Wochenende','Jahr','Formular','Telefonnummer','E-Mail',
]);
/* слова, для которых ищем фото в Wikimedia Commons по запросу (точнее по полу/смыслу) */
const COMMONS_FIX = {
  Arzt:'Arzt Mann', Ärztin:'Ärztin Frau',
  Lehrer:'Lehrer Mann Schule', Lehrerin:'Lehrerin Frau',
  Student:'Student Mann', Studentin:'Studentin Frau',
  Koch:'Koch Mann', Köchin:'Köchin Frau',
  Bäcker:'Bäcker Mann', Bäckerin:'Bäckerin Frau',
  Ingenieur:'Ingenieur Mann', Ingenieurin:'Ingenieurin Frau',
  Krankenpfleger:'Krankenpfleger Mann', Krankenschwester:'Krankenschwester Frau',
  Polizist:'Polizist Mann', Polizistin:'Polizistin Frau',
  Verkäufer:'Verkäufer Mann', Verkäuferin:'Verkäuferin Frau',
  Fahrer:'Busfahrer Mann', Fahrerin:'Fahrerin Frau',
  Kellner:'Kellner Mann', Kellnerin:'Kellnerin Frau',
  Mechaniker:'Mechaniker Mann', Mechanikerin:'Mechanikerin Frau',
  Friseur:'Friseur Mann', Friseurin:'Friseurin Frau',
  Sekretär:'Sekretär Mann', Sekretärin:'Sekretärin Frau',
};
/* Openverse — открытый банк изображений (CC) по запросу */
function fetchOpenverse(query) {
  return new Promise(resolve => {
    const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(query)}&page_size=8&mature=false`;
    fetch(url).then(r => r.json()).then(d => {
      const res = (d && d.results) || [];
      for (const r of res) {
        const src = r.thumbnail || r.url;
        if (src && !/\.svg($|\?)/i.test(src)) { resolve(src); return; }
      }
      resolve(null);
    }).catch(() => resolve(null));
  });
}
/* остальные направления → запрос на Openverse */
const OPENVERSE_FIX = {
  links:'turn left road sign', rechts:'turn right road sign', oben:'top of shelf',
  unten:'bottom shelf', innen:'inside room', 'außen':'outside building',
  'gegenüber':'house across street',
};

/* ── SVG-схемы предлогов места (книга + мяч, как в учебнике) ── */
const _BOOK  = (x,y)   => `<g transform="translate(${x},${y})"><rect width="54" height="76" rx="4" fill="#e8941f" stroke="#1a1a1a" stroke-width="5"/><rect width="11" height="76" fill="#cf7d12" stroke="#1a1a1a" stroke-width="5"/></g>`;
const _BOOKT = (x,y,r) => `<g transform="translate(${x},${y}) rotate(${r})"><rect width="54" height="76" rx="4" fill="#e8941f" stroke="#1a1a1a" stroke-width="5"/><rect width="11" height="76" fill="#cf7d12" stroke="#1a1a1a" stroke-width="5"/></g>`;
const _BALL  = (x,y)   => `<circle cx="${x}" cy="${y}" r="21" fill="#5bc5c9" stroke="#1a1a1a" stroke-width="5"/><circle cx="${x+6}" cy="${y-6}" r="3.5" fill="#fff" stroke="#1a1a1a" stroke-width="2.5"/>`;
const _OPENBOOK = `<path d="M30 118 Q110 78 190 118 L190 132 Q110 92 30 132 Z" fill="#fff" stroke="#1a1a1a" stroke-width="5"/><path d="M110 86 L110 126" stroke="#1a1a1a" stroke-width="4"/>`;
const _svg = inner => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160" class="prep-svg">${inner}</svg>`;
const _ARROW = pts => `<polygon points="${pts}" fill="#5bc5c9" stroke="#1a1a1a" stroke-width="5" stroke-linejoin="round"/>`;
const _BOX = (x,y,w,h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="none" stroke="#e8941f" stroke-width="8"/>`;
const PREP_SVG = {
  vor:        _svg(_BOOK(83,38)  + _BALL(96,120)),
  hinter:     _svg(_BALL(128,72) + _BOOK(70,40)),
  neben:      _svg(_BOOK(98,42)  + _BALL(58,96)),
  'über':     _svg(_BOOK(83,72)  + _BALL(110,38)),
  unter:      _svg(_BALL(92,112) + _BOOKT(66,46,-16)),
  auf:        _svg(`<rect x="58" y="92" width="104" height="26" rx="3" fill="#e8941f" stroke="#1a1a1a" stroke-width="5"/><rect x="58" y="92" width="104" height="8" fill="#cf7d12" stroke="#1a1a1a" stroke-width="5"/>` + _BALL(110,70)),
  in:         _svg(_OPENBOOK + _BALL(110,96)),
  zwischen:   _svg(_BOOK(56,42)  + _BALL(112,96) + _BOOK(130,42)),
  an:         _svg(_BOOK(96,42)  + _BALL(80,64)),
  // остальные направления — стрелки/коробки в том же стиле
  'gegenüber':_svg(_BOOK(34,42) + `<line x1="98" y1="80" x2="150" y2="80" stroke="#1a1a1a" stroke-width="4" stroke-dasharray="7 6"/>` + _BALL(176,80)),
  links:      _svg(_ARROW('58,80 110,44 110,66 166,66 166,94 110,94 110,116')),
  rechts:     _svg(_ARROW('162,80 110,44 110,66 54,66 54,94 110,94 110,116')),
  oben:       _svg(_ARROW('110,38 148,90 126,90 126,140 94,140 94,90 72,90')),
  unten:      _svg(_ARROW('110,142 148,90 126,90 126,40 94,40 72,90')),
  innen:      _svg(_BOX(64,44,92,82) + _BALL(110,85)),
  'außen':    _svg(_BOX(52,44,76,82) + _BALL(178,85)),
};
function fetchCommonsImage(query) {
  return new Promise(resolve => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=10&prop=imageinfo&iiprop=url|mime&iiurlwidth=360&origin=*`;
    fetch(url).then(r => r.json()).then(d => {
      const pages = (d && d.query && d.query.pages) || {};
      const arr = Object.values(pages).sort((a,b)=>(a.index||0)-(b.index||0));
      let best = null;
      for (const p of arr) {
        const ii = p.imageinfo && p.imageinfo[0];
        if (ii && /jpe?g|png/i.test(ii.mime||'') && !/logo|icon|map|karte|diagram|coat|wappen|flag|flagge/i.test(p.title||'')) {
          best = ii.thumburl || ii.url; break;
        }
      }
      resolve(best);
    }).catch(() => resolve(null));
  });
}
const imgCache = {};
function fetchWordImage(word) {
  return new Promise(resolve => {
    if (imgCache[word] !== undefined) { resolve(imgCache[word]); return; }
    let ls = null;
    try { ls = localStorage.getItem('dl_img5_' + word); } catch(e) {}
    if (ls !== null) { const v = ls || null; imgCache[word] = v; resolve(v); return; }
    const done = (img) => {
      imgCache[word] = img || null;
      try { localStorage.setItem('dl_img5_' + word, img || ''); } catch(e) {}
      resolve(img || null);
    };
    // профессии — фото из Commons по точному запросу (по полу)
    if (COMMONS_FIX[word]) { fetchCommonsImage(COMMONS_FIX[word]).then(done); return; }
    // предлоги места — фото из Openverse по описательному запросу
    if (OPENVERSE_FIX[word]) { fetchOpenverse(OPENVERSE_FIX[word]).then(done); return; }
    const title = WIKI_TITLE_FIX[word] || word;
    const url = `https://de.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=320&redirects=1&titles=${encodeURIComponent(title)}&origin=*`;
    fetch(url).then(r => r.json()).then(d => {
      let img = null;
      const pages = (d && d.query && d.query.pages) || {};
      for (const k in pages) { if (pages[k].thumbnail && pages[k].thumbnail.source) { img = pages[k].thumbnail.source; break; } }
      if (img) { done(img); return; }
      // нет картинки в Википедии → пробуем Openverse по самому слову
      fetchOpenverse(word).then(done);
    }).catch(() => { fetchOpenverse(word).then(done); });
  });
}
/* эмодзи → код OpenMoji (хекс кодпойнтов, паддинг до 4) */
function emojiToCode(e) {
  if (!e) return '';
  const cps = [];
  for (const ch of e) {
    const cp = ch.codePointAt(0).toString(16).toUpperCase();
    cps.push(cp.length < 4 ? cp.padStart(4,'0') : cp);
  }
  return cps.join('-');
}
function openmojiUrl(code) { return `https://openmoji.org/data/color/svg/${code}.svg`; }

/* ставит схему / OpenMoji-иллюстрацию / системный эмодзи в элемент карточки */
function setCardVisual(el, card, fallbackEmoji) {
  // предлоги места — готовая SVG-схема (книга + мяч)
  if (PREP_SVG[card.word]) { el.innerHTML = PREP_SVG[card.word]; el.classList.add('has-photo'); return; }

  const emoji = EMOJI[card.word] || fallbackEmoji || '📝';
  const code  = emojiToCode(emoji);
  if (!code) { el.textContent = emoji; el.classList.remove('has-photo'); return; }

  el.textContent = '';
  el.classList.add('has-photo');
  const img = document.createElement('img');
  img.className = 'card-illus';
  img.alt = card.word;
  img.onerror = () => {
    // без FE0F не нашли — пробуем альтернативу, иначе системный эмодзи
    if (!img.dataset.retried && /-FE0F/.test(img.src)) {
      img.dataset.retried = '1';
      img.src = openmojiUrl(code.replace(/-FE0F/g,''));
      return;
    }
    el.classList.remove('has-photo'); el.textContent = emoji;
  };
  img.src = openmojiUrl(code);
  el.appendChild(img);
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
  // Berufe (Профессии — новые)
  Gärtner:'👨‍🌾', Gärtnerin:'👩‍🌾', Fabrikarbeiter:'👨‍🏭', Fabrikarbeiterin:'👩‍🏭',
  Bauarbeiter:'👷‍♂️', Bauarbeiterin:'👷‍♀️', Pfleger:'👨‍⚕️', Pflegerin:'👩‍⚕️',
  Bürokaufmann:'👨‍💼', Bürokauffrau:'👩‍💼', Kaufmann:'👨‍💼', Kauffrau:'👩‍💼',
  Hausmann:'🧑‍🍼', Hausfrau:'🧹', Taxifahrer:'🚕', Taxifahrerin:'🚕',
  Techniker:'🔧', Technikerin:'🔧', Mechatroniker:'👨‍🔧', Mechatronikerin:'👩‍🔧',
  Bauer:'🧑‍🌾', 'Bäuerin':'👩‍🌾', Pilot:'👨‍✈️', Pilotin:'👩‍✈️',
  Journalist:'📰', Journalistin:'📰', Zahnarzt:'🦷', 'Zahnärztin':'🦷',
  Musiker:'🎸', Musikerin:'🎸', Fotograf:'📷', Fotografin:'📷',
  Maler:'🎨', Malerin:'🎨',
  // Trennbare Verben (отделяемые)
  aufstehen:'⏰', einkaufen:'🛒', 'ausfüllen':'📝', anrufen:'📞', anmelden:'✍️',
  'aufräumen':'🧹', aufmachen:'🚪', fernsehen:'📺', anfangen:'▶️', aussteigen:'🚏',
  umsteigen:'🔄', umtauschen:'♻️', abholen:'🚸', mitbringen:'🎁', vorbereiten:'📋',
  vorstellen:'🙋', nachfragen:'❓',
  // Arbeit (термины)
  Arbeitgeber:'🧑‍💼', Arbeitnehmer:'🧑‍🏭', Arbeitserlaubnis:'📄', Arbeitsvertrag:'📝',
  Arbeitszeit:'⏱️', Arbeitstag:'📆', Ausbildung:'🎓', Berufsabschluss:'🎓',
  Berufserfahrung:'💼', Berufsanerkennung:'✅', Bewerbung:'📋', Bewerbungsgespräch:'🤝',
  Lebenslauf:'📃', Antrag:'📝', Stellenanzeige:'📰', Anzeige:'📰',
  Zeugnis:'📜', Zertifikat:'📜', Stundenlohn:'💶', Bruttolohn:'💰', Nettolohn:'💵',
  Mindestlohn:'💶', Urlaub:'🏖️', Tätigkeit:'🔨', Aushilfe:'🙋', Anruf:'📞', Rückruf:'📲',
  'pro Stunde':'⏰', 'frei haben':'🏖️', 'Stress haben':'😰',
  // Arbeitsorte
  Werkstatt:'🔧', 'Universität':'🎓', Fabrik:'🏭', 'Gärtnerei':'🌱', Baustelle:'🏗️',
  Pflegeheim:'🏥', Restaurant:'🍽️', Salon:'💇', 'zu Hause':'🏠',
  // Verben — Arbeit
  arbeiten:'💼', backen:'🍞', organisieren:'📋', pflegen:'🧑‍⚕️', putzen:'🧹',
  reparieren:'🔧', schneiden:'✂️', servieren:'🍽️', studieren:'📚', suchen:'🔍',
  telefonieren:'📞', unterrichten:'👨‍🏫', untersuchen:'🩺', pflanzen:'🌱',
  bauen:'🏗️', produzieren:'🏭', kochen:'👨‍🍳', frisieren:'💇', verkaufen:'🛍️',
  // Am Arbeitsplatz (свойства)
  flexibel:'🤸', freundlich:'😊', kreativ:'🎨', langweilig:'😴', interessant:'💡',
  'pünktlich':'⏰', gern:'👍', lieber:'❤️', 'heute Morgen':'🌅', vorgestern:'📅',
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
  // Berufe (мужской род)
  Arzt:'👨‍⚕️', Lehrer:'👨‍🏫', Student:'👨‍🎓', Koch:'👨‍🍳', Bäcker:'👨‍🍳',
  Ingenieur:'👨‍🔧', Krankenpfleger:'👨‍⚕️', Polizist:'👮‍♂️', Verkäufer:'👨‍💼',
  Fahrer:'🧑‍✈️', Kellner:'🤵‍♂️', Mechaniker:'👨‍🔧', Friseur:'💇‍♂️', Sekretär:'👨‍💼',
  Facharzt:'👨‍⚕️', Hausarzt:'👨‍⚕️', Zahnarzt:'🦷', Frauenarzt:'👨‍⚕️', Kinderarzt:'👨‍⚕️',
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
  Ärztin:'👩‍⚕️', Lehrerin:'👩‍🏫', Studentin:'👩‍🎓', Köchin:'👩‍🍳', Bäckerin:'👩‍🍳',
  Ingenieurin:'👩‍🔧', Krankenschwester:'👩‍⚕️', Polizistin:'👮‍♀️', Verkäuferin:'👩‍💼',
  Fahrerin:'👩‍✈️', Kellnerin:'🤵‍♀️', Mechanikerin:'👩‍🔧', Friseurin:'💇‍♀️', Sekretärin:'👩‍💼',
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
  Kaffeeautomat:'☕',
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

function showCoinPop(n, anchor) { /* магазин убран — монеты не показываем */ }
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
  else if (S.screen==='tables')     renderTablesScreen();
  else if (S.screen==='translate')  renderTranslateScreen();
  else if (S.screen==='profil')     renderProfile();
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
  S.phase='study'; S.testQueue=[]; S.testTotal=0; S.testMastered=0; S.testCorrect=0;
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

  // Фаза карточек — только показ/тренировка. Прогресс и стрик
  // ("выучено") копятся ИСКЛЮЧИТЕЛЬНО в печатном тесте (3 правильных подряд).
  const wp = getWP(card.id);

  const fb=$('card-feedback'), se=$('card-streak');
  document.querySelectorAll('.art-btn').forEach(b=>b.disabled=true);
  if (correct) {
    S.sessionCorrect++;
    $('flashcard').classList.add('flash-correct');
    fb.textContent=t('fb_correct'); fb.className='card-feedback ok';
    if (!noArt) document.querySelector(`.art-btn[data-article="${article}"]`).classList.add('show-correct');
    addCoins(1, $('flashcard'));
    if (wp.status==='learned'){
      se.textContent=t('already_lrn');
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
  const card = isTest ? S.testQueue[0] : S.cards[S.cardIdx];
  if (!card) return;

  if (S.catKey === 'deferred') removeDeferred(card.id);  // вернуть
  else                         addDeferred(card.id);     // отложить

  // убираем все вхождения слова из обеих колод
  S.cards     = S.cards.filter(c => c.id !== card.id);
  if (S.testQueue) S.testQueue = S.testQueue.filter(c => c.id !== card.id);

  if (isTest) {
    if (!S.testQueue.length) { showComplete(); return; }
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
  // ещё не выученные слова, без дублей (карточки могли требовать по 2 раза)
  const pending = S.cards.filter(w => !p[w.id] || p[w.id].status !== 'learned');
  const seen = new Set();
  S.testQueue = [];
  shuffle(pending.slice()).forEach(w => { if (!seen.has(w.id)) { seen.add(w.id); S.testQueue.push(w); } });
  S.testTotal    = S.testQueue.length;   // сколько уникальных слов нужно довести до 3/3
  S.testMastered = 0;
  S.testCorrect  = 0;

  $('flashcard').classList.add('hidden');

  if (!S.testQueue.length) { showComplete(); return; }

  $('typing-test').classList.remove('hidden');
  drawTestCard();
}

function drawTestCard() {
  if (!S.testQueue.length) { showComplete(); return; }
  const card   = S.testQueue[0];
  const noArt  = !card.article || card.article === '-';
  const streak = Math.min(getWP(card.id).streak || 0, LEARNED_THRESHOLD);
  const dots   = '⭐'.repeat(streak) + '☆'.repeat(LEARNED_THRESHOLD - streak);
  setCardVisual($('tt-emoji'), card, S.currentCatEmoji);
  $('tt-ru').textContent       = (lang==='uk' && window.TRANSLATIONS_UK && window.TRANSLATIONS_UK[card.id]) || card.translation;
  $('tt-counter').textContent  = `${lstr('Gelernt','Выучено','Вивчено')}: ${S.testMastered} / ${S.testTotal}`;
  $('tt-score').textContent    = `${dots} ${streak}/${LEARNED_THRESHOLD}`;
  $('tt-feedback').textContent = '';
  $('tt-feedback').className   = 'tt-feedback';
  $('tt-input').value          = '';
  $('tt-input').placeholder    = noArt ? 'Напиши слово...' : 'der / die / das + Wort';
  $('cards-progress-fill').style.width = (S.testTotal ? S.testMastered / S.testTotal * 100 : 0) + '%';
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
  const card = S.testQueue[0];
  if (!card) return;
  const raw      = $('tt-input').value.trim();
  const input    = normAnswer(raw);
  const noArt    = !card.article || card.article === '-';
  const expected = normAnswer(noArt ? card.word : `${card.article} ${card.word}`);
  if (!input) return;
  const isOk = input === expected;

  S.testQueue.shift();                 // убираем текущее слово из головы очереди

  if (isOk) {
    const wp = updateWP(card.id, true);
    S.testCorrect++;
    if (wp.status === 'learned') {
      // 3 правильных подряд → слово выучено, больше не спрашиваем
      S.testMastered++;
      S.sessionLearned++;
      addCoins(3, $('typing-test'));
      $('tt-feedback').innerHTML = `✓ ${lstr('Gelernt','Выучено','Вивчено')}! 🎉 (${LEARNED_THRESHOLD}/${LEARNED_THRESHOLD})`;
    } else {
      // ещё не 3 подряд → возвращаем слово в конец очереди
      S.testQueue.push(card);
      addCoins(1, $('typing-test'));
      const left = LEARNED_THRESHOLD - wp.streak;
      $('tt-feedback').innerHTML = `✓ Richtig! (${wp.streak}/${LEARNED_THRESHOLD}) — ${lstr('noch','ещё','ще')} ${left}×`;
    }
    $('tt-feedback').className  = 'tt-feedback ok';
    setTimeout(()=>{ drawTestCard(); }, 800);
  } else {
    // ошибка → стрик обнуляется, слово возвращается в конец очереди
    updateWP(card.id, false);
    S.testQueue.push(card);
    const ans = noArt ? card.word : `${card.article} ${card.word}`;
    $('tt-feedback').innerHTML = `<span class="tt-your-ans">${raw||'—'}</span> → <strong class="tt-right-ans">${ans}</strong> <small>(${lstr('Streak zurück','стрик сброшен','стрик скинуто')} → 0)</small>`;
    $('tt-feedback').className = 'tt-feedback bad';
    setTimeout(()=>{ $('tt-input').value=''; drawTestCard(); }, 2000);
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

/* ══════════════════════════════════════════════
   ТАБЛИЦЫ-ШПАРГАЛКИ (отдельная вкладка)
   ══════════════════════════════════════════════ */
function tablesData() {
  const D='#4a9eff', F='#ff6b8a', N='#4ecb71';           // der / die / das
  const dh = s=>`<span style="color:${D};font-weight:700">${s}</span>`;
  const fh = s=>`<span style="color:${F};font-weight:700">${s}</span>`;
  const nh = s=>`<span style="color:${N};font-weight:700">${s}</span>`;
  const L=(de,ru,uk)=>lstr(de,ru,uk);

  // конструктор таблицы: headers[], rows[[...]]
  const tbl=(headers,rows,firstCol=true)=>{
    const th=headers.map((h,i)=>`<th${i===0&&firstCol?' class="rt-rowh"':''}>${h}</th>`).join('');
    const tr=rows.map(r=>`<tr>${r.map((c,i)=>
      (i===0&&firstCol)?`<td class="rt-rowh">${c}</td>`:`<td>${c}</td>`).join('')}</tr>`).join('');
    return `<div class="rt-scroll"><table class="rt"><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table></div>`;
  };

  // подсветка того, что меняется
  const hl = s=>`<span class="rt-hl">${s}</span>`;
  // немецкое слово + перевод под ним (перевод скрыт в режиме DE)
  const wt = (de,ru,uk)=> lang==='de' ? de : `${de}<small class="rt-tr">${lstr('',ru,uk)}</small>`;
  // местоимения с переводом
  const PR = {
    ich: wt('ich','я','я'),
    du:  wt('du','ты','ти'),
    er:  wt('er/sie/es','он / она / оно','він / вона / воно'),
    wir: wt('wir','мы','ми'),
    ihr: wt('ihr','вы','ви'),
    sie: wt('sie/Sie','они / Вы','вони / Ви'),
  };

  return [
    { id:'modal', icon:'🔑', title:L('Modalverben (Präsens)','Модальные глаголы (спряжение)','Модальні дієслова (відмінювання)'),
      html:tbl(
        ['',
          wt('können','мочь / уметь','могти / уміти'),
          wt('müssen','должен / надо','мусити / треба'),
          wt('dürfen','можно','можна'),
          wt('wollen','хотеть','хотіти'),
          wt('sollen','следует','слід / має'),
          wt('mögen','нравиться','подобатися'),
          wt('möchten','хотел бы','хотів би')],
        [
          [PR.ich,'kann','muss','darf','will','soll','mag','möchte'],
          [PR.du,'kann'+hl('st'),'muss'+hl('t'),'darf'+hl('st'),'will'+hl('st'),'soll'+hl('st'),'mag'+hl('st'),'möchte'+hl('st')],
          [PR.er,'kann','muss','darf','will','soll','mag','möchte'],
          [PR.wir,'könn'+hl('en'),'müss'+hl('en'),'dürf'+hl('en'),'woll'+hl('en'),'soll'+hl('en'),'mög'+hl('en'),'möcht'+hl('en')],
          [PR.ihr,'könn'+hl('t'),'müss'+hl('t'),'dürf'+hl('t'),'woll'+hl('t'),'soll'+hl('t'),'mög'+hl('t'),'möcht'+hl('et')],
          [PR.sie,'könn'+hl('en'),'müss'+hl('en'),'dürf'+hl('en'),'woll'+hl('en'),'soll'+hl('en'),'mög'+hl('en'),'möcht'+hl('en')],
        ]) + `<p class="rt-note">💡 ${L('Modalverb steht auf Position 2, das zweite Verb im Infinitiv ans Satzende: „Ich <b>muss</b> heute <b>arbeiten</b>.“',
          'Модальный глагол — на 2-м месте, второй глагол в инфинитиве уходит в конец: «Ich <b>muss</b> heute <b>arbeiten</b>».',
          'Модальне дієслово — на 2-й позиції, друге дієслово в інфінітиві в кінець: «Ich <b>muss</b> heute <b>arbeiten</b>».')}</p>` },

    { id:'seinhaben', icon:'⭐', title:L('sein / haben / werden','sein / haben / werden (быть / иметь / становиться)','sein / haben / werden'),
      html:tbl(
        ['', 'sein '+L('(быть)','(быть)','(бути)'),'haben '+L('(иметь)','(иметь)','(мати)'),'werden '+L('(станов.)','(станов.)','(става...)')],
        [
          [PR.ich,'bin','habe','werde'],
          [PR.du,'bist','hast','wirst'],
          [PR.er,'ist','hat','wird'],
          [PR.wir,'sind','haben','werden'],
          [PR.ihr,'seid','habt','werdet'],
          [PR.sie,'sind','haben','werden'],
        ]) + `<p class="rt-note">${L('Unregelmäßig – auswendig lernen!','Неправильные — учи наизусть!','Неправильні — вчи напам’ять!')}</p>` },

    { id:'regular', icon:'🔤', title:L('Reguläre Verben – Endungen','Правильные глаголы — окончания','Правильні дієслова — закінчення'),
      html:tbl(
        ['',
          wt('machen','делать','робити'),
          wt('arbeiten *','работать','працювати'),
          wt('heißen','зваться','зватися')],
        [
          [PR.ich,'mach'+hl('e'),'arbeit'+hl('e'),'heiß'+hl('e')],
          [PR.du,'mach'+hl('st'),'arbeit'+hl('est'),'heiß'+hl('t')],
          [PR.er,'mach'+hl('t'),'arbeit'+hl('et'),'heiß'+hl('t')],
          [PR.wir,'mach'+hl('en'),'arbeit'+hl('en'),'heiß'+hl('en')],
          [PR.ihr,'mach'+hl('t'),'arbeit'+hl('et'),'heiß'+hl('t')],
          [PR.sie,'mach'+hl('en'),'arbeit'+hl('en'),'heiß'+hl('en')],
        ]) + `<p class="rt-note">* ${L('Nach -t/-d/-n: extra <b>e</b> (du arbeit<b>e</b>st). Nach -s/-ß/-z: du bekommt nur <b>-t</b> (du heißt).',
          'После -t/-d/-n добавляется <b>e</b> (du arbeit<b>e</b>st). После -s/-ß/-z в du только <b>-t</b> (du heißt).',
          'Після -t/-d/-n додається <b>e</b> (du arbeit<b>e</b>st). Після -s/-ß/-z у du лише <b>-t</b> (du heißt).')}</p>` },

    { id:'vokal', icon:'🔄', title:L('Verben mit Vokalwechsel','Глаголы с изменением корня','Дієслова зі зміною кореня'),
      html:tbl(
        ['', L('Тип','Тип','Тип'),'ich','du','er/sie/es'],
        [
          [wt('sprechen','говорить','говорити'),hl('e→i'),'spreche','spr'+hl('i')+'chst','spr'+hl('i')+'cht'],
          [wt('essen','есть','їсти'),hl('e→i'),'esse',hl('i')+'sst',hl('i')+'sst'],
          [wt('nehmen','брать','брати'),hl('e→i'),'nehme','n'+hl('imm')+'st','n'+hl('imm')+'t'],
          [wt('sehen','видеть','бачити'),hl('e→ie'),'sehe','s'+hl('ie')+'hst','s'+hl('ie')+'ht'],
          [wt('lesen','читать','читати'),hl('e→ie'),'lese','l'+hl('ie')+'st','l'+hl('ie')+'st'],
          [wt('fahren','ехать','їхати'),hl('a→ä'),'fahre','f'+hl('ä')+'hrst','f'+hl('ä')+'hrt'],
          [wt('schlafen','спать','спати'),hl('a→ä'),'schlafe','schl'+hl('ä')+'fst','schl'+hl('ä')+'ft'],
          [wt('laufen','бежать','бігти'),hl('au→äu'),'laufe','l'+hl('äu')+'fst','l'+hl('äu')+'ft'],
        ]) + `<p class="rt-note">⚠️ ${L('Wechsel nur bei <b>du</b> und <b>er/sie/es</b>!','Изменение только у <b>du</b> и <b>er/sie/es</b>!','Зміна лише у <b>du</b> та <b>er/sie/es</b>!')}</p>` },

    { id:'trennbar', icon:'✂️', title:L('Trennbare Verben','Отделяемые глаголы','Відокремлювані дієслова'),
      html:tbl(
        ['', 'ich','du','er/sie/es'],
        [
          [wt('aufstehen','вставать','вставати'),'stehe … '+hl('auf'),'stehst … '+hl('auf'),'steht … '+hl('auf')],
          [wt('einkaufen','покупать','купувати'),'kaufe … '+hl('ein'),'kaufst … '+hl('ein'),'kauft … '+hl('ein')],
          [wt('anrufen','звонить','телефонувати'),'rufe … '+hl('an'),'rufst … '+hl('an'),'ruft … '+hl('an')],
          [wt('fernsehen','смотреть ТВ','дивитися ТБ'),'sehe … '+hl('fern'),'s'+hl('ie')+'hst … '+hl('fern'),'sieht … '+hl('fern')],
          [wt('anfangen','начинать','починати'),'fange … '+hl('an'),'f'+hl('ä')+'ngst … '+hl('an'),'fängt … '+hl('an')],
        ]) + `<p class="rt-note">${L('Vorsilben: ','Приставки: ','Префікси: ')}<b>an-, auf-, aus-, ein-, mit-, vor-, ab-, um-, nach-, fern-</b> → ${L('ans Satzende','в конец предложения','в кінець речення')}.</p>` },

    { id:'artikel', icon:'📦', title:L('Artikel nach Fällen','Артикли по падежам','Артиклі за відмінками'),
      html:`<p class="rt-sub">${L('Bestimmt','Определённые','Означені')} (der/die/das):</p>`+tbl(
        ['', dh('der (м)'),fh('die (ж)'),nh('das (ср)'),'<b>'+L('мн.','мн.','мн.')+'</b>'],
        [
          [L('Nom. кто?','Nom. кто?','Nom. хто?'), dh('der'),fh('die'),nh('das'),'die'],
          [L('Akk. кого?','Akk. кого?','Akk. кого?'), hl(dh('den')),fh('die'),nh('das'),'die'],
          [L('Dat. кому?','Dat. кому?','Dat. кому?'), hl(dh('dem')),hl(fh('der')),hl(nh('dem')),hl('den')+'+n'],
        ])
      +`<p class="rt-sub">${L('Unbestimmt','Неопределённые','Неозначені')} (ein/eine) / kein / mein:</p>`+tbl(
        ['', dh('ein (м)'),fh('eine (ж)'),nh('ein (ср)'),'<b>kein/mein (мн.)</b>'],
        [
          ['Nom.', dh('ein'),fh('eine'),nh('ein'),'meine'],
          ['Akk.', hl(dh('einen')),fh('eine'),nh('ein'),'meine'],
          ['Dat.', hl(dh('einem')),hl(fh('einer')),hl(nh('einem')),hl('meinen')+'+n'],
        ])
      +`<p class="rt-note">💡 ${L('Nur <b>der</b> (муж.) ändert sich stark: der → den → dem.','Сильнее всего меняется <b>der</b> (муж.): der → den → dem.','Найсильніше змінюється <b>der</b> (чол.): der → den → dem.')}</p>` },

    { id:'pronomen', icon:'🙋', title:L('Personalpronomen','Личные местоимения','Особові займенники'),
      html:tbl(
        ['', L('Nom. (кто?)','Nom. (кто?)','Nom. (хто?)'),L('Akk. (кого?)','Akk. (кого?)','Akk. (кого?)'),L('Dat. (кому?)','Dat. (кому?)','Dat. (кому?)')],
        [
          [wt('ich','я','я'),'ich',hl('mich'),hl('mir')],
          [wt('du','ты','ти'),'du',hl('dich'),hl('dir')],
          [wt('er','он','він'),'er',hl('ihn'),hl('ihm')],
          [wt('sie','она','вона'),'sie','sie',hl('ihr')],
          [wt('es','оно','воно'),'es','es',hl('ihm')],
          [wt('wir','мы','ми'),'wir',hl('uns'),hl('uns')],
          [wt('ihr','вы','ви'),'ihr',hl('euch'),hl('euch')],
          [wt('sie/Sie','они / Вы','вони / Ви'),'sie/Sie','sie/Sie',hl('ihnen')+' / '+hl('Ihnen')],
        ]) + `<p class="rt-note">${L('Rot = ändert sich gegenüber Nominativ.','Подсвечено = меняется по сравнению с Nominativ.','Підсвічено = змінюється порівняно з Nominativ.')}</p>` },

    { id:'possessiv', icon:'🔑', title:L('Possessivartikel','Притяжательные (мой, твой…)','Присвійні (мій, твій…)'),
      html:tbl(
        ['', L('слово (перевод)','слово (перевод)','слово (переклад)'),L('+ der/das','+ der/das','+ der/das'),L('+ die / мн.','+ die / мн.','+ die / мн.')],
        [
          [PR.ich,wt('mein','мой','мій'),'mein','mein'+hl('e')],
          [PR.du,wt('dein','твой','твій'),'dein','dein'+hl('e')],
          [PR.er,wt('sein','его','його'),'sein','sein'+hl('e')],
          [wt('sie','её','її'),wt('ihr','её','її'),'ihr','ihr'+hl('e')],
          [PR.wir,wt('unser','наш','наш'),'unser','unser'+hl('e')],
          [PR.ihr,wt('euer','ваш','ваш'),'euer','eur'+hl('e')],
          [wt('sie/Sie','их / Ваш','їх / Ваш'),wt('ihr/Ihr','их / Ваш','їх / Ваш'),'ihr/Ihr','ihr'+hl('e')+'/Ihr'+hl('e')],
        ]) + `<p class="rt-note">${L('Endungen wie bei ein/eine: mein Vater, mein<b>e</b> Mutter, mein<b>e</b> Eltern.',
          'Окончания как у ein/eine: mein Vater, mein<b>e</b> Mutter, mein<b>e</b> Eltern.',
          'Закінчення як у ein/eine: mein Vater, mein<b>e</b> Mutter, mein<b>e</b> Eltern.')}</p>` },

    { id:'praep', icon:'🧭', title:L('Präpositionen nach Fällen','Предлоги по падежам','Прийменники за відмінками'),
      html:tbl(
        [`<b style="color:${D}">${L('Immer DATIV','Всегда DATIV','Завжди DATIV')}</b>`,`<b style="color:${F}">${L('Immer AKKUSATIV','Всегда AKKUSATIV','Завжди AKKUSATIV')}</b>`,`<b>${L('Wechsel (Wo=Dat / Wohin=Akk)','Wechsel (Wo=Dat / Wohin=Akk)','Wechsel (Wo=Dat / Wohin=Akk)')}</b>`],
        [
          ['aus, bei, mit,','durch, für,','an, auf, in,'],
          ['nach, seit,','gegen, ohne,','über, unter, vor,'],
          ['von, zu,','um, bis','hinter, neben,'],
          ['gegenüber','','zwischen'],
        ], false) + `<p class="rt-note">🟡 ${L('Wechsel-Präpositionen: <b>Wohin?</b> (движение) → Akkusativ, <b>Wo?</b> (место) → Dativ.',
          'Wechsel-предлоги: <b>Wohin?</b> (куда, движение) → Akkusativ; <b>Wo?</b> (где, место) → Dativ.',
          'Wechsel-прийменники: <b>Wohin?</b> (куди, рух) → Akkusativ; <b>Wo?</b> (де, місце) → Dativ.')}</p>` },

    { id:'frage', icon:'❓', title:L('Fragewörter','Вопросительные слова','Питальні слова'),
      html:tbl(
        [L('Немецкий','Немецкий','Німецька'),L('Перевод','Перевод','Переклад'),L('Падеж/примечание','Падеж/примечание','Відмінок/примітка')],
        [
          ['Wer?',L('кто?','кто?','хто?'),'Nominativ'],
          ['Wen?',L('кого?','кого?','кого?'),'Akkusativ'],
          ['Wem?',L('кому?','кому?','кому?'),'Dativ'],
          ['Wessen?',L('чей?','чей?','чий?'),'Genitiv'],
          ['Was?',L('что?','что?','що?'),'Nom./Akk.'],
          ['Wo?',L('где?','где?','де?'),'→ Dativ'],
          ['Wohin?',L('куда?','куда?','куди?'),'→ Akkusativ'],
          ['Woher?',L('откуда?','откуда?','звідки?'),'→ Dativ'],
          ['Wann?',L('когда?','когда?','коли?'),'—'],
          ['Wie?',L('как?','как?','як?'),'—'],
          ['Warum?',L('почему?','почему?','чому?'),'—'],
          ['Wie viel?',L('сколько?','сколько?','скільки?'),'—'],
          ['Welcher?',L('какой?','какой?','який?'),'—'],
        ], false) },

    { id:'zahlen', icon:'🔢', title:L('Zahlen','Числа','Числа'),
      html:tbl(
        ['', '', '', ''],
        [
          ['0 null','1 eins','2 zwei','3 drei'],
          ['4 vier','5 fünf','6 sechs','7 sieben'],
          ['8 acht','9 neun','10 zehn','11 elf'],
          ['12 zwölf','13 dreizehn','14 vierzehn','15 fünfzehn'],
          ['16 sechzehn','17 siebzehn','18 achtzehn','19 neunzehn'],
          ['20 zwanzig','30 dreißig','40 vierzig','50 fünfzig'],
          ['60 sechzig','70 siebzig','80 achtzig','90 neunzig'],
          ['100 hundert','1000 tausend','21 einundzwanzig','100000 ...'],
        ], false) + `<p class="rt-note">💡 ${L('21–99: „Einer <b>und</b> Zehner“ zusammen: 21 = ein<b>und</b>zwanzig, 45 = fünf<b>und</b>vierzig.',
          '21–99: сначала единицы, потом «und» и десятки, слитно: 21 = ein<b>und</b>zwanzig, 45 = fünf<b>und</b>vierzig.',
          '21–99: спершу одиниці, потім «und» і десятки, разом: 21 = ein<b>und</b>zwanzig, 45 = fünf<b>und</b>vierzig.')}</p>` },
  ];
}

function renderTablesScreen() {
  show('tables');
  const data = tablesData();
  const toc = $('tables-toc');
  const body = $('tables-content');
  if (toc) toc.innerHTML = data.map(s=>`<button class="tables-toc-btn" data-go="tbl-${s.id}">${s.icon} ${s.title}</button>`).join('');
  if (body) body.innerHTML = data.map(s=>`
    <section class="tbl-card" id="tbl-${s.id}">
      <h3 class="tbl-card-title">${s.icon} ${s.title}</h3>
      ${s.html}
    </section>`).join('');
  if (toc) toc.querySelectorAll('.tables-toc-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      const el=$(b.dataset.go);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    });
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
/* ══════════════════════════════════════════════
   ПЕРЕВОД ПРЕДЛОЖЕНИЙ (RU/UK → DE)
   ══════════════════════════════════════════════ */
const TRP = { count:0, correct:0, current:null, answered:false, moving:false, last:null, pools:null };

// нормализация предложения для сравнения (+убираем пунктуацию)
function normSentence(s) {
  return normAnswer((s||'').replace(/[.,!?;:«»"'()–—]/g,' ')).replace(/\s+/g,' ').trim();
}
function _pickRand(a){ return a[Math.floor(Math.random()*a.length)]; }
// чистим перевод: берём первый вариант до "/", убираем скобки и пометки
function _cleanTr(s){ return (s||'').split('/')[0].replace(/\([^)]*\)/g,'').replace(/[…·]/g,'').trim(); }
function _ukTr(w){ return _cleanTr((window.TRANSLATIONS_UK && window.TRANSLATIONS_UK[w.id]) || w.translation); }

// множество выученных немецких лемм (для банка готовых предложений)
function learnedLemmaSet() {
  const set = new Set();
  getLearnedWords().forEach(w => { if (w.word) set.add(w.word); });
  return set;
}
function getAvailableSentences() {
  const set = learnedLemmaSet();
  return (window.TRANSLATE_SENTENCES || []).filter(s => (s.use||[]).every(l => set.has(l)));
}

// собираем пулы выученных слов по типам для генератора
function buildTranslatePools() {
  const prog = loadProg();
  const learned = id => prog[id] && prog[id].status === 'learned';
  const THING = new Set(['essen','obst_gemuese','lebensmittel','moebel','tiere','transport','kleidung','koerperpflege','koerper','nuetzlich','einkaufen','arzt']);
  const VERB  = new Set(['verben','arbeitsverben','vokalwechsel','trennbar']);
  const nouns=[], verbs=[], profs=[];
  (window.VOCAB_DATA||[]).forEach(cat=>{
    (cat.words||[]).forEach(w=>{
      if (!learned(w.id)) return;
      if (cat.category === 'berufe') { if (w.article==='der'||w.article==='die') profs.push(w); }
      else if (THING.has(cat.category) && (w.article==='der'||w.article==='die'||w.article==='das')) nouns.push(w);
      else if (VERB.has(cat.category) && w.article==='-') verbs.push(w);
    });
  });
  return { nouns, verbs, profs };
}

// генерация одного случайного предложения (падежи корректны и в DE, и в RU)
function genSentence(pools) {
  const kinds=[];
  if (pools.nouns.length) kinds.push('noun');
  if (pools.verbs.length) kinds.push('verb');
  if (pools.profs.length) kinds.push('prof');
  if (!kinds.length) return null;
  const kind = _pickRand(kinds);

  if (kind === 'noun') {
    const w = _pickRand(pools.nouns);
    const ru = _cleanTr(w.translation), uk = _ukTr(w);
    const inN = w.article==='die' ? 'eine' : 'ein';
    const inA = w.article==='der' ? 'einen' : (w.article==='die' ? 'eine' : 'ein');
    return _pickRand([
      { ru:`Это ${ru}.`,        uk:`Це ${uk}.`,       de:[`das ist ${inN} ${w.word}`] },
      { ru:`У меня есть ${ru}.`, uk:`У мене є ${uk}.`, de:[`ich habe ${inA} ${w.word}`] },
    ]);
  }
  if (kind === 'prof') {
    const w = _pickRand(pools.profs);
    const ru = _cleanTr(w.translation), uk = _ukTr(w);
    const f = w.article === 'die';
    return { ru:`${f?'Она':'Он'} ${ru}.`, uk:`${f?'Вона':'Він'} ${uk}.`, de:[`${f?'sie':'er'} ist ${w.word}`] };
  }
  // verb
  const w = _pickRand(pools.verbs);
  const ru = _cleanTr(w.translation), uk = _ukTr(w);
  return _pickRand([
    { ru:`Я хочу ${ru}.`,   uk:`Я хочу ${uk}.`, de:[`ich möchte ${w.word}`, `ich will ${w.word}`] },
    { ru:`Я умею ${ru}.`,   uk:`Я вмію ${uk}.`, de:[`ich kann ${w.word}`] },
    { ru:`Я должен ${ru}.`, uk:`Я мушу ${uk}.`, de:[`ich muss ${w.word}`] },
  ]);
}

// следующий случайный элемент: смесь генератора и банка, без повтора подряд
function nextTranslateItem() {
  const bank = getAvailableSentences();
  const canGen = TRP.pools && (TRP.pools.nouns.length||TRP.pools.verbs.length||TRP.pools.profs.length);
  let item=null, tries=0;
  do {
    const useGen = canGen && (Math.random() < 0.6 || !bank.length);
    item = useGen ? genSentence(TRP.pools) : (bank.length ? _pickRand(bank) : genSentence(TRP.pools));
    tries++;
  } while (item && item.ru === TRP.last && tries < 12);
  if (item) TRP.last = item.ru;
  return item;
}

function translateHasContent() {
  const pools = buildTranslatePools();
  const canGen = pools.nouns.length||pools.verbs.length||pools.profs.length;
  return { canGen, bank: getAvailableSentences().length };
}

function renderTranslateScreen() {
  show('translate');
  $('translate-run').classList.add('hidden');
  $('translate-result').classList.add('hidden');
  $('translate-intro').classList.remove('hidden');

  const { canGen, bank } = translateHasContent();
  const startBtn = $('translate-start');
  const availBox = $('translate-avail');
  if (!canGen && !bank) {
    startBtn.disabled = true;
    startBtn.textContent = t('translate_none');
    if (availBox) availBox.textContent = '';
  } else {
    startBtn.disabled = false;
    startBtn.textContent = t('translate_start');
    if (availBox) availBox.textContent = lstr(
      `Unendlicher Zufall aus deinen gelernten Wörtern ♾️${bank?` + ${bank} fertige Sätze`:''}.`,
      `Бесконечный рандом из выученных слов ♾️${bank?` + ${bank} готовых`:''}.`,
      `Нескінченний рандом з вивчених слів ♾️${bank?` + ${bank} готових`:''}.`);
  }
}

function startTranslate() {
  TRP.pools = buildTranslatePools();
  const bank = getAvailableSentences();
  const canGen = TRP.pools.nouns.length||TRP.pools.verbs.length||TRP.pools.profs.length;
  if (!canGen && !bank.length) return;
  TRP.count = 0; TRP.correct = 0; TRP.last = null; TRP.answered = false; TRP.moving = false;
  $('translate-intro').classList.add('hidden');
  $('translate-result').classList.add('hidden');
  $('translate-run').classList.remove('hidden');
  drawTranslateCard();
}

function drawTranslateCard() {
  const item = nextTranslateItem();
  if (!item) { finishTranslate(); return; }
  TRP.current = item; TRP.answered = false; TRP.moving = false;
  const txt = (lang==='uk' && item.uk) ? item.uk : item.ru;
  $('translate-ru').textContent       = txt;
  $('translate-counter').textContent  = `№ ${TRP.count+1}`;
  $('translate-score').textContent    = `✓ ${TRP.correct}`;
  $('translate-feedback').textContent = '';
  $('translate-feedback').className    = 'exam-feedback';
  $('translate-input').value = '';
  $('translate-progress-fill').style.width = ((TRP.count % 20) / 20 * 100) + '%';
  setTimeout(()=>{ try{$('translate-input').focus();}catch(e){} }, 80);
}

function handleTranslateSubmit() {
  if (TRP.moving) return;
  if (TRP.answered) { TRP.count++; drawTranslateCard(); return; }   // Enter после ответа = дальше
  const item = TRP.current;
  if (!item) return;
  const raw = $('translate-input').value.trim();
  if (!raw) return;
  const input = normSentence(raw);
  const accepted = (item.de||[]).map(normSentence);
  const fb = $('translate-feedback');
  if (accepted.includes(input)) {
    TRP.correct++;
    fb.innerHTML = `✓ ${lstr('Richtig','Верно','Вірно')}!`;
    fb.className = 'exam-feedback ok';
    $('translate-score').textContent = `✓ ${TRP.correct}`;
    TRP.answered = true; TRP.moving = true;
    setTimeout(()=>{ TRP.count++; drawTranslateCard(); }, 900);
  } else {
    fb.innerHTML = `<span class="tt-your-ans">${raw}</span><br>→ <strong class="tt-right-ans">${item.de[0]}</strong>`;
    fb.className = 'exam-feedback bad';
    TRP.answered = true;   // следующий Enter/кнопка — дальше
  }
}

function revealTranslate() {
  if (TRP.moving) return;
  const item = TRP.current;
  if (!item) return;
  if (!TRP.answered) {
    $('translate-feedback').innerHTML = `→ <strong class="tt-right-ans">${item.de[0]}</strong>`;
    $('translate-feedback').className = 'exam-feedback bad';
    TRP.answered = true;
  } else {
    TRP.count++; drawTranslateCard();
  }
}

function finishTranslate() {
  $('translate-run').classList.add('hidden');
  $('translate-result').classList.remove('hidden');
  $('translate-result-title').textContent = lstr('Fertig!','Готово!','Готово!');
  const pct = TRP.count ? Math.round(TRP.correct / TRP.count * 100) : 0;
  $('translate-result-stats').innerHTML = `
    <div class="exam-rs-big">${TRP.correct} / ${TRP.count}</div>
    <div class="exam-rs-pct">${pct}%</div>`;
}

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

const EXAM_MODULE_SIZE = 100;

/* делит выученные слова на модули по 100 (последний может быть меньше) */
function getExamModules() {
  const learned = getLearnedWords();
  const mods = [];
  for (let i=0; i<learned.length; i+=EXAM_MODULE_SIZE) mods.push(learned.slice(i, i+EXAM_MODULE_SIZE));
  return mods;
}

function renderExamScreen() {
  show('exam');
  $('exam-run').classList.add('hidden');
  $('exam-result').classList.add('hidden');
  $('exam-intro').classList.remove('hidden');

  const learned  = getLearnedWords();
  const startBtn = $('exam-start');
  const modsWrap = $('exam-modules');
  if (modsWrap) modsWrap.innerHTML = '';

  if (!learned.length) {
    startBtn.classList.remove('hidden');
    startBtn.disabled = true;
    startBtn.textContent = t('exam_none');
  } else if (learned.length <= EXAM_MODULE_SIZE) {
    // мало слов — одна кнопка, как раньше
    startBtn.classList.remove('hidden');
    startBtn.disabled = false;
    startBtn.textContent = `${t('exam_start')} (${learned.length})`;
  } else {
    // много слов — показываем модули по 100
    startBtn.classList.add('hidden');
    const mods = getExamModules();
    modsWrap.innerHTML =
      `<p class="exam-modules-hint">${lstr(
        'Wähle ein Modul – max. 100 Wörter pro Prüfung:',
        'Выбери модуль — максимум 100 слов за раз:',
        'Обери модуль — максимум 100 слів за раз:')}</p>` +
      mods.map((m,i)=>{
        const from = i*EXAM_MODULE_SIZE+1, to = i*EXAM_MODULE_SIZE+m.length;
        return `<button class="exam-module-btn" data-mod="${i}">
          <span class="exam-mod-num">${lstr('Modul','Модуль','Модуль')} ${i+1}</span>
          <span class="exam-mod-range">${lstr('Wörter','слова','слова')} ${from}–${to} · ${m.length} ${lstr('W.','сл.','сл.')}</span>
        </button>`;
      }).join('') +
      `<button class="exam-module-btn exam-module-all" data-mod="all">
        <span class="exam-mod-num">🎲 ${lstr('Alle gemischt','Все вперемешку','Всі впереміш')}</span>
        <span class="exam-mod-range">${lstr('100 zufällige aus','100 случайных из','100 випадкових з')} ${learned.length}</span>
      </button>`;
    modsWrap.querySelectorAll('.exam-module-btn').forEach(b=>{
      b.addEventListener('click', ()=>{
        if (b.dataset.mod==='all') startExam(shuffle(learned.slice()).slice(0, EXAM_MODULE_SIZE));
        else startExam(getExamModules()[+b.dataset.mod]);
      });
    });
  }
  $('exam-chart').innerHTML = buildExamChart(loadExamHistory());
}

function startExam(pool) {
  const words = (pool && pool.length) ? pool : getLearnedWords();
  if (!words.length) return;
  EX.cards = shuffle(words.slice());
  EX.idx = 0; EX.correct = 0; EX.total = words.length;
  $('exam-intro').classList.add('hidden');
  $('exam-result').classList.add('hidden');
  $('exam-run').classList.remove('hidden');
  drawExamCard();
}

function drawExamCard() {
  if (EX.idx >= EX.cards.length) { finishExam(); return; }
  const card = EX.cards[EX.idx];
  setCardVisual($('exam-emoji'), card, '📝');
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
      else if(s==='tables')     renderTablesScreen();
      else if(s==='translate')  renderTranslateScreen();
      else if(s==='profil')     renderProfile();
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
      if (btn.closest('#exam-umlauts'))          inp = $('exam-input');
      else if (btn.closest('#translate-umlauts')) inp = $('translate-input');
      else if (btn.closest('#conj-umlauts'))     inp = CONJ.lastInput || $('conj-fields')?.querySelector('.conj-input');
      else                                       inp = $('tt-input');
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
  $('exam-start')?.addEventListener('click', ()=>startExam(getLearnedWords()));
  $('exam-again')?.addEventListener('click', renderExamScreen);
  $('exam-submit')?.addEventListener('click', handleExamSubmit);
  $('exam-input')?.addEventListener('keydown', e=>{ if(e.key==='Enter') handleExamSubmit(); });
  $('exam-back')?.addEventListener('click', ()=>{ show('home'); renderHome(); });
  $('tables-back')?.addEventListener('click', ()=>{ show('home'); renderHome(); });

  /* Перевод предложений */
  $('translate-start')?.addEventListener('click', startTranslate);
  $('translate-again')?.addEventListener('click', renderTranslateScreen);
  $('translate-submit')?.addEventListener('click', handleTranslateSubmit);
  $('translate-input')?.addEventListener('keydown', e=>{ if(e.key==='Enter') handleTranslateSubmit(); });
  $('translate-skip')?.addEventListener('click', revealTranslate);
  $('translate-finish')?.addEventListener('click', finishTranslate);
  $('translate-back')?.addEventListener('click', ()=>{ show('home'); renderHome(); });

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
