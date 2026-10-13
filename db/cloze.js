/* ══════════════════════════════════════════════════════════════
   ТЕКСТЫ С ПРОПУСКАМИ (Lückentexte)
   Текст содержит {{n}} — на месте каждого встаёт поле ввода.
   В поле показывается словарная форма слова (base) как подсказка,
   а ответ (answer) — это форма, которую нужно туда вписать.
   Привязка к правилу — через ruleId (из db/grammar.js).
   Новую запись добавлять в конец со своим уникальным id.
══════════════════════════════════════════════════════════════ */
window.CLOZE_DATA = [
  {
    id: "cl_akk_01", level: "A1", ruleId: "a1_gr_019",
    title_de: "Im Restaurant", title_ru: "В ресторане",
    text: "Ich {{1}} heute Hunger. Ich bestelle {{2}} und {{3}}. Der Kellner sieht {{4}} und lächelt. Ich {{5}} {{6}} sehr.",
    translation_ru: "У меня сегодня голод (= я сегодня голоден). Я заказываю салат и рыбу. Официант видит меня и улыбается. Мне очень нравится вино.",
    blanks: [
      { n: 1, base: "haben",      answer: "habe" },
      { n: 2, base: "ein Salat",  answer: "einen Salat" },
      { n: 3, base: "der Fisch",  answer: "den Fisch" },
      { n: 4, base: "ich",        answer: "mich" },
      { n: 5, base: "mögen",      answer: "mag" },
      { n: 6, base: "der Wein",   answer: "den Wein" },
    ],
  },
  {
    id: "cl_akk_02", level: "A1", ruleId: "a1_gr_019",
    title_de: "Im Supermarkt", title_ru: "В супермаркете",
    text: "Ich {{1}} {{2}} für den Kuchen. Ich {{3}} aber {{4}} zu Hause. Ich {{5}} {{6}} im Supermarkt.",
    translation_ru: "Мне нужно яблоко для торта. Но у меня нет сахара дома. Я куплю сахар в супермаркете.",
    blanks: [
      { n: 1, base: "brauchen",    answer: "brauche" },
      { n: 2, base: "ein Apfel",   answer: "einen Apfel" },
      { n: 3, base: "haben",       answer: "habe" },
      { n: 4, base: "kein Zucker", answer: "keinen Zucker" },
      { n: 5, base: "kaufen",      answer: "kaufe" },
      { n: 6, base: "der Zucker",  answer: "den Zucker" },
    ],
  },
  {
    id: "cl_akk_03", level: "A1", ruleId: "a1_gr_019",
    title_de: "Präpositionen mit Akkusativ", title_ru: "Предлоги с Akkusativ (für, durch, ohne, um, gegen)",
    text: "Dieses Geschenk ist für {{1}}. Ich gehe durch {{2}} nach Hause. Ich trinke Kaffee ohne {{3}}. Wir laufen um {{4}}. Er kämpft gegen {{5}}.",
    translation_ru: "Этот подарок для моего брата. Я иду через парк домой. Я пью кофе без сахара. Мы бежим вокруг озера. Он борется против своего начальника.",
    blanks: [
      { n: 1, base: "mein Bruder", answer: "meinen Bruder" },
      { n: 2, base: "der Park",    answer: "den Park" },
      { n: 3, base: "der Zucker",  answer: "den Zucker" },
      { n: 4, base: "der See",     answer: "den See" },
      { n: 5, base: "sein Chef",   answer: "seinen Chef" },
    ],
  },
  {
    id: "cl_akk_04", level: "A1", ruleId: "a1_gr_019",
    title_de: "Pronomen im Akkusativ", title_ru: "Местоимения в Akkusativ",
    text: "Ich sehe {{1}} jeden Tag in der Schule. Mama ruft {{2}}, aber ich höre nichts. Der Lehrer fragt {{3}} etwas Schwieriges. Eure Eltern besuchen {{4}} am Wochenende.",
    translation_ru: "Я вижу его каждый день в школе. Мама зовёт меня, но я ничего не слышу. Учитель спрашивает нас что-то сложное. Ваши родители навещают вас на выходных.",
    blanks: [
      { n: 1, base: "er",  answer: "ihn" },
      { n: 2, base: "ich", answer: "mich" },
      { n: 3, base: "wir", answer: "uns" },
      { n: 4, base: "ihr", answer: "euch" },
    ],
  },
  {
    id: "cl_akk_05", level: "A1", ruleId: "a1_gr_019",
    title_de: "Gemischte Übung", title_ru: "Смешанное упражнение",
    text: "Ich {{1}} morgen Geburtstag. Ich {{2}} {{3}} auf der Party. Er {{4}} {{5}} für {{6}}.",
    translation_ru: "Завтра у меня день рождения. Я встречу своего друга на вечеринке. У него для меня подарок.",
    blanks: [
      { n: 1, base: "haben",      answer: "habe" },
      { n: 2, base: "treffen",    answer: "treffe" },
      { n: 3, base: "mein Freund",answer: "meinen Freund" },
      { n: 4, base: "haben",      answer: "hat" },
      { n: 5, base: "ein Geschenk", answer: "ein Geschenk" },
      { n: 6, base: "ich",        answer: "mich" },
    ],
  },

  // СЮДА ДОБАВЛЯЙ НОВЫЕ ТЕКСТЫ (для Dativ, Nominativ и т.д. — просто укажи другой ruleId):
];
