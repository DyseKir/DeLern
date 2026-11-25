/* ══════════════════════════════════════════════════════════════
   ПИСЬМА (Schreiben) — задания в формате официальных экзаменов:
     Goethe-Zertifikat A1 (Schreiben Teil 2), A2 (Teil 1 — SMS другу, Teil 2 — e-mail),
     B1 (Teil 1 — личное письмо ~80 слов, Teil 3 — официальное ~40 слов),
     telc / DTZ (письмо по 4 пунктам, ~80 слов).
   type: 'inf' — неофициальное (du), 'form' — официальное (Sie).
   to: 'person' — конкретному человеку (Frau/Herr …), 'org' — организации (Sehr geehrte Damen und Herren).
   points[].kw — основы слов (в нижнем регистре), по которым проверка ищет, раскрыт ли пункт.
   В текстах подставляются: {LIEBE} {NAME} — друг/подруга, {ANREDE} {NN} — адресат официального письма,
   {ICH} — имя автора, {ICHV} — имя и фамилия автора.
══════════════════════════════════════════════════════════════ */
window.LETTER_TASKS = [
/* ─────────── A1 ─────────── */
{ id: 'a1_geburtstag', level: 'A1', type: 'inf', exam: 'Goethe A1 · Schreiben Teil 2', words: [25, 40], emoji: '🎂',
  de: 'Einladung zum Geburtstag', ru: 'Приглашение на день рождения',
  sit_de: 'Sie haben am Samstag Geburtstag und machen eine Party. Schreiben Sie Ihrem Freund / Ihrer Freundin {NAME} eine E-Mail.',
  sit_ru: 'В субботу у тебя день рождения, ты устраиваешь вечеринку. Напиши другу / подруге {NAME}.',
  points: [
    { de: 'Wann ist die Party?', ru: 'Когда вечеринка?', kw: ['samstag', 'uhr', 'abend', 'sonntag', 'freitag', 'morgen', 'am '] },
    { de: 'Wo ist die Party?', ru: 'Где вечеринка?', kw: ['bei mir', 'wohnung', 'garten', 'café', 'cafe', 'restaurant', 'zu hause', 'straße', 'in der', 'im '] },
    { de: 'Was soll {NAME} mitbringen?', ru: 'Что {NAME} должен(на) принести?', kw: ['mitbringen', 'bring', 'salat', 'kuchen', 'getränk', 'musik', 'cola', 'saft'] },
  ],
  model: `{LIEBE} {NAME},

am Samstag habe ich Geburtstag und ich mache eine Party. Die Party beginnt um 19 Uhr bei mir zu Hause in der Gartenstraße 5. Kannst du bitte einen Salat mitbringen? Ich freue mich auf dich!

Viele Grüße
{ICH}`,
  phrases: [['Ich habe am … Geburtstag.', 'У меня … день рождения.'], ['Die Party beginnt um … Uhr.', 'Вечеринка начинается в … часов.'], ['Kannst du bitte … mitbringen?', 'Можешь, пожалуйста, принести …?'], ['Ich freue mich auf dich!', 'Жду тебя! (Радуюсь тебе)']] },

{ id: 'a1_absage', level: 'A1', type: 'inf', exam: 'Goethe A1 · Schreiben Teil 2', words: [25, 40], emoji: '🙁',
  de: 'Treffen absagen', ru: 'Отменить встречу',
  sit_de: 'Sie wollten heute mit {NAME} ins Kino gehen, aber Sie können nicht. Schreiben Sie {NAME} eine Nachricht.',
  sit_ru: 'Вы с {NAME} хотели сегодня пойти в кино, но ты не можешь. Напиши сообщение.',
  points: [
    { de: 'Sagen Sie ab.', ru: 'Откажись (не можешь прийти).', kw: ['kann nicht', 'leider', 'nicht kommen', 'keine zeit', 'absagen', 'schaffe es nicht'] },
    { de: 'Warum?', ru: 'Почему?', kw: ['weil', 'denn', 'krank', 'arbeiten', 'muss', 'kopfschmerzen', 'besuch', 'termin'] },
    { de: 'Machen Sie einen neuen Termin.', ru: 'Предложи новый день.', kw: ['morgen', 'nächste', 'samstag', 'sonntag', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'wochenende', 'andermal', 'neuen termin'] },
  ],
  model: `{LIEBE} {NAME},

leider kann ich heute nicht ins Kino kommen. Ich bin krank und habe Fieber. Hast du am Samstag Zeit? Dann können wir zusammen den Film sehen. Ruf mich bitte an!

Liebe Grüße
{ICH}`,
  phrases: [['Leider kann ich heute nicht kommen.', 'К сожалению, сегодня я не могу прийти.'], ['Ich bin krank.', 'Я болен(льна).'], ['Hast du am … Zeit?', 'У тебя есть время в …?'], ['Ruf mich bitte an!', 'Позвони мне, пожалуйста!']] },

{ id: 'a1_wohnung', level: 'A1', type: 'inf', exam: 'Goethe A1 · Schreiben Teil 2', words: [25, 40], emoji: '🏠',
  de: 'Meine neue Wohnung', ru: 'Моя новая квартира',
  sit_de: 'Sie haben eine neue Wohnung. Schreiben Sie {NAME} eine E-Mail.',
  sit_ru: 'У тебя новая квартира. Напиши {NAME}.',
  points: [
    { de: 'Wo ist die Wohnung?', ru: 'Где квартира?', kw: ['in der', 'im zentrum', 'straße', 'stadt', 'nähe', 'bahnhof', 'park', 'liegt'] },
    { de: 'Wie ist die Wohnung?', ru: 'Какая квартира?', kw: ['groß', 'klein', 'zimmer', 'hell', 'schön', 'balkon', 'küche', 'quadratmeter', 'm²'] },
    { de: 'Laden Sie {NAME} ein.', ru: 'Пригласи {NAME}.', kw: ['besuch', 'komm', 'einladen', 'lade', 'zeit'] },
  ],
  model: `{LIEBE} {NAME},

ich habe jetzt eine neue Wohnung! Sie liegt im Zentrum, in der Nähe vom Bahnhof. Die Wohnung hat drei Zimmer, eine Küche und einen Balkon. Sie ist sehr hell. Kommst du mich am Sonntag besuchen?

Viele Grüße
{ICH}`,
  phrases: [['Die Wohnung liegt im Zentrum / in der Nähe von …', 'Квартира находится в центре / рядом с …'], ['Sie hat … Zimmer und einen Balkon.', 'В ней … комнаты и балкон.'], ['Kommst du mich besuchen?', 'Придёшь ко мне в гости?']] },

{ id: 'a1_sprachkurs', level: 'A1', type: 'form', to: 'org', exam: 'Goethe A1 · Schreiben Teil 2', words: [25, 40], emoji: '🏫',
  de: 'Anfrage an eine Sprachschule', ru: 'Запрос в языковую школу',
  sit_de: 'Sie möchten einen Deutschkurs machen. Schreiben Sie an die Sprachschule „Lingua“.',
  sit_ru: 'Ты хочешь пойти на курс немецкого. Напиши в языковую школу «Lingua».',
  points: [
    { de: 'Welcher Kurs? (Niveau)', ru: 'Какой курс? (уровень)', kw: ['kurs', 'a1', 'a2', 'anfänger', 'niveau', 'deutschkurs'] },
    { de: 'Wann haben Sie Zeit?', ru: 'Когда у тебя есть время?', kw: ['abend', 'vormittag', 'nachmittag', 'morgens', 'abends', 'zeit', 'montag', 'wochenende', 'uhr'] },
    { de: 'Fragen Sie nach dem Preis.', ru: 'Спроси о цене.', kw: ['kostet', 'preis', 'kosten', 'euro', 'wie viel', 'wieviel'] },
  ],
  model: `Sehr geehrte Damen und Herren,

ich möchte einen Deutschkurs für Anfänger (A1) machen. Ich arbeite am Tag, deshalb habe ich nur abends Zeit. Haben Sie einen Abendkurs? Wie viel kostet der Kurs?

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich möchte einen Deutschkurs machen.', 'Я хочу записаться на курс немецкого.'], ['Ich habe nur abends Zeit.', 'У меня есть время только вечером.'], ['Wie viel kostet der Kurs?', 'Сколько стоит курс?'], ['Mit freundlichen Grüßen', 'С уважением']] },

{ id: 'a1_hotel', level: 'A1', type: 'form', to: 'org', exam: 'Goethe A1 · Schreiben Teil 2', words: [25, 40], emoji: '🏨',
  de: 'Hotelzimmer reservieren', ru: 'Забронировать номер в отеле',
  sit_de: 'Sie fahren nach Hamburg und brauchen ein Hotelzimmer. Schreiben Sie an das Hotel „Seeblick“.',
  sit_ru: 'Ты едешь в Гамбург, нужен номер. Напиши в отель «Seeblick».',
  points: [
    { de: 'Wann kommen Sie? Wie lange bleiben Sie?', ru: 'Когда приезжаешь и на сколько?', kw: ['vom', 'bis', 'nacht', 'nächte', 'tage', 'mai', 'juni', 'juli', 'august', 'datum', 'am '] },
    { de: 'Für wie viele Personen?', ru: 'На сколько человек?', kw: ['person', 'doppelzimmer', 'einzelzimmer', 'zwei', 'drei', 'für mich', 'familie'] },
    { de: 'Fragen Sie nach dem Frühstück.', ru: 'Спроси о завтраке.', kw: ['frühstück'] },
  ],
  model: `Sehr geehrte Damen und Herren,

ich möchte vom 12. bis 14. Mai ein Doppelzimmer reservieren. Wir sind zwei Personen. Ist das Frühstück im Preis inklusive? Bitte schicken Sie mir eine Antwort.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich möchte ein Zimmer reservieren.', 'Я хочу забронировать номер.'], ['vom 12. bis 14. Mai', 'с 12 по 14 мая'], ['Ist das Frühstück inklusive?', 'Завтрак включён?']] },

/* ─────────── A2 ─────────── */
{ id: 'a2_verspaetung', level: 'A2', type: 'inf', exam: 'Goethe A2 · Schreiben Teil 1 (SMS)', words: [20, 35], emoji: '⏰',
  de: 'Ich komme später', ru: 'Я опаздываю',
  sit_de: 'Sie sind mit {NAME} vor dem Kino verabredet, aber Sie kommen zu spät. Schreiben Sie eine SMS an {NAME}.',
  sit_ru: 'Ты договорился(ась) встретиться с {NAME} у кино, но опаздываешь. Напиши SMS.',
  points: [
    { de: 'Entschuldigen Sie sich.', ru: 'Извинись.', kw: ['tut mir leid', 'entschuldig', 'sorry', 'leider'] },
    { de: 'Warum kommen Sie später?', ru: 'Почему опаздываешь?', kw: ['weil', 'denn', 'bus', 'zug', 'stau', 'verpasst', 'arbeit', 'verspätung', 'bahn'] },
    { de: 'Wann sind Sie da?', ru: 'Когда будешь на месте?', kw: ['minuten', 'uhr', 'gleich', 'bin um', 'halbe stunde', 'viertel'] },
  ],
  model: `Hallo {NAME}, es tut mir leid, aber ich komme später. Mein Bus hat Verspätung. Ich bin in 20 Minuten da. Kannst du schon die Karten kaufen? Bis gleich, {ICH}`,
  phrases: [['Es tut mir leid, aber ich komme später.', 'Прости, но я опоздаю.'], ['Mein Bus hat Verspätung.', 'Мой автобус опаздывает.'], ['Ich bin in 20 Minuten da.', 'Буду через 20 минут.'], ['Bis gleich!', 'До скорого!']] },

{ id: 'a2_umzug_hilfe', level: 'A2', type: 'inf', exam: 'Goethe A2 · Schreiben Teil 1 (SMS)', words: [20, 35], emoji: '📦',
  de: 'Hilfe beim Umzug', ru: 'Помощь с переездом',
  sit_de: 'Sie ziehen am Wochenende um. Schreiben Sie eine SMS an {NAME} und bitten Sie um Hilfe.',
  sit_ru: 'На выходных ты переезжаешь. Напиши SMS {NAME} и попроси помочь.',
  points: [
    { de: 'Wann ziehen Sie um?', ru: 'Когда переезд?', kw: ['samstag', 'sonntag', 'wochenende', 'uhr', 'am '] },
    { de: 'Was soll {NAME} machen?', ru: 'Что {NAME} должен(на) сделать?', kw: ['tragen', 'helfen', 'auto', 'kisten', 'möbel', 'schrank', 'packen', 'fahren'] },
    { de: 'Bedanken Sie sich / machen Sie ein Angebot.', ru: 'Поблагодари / предложи что-то взамен.', kw: ['danke', 'pizza', 'einladen', 'lade', 'essen', 'dafür', 'bier'] },
  ],
  model: `Hallo {NAME}, ich ziehe am Samstag um. Kannst du mir um 10 Uhr helfen? Ich brauche Hilfe beim Tragen der Möbel. Danach lade ich dich zum Pizzaessen ein. Danke und bis bald! {ICH}`,
  phrases: [['Ich ziehe am Samstag um.', 'Я переезжаю в субботу.'], ['Kannst du mir helfen?', 'Можешь мне помочь?'], ['Danach lade ich dich zum Essen ein.', 'Потом приглашаю тебя поесть.']] },

{ id: 'a2_geschenk', level: 'A2', type: 'inf', exam: 'Goethe A2 · Schreiben Teil 1 (SMS)', words: [20, 35], emoji: '🎁',
  de: 'Geschenk für eine Kollegin', ru: 'Подарок для коллеги',
  sit_de: 'Ihre Kollegin hat bald Geburtstag. Sie möchten mit {NAME} zusammen ein Geschenk kaufen. Schreiben Sie {NAME} eine SMS.',
  sit_ru: 'У коллеги скоро день рождения. Ты хочешь вместе с {NAME} купить подарок. Напиши SMS.',
  points: [
    { de: 'Was möchten Sie kaufen?', ru: 'Что хочешь купить?', kw: ['buch', 'blumen', 'gutschein', 'tasche', 'schal', 'kaufen', 'geschenk'] },
    { de: 'Wann gehen Sie einkaufen?', ru: 'Когда пойдёте за покупками?', kw: ['morgen', 'uhr', 'nach der arbeit', 'samstag', 'freitag', 'mittagspause', 'heute'] },
    { de: 'Wie viel Geld gibt jeder?', ru: 'Сколько денег даёт каждый?', kw: ['euro', '€', 'geld', 'jeder', 'zahlen', 'kostet'] },
  ],
  model: `Hallo {NAME}, Anna hat am Freitag Geburtstag. Wollen wir ihr zusammen ein Buch kaufen? Wir können morgen nach der Arbeit in die Buchhandlung gehen. Jeder gibt 15 Euro. Hast du Zeit? LG {ICH}`,
  phrases: [['Wollen wir … zusammen kaufen?', 'Давай вместе купим …?'], ['Wir können morgen nach der Arbeit … gehen.', 'Можем завтра после работы сходить …'], ['Jeder gibt 15 Euro.', 'Каждый даёт по 15 евро.']] },

{ id: 'a2_krank_kurs', level: 'A2', type: 'form', to: 'person', exam: 'Goethe A2 · Schreiben Teil 2', words: [30, 45], emoji: '🤒',
  de: 'Krank — E-Mail an die Kursleitung', ru: 'Болею — письмо преподавателю',
  sit_de: 'Sie sind krank und können morgen nicht zum Deutschkurs kommen. Schreiben Sie an Ihre Kursleitung ({NN}).',
  sit_ru: 'Ты болеешь и завтра не придёшь на курс. Напиши преподавателю ({NN}).',
  points: [
    { de: 'Sagen Sie, dass Sie nicht kommen.', ru: 'Скажи, что не придёшь.', kw: ['nicht kommen', 'kann nicht', 'leider', 'nicht zum kurs', 'fehlen'] },
    { de: 'Warum?', ru: 'Почему?', kw: ['krank', 'fieber', 'erkältet', 'grippe', 'arzt', 'weil', 'denn'] },
    { de: 'Fragen Sie nach den Hausaufgaben.', ru: 'Спроси о домашнем задании.', kw: ['hausaufgabe', 'aufgaben', 'material', 'unterlagen', 'übungen'] },
  ],
  model: `{ANREDE},

leider kann ich morgen nicht zum Deutschkurs kommen. Ich bin krank und habe Fieber. Der Arzt sagt, ich muss drei Tage im Bett bleiben. Könnten Sie mir bitte die Hausaufgaben schicken?

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Leider kann ich morgen nicht zum Kurs kommen.', 'К сожалению, завтра я не смогу прийти на курс.'], ['Ich bin krank und habe Fieber.', 'Я болею, у меня температура.'], ['Könnten Sie mir bitte die Hausaufgaben schicken?', 'Не могли бы вы прислать домашнее задание?']] },

{ id: 'a2_chef_termin', level: 'A2', type: 'form', to: 'person', exam: 'Goethe A2 · Schreiben Teil 2', words: [30, 45], emoji: '💼',
  de: 'Früher gehen — E-Mail an den Chef', ru: 'Уйти пораньше — письмо начальнику',
  sit_de: 'Sie haben morgen einen Termin beim Arzt und müssen früher gehen. Schreiben Sie an Ihre Chefin / Ihren Chef ({NN}).',
  sit_ru: 'Завтра у тебя приём у врача, нужно уйти раньше. Напиши начальнику ({NN}).',
  points: [
    { de: 'Warum schreiben Sie?', ru: 'Зачем пишешь?', kw: ['früher gehen', 'früher weg', 'eher gehen', 'früher nach hause', 'gehen'] },
    { de: 'Wann ist der Termin?', ru: 'Когда приём?', kw: ['uhr', 'morgen', 'termin', 'arzt'] },
    { de: 'Machen Sie einen Vorschlag (z. B. die Zeit nachholen).', ru: 'Предложи решение (например, отработать).', kw: ['nachholen', 'länger', 'früher kommen', 'freitag', 'übermorgen', 'arbeite', 'nacharbeiten'] },
  ],
  model: `{ANREDE},

morgen habe ich um 15 Uhr einen Termin beim Arzt. Darf ich deshalb schon um 14 Uhr gehen? Die zwei Stunden kann ich am Freitag nachholen: Ich arbeite dann bis 18 Uhr.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Darf ich morgen früher gehen?', 'Можно мне завтра уйти пораньше?'], ['Ich habe einen Termin beim Arzt.', 'У меня приём у врача.'], ['Die Stunden kann ich am Freitag nachholen.', 'Эти часы я могу отработать в пятницу.']] },

{ id: 'a2_einladung_annehmen', level: 'A2', type: 'inf', exam: 'Goethe A2 · Schreiben Teil 2', words: [30, 45], emoji: '🎉',
  de: 'Einladung annehmen', ru: 'Принять приглашение',
  sit_de: '{NAME} hat Sie zu einem Grillfest eingeladen. Antworten Sie {NAME}.',
  sit_ru: '{NAME} пригласил(а) тебя на барбекю. Ответь.',
  points: [
    { de: 'Bedanken Sie sich.', ru: 'Поблагодари.', kw: ['danke', 'dank'] },
    { de: 'Sagen Sie zu.', ru: 'Согласись прийти.', kw: ['komme gern', 'gerne', 'komme', 'bin dabei', 'natürlich'] },
    { de: 'Fragen Sie, was Sie mitbringen sollen.', ru: 'Спроси, что принести.', kw: ['mitbringen', 'bringen', 'soll ich'] },
  ],
  model: `{LIEBE} {NAME},

vielen Dank für deine Einladung! Ich komme sehr gern zu deinem Grillfest. Soll ich etwas mitbringen? Ich kann zum Beispiel einen Kartoffelsalat machen oder Getränke kaufen. Schreib mir einfach!

Liebe Grüße
{ICH}`,
  phrases: [['Vielen Dank für deine Einladung!', 'Спасибо за приглашение!'], ['Ich komme sehr gern.', 'Я с удовольствием приду.'], ['Soll ich etwas mitbringen?', 'Мне что-нибудь принести?']] },

{ id: 'a2_heizung', level: 'A2', type: 'form', to: 'person', exam: 'Goethe A2 · Schreiben Teil 2', words: [30, 45], emoji: '🥶',
  de: 'Die Heizung ist kaputt', ru: 'Сломалось отопление',
  sit_de: 'In Ihrer Wohnung funktioniert die Heizung nicht. Schreiben Sie an Ihre Vermieterin / Ihren Vermieter ({NN}).',
  sit_ru: 'В квартире не работает отопление. Напиши арендодателю ({NN}).',
  points: [
    { de: 'Was ist das Problem?', ru: 'В чём проблема?', kw: ['heizung', 'kaputt', 'funktioniert nicht', 'kalt', 'warmwasser'] },
    { de: 'Seit wann?', ru: 'С какого времени?', kw: ['seit', 'gestern', 'tagen', 'woche', 'montag'] },
    { de: 'Bitten Sie um einen Termin mit dem Handwerker.', ru: 'Попроси прислать мастера.', kw: ['handwerker', 'techniker', 'reparieren', 'termin', 'schicken', 'kommen'] },
  ],
  model: `{ANREDE},

in meiner Wohnung funktioniert die Heizung nicht. Das Problem gibt es schon seit Montag und es ist jetzt sehr kalt. Können Sie bitte schnell einen Handwerker schicken? Ich bin jeden Tag ab 16 Uhr zu Hause.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Die Heizung funktioniert nicht.', 'Отопление не работает.'], ['Das Problem gibt es seit Montag.', 'Проблема с понедельника.'], ['Können Sie bitte einen Handwerker schicken?', 'Не могли бы вы прислать мастера?']] },

{ id: 'a2_urlaub_karte', level: 'A2', type: 'inf', exam: 'Goethe A2 · Schreiben Teil 2', words: [30, 45], emoji: '🏖️',
  de: 'Grüße aus dem Urlaub', ru: 'Привет из отпуска',
  sit_de: 'Sie sind im Urlaub. Schreiben Sie {NAME} eine Karte.',
  sit_ru: 'Ты в отпуске. Напиши {NAME} открытку.',
  points: [
    { de: 'Wo sind Sie?', ru: 'Где ты?', kw: ['in ', 'am meer', 'see', 'berge', 'italien', 'spanien', 'hotel', 'bin hier'] },
    { de: 'Wie ist das Wetter?', ru: 'Какая погода?', kw: ['wetter', 'sonne', 'warm', 'regnet', 'grad', 'heiß', 'kalt'] },
    { de: 'Was haben Sie schon gemacht?', ru: 'Что ты уже делал(а)?', kw: ['habe', 'bin', 'gestern', 'gemacht', 'besucht', 'geschwommen', 'gewandert', 'gegessen'] },
  ],
  model: `{LIEBE} {NAME},

viele Grüße aus Italien! Wie geht es dir? Ich bin seit einer Woche am Meer. Das Wetter ist super, jeden Tag scheint die Sonne. Gestern habe ich eine Bootstour gemacht und heute bin ich viel geschwommen. Das Essen ist auch fantastisch!

Bis bald
{ICH}`,
  phrases: [['Viele Grüße aus …!', 'Привет из …!'], ['Das Wetter ist super, die Sonne scheint.', 'Погода отличная, светит солнце.'], ['Gestern habe ich … gemacht.', 'Вчера я делал(а) …']] },

/* ─────────── B1 ─────────── */
{ id: 'b1_neue_stadt', level: 'B1', type: 'inf', exam: 'Goethe B1 · Schreiben Teil 1', words: [70, 100], emoji: '🌆',
  de: 'Umzug in eine neue Stadt', ru: 'Переезд в новый город',
  sit_de: 'Sie sind vor einem Monat in eine andere Stadt umgezogen. Schreiben Sie {NAME} eine E-Mail.',
  sit_ru: 'Месяц назад ты переехал(а) в другой город. Напиши {NAME}.',
  points: [
    { de: 'Beschreiben Sie: Wie ist die neue Stadt / Wohnung?', ru: 'Опиши новый город / квартиру.', kw: ['stadt', 'wohnung', 'groß', 'klein', 'schön', 'zentrum', 'park'] },
    { de: 'Begründen Sie: Warum sind Sie umgezogen?', ru: 'Объясни, почему переехал(а).', kw: ['weil', 'denn', 'arbeit', 'job', 'stelle', 'studium', 'deshalb'] },
    { de: 'Machen Sie einen Vorschlag für ein Treffen.', ru: 'Предложи встретиться.', kw: ['besuch', 'treffen', 'komm', 'wochenende', 'vorschlag', 'wie wäre', 'hast du lust'] },
  ],
  model: `{LIEBE} {NAME},

wie geht es dir? Ich habe mich lange nicht gemeldet, weil ich so viel zu tun hatte. Wie du weißt, bin ich vor einem Monat nach Leipzig umgezogen. Ich habe hier eine neue Stelle in einem Krankenhaus bekommen, deshalb musste ich umziehen. Die Stadt gefällt mir sehr: Es gibt viele Parks, Cafés und Museen. Meine Wohnung ist klein, aber hell und sie liegt direkt im Zentrum. Hast du Lust, mich im Mai zu besuchen? Wir könnten zusammen die Stadt anschauen.

Liebe Grüße
{ICH}`,
  phrases: [['Ich habe mich lange nicht gemeldet, weil …', 'Я давно не писал(а), потому что …'], ['Wie du weißt, …', 'Как ты знаешь, …'], ['Die Stadt gefällt mir sehr.', 'Город мне очень нравится.'], ['Hast du Lust, mich zu besuchen?', 'Хочешь приехать ко мне в гости?'], ['Wir könnten zusammen …', 'Мы могли бы вместе …']] },

{ id: 'b1_geburtstag_verpasst', level: 'B1', type: 'inf', exam: 'Goethe B1 · Schreiben Teil 1', words: [70, 100], emoji: '😬',
  de: 'Geburtstag vergessen', ru: 'Забыл(а) про день рождения',
  sit_de: 'Sie waren nicht auf der Geburtstagsfeier von {NAME}. Schreiben Sie {NAME} eine E-Mail.',
  sit_ru: 'Ты не пришёл(ла) на день рождения {NAME}. Напиши письмо.',
  points: [
    { de: 'Entschuldigen Sie sich und gratulieren Sie nachträglich.', ru: 'Извинись и поздравь.', kw: ['entschuldig', 'tut mir leid', 'herzlichen glückwunsch', 'gratulier', 'alles gute', 'nachträglich'] },
    { de: 'Erklären Sie, warum Sie nicht kommen konnten.', ru: 'Объясни, почему не смог(ла) прийти.', kw: ['weil', 'denn', 'krank', 'arbeit', 'musste', 'konnte'] },
    { de: 'Machen Sie einen Vorschlag, wie Sie das wiedergutmachen.', ru: 'Предложи, как загладить вину.', kw: ['einladen', 'lade', 'essen', 'treffen', 'restaurant', 'kino', 'wie wäre', 'vorschlag'] },
  ],
  model: `{LIEBE} {NAME},

es tut mir wirklich leid, dass ich am Samstag nicht zu deiner Party gekommen bin. Herzlichen Glückwunsch nachträglich! Ich wollte unbedingt kommen, aber mein Chef hat mich am Nachmittag angerufen, weil ein Kollege krank war. Ich musste bis spät abends arbeiten und war danach total müde. Ich hoffe, die Feier war schön und du hast viele Geschenke bekommen. Darf ich dich nächste Woche zum Essen einladen? Dann bekommst du auch dein Geschenk. Wie wäre es mit Freitag?

Liebe Grüße
{ICH}`,
  phrases: [['Es tut mir wirklich leid, dass …', 'Мне очень жаль, что …'], ['Herzlichen Glückwunsch nachträglich!', 'Поздравляю, хоть и с опозданием!'], ['Ich wollte unbedingt kommen, aber …', 'Я очень хотел(а) прийти, но …'], ['Darf ich dich zum Essen einladen?', 'Можно пригласить тебя поесть?'], ['Wie wäre es mit Freitag?', 'Как насчёт пятницы?']] },

{ id: 'b1_neuer_job', level: 'B1', type: 'inf', exam: 'Goethe B1 · Schreiben Teil 1', words: [70, 100], emoji: '👔',
  de: 'Mein neuer Job', ru: 'Моя новая работа',
  sit_de: 'Sie haben eine neue Arbeitsstelle. Schreiben Sie {NAME} eine E-Mail.',
  sit_ru: 'У тебя новая работа. Напиши {NAME}.',
  points: [
    { de: 'Beschreiben Sie Ihre neue Arbeit.', ru: 'Опиши новую работу.', kw: ['arbeite', 'firma', 'büro', 'aufgaben', 'stelle', 'job', 'beruf'] },
    { de: 'Wie sind die Kollegen?', ru: 'Какие коллеги?', kw: ['kollegen', 'kollegin', 'team', 'chef', 'nett', 'freundlich'] },
    { de: 'Was ist besser / schlechter als vorher?', ru: 'Что лучше / хуже, чем раньше?', kw: ['besser', 'schlechter', 'mehr', 'weniger', 'als vorher', 'früher', 'als'] },
  ],
  model: `{LIEBE} {NAME},

ich habe tolle Neuigkeiten: Seit zwei Wochen arbeite ich in einer neuen Firma! Ich bin jetzt in einem Reisebüro und berate Kunden, die Urlaub machen wollen. Die Arbeit ist interessant, weil ich jeden Tag mit anderen Menschen spreche. Meine Kollegen sind sehr nett und hilfsbereit, und meine Chefin erklärt mir alles geduldig. Das Gehalt ist besser als in meinem alten Job, aber ich muss leider auch samstags arbeiten. Erzähl doch mal, wie es dir geht! Was machst du gerade?

Viele Grüße
{ICH}`,
  phrases: [['Ich habe tolle Neuigkeiten:', 'У меня отличные новости:'], ['Seit zwei Wochen arbeite ich …', 'Уже две недели я работаю …'], ['Meine Kollegen sind sehr nett.', 'Мои коллеги очень милые.'], ['Das Gehalt ist besser als …', 'Зарплата лучше, чем …'], ['Erzähl doch mal, wie es dir geht!', 'Расскажи, как у тебя дела!']] },

{ id: 'b1_arzt_absagen', level: 'B1', type: 'form', to: 'person', exam: 'Goethe B1 · Schreiben Teil 3', words: [35, 50], emoji: '🩺',
  de: 'Arzttermin absagen', ru: 'Отменить приём у врача',
  sit_de: 'Sie haben morgen einen Termin bei Ihrer Ärztin / Ihrem Arzt ({NN}), können aber nicht kommen. Schreiben Sie eine E-Mail.',
  sit_ru: 'Завтра у тебя приём у врача ({NN}), но ты не можешь прийти. Напиши письмо.',
  points: [
    { de: 'Entschuldigen Sie sich höflich.', ru: 'Вежливо извинись.', kw: ['entschuldig', 'tut mir leid', 'leider', 'bedauer'] },
    { de: 'Nennen Sie den Grund.', ru: 'Назови причину.', kw: ['weil', 'denn', 'arbeit', 'dienstreise', 'kind', 'krank', 'muss'] },
    { de: 'Bitten Sie um einen neuen Termin.', ru: 'Попроси новый приём.', kw: ['neuen termin', 'anderen termin', 'termin', 'nächste woche', 'verschieben'] },
  ],
  model: `{ANREDE},

leider kann ich meinen Termin morgen um 10 Uhr nicht wahrnehmen. Mein Sohn ist krank und ich muss zu Hause bleiben. Es tut mir sehr leid, dass ich so kurzfristig absage. Könnten Sie mir bitte einen neuen Termin in der nächsten Woche geben?

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Leider kann ich meinen Termin nicht wahrnehmen.', 'К сожалению, я не смогу прийти на приём.'], ['Es tut mir leid, dass ich so kurzfristig absage.', 'Простите, что отменяю так поздно.'], ['Könnten Sie mir bitte einen neuen Termin geben?', 'Не могли бы вы назначить новое время?']] },

{ id: 'b1_kurs_fehlen', level: 'B1', type: 'form', to: 'person', exam: 'Goethe B1 · Schreiben Teil 3', words: [35, 50], emoji: '📚',
  de: 'Kurs verpasst — Entschuldigung', ru: 'Пропустил(а) занятие — извинение',
  sit_de: 'Sie konnten gestern nicht zum Kurs kommen. Schreiben Sie Ihrer Kursleiterin / Ihrem Kursleiter ({NN}).',
  sit_ru: 'Вчера ты не смог(ла) прийти на занятие. Напиши преподавателю ({NN}).',
  points: [
    { de: 'Entschuldigen Sie sich.', ru: 'Извинись.', kw: ['entschuldig', 'tut mir leid', 'leider'] },
    { de: 'Nennen Sie den Grund.', ru: 'Назови причину.', kw: ['weil', 'denn', 'arbeit', 'krank', 'termin', 'musste'] },
    { de: 'Bitten Sie um das Material vom Kurs.', ru: 'Попроси материалы занятия.', kw: ['material', 'unterlagen', 'arbeitsblätter', 'hausaufgabe', 'schicken', 'kopien'] },
  ],
  model: `{ANREDE},

bitte entschuldigen Sie, dass ich gestern nicht im Kurs war. Ich musste länger arbeiten, weil eine Kollegin krank war. Könnten Sie mir bitte die Arbeitsblätter und die Hausaufgaben per E-Mail schicken? Vielen Dank im Voraus!

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Bitte entschuldigen Sie, dass …', 'Пожалуйста, извините, что …'], ['Könnten Sie mir bitte … schicken?', 'Не могли бы вы прислать мне …?'], ['Vielen Dank im Voraus!', 'Заранее спасибо!']] },

/* ─────────── telc / DTZ (B1, 4 пункта) ─────────── */
{ id: 'dtz_laerm', level: 'B1', type: 'form', to: 'person', exam: 'telc DTZ · Schreiben', words: [70, 100], emoji: '🔊',
  de: 'Beschwerde beim Vermieter: Lärm', ru: 'Жалоба арендодателю: шум',
  sit_de: 'Ihre Nachbarn machen jede Nacht laute Musik. Schreiben Sie an Ihre Vermieterin / Ihren Vermieter ({NN}). Schreiben Sie etwas zu allen vier Punkten.',
  sit_ru: 'Соседи каждую ночь громко включают музыку. Напиши арендодателю ({NN}). Раскрой все четыре пункта.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['beschwer', 'lärm', 'laut', 'musik', 'problem', 'schreibe'] },
    { de: 'Seit wann gibt es das Problem?', ru: 'С каких пор проблема?', kw: ['seit', 'woche', 'monat', 'jede nacht', 'jeden abend'] },
    { de: 'Was haben Sie schon gemacht?', ru: 'Что ты уже предпринял(а)?', kw: ['gesprochen', 'geklingelt', 'gebeten', 'zettel', 'nachbarn', 'versucht'] },
    { de: 'Was soll der Vermieter tun?', ru: 'Что должен сделать арендодатель?', kw: ['bitte', 'sprechen sie', 'könnten sie', 'erwarte', 'lösung', 'mit den nachbarn'] },
  ],
  model: `{ANREDE},

ich wohne in Ihrem Haus in der Bergstraße 12 im zweiten Stock und möchte mich über meine Nachbarn beschweren. Seit drei Wochen hören sie fast jede Nacht bis zwei Uhr sehr laut Musik. Ich kann nicht schlafen und bin morgens bei der Arbeit sehr müde. Ich habe schon zweimal bei den Nachbarn geklingelt und sie höflich gebeten, leiser zu sein, aber leider hat sich nichts geändert. Könnten Sie bitte mit ihnen sprechen? Ich hoffe, dass wir das Problem schnell lösen können.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich möchte mich über … beschweren.', 'Я хочу пожаловаться на …'], ['Seit drei Wochen …', 'Уже три недели …'], ['Ich habe sie höflich gebeten, …', 'Я вежливо попросил(а) их …'], ['Leider hat sich nichts geändert.', 'К сожалению, ничего не изменилось.'], ['Ich hoffe, dass wir das Problem schnell lösen können.', 'Надеюсь, мы быстро решим проблему.']] },

{ id: 'dtz_reklamation', level: 'B1', type: 'form', to: 'org', exam: 'telc DTZ · Schreiben', words: [70, 100], emoji: '📦',
  de: 'Reklamation: falsche Lieferung', ru: 'Рекламация: доставили не то',
  sit_de: 'Sie haben im Internet eine Kaffeemaschine bestellt, aber sie ist kaputt angekommen. Schreiben Sie an den Online-Shop. Schreiben Sie etwas zu allen vier Punkten.',
  sit_ru: 'Ты заказал(а) в интернете кофемашину, но её привезли сломанной. Напиши в интернет-магазин. Раскрой все четыре пункта.',
  points: [
    { de: 'Was haben Sie bestellt und wann?', ru: 'Что и когда заказал(а)?', kw: ['bestellt', 'bestellung', 'gekauft', 'bestellnummer'] },
    { de: 'Was ist das Problem?', ru: 'В чём проблема?', kw: ['kaputt', 'defekt', 'funktioniert nicht', 'beschädigt', 'falsch', 'fehlt'] },
    { de: 'Was möchten Sie? (Umtausch / Geld zurück)', ru: 'Чего ты хочешь? (обмен / возврат денег)', kw: ['umtausch', 'umtauschen', 'geld zurück', 'erstatt', 'neue', 'ersatz', 'zurückschicken'] },
    { de: 'Bitten Sie um eine schnelle Antwort.', ru: 'Попроси быстро ответить.', kw: ['antwort', 'melden sie', 'rückmeldung', 'bald', 'schnell', 'möglichst'] },
  ],
  model: `Sehr geehrte Damen und Herren,

am 3. März habe ich in Ihrem Online-Shop eine Kaffeemaschine bestellt (Bestellnummer 45821). Das Paket ist gestern angekommen, aber leider ist die Maschine kaputt: Der Wassertank hat einen Riss und das Gerät funktioniert nicht. Ich möchte die Kaffeemaschine gern umtauschen. Wenn das nicht möglich ist, möchte ich mein Geld zurück. Bitte schicken Sie mir ein Rücksendeetikett. Ich bitte Sie um eine schnelle Antwort.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Am … habe ich bei Ihnen … bestellt.', '… я заказал(а) у вас …'], ['Leider ist das Gerät kaputt.', 'К сожалению, прибор сломан.'], ['Ich möchte … umtauschen / mein Geld zurück.', 'Я хочу обменять … / вернуть деньги.'], ['Ich bitte Sie um eine schnelle Antwort.', 'Прошу вас ответить как можно скорее.']] },

{ id: 'dtz_sprachschule', level: 'B1', type: 'form', to: 'org', exam: 'telc DTZ · Schreiben', words: [70, 100], emoji: '🎓',
  de: 'Informationen über einen Kurs', ru: 'Информация о курсе',
  sit_de: 'Sie möchten an der Volkshochschule einen Computerkurs machen. Schreiben Sie an die Volkshochschule. Schreiben Sie etwas zu allen vier Punkten.',
  sit_ru: 'Ты хочешь пройти компьютерный курс в народном университете (VHS). Напиши туда. Раскрой все четыре пункта.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['interess', 'möchte', 'kurs', 'teilnehmen'] },
    { de: 'Ihre Vorkenntnisse', ru: 'Твои знания (что уже умеешь)', kw: ['kenntnisse', 'kann', 'anfänger', 'schon', 'noch nie', 'ein bisschen'] },
    { de: 'Kurszeiten', ru: 'Время занятий', kw: ['wann', 'abends', 'vormittags', 'uhr', 'zeiten', 'wochenende', 'termine'] },
    { de: 'Kosten und Anmeldung', ru: 'Стоимость и запись', kw: ['kostet', 'kosten', 'preis', 'gebühr', 'anmelden', 'anmeldung'] },
  ],
  model: `Sehr geehrte Damen und Herren,

ich interessiere mich für einen Computerkurs an Ihrer Volkshochschule. Ich möchte lernen, wie man E-Mails schreibt und mit Word und Excel arbeitet, weil ich das für meine Arbeit brauche. Ich bin Anfänger und habe bisher nur ein bisschen mit dem Handy gearbeitet. Gibt es auch Kurse am Abend oder am Samstag? Unter der Woche arbeite ich bis 17 Uhr. Außerdem möchte ich wissen, wie viel der Kurs kostet und wie ich mich anmelden kann.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Ich interessiere mich für …', 'Меня интересует …'], ['Ich bin Anfänger(in).', 'Я начинающий(ая).'], ['Gibt es auch Kurse am Abend?', 'Есть ли вечерние курсы?'], ['Außerdem möchte ich wissen, …', 'Кроме того, я хотел(а) бы узнать …'], ['Wie kann ich mich anmelden?', 'Как мне записаться?']] },

{ id: 'dtz_schule_kind', level: 'B1', type: 'form', to: 'person', exam: 'telc DTZ · Schreiben', words: [70, 100], emoji: '🧒',
  de: 'Kind krank — Brief an die Lehrerin', ru: 'Ребёнок болеет — письмо учителю',
  sit_de: 'Ihr Kind ist krank und kann eine Woche nicht in die Schule gehen. Schreiben Sie an die Klassenlehrerin / den Klassenlehrer ({NN}). Schreiben Sie etwas zu allen vier Punkten.',
  sit_ru: 'Твой ребёнок болеет и неделю не пойдёт в школу. Напиши классному руководителю ({NN}). Раскрой все четыре пункта.',
  points: [
    { de: 'Grund für Ihr Schreiben', ru: 'Причина письма', kw: ['krank', 'nicht in die schule', 'nicht zur schule', 'fehlen', 'entschuldig'] },
    { de: 'Wie lange fehlt Ihr Kind?', ru: 'Сколько ребёнок пропустит?', kw: ['woche', 'tage', 'bis', 'freitag', 'montag'] },
    { de: 'Hausaufgaben / Unterrichtsmaterial', ru: 'Домашние задания / материалы', kw: ['hausaufgabe', 'material', 'aufgaben', 'arbeitsblätter', 'mitschüler', 'schicken'] },
    { de: 'Ärztliche Bescheinigung', ru: 'Справка от врача', kw: ['attest', 'bescheinigung', 'krankmeldung', 'arzt'] },
  ],
  model: `{ANREDE},

leider muss ich Ihnen mitteilen, dass mein Sohn Leon aus der Klasse 3b krank ist. Er hat eine Grippe und hohes Fieber. Der Arzt sagt, dass er bis nächsten Freitag zu Hause bleiben muss. Leon möchte aber nicht zu viel verpassen. Könnten Sie mir bitte die Hausaufgaben und die Arbeitsblätter per E-Mail schicken oder seiner Freundin Mia mitgeben? Die ärztliche Bescheinigung bringe ich Ihnen am Montag vorbei.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Leider muss ich Ihnen mitteilen, dass …', 'К сожалению, должен(на) сообщить вам, что …'], ['Er muss bis Freitag zu Hause bleiben.', 'Он должен оставаться дома до пятницы.'], ['Könnten Sie mir bitte die Hausaufgaben schicken?', 'Не могли бы вы прислать домашние задания?'], ['Die ärztliche Bescheinigung bringe ich am Montag.', 'Справку от врача принесу в понедельник.']] },

{ id: 'dtz_hochzeit', level: 'B1', type: 'inf', exam: 'telc DTZ · Schreiben', words: [70, 100], emoji: '💍',
  de: 'Einladung zur Hochzeit absagen', ru: 'Отказаться от приглашения на свадьбу',
  sit_de: '{NAME} heiratet und hat Sie zur Hochzeit eingeladen. Sie können leider nicht kommen. Schreiben Sie {NAME}. Schreiben Sie etwas zu allen vier Punkten.',
  sit_ru: '{NAME} женится / выходит замуж и пригласил(а) тебя на свадьбу, но ты не можешь прийти. Напиши. Раскрой все четыре пункта.',
  points: [
    { de: 'Gratulation und Dank für die Einladung', ru: 'Поздравление и спасибо за приглашение', kw: ['glückwunsch', 'gratulier', 'danke', 'dank', 'freue mich für'] },
    { de: 'Absage', ru: 'Отказ', kw: ['leider', 'kann nicht', 'nicht kommen', 'absagen'] },
    { de: 'Grund', ru: 'Причина', kw: ['weil', 'denn', 'arbeit', 'reise', 'prüfung', 'familie', 'krank', 'muss'] },
    { de: 'Vorschlag für ein Treffen / Geschenk', ru: 'Предложение встретиться / подарок', kw: ['treffen', 'besuch', 'geschenk', 'feiern', 'nachfeiern', 'vorschlag', 'wie wäre'] },
  ],
  model: `{LIEBE} {NAME},

herzlichen Glückwunsch zu deiner Hochzeit! Ich freue mich sehr für euch und danke dir für die schöne Einladung. Leider kann ich am 14. Juni nicht kommen, weil ich an diesem Wochenende meine Prüfung zur Pflegefachkraft habe. Ich habe monatelang dafür gelernt und kann den Termin nicht verschieben. Das tut mir wirklich leid! Ich schicke euch ein kleines Geschenk mit der Post. Wollen wir nach der Prüfung zusammen essen gehen und ein bisschen nachfeiern? Dann musst du mir alle Fotos zeigen!

Alles Liebe
{ICH}`,
  phrases: [['Herzlichen Glückwunsch zu deiner Hochzeit!', 'Поздравляю со свадьбой!'], ['Danke für die schöne Einladung.', 'Спасибо за чудесное приглашение.'], ['Leider kann ich nicht kommen, weil …', 'К сожалению, не смогу прийти, потому что …'], ['Wollen wir … nachfeiern?', 'Давай отпразднуем потом?']] },

{ id: 'dtz_praktikum', level: 'B1', type: 'form', to: 'org', exam: 'telc DTZ · Schreiben', words: [70, 100], emoji: '🧑‍🍳',
  de: 'Anfrage: Praktikum', ru: 'Запрос: стажировка',
  sit_de: 'Sie haben im Internet gelesen, dass ein Restaurant Praktikanten sucht. Schreiben Sie an das Restaurant „Zur Linde“. Schreiben Sie etwas zu allen vier Punkten.',
  sit_ru: 'Ты прочитал(а) в интернете, что ресторан ищет стажёров. Напиши в ресторан «Zur Linde». Раскрой все четыре пункта.',
  points: [
    { de: 'Wer sind Sie?', ru: 'Кто ты?', kw: ['ich heiße', 'mein name', 'ich bin', 'jahre alt', 'komme aus', 'wohne'] },
    { de: 'Warum interessieren Sie sich für das Praktikum?', ru: 'Почему интересует стажировка?', kw: ['weil', 'interess', 'koch', 'gastronomie', 'beruf', 'lernen', 'möchte'] },
    { de: 'Wann haben Sie Zeit?', ru: 'Когда у тебя есть время?', kw: ['ab', 'zeit', 'monat', 'wochen', 'uhr', 'september', 'oktober', 'sofort'] },
    { de: 'Bitten Sie um einen Termin für ein Gespräch.', ru: 'Попроси о собеседовании.', kw: ['gespräch', 'termin', 'vorstellen', 'kennenlernen', 'einladung'] },
  ],
  model: `Sehr geehrte Damen und Herren,

im Internet habe ich gelesen, dass Sie Praktikanten suchen. Mein Name ist {ICHV}, ich bin 24 Jahre alt und wohne seit zwei Jahren in Köln. In meinem Heimatland habe ich schon ein Jahr in einer Küche gearbeitet. Ich interessiere mich für das Praktikum, weil ich später eine Ausbildung als Koch machen möchte. Ich habe ab dem 1. September Zeit und kann auch am Wochenende arbeiten. Ich würde mich sehr über einen Termin für ein persönliches Gespräch freuen.

Mit freundlichen Grüßen
{ICHV}`,
  phrases: [['Im Internet habe ich gelesen, dass …', 'В интернете я прочитал(а), что …'], ['Ich interessiere mich für das Praktikum, weil …', 'Меня интересует стажировка, потому что …'], ['Ich habe ab dem 1. September Zeit.', 'Я свободен(на) с 1 сентября.'], ['Ich würde mich über einen Termin freuen.', 'Я был(а) бы рад(а) встрече.']] },
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
    ru: 'Официальное письмо (учреждению, начальнику, преподавателю, арендодателю — на «Вы»)',
    parts: [
      ['Обращение', 'Sehr geehrte Frau Becker, / Sehr geehrter Herr Becker, / Sehr geehrte Damen und Herren,', 'geehrte Frau, но geehrter Herr; дальше — с маленькой буквы'],
      ['Начало', 'ich schreibe Ihnen, weil … · ich möchte mich über … beschweren / informieren.', ''],
      ['Основная часть', 'по одному-два предложения на каждый пункт задания', 'обращайся на Sie: Sie, Ihnen, Ihr — всегда с большой буквы'],
      ['Конец', 'Ich freue mich auf Ihre Antwort. · Vielen Dank im Voraus. · Für Rückfragen stehe ich gern zur Verfügung.', ''],
      ['Прощание и подпись', 'Mit freundlichen Grüßen + имя и фамилия', 'без запятой после Grüßen'],
    ],
  },
};
