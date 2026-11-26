/* ══════════════════════════════════════════════════════════════
   ПИСЬМА (Schreiben) — темы и формат из экзаменов BAMF:
     DTZ  — Deutsch-Test für Zuwanderer (итог интеграционного курса, A2–B1):
            письмо/e-mail по ситуации с 4 пунктами, 30 минут, на экзамене 2 задания на выбор.
            Темы — по «Lern- und Prüfungszielen Schreiben» из DTZ-Prüfungshandbuch (Handlungsfelder).
            Оценка DTZ — по уровням A1 / A2 / B1 на одном и том же задании, поэтому у каждой темы DTZ
            три образца: B1 — в задании (model), A1 и A2 — в LETTER_LEVEL_MODELS.
     DTB B1 — Deutsch-Test für den Beruf (итог Berufssprachkurs):
            «Lesen und Schreiben» — ответ клиенту по 2 пунктам из заметки (≥ 2 предложения на пункт);
            «Sprachbausteine und Schreiben» — короткий ответ коллеге в чате.
   fmt   — формат (LETTER_FORMATS), area — тематическая группа (LETTER_AREAS).
   type: 'inf' — на du, 'form' — на Sie. to: 'person' — Frau/Herr …, 'org' — Sehr geehrte Damen und Herren.
   points[].kw — основы слов (нижний регистр), по которым проверка ищет, раскрыт ли пункт.
   mails — входящие письма/сообщения (импульс), chat:true — сообщение в чате.
   Подстановки: {LIEBE} {NAME} — друг/коллега; {ANREDE} {NN} {NNA} — адресат (Frau X / Herrn X);
     {KUNDE} — клиент (имя фамилия); {ICH} {ICHV} — автор; {=жен|муж} — по полу адресата/клиента,
     {~жен|муж} — по полу друга/коллеги.
══════════════════════════════════════════════════════════════ */
window.LETTER_FORMATS = {
  dtz: {
    ex: 'dtz', level: 'B1', levels: ['A1', 'A2', 'B1'], lvl: 'A2–B1', exam: 'DTZ', part: 'Schreiben', full: 'Deutsch-Test für Zuwanderer',
    time: 30, timeNote: '', words: [60, 100], wordsBy: { A1: [25, 50], A2: [40, 70], B1: [60, 100] },
    lvlTips: {
      A1: { de: 'A1: kurze, einfache Sätze — zu jedem Punkt ein Satz. Im DTZ heißt das Ergebnis „unter A2“, aber die Aufgabe ist dieselbe.', ru: 'A1: короткие простые предложения — по одному на каждый пункт. На DTZ такой результат записывается как «ниже A2», но задание то же самое — тренируй его уже сейчас.' },
      A2: { de: 'A2: einfache Sätze mit und, aber, denn, weil — zu jedem Punkt ein bis zwei Sätze.', ru: 'A2: простые предложения со связками und, aber, denn, weil — по одному-два предложения на пункт.' },
      B1: { de: 'B1: zusammenhängender Text mit Nebensätzen (weil, dass, wenn) und Höflichkeitsformeln — alle Punkte genau bearbeiten.', ru: 'B1: связный текст с придаточными (weil, dass, wenn) и вежливыми формулами — каждый пункт раскрыт подробно.' },
    },
    instr_de: 'Schreiben Sie auch eine Anrede und einen Gruß. Schreiben Sie etwas über folgende Punkte:',
    instr_ru: 'Напиши также обращение и прощание. Напиши что-нибудь по каждому из пунктов:',
    about_de: 'DTZ = Abschlussprüfung des Integrationskurses (BAMF), Ergebnis A2 oder B1. Schreiben: 30 Minuten, zwei Aufgaben zur Auswahl (A oder B), ein kurzer Brief / eine E-Mail mit vier Leitpunkten, Anrede und Gruß. Bewertet werden Inhalt (alle 4 Leitpunkte, 0–5 Punkte), Kommunikative Gestaltung, Korrektheit und Wortschatz. Wörterbücher sind nicht erlaubt.',
    about_ru: 'DTZ — итоговый экзамен интеграционного курса BAMF, результат — A2 или B1 (ниже — «unter A2»); оценивают одно и то же задание по шкале A1 / A2 / B1. Письмо: 30 минут, на выбор два задания (A или B) — короткое письмо или e-mail по ситуации с четырьмя пунктами (Leitpunkte), обязательно обращение и прощание. Оценивают содержание (раскрыты ли все 4 пункта, 0–5 баллов), коммуникативное оформление, правильность и словарный запас. Словарём пользоваться нельзя. Образец уровня B1 в официальном пособии — около 80 слов.',
  },
  dtb1mail: {
    ex: 'dtb1', level: 'B1', levels: ['B1'], lvl: 'B1', exam: 'DTB B1', part: 'Lesen und Schreiben', full: 'Deutsch-Test für den Beruf B1',
    time: 20, timeNote: 'вместе с чтением', timeNote_de: 'inkl. Lesen', words: [50, 100],
    instr_de: 'Schreiben Sie eine E-Mail an {=die Kundin|den Kunden}. Schreiben Sie etwas zu den beiden Punkten auf dem Notizzettel. Schreiben Sie zu jedem Punkt mindestens zwei Sätze. Vergessen Sie nicht die Anrede und den Gruß.',
    instr_ru: 'Напиши e-mail клиенту. Раскрой оба пункта из заметки — минимум два предложения на каждый. Не забудь обращение и прощание.',
    pts_de: 'Notizen für die Antwort an {NNA}:',
    about_de: 'DTB = Abschlussprüfung der Berufssprachkurse (BAMF). Teil „Lesen und Schreiben“ (20 Minuten): Sie lesen eine E-Mail von einem Kunden, lösen zwei Aufgaben dazu und antworten dann auf die E-Mail – zu zwei Punkten auf einem Notizzettel, mindestens zwei Sätze pro Punkt, mit Anrede und Gruß.',
    about_ru: 'DTB (Deutsch-Test für den Beruf) — итоговый экзамен профессиональных языковых курсов BAMF. Часть «Lesen und Schreiben» (20 минут): читаешь письмо клиента, отвечаешь на два вопроса к нему и пишешь ответ клиенту по двум пунктам из заметки — минимум два предложения на пункт, с обращением и прощанием.',
  },
  dtb1sms: {
    ex: 'dtb1', level: 'B1', levels: ['B1'], lvl: 'B1', exam: 'DTB B1', part: 'Sprachbausteine und Schreiben', full: 'Deutsch-Test für den Beruf B1',
    time: 10, timeNote: 'вместе с заданием на пропуски', timeNote_de: 'inkl. Sprachbausteine', words: [20, 45],
    instr_de: 'Antworten Sie {~Ihrer Kollegin|Ihrem Kollegen}. Schreiben Sie etwas zu folgenden Punkten:',
    instr_ru: 'Ответь коллеге. Напиши что-нибудь по каждому пункту:',
    about_de: 'Im Teil „Sprachbausteine und Schreiben“ (10 Minuten) antworten Sie auf eine kurze Chat-Nachricht von einem befreundeten Kollegen – kurz, auf du, passend zur Situation.',
    about_ru: 'В части «Sprachbausteine und Schreiben» (10 минут вместе с заданием на пропуски) нужно ответить на короткое сообщение коллеги в чате — коротко, на du, по ситуации.',
  },
};

window.LETTER_AREAS = [
  { id: 'kurs', emoji: '📚', de: 'Deutschkurs', ru: 'Курс немецкого', uk: 'Курс німецької' },
  { id: 'kinder', emoji: '🧒', de: 'Kinder: Kita und Schule', ru: 'Дети: детсад и школа', uk: 'Діти: садок і школа' },
  { id: 'wohnen', emoji: '🏠', de: 'Wohnen', ru: 'Жильё', uk: 'Житло' },
  { id: 'einkauf', emoji: '🛒', de: 'Einkaufen und Verträge', ru: 'Покупки и договоры', uk: 'Покупки й договори' },
  { id: 'amt', emoji: '🏛️', de: 'Ämter und Bank', ru: 'Ведомства и банк', uk: 'Установи й банк' },
  { id: 'arbeit', emoji: '💼', de: 'Arbeit und Bewerbung', ru: 'Работа и отклик на вакансию', uk: 'Робота й відгук на вакансію' },
  { id: 'gesund', emoji: '🩺', de: 'Gesundheit', ru: 'Здоровье', uk: 'Здоров’я' },
  { id: 'privat', emoji: '👋', de: 'Freunde und Bekannte', ru: 'Друзья и знакомые', uk: 'Друзі й знайомі' },
  { id: 'kunden', emoji: '🤝', de: 'Beruf: Kunden antworten', ru: 'Работа: ответ клиенту', uk: 'Робота: відповідь клієнту' },
  { id: 'kollegen', emoji: '👥', de: 'Beruf: Kollegen', ru: 'Работа: коллеги', uk: 'Робота: колеги' },
];

window.LETTER_TASKS = [
/* ═══════════════════════ DTZ (A2–B1) ═══════════════════════ */

/* ── Unterricht ── */
{ id: 'dtz_kurs_fehlen', fmt: 'dtz', area: 'kurs', type: 'form', to: 'person', emoji: '📚',
  de: 'Entschuldigung: nicht im Kurs', ru: 'Извинение: не смогу прийти на курс',
  sit_de: 'Sie besuchen einen Deutschkurs. Sie können diese Woche nicht mehr in den Kurs kommen. Deshalb schreiben Sie an {=Ihre Kursleiterin|Ihren Kursleiter}, {NNA}.',
  sit_ru: 'Ты ходишь на курс немецкого и на этой неделе больше не сможешь приходить. Напиши преподавателю ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['nicht kommen', 'nicht in den kurs', 'nicht mehr in den kurs', 'mitteilen', 'informieren'] },
    { de: 'Entschuldigung', ru: 'Извинение', kw: ['entschuldig', 'tut mir leid', 'sehr leid'] },
    { de: 'Hausaufgaben', ru: 'Домашнее задание', kw: ['hausaufgabe', 'aufgaben', 'arbeitsblätter', 'material'] },
    { de: 'Rückkehr in den Kurs', ru: 'Когда вернёшься на курс', kw: ['wieder', 'nächste woche', 'nächsten', 'zurück'] },
  ],
  model: `{ANREDE},

ich möchte Ihnen mitteilen, dass ich diese Woche leider nicht mehr in den Kurs kommen kann. Mein Sohn ist krank und hat hohes Fieber, deshalb muss ich zu Hause bleiben und auf ihn aufpassen. Bitte entschuldigen Sie mein Fehlen. Könnten Sie mir die Hausaufgaben per E-Mail schicken? Ich möchte zu Hause weiterlernen, damit ich nicht zu viel verpasse. Nächsten Montag komme ich wieder in den Kurs.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich möchte Ihnen mitteilen, dass …', 'Хочу сообщить вам, что …'], ['Bitte entschuldigen Sie mein Fehlen.', 'Пожалуйста, извините за моё отсутствие.'], ['Könnten Sie mir die Hausaufgaben per E-Mail schicken?', 'Не могли бы вы прислать мне домашнее задание по e-mail?'], ['Nächsten Montag komme ich wieder in den Kurs.', 'В следующий понедельник я снова приду на курс.']] },

{ id: 'dtz_kurswechsel', fmt: 'dtz', area: 'kurs', type: 'form', to: 'org', emoji: '🔄',
  de: 'Kurswechsel wegen neuer Arbeitszeiten', ru: 'Перейти в другую группу из-за нового графика',
  sit_de: 'Sie besuchen einen Integrationskurs am Vormittag. Ab nächstem Monat haben Sie neue Arbeitszeiten. Schreiben Sie an die Sprachschule „Lernpunkt“.',
  sit_ru: 'Ты ходишь на интеграционный курс по утрам. Со следующего месяца у тебя новый график работы. Напиши в языковую школу «Lernpunkt».',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['wechseln', 'wechsel', 'anderen kurs'] },
    { de: 'Ihre neuen Arbeitszeiten', ru: 'Твой новый график', kw: ['arbeitszeit', 'arbeite', 'schicht', 'stelle'] },
    { de: 'Welcher Kurs passt?', ru: 'Какой курс подходит?', kw: ['abendkurs', 'nachmittag', 'abends', 'am abend', 'samstag'] },
    { de: 'Bitte um Antwort', ru: 'Просьба ответить', kw: ['antwort', 'melden', 'rückmeldung', 'bescheid'] },
  ],
  model: `Sehr geehrte Damen und Herren,

ich besuche zurzeit den Integrationskurs B1 am Vormittag bei Frau Wolf und möchte gern in einen anderen Kurs wechseln. Ich habe eine neue Stelle in einem Supermarkt gefunden. Ab dem 1. März arbeite ich von Montag bis Freitag von 7 bis 15 Uhr. Deshalb kann ich am Vormittag leider nicht mehr kommen. Gibt es bei Ihnen einen Abendkurs auf dem gleichen Niveau? Ich würde mich freuen, wenn Sie mir bald eine Antwort geben könnten.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich möchte gern in einen anderen Kurs wechseln.', 'Я хотел(а) бы перейти в другую группу.'], ['Ab dem 1. März arbeite ich von … bis … Uhr.', 'С 1 марта я работаю с … до … часов.'], ['Gibt es bei Ihnen einen Abendkurs?', 'Есть ли у вас вечерний курс?'], ['Ich würde mich freuen, wenn Sie mir bald antworten könnten.', 'Буду рад(а), если вы скоро ответите.']] },

{ id: 'dtz_sprachschule', fmt: 'dtz', area: 'kurs', type: 'form', to: 'org', emoji: '🎓',
  de: 'Anfrage: Computerkurs an der VHS', ru: 'Запрос: компьютерный курс в VHS',
  sit_de: 'Sie möchten an der Volkshochschule einen Computerkurs machen. Schreiben Sie an die Volkshochschule.',
  sit_ru: 'Ты хочешь пройти компьютерный курс в народном университете (VHS). Напиши туда.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['interess', 'möchte', 'kurs', 'teilnehmen'] },
    { de: 'Ihre Vorkenntnisse', ru: 'Что ты уже умеешь', kw: ['kenntnisse', 'kann', 'anfänger', 'schon', 'noch nie', 'ein bisschen'] },
    { de: 'Kurszeiten', ru: 'Время занятий', kw: ['abends', 'am abend', 'vormittags', 'uhr', 'zeiten', 'wochenende', 'samstag'] },
    { de: 'Kosten und Anmeldung', ru: 'Стоимость и запись', kw: ['kostet', 'kosten', 'preis', 'gebühr', 'anmelden', 'anmeldung'] },
  ],
  model: `Sehr geehrte Damen und Herren,

ich interessiere mich für einen Computerkurs an Ihrer Volkshochschule. Ich möchte lernen, wie man E-Mails schreibt und mit Word und Excel arbeitet, weil ich das für meine Arbeit brauche. Ich bin Anfänger und habe bisher nur ein bisschen mit dem Handy gearbeitet. Gibt es auch Kurse am Abend oder am Samstag? Unter der Woche arbeite ich bis 17 Uhr. Außerdem möchte ich wissen, wie viel der Kurs kostet und wie ich mich anmelden kann.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich interessiere mich für …', 'Меня интересует …'], ['Ich bin Anfänger(in).', 'Я начинающий(ая).'], ['Gibt es auch Kurse am Abend?', 'Есть ли вечерние курсы?'], ['Außerdem möchte ich wissen, …', 'Кроме того, я хотел(а) бы узнать …'], ['Wie kann ich mich anmelden?', 'Как мне записаться?']] },

/* ── Betreuung und Ausbildung der Kinder ── */
{ id: 'dtz_schule_kind', fmt: 'dtz', area: 'kinder', type: 'form', to: 'person', emoji: '🤒',
  de: 'Kind krank — Brief an die Schule', ru: 'Ребёнок болеет — письмо учителю',
  sit_de: 'Ihr Kind ist krank und kann eine Woche nicht in die Schule gehen. Schreiben Sie an {=die Klassenlehrerin|den Klassenlehrer}, {NNA}.',
  sit_ru: 'Твой ребёнок болеет и неделю не пойдёт в школу. Напиши классному руководителю ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['krank', 'nicht in die schule', 'nicht zur schule', 'fehlen', 'entschuldig'] },
    { de: 'Wie lange fehlt Ihr Kind?', ru: 'Сколько ребёнок пропустит?', kw: ['woche', 'tage', 'bis', 'freitag', 'montag'] },
    { de: 'Hausaufgaben / Unterrichtsmaterial', ru: 'Домашние задания / материалы', kw: ['hausaufgabe', 'material', 'aufgaben', 'arbeitsblätter', 'schicken'] },
    { de: 'Ärztliche Bescheinigung', ru: 'Справка от врача', kw: ['attest', 'bescheinigung', 'krankmeldung', 'arzt'] },
  ],
  model: `{ANREDE},

leider muss ich Ihnen mitteilen, dass mein Sohn Leon aus der Klasse 3b krank ist. Er hat eine Grippe und hohes Fieber. Der Arzt sagt, dass er bis nächsten Freitag zu Hause bleiben muss. Leon möchte aber nicht zu viel verpassen. Könnten Sie mir bitte die Hausaufgaben und die Arbeitsblätter per E-Mail schicken oder seiner Freundin Mia mitgeben? Die ärztliche Bescheinigung bringe ich Ihnen am Montag vorbei.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Leider muss ich Ihnen mitteilen, dass …', 'К сожалению, должен(на) сообщить вам, что …'], ['Er muss bis Freitag zu Hause bleiben.', 'Он должен оставаться дома до пятницы.'], ['Könnten Sie mir bitte die Hausaufgaben schicken?', 'Не могли бы вы прислать домашние задания?'], ['Die ärztliche Bescheinigung bringe ich am Montag.', 'Справку от врача принесу в понедельник.']] },

{ id: 'dtz_schulbefreiung', fmt: 'dtz', area: 'kinder', type: 'form', to: 'person', emoji: '📝',
  de: 'Antrag: Schulbefreiung', ru: 'Просьба освободить ребёнка от школы',
  sit_de: 'Ihre Mutter im Heimatland ist schwer krank. Sie möchten mit der ganzen Familie für eine Woche zu ihr fliegen. Ihre Tochter muss dafür in der Schule fehlen. Schreiben Sie an {=die Schulleiterin|den Schulleiter}, {NNA}.',
  sit_ru: 'Твоя мама на родине тяжело заболела. Ты хочешь на неделю полететь к ней всей семьёй — дочери придётся пропустить школу. Напиши директору школы ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['krank', 'mutter', 'heimatland', 'besuchen', 'fliegen'] },
    { de: 'Zeitraum', ru: 'На какой срок', kw: ['vom', 'bis', 'woche', 'tage'] },
    { de: 'Bitte um Befreiung', ru: 'Просьба освободить от занятий', kw: ['befrei', 'erlaub', 'genehmig', 'freistell', 'frei geben'] },
    { de: 'Unterrichtsstoff nachholen', ru: 'Как наверстать материал', kw: ['nachholen', 'nacharbeiten', 'aufgaben', 'lernen', 'verpass', 'stoff'] },
  ],
  model: `{ANREDE},

meine Tochter Amira besucht die Klasse 4a. Leider ist meine Mutter in meinem Heimatland schwer krank, und wir möchten sie so schnell wie möglich besuchen. Deshalb bitte ich Sie, Amira vom 10. bis zum 17. März vom Unterricht zu befreien. Ich weiß, dass das mitten in der Schulzeit ist. Wir werden aber dafür sorgen, dass Amira den Unterrichtsstoff nachholt. Könnten Sie uns bitte die Aufgaben für diese Woche mitgeben?

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Deshalb bitte ich Sie, meine Tochter vom … bis … vom Unterricht zu befreien.', 'Поэтому прошу вас освободить мою дочь от занятий с … по …'], ['Wir werden dafür sorgen, dass sie den Stoff nachholt.', 'Мы позаботимся, чтобы она наверстала материал.'], ['Könnten Sie uns die Aufgaben mitgeben?', 'Не могли бы вы дать нам задания с собой?']] },

{ id: 'dtz_hausaufgaben', fmt: 'dtz', area: 'kinder', type: 'form', to: 'person', emoji: '✏️',
  de: 'Entschuldigung: keine Hausaufgaben', ru: 'Извинение: ребёнок не сделал домашнее задание',
  sit_de: 'Ihr Sohn konnte gestern seine Hausaufgaben nicht machen. Schreiben Sie an {=seine Lehrerin|seinen Lehrer}, {NNA}.',
  sit_ru: 'Твой сын вчера не смог сделать домашнее задание. Напиши его учителю ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['hausaufgaben', 'nicht machen', 'nicht gemacht'] },
    { de: 'Warum?', ru: 'Почему?', kw: ['weil', 'denn', 'krank', 'arzt', 'fieber', 'termin'] },
    { de: 'Entschuldigung', ru: 'Извинение', kw: ['entschuldig', 'tut mir leid', 'sehr leid'] },
    { de: 'Wann bringt er die Hausaufgaben?', ru: 'Когда он принесёт задание?', kw: ['morgen', 'nachholen', 'bringt', 'mitbringen', 'abgeben'] },
  ],
  model: `{ANREDE},

leider konnte mein Sohn Jonas gestern seine Hausaufgaben in Mathematik nicht machen. Wir waren am Nachmittag lange beim Arzt, weil seine kleine Schwester hohes Fieber hatte. Erst um 20 Uhr waren wir wieder zu Hause, und Jonas war sehr müde. Bitte entschuldigen Sie das. Er macht die Aufgaben heute Nachmittag und bringt sie morgen mit in die Schule. Wenn Sie Fragen haben, können Sie mich gern anrufen.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Leider konnte mein Sohn seine Hausaufgaben nicht machen.', 'К сожалению, мой сын не смог сделать домашнее задание.'], ['Bitte entschuldigen Sie das.', 'Пожалуйста, извините.'], ['Er bringt die Aufgaben morgen mit.', 'Он принесёт задание завтра.'], ['Wenn Sie Fragen haben, können Sie mich gern anrufen.', 'Если у вас есть вопросы, звоните мне.']] },

{ id: 'dtz_kita', fmt: 'dtz', area: 'kinder', type: 'form', to: 'org', emoji: '🧸',
  de: 'Anfrage: Kita-Platz', ru: 'Запрос: место в детском саду',
  sit_de: 'Sie suchen einen Platz im Kindergarten für Ihr Kind. Schreiben Sie an die Kita „Sonnenschein“.',
  sit_ru: 'Ты ищешь место в детском саду для ребёнка. Напиши в детский сад «Sonnenschein».',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['platz', 'kindergarten', 'kita', 'suchen'] },
    { de: 'Ihr Kind (Alter, Sprache)', ru: 'Твой ребёнок (возраст, язык)', kw: ['jahre alt', 'jahr alt', 'spricht', 'sprache'] },
    { de: 'Ab wann und wie lange am Tag?', ru: 'С какого числа и сколько часов в день?', kw: ['ab dem', 'ab ', 'uhr', 'betreuung', 'ganztags', 'stunden'] },
    { de: 'Kosten und Anmeldung', ru: 'Стоимость и запись', kw: ['kostet', 'kosten', 'anmeld', 'unterlagen', 'gebühr'] },
  ],
  model: `Sehr geehrte Damen und Herren,

wir sind im Januar nach Leipzig gezogen und suchen einen Kindergartenplatz für unsere Tochter Mila. Sie ist drei Jahre alt und spricht leider noch nicht viel Deutsch. Wir würden sie gern ab dem 1. September bei Ihnen anmelden. Weil ich ab Herbst eine Ausbildung mache, brauchen wir einen Platz von 8 bis 15 Uhr. Haben Sie noch freie Plätze? Außerdem möchte ich wissen, wie viel ein Platz kostet und welche Unterlagen wir für die Anmeldung brauchen.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Wir suchen einen Kindergartenplatz für unsere Tochter.', 'Мы ищем место в детском саду для дочери.'], ['Sie ist drei Jahre alt.', 'Ей три года.'], ['Wir brauchen einen Platz von 8 bis 15 Uhr.', 'Нам нужно место с 8 до 15 часов.'], ['Welche Unterlagen brauchen wir für die Anmeldung?', 'Какие документы нужны для записи?']] },

{ id: 'dtz_elternabend', fmt: 'dtz', area: 'kinder', type: 'form', to: 'person', emoji: '👪',
  de: 'Elternabend absagen', ru: 'Не смогу прийти на родительское собрание',
  sit_de: 'Die Schule Ihres Sohnes lädt zum Elternabend ein. Sie können an dem Abend nicht kommen. Schreiben Sie an {=die Klassenlehrerin|den Klassenlehrer}, {NNA}.',
  sit_ru: 'Школа сына приглашает на родительское собрание, но ты в этот вечер не можешь. Напиши классному руководителю ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['elternabend', 'einladung'] },
    { de: 'Warum können Sie nicht kommen?', ru: 'Почему не можешь прийти?', kw: ['weil', 'denn', 'arbeit', 'schicht', 'muss'] },
    { de: 'Bitte um Informationen', ru: 'Просьба прислать информацию', kw: ['information', 'informieren', 'unterlagen', 'schicken', 'protokoll'] },
    { de: 'Termin für ein Gespräch', ru: 'Встреча для разговора', kw: ['termin', 'gespräch', 'sprechstunde', 'treffen'] },
  ],
  model: `{ANREDE},

vielen Dank für die Einladung zum Elternabend am Donnerstag. Leider kann ich an diesem Abend nicht kommen, weil ich bis 22 Uhr in der Spätschicht arbeiten muss. Das tut mir sehr leid, denn ich interessiere mich für die Klassenfahrt und die neuen Bücher. Könnten Sie mir bitte die wichtigsten Informationen per E-Mail schicken? Ich würde auch gern persönlich mit Ihnen über Leons Noten sprechen. Haben Sie nächste Woche einen Termin für ein kurzes Gespräch?

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Vielen Dank für die Einladung zum Elternabend.', 'Спасибо за приглашение на родительское собрание.'], ['Leider kann ich an diesem Abend nicht kommen, weil …', 'К сожалению, я не смогу прийти в этот вечер, потому что …'], ['Könnten Sie mir die wichtigsten Informationen schicken?', 'Не могли бы вы прислать главную информацию?'], ['Haben Sie einen Termin für ein kurzes Gespräch?', 'Найдётся ли у вас время для короткого разговора?']] },

{ id: 'dtz_klassenfahrt', fmt: 'dtz', area: 'kinder', type: 'form', to: 'person', emoji: '🚌',
  de: 'Klassenfahrt: Frage zu den Kosten', ru: 'Школьная поездка: вопрос об оплате',
  sit_de: 'Die Klasse Ihrer Tochter macht im Mai eine Klassenfahrt. Die Fahrt kostet 250 Euro. Das ist für Ihre Familie im Moment zu viel. Schreiben Sie an {=die Klassenlehrerin|den Klassenlehrer}, {NNA}.',
  sit_ru: 'Класс дочери в мае едет в поездку, она стоит 250 евро — для вашей семьи сейчас это слишком дорого. Напиши классному руководителю ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['klassenfahrt', 'fahrt'] },
    { de: 'Ihre Situation', ru: 'Ваше положение', kw: ['zu viel', 'teuer', 'geld', 'keine arbeit', 'arbeitslos', 'kinder'] },
    { de: 'Ratenzahlung oder Hilfe?', ru: 'Оплата частями или помощь?', kw: ['raten', 'zuschuss', 'unterstützung', 'hilfe', 'monat'] },
    { de: 'Teilnahme Ihrer Tochter', ru: 'Участие дочери', kw: ['mitfahren', 'teilnehmen', 'mitkommen', 'dabei', 'freut sich'] },
  ],
  model: `{ANREDE},

ich schreibe Ihnen wegen der Klassenfahrt im Mai. Meine Tochter Sara freut sich sehr darauf und möchte unbedingt mitfahren. Leider sind 250 Euro für unsere Familie im Moment sehr viel Geld, weil mein Mann zurzeit keine Arbeit hat und wir drei Kinder haben. Kann man den Betrag vielleicht in Raten bezahlen, zum Beispiel jeden Monat 50 Euro? Oder gibt es eine finanzielle Unterstützung von der Schule oder von der Stadt? Ich bitte Sie um einen kurzen Rückruf.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich schreibe Ihnen wegen …', 'Пишу вам по поводу …'], ['Kann man den Betrag in Raten bezahlen?', 'Можно ли оплатить сумму частями?'], ['Gibt es eine finanzielle Unterstützung?', 'Есть ли финансовая помощь?'], ['Ich bitte Sie um einen kurzen Rückruf.', 'Прошу вас перезвонить мне.']] },

/* ── Wohnen ── */
{ id: 'dtz_kuendigung', fmt: 'dtz', area: 'wohnen', type: 'form', to: 'person', emoji: '🔑',
  de: 'Kündigung der Wohnung', ru: 'Расторжение договора аренды',
  sit_de: 'Sie haben eine neue Arbeit in einer anderen Stadt und möchten Ihre Wohnung kündigen. Schreiben Sie an {=Ihre Vermieterin|Ihren Vermieter}, {NNA}.',
  sit_ru: 'У тебя новая работа в другом городе, и ты хочешь расторгнуть договор аренды. Напиши арендодателю ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['kündige', 'kündigung', 'kündigen'] },
    { de: 'Zu welchem Termin?', ru: 'К какому сроку?', kw: ['zum 3', 'zum 1', 'zum 2', 'frist', 'ende'] },
    { de: 'Grund für den Umzug', ru: 'Причина переезда', kw: ['weil', 'denn', 'stelle', 'arbeit', 'ziehe'] },
    { de: 'Termin für die Wohnungsübergabe', ru: 'Дата передачи квартиры', kw: ['übergabe', 'übergeben', 'schlüssel', 'nachmieter'] },
  ],
  model: `{ANREDE},

hiermit kündige ich meinen Mietvertrag für die Wohnung in der Lindenstraße 8, 2. Stock links, fristgerecht zum 31. Mai. Ich habe eine neue Stelle in Hamburg gefunden und ziehe deshalb Anfang Juni um. Die Kündigungsfrist von drei Monaten halte ich ein. Bitte schlagen Sie mir einen Termin für die Wohnungsübergabe vor. Ich kann die Wohnung auch früher übergeben, wenn Sie schon einen Nachmieter haben. Bitte bestätigen Sie mir außerdem die Kündigung schriftlich.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Hiermit kündige ich meinen Mietvertrag fristgerecht zum …', 'Настоящим расторгаю договор аренды в установленный срок к …'], ['Die Kündigungsfrist von drei Monaten halte ich ein.', 'Срок уведомления в три месяца я соблюдаю.'], ['Bitte schlagen Sie mir einen Termin für die Wohnungsübergabe vor.', 'Предложите, пожалуйста, дату передачи квартиры.'], ['Bitte bestätigen Sie mir die Kündigung schriftlich.', 'Пожалуйста, подтвердите расторжение письменно.']] },

{ id: 'dtz_reparatur', fmt: 'dtz', area: 'wohnen', type: 'form', to: 'person', emoji: '🥶',
  de: 'Heizung kaputt', ru: 'Сломалось отопление',
  sit_de: 'In Ihrer Wohnung funktioniert die Heizung nicht. Schreiben Sie an {=Ihre Vermieterin|Ihren Vermieter}, {NNA}.',
  sit_ru: 'В квартире не работает отопление. Напиши арендодателю ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['heizung', 'funktioniert nicht', 'kaputt', 'defekt'] },
    { de: 'Seit wann?', ru: 'С какого времени?', kw: ['seit'] },
    { de: 'Folgen für Ihre Familie', ru: 'Последствия для семьи', kw: ['kalt', 'grad', 'erkältet', 'krank', 'frieren'] },
    { de: 'Bitte um Reparatur', ru: 'Просьба о ремонте', kw: ['handwerker', 'reparatur', 'reparieren', 'techniker'] },
  ],
  model: `{ANREDE},

ich wohne in Ihrem Haus in der Gartenstraße 15 im dritten Stock. Ich schreibe Ihnen, weil unsere Heizung nicht mehr funktioniert. Seit Montag bleiben alle Heizkörper kalt, obwohl ich sie ganz aufgedreht habe. In der Wohnung sind es nur noch 15 Grad, und meine kleine Tochter ist schon erkältet. Deshalb bitte ich Sie, so schnell wie möglich einen Handwerker zu schicken. Ich bin jeden Tag ab 16 Uhr zu Hause. Sie können mich auch unter 0176 4455321 anrufen.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich schreibe Ihnen, weil …', 'Пишу вам, потому что …'], ['Seit Montag funktioniert die Heizung nicht mehr.', 'С понедельника не работает отопление.'], ['Bitte schicken Sie so schnell wie möglich einen Handwerker.', 'Пожалуйста, пришлите мастера как можно скорее.'], ['Ich bin jeden Tag ab 16 Uhr zu Hause.', 'Я дома каждый день после 16 часов.']] },

{ id: 'dtz_laerm', fmt: 'dtz', area: 'wohnen', type: 'form', to: 'person', emoji: '🔊',
  de: 'Beschwerde: Lärm von den Nachbarn', ru: 'Жалоба арендодателю: шум',
  sit_de: 'Ihre Nachbarn hören fast jede Nacht laute Musik. Schreiben Sie an {=Ihre Vermieterin|Ihren Vermieter}, {NNA}.',
  sit_ru: 'Соседи почти каждую ночь громко слушают музыку. Напиши арендодателю ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['beschwer', 'lärm', 'laut', 'musik', 'problem'] },
    { de: 'Seit wann gibt es das Problem?', ru: 'С каких пор проблема?', kw: ['seit', 'woche', 'monat', 'jede nacht'] },
    { de: 'Was haben Sie schon gemacht?', ru: 'Что ты уже предпринял(а)?', kw: ['gesprochen', 'geklingelt', 'gebeten', 'zettel', 'versucht'] },
    { de: 'Was soll {=die Vermieterin|der Vermieter} tun?', ru: 'Что должен сделать арендодатель?', kw: ['könnten sie', 'sprechen sie', 'bitte', 'lösung'] },
  ],
  model: `{ANREDE},

ich wohne in Ihrem Haus in der Bergstraße 12 im zweiten Stock und möchte mich über meine Nachbarn beschweren. Seit drei Wochen hören sie fast jede Nacht bis zwei Uhr sehr laut Musik. Deshalb kann ich nicht schlafen und bin morgens bei der Arbeit sehr müde. Schon zweimal habe ich bei den Nachbarn geklingelt und sie höflich gebeten, leiser zu sein, aber leider hat sich nichts geändert. Könnten Sie bitte mit ihnen sprechen? Ich hoffe, dass wir das Problem schnell lösen können.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich möchte mich über … beschweren.', 'Я хочу пожаловаться на …'], ['Seit drei Wochen …', 'Уже три недели …'], ['Ich habe sie höflich gebeten, …', 'Я вежливо попросил(а) их …'], ['Leider hat sich nichts geändert.', 'К сожалению, ничего не изменилось.'], ['Ich hoffe, dass wir das Problem schnell lösen können.', 'Надеюсь, мы быстро решим проблему.']] },

{ id: 'dtz_wohnungsangebot', fmt: 'dtz', area: 'wohnen', type: 'form', to: 'person', emoji: '🏢',
  de: 'Antwort auf ein Wohnungsangebot', ru: 'Ответ на объявление о квартире',
  sit_de: 'Sie haben in der Zeitung ein interessantes Wohnungsangebot gelesen: 3 Zimmer, 75 m², Balkon. Schreiben Sie an {=die Vermieterin|den Vermieter}, {NNA}.',
  sit_ru: 'Ты прочитал(а) в газете интересное объявление: 3 комнаты, 75 м², балкон. Напиши арендодателю ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['anzeige', 'angebot', 'gelesen', 'interess'] },
    { de: 'Ihre Familie', ru: 'Твоя семья', kw: ['familie', 'kinder', 'partner', 'personen', 'sohn', 'tochter'] },
    { de: 'Fragen zur Wohnung', ru: 'Вопросы о квартире', kw: ['nebenkosten', 'miete', 'kaution', 'frei', 'stellplatz'] },
    { de: 'Termin für eine Besichtigung', ru: 'Время для осмотра', kw: ['besichtig', 'anschauen', 'ansehen'] },
  ],
  model: `{ANREDE},

ich habe Ihre Anzeige in der Zeitung gelesen und interessiere mich sehr für die 3-Zimmer-Wohnung mit Balkon. Wir sind eine Familie mit zwei Kindern. Zurzeit wohnen wir in nur zwei Zimmern, deshalb suchen wir eine größere Wohnung. Mein Partner arbeitet als Elektriker, und ich arbeite in einem Supermarkt. Ich habe aber noch einige Fragen: Wie hoch sind die Nebenkosten? Ab wann ist die Wohnung frei? Außerdem möchte ich wissen, ob es einen Stellplatz für unser Auto gibt. Könnten wir die Wohnung nächste Woche besichtigen?

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich habe Ihre Anzeige gelesen und interessiere mich für die Wohnung.', 'Я прочитал(а) ваше объявление, и меня интересует квартира.'], ['Wie hoch sind die Nebenkosten?', 'Какие коммунальные платежи?'], ['Ab wann ist die Wohnung frei?', 'С какого числа квартира свободна?'], ['Könnten wir die Wohnung besichtigen?', 'Можно ли нам посмотреть квартиру?']] },

{ id: 'dtz_blumen', fmt: 'dtz', area: 'wohnen', type: 'form', to: 'person', emoji: '🪴',
  de: 'Nachbarn um Hilfe bitten (Urlaub)', ru: 'Попросить соседей помочь во время отпуска',
  sit_de: 'Sie fahren drei Wochen in Urlaub. {=Ihre Nachbarin|Ihr Nachbar}, {NN}, soll Ihnen in dieser Zeit helfen. Schreiben Sie {=ihr|ihm} einen Brief.',
  sit_ru: 'Ты уезжаешь в отпуск на три недели и хочешь попросить соседа/соседку ({NN}) помочь в это время. Напиши письмо.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['urlaub', 'verreisen', 'gefallen'] },
    { de: 'Wie lange sind Sie weg?', ru: 'Как долго тебя не будет?', kw: ['vom', 'bis', 'wochen'] },
    { de: 'Was soll {=sie|er} machen?', ru: 'Что сосед должен делать?', kw: ['blumen', 'gießen', 'briefkasten', 'post', 'katze'] },
    { de: 'Schlüssel und Dank', ru: 'Ключ и благодарность', kw: ['schlüssel', 'dank', 'geschenk'] },
  ],
  model: `{ANREDE},

wir fahren im Sommer in Urlaub und möchten Sie um einen Gefallen bitten. Wir sind vom 1. bis zum 21. August bei meiner Familie in Polen. Könnten Sie in dieser Zeit zweimal pro Woche unsere Blumen gießen und den Briefkasten leeren? Das wäre sehr nett, denn sonst wird der Briefkasten zu voll. Wenn Sie keine Zeit haben, ist das natürlich kein Problem. Den Schlüssel bringe ich Ihnen dann am Freitagabend vorbei. Vielen Dank für Ihre Hilfe!

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Wir möchten Sie um einen Gefallen bitten.', 'Мы хотим попросить вас об одолжении.'], ['Könnten Sie unsere Blumen gießen und den Briefkasten leeren?', 'Не могли бы вы поливать цветы и вынимать почту?'], ['Den Schlüssel bringe ich Ihnen am Freitag vorbei.', 'Ключ я занесу вам в пятницу.'], ['Vielen Dank für Ihre Hilfe!', 'Большое спасибо за помощь!']] },

/* ── Einkaufen: Verträge, Reklamation ── */
{ id: 'dtz_reklamation', fmt: 'dtz', area: 'einkauf', type: 'form', to: 'org', emoji: '📦',
  de: 'Reklamation: Gerät kaputt geliefert', ru: 'Рекламация: прибор пришёл сломанным',
  sit_de: 'Sie haben im Internet eine Kaffeemaschine bestellt, aber sie ist kaputt angekommen. Schreiben Sie an den Online-Shop.',
  sit_ru: 'Ты заказал(а) в интернете кофемашину, но её привезли сломанной. Напиши в интернет-магазин.',
  points: [
    { de: 'Was haben Sie bestellt und wann?', ru: 'Что и когда заказал(а)?', kw: ['bestellt', 'bestellung', 'gekauft', 'bestellnummer'] },
    { de: 'Was ist das Problem?', ru: 'В чём проблема?', kw: ['kaputt', 'defekt', 'funktioniert nicht', 'beschädigt'] },
    { de: 'Was möchten Sie? (Umtausch / Geld zurück)', ru: 'Чего ты хочешь? (обмен / возврат денег)', kw: ['umtausch', 'umtauschen', 'geld zurück', 'erstatt', 'ersatz'] },
    { de: 'Bitte um schnelle Antwort', ru: 'Просьба быстро ответить', kw: ['antwort', 'rückmeldung', 'schnell', 'möglichst'] },
  ],
  model: `Sehr geehrte Damen und Herren,

am 3. März habe ich in Ihrem Online-Shop eine Kaffeemaschine bestellt (Bestellnummer 45821). Das Paket ist gestern angekommen, aber leider ist die Maschine kaputt: Der Wassertank hat einen Riss und das Gerät funktioniert nicht. Ich möchte die Kaffeemaschine gern umtauschen. Wenn das nicht möglich ist, möchte ich mein Geld zurück. Bitte schicken Sie mir ein Rücksendeetikett. Ich bitte Sie um eine schnelle Antwort.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Am … habe ich bei Ihnen … bestellt.', '… я заказал(а) у вас …'], ['Leider ist das Gerät kaputt.', 'К сожалению, прибор сломан.'], ['Ich möchte … umtauschen / mein Geld zurück.', 'Я хочу обменять … / вернуть деньги.'], ['Ich bitte Sie um eine schnelle Antwort.', 'Прошу вас ответить как можно скорее.']] },

{ id: 'dtz_widerruf', fmt: 'dtz', area: 'einkauf', type: 'form', to: 'org', emoji: '✍️',
  de: 'Handyvertrag widerrufen', ru: 'Отозвать договор мобильной связи',
  sit_de: 'Ein Vertreter hat Ihnen an der Haustür einen neuen Handyvertrag verkauft. Jetzt möchten Sie den Vertrag nicht mehr. Schreiben Sie an die Firma „FonPlus“.',
  sit_ru: 'Агент у двери продал тебе новый договор мобильной связи. Теперь он тебе не нужен. Напиши в фирму «FonPlus».',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['widerruf', 'widerrufe'] },
    { de: 'Welcher Vertrag und wann?', ru: 'Какой договор и когда?', kw: ['unterschrieben', 'kundennummer', 'vertragsnummer', 'am '] },
    { de: 'Warum?', ru: 'Почему?', kw: ['teuer', 'verstanden', 'schon einen', 'brauche', 'weil'] },
    { de: 'Bitte um Bestätigung', ru: 'Просьба о подтверждении', kw: ['bestätig', 'schriftlich'] },
  ],
  model: `Sehr geehrte Damen und Herren,

hiermit widerrufe ich den Handyvertrag, den ich am 12. Oktober an meiner Haustür unterschrieben habe (Kundennummer 2045-778). Ihr Mitarbeiter hat mir den Vertrag sehr schnell erklärt, und ich habe nicht alles verstanden. Erst zu Hause habe ich gesehen, dass der Vertrag zwei Jahre läuft und jeden Monat 39 Euro kostet. Das ist für mich zu teuer, deshalb möchte ich ihn nicht behalten. Außerdem habe ich schon einen Vertrag bei einer anderen Firma. Bitte bestätigen Sie mir den Widerruf schriftlich.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Hiermit widerrufe ich den Vertrag vom …', 'Настоящим отзываю договор от …'], ['Ich habe nicht alles verstanden.', 'Я понял(а) не всё.'], ['Das ist für mich zu teuer.', 'Для меня это слишком дорого.'], ['Bitte bestätigen Sie mir den Widerruf schriftlich.', 'Пожалуйста, подтвердите отзыв письменно.'], ['(Widerrufsfrist: meist 14 Tage)', '(срок на отзыв договора обычно 14 дней)']] },

{ id: 'dtz_abo_kuendigen', fmt: 'dtz', area: 'einkauf', type: 'form', to: 'org', emoji: '🏋️',
  de: 'Fitnessstudio kündigen', ru: 'Расторгнуть абонемент в фитнес-клуб',
  sit_de: 'Sie sind seit einem Jahr Mitglied im Fitnessstudio „FitAktiv“. Sie möchten Ihre Mitgliedschaft kündigen. Schreiben Sie an das Fitnessstudio.',
  sit_ru: 'Ты уже год ходишь в фитнес-клуб «FitAktiv» и хочешь расторгнуть абонемент. Напиши в клуб.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['kündige', 'kündigung', 'kündigen'] },
    { de: 'Ihre Mitgliedsnummer', ru: 'Номер участника', kw: ['mitgliedsnummer', 'nummer'] },
    { de: 'Warum kündigen Sie?', ru: 'Почему расторгаешь?', kw: ['weil', 'denn', 'ziehe', 'umzug', 'verletz', 'zeit'] },
    { de: 'Abbuchung und Bestätigung', ru: 'Списание денег и подтверждение', kw: ['bestätig', 'konto', 'beitrag', 'abbuch', 'lastschrift'] },
  ],
  model: `Sehr geehrte Damen und Herren,

hiermit kündige ich meine Mitgliedschaft in Ihrem Fitnessstudio zum nächstmöglichen Termin. Meine Mitgliedsnummer ist 10458. Ich kündige, weil ich Ende des Monats in eine andere Stadt ziehe. Dort gibt es leider kein Studio von „FitAktiv“, deshalb kann ich nicht mehr bei Ihnen trainieren. Bitte buchen Sie nach dem Ende des Vertrags keinen Beitrag mehr von meinem Konto ab. Außerdem bitte ich Sie, mir die Kündigung und das Vertragsende schriftlich zu bestätigen.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Hiermit kündige ich meine Mitgliedschaft zum nächstmöglichen Termin.', 'Настоящим расторгаю членство в ближайший возможный срок.'], ['Meine Mitgliedsnummer ist …', 'Мой номер участника …'], ['Bitte buchen Sie keinen Beitrag mehr ab.', 'Пожалуйста, больше не списывайте взносы.'], ['Bitte bestätigen Sie mir die Kündigung schriftlich.', 'Пожалуйста, подтвердите расторжение письменно.']] },

/* ── Ämter und Behörden, Bank ── */
{ id: 'dtz_bank_adresse', fmt: 'dtz', area: 'amt', type: 'form', to: 'org', emoji: '🏦',
  de: 'Neue Adresse an die Bank', ru: 'Сообщить банку новый адрес',
  sit_de: 'Sie sind umgezogen. Schreiben Sie an Ihre Bank, die „Stadtsparkasse“.',
  sit_ru: 'Ты переехал(а). Напиши в свой банк «Stadtsparkasse».',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['umgezogen', 'umzug', 'neue adresse'] },
    { de: 'Alte und neue Adresse', ru: 'Старый и новый адрес', kw: ['straße', 'weg', 'alte adresse', 'wohne'] },
    { de: 'Ihr Konto (IBAN)', ru: 'Твой счёт (IBAN)', kw: ['iban', 'konto'] },
    { de: 'Neue Bankkarte', ru: 'Новая банковская карта', kw: ['karte', 'bankkarte'] },
  ],
  model: `Sehr geehrte Damen und Herren,

ich bin am 1. April umgezogen, deshalb möchte ich Ihnen meine neue Adresse mitteilen. Meine alte Adresse war Bahnhofstraße 3, 50667 Köln. Jetzt wohne ich im Rosenweg 12, 50823 Köln. Mein Konto bei Ihnen hat die IBAN DE12 3705 0198 0012 3456 78. Bitte ändern Sie meine Adresse, damit ich alle Briefe und Kontoauszüge bekomme. Meine Bankkarte läuft außerdem im Juni ab. Könnten Sie mir die neue Karte bitte an die neue Adresse schicken? Vielen Dank!

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich möchte Ihnen meine neue Adresse mitteilen.', 'Хочу сообщить вам свой новый адрес.'], ['Meine alte Adresse war …, jetzt wohne ich …', 'Мой старый адрес был …, теперь я живу …'], ['Bitte ändern Sie meine Adresse.', 'Пожалуйста, измените мой адрес.'], ['Könnten Sie mir die neue Karte schicken?', 'Не могли бы вы прислать мне новую карту?']] },

{ id: 'dtz_einspruch', fmt: 'dtz', area: 'amt', type: 'form', to: 'org', emoji: '🚗',
  de: 'Einspruch gegen einen Bußgeldbescheid', ru: 'Возражение против штрафа',
  sit_de: 'Sie haben einen Bußgeldbescheid bekommen: Ihr Auto stand am 5. Mai im Halteverbot. Aber an diesem Tag war Ihr Auto gar nicht in der Stadt. Schreiben Sie an die Bußgeldstelle der Stadt.',
  sit_ru: 'Тебе пришёл штраф: якобы 5 мая твоя машина стояла под знаком «остановка запрещена». Но в этот день машины вообще не было в городе. Напиши в отдел штрафов города.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['einspruch', 'bescheid'] },
    { de: 'Aktenzeichen', ru: 'Номер дела', kw: ['aktenzeichen'] },
    { de: 'Was war an diesem Tag?', ru: 'Что было в тот день?', kw: ['werkstatt', 'urlaub', 'nicht in', 'kann nicht sein', 'war'] },
    { de: 'Beweis', ru: 'Доказательство', kw: ['beweis', 'kopie', 'rechnung', 'bestätigung', 'lege'] },
  ],
  model: `Sehr geehrte Damen und Herren,

hiermit lege ich Einspruch gegen den Bußgeldbescheid vom 20. Mai ein (Aktenzeichen 34-2215/24). Darin steht, dass mein Auto am 5. Mai in der Hauptstraße im Halteverbot stand. Das kann aber nicht sein, denn mein Auto war vom 3. bis zum 8. Mai in einer Werkstatt in Bonn. Als Beweis lege ich Ihnen eine Kopie der Rechnung von der Werkstatt bei. Vielleicht gibt es ein Problem mit dem Kennzeichen. Ich bitte Sie, den Bescheid zu prüfen und das Verfahren einzustellen.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Hiermit lege ich Einspruch gegen den Bescheid vom … ein.', 'Настоящим подаю возражение против решения от …'], ['Das kann nicht sein, denn …', 'Этого не может быть, потому что …'], ['Als Beweis lege ich eine Kopie … bei.', 'В качестве доказательства прилагаю копию …'], ['Ich bitte Sie, den Bescheid zu prüfen.', 'Прошу вас проверить это решение.']] },

{ id: 'dtz_amt_termin', fmt: 'dtz', area: 'amt', type: 'form', to: 'org', emoji: '📅',
  de: 'Termin beim Amt verschieben', ru: 'Перенести приём в ведомстве',
  sit_de: 'Sie haben nächste Woche einen Termin bei der Ausländerbehörde, aber Sie können an diesem Tag nicht kommen. Schreiben Sie an die Ausländerbehörde.',
  sit_ru: 'На следующей неделе у тебя приём в ведомстве по делам иностранцев, но в этот день ты не можешь. Напиши туда.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['termin', 'nicht kommen'] },
    { de: 'Warum können Sie nicht kommen?', ru: 'Почему не можешь прийти?', kw: ['weil', 'denn', 'prüfung', 'krank', 'arbeit'] },
    { de: 'Neuer Termin', ru: 'Новая дата', kw: ['neuen termin', 'anderen termin', 'zeit', 'möglich'] },
    { de: 'Frage zu den Unterlagen', ru: 'Вопрос о документах', kw: ['unterlagen', 'dokumente', 'mitbringen', 'pass'] },
  ],
  model: `Sehr geehrte Damen und Herren,

ich habe am Dienstag, dem 14. November, um 9:30 Uhr einen Termin bei Ihnen. Es geht um die Verlängerung meiner Aufenthaltserlaubnis. Leider kann ich an diesem Tag nicht kommen, weil ich genau dann meine Deutschprüfung habe. Könnten Sie mir bitte einen neuen Termin geben? Ab dem 16. November habe ich jeden Vormittag Zeit. Außerdem möchte ich wissen, welche Unterlagen ich mitbringen muss. Reichen mein Pass, ein Foto und der Arbeitsvertrag?

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich habe am … um … Uhr einen Termin bei Ihnen.', 'У меня назначен приём у вас … в … часов.'], ['Es geht um die Verlängerung meiner Aufenthaltserlaubnis.', 'Речь идёт о продлении вида на жительство.'], ['Könnten Sie mir einen neuen Termin geben?', 'Не могли бы вы назначить мне новую дату?'], ['Welche Unterlagen muss ich mitbringen?', 'Какие документы мне нужно принести?']] },

/* ── Arbeit und Arbeitssuche ── */
{ id: 'dtz_minijob', fmt: 'dtz', area: 'arbeit', type: 'form', to: 'org', emoji: '🥐',
  de: 'Bewerbung auf einen Aushang', ru: 'Отклик на объявление о подработке',
  sit_de: 'Im Supermarkt haben Sie einen Aushang gesehen: Die Bäckerei „Brotzeit“ sucht eine Aushilfe für den Verkauf am Wochenende. Schreiben Sie an die Bäckerei.',
  sit_ru: 'В супермаркете ты увидел(а) объявление: пекарня «Brotzeit» ищет помощника продавца на выходные. Напиши в пекарню.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['aushang', 'bewerben', 'gesehen', 'interess'] },
    { de: 'Ihre Erfahrung', ru: 'Твой опыт', kw: ['erfahrung', 'gearbeitet', 'kasse', 'kunden'] },
    { de: 'Wann können Sie arbeiten?', ru: 'Когда можешь работать?', kw: ['samstag', 'sonntag', 'wochenende', 'uhr'] },
    { de: 'Wie kann man Sie erreichen?', ru: 'Как с тобой связаться?', kw: ['erreichen', 'nummer', 'telefon', 'handy', 'e-mail'] },
  ],
  model: `Sehr geehrte Damen und Herren,

im Supermarkt habe ich Ihren Aushang gesehen und möchte mich als Aushilfe im Verkauf bewerben. Ich bin 29 Jahre alt und besuche zurzeit einen Deutschkurs. In meinem Heimatland habe ich drei Jahre in einem Café gearbeitet. Deshalb kenne ich die Arbeit an der Kasse und den Kontakt mit Kunden. Ich kann jeden Samstag und Sonntag ab 6 Uhr arbeiten, weil ich unter der Woche im Kurs bin. Sie erreichen mich unter der Nummer 0157 2233445 oder per E-Mail.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich möchte mich als Aushilfe bewerben.', 'Я хотел(а) бы откликнуться на место помощника.'], ['In meinem Heimatland habe ich … gearbeitet.', 'На родине я работал(а) …'], ['Ich kann jeden Samstag ab 6 Uhr arbeiten.', 'Я могу работать каждую субботу с 6 часов.'], ['Sie erreichen mich unter der Nummer …', 'Со мной можно связаться по номеру …']] },

{ id: 'dtz_praktikum', fmt: 'dtz', area: 'arbeit', type: 'form', to: 'org', emoji: '🧑‍🍳',
  de: 'Anfrage: Praktikum', ru: 'Запрос: стажировка',
  sit_de: 'Sie haben im Internet gelesen, dass ein Restaurant Praktikanten sucht. Schreiben Sie an das Restaurant „Zur Linde“.',
  sit_ru: 'Ты прочитал(а) в интернете, что ресторан ищет стажёров. Напиши в ресторан «Zur Linde».',
  points: [
    { de: 'Wer sind Sie?', ru: 'Кто ты?', kw: ['ich heiße', 'mein name', 'jahre alt', 'komme aus', 'wohne'] },
    { de: 'Warum interessieren Sie sich für das Praktikum?', ru: 'Почему интересует стажировка?', kw: ['weil', 'interess', 'koch', 'beruf', 'lernen'] },
    { de: 'Wann haben Sie Zeit?', ru: 'Когда у тебя есть время?', kw: ['ab dem', 'zeit', 'september', 'sofort', 'wochenende'] },
    { de: 'Bitte um ein Gespräch', ru: 'Просьба о собеседовании', kw: ['gespräch', 'termin', 'vorstellen', 'kennenlernen'] },
  ],
  model: `Sehr geehrte Damen und Herren,

im Internet habe ich gelesen, dass Sie Praktikanten suchen. Mein Name ist {ICHV}, ich bin 24 Jahre alt und wohne seit zwei Jahren in Köln. In meinem Heimatland habe ich schon ein Jahr in einer Küche gearbeitet, deshalb kenne ich die Arbeit ein bisschen. Ich interessiere mich für das Praktikum, weil ich später eine Ausbildung als Koch machen möchte. Ich habe ab dem 1. September Zeit und kann auch am Wochenende arbeiten. Ich würde mich sehr über einen Termin für ein persönliches Gespräch freuen.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Im Internet habe ich gelesen, dass …', 'В интернете я прочитал(а), что …'], ['Ich interessiere mich für das Praktikum, weil …', 'Меня интересует стажировка, потому что …'], ['Ich habe ab dem 1. September Zeit.', 'Я свободен(на) с 1 сентября.'], ['Ich würde mich über einen Termin freuen.', 'Я был(а) бы рад(а) встрече.']] },

{ id: 'dtz_urlaub', fmt: 'dtz', area: 'arbeit', type: 'form', to: 'person', emoji: '🏖️',
  de: 'Urlaub beantragen', ru: 'Попросить отпуск у начальника',
  sit_de: 'Ihre Schwester heiratet im Juli in Ihrem Heimatland. Sie möchten dafür Urlaub nehmen. Schreiben Sie an {=Ihre Chefin|Ihren Chef}, {NNA}.',
  sit_ru: 'Твоя сестра в июле выходит замуж на родине, и ты хочешь взять отпуск. Напиши начальнику ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['urlaub'] },
    { de: 'Wann und wie lange?', ru: 'Когда и на сколько?', kw: ['vom', 'bis', 'juli', 'wochen', 'tage'] },
    { de: 'Warum gerade dann?', ru: 'Почему именно тогда?', kw: ['heiratet', 'hochzeit', 'schwester', 'familie'] },
    { de: 'Wer macht Ihre Arbeit?', ru: 'Кто тебя заменит?', kw: ['kollegin', 'kollege', 'übernehmen', 'vertret', 'schicht'] },
  ],
  model: `{ANREDE},

ich möchte gern vom 8. bis zum 19. Juli Urlaub nehmen. Meine Schwester heiratet am 12. Juli in meinem Heimatland, und die ganze Familie kommt zu diesem Fest. Deshalb ist es für mich sehr wichtig, dass ich dabei sein kann. Ich habe schon mit meiner Kollegin Frau Lehmann gesprochen. Sie kann in dieser Zeit meine Schichten übernehmen. Könnten Sie mir bitte bis Ende Mai Bescheid geben, ob der Urlaub möglich ist? Dann kann ich die Flüge buchen.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich möchte gern vom … bis zum … Urlaub nehmen.', 'Я хотел(а) бы взять отпуск с … по …'], ['Deshalb ist es für mich sehr wichtig, dass …', 'Поэтому для меня очень важно, чтобы …'], ['Meine Kollegin kann meine Schichten übernehmen.', 'Моя коллега может взять мои смены.'], ['Könnten Sie mir Bescheid geben, ob …?', 'Не могли бы вы сообщить мне, …?']] },

{ id: 'dtz_krankmeldung', fmt: 'dtz', area: 'arbeit', type: 'form', to: 'person', emoji: '🤧',
  de: 'Krankmeldung an den Chef', ru: 'Сообщить начальнику о болезни',
  sit_de: 'Sie sind krank und können ein paar Tage nicht arbeiten. Schreiben Sie an {=Ihre Chefin|Ihren Chef}, {NNA}.',
  sit_ru: 'Ты заболел(а) и несколько дней не сможешь работать. Напиши начальнику ({NN}).',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['krank', 'fieber', 'nicht zur arbeit'] },
    { de: 'Wie lange fehlen Sie?', ru: 'Сколько тебя не будет?', kw: ['bis', 'tage', 'woche', 'montag'] },
    { de: 'Krankmeldung vom Arzt', ru: 'Больничный от врача', kw: ['krankmeldung', 'krankgeschrieben', 'attest', 'arzt'] },
    { de: 'Was muss erledigt werden?', ru: 'Что нужно сделать за тебя?', kw: ['termin', 'übernehmen', 'kollege', 'kollegin', 'unterlagen'] },
  ],
  model: `{ANREDE},

leider muss ich Ihnen mitteilen, dass ich heute nicht zur Arbeit kommen kann. Ich habe seit gestern Abend hohes Fieber und starke Halsschmerzen. Heute Morgen war ich beim Arzt, und er hat mich bis Freitag krankgeschrieben. Die Krankmeldung schicke ich Ihnen dann heute per Post. Am Mittwoch habe ich einen Termin mit der Firma Kraus. Könnte mein Kollege Herr Yilmaz diesen Termin übernehmen? Die Unterlagen liegen auf meinem Schreibtisch. Ich hoffe, dass ich am Montag wieder gesund bin.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Leider muss ich Ihnen mitteilen, dass ich krank bin.', 'К сожалению, должен(на) сообщить, что я заболел(а).'], ['Der Arzt hat mich bis Freitag krankgeschrieben.', 'Врач выписал мне больничный до пятницы.'], ['Die Krankmeldung schicke ich Ihnen per Post.', 'Больничный пришлю вам по почте.'], ['Könnte mein Kollege diesen Termin übernehmen?', 'Мог бы мой коллега взять эту встречу?']] },

/* ── Gesundheit ── */
{ id: 'dtz_arzt', fmt: 'dtz', area: 'gesund', type: 'form', to: 'org', emoji: '🦷',
  de: 'Arzttermin verschieben', ru: 'Перенести приём у врача',
  sit_de: 'Sie haben morgen einen Termin in der Zahnarztpraxis Dr. Hartmann. Sie können nicht kommen. Schreiben Sie an die Praxis.',
  sit_ru: 'Завтра у тебя приём в стоматологии доктора Хартманна, но ты не можешь прийти. Напиши в клинику.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['termin', 'absagen', 'nicht kommen'] },
    { de: 'Warum können Sie nicht kommen?', ru: 'Почему не можешь прийти?', kw: ['weil', 'denn', 'krank', 'arbeit', 'muss'] },
    { de: 'Neuer Termin', ru: 'Новая дата', kw: ['neuen termin', 'anderen termin', 'zeit'] },
    { de: 'Wie dringend ist es?', ru: 'Насколько срочно?', kw: ['weh', 'schmerz', 'bald', 'dringend'] },
  ],
  model: `Sehr geehrte Damen und Herren,

ich habe morgen um 10 Uhr einen Termin bei Dr. Hartmann. Leider muss ich den Termin absagen, weil meine Tochter krank ist und ich mit ihr zum Kinderarzt gehen muss. Es tut mir leid, dass ich so spät Bescheid gebe. Könnten Sie mir bitte einen neuen Termin geben? Nächste Woche habe ich jeden Tag ab 14 Uhr Zeit. Mein Zahn tut immer noch weh, deshalb wäre ein Termin möglichst bald sehr gut für mich.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Leider muss ich den Termin absagen, weil …', 'К сожалению, вынужден(а) отменить приём, потому что …'], ['Es tut mir leid, dass ich so spät Bescheid gebe.', 'Извините, что сообщаю так поздно.'], ['Könnten Sie mir einen neuen Termin geben?', 'Не могли бы вы назначить новую дату?'], ['Mein Zahn tut immer noch weh.', 'Зуб всё ещё болит.']] },

/* ── Soziale Kontakte (du) ── */
{ id: 'dtz_einladung', fmt: 'dtz', area: 'privat', type: 'inf', emoji: '🍖',
  de: 'Einladung zum Grillfest', ru: 'Пригласить на шашлыки',
  sit_de: 'Sie haben eine neue Wohnung mit Garten und möchten ein Grillfest machen. Schreiben Sie {~Ihrer Freundin|Ihrem Freund} {NAME}.',
  sit_ru: 'У тебя новая квартира с садом, и ты хочешь устроить шашлыки. Напиши другу / подруге {NAME}.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['grill', 'fest', 'party', 'lade dich'] },
    { de: 'Wann und wo?', ru: 'Когда и где?', kw: ['samstag', 'uhr', 'adresse', 'weg', 'straße'] },
    { de: 'Was soll {NAME} mitbringen?', ru: 'Что {NAME} должен(на) принести?', kw: ['mitbringen', 'salat', 'kuchen', 'getränke'] },
    { de: 'Antwort bis wann?', ru: 'До какого дня ответить?', kw: ['bescheid', 'bis mittwoch', 'antwort', 'sag mir'] },
  ],
  model: `{LIEBE} {NAME},

wie geht es dir? Ich habe tolle Neuigkeiten: Wir sind letzten Monat in eine neue Wohnung mit Garten umgezogen! Deshalb möchten wir am Samstag, dem 15. Juni, ein Grillfest machen, und ich lade dich herzlich ein. Wir fangen um 17 Uhr an. Die neue Adresse ist Ahornweg 7. Kannst du vielleicht einen Salat mitbringen? Fleisch und Getränke haben wir genug. Wenn du möchtest, kannst du auch deinen Partner mitbringen. Sag mir bitte bis Mittwoch Bescheid, ob du kommen kannst.

Viele Grüße
{ICH}`,
  phrases: [['Ich habe tolle Neuigkeiten: …', 'У меня отличные новости: …'], ['Ich lade dich herzlich ein.', 'Сердечно приглашаю тебя.'], ['Kannst du vielleicht einen Salat mitbringen?', 'Можешь, может быть, принести салат?'], ['Sag mir bitte bis Mittwoch Bescheid, ob du kommen kannst.', 'Скажи мне, пожалуйста, до среды, придёшь ли ты.']] },

{ id: 'dtz_zusage', fmt: 'dtz', area: 'privat', type: 'inf', emoji: '🥳',
  de: 'Einladung annehmen', ru: 'Принять приглашение',
  sit_de: '{NAME} hat Sie zu {~ihrer|seiner} Geburtstagsparty am Samstag eingeladen. Schreiben Sie {~ihr|ihm} eine Antwort.',
  sit_ru: '{NAME} пригласил(а) тебя на свой день рождения в субботу. Напиши ответ.',
  points: [
    { de: 'Dank für die Einladung', ru: 'Спасибо за приглашение', kw: ['danke', 'dank'] },
    { de: 'Zusage', ru: 'Согласие прийти', kw: ['komme', 'gern', 'dabei'] },
    { de: 'Was soll ich mitbringen?', ru: 'Что принести?', kw: ['mitbringen', 'kuchen', 'helfe', 'salat'] },
    { de: 'Frage zur Anfahrt', ru: 'Вопрос, как доехать', kw: ['wie komme', 'parkpl', 'straßenbahn', 'bus', 'anfahrt'] },
  ],
  model: `{LIEBE} {NAME},

vielen Dank für deine Einladung zu deiner Geburtstagsparty! Ich komme sehr gern, denn wir haben uns schon so lange nicht mehr gesehen. Ich freue mich auch, deine neuen Kollegen kennenzulernen. Soll ich etwas mitbringen? Wenn du möchtest, backe ich einen Kuchen, oder ich helfe dir am Nachmittag beim Vorbereiten. Und wie komme ich am besten zu dir? Gibt es in deiner Straße Parkplätze, oder soll ich lieber mit der Straßenbahn fahren? Bis Samstag!

Viele Grüße
{ICH}`,
  phrases: [['Vielen Dank für deine Einladung!', 'Большое спасибо за приглашение!'], ['Ich komme sehr gern.', 'Я с удовольствием приду.'], ['Soll ich etwas mitbringen?', 'Мне что-нибудь принести?'], ['Wie komme ich am besten zu dir?', 'Как к тебе лучше добраться?']] },

{ id: 'dtz_hochzeit', fmt: 'dtz', area: 'privat', type: 'inf', emoji: '💍',
  de: 'Einladung zur Hochzeit absagen', ru: 'Отказаться от приглашения на свадьбу',
  sit_de: '{NAME} heiratet und hat Sie zur Hochzeit eingeladen. Sie können leider nicht kommen. Schreiben Sie {~ihr|ihm}.',
  sit_ru: '{NAME} женится / выходит замуж и пригласил(а) тебя на свадьбу, но ты не можешь прийти. Напиши.',
  points: [
    { de: 'Gratulation und Dank für die Einladung', ru: 'Поздравление и спасибо за приглашение', kw: ['glückwunsch', 'gratulier', 'danke', 'dank'] },
    { de: 'Absage', ru: 'Отказ', kw: ['leider', 'kann nicht', 'nicht kommen'] },
    { de: 'Grund', ru: 'Причина', kw: ['weil', 'denn', 'arbeit', 'reise', 'prüfung', 'krank'] },
    { de: 'Vorschlag für ein Treffen', ru: 'Предложение встретиться', kw: ['treffen', 'nachfeiern', 'essen gehen', 'besuch', 'wollen wir'] },
  ],
  model: `{LIEBE} {NAME},

herzlichen Glückwunsch zu deiner Hochzeit! Ich freue mich sehr für euch und danke dir für die schöne Einladung. Leider kann ich am 14. Juni nicht kommen, weil ich an diesem Wochenende meine Prüfung zur Pflegefachkraft habe. Ich habe monatelang dafür gelernt und kann den Termin nicht verschieben. Das tut mir wirklich leid! Ich schicke euch ein kleines Geschenk mit der Post. Wollen wir nach der Prüfung zusammen essen gehen und ein bisschen nachfeiern? Dann musst du mir alle Fotos zeigen!

Alles Liebe
{ICH}`,
  phrases: [['Herzlichen Glückwunsch zu deiner Hochzeit!', 'Поздравляю со свадьбой!'], ['Danke für die schöne Einladung.', 'Спасибо за чудесное приглашение.'], ['Leider kann ich nicht kommen, weil …', 'К сожалению, не смогу прийти, потому что …'], ['Wollen wir … nachfeiern?', 'Давай отпразднуем потом?']] },

{ id: 'dtz_neue_stadt', fmt: 'dtz', area: 'privat', type: 'inf', emoji: '🌆',
  de: 'Neuigkeiten: Umzug in eine neue Stadt', ru: 'Новости: переезд в новый город',
  sit_de: 'Sie sind vor zwei Monaten in eine neue Stadt gezogen. Schreiben Sie {~Ihrer Freundin|Ihrem Freund} {NAME}.',
  sit_ru: 'Два месяца назад ты переехал(а) в новый город. Напиши другу / подруге {NAME}.',
  points: [
    { de: 'Warum sind Sie umgezogen?', ru: 'Почему переехал(а)?', kw: ['weil', 'denn', 'ausbildung', 'arbeit', 'stelle'] },
    { de: 'Ihre Wohnung', ru: 'Твоя квартира', kw: ['wohnung', 'zimmer', 'balkon', 'hell'] },
    { de: 'Was gefällt Ihnen in der Stadt, was nicht?', ru: 'Что нравится в городе, а что нет?', kw: ['gefällt', 'leider', 'parks', 'mieten', 'menschen'] },
    { de: 'Einladung zu einem Besuch', ru: 'Пригласи в гости', kw: ['besuchen', 'besuch', 'komm'] },
  ],
  model: `{LIEBE} {NAME},

entschuldige, dass ich so lange nicht geschrieben habe! Vor zwei Monaten bin ich nach Freiburg gezogen, weil ich hier eine Ausbildung im Krankenhaus mache. Meine Wohnung ist klein, aber sehr hell und hat einen Balkon. Die Stadt gefällt mir sehr gut: Es gibt viele Parks, und die Menschen sind freundlich. Leider sind die Mieten hier sehr hoch, und ich kenne noch nicht viele Leute. Hast du Lust, mich bald zu besuchen? Dann zeige ich dir die Altstadt. Schreib mir, wann du Zeit hast!

Liebe Grüße
{ICH}`,
  phrases: [['Entschuldige, dass ich so lange nicht geschrieben habe!', 'Извини, что долго не писал(а)!'], ['Die Stadt gefällt mir sehr gut.', 'Город мне очень нравится.'], ['Leider kenne ich noch nicht viele Leute.', 'К сожалению, я пока знаю мало людей.'], ['Hast du Lust, mich zu besuchen?', 'Хочешь приехать ко мне в гости?']] },

{ id: 'dtz_umzug_hilfe', fmt: 'dtz', area: 'privat', type: 'inf', emoji: '📦',
  de: 'Freund um Hilfe beim Umzug bitten', ru: 'Попросить друга помочь с переездом',
  sit_de: 'Sie ziehen bald um und brauchen Hilfe. Schreiben Sie {~Ihrer Freundin|Ihrem Freund} {NAME}.',
  sit_ru: 'Ты скоро переезжаешь и тебе нужна помощь. Напиши другу / подруге {NAME}.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['ziehe', 'umzug', 'umziehen', 'helfen'] },
    { de: 'Wann ist der Umzug?', ru: 'Когда переезд?', kw: ['samstag', 'sonntag', 'uhr', 'juni'] },
    { de: 'Was soll {NAME} machen?', ru: 'Что {NAME} должен(на) сделать?', kw: ['auto', 'kartons', 'schrank', 'tragen', 'aufbau'] },
    { de: 'Dank / Einladung', ru: 'Благодарность / приглашение', kw: ['dank', 'pizza', 'lade', 'essen'] },
  ],
  model: `{LIEBE} {NAME},

wie geht es dir? Ich habe endlich eine größere Wohnung gefunden und ziehe am Samstag, dem 3. Juni, um. Leider habe ich hier nicht viele Freunde, deshalb wollte ich dich fragen, ob du mir helfen kannst. Wir fangen um 9 Uhr an. Du hast doch ein großes Auto, oder? Damit könnten wir die Kartons transportieren. Außerdem brauche ich Hilfe beim Aufbau von meinem Schrank. Am Abend lade ich alle Helfer zum Pizzaessen ein. Ich wäre dir sehr dankbar!

Viele Grüße
{ICH}`,
  phrases: [['Ich wollte dich fragen, ob du mir helfen kannst.', 'Хотел(а) спросить, можешь ли ты мне помочь.'], ['Wir fangen um 9 Uhr an.', 'Начинаем в 9 часов.'], ['Am Abend lade ich alle zum Pizzaessen ein.', 'Вечером приглашаю всех на пиццу.'], ['Ich wäre dir sehr dankbar!', 'Я был(а) бы тебе очень благодарен(на)!']] },

/* ═══════════════════════ DTB B1 — Lesen und Schreiben ═══════════════════════ */
{ id: 'dtb1_lieferung', fmt: 'dtb1mail', area: 'kunden', type: 'form', to: 'person', emoji: '🚚',
  de: 'Kunde: Lieferung kommt zu spät', ru: 'Клиент: доставка опаздывает',
  sit_de: 'Sie arbeiten im Kundenservice der Firma „Büro-Express“. Ihre Firma erhält eine Nachricht von {=einer Kundin|einem Kunden}.',
  sit_ru: 'Ты работаешь в службе поддержки фирмы «Büro-Express». Фирма получила письмо от клиента.',
  mails: [{ from: '{KUNDE}', subj: 'Bestellung 4471 – wo bleiben die Stühle?', text: `Sehr geehrte Damen und Herren,

vor drei Wochen habe ich bei Ihnen zwölf Bürostühle für unser neues Büro bestellt. Auf Ihrer Internetseite stand „Lieferung in 5 Tagen“. Bis heute ist nichts angekommen, und am Telefon erreiche ich niemanden. Am Montag fangen unsere neuen Mitarbeiter an, und wir haben keine Stühle! Bitte sagen Sie mir sofort, was los ist.

Mit freundlichen Grüßen
{KUNDE}` }],
  points: [
    { de: 'Grund für die Verspätung', ru: 'Причина задержки', kw: ['grund', 'hersteller', 'lieferant', 'weil', 'denn', 'maschine'] },
    { de: 'Lösung: neuer Liefertermin, Angebot', ru: 'Решение: новая дата доставки, предложение', kw: ['liefern', 'liefertermin', 'freitag', 'rabatt', 'gutschein', 'prozent'] },
  ],
  model: `{ANREDE},

vielen Dank für Ihre Nachricht. Es tut mir sehr leid, dass Ihre Bürostühle noch nicht angekommen sind. Der Grund für die Verspätung ist ein Problem bei unserem Hersteller: Wegen einer kaputten Maschine konnte er zwei Wochen lang nicht produzieren. Leider haben wir Sie darüber nicht informiert.

Die Stühle sind jetzt fertig, und wir liefern sie am Freitag zwischen 8 und 12 Uhr. Als Entschuldigung bekommen Sie einen Rabatt von 10 Prozent auf Ihre Bestellung. Wenn Sie Fragen haben, rufen Sie mich gern direkt an.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Vielen Dank für Ihre Nachricht.', 'Спасибо за ваше сообщение.'], ['Es tut mir sehr leid, dass …', 'Мне очень жаль, что …'], ['Der Grund für die Verspätung ist …', 'Причина задержки — …'], ['Als Entschuldigung bekommen Sie einen Rabatt von … Prozent.', 'В качестве извинения вы получаете скидку … процентов.']] },

{ id: 'dtb1_techniker', fmt: 'dtb1mail', area: 'kunden', type: 'form', to: 'person', emoji: '🛠️',
  de: 'Kunde: Techniker ist nicht gekommen', ru: 'Клиент: мастер не пришёл',
  sit_de: 'Sie arbeiten bei der Firma „Haustechnik Krüger“. Ihre Firma erhält eine Nachricht von {=einer Kundin|einem Kunden}.',
  sit_ru: 'Ты работаешь в фирме «Haustechnik Krüger». Фирма получила письмо от клиента.',
  mails: [{ from: '{KUNDE}', subj: 'Termin nicht eingehalten', text: `Sehr geehrte Damen und Herren,

gestern hatte ich von 8 bis 12 Uhr einen Termin mit Ihrem Techniker, weil unsere Waschmaschine ausläuft. Ich habe extra einen Tag Urlaub genommen, aber niemand ist gekommen – und niemand hat angerufen. Ich bin sehr verärgert. Wann kommt endlich jemand?

Mit freundlichen Grüßen
{KUNDE}` }],
  points: [
    { de: 'Grund für das Problem', ru: 'Причина проблемы', kw: ['unfall', 'krank', 'grund', 'weil', 'denn', 'stau'] },
    { de: 'Neuer Termin', ru: 'Новая дата', kw: ['termin', 'morgen', 'uhr', 'kommt'] },
  ],
  model: `{ANREDE},

es tut uns sehr leid, dass unser Techniker gestern nicht zu Ihnen gekommen ist. Der Kollege hatte auf dem Weg zu Ihnen einen kleinen Autounfall. Zum Glück ist ihm nichts passiert, aber er konnte den Termin nicht mehr schaffen. Leider haben wir vergessen, Sie anzurufen.

Wir möchten Ihnen gern schon morgen einen neuen Termin anbieten: Unser Techniker Herr Brandt kommt um 8 Uhr zu Ihnen. Wenn Ihnen das nicht passt, rufen Sie uns bitte unter 0221 556677 an. Die Anfahrt ist dieses Mal natürlich kostenlos.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Es tut uns sehr leid, dass …', 'Нам очень жаль, что …'], ['Leider haben wir vergessen, Sie anzurufen.', 'К сожалению, мы забыли вам позвонить.'], ['Wir möchten Ihnen einen neuen Termin anbieten.', 'Мы хотим предложить вам новую дату.'], ['Wenn Ihnen das nicht passt, rufen Sie uns an.', 'Если вам не подходит, позвоните нам.']] },

{ id: 'dtb1_rechnung', fmt: 'dtb1mail', area: 'kunden', type: 'form', to: 'person', emoji: '🧾',
  de: 'Kunde: Rechnung ist falsch', ru: 'Клиент: ошибка в счёте',
  sit_de: 'Sie arbeiten in der Buchhaltung der Gebäudereinigung „Clean & Co“. Ihre Firma erhält eine Nachricht von {=einer Kundin|einem Kunden}.',
  sit_ru: 'Ты работаешь в бухгалтерии клининговой фирмы «Clean & Co». Фирма получила письмо от клиента.',
  mails: [{ from: '{KUNDE}', subj: 'Rechnung März – zu hoher Betrag', text: `Sehr geehrte Damen und Herren,

in Ihrer Rechnung für März haben Sie 20 Stunden Fensterreinigung berechnet. Wir haben aber nur 12 Stunden vereinbart, und Ihre Mitarbeiter waren auch nur zwei Tage bei uns. Bitte prüfen Sie die Rechnung. Bis zur Klärung bezahlen wir nicht.

Mit freundlichen Grüßen
{KUNDE}` }],
  points: [
    { de: 'Grund für den Fehler', ru: 'Причина ошибки', kw: ['fehler', 'verwechselt', 'versehen', 'falsch'] },
    { de: 'Lösung: neue Rechnung', ru: 'Решение: новый счёт', kw: ['neue rechnung', 'korrigiert', 'gutschrift', 'nicht bezahlen'] },
  ],
  model: `{ANREDE},

vielen Dank für Ihren Hinweis. Sie haben völlig recht: In der Rechnung für März ist uns ein Fehler passiert. Eine neue Kollegin hat die Stunden von zwei verschiedenen Kunden verwechselt, deshalb stehen auf Ihrer Rechnung 20 statt 12 Stunden. Das tut mir sehr leid.

Ich habe die Rechnung schon korrigiert und schicke Ihnen die neue Rechnung heute per E-Mail. Den Betrag der alten Rechnung müssen Sie natürlich nicht bezahlen, denn sie ist ab sofort ungültig. Wenn Sie noch Fragen haben, bin ich gern für Sie da.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Vielen Dank für Ihren Hinweis.', 'Спасибо, что сообщили.'], ['Sie haben völlig recht.', 'Вы совершенно правы.'], ['Uns ist ein Fehler passiert.', 'Мы допустили ошибку.'], ['Ich schicke Ihnen die korrigierte Rechnung.', 'Я пришлю вам исправленный счёт.']] },

{ id: 'dtb1_restaurant', fmt: 'dtb1mail', area: 'kunden', type: 'form', to: 'person', emoji: '🍽️',
  de: 'Anfrage: Weihnachtsfeier im Restaurant', ru: 'Запрос: новогодний корпоратив в ресторане',
  sit_de: 'Sie arbeiten im Restaurant „Am Markt“. Das Restaurant erhält eine Anfrage von {=einer Kundin|einem Kunden}.',
  sit_ru: 'Ты работаешь в ресторане «Am Markt». Ресторан получил запрос от клиента.',
  mails: [{ from: '{KUNDE}', subj: 'Weihnachtsfeier für 25 Personen', text: `Sehr geehrte Damen und Herren,

wir möchten am 13. Dezember mit 25 Kolleginnen und Kollegen bei Ihnen unsere Weihnachtsfeier machen. Einige von uns essen kein Fleisch. Können Sie uns ein passendes Menü vorschlagen? Und was kostet das pro Person?

Mit freundlichen Grüßen
{KUNDE}` }],
  points: [
    { de: 'Menüvorschlag (auch vegetarisch)', ru: 'Предложение меню (и вегетарианское)', kw: ['menü', 'vorspeise', 'vegetarisch', 'nachtisch', 'hauptgericht'] },
    { de: 'Preis und Reservierung', ru: 'Цена и бронирование', kw: ['euro', 'pro person', 'reserv', 'kostet'] },
  ],
  model: `{ANREDE},

vielen Dank für Ihre Anfrage. Wir freuen uns, dass Sie Ihre Weihnachtsfeier bei uns machen möchten. Ich schlage Ihnen ein Menü mit drei Gängen vor: Als Vorspeise gibt es eine Kürbissuppe, danach Gänsebraten mit Rotkohl und als Nachtisch Apfelstrudel. Für die vegetarischen Gäste bieten wir statt Gänsebraten eine Gemüselasagne an.

Das Menü kostet 39 Euro pro Person, die Getränke kommen extra. Wenn Ihnen das Angebot gefällt, reserviere ich gern einen Raum für Sie. Bitte bestätigen Sie die Reservierung bis zum 1. Dezember.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Vielen Dank für Ihre Anfrage.', 'Спасибо за ваш запрос.'], ['Ich schlage Ihnen … vor.', 'Предлагаю вам …'], ['Das Menü kostet … Euro pro Person.', 'Меню стоит … евро с человека.'], ['Bitte bestätigen Sie die Reservierung bis zum …', 'Пожалуйста, подтвердите бронь до …']] },

{ id: 'dtb1_pflege', fmt: 'dtb1mail', area: 'kunden', type: 'form', to: 'person', emoji: '🧓',
  de: 'Pflegedienst: Beschwerde einer Angehörigen', ru: 'Служба ухода: жалоба родственника',
  sit_de: 'Sie arbeiten beim ambulanten Pflegedienst „Lebensfreude“. Sie erhalten eine Nachricht von {=der Tochter|dem Sohn} einer Patientin.',
  sit_ru: 'Ты работаешь в службе ухода на дому «Lebensfreude». Пришло письмо от дочери / сына пациентки.',
  mails: [{ from: '{KUNDE}', subj: 'Pflege meiner Mutter', text: `Sehr geehrte Damen und Herren,

Ihre Mitarbeiter kommen jeden Tag zu einer anderen Zeit zu meiner Mutter, Frau Gerda Vogt – mal um 7 Uhr, mal erst um 10 Uhr. Meine Mutter wartet dann mit dem Frühstück und ist sehr unruhig. Außerdem kommt fast jeden Tag eine andere Person. So geht das nicht weiter!

Mit freundlichen Grüßen
{KUNDE}` }],
  points: [
    { de: 'Gründe für das Problem', ru: 'Причины проблемы', kw: ['krank', 'grund', 'personal', 'weil', 'denn'] },
    { de: 'Lösung', ru: 'Решение', kw: ['festes team', 'feste', 'jeden morgen', 'ab montag', 'um 8 uhr'] },
  ],
  model: `{ANREDE},

vielen Dank für Ihre offene Nachricht. Es tut mir leid, dass Ihre Mutter in den letzten Wochen so lange warten musste. Der Grund ist, dass im Moment viele Kolleginnen und Kollegen krank sind. Deshalb mussten wir unsere Touren jeden Tag neu planen.

Ab Montag kommt wieder ein festes Team von zwei Pflegekräften zu Ihrer Mutter, und zwar jeden Morgen um 8 Uhr. Falls es doch einmal später wird, rufen wir Ihre Mutter vorher an, damit sie nicht warten muss. Ich hoffe, dass das Problem so gelöst ist.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Der Grund ist, dass …', 'Причина в том, что …'], ['Deshalb mussten wir …', 'Поэтому нам пришлось …'], ['Ab Montag kommt wieder ein festes Team.', 'С понедельника снова будет приходить постоянная команда.'], ['Falls es später wird, rufen wir vorher an.', 'Если задержимся, позвоним заранее.']] },

{ id: 'dtb1_werkstatt', fmt: 'dtb1mail', area: 'kunden', type: 'form', to: 'person', emoji: '🚘',
  de: 'Werkstatt: Rechnung höher als gesagt', ru: 'Автосервис: счёт больше, чем обещали',
  sit_de: 'Sie arbeiten in der Autowerkstatt „Auto-Service Peters“. Die Werkstatt erhält eine Nachricht von {=einer Kundin|einem Kunden}.',
  sit_ru: 'Ты работаешь в автосервисе «Auto-Service Peters». Пришло письмо от клиента.',
  mails: [{ from: '{KUNDE}', subj: 'Rechnung viel zu hoch', text: `Sehr geehrte Damen und Herren,

letzte Woche habe ich mein Auto bei Ihnen reparieren lassen. Sie haben mir gesagt, dass die Reparatur ungefähr 300 Euro kostet. Jetzt habe ich eine Rechnung über 520 Euro bekommen! Niemand hat mich vorher angerufen. Das finde ich nicht in Ordnung.

Mit freundlichen Grüßen
{KUNDE}` }],
  points: [
    { de: 'Gründe für die höheren Kosten', ru: 'Причины более высокой цены', kw: ['bremsen', 'zusätzlich', 'kaputt', 'weil', 'grund'] },
    { de: 'Angebot für {=die Kundin|den Kunden}', ru: 'Предложение клиенту', kw: ['rabatt', 'prozent', 'nachlass', 'entgegen'] },
  ],
  model: `{ANREDE},

vielen Dank für Ihre Nachricht. Sie haben recht, wir hätten Sie vor der Reparatur anrufen müssen. Bei der Arbeit an Ihrem Auto haben unsere Mechaniker gesehen, dass auch die Bremsen kaputt waren. Deshalb mussten wir zusätzlich neue Bremsscheiben einbauen, sonst wäre das Fahren zu gefährlich gewesen.

Weil wir Sie nicht informiert haben, möchten wir Ihnen entgegenkommen: Sie bekommen einen Rabatt von 15 Prozent auf die ganze Rechnung. Die neue Rechnung schicke ich Ihnen heute zu.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Sie haben recht, wir hätten Sie anrufen müssen.', 'Вы правы, нам следовало вам позвонить.'], ['Deshalb mussten wir zusätzlich …', 'Поэтому нам пришлось дополнительно …'], ['Wir möchten Ihnen entgegenkommen.', 'Мы хотим пойти вам навстречу.'], ['Sie bekommen einen Rabatt von … Prozent.', 'Вы получаете скидку … процентов.']] },

/* ═══════════════════════ DTB B1 — Kurznachricht an Kollegen ═══════════════════════ */
{ id: 'dtb1_schicht', fmt: 'dtb1sms', area: 'kollegen', type: 'inf', emoji: '🔁',
  de: 'Kollege bittet: Schicht übernehmen', ru: 'Коллега просит взять смену',
  sit_de: '{~Eine befreundete Kollegin|Ein befreundeter Kollege}, {NAME}, schreibt Ihnen eine Kurznachricht. Sie können leider nicht.',
  sit_ru: 'Коллега и приятель {NAME} пишет тебе в чате. Ты, к сожалению, не можешь.',
  mails: [{ chat: true, from: '{NAME}', text: 'Hi! Kannst du am Montag meine Frühschicht übernehmen? Ich habe einen wichtigen Termin. 🙏' }],
  points: [
    { de: 'Absage', ru: 'Отказ', kw: ['leider', 'kann nicht', 'geht nicht', 'klappt nicht'] },
    { de: 'Grund', ru: 'Причина', kw: ['weil', 'denn', 'arzt', 'termin', 'muss'] },
    { de: 'Vorschlag', ru: 'Предложение', kw: ['frag', 'vielleicht', 'tauschen', 'übernehme', 'stattdessen'] },
  ],
  model: `Hallo {NAME},

leider kann ich am Montag nicht für dich arbeiten, weil ich um 9 Uhr mit meinem Sohn zum Arzt muss. Das tut mir echt leid! Frag doch mal Jana, sie hat am Montag frei. Oder ich übernehme deine Schicht am Mittwoch, wenn das hilft?

Viele Grüße
{ICH}`,
  phrases: [['Leider kann ich nicht für dich arbeiten, weil …', 'К сожалению, не могу поработать за тебя, потому что …'], ['Das tut mir echt leid!', 'Мне правда жаль!'], ['Frag doch mal …', 'Спроси-ка …'], ['Ich übernehme deine Schicht am …, wenn das hilft.', 'Могу взять твою смену в …, если это поможет.']] },

{ id: 'dtb1_besprechung', fmt: 'dtb1sms', area: 'kollegen', type: 'inf', emoji: '📋',
  de: 'Kollegin krank: Besprechung übernehmen', ru: 'Коллега заболела: провести совещание за неё',
  sit_de: '{~Ihre Kollegin|Ihr Kollege} {NAME} ist krank und schreibt Ihnen eine Kurznachricht.',
  sit_ru: 'Твой(я) коллега {NAME} заболел(а) и пишет тебе в чате.',
  mails: [{ chat: true, from: '{NAME}', text: 'Hallo, ich liege mit Fieber im Bett 🤒. Kannst du heute um 14 Uhr die Teambesprechung für mich machen? Die Präsentation ist auf meinem Rechner.' }],
  points: [
    { de: 'Zusage', ru: 'Согласие', kw: ['klar', 'mache ich', 'kein problem', 'gern', 'natürlich'] },
    { de: 'Frage zur Besprechung', ru: 'Вопрос о совещании', kw: ['ordner', 'passwort', 'datei', 'welche', 'wo finde'] },
    { de: 'Gute Besserung', ru: 'Пожелание выздороветь', kw: ['gute besserung', 'erhol', 'gesund'] },
  ],
  model: `Hallo {NAME},

klar, das mache ich gern! Ich habe aber eine Frage: In welchem Ordner finde ich die Präsentation, und brauche ich ein Passwort für deinen Rechner? Wenn du kurz Zeit hast, schreib es mir bitte. Danach erzähle ich dir, was wir besprochen haben. Gute Besserung!

Liebe Grüße
{ICH}`,
  phrases: [['Klar, das mache ich gern!', 'Конечно, с удовольствием!'], ['In welchem Ordner finde ich …?', 'В какой папке найти …?'], ['Danach erzähle ich dir, was wir besprochen haben.', 'Потом расскажу, что мы обсудили.'], ['Gute Besserung!', 'Выздоравливай!']] },

];

/* общие фразы и структура — по типу письма */
window.LETTER_GUIDE = {
  inf: {
    ru: 'Неофициальное письмо (другу, коллеге, соседу на «ты»)',
    parts: [
      ['Обращение', 'Liebe Anna, / Lieber Tom, / Hallo Max,', 'после обращения запятая, следующая строка — с маленькой буквы!'],
      ['Начало', 'wie geht es dir? · vielen Dank für deine E-Mail! · ich habe tolle Neuigkeiten:', ''],
      ['Основная часть', 'по одному-два предложения на каждый пункт задания', 'обращайся на du: du, dich, dir, dein'],
      ['Конец', 'Ich freue mich auf deine Antwort. · Schreib mir bald! · Bis bald!', ''],
      ['Прощание и подпись', 'Viele Grüße / Liebe Grüße / Alles Liebe + имя', 'без запятой после Grüße'],
    ],
  },
  form: {
    ru: 'Официальное письмо (учреждению, начальнику, преподавателю, арендодателю, клиенту — на «Вы»)',
    parts: [
      ['Обращение', 'Sehr geehrte Frau Becker, / Sehr geehrter Herr Becker, / Sehr geehrte Damen und Herren,', 'geehrte Frau, но geehrter Herr; дальше — с маленькой буквы'],
      ['Начало', 'ich schreibe Ihnen, weil … · vielen Dank für Ihre Nachricht. · hiermit kündige ich …', ''],
      ['Основная часть', 'по одному-два предложения на каждый пункт задания', 'обращайся на Sie: Sie, Ihnen, Ihr — всегда с большой буквы'],
      ['Конец', 'Ich freue mich auf Ihre Antwort. · Vielen Dank im Voraus. · Für Rückfragen stehe ich gern zur Verfügung.', ''],
      ['Прощание и подпись', 'Mit freundlichen Grüßen + имя и фамилия', 'без запятой после Grüßen'],
    ],
  },
};

/* Образцы для уровней A1 и A2 к каждой теме DTZ (B1 — поле model в самом задании).
   Тот же сюжет и те же 4 пункта — проще язык и короче текст. */
window.LETTER_LEVEL_MODELS = {
  dtz_kurs_fehlen: {
    A1: `{ANREDE},

ich kann diese Woche leider nicht in den Kurs kommen. Mein Sohn ist krank. Entschuldigung! Was sind die Hausaufgaben? Bitte schreiben Sie mir. Nächste Woche komme ich wieder.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

leider kann ich diese Woche nicht in den Kurs kommen, weil mein Sohn krank ist. Ich muss zu Hause bleiben. Bitte entschuldigen Sie. Können Sie mir die Hausaufgaben per E-Mail schicken? Dann kann ich zu Hause lernen. Am Montag komme ich wieder in den Kurs.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_kurswechsel: {
    A1: `Sehr geehrte Damen und Herren,

ich möchte in einen anderen Kurs gehen. Ich habe jetzt eine Arbeit. Ab März arbeite ich von 7 bis 15 Uhr, aber mein Kurs ist am Vormittag. Haben Sie einen Kurs am Abend? Bitte geben Sie mir eine Antwort.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

ich besuche den Integrationskurs am Vormittag und möchte gern in einen anderen Kurs wechseln. Ich habe eine neue Stelle gefunden. Ab März arbeite ich von 7 bis 15 Uhr, deshalb kann ich am Vormittag nicht mehr kommen. Gibt es bei Ihnen einen Abendkurs oder einen Kurs am Samstag? Bitte geben Sie mir bald eine Antwort.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_sprachschule: {
    A1: `Sehr geehrte Damen und Herren,

ich möchte einen Computerkurs machen. Ich bin Anfänger. Am Tag arbeite ich, aber abends habe ich Zeit. Haben Sie einen Kurs am Abend oder am Samstag? Wie viel kostet der Kurs?

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

ich interessiere mich für einen Computerkurs. Ich möchte E-Mails schreiben und mit Word arbeiten, weil ich das für meine Arbeit brauche. Leider bin ich noch Anfänger. Unter der Woche arbeite ich bis 17 Uhr. Gibt es auch Kurse am Abend oder am Samstag? Außerdem möchte ich wissen, wie viel der Kurs kostet.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_schule_kind: {
    A1: `{ANREDE},

mein Sohn Leon ist krank. Er hat Fieber und kann bis Freitag leider nicht in die Schule kommen. Bitte schicken Sie mir die Hausaufgaben per E-Mail. Am Montag bringe ich das Attest vom Arzt.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

leider ist mein Sohn Leon aus der Klasse 3b krank. Er hat eine Grippe, und der Arzt sagt, dass er bis Freitag zu Hause bleiben muss. Könnten Sie mir bitte die Hausaufgaben und die Arbeitsblätter per E-Mail schicken? Dann kann Leon zu Hause ein bisschen lernen. Die Bescheinigung vom Arzt bringe ich am Montag.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_schulbefreiung: {
    A1: `{ANREDE},

wir möchten in mein Heimatland fliegen, denn meine Mutter ist sehr krank. Meine Tochter Amira kann deshalb vom 10. bis 17. März nicht in die Schule kommen. Bitte erlauben Sie das. Zu Hause lernen wir mit Amira. Haben Sie Aufgaben für sie?

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

leider ist meine Mutter in meinem Heimatland schwer krank, und wir möchten sie besuchen. Deshalb bitte ich Sie, unsere Tochter Amira aus der Klasse 4a vom 10. bis zum 17. März vom Unterricht zu befreien. Wir lernen in dieser Zeit jeden Tag mit ihr, weil sie nicht zu viel verpassen soll. Können Sie uns bitte die Aufgaben für diese Woche mitgeben?

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_hausaufgaben: {
    A1: `{ANREDE},

mein Sohn Jonas hat gestern keine Hausaufgaben gemacht. Wir waren am Nachmittag beim Arzt, denn seine Schwester war krank. Entschuldigung! Jonas macht die Aufgaben heute und bringt sie morgen mit.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

leider konnte mein Sohn Jonas gestern seine Hausaufgaben nicht machen. Wir waren lange beim Arzt, weil seine kleine Schwester hohes Fieber hatte. Erst am Abend waren wir wieder zu Hause. Bitte entschuldigen Sie das. Jonas macht die Aufgaben heute und bringt sie morgen in die Schule mit.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_kita: {
    A1: `Sehr geehrte Damen und Herren,

wir suchen einen Platz im Kindergarten für unsere Tochter Mila. Sie ist drei Jahre alt und spricht ein bisschen Deutsch. Wir brauchen ab September einen Platz von 8 bis 15 Uhr, denn ich arbeite. Wie viel kostet ein Platz?

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

wir sind im Januar nach Leipzig gezogen und suchen einen Kindergartenplatz für unsere Tochter Mila. Sie ist drei Jahre alt und spricht leider noch nicht viel Deutsch. Ab September mache ich eine Ausbildung, deshalb brauchen wir einen Platz von 8 bis 15 Uhr. Haben Sie noch Plätze frei? Wie viel kostet ein Platz und welche Unterlagen brauchen wir?

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_elternabend: {
    A1: `{ANREDE},

danke für die Einladung zum Elternabend. Leider kann ich am Donnerstag nicht kommen, denn ich muss bis 22 Uhr arbeiten. Bitte schicken Sie mir die Informationen per E-Mail. Haben Sie nächste Woche Zeit für ein Gespräch?

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

vielen Dank für die Einladung zum Elternabend am Donnerstag. Leider kann ich nicht kommen, weil ich an diesem Abend in der Spätschicht arbeiten muss. Das tut mir leid. Könnten Sie mir bitte die wichtigsten Informationen per E-Mail schicken? Ich möchte auch gern mit Ihnen über Leon sprechen. Haben Sie nächste Woche einen Termin für mich?

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_klassenfahrt: {
    A1: `{ANREDE},

meine Tochter Sara möchte im Mai mit ihrer Klasse auf Klassenfahrt fahren. Aber 250 Euro sind für uns zu viel Geld. Mein Mann hat keine Arbeit. Können wir jeden Monat 50 Euro bezahlen? Sara möchte sehr gern mitfahren.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

ich schreibe Ihnen wegen der Klassenfahrt im Mai. Meine Tochter Sara freut sich sehr und möchte unbedingt mitfahren. Leider sind 250 Euro für uns sehr viel Geld, weil mein Mann zurzeit keine Arbeit hat. Kann man den Betrag in Raten bezahlen, zum Beispiel jeden Monat 50 Euro? Oder gibt es Hilfe von der Schule?

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_kuendigung: {
    A1: `{ANREDE},

ich kündige meine Wohnung in der Lindenstraße 8 zum 31. Mai. Im Juni ziehe ich nach Hamburg, denn ich habe dort eine neue Arbeit. Wann kann ich Ihnen die Schlüssel geben? Bitte schreiben Sie mir.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

hiermit kündige ich meine Wohnung in der Lindenstraße 8 zum 31. Mai. Ich habe eine neue Stelle in Hamburg gefunden, deshalb ziehe ich Anfang Juni um. Bitte sagen Sie mir, wann wir einen Termin für die Wohnungsübergabe machen können. Ich kann die Schlüssel auch früher abgeben, wenn Sie einen Nachmieter haben.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_reparatur: {
    A1: `{ANREDE},

leider ist unsere Heizung kaputt. Seit Montag ist es in der Wohnung sehr kalt, und meine Tochter ist krank. Bitte schicken Sie schnell einen Handwerker. Ich bin ab 16 Uhr zu Hause.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

ich wohne in Ihrem Haus in der Gartenstraße 15. Leider funktioniert unsere Heizung nicht mehr. Seit Montag sind alle Heizkörper kalt, und in der Wohnung sind es nur 15 Grad. Meine kleine Tochter ist schon erkältet. Bitte schicken Sie so schnell wie möglich einen Handwerker. Ich bin jeden Tag ab 16 Uhr zu Hause, oder Sie rufen mich an.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_laerm: {
    A1: `{ANREDE},

meine Nachbarn hören jede Nacht sehr laut Musik. Das ist seit drei Wochen so. Ich kann nicht schlafen. Ich habe schon mit den Nachbarn gesprochen, aber es ist immer noch laut. Bitte sprechen Sie mit ihnen.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

ich möchte mich über meine Nachbarn beschweren. Seit drei Wochen hören sie fast jede Nacht bis zwei Uhr laut Musik. Deshalb kann ich nicht schlafen und bin morgens sehr müde. Ich habe schon bei den Nachbarn geklingelt und mit ihnen gesprochen, aber leider hat sich nichts geändert. Könnten Sie bitte mit ihnen sprechen?

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_wohnungsangebot: {
    A1: `{ANREDE},

ich habe Ihre Anzeige gelesen. Die Wohnung ist sehr interessant für uns. Wir sind vier Personen, aber wir haben jetzt nur zwei Zimmer. Wie hoch sind die Nebenkosten? Können wir die Wohnung am Samstag ansehen?

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

ich habe Ihre Anzeige in der Zeitung gelesen und interessiere mich sehr für die Wohnung mit Balkon. Wir sind eine Familie mit zwei Kindern. Zurzeit wohnen wir in nur zwei Zimmern, deshalb suchen wir eine größere Wohnung. Ich habe aber noch zwei Fragen: Wie hoch sind die Nebenkosten und ab wann ist die Wohnung frei? Können wir die Wohnung nächste Woche besichtigen?

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_blumen: {
    A1: `{ANREDE},

wir fahren vom 1. bis 21. August in Urlaub. Können Sie bitte unsere Blumen gießen und die Post aus dem Briefkasten nehmen? Haben Sie Zeit? Dann bringe ich Ihnen am Freitag den Schlüssel. Vielen Dank!

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

wir fahren im August drei Wochen in Urlaub und möchten Sie um einen Gefallen bitten. Könnten Sie vom 1. bis zum 21. August zweimal pro Woche unsere Blumen gießen und den Briefkasten leeren? Das wäre sehr nett, denn sonst wird der Briefkasten zu voll. Wenn Sie Zeit haben, bringe ich Ihnen am Freitag den Schlüssel. Vielen Dank für Ihre Hilfe!

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_reklamation: {
    A1: `Sehr geehrte Damen und Herren,

am 3. März habe ich bei Ihnen eine Kaffeemaschine bestellt. Gestern ist das Paket gekommen, aber die Maschine ist kaputt. Ich möchte eine neue Maschine oder mein Geld zurück. Bitte antworten Sie schnell.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

am 3. März habe ich in Ihrem Online-Shop eine Kaffeemaschine bestellt (Bestellnummer 45821). Gestern ist das Paket angekommen, aber leider ist die Maschine kaputt: Sie funktioniert nicht. Ich möchte die Maschine gern umtauschen. Wenn das nicht geht, möchte ich mein Geld zurück. Bitte geben Sie mir schnell eine Antwort.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_widerruf: {
    A1: `Sehr geehrte Damen und Herren,

am 12. Oktober habe ich an der Haustür einen Handyvertrag unterschrieben. Ich widerrufe den Vertrag. Er ist zu teuer für mich, denn er kostet 39 Euro im Monat. Bitte bestätigen Sie das schriftlich.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

hiermit widerrufe ich den Handyvertrag vom 12. Oktober (Kundennummer 2045-778). Ihr Mitarbeiter war an meiner Haustür und hat mir den Vertrag sehr schnell erklärt. Ich habe aber nicht alles verstanden. Der Vertrag ist für mich zu teuer. Außerdem habe ich schon einen Vertrag bei einer anderen Firma. Bitte bestätigen Sie mir den Widerruf schriftlich.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_abo_kuendigen: {
    A1: `Sehr geehrte Damen und Herren,

ich kündige meinen Vertrag im Fitnessstudio. Meine Mitgliedsnummer ist 10458. Ich ziehe in eine andere Stadt, denn ich habe dort eine neue Arbeit. Bitte bestätigen Sie die Kündigung.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

hiermit kündige ich meine Mitgliedschaft im Fitnessstudio „FitAktiv“ zum nächstmöglichen Termin. Meine Mitgliedsnummer ist 10458. Ich kündige, weil ich Ende des Monats in eine andere Stadt ziehe. Dort gibt es leider kein Studio von Ihnen. Bitte buchen Sie danach kein Geld mehr von meinem Konto ab und bestätigen Sie mir die Kündigung schriftlich.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_bank_adresse: {
    A1: `Sehr geehrte Damen und Herren,

ich bin umgezogen. Meine neue Adresse ist: Rosenweg 12, 50823 Köln. Die alte Adresse war Bahnhofstraße 3. Meine IBAN ist DE12 3705 0198 0012 3456 78. Im Juni brauche ich eine neue Bankkarte. Bitte schicken Sie sie dann an die neue Adresse.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

ich bin am 1. April umgezogen und möchte Ihnen meine neue Adresse mitteilen. Früher habe ich in der Bahnhofstraße 3 gewohnt, jetzt wohne ich im Rosenweg 12, 50823 Köln. Meine IBAN ist DE12 3705 0198 0012 3456 78. Bitte ändern Sie meine Adresse, damit ich alle Briefe bekomme. Meine Bankkarte läuft im Juni ab. Könnten Sie mir die neue Karte dann an die neue Adresse schicken?

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_einspruch: {
    A1: `Sehr geehrte Damen und Herren,

ich lege Einspruch gegen den Bescheid ein (Aktenzeichen 34-2215/24). Mein Auto war am 5. Mai nicht in der Hauptstraße, denn es war vom 3. bis 8. Mai in der Werkstatt. Ich schicke Ihnen eine Kopie von der Rechnung.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

hiermit lege ich Einspruch gegen den Bußgeldbescheid vom 20. Mai ein (Aktenzeichen 34-2215/24). Sie schreiben, dass mein Auto am 5. Mai in der Hauptstraße im Halteverbot stand. Das ist nicht richtig, denn mein Auto war vom 3. bis zum 8. Mai in einer Werkstatt in Bonn. Eine Kopie der Rechnung schicke ich Ihnen mit. Bitte prüfen Sie den Bescheid noch einmal.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_amt_termin: {
    A1: `Sehr geehrte Damen und Herren,

ich habe am 14. November um 9:30 Uhr einen Termin bei Ihnen. Leider kann ich nicht kommen, denn ich habe an diesem Tag meine Deutschprüfung. Bitte geben Sie mir einen neuen Termin. Welche Dokumente muss ich mitbringen?

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

am 14. November um 9:30 Uhr habe ich einen Termin bei Ihnen, weil ich meine Aufenthaltserlaubnis verlängern muss. Leider kann ich an diesem Tag nicht kommen, denn ich habe genau dann meine Deutschprüfung. Könnten Sie mir bitte einen neuen Termin geben? Ab dem 16. November habe ich vormittags Zeit. Welche Unterlagen muss ich mitbringen?

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_minijob: {
    A1: `Sehr geehrte Damen und Herren,

ich habe Ihren Aushang im Supermarkt gesehen und möchte am Wochenende bei Ihnen arbeiten. In meinem Heimatland habe ich in einem Café gearbeitet. Unter der Woche habe ich einen Deutschkurs, aber am Samstag und Sonntag habe ich Zeit. Meine Telefonnummer ist 0157 2233445.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

im Supermarkt habe ich Ihren Aushang gesehen und möchte mich als Aushilfe bewerben. Ich bin 29 Jahre alt und mache zurzeit einen Deutschkurs. In meinem Heimatland habe ich drei Jahre in einem Café gearbeitet, deshalb kenne ich die Arbeit an der Kasse. Am Samstag und Sonntag kann ich ab 6 Uhr arbeiten. Sie erreichen mich unter 0157 2233445 oder per E-Mail.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_praktikum: {
    A1: `Sehr geehrte Damen und Herren,

mein Name ist {ICHV}. Ich bin 24 Jahre alt und wohne in Köln. Ich möchte ein Praktikum in Ihrem Restaurant machen, denn ich möchte Koch werden. Ab September habe ich Zeit. Haben Sie einen Termin für ein Gespräch?

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

im Internet habe ich gelesen, dass Sie Praktikanten suchen. Ich heiße {ICHV}, bin 24 Jahre alt und wohne seit zwei Jahren in Köln. In meinem Heimatland habe ich schon in einer Küche gearbeitet. Ich interessiere mich für das Praktikum, weil ich später Koch werden möchte. Ab dem 1. September habe ich Zeit. Über einen Termin für ein Gespräch freue ich mich sehr.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_urlaub: {
    A1: `{ANREDE},

ich möchte vom 8. bis 19. Juli Urlaub nehmen, denn meine Schwester heiratet in meinem Heimatland. Meine Kollegin Frau Lehmann macht in dieser Zeit meine Schichten. Ist das möglich? Bitte geben Sie mir bald eine Antwort.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

ich möchte gern vom 8. bis zum 19. Juli Urlaub nehmen. Meine Schwester heiratet am 12. Juli in meinem Heimatland, und die ganze Familie kommt zur Hochzeit. Deshalb möchte ich unbedingt dabei sein. Meine Kollegin Frau Lehmann kann in dieser Zeit meine Schichten übernehmen. Können Sie mir bitte sagen, ob der Urlaub möglich ist?

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_krankmeldung: {
    A1: `{ANREDE},

ich bin krank und habe Fieber. Leider kann ich heute nicht zur Arbeit kommen. Ich muss bis Freitag zu Hause bleiben. Die Krankmeldung vom Arzt schicke ich per Post. Kann mein Kollege Herr Yilmaz am Mittwoch meinen Termin übernehmen?

Mit freundlichen Grüßen
{ICHV}`,
    A2: `{ANREDE},

leider kann ich heute nicht zur Arbeit kommen, weil ich krank bin. Seit gestern habe ich hohes Fieber. Heute Morgen war ich beim Arzt, und er hat mich bis Freitag krankgeschrieben. Die Krankmeldung schicke ich Ihnen per Post. Am Mittwoch habe ich einen Termin mit der Firma Kraus. Kann mein Kollege Herr Yilmaz den Termin übernehmen?

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_arzt: {
    A1: `Sehr geehrte Damen und Herren,

ich habe morgen um 10 Uhr einen Termin bei Dr. Hartmann. Leider kann ich nicht kommen, denn meine Tochter ist krank. Haben Sie nächste Woche einen neuen Termin für mich? Mein Zahn tut immer noch weh.

Mit freundlichen Grüßen
{ICHV}`,
    A2: `Sehr geehrte Damen und Herren,

ich habe morgen um 10 Uhr einen Termin bei Dr. Hartmann. Leider muss ich den Termin absagen, weil meine Tochter krank ist und ich mit ihr zum Kinderarzt gehen muss. Könnten Sie mir bitte einen neuen Termin geben? Nächste Woche habe ich jeden Tag ab 14 Uhr Zeit. Mein Zahn tut noch weh, deshalb brauche ich bald einen Termin.

Mit freundlichen Grüßen
{ICHV}`,
  },
  dtz_einladung: {
    A1: `{LIEBE} {NAME},

wir haben jetzt eine Wohnung mit Garten! Am Samstag um 17 Uhr machen wir ein Grillfest, und ich lade dich ein. Die Adresse ist Ahornweg 7. Wir haben Fleisch und Getränke, aber kannst du einen Salat mitbringen? Bitte sag mir bis Mittwoch Bescheid.

Viele Grüße
{ICH}`,
    A2: `{LIEBE} {NAME},

wie geht es dir? Wir sind letzten Monat in eine Wohnung mit Garten umgezogen! Deshalb machen wir am Samstag, dem 15. Juni, ein Grillfest, und ich lade dich herzlich ein. Wir fangen um 17 Uhr an, die Adresse ist Ahornweg 7. Kannst du vielleicht einen Salat mitbringen? Sag mir bitte bis Mittwoch Bescheid, ob du kommen kannst.

Viele Grüße
{ICH}`,
  },
  dtz_zusage: {
    A1: `{LIEBE} {NAME},

danke für deine Einladung! Ich komme sehr gern zu deiner Party. Soll ich einen Kuchen oder einen Salat mitbringen? Und wie komme ich zu dir? Fährt ein Bus?

Viele Grüße
{ICH}`,
    A2: `{LIEBE} {NAME},

vielen Dank für deine Einladung! Ich komme sehr gern, denn wir haben uns lange nicht gesehen. Soll ich etwas mitbringen? Ich kann zum Beispiel einen Kuchen backen. Wenn du möchtest, helfe ich dir auch beim Vorbereiten. Wie komme ich am besten zu dir? Gibt es bei dir Parkplätze, oder soll ich mit dem Bus kommen?

Viele Grüße
{ICH}`,
  },
  dtz_hochzeit: {
    A1: `{LIEBE} {NAME},

herzlichen Glückwunsch zu deiner Hochzeit! Danke für deine Einladung. Leider kann ich am 14. Juni nicht kommen, denn ich habe eine Prüfung. Das tut mir sehr leid. Wollen wir danach zusammen essen gehen?

Alles Liebe
{ICH}`,
    A2: `{LIEBE} {NAME},

herzlichen Glückwunsch zu deiner Hochzeit! Ich freue mich sehr für euch und danke dir für die Einladung. Leider kann ich am 14. Juni nicht kommen, weil ich an diesem Tag meine Prüfung habe. Das tut mir wirklich leid! Ich schicke euch ein kleines Geschenk. Wollen wir nach der Prüfung zusammen essen gehen? Dann kannst du mir die Fotos zeigen.

Alles Liebe
{ICH}`,
  },
  dtz_neue_stadt: {
    A1: `{LIEBE} {NAME},

ich wohne jetzt in Freiburg, denn ich mache hier eine Ausbildung. Meine Wohnung ist klein, aber hell. Die Stadt gefällt mir gut, es gibt viele Parks. Kommst du mich besuchen?

Liebe Grüße
{ICH}`,
    A2: `{LIEBE} {NAME},

entschuldige, dass ich so lange nicht geschrieben habe! Vor zwei Monaten bin ich nach Freiburg gezogen, weil ich hier eine Ausbildung mache. Meine Wohnung ist klein, aber hell und hat einen Balkon. Die Stadt gefällt mir sehr gut, es gibt viele Parks. Leider kenne ich noch nicht viele Leute. Hast du Lust, mich zu besuchen?

Liebe Grüße
{ICH}`,
  },
  dtz_umzug_hilfe: {
    A1: `{LIEBE} {NAME},

ich habe eine neue Wohnung und ziehe am Samstag um. Kannst du mir helfen? Wir fangen um 9 Uhr an. Du hast ein Auto, oder? Dann können wir die Kartons transportieren. Am Abend gibt es Pizza für alle!

Viele Grüße
{ICH}`,
    A2: `{LIEBE} {NAME},

wie geht es dir? Ich habe endlich eine größere Wohnung gefunden und ziehe am Samstag, dem 3. Juni, um. Kannst du mir vielleicht helfen? Wir fangen um 9 Uhr an. Du hast doch ein Auto, deshalb könnten wir die Kartons zusammen transportieren. Außerdem brauche ich Hilfe beim Aufbau von meinem Schrank. Am Abend lade ich alle zum Pizzaessen ein!

Viele Grüße
{ICH}`,
  },
};
