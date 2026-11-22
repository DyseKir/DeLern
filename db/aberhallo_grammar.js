/* ══════════════════════════════════════════════════════════════
   ГРАММАТИКА ПО ПОСОБИЮ «Deutsch – ABER HALLO! Grammatikübungen Grundstufe» (A1, A2)
   Дописывается в window.SG_LESSONS; series: 'ah' — показывается на отдельной вкладке.
   n — уникальный номер урока для прогресса (201…208 — A1, 301…308 — A2), ln — номер урока в пособии.
   Формат заданий — как в schritte_grammar.js:
     g|предложение с ___|ответ (варианты через /)|перевод
     c|предложение с ___|правильный|неправильные через ,|перевод
     o|предложение|перевод
     t|по-русски|по-немецки (варианты через ||)
══════════════════════════════════════════════════════════════ */
window.SG_LESSONS = (window.SG_LESSONS || []).concat([
/* ───────────── A1 ───────────── */
{ n: 201, ln: 1, book: 'AH-A1', series: 'ah', de: 'Verben, Pronomen, Wortstellung', ru: 'Спряжение, местоимения, порядок слов', emoji: '🔤', topics: [
  { id: 'ah1_11_konj', de: 'Verb – Konjugation', ru: 'Спряжение глагола в Präsens', rules: [],
    explain: `Глагол = <b>основа + окончание</b>: lern-<b>en</b> → ich lern<b>e</b>, du lern<b>st</b>, er lern<b>t</b>, wir lern<b>en</b>, ihr lern<b>t</b>, sie/Sie lern<b>en</b>.<br>
      Основа на <b>-t, -d</b> (arbeit-en, red-en, find-en, wart-en) → перед -st и -t вставляется <b>e</b>: du arbeit<b>e</b>st, er red<b>e</b>t, ihr wart<b>e</b>t.<br>
      Основа на <b>-s, -ß, -z</b> (reis-en, heiß-en, tanz-en) → у du только <b>-t</b>: du tanzt, du heißt, du reist.<br>
      Глаголы на <b>-eln</b>: ich büg<b>le</b>, ich samm<b>le</b> (e выпадает).`,
    table: [['', 'lernen', 'arbeiten', 'tanzen'], ['ich', 'lerne', 'arbeite', 'tanze'], ['du', 'lernst', 'arbeitest', 'tanzt'], ['er/sie/es', 'lernt', 'arbeitet', 'tanzt'], ['wir', 'lernen', 'arbeiten', 'tanzen'], ['ihr', 'lernt', 'arbeitet', 'tanzt'], ['sie/Sie', 'lernen', 'arbeiten', 'tanzen']],
    ex: [
      'g|Maria ___ aus Rom. (kommen)|kommt|Мария из Рима.',
      'g|Du ___ Orangensaft. (trinken)|trinkst|Ты пьёшь апельсиновый сок.',
      'g|Wir ___ in Passau. (wohnen)|wohnen|Мы живём в Пассау.',
      'g|Robert und Inga ___ ein Eis. (kaufen)|kaufen|Роберт и Инга покупают мороженое.',
      'g|Du ___ mit Klaus. (reden)|redest|Ты разговариваешь с Клаусом.',
      'g|Ihr ___ nicht. (antworten)|antwortet|Вы (ihr) не отвечаете.',
      'g|Der Student ___ Carlos. (heißen)|heißt|Студента зовут Карлос.',
      'g|Du ___ nach Frankreich. (reisen)|reist|Ты едешь во Францию.',
      'g|Ich ___ gern. (bügeln)|bügle|Я люблю гладить.',
      'c|Lena ___ heute lange.|arbeitet|arbeit,arbeitt,arbeiten|Лена сегодня долго работает.',
      'c|Du ___ sehr gut.|tanzt|tanzst,tanzest,tanze|Ты очень хорошо танцуешь.',
      't|Ты учишь немецкий?|Lernst du Deutsch?',
      't|Мы живём в Берлине.|Wir wohnen in Berlin.',
    ] },
  { id: 'ah1_12_pron', de: 'Personalpronomen – Nominativ', ru: 'Личные местоимения: ich, du, er …', rules: [],
    explain: `Личные местоимения в Nominativ (кто?): <b>ich, du, er, sie, es, wir, ihr, sie, Sie</b>.<br>
      Местоимение заменяет существительное по его роду: <b>der</b> Mann → <b>er</b>, <b>die</b> Frau → <b>sie</b>, <b>das</b> Mädchen → <b>es</b>, <b>die</b> Leute → <b>sie</b>.<br>
      Was studiert <b>Max</b>? – <b>Er</b> studiert Medizin. · Was studieren <b>Carlos und Maria</b>? – <b>Sie</b> studieren Deutsch.`,
    table: [['', 'Singular', 'Plural'], ['1', 'ich', 'wir'], ['2', 'du', 'ihr'], ['3', 'er / sie / es', 'sie'], ['вежливо', 'Sie', 'Sie']],
    ex: [
      'c|Wo wohnt Carlos? – ___ wohnt in Rom.|Er|Sie,Es,Ihr|Где живёт Карлос? — Он живёт в Риме.',
      'c|Wie heißt die Studentin? – ___ heißt Maria.|Sie|Er,Es,Ihr|Как зовут студентку? — Её зовут Мария.',
      'c|Was trinkt das Mädchen? – ___ trinkt Milch.|Es|Sie,Er,Ihr|Что пьёт девочка? — Она пьёт молоко.',
      'c|Was studieren Max und Anna? – ___ studieren Jura.|Sie|Wir,Ihr,Er|Что изучают Макс и Анна? — Они изучают право.',
      'c|Wo wohnt ihr? – ___ wohnen in Passau.|Wir|Ihr,Sie,Ich|Где вы живёте? — Мы живём в Пассау.',
      'c|Was bist du von Beruf? – ___ bin Reporter.|Ich|Du,Er,Wir|Кто ты по профессии? — Я репортёр.',
      'c|Du lernst doch Deutsch, oder? – Ja, ___ lerne Deutsch.|ich|du,er,wir|Ты ведь учишь немецкий? — Да, я учу.',
      'c|Ihr studiert in München, oder? – Ja, ___ studieren in München.|wir|ihr,sie,ich|Вы ведь учитесь в Мюнхене? — Да, мы учимся.',
      'g|Herr Schneider wohnt in München. ___ ist Lehrer. (er / sie / es)|Er|Господин Шнайдер живёт в Мюнхене. Он учитель.',
      'g|Frau Berg wohnt in Köln. ___ ist Reporterin. (er / sie / es)|Sie|Фрау Берг живёт в Кёльне. Она репортёр.',
      't|Он учитель.|Er ist Lehrer.',
      't|Мы пьём чай.|Wir trinken Tee.',
    ] },
  { id: 'ah1_13_wort', de: 'Wortstellung: Aussagesatz / Fragesätze', ru: 'Порядок слов: утверждение и вопросы', rules: [],
    explain: `<b>Aussagesatz</b> (утверждение): глагол на <b>2-м месте</b>. Maria <b>kommt</b> aus Rom. · Aus Rom <b>kommt</b> Maria.<br>
      <b>Ja/Nein-Frage</b> (без вопросительного слова): глагол на <b>1-м месте</b>. <b>Kommt</b> Maria aus Rom?<br>
      <b>W-Frage</b>: вопросительное слово + глагол. <b>Woher kommt</b> Maria? (wer, was, wo, woher, wohin, wie …)<br>
      Ответ: <b>Ja</b>, ich studiere. · <b>Nein</b>, ich studiere nicht. На вопрос с отрицанием утвердительно отвечают <b>Doch</b>: Studierst du nicht? – <b>Doch</b>, ich studiere.`,
    table: [['Тип', 'Позиция I', 'Позиция II', '…'], ['Aussagesatz', 'Maria', 'kommt', 'aus Rom.'], ['W-Frage', 'Woher', 'kommt', 'Maria?'], ['Ja/Nein-Frage', 'Kommt', 'Maria', 'aus Rom?']],
    ex: [
      'o|Morgen komme ich.|Завтра я приду.',
      'o|In Passau wohnst du.|В Пассау живёшь ты.',
      'o|Wohnt Clara in Wien?|Клара живёт в Вене?',
      'o|Woher kommt Dora?|Откуда Дора?',
      'o|Was trinkt Paul?|Что пьёт Пауль?',
      'c|___ kauft Brot? – Carlos.|Wer|Was,Wo,Wie|Кто покупает хлеб? — Карлос.',
      'c|___ heißt die Lehrerin? – Frau Lehmann.|Wie|Wer,Was,Wo|Как зовут учительницу? — Фрау Леман.',
      'c|___ alt ist Thomas? – 20 Jahre.|Wie|Was,Wer,Wo|Сколько лет Томасу? — 20.',
      'c|Studierst du nicht? – ___, ich studiere.|Doch|Ja,Nein,Nicht|Ты не учишься? — Нет, учусь (doch).',
      'c|Kommt Carlos aus London? – ___, er kommt nicht aus London.|Nein|Doch,Ja,Nicht|Карлос из Лондона? — Нет, не из Лондона.',
      't|Ты живёшь в Вене?|Wohnst du in Wien?',
      't|Откуда ты?|Woher kommst du?',
    ] },
] },
{ n: 202, ln: 2, book: 'AH-A1', series: 'ah', de: 'Starke Verben, Artikel, Anrede', ru: 'Сильные глаголы, артикли, обращение', emoji: '💪', topics: [
  { id: 'ah1_21_stark', de: 'Starke Verben', ru: 'Сильные глаголы: a → ä, e → i/ie', rules: [],
    explain: `У сильных глаголов в Präsens меняется гласная — <b>только у du и er/sie/es</b>:<br>
      <b>a → ä</b>: fahren → du f<b>ä</b>hrst, er f<b>ä</b>hrt (schlafen, tragen, waschen, halten, braten)<br>
      <b>e → i</b>: essen → du <b>i</b>sst, er <b>i</b>sst (geben, helfen, nehmen → nimmst, sprechen, treffen)<br>
      <b>e → ie</b>: lesen → du l<b>ie</b>st (sehen)<br>
      <b>au → äu</b>: laufen → du l<b>äu</b>fst<br>
      Особые: halten → du hältst, er <b>hält</b>; nehmen → du <b>nimmst</b>, er <b>nimmt</b>.`,
    table: [['', 'fahren', 'essen', 'lesen', 'laufen'], ['ich', 'fahre', 'esse', 'lese', 'laufe'], ['du', 'fährst', 'isst', 'liest', 'läufst'], ['er/sie/es', 'fährt', 'isst', 'liest', 'läuft'], ['wir', 'fahren', 'essen', 'lesen', 'laufen']],
    ex: [
      'g|Inge ___ Pizza. (essen)|isst|Инге ест пиццу.',
      'g|Christian ___ lange. (schlafen)|schläft|Кристиан долго спит.',
      'g|Lena ___ im Park. (laufen)|läuft|Лена бегает в парке.',
      'g|Klaus ___ die Zeitung. (lesen)|liest|Клаус читает газету.',
      'g|Claudia ___ nach Hause. (fahren)|fährt|Клаудия едет домой.',
      'g|Du ___ eine Pizza. (nehmen)|nimmst|Ты берёшь пиццу.',
      'g|Peter ___ Julia. (helfen)|hilft|Петер помогает Юлии.',
      'g|Sandra ___ schwarze Schuhe. (tragen)|trägt|Сандра носит чёрные туфли.',
      'g|Max ___ ein Deutschbuch. (lesen)|liest|Макс читает учебник немецкого.',
      'c|Ich spreche langsam. Du ___ schnell.|sprichst|sprechst,sprichest,spricht|Я говорю медленно. Ты — быстро.',
      'c|Ich esse Kuchen. Pavel ___ Obst.|isst|esst,isst du,essen|Я ем пирог. Павел ест фрукты.',
      'c|Der Bus ___ hier.|hält|haltet,hältet,halt|Автобус здесь останавливается.',
      't|Ты едешь в Мюнхен?|Fährst du nach München?',
      't|Он читает книгу.|Er liest ein Buch.',
    ] },
  { id: 'ah1_22_artikel', de: 'Nomen und Artikel – Nominativ', ru: 'Артикли der/die/das и множественное число', rules: [],
    explain: `Существительные всегда пишутся <b>с большой буквы</b> и учатся <b>с артиклем</b>: <b>der</b> (м. р.), <b>die</b> (ж. р.), <b>das</b> (ср. р.), во множественном — всегда <b>die</b>.<br>
      Неопределённый: <b>ein</b> Baum, <b>eine</b> Uhr, <b>ein</b> Buch; во мн. ч. артикля нет: Das sind Bücher.<br>
      Отрицание: <b>kein / keine / kein</b>, мн. ч. <b>keine</b>: Das ist kein Apfel. Das sind keine Äpfel.<br>
      Множественное: -Ø (das Fenster → die Fenster), ¨ (der Mantel → die Mäntel), -e (das Brot → die Brote), ¨e (die Hand → die Hände), -er (das Kind → die Kinder), ¨er (das Buch → die Bücher), -(e)n (die Tasche → die Taschen), -nen (die Ärztin → die Ärztinnen), -s (das Auto → die Autos).`,
    table: [['', 'определённый', 'неопределённый', 'отрицание'], ['м. р.', 'der', 'ein', 'kein'], ['ж. р.', 'die', 'eine', 'keine'], ['ср. р.', 'das', 'ein', 'kein'], ['мн. ч.', 'die', '—', 'keine']],
    ex: [
      'c|___ Hotel ist neu.|Das|Der,Die,Den|Гостиница новая.',
      'c|___ Milch ist kalt.|Die|Der,Das,Den|Молоко холодное.',
      'c|___ Supermarkt ist groß.|Der|Die,Das,Den|Супермаркет большой.',
      'c|___ Flasche ist leer.|Die|Der,Das,Den|Бутылка пустая.',
      'c|Was ist das? – Das ist ___ Tisch.|ein|eine,einen,eines|Что это? — Это стол.',
      'c|Was ist das? – Das ist ___ Tasse.|eine|ein,einen,einer|Что это? — Это чашка.',
      'c|Was ist das? – Das sind ___.|Stifte|ein Stifte,eine Stifte,einen Stift|Что это? — Это ручки.',
      'c|Ist das ein Brot? – Nein, das ist ___ Brot.|kein|keine,keinen,nicht|Это хлеб? — Нет, это не хлеб.',
      'c|Sind das Äpfel? – Nein, das sind ___ Äpfel.|keine|kein,keinen,nicht|Это яблоки? — Нет, это не яблоки.',
      'g|das Kind – die ___ (Plural)|Kinder|ребёнок — дети',
      'g|die Stadt – die ___ (Plural)|Städte|город — города',
      'g|das Buch – die ___ (Plural)|Bücher|книга — книги',
      'g|die Lehrerin – die ___ (Plural)|Lehrerinnen|учительница — учительницы',
      't|Это не яблоко.|Das ist kein Apfel.',
    ] },
  { id: 'ah1_23_anrede', de: 'Anrede', ru: 'Обращение: du, ihr, Sie', rules: [],
    explain: `<b>du</b> — к одному знакомому (друг, семья, ребёнок): Peter, wo wohn<b>st du</b>?<br>
      <b>ihr</b> — к нескольким знакомым: Mark und Robert, wo wohn<b>t ihr</b>?<br>
      <b>Sie</b> — официально, к одному или нескольким (всегда с большой буквы, глагол как у «они»): Herr Maier, wo wohn<b>en Sie</b>?`,
    table: [['', 'Singular', 'Plural'], ['неофициально', 'du', 'ihr'], ['официально', 'Sie', 'Sie']],
    ex: [
      'g|Hallo Carlos! Wie heiß___ du? (Endung)|t|Привет, Карлос! Как тебя зовут?',
      'g|Frau Mayer, wie heiß___ Sie? (Endung)|en|Фрау Майер, как вас зовут?',
      'g|Anna und Maria, studier___ ihr in Passau? (Endung)|t|Анна и Мария, вы учитесь в Пассау?',
      'c|Was studierst ___, Robert?|du|Sie,ihr,er|Что ты изучаешь, Роберт?',
      'c|Arbeiten ___ in München, Herr Berg?|Sie|du,ihr,sie|Вы работаете в Мюнхене, господин Берг?',
      'c|Woher kommt ___, Peter und Lisa?|ihr|du,Sie,wir|Откуда вы, Петер и Лиза?',
      'c|Herr und Frau Moor, haben ___ Zeit?|Sie|ihr,du,sie|Господин и госпожа Моор, у вас есть время?',
      'c|Hallo Anna, hallo Eva! Kommt ___ mit?|ihr|du,Sie,sie|Привет, Анна и Ева! Пойдёте с нами?',
      'c|Entschuldigen ___, sind Sie nicht aus England?|Sie|du,ihr,sich|Извините, вы не из Англии?',
      't|Господин Майер, где вы живёте?|Herr Maier, wo wohnen Sie?',
      't|Марк и Роберт, где вы живёте?|Mark und Robert, wo wohnt ihr?',
    ] },
] },
{ n: 203, ln: 3, book: 'AH-A1', series: 'ah', de: 'Genus, Komposita, Adjektiv', ru: 'Род, сложные слова, прилагательные', emoji: '🧩', topics: [
  { id: 'ah1_31_genus', de: 'Nomen – Genusregeln', ru: 'Как угадать род по окончанию', rules: [],
    explain: `<b>der</b>: мужчины и самцы (der Kollege, der Löwe), мужские профессии (der Arzt), месяцы, дни, времена года и суток (der Mai, der Montag, der Morgen — <i>но</i> die Nacht), слова на <b>-or</b> (der Motor), <b>-en</b> (der Garten), <b>-ismus</b> (der Tourismus).<br>
      <b>die</b>: женщины (die Studentin, die Katze), женские профессии (die Ärztin), часто на <b>-e</b> (die Tomate), на <b>-ei</b> (die Bäckerei), <b>-ung, -heit, -keit, -schaft</b> (die Zeitung, die Krankheit, die Mannschaft), <b>-tät, -ion, -ik, -ur</b> (die Aktion, die Musik, die Natur).<br>
      <b>das</b>: <b>-chen, -lein</b> (das Mädchen, das Tischlein), <b>-ment</b> (das Appartement), <b>-um</b> (das Zentrum), инфинитив как существительное (das Lernen).`,
    table: [['der', 'die', 'das'], ['-or, -en, -ismus', '-ung, -heit, -keit, -schaft', '-chen, -lein'], ['дни, месяцы, времена года', '-ei, -tät, -ion, -ik, -ur', '-ment, -um'], ['мужчины, самцы', 'женщины, часто -e', 'инфинитив: das Lernen']],
    ex: [
      'c|___ Zeitung|die|der,das|газета (-ung)',
      'c|___ Mädchen|das|der,die|девочка (-chen)',
      'c|___ Motor|der|die,das|мотор (-or)',
      'c|___ Gesundheit|die|der,das|здоровье (-heit)',
      'c|___ Dokument|das|der,die|документ (-ment)',
      'c|___ Mittwoch|der|die,das|среда (день недели)',
      'c|___ Information|die|der,das|информация (-ion)',
      'c|___ Datum|das|der,die|дата (-um)',
      'c|___ Optimismus|der|die,das|оптимизм (-ismus)',
      'c|___ Wirtschaft|die|der,das|экономика (-schaft)',
      'c|___ Metzgerei|die|der,das|мясная лавка (-ei)',
      'c|___ Brötchen|das|der,die|булочка (-chen)',
      'c|___ Wagen|der|die,das|машина (-en)',
      'c|___ Essen|das|der,die|еда (инфинитив)',
      'c|___ Nacht|die|der,das|ночь (исключение!)',
    ] },
  { id: 'ah1_32_komp', de: 'Nomen – Komposita', ru: 'Сложные слова: артикль по последнему слову', rules: [],
    explain: `Сложное слово = определяющее + <b>основное слово (Grundwort)</b>. Артикль и значение задаёт <b>последнее</b> слово:<br>
      der Kaffee + <b>die Maschine</b> → <b>die</b> Kaffeemaschine · der Computer + <b>der Kurs</b> → <b>der</b> Computerkurs.<br>
      Иногда между частями появляется соединительная буква: die Übung + <b>s</b> + das Buch → das Übung<b>s</b>buch; die Orange + <b>n</b> + der Saft → der Orange<b>n</b>saft.<br>
      Первой частью может быть прилагательное (hoch + das Haus → das Hochhaus) или глагол (schlafen + die Tablette → die Schlaftablette).`,
    table: [['Часть 1', 'Часть 2 (Grundwort)', 'Kompositum'], ['der Kaffee', 'die Maschine', 'die Kaffeemaschine'], ['die Wohnung', 'die Tür', 'die Wohnungstür'], ['groß', 'die Stadt', 'die Großstadt'], ['warten', 'das Zimmer', 'das Wartezimmer']],
    ex: [
      'c|___ Wörterbuch|das|der,die|словарь (das Wort + das Buch)',
      'c|___ Staubsauger|der|die,das|пылесос (der Staub + der Sauger)',
      'c|___ Mineralwasser|das|der,die|минеральная вода (das Wasser)',
      'c|___ Kühlschrank|der|die,das|холодильник (der Schrank)',
      'c|___ Sonnenschirm|der|die,das|зонт от солнца (die Sonne + der Schirm)',
      'c|___ Blumenvase|die|der,das|ваза для цветов (die Blume + die Vase)',
      'c|___ Berufsschule|die|der,das|профессиональное училище (der Beruf + die Schule)',
      'c|___ Kleinkind|das|der,die|малыш (klein + das Kind)',
      'c|___ Kaufhaus|das|der,die|универмаг (kaufen + das Haus)',
      'c|___ Spielplatz|der|die,das|детская площадка (spielen + der Platz)',
      'g|die Wohnung + die Tür → die ___|Wohnungstür|входная дверь квартиры',
      'g|frisch + die Milch → die ___|Frischmilch|свежее молоко',
      'g|tanzen + der Kurs → der ___|Tanzkurs|курс танцев',
      'g|fragen + das Wort → das ___|Fragewort|вопросительное слово',
    ] },
  { id: 'ah1_33_adj', de: 'Adjektiv', ru: 'Прилагательные после sein, цвета', rules: [],
    explain: `После <b>sein</b> прилагательное стоит <b>без окончания</b>: Das Auto ist <b>alt</b>. Die Häuser sind <b>klein</b>.<br>
      Полезно учить парами противоположностей: neu ↔ alt, groß ↔ klein, teuer ↔ billig, schwer ↔ leicht, kalt ↔ warm, heiß ↔ kalt, faul ↔ fleißig, laut ↔ leise, krank ↔ gesund, süß ↔ sauer, interessant ↔ langweilig, schnell ↔ langsam, hart ↔ weich, gut ↔ schlecht.<br>
      Цвета: rot, gelb, grün, blau, orange, braun, schwarz, weiß, grau, violett/lila; <b>hell-</b>/<b>dunkel-</b>: hellblau, dunkelrot.`,
    table: [['', '↔'], ['neu', 'alt'], ['teuer', 'billig'], ['schwer', 'leicht'], ['interessant', 'langweilig'], ['laut', 'leise']],
    ex: [
      'g|Ist das Auto neu? – Nein, es ist ___.|alt|Машина новая? — Нет, она старая.',
      'g|Ist der Film interessant? – Nein, er ist ___.|langweilig|Фильм интересный? — Нет, скучный.',
      'g|Ist die Milch billig? – Nein, sie ist ___.|teuer|Молоко дешёвое? — Нет, дорогое.',
      'g|Ist die Übung schwierig? – Nein, sie ist ___.|einfach/leicht|Упражнение трудное? — Нет, лёгкое.',
      'g|Ist das Wasser warm? – Nein, es ist ___.|kalt|Вода тёплая? — Нет, холодная.',
      'g|Ist das Auto langsam? – Nein, es ist ___.|schnell|Машина медленная? — Нет, быстрая.',
      'g|Sind die Kinder leise? – Nein, sie sind ___.|laut|Дети тихие? — Нет, шумные.',
      'g|Ist die Studentin faul? – Nein, sie ist ___.|fleißig|Студентка ленивая? — Нет, прилежная.',
      'g|Ist der Apfel süß? – Nein, er ist ___.|sauer|Яблоко сладкое? — Нет, кислое.',
      'g|Bist du krank? – Nein, ich bin ___.|gesund|Ты болен? — Нет, здоров.',
      'c|Welche Farbe hat eine Banane? – Sie ist ___.|gelb|blau,rot,grün|Какого цвета банан? — Жёлтый.',
      'c|Welche Farbe hat Milch? – Sie ist ___.|weiß|schwarz,braun,gelb|Какого цвета молоко? — Белое.',
      'c|Welche Farbe hat eine Gurke? – Sie ist ___.|grün|rot,weiß,lila|Какого цвета огурец? — Зелёный.',
      't|Дом маленький.|Das Haus ist klein.',
    ] },
] },
{ n: 204, ln: 4, book: 'AH-A1', series: 'ah', de: 'Trennbare Verben, Akkusativ', ru: 'Отделяемые глаголы, винительный падеж', emoji: '✂️', topics: [
  { id: 'ah1_41_trenn', de: 'Nicht trennbare und trennbare Verben', ru: 'Отделяемые и неотделяемые приставки', rules: [],
    explain: `<b>Неотделяемые</b> приставки: <b>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</b> — приставка остаётся с глаголом: Peter <b>bekommt</b> ein Schnitzel.<br>
      <b>Отделяемые</b>: <b>ab-, an-, auf-, aus-, ein-, mit-, her-, vor-, zu-, zurück-</b> … — в предложении приставка уходит <b>в конец</b>: Der Zug <b>kommt</b> um 18 Uhr <b>an</b>. (ankommen)<br>
      Ударение у отделяемых — на приставке: <b>an</b>kommen, у неотделяемых — на корне: be<b>kom</b>men.`,
    table: [['', 'Позиция II', '…', 'Конец'], ['ankommen', 'Der Zug kommt', 'um 18 Uhr', 'an.'], ['einkaufen', 'Ich kaufe', 'im Supermarkt', 'ein.'], ['bekommen', 'Peter bekommt', 'ein Schnitzel.', '—']],
    ex: [
      'g|Du ___ die Rechnung. (bezahlen)|bezahlst|Ты оплачиваешь счёт.',
      'g|Ich ___ das Steak. (empfehlen)|empfehle|Я рекомендую стейк.',
      'g|Ich ___ das Problem. (verstehen)|verstehe|Я понимаю проблему.',
      'g|Der Bus ___ in 10 Minuten ___. (abfahren)|fährt … ab|Автобус отправляется через 10 минут.',
      'g|Er ___ um 7.00 Uhr ___. (aufstehen)|steht … auf|Он встаёт в 7 часов.',
      'g|Ich ___ Peter ins Kino ___. (einladen)|lade … ein|Я приглашаю Петера в кино.',
      'g|Du ___ die Tür ___. (zumachen)|machst … zu|Ты закрываешь дверь.',
      'g|Er ___ das Buch ___. (zurückgeben)|gibt … zurück|Он возвращает книгу.',
      'g|Der Zug ___ um 20.30 Uhr ___. (ankommen)|kommt … an|Поезд прибывает в 20:30.',
      'o|Du kaufst im Supermarkt ein.|Ты делаешь покупки в супермаркете.',
      'o|Wir fahren morgen nicht nach München mit.|Мы завтра не поедем с вами в Мюнхен.',
      'c|Maria ___ das Formular aus.|füllt|ausfüllt,füllen,fülle|Мария заполняет формуляр.',
      't|Я звоню Анне.|Ich rufe Anna an.',
      't|Поезд прибывает в 18 часов.|Der Zug kommt um 18 Uhr an.',
    ] },
  { id: 'ah1_42_akk', de: 'Nomen und Artikel – Akkusativ', ru: 'Артикли в Akkusativ (кого? что?)', rules: [],
    explain: `Многие глаголы требуют <b>Akkusativ</b> (кого? что?): Elena isst <b>den Kuchen</b>.<br>
      Меняется <b>только мужской род</b>: der → <b>den</b>, ein → <b>einen</b>, kein → <b>keinen</b>. Остальные как в Nominativ: die, das, die / eine, ein.<br>
      Еда и напитки вообще — часто без артикля: Isst du gern Gemüse? Количество: eine Tasse Tee, ein Glas Milch, ein Stück Kuchen.`,
    table: [['', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'], ['Nominativ', 'der / ein', 'die / eine', 'das / ein', 'die / —'], ['Akkusativ', '<b>den / einen</b>', 'die / eine', 'das / ein', 'die / —'], ['kein', '<b>keinen</b>', 'keine', 'kein', 'keine']],
    ex: [
      'g|Ich frage ___ Lehrer. (der)|den|Я спрашиваю учителя.',
      'g|Du packst ___ Koffer. (der)|den|Ты пакуешь чемодан.',
      'g|Ich bezahle ___ Miete. (die)|die|Я плачу аренду.',
      'g|Er versteht ___ Problem. (das)|das|Он понимает проблему.',
      'g|Ich esse ___ Salat. (ein)|einen|Я ем салат.',
      'g|Du bestellst ___ Suppe. (ein)|eine|Ты заказываешь суп.',
      'g|Eva hat ___ E-Bike. (ein)|ein|У Евы есть электровелосипед.',
      'g|Maria bucht ___ Reise. (ein)|eine|Мария бронирует поездку.',
      'g|Trinkst du Tee? – Nein danke, ich trinke jetzt ___ Tee. (kein)|keinen|Пьёшь чай? — Нет, спасибо.',
      'g|Leider habe ich ___ Uhr. (kein)|keine|К сожалению, у меня нет часов.',
      'c|Du brauchst ___ Wörterbuch.|ein|einen,eine,einem|Тебе нужен словарь.',
      'c|Wir zählen ___ Stühle.|die|den,das,der|Мы считаем стулья.',
      't|Я покупаю стол.|Ich kaufe einen Tisch.',
      't|У меня нет машины.|Ich habe kein Auto.',
    ] },
  { id: 'ah1_43_pronakk', de: 'Personalpronomen – Akkusativ', ru: 'Местоимения: mich, dich, ihn …', rules: [],
    explain: `Местоимения в Akkusativ: ich → <b>mich</b>, du → <b>dich</b>, er → <b>ihn</b>, sie → sie, es → es, wir → <b>uns</b>, ihr → <b>euch</b>, sie/Sie → sie/Sie.<br>
      Besuchst du Peter? – Ja, ich besuche <b>ihn</b>. · Kennst du Maria? – Ja, ich kenne <b>sie</b>.<br>
      Isst du den Kuchen? → <b>ihn</b> · die Milch → <b>sie</b> · das Buch → <b>es</b> · die Erdbeeren → <b>sie</b>.`,
    table: [['Nominativ', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie/Sie'], ['Akkusativ', 'mich', 'dich', 'ihn', 'sie', 'es', 'uns', 'euch', 'sie/Sie']],
    ex: [
      'c|Wer bekommt den Salat? – Ich bekomme ___.|ihn|er,es,sie|Кто получает салат? — Я.',
      'c|Wer bekommt die Suppe? – Ich bekomme ___.|sie|ihn,es,ihr|Кто получает суп? — Я.',
      'c|Wer bekommt das Eis? – Ich bekomme ___.|es|ihn,sie,er|Кто получает мороженое? — Я.',
      'g|Du kennst den Professor, aber er kennt ___ nicht. (du)|dich|Ты знаешь профессора, а он тебя — нет.',
      'g|Wir kennen den Lehrer, aber er kennt ___ nicht. (wir)|uns|Мы знаем учителя, а он нас — нет.',
      'g|Ihr kennt mich, aber ich kenne ___ nicht. (ihr)|euch|Вы знаете меня, а я вас — нет.',
      'g|Maria kennt den Lehrer, aber er kennt ___ nicht. (sie)|sie|Мария знает учителя, а он её — нет.',
      'g|Das Mädchen kennt Paul, aber er kennt ___ nicht. (es)|es|Девочка знает Пауля, а он её — нет.',
      'g|Ich kenne Maria, aber sie kennt ___ nicht. (ich)|mich|Я знаю Марию, а она меня — нет.',
      'g|Trinken Sie den Kaffee hier? – Nein, ich trinke ___ nicht. (er)|ihn|Вы пьёте кофе здесь? — Нет.',
      'c|Mögen Sie Kaffee? – Nein, ich mag ___ Kaffee.|keinen|kein,keine,nicht|Любите кофе? — Нет, не люблю.',
      't|Я навещаю его.|Ich besuche ihn.',
      't|Ты меня понимаешь?|Verstehst du mich?',
    ] },
] },
{ n: 205, ln: 5, book: 'AH-A1', series: 'ah', de: 'Possessivartikel, war/hatte, Zeitadverbien', ru: 'Притяжательные, war/hatte, наречия частоты', emoji: '🏠', topics: [
  { id: 'ah1_51_poss', de: 'Possessivartikel', ru: 'mein, dein, sein, ihr …', rules: [],
    explain: `ich → <b>mein</b>, du → <b>dein</b>, er/es → <b>sein</b>, sie → <b>ihr</b>, wir → <b>unser</b>, ihr → <b>euer</b>, sie → <b>ihr</b>, Sie → <b>Ihr</b>.<br>
      Окончания как у <b>ein/kein</b>: mein Onkel, mein<b>e</b> Tante, mein Kind, mein<b>e</b> Eltern; в Akkusativ м. р. — mein<b>en</b> Onkel.<br>
      <b>euer</b> с окончанием теряет e: eu<b>re</b> Tante, eu<b>ren</b> Onkel.`,
    table: [['', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'], ['Nominativ', 'mein', 'meine', 'mein', 'meine'], ['Akkusativ', '<b>meinen</b>', 'meine', 'mein', 'meine'], ['euer (Nom.)', 'euer', 'eure', 'euer', 'eure']],
    ex: [
      'g|Ich besuche ___ Onkel. (mein)|meinen|Я навещаю своего дядю.',
      'g|___ Wohnzimmer ist ziemlich klein. (mein)|Mein|Моя гостиная довольно маленькая.',
      'g|Ich treffe morgen ___ Kollegin. (mein)|meine|Я завтра встречаюсь со своей коллегой.',
      'g|Wir besuchen ___ Eltern. (unser)|unsere|Мы навещаем своих родителей.',
      'g|Paul fragt ___ Vater. (sein)|seinen|Пауль спрашивает своего отца.',
      'g|Eva sieht morgen ___ Onkel. (ihr)|ihren|Ева завтра увидит своего дядю.',
      'g|Ihr ladet ___ Tante ein. (euer)|eure|Вы приглашаете свою тётю.',
      'g|Besucht ihr ___ Großvater? (euer)|euren|Вы навещаете своего дедушку?',
      'g|Kennst du ___ Nachbarin? (dein)|deine|Ты знаешь свою соседку?',
      'g|Ihr bezahlt ___ Rechnung. (euer)|eure|Вы оплачиваете свой счёт.',
      'c|Peter hat einen Computer. Das ist ___ Computer.|sein|ihr,seine,seinen|У Петера компьютер. Это его компьютер.',
      'c|Anna hat ein Tablet. Das ist ___ Tablet.|ihr|sein,ihre,ihren|У Анны планшет. Это её планшет.',
      'c|Die Gäste holen das Gepäck. Das ist ___ Gepäck.|ihr|sein,ihre,euer|Гости забирают багаж. Это их багаж.',
      't|Это моя сумка.|Das ist meine Tasche.',
    ] },
  { id: 'ah1_52_praet', de: 'Präteritum – haben / sein', ru: 'Прошедшее: war и hatte', rules: [],
    explain: `О прошлом с <b>sein</b> и <b>haben</b> обычно говорят в Präteritum:<br>
      sein: ich <b>war</b>, du <b>warst</b>, er <b>war</b>, wir <b>waren</b>, ihr <b>wart</b>, sie <b>waren</b>.<br>
      haben: ich <b>hatte</b>, du <b>hattest</b>, er <b>hatte</b>, wir <b>hatten</b>, ihr <b>hattet</b>, sie <b>hatten</b>.<br>
      У ich и er/sie/es формы одинаковые (без окончания).`,
    table: [['', 'sein', 'haben'], ['ich', 'war', 'hatte'], ['du', 'warst', 'hattest'], ['er/sie/es', 'war', 'hatte'], ['wir', 'waren', 'hatten'], ['ihr', 'wart', 'hattet'], ['sie/Sie', 'waren', 'hatten']],
    ex: [
      'g|___ du gestern im Kino? (sein)|Warst|Ты был вчера в кино?',
      'g|___ ihr Besuch? (haben)|Hattet|У вас были гости?',
      'g|___ er im Urlaub? (sein)|War|Он был в отпуске?',
      'g|___ du Urlaub? (haben)|Hattest|У тебя был отпуск?',
      'g|___ ihr mit dem Essen zufrieden? (sein)|Wart|Вы были довольны едой?',
      'g|___ Sie Probleme? (haben)|Hatten|У вас были проблемы?',
      'g|___ Sie letzte Woche in Köln? (sein)|Waren|Вы были на прошлой неделе в Кёльне?',
      'g|___ der Film interessant? (sein)|War|Фильм был интересный?',
      'g|___ du viel Arbeit? (haben)|Hattest|У тебя было много работы?',
      'g|Gestern ___ ich keine Zeit. (haben)|hatte|Вчера у меня не было времени.',
      'c|Wir ___ letzte Woche krank.|waren|war,wart,hatten|Мы на прошлой неделе болели.',
      't|Я был вчера дома.|Ich war gestern zu Hause.',
      't|У нас не было времени.|Wir hatten keine Zeit.',
    ] },
  { id: 'ah1_53_zeitadv', de: 'Zeitadverbien', ru: 'Как часто: nie, manchmal, oft, immer', rules: [],
    explain: `Шкала частоты: <b>nie / niemals</b> (никогда) → <b>kaum / sehr selten / fast nie</b> (почти никогда) → <b>manchmal / ab und zu / hin und wieder</b> (иногда) → <b>oft / häufig</b> (часто) → <b>meistens / fast immer / zumeist</b> (обычно) → <b>immer / ständig</b> (всегда).<br>
      На вопрос с отрицанием утвердительно отвечают <b>Doch</b>: Trinkst du keinen Tee? – <b>Doch</b>, ich trinke oft Tee.<br>
      Отрицательный ответ: Nein, ich trinke <b>nie</b> Kaffee.`,
    table: [['0%', '', '', '', '', '100%'], ['nie', 'kaum', 'manchmal', 'oft', 'meistens', 'immer'], ['niemals', 'sehr selten', 'ab und zu', 'häufig', 'fast immer', 'ständig']],
    ex: [
      'c|Trinkst du keinen Tee? – ___, ich trinke oft Tee.|Doch|Ja,Nein,Nie|Ты не пьёшь чай? — Пью, и часто.',
      'c|Trinkst du keinen Kaffee? – ___, ich trinke nie Kaffee.|Nein|Doch,Ja,Oft|Ты не пьёшь кофе? — Нет, никогда.',
      'c|Trinkst du Cola? – ___, ich trinke manchmal Cola.|Ja|Doch,Nein,Nie|Ты пьёшь колу? — Да, иногда.',
      'c|Isst du kein Obst? – Doch, ich esse ___ Obst.|oft|nie,kaum,keinen|Ты не ешь фрукты? — Ем, часто.',
      'c|«fast nie» bedeutet dasselbe wie ___.|kaum|oft,meistens,ständig|«почти никогда» = kaum',
      'c|«ab und zu» bedeutet dasselbe wie ___.|manchmal|nie,immer,meistens|«время от времени» = manchmal',
      'c|«ständig» bedeutet dasselbe wie ___.|immer|selten,manchmal,kaum|«постоянно» = immer',
      'c|«häufig» bedeutet dasselbe wie ___.|oft|nie,kaum,selten|«часто» = oft',
      'g|Spielst du oft Fußball? – Nein, ich spiele ___ Fußball. (selten)|selten|Ты часто играешь в футбол? — Нет, редко.',
      'g|Hörst du zu Hause Musik? – Ja, ich höre ___ Musik. (ständig)|ständig|Слушаешь дома музыку? — Да, постоянно.',
      'o|Ich kaufe hin und wieder Wein.|Я иногда покупаю вино.',
      't|Я никогда не пью алкоголь.|Ich trinke nie Alkohol.',
      't|Я иногда хожу в кино.|Ich gehe manchmal ins Kino.',
    ] },
] },
{ n: 206, ln: 6, book: 'AH-A1', series: 'ah', de: 'Dativ, Imperativ', ru: 'Дательный падеж, повелительное', emoji: '🎁', topics: [
  { id: 'ah1_61_dat', de: 'Nomen und Artikel – Dativ', ru: 'Артикли в Dativ (кому?)', rules: [],
    explain: `Глаголы с Dativ (кому?): <b>antworten, danken, glauben, gratulieren, helfen, vertrauen, verzeihen, zuhören</b>; с подлежащим-вещью: <b>gehören, schmecken, gefallen, passen</b>.<br>
      Артикли: der → <b>dem</b>, die → <b>der</b>, das → <b>dem</b>, мн. ч. die → <b>den</b> + <b>-n</b> у существительного (den Kinder<b>n</b>).<br>
      Неопределённый: <b>einem, einer, einem</b>.<br>
      Порядок свободный: Das Essen schmeckt <b>den Leuten</b>. = <b>Den Leuten</b> schmeckt das Essen.`,
    table: [['', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'], ['определённый', 'dem', 'der', 'dem', 'den …n'], ['неопределённый', 'einem', 'einer', 'einem', '— …n']],
    ex: [
      'g|Du hilfst ___ Onkel. (der)|dem|Ты помогаешь дяде.',
      'g|Paul antwortet ___ Professor. (der)|dem|Пауль отвечает профессору.',
      'g|Er dankt ___ Tante. (die)|der|Он благодарит тётю.',
      'g|Ich glaube ___ Reporterin. (die)|der|Я верю репортёрше.',
      'g|Er vertraut ___ Großvater. (der)|dem|Он доверяет дедушке.',
      'g|Das Eis schmeckt ___ Kindern. (die, Plural)|den|Мороженое нравится детям (на вкус).',
      'g|Das Buch gehört ___ Lehrer. (der)|dem|Книга принадлежит учителю.',
      'g|Die Musik gefällt ___ Studentin. (die)|der|Музыка нравится студентке.',
      'g|Die Jacke passt ___ Mädchen. (das)|dem|Куртка подходит девочке.',
      'g|Ich danke ___ Freund. (ein)|einem|Я благодарю (одного) друга.',
      'c|Wir helfen den ___.|Leuten|Leute,Leuts,Leutes|Мы помогаем людям.',
      'o|Das Haus gehört dem Onkel.|Дом принадлежит дяде.',
      't|Пицца нравится детям.|Die Pizza schmeckt den Kindern.',
      't|Я помогаю маме.|Ich helfe der Mutter.',
    ] },
  { id: 'ah1_62_pdat', de: 'Pronomen – Dativ', ru: 'Местоимения: mir, dir, ihm …', rules: [],
    explain: `Dativ: ich → <b>mir</b>, du → <b>dir</b>, er → <b>ihm</b>, sie → <b>ihr</b>, es → <b>ihm</b>, wir → <b>uns</b>, ihr → <b>euch</b>, sie → <b>ihnen</b>, Sie → <b>Ihnen</b>.<br>
      Glaubst du mir? – Ja, ich glaube <b>dir</b>. · Hört Maria Robert zu? – Ja, sie hört <b>ihm</b> zu.<br>
      Вопрос «кому?» — <b>Wem</b>: <b>Wem</b> gehört das Buch? – Es gehört dem Professor.<br>
      В вопросе местоимение стоит раньше существительного: Gefällt <b>dir</b> der Film? · Gefällt er dir?`,
    table: [['Nom.', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie/Sie'], ['Akk.', 'mich', 'dich', 'ihn', 'sie', 'es', 'uns', 'euch', 'sie/Sie'], ['Dat.', 'mir', 'dir', 'ihm', 'ihr', 'ihm', 'uns', 'euch', 'ihnen/Ihnen']],
    ex: [
      'c|Glaubst du der Studentin? – Nein, ich glaube ___ nicht.|ihr|ihm,sie,ihnen|Веришь студентке? — Нет, не верю ей.',
      'c|Antwortest du Peter? – Ja, ich antworte ___.|ihm|ihn,ihr,ihnen|Отвечаешь Петеру? — Да, отвечаю ему.',
      'c|Dankst du den Leuten? – Ja, ich danke ___.|ihnen|ihn,ihr,sie|Благодаришь людей? — Да.',
      'c|Vertraust du Eva? – Ja, ich vertraue ___.|ihr|sie,ihm,ihnen|Доверяешь Еве? — Да.',
      'c|Glaubst du Max und Maria? – Ja, ich glaube ___.|ihnen|ihr,sie,ihm|Веришь Максу и Марии? — Да.',
      'c|Hörst du uns zu? – Ja, ich höre ___ zu.|euch|uns,ihnen,dir|Слушаешь нас? — Да, слушаю вас.',
      'c|Verzeihst du uns? – Ja, ich verzeihe ___.|euch|uns,ihnen,euer|Прощаешь нас? — Да, прощаю вас.',
      'c|___ gehört das Buch? – Dem Professor.|Wem|Wer,Wen,Was|Кому принадлежит книга? — Профессору.',
      'g|Schmeckt Maria der Wein? – Ja, er schmeckt ___ ziemlich gut. (sie)|ihr|Марии нравится вино? — Да, довольно хорошо.',
      'g|Schmecken Max die Pommes? – Ja, sie schmecken ___ gut. (er)|ihm|Максу нравится картошка фри? — Да.',
      'g|Wie schmeckt ___ das Steak? (du)|dir|Как тебе стейк?',
      't|Фильм мне нравится.|Der Film gefällt mir.||Mir gefällt der Film.',
      't|Я помогаю тебе.|Ich helfe dir.',
    ] },
  { id: 'ah1_63_imp', de: 'Imperativ', ru: 'Повелительное: komm! kommt! kommen Sie!', rules: [],
    explain: `<b>du</b>: основа без -st и без du: komm<s>st</s> → <b>Komm!</b>, warte! (основа на -t/-d получает -e). Смена e → i(e) сохраняется: lies! nimm! gib! sprich! iss! — но <b>без умляута</b>: fahr! schlaf! lauf!<br>
      <b>ihr</b>: форма ihr без местоимения: <b>Kommt!</b> Wartet!<br>
      <b>Sie</b>: глагол + Sie: <b>Kommen Sie!</b><br>
      sein: <b>Sei!</b> Seid! Seien Sie! · Отделяемая приставка — в конец: <b>Ruf</b> mich <b>an</b>!`,
    table: [['', 'du', 'ihr', 'Sie'], ['gehen', 'Geh!', 'Geht!', 'Gehen Sie!'], ['warten', 'Warte!', 'Wartet!', 'Warten Sie!'], ['lesen', 'Lies!', 'Lest!', 'Lesen Sie!'], ['fahren', 'Fahr!', 'Fahrt!', 'Fahren Sie!'], ['sein', 'Sei!', 'Seid!', 'Seien Sie!']],
    ex: [
      'g|Maria, ___ bitte die Tasche! (nehmen, du)|nimm|Мария, возьми, пожалуйста, сумку!',
      'g|Carlos und Peter, ___ bitte nicht so laut! (sprechen, ihr)|sprecht|Карлос и Петер, не говорите так громко!',
      'g|Claudia, ___ Max bitte das Besteck! (geben, du)|gib|Клаудия, дай Максу приборы!',
      'g|Herr Meier, ___ bitte das Paket! (holen, Sie)|holen Sie|Господин Майер, заберите посылку!',
      'g|Klaus, ___ nicht so schnell! (essen, du)|iss|Клаус, не ешь так быстро!',
      'g|Robert, ___ bitte leise! (sein, du)|sei|Роберт, будь тише!',
      'g|___ bitte 5 Minuten, Julia! (warten, du)|Warte|Подожди 5 минут, Юлия!',
      'g|Ich bin müde. – Dann ___ ins Bett! (gehen, du)|geh|Я устал. — Тогда иди спать!',
      'g|Ich habe Kopfschmerzen. – Dann ___ eine Tablette! (nehmen, du)|nimm|Голова болит. — Тогда прими таблетку!',
      'g|___ bitte langsamer! (fahren, du)|Fahr|Езжай медленнее!',
      'c|___ mich bitte an!|Ruf|Rufst,Anruf,Rufe an|Позвони мне!',
      'c|Kinder, ___ jetzt ruhig!|seid|sei,seien,sind|Дети, ведите себя тихо!',
      't|Подождите, пожалуйста! (Sie)|Warten Sie bitte!||Bitte warten Sie!',
      't|Иди сюда! (du)|Komm her!',
    ] },
] },
{ n: 207, ln: 7, book: 'AH-A1', series: 'ah', de: 'Satzstruktur, Modalverben, Dativpräpositionen', ru: 'Порядок слов, модальные, предлоги с Dativ', emoji: '🧱', topics: [
  { id: 'ah1_71_satz', de: 'Satzstrukturen – Aussagesatz', ru: 'Глагол всегда на 2-м месте', rules: [],
    explain: `В утвердительном предложении <b>сказуемое (Prädikat) всегда на 2-м месте</b>. На 1-е место можно поставить подлежащее или другую часть — тогда подлежащее идёт <b>сразу после глагола</b>:<br>
      <b>Der Bus</b> fährt zum Rathaus. → <b>Zum Rathaus</b> fährt der Bus.<br>
      Mein Onkel fliegt am Montag nach Malta. → <b>Am Montag</b> fliegt mein Onkel nach Malta.<br>
      Порядок обстоятельств обычно: <b>время → место</b> (am Montag nach Malta).`,
    table: [['Позиция I', 'Prädikat', 'Subjekt', '…'], ['Ich', 'verreise', '—', 'nächste Woche.'], ['Nächste Woche', 'verreise', 'ich.', ''], ['Der Kollegin', 'gehört', 'der Schirm.', '']],
    ex: [
      'o|Der Kollegin gehört der Schirm.|Зонт принадлежит коллеге.',
      'o|Zum Rathaus fährt der Bus.|К ратуше едет автобус.',
      'o|Nächste Woche verreise ich.|На следующей неделе я уезжаю.',
      'o|Gerne hilfst du den Kollegen.|Ты охотно помогаешь коллегам.',
      'o|Am Montag fliegt mein Onkel nach Malta.|В понедельник мой дядя летит на Мальту.',
      'o|Nach Malta fliegt mein Onkel am Montag.|На Мальту дядя летит в понедельник.',
      'o|Jeden Freitag trifft Max seine Freunde in der Kneipe.|Каждую пятницу Макс встречает друзей в пивной.',
      'c|Morgen ___ nach Rom.|fliegt Monika|Monika fliegt,fliegen Monika,Monika fliegen|Завтра Моника летит в Рим.',
      'c|In der Kneipe ___ seine Freunde.|trifft Max|Max trifft,treffen Max,Max treffen|В пивной Макс встречает друзей.',
      't|Сегодня я работаю.|Heute arbeite ich.',
      't|В понедельник мы едем в Берлин.|Am Montag fahren wir nach Berlin.',
    ] },
  { id: 'ah1_72_modal', de: 'Modalverben', ru: 'können, dürfen, müssen, sollen, wollen, mögen', rules: [],
    explain: `Модальный глагол — на <b>2-м месте</b>, второй глагол — <b>в конце в инфинитиве</b>: Robert <b>muss</b> auch am Sonntag <b>arbeiten</b>.<br>
      <b>können</b> — мочь, уметь · <b>dürfen</b> — можно, разрешено · <b>müssen</b> — должен (необходимость) · <b>sollen</b> — должен (кто-то сказал) · <b>wollen</b> — хотеть · <b>mögen</b> — любить · <b>möchten</b> — хотел бы.<br>
      У ich и er/sie/es формы одинаковые и без окончания: ich/er <b>kann, darf, muss, soll, will, mag</b>.<br>
      Отделяемый глагол в конце целиком: Eva muss jetzt <b>einsteigen</b>.`,
    table: [['', 'können', 'dürfen', 'müssen', 'sollen', 'wollen', 'mögen'], ['ich', 'kann', 'darf', 'muss', 'soll', 'will', 'mag'], ['du', 'kannst', 'darfst', 'musst', 'sollst', 'willst', 'magst'], ['er/sie/es', 'kann', 'darf', 'muss', 'soll', 'will', 'mag'], ['wir', 'können', 'dürfen', 'müssen', 'sollen', 'wollen', 'mögen'], ['ihr', 'könnt', 'dürft', 'müsst', 'sollt', 'wollt', 'mögt']],
    ex: [
      'g|Wir ___ nicht mitkommen. (wollen)|wollen|Мы не хотим идти с вами.',
      'g|Ihr ___ nicht früh aufstehen. (wollen)|wollt|Вы не хотите рано вставать.',
      'g|Julia ___ den Satz nicht verstehen. (können)|kann|Юлия не может понять предложение.',
      'g|Du ___ den Koffer nicht tragen. (können)|kannst|Ты не можешь нести чемодан.',
      'g|Robert ___ nicht ausgehen. (dürfen)|darf|Роберту нельзя гулять.',
      'g|Kinder ___ keinen Alkohol trinken. (dürfen)|dürfen|Детям нельзя пить алкоголь.',
      'g|Carlos ___ die Wörter lernen. (müssen)|muss|Карлос должен выучить слова.',
      'g|Ihr ___ noch einkaufen. (müssen)|müsst|Вам ещё нужно сделать покупки.',
      'g|Ich ___ Erdbeeren. (mögen)|mag|Я люблю клубнику.',
      'g|___ du Schach spielen? – Ja, ich kann Schach spielen. (können)|Kannst|Ты умеешь играть в шахматы?',
      'o|Paul muss das Fahrrad reparieren.|Пауль должен починить велосипед.',
      'o|Ich will den Kuchen nicht essen.|Я не хочу есть пирог.',
      't|Я хотел бы съесть клубнику.|Ich möchte Erdbeeren essen.',
      't|Ты умеешь играть в теннис?|Kannst du Tennis spielen?',
    ] },
  { id: 'ah1_73_pdat', de: 'Präpositionen mit Dativ', ru: 'aus, bei, mit, nach, seit, von, zu', rules: [],
    explain: `После <b>aus, bei, mit, nach, seit, von, zu</b> (и gegenüber) — всегда <b>Dativ</b>.<br>
      <b>aus</b> — из (Ich komme aus der Türkei) · <b>bei</b> — у, при (bei meiner Oma, beim Arzt) · <b>mit</b> — с, на (mit dem Bus) · <b>nach</b> — в (города/страны без артикля), после (nach dem Essen), nach Hause · <b>seit</b> — уже … (seit einem Jahr) · <b>von</b> — от, из (vom Arzt) · <b>zu</b> — к (zum Arzt, zur Schule), zu Hause.<br>
      Слияния: bei dem → <b>beim</b>, von dem → <b>vom</b>, zu dem → <b>zum</b>, zu der → <b>zur</b>.`,
    table: [['Предлог', 'Пример'], ['aus', 'aus dem Haus, aus der Schweiz'], ['bei', 'beim Arzt, bei der Arbeit'], ['mit', 'mit dem Zug, mit der U-Bahn'], ['nach', 'nach dem Kurs, nach Berlin'], ['seit', 'seit einer Woche'], ['von', 'vom Bahnhof, von der Arbeit'], ['zu', 'zum Arzt, zur Post']],
    ex: [
      'g|Ich fahre mit ___ Bus. (der)|dem|Я еду на автобусе.',
      'g|Er kommt gerade aus ___ Haus. (das)|dem|Он как раз выходит из дома.',
      'g|Ich wohne seit ___ Jahr in Wien. (ein)|einem|Я живу в Вене уже год.',
      'g|Nach ___ Arbeit gehe ich einkaufen. (die)|der|После работы я иду за покупками.',
      'g|Sie kommt von ___ Kindern. (die, Plural)|den|Она идёт от детей.',
      'c|Ich gehe ___ Arzt.|zum|zur,zu der,beim|Я иду к врачу.',
      'c|Wir gehen ___ Schule.|zur|zum,zu dem,bei|Мы идём в школу.',
      'c|Ich war gestern ___ Arzt.|beim|zum,vom,bei der|Я вчера был у врача.',
      'c|Sie kommt gerade ___ Bahnhof.|vom|von der,zum,aus|Она идёт с вокзала.',
      'c|Morgen fliegen wir ___ Spanien.|nach|zu,in der,bei|Завтра мы летим в Испанию.',
      'c|Wann kommst du ___ Hause?|nach|zu,bei,in|Когда ты придёшь домой?',
      'c|Am Abend bin ich ___ Hause.|zu|nach,bei,in|Вечером я дома.',
      't|Я еду на поезде.|Ich fahre mit dem Zug.',
      't|Я иду к врачу.|Ich gehe zum Arzt.',
    ] },
] },
{ n: 208, ln: 8, book: 'AH-A1', series: 'ah', de: 'Perfekt, Konjunktionen, Akkusativpräpositionen', ru: 'Perfekt, союзы, предлоги с Akkusativ', emoji: '⏪', topics: [
  { id: 'ah1_81_perf', de: 'Perfekt', ru: 'Прошедшее время Perfekt', rules: [],
    explain: `Perfekt = <b>haben / sein</b> (на 2-м месте) + <b>Partizip II</b> (в конце). Ich <b>habe</b> ein Eis <b>gekauft</b>.<br>
      <b>sein</b> — с глаголами движения и изменения состояния (gehen, fahren, kommen, reisen, passieren …): Max <b>ist</b> ins Kino <b>gegangen</b>.<br>
      Слабые: <b>ge-…-t</b>: kaufen → gekauft, arbeiten → gearbeitet · на <b>-ieren</b> — без ge: telefoniert.<br>
      Сильные: <b>ge-…-en</b>, часто со сменой гласной: sprechen → gesprochen, gehen → gegangen.<br>
      Смешанные: bringen → gebracht, denken → gedacht, wissen → gewusst, kennen → gekannt.<br>
      Неотделяемые приставки (be-, ver-, er-, emp- …) — <b>без ge</b>: besucht, verloren, erkannt. Отделяемые — ge после приставки: auf<b>ge</b>macht, an<b>ge</b>kommen.`,
    table: [['Infinitiv', 'Partizip II', 'Hilfsverb'], ['kaufen', 'gekauft', 'haben'], ['reisen', 'gereist', 'sein'], ['sprechen', 'gesprochen', 'haben'], ['gehen', 'gegangen', 'sein'], ['bringen', 'gebracht', 'haben'], ['besuchen', 'besucht', 'haben'], ['aufmachen', 'aufgemacht', 'haben']],
    ex: [
      'g|Du ___ den Wagen ___. (kaufen)|hast … gekauft|Ты купил машину.',
      'g|Er ___ in Köln ___. (wohnen)|hat … gewohnt|Он жил в Кёльне.',
      'g|Wir ___ auf den Bus ___. (warten)|haben … gewartet|Мы ждали автобус.',
      'g|Lisa ___ Informatik ___. (studieren)|hat … studiert|Лиза изучала информатику.',
      'g|Paul ___ nach Japan ___. (reisen)|ist … gereist|Пауль поехал в Японию.',
      'g|Ich ___ den Tee schon ___. (trinken)|habe … getrunken|Я уже выпил чай.',
      'g|Was ___ du ___? (essen)|hast … gegessen|Что ты ел?',
      'g|Wohin ___ du ___? (fahren)|bist … gefahren|Куда ты ездил?',
      'g|___ du das Paket ___? (bringen)|Hast … gebracht|Ты принёс посылку?',
      'g|Das ___ ich nicht ___. (wissen)|habe … gewusst|Этого я не знал.',
      'g|Du ___ etwas ___. (einkaufen)|hast … eingekauft|Ты что-то купил.',
      'c|Ein Unfall ___ passiert.|ist|hat,hast,habe|Произошла авария.',
      'c|Was hast du ___?|bekommen|gebekommen,bekommt,begekommen|Что ты получил?',
      't|Я купил мороженое.|Ich habe ein Eis gekauft.',
      't|Мы пошли в кино.|Wir sind ins Kino gegangen.',
    ] },
  { id: 'ah1_82_konj', de: 'Konjunktionen', ru: 'und, oder, aber, sondern, denn', rules: [],
    explain: `Эти союзы соединяют два главных предложения и стоят на <b>позиции 0</b> — порядок слов после них не меняется (глагол на 2-м месте):<br>
      <b>und</b> — и (перечисление) · <b>oder</b> — или (альтернатива) · <b>aber</b> — но (противопоставление/ограничение) · <b>sondern</b> — а (исправление после отрицания: nicht …, sondern …) · <b>denn</b> — потому что (причина).<br>
      Monika spielt sehr gut Tennis, <b>denn</b> sie <b>trainiert</b> jeden Tag.<br>
      Если подлежащее одинаковое, после und/oder его можно опустить: Sandra ist Studentin und wohnt in Wien.`,
    table: [['0', 'I', 'II', '…'], ['denn', 'sie', 'trainiert', 'jeden Tag.'], ['aber', 'heute', 'habe', 'ich keine Zeit.'], ['sondern', 'er', 'wohnt', 'in Bonn.']],
    ex: [
      'c|Jonas kann mich heute nicht besuchen, ___ er muss noch lange arbeiten.|denn|und,oder,sondern|Йонас не может прийти, потому что долго работает.',
      'c|Du kannst wählen. Wir können ins Kino ___ ins Theater gehen.|oder|und,aber,denn|Выбирай: в кино или в театр.',
      'c|Paul ist ein sehr guter Koch, ___ er kocht oft für seine Familie.|und|oder,sondern,aber|Пауль хороший повар и часто готовит для семьи.',
      'c|Wir möchten nächsten Monat in Urlaub fahren, ___ wir haben leider kein Geld.|aber|denn,oder,sondern|Мы хотим в отпуск, но у нас нет денег.',
      'c|Sie können die Rechnung bar ___ mit Karte bezahlen.|oder|und,aber,sondern|Можно платить наличными или картой.',
      'c|Ich will nicht in dieses Restaurant gehen, ___ der Service ist sehr schlecht.|denn|aber,sondern,oder|Не хочу туда, потому что сервис плохой.',
      'c|Ich schicke dir keine E-Mail, ___ ein Foto.|sondern|aber,oder,denn|Я пришлю тебе не письмо, а фото.',
      'c|Paul wohnt nicht in Köln, ___ in Bonn.|sondern|aber,und,denn|Пауль живёт не в Кёльне, а в Бонне.',
      'c|Boris arbeitet viel und hart, ___ er verdient nur sehr wenig Geld.|aber|denn,sondern,oder|Борис много работает, но мало зарабатывает.',
      'o|Ich räume mein Zimmer auf und Robert putzt die Küche.|Я убираю комнату, а Роберт моет кухню.',
      'o|Sie fliegen nicht nach Kreta, denn ihre Mutter liegt im Krankenhaus.|Они не летят на Крит, потому что их мама в больнице.',
      't|Я не пью вино, а пью пиво.|Ich trinke keinen Wein, sondern Bier.',
      't|Я иду домой, потому что я устал.|Ich gehe nach Hause, denn ich bin müde.',
    ] },
  { id: 'ah1_83_pakk', de: 'Präpositionen mit Akkusativ', ru: 'bis, durch, für, gegen, ohne, um', rules: [],
    explain: `После <b>bis, durch, für, gegen, ohne, um</b> — всегда <b>Akkusativ</b>.<br>
      <b>bis</b> — до (bis morgen, bis München) · <b>durch</b> — через, сквозь (durch die Stadt) / из-за (durch einen Unfall) · <b>für</b> — для (für die Tante), на срок (für zwei Wochen) · <b>gegen</b> — о, против (gegen den Baum, gegen den Plan) · <b>ohne</b> — без (ohne Schirm) · <b>um</b> — вокруг (um den Tisch), в (um 18 Uhr).<br>
      Слияния: durch das → <b>durchs</b>, für das → <b>fürs</b>, um das → <b>ums</b>.`,
    table: [['Предлог', 'Значение', 'Пример'], ['bis', 'до', 'bis nächste Woche'], ['durch', 'через', 'durch den Park'], ['für', 'для, на', 'für meinen Vater'], ['gegen', 'против, о', 'gegen die Wand'], ['ohne', 'без', 'ohne meinen Freund'], ['um', 'вокруг, в', 'um den Tisch, um 8 Uhr']],
    ex: [
      'g|Paul fährt ohne sein___ Kollegin zur Konferenz. (Endung)|e|Пауль едет на конференцию без коллеги.',
      'g|Der Hund läuft um d___ Baum. (Endung)|en|Собака бегает вокруг дерева.',
      'g|Ich bin gegen d___ Stuhl gelaufen. Aua! (Endung)|en|Я налетел на стул. Ой!',
      'g|Das Geschenk ist für dein___ Großvater. (Endung)|en|Подарок для твоего дедушки.',
      'g|Er will nicht ohne m___ nach Spanien fliegen. (ich)|ich|Он не хочет лететь в Испанию без меня.',
      'g|Für w___ ist die Torte hier? (wer)|en|Для кого этот торт?',
      'c|Die Gäste sitzen ___ den Tisch und trinken Wein.|um|durch,ohne,bis|Гости сидят вокруг стола и пьют вино.',
      'c|Der Mechaniker muss den Wagen ___ nächsten Freitag reparieren.|bis|um,für,durch|Механик должен починить машину до пятницы.',
      'c|Es ist kalt. Geh nicht ___ Jacke raus!|ohne|für,durch,gegen|Холодно. Не выходи без куртки!',
      'c|Er will Rosen ___ die Freundin kaufen.|für|ohne,gegen,um|Он хочет купить розы для подруги.',
      'c|Das ist eine schlechte Idee. Ich bin ___ die Idee.|gegen|für,ohne,um|Плохая идея. Я против.',
      'c|Sie kommt immer ___ 18.00 Uhr nach Hause.|um|bis,für,gegen|Она всегда приходит домой в 18:00.',
      'c|Er sieht ___ das Fenster auf die Straße.|durch|um,gegen,für|Он смотрит через окно на улицу.',
      't|Подарок для тебя.|Das Geschenk ist für dich.',
    ] },
] },

/* ───────────── A2 ───────────── */
{ n: 301, ln: 1, book: 'AH-A2', series: 'ah', de: 'weil/da, Dativ + Akkusativ, Modalverben Präteritum', ru: 'Причина, два объекта, модальные в прошлом', emoji: '❓', topics: [
  { id: 'ah2_11_kausal', de: 'Nebensätze – kausal (weil, da)', ru: 'Придаточные причины: weil, da', rules: [],
    explain: `<b>weil / da</b> = «потому что / так как». В придаточном (Nebensatz) спрягаемый глагол стоит <b>в КОНЦЕ</b>:<br>
      Monika spielt gut Tennis, <b>weil</b> sie viel <b>trainiert</b>.<br>
      Отделяемые глаголы в конце <b>пишутся слитно</b>: …, weil er nie richtig <b>zuhört</b>.<br>
      Если придаточное стоит первым, главное начинается с глагола: <b>Weil</b> Max Hunger hat, <b>möchte</b> er jetzt ins Restaurant gehen.`,
    table: [['Hauptsatz', 'Konjunktion', '…', 'ENDE'], ['Monika spielt gut Tennis,', 'weil', 'sie viel', 'trainiert.'], ['Max kommt nicht,', 'weil', 'er keine Zeit', 'hat.'], ['Paul versteht uns nicht,', 'weil', 'er nie richtig', 'zuhört.']],
    ex: [
      'g|Beate kommt nicht, weil sie starke Kopfschmerzen ___. (haben)|hat|Беата не придёт, потому что у неё сильно болит голова.',
      'g|Inge kommt nicht, weil sie noch etwas erledigen ___. (müssen)|muss|Инге не придёт, потому что ей ещё нужно кое-что сделать.',
      'g|Carmen kommt nicht, weil sie ihre Wohnung ___. (aufräumen)|aufräumt|Кармен не придёт, потому что убирает квартиру.',
      'g|Maria kommt nicht, weil sie ihren Mann vom Flughafen ___. (abholen)|abholt|Мария не придёт, потому что забирает мужа из аэропорта.',
      'g|Lisa kommt nicht, weil sie bald nach Wien ___. (umziehen)|umzieht|Лиза не придёт, потому что скоро переезжает в Вену.',
      'o|Max kommt nicht, weil er keine Zeit hat.|Макс не придёт, потому что у него нет времени.',
      'o|Weil Max sich unwohl fühlt, geht er zum Arzt.|Так как Макс плохо себя чувствует, он идёт к врачу.',
      'o|Weil Lisa heute Geburtstag hat, kauft Paul einen Blumenstrauß.|Так как у Лизы день рождения, Пауль покупает букет.',
      'c|Christian kann nicht mitkommen, weil er sich ___.|erkältet hat|hat erkältet,erkältet,hat sich erkältet|Кристиан не может пойти, потому что простудился.',
      'c|Weil Eva mit der Arbeit noch nicht fertig ist, ___ nicht kommen.|kann sie|sie kann,sie kann nicht,können sie|Ева не может прийти, так как не закончила работу.',
      't|Я не приду, потому что я болен.|Ich komme nicht, weil ich krank bin.',
      't|Так как у меня нет времени, я остаюсь дома.|Weil ich keine Zeit habe, bleibe ich zu Hause.||Da ich keine Zeit habe, bleibe ich zu Hause.',
    ] },
  { id: 'ah2_12_dakk', de: 'Verben mit Dativ- und Akkusativobjekt', ru: 'Кому + что: порядок двух дополнений', rules: [],
    explain: `Глаголы geben, schenken, schreiben, zeigen, erklären, schicken, erzählen, anbieten, empfehlen, bringen … имеют два дополнения: <b>кому</b> (Dativ, обычно человек) и <b>что</b> (Akkusativ, обычно вещь).<br>
      <b>Два существительных</b>: Dativ перед Akkusativ — Ich gebe <b>der Studentin das Buch</b>.<br>
      <b>Одно местоимение</b>: местоимение раньше существительного — Ich gebe <b>ihr</b> das Buch. · Ich gebe <b>es</b> der Studentin.<br>
      <b>Два местоимения</b>: Akkusativ перед Dativ — Ich gebe <b>es ihr</b>.`,
    table: [['', 'Пример', 'Правило'], ['два существительных', 'Ich gebe der Studentin das Buch.', 'Dat. → Akk.'], ['одно местоимение', 'Ich gebe ihr das Buch. / Ich gebe es der Studentin.', 'местоимение первым'], ['два местоимения', 'Ich gebe es ihr.', 'Akk. → Dat.']],
    ex: [
      'g|Du gibst ___ ___ Schlüssel. (ich, der)|mir … den|Ты даёшь мне ключ.',
      'g|Er erzählt ___ ___ Geschichte. (ich, eine)|mir … eine|Он рассказывает мне историю.',
      'g|Ich zeige ___ ___ Zimmer. (du, das)|dir … das|Я показываю тебе комнату.',
      'g|Lena erklärt ___ ___ Problem. (du, das)|dir … das|Лена объясняет тебе проблему.',
      'c|Empfiehlst du Max das Restaurant? – Ja, ich empfehle ___.|es ihm|ihm es,es ihn,ihn es|Рекомендуешь Максу ресторан? — Да.',
      'c|Liest du mir die Übung vor? – Ja, ich lese ___ vor.|sie dir|dir sie,sie dich,ihr dir|Прочитаешь мне упражнение? — Да.',
      'c|Zeigst du Lena das Museum? – Ja, ich zeige ___.|es ihr|ihr es,es sie,sie es|Покажешь Лене музей? — Да.',
      'c|Erklärst du den Touristen den Weg? – Ja, ich erkläre ___.|ihn ihnen|ihnen ihn,ihn sie,es ihnen|Объяснишь туристам дорогу? — Да.',
      'c|Schickst du der Tante die Blumen? – Ja, ich schicke ___.|sie ihr|ihr sie,sie sie,ihr es|Пошлёшь тёте цветы? — Да.',
      'o|Du schenkst den Kindern Schokolade.|Ты даришь детям шоколад.',
      'o|Der Lehrer erklärt uns die Grammatik.|Учитель объясняет нам грамматику.',
      'o|Der Dieb stiehlt der Touristin die Kamera.|Вор крадёт у туристки фотоаппарат.',
      't|Я даю ей книгу.|Ich gebe ihr das Buch.',
      't|Я даю её (книгу) ей.|Ich gebe es ihr.',
    ] },
  { id: 'ah2_13_modpraet', de: 'Präteritum – Modalverben', ru: 'wollte, konnte, musste …', rules: [],
    explain: `Модальные в прошедшем обычно в Präteritum: основа <b>без умляута</b> + <b>-te</b>:<br>
      wollen → <b>wollte</b>, können → <b>konnte</b>, müssen → <b>musste</b>, dürfen → <b>durfte</b>, sollen → <b>sollte</b>, mögen → <b>mochte</b>; möchte(n) → <b>wollte</b>.<br>
      Окончания: ich wollte, du wolltest, er wollte, wir wollten, ihr wolltet, sie wollten.<br>
      Инфинитив — в конце: Er <b>wollte</b> nach Frankfurt <b>fahren</b>.`,
    table: [['', 'wollen', 'können', 'müssen', 'dürfen'], ['ich', 'wollte', 'konnte', 'musste', 'durfte'], ['du', 'wolltest', 'konntest', 'musstest', 'durftest'], ['er/sie/es', 'wollte', 'konnte', 'musste', 'durfte'], ['wir', 'wollten', 'konnten', 'mussten', 'durften'], ['ihr', 'wolltet', 'konntet', 'musstet', 'durftet']],
    ex: [
      'g|Ich ___ nicht kommen. (können)|konnte|Я не смог прийти.',
      'g|Am Wochenende ___ ich ins Kino gehen. (wollen)|wollte|На выходных я хотел пойти в кино.',
      'g|Du ___ am Samstag arbeiten. (müssen)|musstest|Тебе пришлось работать в субботу.',
      'g|Wir ___ das Problem lösen. (können)|konnten|Мы смогли решить проблему.',
      'g|Ihr ___ den Chef anrufen. (sollen)|solltet|Вам нужно было позвонить шефу.',
      'g|Du ___ den Zettel nicht zerreißen. (dürfen)|durftest|Тебе нельзя было рвать записку.',
      'g|Ihr ___ die U-Bahn nehmen. (müssen)|musstet|Вам пришлось ехать на метро.',
      'g|Früher ___ ich keinen Fisch. (mögen)|mochte|Раньше я не любил рыбу.',
      'o|Er wollte nach Frankfurt fahren.|Он хотел поехать во Франкфурт.',
      'o|Ich wollte meiner Schwester eine Mail senden.|Я хотел отправить сестре письмо.',
      'c|Max ___ bei der Firma anrufen.|sollte|sollt,sollen,söllte|Макс должен был позвонить в фирму.',
      't|Я должен был купить билет.|Ich musste eine Fahrkarte kaufen.',
      't|Мы не могли прийти.|Wir konnten nicht kommen.',
    ] },
] },
{ n: 302, ln: 2, book: 'AH-A2', series: 'ah', de: 'Genitiv, n-Deklination, Adjektivdeklination', ru: 'Родительный, n-склонение, окончания прилагательных', emoji: '🧳', topics: [
  { id: 'ah2_21_gen', de: 'Genitiv', ru: 'Родительный падеж: des Mannes, der Frau', rules: [],
    explain: `Genitiv отвечает на вопрос <b>wessen?</b> (чей?) и обозначает принадлежность: Das ist der Koffer <b>des Gastes</b>.<br>
      Артикли: м. р. и ср. р. <b>des / eines</b> + <b>-s / -es</b> у существительного; ж. р. и мн. ч. <b>der / einer</b>.<br>
      <b>-s</b> — у многосложных (des Wagen<b>s</b>, des Onkel<b>s</b>, des Lehrer<b>s</b>); <b>-es</b> — у многих односложных и на -s, -ss, -ß, -sch, -z, -tz (des Buch<b>es</b>, des Fuß<b>es</b>, des Tisch<b>es</b>).<br>
      Имена: <b>Julias</b> Wohnung, <b>Pauls</b> Fahrrad. Притяжательные — как ein: meines Bruders, ihrer Schwester.`,
    table: [['', 'bestimmt', 'unbestimmt'], ['м. р.', 'des …(e)s', 'eines …(e)s'], ['ж. р.', 'der', 'einer'], ['ср. р.', 'des …(e)s', 'eines …(e)s'], ['мн. ч.', 'der', '—']],
    ex: [
      'g|Die Jacke ___ Mannes ist schwarz. (der)|des|Куртка мужчины чёрная.',
      'g|Das Wasser ___ Flusses ist schmutzig. (der)|des|Вода реки грязная.',
      'g|Das Apartment ___ Studentin ist klein. (die)|der|Квартира студентки маленькая.',
      'g|Das Ende ___ Geschichte ist traurig. (die)|der|Конец истории грустный.',
      'g|Das Gepäck ___ Gäste ist schwer. (die, Plural)|der|Багаж гостей тяжёлый.',
      'g|Kennst du den Titel des ___? (das Buch)|Buches|Ты знаешь название книги?',
      'g|Kennst du den Autor des ___? (der Roman)|Romans|Ты знаешь автора романа?',
      'g|Das ist der Hut ___ Bruders. (mein)|meines|Это шляпа моего брата.',
      'g|Das sind die Schuhe ___ Schwester. (ihr)|ihrer|Это туфли её сестры.',
      'c|___ Hut ist das?|Wessen|Wer,Wem,Wen|Чья это шляпа?',
      'c|Das ist ___ Fahrrad.|Pauls|Paul,Paulen,des Paul|Это велосипед Пауля.',
      'c|Die Waschmaschine ___ ist kaputt.|Evas|der Eva,Eva,von Evas|Стиральная машина Евы сломалась.',
      't|Это машина моего отца.|Das ist das Auto meines Vaters.||Das ist der Wagen meines Vaters.',
      't|Чей это дом? — Это дом моей тёти.|Wessen Haus ist das? – Das ist das Haus meiner Tante.',
    ] },
  { id: 'ah2_22_ndekl', de: 'n-Deklination', ru: 'n-склонение: den Jungen, dem Studenten', rules: [],
    explain: `Некоторые существительные <b>мужского рода</b> во всех падежах, кроме Nominativ Singular, получают <b>-(e)n</b>: der Patient → den/dem/des Patient<b>en</b>.<br>
      Какие: на <b>-e</b> (der Junge, der Kollege, der Kunde, der Biologe, der Löwe, der Pole), на <b>-ist</b> (der Tourist, der Journalist), <b>-ent</b> (der Student, der Präsident), <b>-ant</b> (der Praktikant, der Elefant), <b>-at, -et, -it, -ot</b> (der Automat, der Pilot); а также der Mensch, der Prinz, der Bär.<br>
      Особые: <b>der Herr</b> → den/dem/des Herr<b>n</b>, мн. ч. die Herr<b>en</b>; der Bauer, der Nachbar → -n.`,
    table: [['', 'Singular', 'Plural'], ['Nom.', 'der Patient', 'die Patienten'], ['Akk.', 'den Patient<b>en</b>', 'die Patienten'], ['Dat.', 'dem Patient<b>en</b>', 'den Patienten'], ['Gen.', 'des Patient<b>en</b>', 'der Patienten']],
    ex: [
      'g|Wie heißt der Junge? – Ich kenne den ___ nicht. (Junge)|Jungen|Как зовут мальчика? — Я его не знаю.',
      'g|Wie heißt der Kollege? – Ich kenne den ___ nicht. (Kollege)|Kollegen|Как зовут коллегу? — Не знаю его.',
      'g|Wie heißt der Student? – Ich kenne den ___ nicht. (Student)|Studenten|Как зовут студента? — Не знаю.',
      'g|Wie heißt der Herr? – Ich kenne den ___ nicht. (Herr)|Herrn|Как зовут господина? — Не знаю.',
      'g|Wie heißt der Nachbar? – Ich kenne den ___ nicht. (Nachbar)|Nachbarn|Как зовут соседа? — Не знаю.',
      'g|Fragst du den ___? (Experte)|Experten|Ты спросишь эксперта?',
      'g|Hilfst du dem ___? (Student)|Studenten|Ты помогаешь студенту?',
      'g|Fotografierst du den ___? (Elefant)|Elefanten|Ты фотографируешь слона?',
      'g|Antwortest du dem ___? (Journalist)|Journalisten|Ты отвечаешь журналисту?',
      'g|Vertraust du Herrn Berg? – Ja, ich vertraue ___ Berg. (Herr)|Herrn|Ты доверяешь господину Бергу? — Да.',
      'c|Der Arzt untersucht den ___.|Patienten|Patient,Patients,Patiente|Врач осматривает пациента.',
      'c|Wir besuchen den ___.|Nachbarn|Nachbar,Nachbaren,Nachbars|Мы навещаем соседа.',
      'c|Ich kenne den ___ nicht.|Arzt|Arzten,Arzte,Ärzten|Я не знаю врача. (Arzt — обычное склонение!)',
      't|Я знаю этого туриста.|Ich kenne den Touristen.||Ich kenne diesen Touristen.',
    ] },
  { id: 'ah2_23_adjdekl', de: 'Deklination des Adjektivs', ru: 'Окончания прилагательных перед существительным', rules: [],
    explain: `После глагола (<b>adverbial</b>) и после sein (<b>prädikativ</b>) — <b>без окончания</b>: Die Erdbeeren sind süß.<br>
      Перед существительным (<b>attributiv</b>) — <b>с окончанием</b>. Простое правило: окончание, которое показывает род и падеж (как у der/die/das: <b>-er, -e, -es, -en, -em</b>), должно появиться <b>один раз</b>:<br>
      • нет артикля → прилагательное берёт «сильное» окончание (таблица 1): frisch<b>es</b> Obst, mit frisch<b>em</b> Obst;<br>
      • артикль уже с окончанием (der, dieser, einem, meinen …) → прилагательное «слабое»: <b>-e / -en</b> (таблица 2): der neu<b>e</b> Computer, mit einem neu<b>en</b> Hut;<br>
      • ein, kein, mein … без окончания (Nom. м. р. и ср. р., Akk. ср. р.) → прилагательное берёт сильное: ein neu<b>er</b> Computer, mein neu<b>es</b> Auto.<br>
      Особые: dunkel → dunk<b>le</b>, teuer → teu<b>re</b>, sauer → sau<b>re</b>, hoch → <b>hohe</b>.`,
    table: [['', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'], ['Nom.', 'der neue / ein neuer', 'die neue / eine neue', 'das neue / ein neues', 'die neuen / neue'], ['Akk.', 'den neuen / einen neuen', 'die neue / eine neue', 'das neue / ein neues', 'die neuen / neue'], ['Dat.', 'dem neuen / einem neuen', 'der neuen / einer neuen', 'dem neuen / einem neuen', 'den neuen / neuen']],
    ex: [
      'g|Kaufst du das ___ Fahrrad? (blau)|blaue|Ты покупаешь синий велосипед?',
      'g|Kaufst du den ___ Koffer? (groß)|großen|Ты покупаешь большой чемодан?',
      'g|Kaufst du die ___ Schuhe? (braun)|braunen|Ты покупаешь коричневые туфли?',
      'g|Schau, das ist mein ___ Auto! (neu)|neues|Смотри, это моя новая машина!',
      'g|Schau, das ist mein ___ Computer! (neu)|neuer|Смотри, это мой новый компьютер!',
      'g|Schau, das ist meine ___ Tasche! (neu)|neue|Смотри, это моя новая сумка!',
      'g|Nein, das ist ein ___ Roman. (langweilig)|langweiliger|Нет, это скучный роман.',
      'g|Schmeckt dir ___ Brot? (alt)|altes|Тебе нравится чёрствый хлеб?',
      'g|Nein, das ___ Brot schmeckt mir nicht. (alt)|alte|Нет, чёрствый хлеб мне не нравится.',
      'g|Ich möchte mir den ___ Pullover kaufen. (grün)|grünen|Я хочу купить зелёный свитер.',
      'c|Ich trinke gern ___ Wein.|trockenen|trocken,trockener,trockenes|Я люблю сухое вино.',
      'c|Das ist ein ___ Bier.|dunkles|dunkeles,dunkler,dunklen|Это тёмное пиво.',
      'c|Das sind ___ Kosten.|hohe|hoche,hoch,hohen|Это высокие расходы.',
      't|Я покупаю новую куртку.|Ich kaufe eine neue Jacke.',
    ] },
] },
{ n: 303, ln: 3, book: 'AH-A2', series: 'ah', de: 'dass-Sätze, Steigerung, reflexive Verben', ru: 'dass, сравнение, возвратные глаголы', emoji: '📈', topics: [
  { id: 'ah2_31_dass', de: 'Nebensätze – dass-Sätze', ru: 'Придаточные с dass', rules: [],
    explain: `<b>dass</b> = «что». Глагол в придаточном — <b>в конце</b>: Paul hat versprochen, <b>dass</b> er mich <b>mitnimmt</b>.<br>
      Часто после: sagen, erklären, behaupten, erzählen, denken, glauben, meinen, planen, erwarten, annehmen, hören, fühlen, wünschen, hoffen, befürchten.<br>
      И после выражений: es freut mich, es ärgert mich, es gefällt mir, es tut mir leid, es ist möglich / wichtig / notwendig / sicher / schade, es stimmt.<br>
      С модальным: …, dass Pavel bald abreisen <b>muss</b>. С Perfekt: …, dass Karl sich erkältet <b>hat</b>.`,
    table: [['Hauptsatz', 'dass', '…', 'ENDE'], ['Ich glaube,', 'dass', 'er heute', 'kommt.'], ['Es ist sicher,', 'dass', 'Pavel bald abreisen', 'muss.'], ['Stimmt es,', 'dass', 'Karl sich erkältet', 'hat?']],
    ex: [
      'g|Ja, Max hat gesagt, dass er diese Stelle ___. (bekommen)|bekommt|Да, Макс сказал, что получит эту должность.',
      'g|Ja, Lisa hat angeboten, dass sie uns bei der Renovierung ___. (helfen)|hilft|Да, Лиза предложила, что поможет нам с ремонтом.',
      'g|Ja, Martin hat erwartet, dass Maria ihn vom Bahnhof ___. (abholen)|abholt|Мартин ожидал, что Мария заберёт его с вокзала.',
      'g|Es ist schade, dass Lena keine Zeit ___. (haben)|hat|Жаль, что у Лены нет времени.',
      'g|Es ist wichtig, dass Paul die Prüfung ___. (schaffen)|schafft|Важно, чтобы Пауль сдал экзамен.',
      'g|Es tut mir leid, dass ich dich nicht mitnehmen ___. (können)|kann|Мне жаль, что я не могу взять тебя с собой.',
      'o|Es ist sicher, dass Pavel bald abreisen muss.|Точно, что Павел скоро должен уехать.',
      'o|Es ärgert mich, dass Max immer zu spät kommt.|Меня злит, что Макс всегда опаздывает.',
      'o|Stimmt es, dass Karl sich erkältet hat?|Правда, что Карл простудился?',
      'c|Es ist möglich, dass Carmen nach Köln ___.|gefahren ist|ist gefahren,fährt gefahren,gefahren hat|Возможно, Кармен уехала в Кёльн.',
      'c|Mich freut, dass meine Kollegen mir zum Geburtstag ___.|gratuliert haben|haben gratuliert,gratulieren haben,gratuliert hat|Меня радует, что коллеги поздравили меня.',
      't|Я думаю, что он прав.|Ich denke, dass er recht hat.||Ich glaube, dass er recht hat.',
      't|Жаль, что ты не можешь прийти.|Es ist schade, dass du nicht kommen kannst.',
    ] },
  { id: 'ah2_32_steig', de: 'Vergleichsformen – Steigerung', ru: 'Komparativ и Superlativ', rules: [],
    explain: `<b>Komparativ</b>: <b>-er</b> + <b>als</b>: Mein Zimmer ist klein<b>er als</b> dein Zimmer. Равенство: <b>so … wie</b>: Yasmin ist so groß wie Lena.<br>
      <b>Superlativ</b> (после sein / у глагола): <b>am …sten</b>: Die Gurken sind <b>am billigsten</b>. После -s, -ss, -ß, -z, -t, -d: <b>am …esten</b> (am kürzesten, am härtesten) — но am größten.<br>
      Умлаут всегда у: alt, arm, hart, kalt, krank, lang, nah, scharf, schwach, stark, warm, groß, hoch, dumm, jung, klug, kurz.<br>
      На -el теряют e: dunkel → dunk<b>ler</b>; на -er/-en могут: teuer → teu<b>rer</b>, trocken → trock(e)ner.<br>
      Неправильные: gut – <b>besser</b> – am <b>besten</b>; hoch – <b>höher</b> – am höchsten; nah – näher – am <b>nächsten</b>; viel – <b>mehr</b> – am <b>meisten</b>; gern – <b>lieber</b> – am <b>liebsten</b>; oft – öfter; bald – eher.`,
    table: [['Positiv', 'Komparativ', 'Superlativ'], ['klein', 'kleiner', 'am kleinsten'], ['alt', 'älter', 'am ältesten'], ['kurz', 'kürzer', 'am kürzesten'], ['gut', 'besser', 'am besten'], ['viel', 'mehr', 'am meisten'], ['gern', 'lieber', 'am liebsten']],
    ex: [
      'g|Mein Wörterbuch ist ___ als dein Wörterbuch. (dick)|dicker|Мой словарь толще твоего.',
      'g|Mein Koffer ist ___ als dein Koffer. (schwer)|schwerer|Мой чемодан тяжелее твоего.',
      'g|Dieser Raum ist ___ als der andere. (groß)|größer|Эта комната больше другой.',
      'g|Dieser Baum ist ___ als der andere. (hoch)|höher|Это дерево выше другого.',
      'g|Dieser Film ist ___ als der andere. (gut)|besser|Этот фильм лучше другого.',
      'g|Diese Farbe ist ___ als die andere. (dunkel)|dunkler|Этот цвет темнее другого.',
      'g|Dieses Flugzeug ist am ___. (schnell)|schnellsten|Этот самолёт самый быстрый.',
      'g|Diese Suppe ist am ___. (scharf)|schärfsten|Этот суп самый острый.',
      'g|Dieser Text ist am ___. (lang)|längsten|Этот текст самый длинный.',
      'g|Dieses Kleid ist am ___. (schön)|schönsten|Это платье самое красивое.',
      'g|In diesem Monat sind die Nächte am ___. (kurz)|kürzesten|В этом месяце ночи самые короткие.',
      'c|Die Wohnung ist so billig ___ das Büro.|wie|als,so,dann|Квартира такая же дешёвая, как офис.',
      'c|Das Büro ist billiger ___ die Wohnung.|als|wie,so,dass|Офис дешевле квартиры.',
      't|Мой брат старше меня.|Mein Bruder ist älter als ich.',
      't|Чай я пью охотнее всего.|Tee trinke ich am liebsten.||Am liebsten trinke ich Tee.',
    ] },
  { id: 'ah2_33_refl', de: 'Reflexive Verben', ru: 'Возвратные глаголы: mich/mir', rules: [],
    explain: `Некоторые глаголы <b>всегда возвратные</b>: sich beeilen, sich freuen, sich merken … Другие можно использовать и так, и так: Ich wasche das Obst. / Ich wasche <b>mich</b>.<br>
      <b>Akkusativ</b> (нет другого дополнения): ich <b>mich</b>, du <b>dich</b>, er/sie/es <b>sich</b>, wir <b>uns</b>, ihr <b>euch</b>, sie/Sie <b>sich</b>.<br>
      <b>Dativ</b> (если есть ещё дополнение в Akkusativ): ich wasche <b>mir</b> das Gesicht, du kaufst <b>dir</b> eine Hose.<br>
      Если подлежащее — существительное, sich можно поставить перед ним: Erinnert <b>sich</b> Max? Если местоимение — нельзя: Erinnerst du <b>dich</b>?`,
    table: [['', 'Akkusativ', 'Dativ'], ['ich', 'mich', 'mir'], ['du', 'dich', 'dir'], ['er/sie/es', 'sich', 'sich'], ['wir', 'uns', 'uns'], ['ihr', 'euch', 'euch'], ['sie/Sie', 'sich', 'sich']],
    ex: [
      'g|Schämst du ___? (sich)|dich|Тебе стыдно?',
      'g|Beeilt Lena ___? (sich)|sich|Лена торопится?',
      'g|Freust du ___? (sich)|dich|Ты радуешься?',
      'g|Fürchtet ihr ___? (sich)|euch|Вы боитесь?',
      'g|Setzen wir ___? (sich)|uns|Сядем?',
      'g|Stellst du ___ vor? (sich)|dich|Ты представишься?',
      'g|Ruhen wir ___ aus? (sich)|uns|Мы отдохнём?',
      'g|Du bestellst ___ einen Tee. (sich)|dir|Ты заказываешь себе чай.',
      'g|Ich putze ___ die Zähne. (sich)|mir|Я чищу зубы.',
      'g|Wir kochen ___ eine Suppe. (sich)|uns|Мы варим себе суп.',
      'g|Klaus hat Urlaub. Klaus freut ___, denn er hat Urlaub. (sich)|sich|Клаус радуется, потому что у него отпуск.',
      'c|Ich kaufe ___ eine Jacke.|mir|mich,dir,sich|Я покупаю себе куртку.',
      'c|Erinnerst du ___?|dich|dir,sich,du|Ты помнишь?',
      't|Я мою руки.|Ich wasche mir die Hände.',
      't|Мы радуемся.|Wir freuen uns.',
    ] },
] },
{ n: 304, ln: 4, book: 'AH-A2', series: 'ah', de: 'Präpositionalobjekt, Pronominaladverbien, wenn/falls', ru: 'Глаголы с предлогами, darüber/worüber, условие', emoji: '🔗', topics: [
  { id: 'ah2_41_prapobj', de: 'Verben mit Präpositionalobjekt', ru: 'Глаголы с предлогом: warten auf …', rules: [],
    explain: `Многие глаголы требуют <b>определённый предлог</b> — его нужно учить вместе с глаголом: Die Leute warten <b>auf</b> den Bus.<br>
      achten/aufpassen <b>auf</b> (A), anfangen/beginnen <b>mit</b> (D), aufhören <b>mit</b> (D), denken <b>an</b> (A), nachdenken <b>über</b> (A), fliehen <b>vor</b> (D), lachen <b>über</b> (A), protestieren <b>gegen</b> (A), rechnen <b>mit</b> (D), sorgen <b>für</b> (A), teilnehmen <b>an</b> (D), warten <b>auf</b> (A); gehören/passen <b>zu</b> (D), riechen/schmecken <b>nach</b> (D).<br>
      bitten um, einladen zu, fragen nach, informieren über; antworten auf, danken für, gratulieren zu, helfen bei, raten zu.<br>
      Возвратные: sich ärgern über, sich engagieren für, sich erinnern an, sich fürchten vor, sich gewöhnen an, sich interessieren für, sich kümmern um, sich treffen/verabreden mit, sich verabschieden von, sich verlassen auf, sich wundern über; sich freuen auf/über, sich bewerben um, sich entscheiden für/gegen, sich vorbereiten auf.`,
    table: [['Глагол', 'Предлог', 'Пример'], ['warten', 'auf + A', 'auf den Bus'], ['denken', 'an + A', 'an meine Freundin'], ['teilnehmen', 'an + D', 'an der Reise'], ['sich interessieren', 'für + A', 'für Politik'], ['sich kümmern', 'um + A', 'um die Katze'], ['sich bedanken', 'bei + D / für + A', 'bei dir für die Hilfe']],
    ex: [
      'c|Viele Leute protestieren ___ die Regierung.|gegen|für,über,auf|Многие протестуют против правительства.',
      'c|Wir haben schon ___ der Arbeit begonnen.|mit|an,auf,von|Мы уже начали работу.',
      'c|Carlo denkt immer nur ___ seine Freundin.|an|über,auf,von|Карло думает только о своей девушке.',
      'c|Die Eltern sorgen ___ die Kinder.|für|um,an,über|Родители заботятся о детях.',
      'c|Rechnest du ___ einem Unwetter?|mit|auf,an,von|Ты рассчитываешь на непогоду?',
      'c|Nimmst du ___ der Reise teil?|an|bei,mit,auf|Ты участвуешь в поездке?',
      'c|Haben die Leute ___ deinen Witz gelacht?|über|an,auf,für|Люди смеялись над твоей шуткой?',
      'c|Schmeckt der Kuchen ___ Schokolade?|nach|von,mit,wie|Пирог пахнет/отдаёт шоколадом?',
      'c|Die Leute an der Küste fliehen ___ dem Sturm.|vor|von,aus,gegen|Люди на побережье бегут от шторма.',
      'g|Ich danke dir ___ deine Hilfe. (Präposition)|für|Спасибо тебе за помощь.',
      'g|Ich gratuliere dir ___ deinem Geburtstag. (Präposition)|zu|Поздравляю тебя с днём рождения.',
      'g|Kümmerst du dich bitte ___ meine Katze? (Präposition)|um|Позаботишься о моей кошке?',
      'g|Interessiert ihr euch nicht ___ Politik? (Präposition)|für|Вы не интересуетесь политикой?',
      'g|Freust du dich ___ dein Geschenk? (Präposition)|über|Ты рад подарку?',
      't|Я жду автобус.|Ich warte auf den Bus.',
    ] },
  { id: 'ah2_42_pronadv', de: 'Pronominaladverbien', ru: 'darüber / über ihn, worüber / über wen', rules: [],
    explain: `Предложный объект-<b>вещь или событие</b> заменяют <b>da(r) + предлог</b>: Ärgerst du dich über die Verspätung? – Ja, ich ärgere mich <b>darüber</b>.<br>
      Если это <b>человек/животное</b> — предлог + местоимение: Ärgerst du dich über deinen Freund? – Ja, ich ärgere mich <b>über ihn</b>.<br>
      <b>r</b> вставляется перед гласной: da<b>r</b>an, da<b>r</b>auf, da<b>r</b>aus, da<b>r</b>über, da<b>r</b>um; иначе: dafür, damit, danach, davon, dazu.<br>
      Вопрос: про вещь — <b>wo(r) + предлог</b> (Worüber ärgerst du dich?), про человека — предлог + wen/wem (Über wen ärgerst du dich?).`,
    table: [['', 'вещь / событие', 'человек'], ['ответ', 'darüber, damit, darauf', 'über ihn, mit ihr, auf sie'], ['вопрос', 'worüber, womit, worauf', 'über wen, mit wem, auf wen']],
    ex: [
      'c|Hast du über den Witz gelacht? – Natürlich habe ich ___ gelacht.|darüber|über ihn,worüber,daran|Ты смеялся над шуткой? — Конечно.',
      'c|Hast du auf den Bus gewartet? – Nein, ich habe nicht ___ gewartet.|darauf|auf ihn,worauf,daran|Ты ждал автобус? — Нет.',
      'c|Hast du auf Jan gewartet? – Nein, ich habe nicht ___ gewartet.|auf ihn|darauf,worauf,auf es|Ты ждал Яна? — Нет.',
      'c|Hast du dich um die Katze gekümmert? – Ja, ich habe mich ___ gekümmert.|um sie|darum,worum,um ihn|Ты позаботился о кошке? — Да.',
      'c|Hast du mit dieser Chance gerechnet? – Ja, ich habe ___ gerechnet.|damit|mit ihr,womit,daran|Ты рассчитывал на этот шанс? — Да.',
      'c|___ hast du dich informiert? – Über die Preise.|Worüber|Über was,Darüber,Über wen|О чём ты узнавал? — О ценах.',
      'c|___ habt ihr gewartet? – Auf unsere Tante.|Auf wen|Worauf,Darauf,Auf was|Кого вы ждали? — Нашу тётю.',
      'c|___ interessiert sich Max? – Für Politik.|Wofür|Für wen,Dafür,Für was|Чем интересуется Макс? — Политикой.',
      'c|___ hat sich Lena bedankt? – Bei Theo.|Bei wem|Wobei,Dabei,Bei wen|Кого поблагодарила Лена? — Тео.',
      'g|Hast du dich auf die Prüfung vorbereitet? – Ja, ich habe mich ___ vorbereitet. (auf)|darauf|Ты подготовился к экзамену? — Да.',
      'g|Hast du dich an die Verabredung erinnert? – Nein, ich habe mich nicht ___ erinnert. (an)|daran|Ты вспомнил о встрече? — Нет.',
      'g|___ hast du dich gefreut? – Eva hat mich angerufen. (über)|Worüber|Чему ты обрадовался? — Ева мне позвонила.',
      't|Я радуюсь этому.|Ich freue mich darüber.',
      't|О чём ты думаешь?|Woran denkst du?',
    ] },
  { id: 'ah2_43_kond', de: 'Nebensätze – konditional (wenn, falls)', ru: 'Условие: wenn / falls', rules: [],
    explain: `<b>wenn / falls</b> = «если». Глагол в придаточном — <b>в конце</b>. Если придаточное стоит первым, главное начинается с глагола (можно добавить <b>dann</b>):<br>
      <b>Wenn</b> du Zeit <b>hast</b>, (dann) <b>können</b> wir uns treffen.<br>
      <b>Wenn</b> es morgen <b>nicht</b> regnet, gehen wir in den Zoo.<br>
      Вместо «Du musst …, sonst / andernfalls …» можно сказать: <b>Wenn</b> du mir <b>nicht</b> hilfst, schaffe ich die Arbeit nicht rechtzeitig.`,
    table: [['Nebensatz', 'Hauptsatz'], ['Wenn du Zeit hast,', '(dann) können wir uns treffen.'], ['Falls es morgen regnet,', 'gehen wir nicht in den Zoo.'], ['Wenn Paul anruft,', 'informiere ich dich.']],
    ex: [
      'o|Wenn Paul anruft, informiere ich dich.|Если Пауль позвонит, я тебе сообщу.',
      'o|Du musst dich in die erste Reihe setzen, wenn du schlecht siehst.|Сядь в первый ряд, если плохо видишь.',
      'o|Wenn ich die Prüfung schaffe, mache ich eine Party.|Если я сдам экзамен, устрою вечеринку.',
      'g|Wenn du Urlaub ___, musst du zum Chef gehen. (brauchen)|brauchst|Если тебе нужен отпуск, иди к шефу.',
      'g|Wenn du den Weg nicht ___, musst du jemanden fragen. (kennen)|kennst|Если не знаешь дороги, спроси кого-нибудь.',
      'g|Wenn Clara wieder zu spät ___, werde ich richtig sauer. (kommen)|kommt|Если Клара снова опоздает, я разозлюсь.',
      'g|Wenn Lena die Nachricht nicht bekommen ___, kann sie nicht antworten. (haben)|hat|Если Лена не получила сообщение, она не может ответить.',
      'c|Wenn wir uns nicht beeilen, ___ zu spät.|kommen wir|wir kommen,kommen,wir kommen nicht|Если мы не поторопимся, мы опоздаем.',
      'c|Wenn ich nicht bald buche, ___ ich kein Hotelzimmer mehr.|bekomme|bekommen,bekommst,bekommt|Если не забронирую скоро, номера не будет.',
      'c|___ du dich nicht wärmer anziehst, erkältest du dich.|Wenn|Dass,Denn,Weil|Если не оденешься теплее, простудишься.',
      't|Если у тебя есть время, позвони мне.|Wenn du Zeit hast, ruf mich an.||Falls du Zeit hast, ruf mich an.',
      't|Если завтра будет дождь, мы останемся дома.|Wenn es morgen regnet, bleiben wir zu Hause.||Falls es morgen regnet, bleiben wir zu Hause.',
    ] },
] },
{ n: 305, ln: 5, book: 'AH-A2', series: 'ah', de: 'Konjunktiv II, Wechselpräpositionen, ähnliche Verben', ru: 'würde/hätte/wäre, где/куда, stellen/stehen', emoji: '📍', topics: [
  { id: 'ah2_51_k2', de: 'Konjunktiv II (würde / hätte / wäre / Modalverben)', ru: 'Сослагательное: würde, hätte, wäre, könnte', rules: [],
    explain: `Konjunktiv II — нереальное, желание, вежливость.<br>
      <b>würde + инфинитив</b> для большинства глаголов: Es wäre besser, wenn sie nicht so schnell fahren <b>würde</b>.<br>
      Свои формы у: haben → <b>hätte</b>, sein → <b>wäre</b>, werden → <b>würde</b>, müssen → <b>müsste</b>, können → <b>könnte</b>, dürfen → <b>dürfte</b>, mögen → <b>möchte</b>; но sollen → <b>sollte</b>, wollen → <b>wollte</b> (без умляута).<br>
      Вежливая просьба: Rufen Sie mich an? → <b>Würden</b> Sie mich bitte anrufen? · Helfen Sie mir? → <b>Könnten</b> Sie mir bitte helfen?<br>
      Wenn ich Urlaub bekommen würde, <b>könnte</b> ich dich besuchen.`,
    table: [['', 'werden', 'haben', 'sein', 'können'], ['ich', 'würde', 'hätte', 'wäre', 'könnte'], ['du', 'würdest', 'hättest', 'wärest', 'könntest'], ['er/sie/es', 'würde', 'hätte', 'wäre', 'könnte'], ['wir', 'würden', 'hätten', 'wären', 'könnten'], ['ihr', 'würdet', 'hättet', 'wäret', 'könntet']],
    ex: [
      'g|müssen – ich muss – ich ___ (Konjunktiv II)|müsste|я должен был бы',
      'g|dürfen – ich darf – ich ___ (Konjunktiv II)|dürfte|мне было бы можно',
      'g|können – ich kann – ich ___ (Konjunktiv II)|könnte|я мог бы',
      'g|sollen – ich soll – ich ___ (Konjunktiv II)|sollte|мне следовало бы',
      'g|wollen – ich will – ich ___ (Konjunktiv II)|wollte|я хотел бы',
      'g|haben – ich habe – ich ___ (Konjunktiv II)|hätte|у меня было бы',
      'g|sein – ich bin – ich ___ (Konjunktiv II)|wäre|я был бы',
      'g|Boris spricht zu leise. Es wäre besser, wenn er nicht so leise sprechen ___. (werden)|würde|Было бы лучше, если бы Борис говорил не так тихо.',
      'g|Christa trinkt zu wenig. Es ___ besser, wenn sie mehr trinken würde. (sein)|wäre|Было бы лучше, если бы Криста пила больше.',
      'g|Grüßt du Paul von mir? – ___ du Paul von mir grüßen? (können)|Könntest|Не мог бы ты передать Паулю привет?',
      'g|Bringt ihr uns zum Bahnhof? – ___ ihr uns zum Bahnhof bringen? (können)|Könntet|Не могли бы вы отвезти нас на вокзал?',
      'c|___ Sie mich bitte anrufen?|Würden|Werden,Wären,Hätten|Не могли бы вы мне позвонить?',
      'c|Wenn ich mehr Zeit ___, würde ich mehr lesen.|hätte|habe,wäre,würde|Если бы у меня было больше времени, я бы больше читал.',
      't|Не могли бы вы мне помочь?|Könnten Sie mir bitte helfen?||Könnten Sie mir helfen?',
      't|Я бы с удовольствием поехал в Италию.|Ich würde gern nach Italien fahren.',
    ] },
  { id: 'ah2_52_wechsel', de: 'Präpositionen mit Dativ und Akkusativ', ru: 'Wechselpräpositionen: wo? — Dativ, wohin? — Akkusativ', rules: [],
    explain: `<b>an, auf, in, hinter, vor, über, unter, neben, zwischen</b>:<br>
      <b>Wo?</b> (место, положение) → <b>Dativ</b>: Herr Berg arbeitet <b>im</b> Büro. · auf <b>dem</b> Tisch.<br>
      <b>Wohin?</b> (движение, направление) → <b>Akkusativ</b>: Herr Berg geht <b>ins</b> Büro. · auf <b>den</b> Tisch.<br>
      <b>Wann?</b> — an, in, vor, zwischen + <b>Dativ</b>: am Samstag, im Winter, vor einer Woche.<br>
      Слияния: an dem → <b>am</b>, an das → <b>ans</b>, in dem → <b>im</b>, in das → <b>ins</b>, auf das → <b>aufs</b>, vor das → <b>vors</b>.<br>
      Das Auto fährt auf <b>der</b> Autobahn (wo? — по ней) · Das Auto fährt auf <b>die</b> Autobahn (wohin? — въезжает на неё).`,
    table: [['', 'Wo? → Dativ', 'Wohin? → Akkusativ'], ['an', 'an der Tafel', 'an die Tafel'], ['auf', 'auf dem Tisch', 'auf den Tisch'], ['in', 'in der Pension / im Kino', 'in die Pension / ins Kino'], ['unter', 'unter dem Sofa', 'unter das Sofa'], ['zwischen', 'zwischen mir und der Kollegin', 'zwischen mich und die Kollegin']],
    ex: [
      'c|Gehst du in ___ Schule?|die|der,den,dem|Ты идёшь в школу?',
      'c|Gehst du in ___ Café?|das|dem,den,der|Ты идёшь в кафе?',
      'c|Ist er in ___ Werkstatt?|der|die,den,dem|Он в мастерской?',
      'c|Ist sie in ___ Wohnzimmer?|dem|das,den,der|Она в гостиной?',
      'g|Sie wartet an d___ Bushaltestelle. (Endung)|er|Она ждёт на остановке.',
      'g|Die Lampe hängt über d___ Schreibtisch. (Endung)|em|Лампа висит над письменным столом.',
      'g|Schreib bitte die Adresse auf d___ Karte! (Endung)|ie|Напиши адрес на открытке!',
      'g|Frau Holm bleibt zwei Tage in d___ Schweiz. (Endung)|er|Фрау Хольм остаётся на два дня в Швейцарии.',
      'g|Stell die Gläser auf d___ Tisch! (Endung)|en|Поставь стаканы на стол!',
      'g|Die Schuhe stehen unter d___ Sofa. (Endung)|em|Туфли стоят под диваном.',
      'g|Sie will über d___ Straße gehen. (Endung)|ie|Она хочет перейти улицу.',
      'g|Der Hund sitzt unter d___ Tisch. (Endung)|em|Собака сидит под столом.',
      'c|Sie geht an ___ Kasse.|die|der,den,dem|Она идёт к кассе (wohin?).',
      'c|Sie steht an ___ Kasse.|der|die,den,das|Она стоит у кассы (wo?).',
      't|Я иду в кино.|Ich gehe ins Kino.',
    ] },
  { id: 'ah2_53_aehnl', de: 'Ähnliche Verben (Aktion – Position)', ru: 'stellen/stehen, legen/liegen, setzen/sitzen', rules: [],
    explain: `<b>Действие (wohin? + Akk.)</b> — слабые глаголы: <b>setzen</b> (сажать), <b>stellen</b> (ставить), <b>legen</b> (класть), <b>hängen</b> (вешать), <b>stecken</b> (засовывать).<br>
      <b>Положение (wo? + Dat.)</b> — сильные: <b>sitzen</b>, <b>stehen</b>, <b>liegen</b>, <b>hängen</b>, <b>stecken</b>.<br>
      Ich <b>setze</b> den Hund in <b>den</b> Korb. → Der Hund <b>sitzt</b> im Korb.<br>
      Ich <b>stelle</b> die Flasche auf <b>den</b> Tisch. → Die Flasche <b>steht</b> auf <b>dem</b> Tisch.<br>
      Ich <b>lege</b> den Wein in <b>den</b> Kühlschrank. → Der Wein <b>liegt</b> im Kühlschrank.<br>
      Возвратно: ich setze <b>mich</b>, ich stelle <b>mich</b> in die Reihe, ich lege <b>mich</b> aufs Sofa.`,
    table: [['Aktion: wohin? + Akk.', 'Position: wo? + Dat.'], ['setzen: Ich setze mich auf meinen Platz.', 'sitzen: Ich sitze auf meinem Platz.'], ['stellen: Ich stelle die Flasche auf den Tisch.', 'stehen: Die Flasche steht auf dem Tisch.'], ['legen: Ich lege den Wein in den Kühlschrank.', 'liegen: Der Wein liegt im Kühlschrank.'], ['hängen: Ich hänge den Mantel in die Garderobe.', 'hängen: Der Mantel hängt in der Garderobe.'], ['stecken: Ich stecke den Brief ins Kuvert.', 'stecken: Der Brief steckt im Kuvert.']],
    ex: [
      'c|Ich ___ das Glas auf den Tisch.|stelle|stehe,lege,liege|Я ставлю стакан на стол.',
      'c|Das Glas ___ neben der Flasche.|steht|stellt,liegt,legt|Стакан стоит рядом с бутылкой.',
      'c|Paul ___ vor der Tür.|steht|stellt,setzt,legt|Пауль стоит у двери.',
      'c|Julia ___ auf dem Sofa.|liegt|legt,stellt,setzt|Юлия лежит на диване.',
      'c|Maria ___ das Buch ins Regal.|stellt|steht,liegt,sitzt|Мария ставит книгу на полку.',
      'c|Passau ___ an der Donau.|liegt|legt,steht,sitzt|Пассау лежит на Дунае.',
      'c|Ich ___ mich ans Fenster.|setze|sitze,stelle,lege|Я сажусь к окну.',
      'c|Wir ___ im Bus.|sitzen|setzen,stellen,legen|Мы сидим в автобусе.',
      'c|Eva ___ die Brille auf die Nase.|setzt|sitzt,steht,liegt|Ева надевает очки (сажает на нос).',
      'c|Der Schlüssel ___ im Schloss.|steckt|liegt,setzt,stellt|Ключ торчит в замке.',
      'g|Max ___ im Krankenhaus. (liegen)|liegt|Макс лежит в больнице.',
      'g|Ich ___ die Uhr an die Wand. (hängen)|hänge|Я вешаю часы на стену.',
      'g|Der Apfel ___ am Baum. (hängen)|hängt|Яблоко висит на дереве.',
      'g|Er ___ das Geld in die Tasche. (stecken)|steckt|Он кладёт деньги в карман.',
      't|Книга лежит на столе.|Das Buch liegt auf dem Tisch.',
    ] },
] },
{ n: 306, ln: 6, book: 'AH-A2', series: 'ah', de: 'Präteritum, Relativsätze, Plusquamperfekt', ru: 'Präteritum, относительные придаточные, Plusquamperfekt', emoji: '📜', topics: [
  { id: 'ah2_61_praet', de: 'Präteritum (Imperfekt)', ru: 'Präteritum: слабые, сильные, смешанные', rules: [],
    explain: `<b>Слабые</b>: основа + <b>-te</b>: kauf-<b>te</b>; основа на -t, -d, -chn, -ffn, -gn → <b>-ete</b>: antwort<b>ete</b>, red<b>ete</b>, rechn<b>ete</b>, öffn<b>ete</b>, regn<b>ete</b>. Глаголы на -eln, -ern, -igen, -ieren — всегда слабые: sammelte, änderte, besichtigte, telefonierte.<br>
      <b>Сильные</b>: меняется корень, у ich и er без окончания: trinken → <b>trank</b>, du trankst, wir tranken. (schreiben → schrieb, finden → fand, laufen → lief, nehmen → nahm, sprechen → sprach, essen → aß, fliegen → flog, bleiben → blieb, gehen → ging, einladen → lud ein, einsteigen → stieg ein, aufstehen → stand auf, ausgeben → gab aus, zurückkommen → kam zurück, anrufen → rief an, mitfahren → fuhr mit, einschlafen → schlief ein).<br>
      <b>Смешанные</b>: смена корня + -te: bringen → <b>brachte</b>, denken → dachte, wissen → wusste, brennen → brannte, kennen → kannte, nennen → nannte, rennen → rannte, senden → sandte, wenden → wandte.<br>
      Отделяемая приставка — в конец: Ich <b>kaufte</b> im Supermarkt <b>ein</b>.`,
    table: [['', 'kaufen', 'arbeiten', 'trinken', 'bringen'], ['ich', 'kaufte', 'arbeitete', 'trank', 'brachte'], ['du', 'kauftest', 'arbeitetest', 'trankst', 'brachtest'], ['er/sie/es', 'kaufte', 'arbeitete', 'trank', 'brachte'], ['wir', 'kauften', 'arbeiteten', 'tranken', 'brachten'], ['ihr', 'kauftet', 'arbeitetet', 'trankt', 'brachtet']],
    ex: [
      'g|Wann fragt Theo die Lehrerin? – Er ___ sie gestern. (fragen)|fragte|Когда Тео спрашивает учительницу? — Он спросил вчера.',
      'g|Wann kündigt Yasmin den Vertrag? – Sie ___ ihn gestern. (kündigen)|kündigte|Ясмин расторгла договор вчера.',
      'g|Wann antwortet ihr der Kollegin? – Wir ___ ihr gestern. (antworten)|antworteten|Мы ответили коллеге вчера.',
      'g|Wann wechselt Lena das Geld? – Sie ___ es gestern. (wechseln)|wechselte|Лена поменяла деньги вчера.',
      'g|Ich ___ keinen Parkplatz. (finden)|fand|Я не нашёл парковку.',
      'g|Ich ___ eine Cola. (nehmen)|nahm|Я взял колу.',
      'g|Ich ___ mit Paul. (sprechen)|sprach|Я поговорил с Паулем.',
      'g|Ich ___ ein Stück Kuchen. (essen)|aß|Я съел кусок пирога.',
      'g|Ich ___ um 6.30 Uhr ___. (aufstehen)|stand … auf|Я встал в 6:30.',
      'g|Lena ___ die Antwort. (wissen)|wusste|Лена знала ответ.',
      'g|Der Dieb ___ mit der Tasche weg. (rennen)|rannte|Вор убежал с сумкой.',
      'g|Murat ___ oft an seine Eltern. (denken)|dachte|Мурат часто думал о родителях.',
      'g|Du ___ den Keller ___. (aufräumen)|räumtest … auf|Ты убрал подвал.',
      'c|Paul ___ Blumen mit.|brachte|bringte,brang,brachtet|Пауль принёс цветы.',
      't|Я купил вчера хлеб.|Ich kaufte gestern Brot.',
    ] },
  { id: 'ah2_62_relativ', de: 'Relativsätze', ru: 'Относительные придаточные: der, den, die, das', rules: [],
    explain: `Относительное придаточное поясняет существительное (как «который»): Bring mir bitte den Brief, <b>der</b> auf dem Schreibtisch <b>liegt</b>. Глагол — <b>в конце</b>.<br>
      <b>Род и число</b> местоимения — как у слова, к которому оно относится; <b>падеж</b> — по роли в придаточном:<br>
      Nominativ (кто?): Kennst du den Herrn, <b>der</b> dort drüben sitzt?<br>
      Akkusativ (кого?): Kennst du den Herrn, <b>den</b> Lena gegrüßt hat?<br>
      Придаточное лучше ставить сразу после слова: Dieser Mantel, <b>den</b> du gekauft hast, gefällt mir.`,
    table: [['', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'], ['Nominativ', 'der', 'die', 'das', 'die'], ['Akkusativ', 'den', 'die', 'das', 'die']],
    ex: [
      'c|Kennst du meinen Onkel, ___ in Hamburg wohnt?|der|den,die,das|Ты знаешь моего дядю, который живёт в Гамбурге?',
      'c|Wie geht es deiner Schwester, ___ nach Berlin gezogen ist?|die|der,den,das|Как дела у сестры, которая переехала в Берлин?',
      'c|Lisa fährt immer mit einem Fahrrad, ___ schon sehr alt ist.|das|der,den,die|Лиза ездит на велосипеде, который уже очень старый.',
      'c|Kennst du die Kinder, ___ im Garten spielen?|die|der,den,das|Знаешь детей, которые играют в саду?',
      'c|Wie heißt der Kollege, ___ dich letzte Woche besucht hat?|der|den,die,das|Как зовут коллегу, который навестил тебя?',
      'c|Kennst du meinen Onkel, ___ ich in Hamburg besucht habe?|den|der,dem,die|Знаешь дядю, которого я навестил в Гамбурге?',
      'c|Morgen habe ich einen Termin, ___ ich auf keinen Fall vergessen darf.|den|der,die,das|Завтра у меня встреча, которую нельзя забыть.',
      'c|Wie heißt das Hotel, ___ du so toll findest?|das|den,der,die|Как называется отель, который тебе так нравится?',
      'c|Wie war der Film, ___ du gestern gesehen hast?|den|der,das,die|Как фильм, который ты вчера смотрел?',
      'c|Kennst du den Mann, ___ Laura geheiratet hat?|den|der,die,dem|Знаешь мужчину, за которого вышла Лаура?',
      'g|Ganz nahe am Meer wohnen die Freunde, ___ wir nächste Woche besuchen. (der / die / das)|die|У самого моря живут друзья, которых мы навестим.',
      'g|Hast du die Übung gemacht, ___ auf Seite 15 steht? (der / die / das)|die|Ты сделал упражнение, которое на странице 15?',
      'o|Der Zug, der nach München fährt, steht auf Gleis 5.|Поезд, который идёт в Мюнхен, стоит на пятом пути.',
      'o|Der Film, den ich gestern gesehen habe, war spannend.|Фильм, который я вчера смотрел, был захватывающим.',
      't|Это мужчина, который живёт здесь.|Das ist der Mann, der hier wohnt.',
    ] },
  { id: 'ah2_63_plusq', de: 'Plusquamperfekt', ru: 'Предпрошедшее: hatte/war + Partizip II', rules: [],
    explain: `Plusquamperfekt показывает, что одно действие произошло <b>раньше другого</b> в прошлом.<br>
      Образование: <b>hatte / war</b> (Präteritum от haben/sein) + <b>Partizip II</b>.<br>
      Max <b>hatte</b> die Speisekarte <b>gelesen</b>, dann bestellte er das Tagesmenü.<br>
      Er bestellte das Tagesmenü. Vorher <b>war</b> sie zehn Kilometer <b>gewandert</b>.<br>
      haben или sein — как в Perfekt.`,
    table: [['', 'haben-Verben', 'sein-Verben'], ['ich', 'hatte gelesen', 'war gewandert'], ['du', 'hattest gelesen', 'warst gewandert'], ['er/sie/es', 'hatte gelesen', 'war gewandert'], ['wir', 'hatten gelesen', 'waren gewandert'], ['ihr', 'hattet gelesen', 'wart gewandert']],
    ex: [
      'g|Eva ___ ein Stück Kuchen ___, dann bestellte sie Kaffee. (essen)|hatte … gegessen|Ева съела кусок пирога, потом заказала кофе.',
      'g|Theo ___ sich ___, dann zog er sich an. (duschen)|hatte … geduscht|Тео принял душ, потом оделся.',
      'g|Lena ___ ___, dann ging sie zu Bett. (fernsehen)|hatte … ferngesehen|Лена посмотрела телевизор, потом пошла спать.',
      'g|Julia ___ alle Fenster ___, dann verließ sie das Haus. (schließen)|hatte … geschlossen|Юлия закрыла все окна, потом ушла из дома.',
      'g|Wir ___ zwei Stunden spazieren ___, dann setzten wir uns in ein Café. (gehen)|waren … gegangen|Мы два часа гуляли, потом сели в кафе.',
      'g|Kai ging zu Bett. Vorher ___ er sich die Zähne ___. (putzen)|hatte … geputzt|Кай пошёл спать. До этого он почистил зубы.',
      'g|Wir gingen ins Hotel. Vorher ___ wir die Stadt ___. (besichtigen)|hatten … besichtigt|Мы пошли в отель. До этого осмотрели город.',
      'g|Paul zog nach Wien. Vorher ___ er zwei Jahre in Salzburg ___. (leben)|hatte … gelebt|Пауль переехал в Вену. До этого два года жил в Зальцбурге.',
      'g|Theo kaufte sich ein neues Sofa. Vorher ___ er ___. (umziehen)|war … umgezogen|Тео купил диван. До этого он переехал.',
      'g|Man informierte die Polizei. Vorher ___ ein Unfall ___. (passieren)|war … passiert|Сообщили в полицию. До этого произошла авария.',
      'c|Ich schaltete den Computer aus. Vorher ___ ich alle Programme geschlossen.|hatte|habe,war,hätte|Я выключил компьютер. До этого закрыл все программы.',
      'o|Max hatte die Rechnung bezahlt, dann verließ er das Restaurant.|Макс оплатил счёт, потом ушёл из ресторана.',
      't|Я прочитал меню, потом заказал.|Ich hatte die Speisekarte gelesen, dann bestellte ich.',
    ] },
] },
{ n: 307, ln: 7, book: 'AH-A2', series: 'ah', de: 'damit, unbestimmte Pronomen, indirekte Fragen', ru: 'damit, einer/keiner/welche, косвенный вопрос', emoji: '🎯', topics: [
  { id: 'ah2_71_damit', de: 'Nebensätze – damit', ru: 'Цель: damit (чтобы)', rules: [],
    explain: `<b>damit</b> = «чтобы» — цель, намерение (вопрос: <b>wozu?</b>). Глагол — <b>в конце</b>.<br>
      Max schreibt alles auf. Er will nichts vergessen. → Max schreibt alles auf, <b>damit</b> er nichts <b>vergisst</b>.<br>
      Lisa ruft den Ober. Er soll ihr die Speisekarte bringen. → …, <b>damit</b> er ihr die Speisekarte <b>bringt</b>.<br>
      В придаточном с damit <b>не используют wollen, mögen, sollen</b> — их просто убирают. <b>können</b> можно: …, damit er besser lesen <b>kann</b>.`,
    table: [['Hauptsatz', 'damit', '…', 'ENDE'], ['Er spricht sehr laut,', 'damit', 'alle Leute ihn', 'hören.'], ['Max kauft eine Brille,', 'damit', 'er besser lesen', 'kann.']],
    ex: [
      'o|Er spricht sehr laut, damit alle Leute ihn hören.|Он говорит громко, чтобы все его слышали.',
      'o|Ich erkläre ihm die Grammatik sehr langsam, damit er alles versteht.|Я объясняю медленно, чтобы он всё понял.',
      'o|Max schließt das Fenster, damit die Nachbarn die Musik nicht hören.|Макс закрывает окно, чтобы соседи не слышали музыку.',
      'o|Max kauft eine Brille, damit er besser lesen kann.|Макс покупает очки, чтобы лучше читать.',
      'g|Wir trainieren, damit wir fit ___. (bleiben)|bleiben|Мы тренируемся, чтобы оставаться в форме.',
      'g|Ich schreibe mir den Termin auf, damit ich ihn nicht ___. (vergessen)|vergesse|Я записываю встречу, чтобы не забыть.',
      'g|Carmen trinkt viel Zitronentee, damit sie keine Erkältung ___. (kriegen)|kriegt|Кармен пьёт чай с лимоном, чтобы не простудиться.',
      'g|Ich schreibe Carmen eine E-Mail, damit sie mir mein Buch ___. (zurückgeben)|zurückgibt|Я пишу Кармен, чтобы она вернула мне книгу.',
      'g|Petra macht einen Computerkurs, damit sie einen besseren Job bekommen ___. (können)|kann|Петра на компьютерных курсах, чтобы найти работу получше.',
      'c|Karl stellt sich auf einen Stuhl, damit er alles sehen ___.|kann|will,soll,können|Карл встаёт на стул, чтобы всё видеть.',
      'c|Die Polizei macht Radarkontrollen, damit die Autofahrer nicht so schnell ___.|fahren|sollen fahren,fahren sollen,fährt|Полиция проверяет скорость, чтобы водители не гоняли.',
      't|Я учу немецкий, чтобы работать в Германии.|Ich lerne Deutsch, damit ich in Deutschland arbeiten kann.',
    ] },
  { id: 'ah2_72_unbest', de: 'Unbestimmte Pronomen und Artikel', ru: 'einer, keiner, welche; man, jemand, niemand', rules: [],
    explain: `<b>Артикль</b> стоит с существительным, <b>местоимение</b> — вместо него. Местоимение <b>всегда с окончанием</b>: Ist hier ein Supermarkt? – In der Badstraße ist <b>einer</b>. (м. р.) · <b>eine</b> (ж. р.) · <b>eins</b> (ср. р.).<br>
      Мн. ч.: <b>welche</b> / <b>keine</b>: Kaufst du Äpfel? – Ja, ich kaufe <b>welche</b>.<br>
      Akk. м. р.: <b>einen / keinen</b>. Hat einer meine Brille gesehen? – Nein, <b>keiner</b> hat sie gesehen.<br>
      <b>man</b> (только Nominativ) — люди вообще: Kann <b>man</b> hier telefonieren?<br>
      <b>jemand</b> — кто-то, <b>niemand</b> — никто; в Akk./Dat. можно jemand(en)/jemand(em), niemand(en)/niemand(em).`,
    table: [['', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'], ['Nom.', '(k)einer', '(k)eine', '(k)eins', 'welche / keine'], ['Akk.', '(k)einen', '(k)eine', '(k)eins', 'welche / keine'], ['Dat.', '(k)einem', '(k)einer', '(k)einem', 'welchen / keinen']],
    ex: [
      'c|Wo gibt es hier einen Sportplatz? – Dort ist ___.|einer|einen,eins,eine|Где здесь спортплощадка? — Вон там.',
      'c|Wo gibt es hier eine Tankstelle? – Dort ist ___.|eine|einer,eins,einen|Где здесь заправка? — Вон там.',
      'c|Wo gibt es hier ein Museum? – Dort ist ___.|eins|ein,einer,eine|Где здесь музей? — Вон там.',
      'c|Wo gibt es hier Restaurants? – Dort sind ___.|welche|eine,einer,keins|Где здесь рестораны? — Вон там.',
      'c|Hast du einen Kuli? – Nein, ich habe ___.|keinen|keiner,kein,keins|Есть ручка? — Нет.',
      'c|Kann mir mal ___ helfen?|jemand|man,niemand,keiner|Может мне кто-нибудь помочь?',
      'c|Kann ___ die Burg auch im Winter besichtigen?|man|jemand,niemand,einer|Можно осматривать замок и зимой?',
      'c|Alle waren still. ___ hat ein Wort gesagt.|Niemand|Jemand,Man,Einer|Все молчали. Никто не сказал ни слова.',
      'c|Ich habe angerufen, aber ___ hat sich gemeldet.|niemand|jemand,man,einer|Я звонил, но никто не ответил.',
      'c|Die Party war langweilig. ___ hat getanzt.|Keiner|Einer,Man,Jemand|Вечеринка была скучной. Никто не танцевал.',
      'c|Es hat geklopft. Kann mal ___ die Tür aufmachen?|jemand|niemand,keiner,man|Стучат. Кто-нибудь откроет дверь?',
      'c|Wenn ___ nicht aufpasst, kann man viele Fehler machen.|man|jemand,niemand,welche|Если не быть внимательным, можно наделать ошибок.',
      'g|Joanas hat so lange gerufen, bis ihn ___ gehört hat. (jemand)|jemand|Йоанас кричал, пока кто-то его не услышал.',
      't|Здесь можно курить?|Kann man hier rauchen?||Darf man hier rauchen?',
    ] },
  { id: 'ah2_73_indfrage', de: 'Nebensätze – Fragesätze (indirekte Fragen, ob)', ru: 'Косвенный вопрос: …, wann der Zug abfährt / ob …', rules: [],
    explain: `Придаточное может начинаться с <b>вопросительного слова</b>: Wann fährt der Zug ab? → Ich weiß nicht, <b>wann</b> der Zug <b>abfährt</b>.<br>
      Глагол — <b>в конце</b>, отделяемые глаголы — <b>слитно</b>.<br>
      Вопрос <b>без вопросительного слова</b> (Ja/Nein) → союз <b>ob</b> (ли): Kommt Peter mit? → Ich weiß nicht, <b>ob</b> Peter <b>mitkommt</b>.<br>
      wissen: ich/er <b>weiß</b>, du <b>weißt</b>, wir <b>wissen</b>, ihr <b>wisst</b>.`,
    table: [['Вопрос', 'Косвенный вопрос'], ['Wann kommt Paul an?', 'Ich weiß nicht, wann Paul ankommt.'], ['Warum ist Tom so spät gekommen?', 'Ich weiß nicht, warum Tom so spät gekommen ist.'], ['Kommt Peter heute?', 'Ich habe keine Ahnung, ob Peter heute kommt.']],
    ex: [
      'g|Wer ruft in der Firma an? – Ich weiß nicht, wer in der Firma ___. (anrufen)|anruft|Я не знаю, кто звонит в фирму.',
      'g|Wann steht Theo am Morgen auf? – Ich weiß nicht, wann Theo am Morgen ___. (aufstehen)|aufsteht|Не знаю, когда Тео встаёт.',
      'g|Was kauft Carmen heute ein? – Ich weiß nicht, was Carmen heute ___. (einkaufen)|einkauft|Не знаю, что Кармен сегодня покупает.',
      'g|Wann fängt der Film an? – Ich weiß nicht, wann der Film ___. (anfangen)|anfängt|Не знаю, когда начинается фильм.',
      'c|Geht Martina heute Abend ins Kino? – Ich habe keine Ahnung, ___ Martina heute Abend ins Kino geht.|ob|wenn,dass,wann|Понятия не имею, пойдёт ли Мартина в кино.',
      'c|Trinkt Thomas Weißwein? – Ich weiß nicht, ___ Thomas Weißwein trinkt.|ob|wenn,dass,was|Не знаю, пьёт ли Томас белое вино.',
      'c|Ich weiß nicht, ___ Lena ist.|wo|ob,wohin,woher|Я не знаю, где Лена.',
      'c|Ich weiß nicht, ___ Jana geholfen hat.|wem|wen,wer,was|Я не знаю, кому помогла Яна.',
      'c|Ich weiß nicht, ___ Hatem getroffen hat.|wen|wem,wer,wo|Я не знаю, кого встретил Хатем.',
      'o|Ich weiß nicht, warum Tom so spät gekommen ist.|Я не знаю, почему Том так поздно пришёл.',
      'o|Ich weiß nicht, ob Peter mitkommt.|Я не знаю, пойдёт ли Петер с нами.',
      'o|Ich habe keine Ahnung, ob man hier kostenlos parken kann.|Понятия не имею, можно ли здесь бесплатно парковаться.',
      't|Я не знаю, где он живёт.|Ich weiß nicht, wo er wohnt.',
      't|Я не знаю, придёт ли она.|Ich weiß nicht, ob sie kommt.',
    ] },
] },
{ n: 308, ln: 8, book: 'AH-A2', series: 'ah', de: 'dieser, Futur I, Negation mit nicht', ru: 'dieser, будущее время, место nicht', emoji: '🔮', topics: [
  { id: 'ah2_81_dies', de: 'Demonstrativartikel und -pronomen', ru: 'dieser, diese, dieses', rules: [],
    explain: `<b>dieser / diese / dieses</b> = «этот, эта, это». Окончания как у определённого артикля: d<b>er</b> → dies<b>er</b>, d<b>en</b> → dies<b>en</b>, d<b>em</b> → dies<b>em</b>, d<b>as</b> → dies<b>es</b>.<br>
      Как артикль: Gehört dir <b>dieser</b> Schirm? Как местоимение (без существительного): – Nein, <b>dieser</b> hier.<br>
      Прилагательное после dieser — слабое (-e/-en): Hast du <b>diesen</b> lustig<b>en</b> Film gesehen?`,
    table: [['', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'], ['Nominativ', 'dieser', 'diese', 'dieses', 'diese'], ['Akkusativ', 'diesen', 'diese', 'dieses', 'diese'], ['Dativ', 'diesem', 'dieser', 'diesem', 'diesen']],
    ex: [
      'g|Wann bezahlst du ___ Rechnung? (dieser)|diese|Когда ты оплатишь этот счёт?',
      'g|Wann buchst du ___ Reise? (dieser)|diese|Когда ты забронируешь эту поездку?',
      'g|Wann hilfst du ___ Leuten? (dieser, Dativ)|diesen|Когда ты поможешь этим людям?',
      'g|Wann besichtigst du ___ Schloss? (dieser)|dieses|Когда ты осмотришь этот замок?',
      'g|Wann fragst du ___ Experten? (dieser)|diesen|Когда ты спросишь этого эксперта?',
      'g|Wann hörst du ___ Herrn zu? (dieser, Dativ)|diesem|Когда ты выслушаешь этого господина?',
      'g|Wann sprichst du mit ___ Kollegen? (dieser, Dativ)|diesem|Когда ты поговоришь с этим коллегой?',
      'g|Wann bedankst du dich bei ___ Frau? (dieser, Dativ)|dieser|Когда ты поблагодаришь эту женщину?',
      'g|Hast du ___ lustigen Film gesehen? (dieser)|diesen|Ты видел этот смешной фильм?',
      'g|Hast du ___ scharfe Suppe probiert? (dieser)|diese|Ты пробовал этот острый суп?',
      'g|Hast du ___ armen Menschen geholfen? (dieser, Dativ)|diesem|Ты помог этому бедному человеку?',
      'c|Gefallen dir diese Schuhe? – Nein, aber ___ gefallen mir.|diese|dieser,dieses,diesen|Тебе нравятся эти туфли? — Нет, а вот эти — да.',
      't|Этот стол новый.|Dieser Tisch ist neu.',
      't|Я беру эту сумку.|Ich nehme diese Tasche.',
    ] },
  { id: 'ah2_82_futur', de: 'Futur I', ru: 'Будущее: werden + инфинитив', rules: [],
    explain: `Futur I = <b>werden</b> (на 2-м месте) + <b>инфинитив</b> (в конце): Ich <b>werde</b> dich <b>anrufen</b>.<br>
      Для будущего чаще используют <b>Präsens + время</b>: Ich rufe dich morgen an. Futur I нужен прежде всего для:<br>
      • <b>обещания / намерения</b> (+ sicher, bestimmt): Ich <b>werde</b> mich sicher gut <b>vorbereiten</b>.<br>
      • <b>предположения</b> (+ wohl): Jana <b>wird</b> wohl heute noch in Wien <b>bleiben</b>.<br>
      • <b>настойчивого требования</b> (+ wohl): <b>Wirst</b> du wohl endlich <b>zuhören</b>!`,
    table: [['', 'werden', '…', 'Infinitiv'], ['ich', 'werde', 'morgen sicher mein Zimmer', 'aufräumen.'], ['du', 'wirst', 'wohl endlich', 'zuhören!'], ['er/sie/es', 'wird', 'wohl heute', 'bleiben.'], ['wir', 'werden', 'bestimmt', 'helfen.'], ['ihr', 'werdet', 'jetzt wohl ruhig', 'sein!']],
    ex: [
      'g|Wann putzt du endlich die Fenster? – Ich ___ morgen sicher die Fenster ___. (putzen)|werde … putzen|Я завтра точно помою окна.',
      'g|Wann reparierst du endlich das Fahrrad? – Ich ___ morgen sicher das Fahrrad ___. (reparieren)|werde … reparieren|Я завтра точно починю велосипед.',
      'g|Wann rufst du endlich den Handwerker an? – Ich ___ ihn morgen sicher ___. (anrufen)|werde … anrufen|Я завтра точно ему позвоню.',
      'g|Rufst du deine Cousine an? – Ich ___ sie wohl ___. (anrufen)|werde … anrufen|Наверное, позвоню.',
      'g|Fährt deine Kollegin nach Wien? – Sie ___ wohl nach Wien ___. (fahren)|wird … fahren|Она, наверное, поедет в Вену.',
      'g|Schafft Hatem die Prüfung? – Er ___ sie wohl ___. (schaffen)|wird … schaffen|Он, наверное, сдаст.',
      'g|Geht ihr heute Abend ins Kino? – Wir ___ wohl ins Kino ___. (gehen)|werden … gehen|Мы, наверное, пойдём в кино.',
      'g|Hör endlich auf mich! – ___ du wohl endlich auf mich ___! (hören)|Wirst … hören|Ты наконец будешь меня слушать!',
      'g|Lasst die Katze in Ruhe! – ___ ihr wohl die Katze in Ruhe ___! (lassen)|Werdet … lassen|Оставьте наконец кошку в покое!',
      'c|Sei endlich leise! – ___ du wohl endlich leise sein!|Wirst|Wird,Werdest,Würdest|Будешь ты наконец тише!',
      'o|Ich werde morgen sicher mein Zimmer aufräumen.|Я завтра точно уберу комнату.',
      'o|Jana wird wohl heute noch in Wien bleiben.|Яна, наверное, сегодня ещё останется в Вене.',
      't|Я тебе обязательно помогу.|Ich werde dir bestimmt helfen.||Ich werde dir sicher helfen.',
    ] },
  { id: 'ah2_83_negation', de: 'Pauschale Negation', ru: 'Где стоит nicht', rules: [],
    explain: `При отрицании всего высказывания (Satznegation) используют <b>nicht</b>. Оно стоит <b>далеко в конце</b>, но <b>перед</b>:<br>
      • частями сказуемого: приставкой (Ich rief Paul nicht <b>an</b>), инфинитивом (Ich kann dir nicht <b>helfen</b>), Partizip II (Ich habe Max nicht <b>eingeladen</b>), предикативным существительным/прилагательным (Das ist nicht <b>wichtig</b>; Wir spielen heute nicht <b>Fußball</b>), наречием образа действия (Der Zug fährt nicht <b>schnell</b>);<br>
      • предложным дополнением: Martin wartet nicht <b>auf uns</b>;<br>
      • обстоятельствами образа действия и места: Ich tanze nicht <b>gern</b>; Die Kinder spielen nicht <b>draußen</b>.<br>
      Время «по хронологии» (gestern, heute, morgen, jetzt, früher) стоит <b>до nicht</b>: Ihr arbeitet morgen nicht. Без хронологии (immer, pünktlich, täglich) — <b>после</b>: Der Zug kommt nicht pünktlich.<br>
      <b>noch ↔ nicht mehr</b>: Schläft Max noch? – Nein, er schläft nicht mehr. <b>schon ↔ noch nicht</b>: Ist die Arbeit schon fertig? – Nein, sie ist noch nicht fertig.`,
    table: [['nicht + …', 'Пример'], ['приставка', 'Ich rief Paul nicht an.'], ['инфинитив / Partizip', 'Ich kann dir nicht helfen. / Ich habe ihn nicht eingeladen.'], ['предлог. дополнение', 'Martin wartet nicht auf uns.'], ['gern / draußen', 'Ich tanze nicht gern.'], ['morgen / jetzt — до nicht', 'Max geht jetzt nicht nach Hause.'], ['noch → nicht mehr, schon → noch nicht', 'Er schläft nicht mehr. / Sie ist noch nicht fertig.']],
    ex: [
      'o|Nein, ich spiele nicht gerne Karten.|Нет, я не люблю играть в карты.',
      'o|Nein, Max nimmt nicht an der Konferenz teil.|Нет, Макс не участвует в конференции.',
      'o|Nein, ich lade meinen Kollegen nicht ein.|Нет, я не приглашаю коллегу.',
      'o|Nein, meine Tante besucht mich heute nicht.|Нет, тётя сегодня меня не навещает.',
      'o|Nein, ich lese jetzt nicht die Zeitung.|Нет, я сейчас не читаю газету.',
      'o|Nein, die Gäste sind nicht sofort abgereist.|Нет, гости уехали не сразу.',
      'o|Nein, diese Früchte kommen nicht aus Tunesien.|Нет, эти фрукты не из Туниса.',
      'c|Dauert die Fahrt noch lange? – Nein, sie dauert ___ lange.|nicht mehr|noch nicht,nicht noch,kein mehr|Поездка ещё долго? — Нет, уже недолго.',
      'c|Habt ihr die Bücher schon zurückgegeben? – Nein, wir haben sie ___ zurückgegeben.|noch nicht|nicht mehr,schon nicht,nicht noch|Вы уже вернули книги? — Нет, ещё нет.',
      'c|Möchtest du noch bleiben? – Nein, ich möchte ___ bleiben.|nicht mehr|noch nicht,nicht noch,kein mehr|Хочешь ещё остаться? — Нет, больше не хочу.',
      'c|Sind die Arbeiten schon fertig? – Nein, sie sind ___ fertig.|noch nicht|nicht mehr,schon nicht,nicht schon|Работы уже готовы? — Нет, ещё нет.',
      'c|Der Zug kommt ___.|nicht pünktlich|pünktlich nicht,nicht pünktlich nicht,kein pünktlich|Поезд приходит не вовремя.',
      't|Я не могу тебе помочь.|Ich kann dir nicht helfen.',
      't|Он больше не спит.|Er schläft nicht mehr.',
    ] },
] },
]);
