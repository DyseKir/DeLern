/* ══════════════════════════════════════════════════
   БАЗА ДАННЫХ ГРАММАТИКИ
   Каждое правило имеет поля _de и _ru для перевода.
   Примеры (examples) двуязычные всегда: de + ru.
══════════════════════════════════════════════════ */

window.GRAMMAR_DATA = [

  {
    id: "a1_gr_001", level: "A1",
    title_de: "Der bestimmte Artikel",
    title_ru: "Определённый артикль",
    explanation_de: "Im Deutschen hat jedes Substantiv einen festen Artikel: der (мужской род), die (женский род), das (средний род). Den Artikel musst du immer zusammen mit dem Wort lernen!",
    explanation_ru: `В немецком языке у каждого существительного (предмета, человека, животного, явления) есть свой постоянный артикль — маленькое слово перед ним. Это как «имя» для рода слова.

Есть три рода:
• <strong>der</strong> — мужской род (как «он» в русском)
• <strong>die</strong> — женский род (как «она»)
• <strong>das</strong> — средний род (как «оно»)

Во множественном числе у всех — <strong>die</strong>, независимо от рода.

Определённый артикль (der / die / das) используется когда мы говорим о конкретном, известном предмете — то же самое, что «тот самый» в русском. Например: «Дай мне <u>тот</u> хлеб» = «Gib mir <u>das</u> Brot».

⚠️ Важно: род слова в немецком часто <em>не совпадает</em> с русским! «Девочка» по-немецки — das Mädchen (средний род!), «солнце» — die Sonne (женский). Поэтому артикль нужно запоминать вместе со словом как одно целое — не «Tisch», а «<strong>der</strong> Tisch».`,
    examples: [
      { de: "der Mann – der Hund – der Tisch",  ru: "мужской род → der" },
      { de: "die Frau – die Katze – die Lampe", ru: "женский род → die" },
      { de: "das Kind – das Buch – das Haus",   ru: "средний род → das" },
    ],
    tip_de: "Lerne jedes Wort IMMER mit Artikel: nicht 'Tisch', sondern 'der Tisch'!",
    tip_ru: "Учи каждое слово ВСЕГДА с артиклем: не «Tisch», а «der Tisch». Артикль — часть слова, без него слово неполное.",
  },

  {
    id: "a1_gr_002", level: "A1",
    title_de: "Der unbestimmte Artikel",
    title_ru: "Неопределённый артикль",
    explanation_de: "Der unbestimmte Artikel zeigt, dass etwas zum ersten Mal erwähnt wird. Er lautet: ein (м.р.), eine (ж.р.), ein (ср.р.). Die Verneinung ist kein / keine / kein.",
    explanation_ru: `Неопределённый артикль — это как слово «какой-то», «один», «некий». Он говорит о том, что предмет упоминается впервые или собеседник о нём ещё не знает.

По-русски мы часто вообще не ставим никакого слова: «У меня есть кошка» — в немецком здесь обязательно нужен артикль: «Ich habe <strong>eine</strong> Katze».

Формы по родам:
• мужской (der) → <strong>ein</strong> Mann
• женский (die) → <strong>eine</strong> Frau
• средний (das) → <strong>ein</strong> Kind

Заметь: мужской и средний род одинаковы — оба <strong>ein</strong>. Только женский отличается — <strong>eine</strong>.

Отрицание (нет чего-то / это не то):
• <strong>kein</strong> Mann, <strong>kein</strong> Kind — для мужского и среднего
• <strong>keine</strong> Frau — для женского

Kein/keine — это буквально «не один», «ни одного». Используется там, где в русском стоит «нет» или «не» перед существительным с неопределённым артиклем.`,
    examples: [
      { de: "Das ist ein Mann.",    ru: "Это (какой-то) мужчина." },
      { de: "Ich habe eine Katze.", ru: "У меня есть кошка."     },
      { de: "Das ist ein Kind.",    ru: "Это ребёнок."           },
      { de: "Das ist kein Hund.",   ru: "Это не собака."         },
    ],
    tip_de: "ein/eine/ein = неопределённый | kein/keine/kein = отрицание",
    tip_ru: "ein/eine = у меня ЕСТЬ что-то | kein/keine = у меня НЕТ / это НЕ то. Женский род всегда с -e на конце: eine / keine.",
  },

  {
    id: "a1_gr_003", level: "A1",
    title_de: "Plural der Nomen",
    title_ru: "Множественное число существительных",
    explanation_de: "Im Plural gibt es keinen Artikel-Unterschied – es heißt immer 'die'. Die Pluralformen sind verschieden und müssen auswendig gelernt werden.",
    explanation_ru: `Во множественном числе немецкого языка происходят две вещи:

1. <strong>Артикль всегда становится «die»</strong> — независимо от того, какой был в единственном числе. Der Hund → <strong>die</strong> Hunde. Das Kind → <strong>die</strong> Kinder. Die Frau → <strong>die</strong> Frauen. Всегда die!

2. <strong>Само слово меняется по-разному</strong> — и это нужно запоминать. Правил много, исключений ещё больше. Лучшая стратегия: учить слово сразу в двух формах.

Самые частые способы образования множественного числа:
• Прибавляем <strong>-e</strong>: der Hund → die Hund<strong>e</strong>
• Прибавляем <strong>-en / -n</strong>: die Frau → die Frau<strong>en</strong>, die Katze → die Katz<strong>en</strong>
• Прибавляем <strong>-er</strong> (часто с умлаутом): das Kind → die Kind<strong>er</strong>
• Умлаут без окончания: der Apfel → die <strong>Ä</strong>pfel (а → ä)
• Без изменений: das Auto → die Auto<strong>s</strong> (заимствованные слова)

⚠️ Слова женского рода чаще всего образуют мн.ч. на <strong>-en</strong> — это самый надёжный ориентир.`,
    examples: [
      { de: "der Hund → die Hunde",  ru: "+e (прибавляем -e)"     },
      { de: "die Frau → die Frauen", ru: "+en (прибавляем -en)"   },
      { de: "das Kind → die Kinder", ru: "+er (прибавляем -er)"   },
      { de: "der Apfel → die Äpfel", ru: "Umlaut (умлаут, без -e)" },
    ],
    tip_de: "Im Plural = immer 'die'! Pluralform immer beim Wort mitlernen.",
    tip_ru: "Мн.ч. = всегда «die». Учи слово сразу в трёх формах: der Hund — die Hunde (артикль + слово + мн.ч.).",
  },

  {
    id: "a1_gr_004", level: "A1",
    title_de: "Verb: sein (Präsens)",
    title_ru: "Глагол sein — быть (настоящее время)",
    explanation_de: "Das Verb 'sein' ist eines der wichtigsten deutschen Verben. Es ist unregelmäßig und wird als Vollverb und als Hilfsverb verwendet.",
    explanation_ru: `Глагол <strong>sein</strong> (быть) — самый важный глагол в немецком. Без него не построить ни одного нормального предложения.

В русском мы часто опускаем «есть»: «Я — студент», «Он — врач». В немецком так нельзя — глагол <strong>обязателен</strong>: Ich <strong>bin</strong> Student.

Спряжение полностью нерегулярное (неправильное), поэтому его нужно выучить наизусть:

<table style="border-collapse:collapse;margin:8px 0">
<tr><td style="padding:3px 12px 3px 0"><strong>ich</strong></td><td><strong>bin</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">я есть / я</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>du</strong></td><td><strong>bist</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">ты</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>er/sie/es</strong></td><td><strong>ist</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">он/она/оно</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>wir</strong></td><td><strong>sind</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">мы</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>ihr</strong></td><td><strong>seid</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">вы (неформальн.)</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>sie/Sie</strong></td><td><strong>sind</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">они / Вы</td></tr>
</table>

На этом уровне используй sein как самостоятельный глагол — чтобы сказать кто ты, где ты, какой ты.`,
    examples: [
      { de: "Ich bin Student.",   ru: "Я студент."   },
      { de: "Du bist nett.",      ru: "Ты милый."    },
      { de: "Er ist Arzt.",       ru: "Он врач."     },
      { de: "Wir sind Freunde.",  ru: "Мы друзья."   },
      { de: "Ihr seid müde.",     ru: "Вы устали."   },
      { de: "Sie sind zu Hause.", ru: "Они дома."    },
    ],
    tip_de: "ich bin | du bist | er/sie/es ist | wir sind | ihr seid | sie/Sie sind",
    tip_ru: "Запомни как стишок: bin – bist – ist – sind – seid – sind. Wir и sie/Sie совпадают — оба sind.",
  },

  {
    id: "a1_gr_005", level: "A1",
    title_de: "Verb: haben (Präsens)",
    title_ru: "Глагол haben — иметь (настоящее время)",
    explanation_de: "Das Verb 'haben' ist unregelmäßig. Es wird als Vollverb (у меня есть) und als Hilfsverb im Perfekt verwendet.",
    explanation_ru: `Глагол <strong>haben</strong> (иметь) — второй по важности после sein. Он нужен буквально каждый день: сказать «у меня есть», «у него нет», «я хочу» (через Perfekt).

В русском мы говорим «у меня <em>есть</em>» — в немецком это передаётся через haben: «ich <strong>habe</strong>» (дословно «я имею»).

Спряжение (почти правильное, но du/er теряют окончание):

<table style="border-collapse:collapse;margin:8px 0">
<tr><td style="padding:3px 12px 3px 0"><strong>ich</strong></td><td><strong>habe</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">у меня есть</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>du</strong></td><td><strong>hast</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">у тебя есть</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>er/sie/es</strong></td><td><strong>hat</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">у него/неё есть</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>wir</strong></td><td><strong>haben</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">у нас есть</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>ihr</strong></td><td><strong>habt</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">у вас есть</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>sie/Sie</strong></td><td><strong>haben</strong></td><td style="padding:3px 0 3px 16px;color:#aaa">у них/Вас есть</td></tr>
</table>

⚠️ Ловушка: du habe<s>n</s> → du ha<strong>st</strong> (не «habst»!). Er habe<s>n</s> → er ha<strong>t</strong>. Буква «b» выпадает — это нужно запомнить.

На этом уровне используй haben чтобы сказать что у тебя есть: деньги, машина, время, животное.`,
    examples: [
      { de: "Ich habe ein Auto.",    ru: "У меня есть машина."  },
      { de: "Du hast Zeit.",         ru: "У тебя есть время."   },
      { de: "Er hat Hunger.",        ru: "Он голоден."          },
      { de: "Wir haben eine Katze.", ru: "У нас есть кошка."    },
      { de: "Ihr habt Glück.",       ru: "Вам повезло."         },
      { de: "Sie haben Kinder.",     ru: "У них есть дети."     },
    ],
    tip_de: "ich habe | du hast | er/sie/es hat | wir haben | ihr habt | sie/Sie haben",
    tip_ru: "du hast / er hat — «b» выпадает! Не «habst/habt», а hast/hat. Wir и sie/Sie — снова совпадают: haben.",
  },

  {
    id: "a1_gr_006", level: "A1",
    title_de: "Satzstellung: Verb auf Position 2",
    title_ru: "Порядок слов: глагол на 2-м месте",
    explanation_de: "Im deutschen Hauptsatz steht das konjugierte Verb IMMER auf Position 2. Wenn etwas anderes vorne steht, tauschen Verb und Subjekt die Plätze (Inversion).",
    explanation_ru: `Это одно из самых важных правил немецкого синтаксиса, и оно работает без исключений в обычном предложении.

<strong>Правило:</strong> спрягаемый глагол (тот, что меняется по лицам) всегда стоит на <strong>2-й позиции</strong> в предложении. Не вторым словом — а вторым <em>членом предложения</em>.

Позиция 1 → Позиция 2 → Остальное

В русском порядок слов свободный: «Я сегодня учу немецкий» = «Сегодня я учу немецкий» — смысл не меняется. В немецком так тоже можно, но глагол <strong>обязан</strong> оставаться на 2-м месте.

Если предложение начинается с обстоятельства времени (сегодня, завтра, вчера), глагол всё равно идёт на 2-е место — а подлежащее (кто?) сдвигается на 3-е. Это называется <strong>инверсия</strong>:

• Ich lerne heute Deutsch. → Heute <strong>lerne</strong> ich Deutsch.
  (позиция 1 = Heute, позиция 2 = lerne, позиция 3 = ich)

⚠️ Ошибка новичков: «Heute ich lerne Deutsch» — так говорить НЕЛЬЗЯ. Глагол не может стоять на 3-м месте в главном предложении.`,
    examples: [
      { de: "Ich lerne Deutsch.",           ru: "Я учу немецкий. (норм. порядок)"  },
      { de: "Heute lerne ich Deutsch.",     ru: "Сегодня я учу немецкий. (инверсия)" },
      { de: "Morgen fahre ich nach Berlin.", ru: "Завтра я еду в Берлин. (инверсия)" },
    ],
    tip_de: "Verb = всегда 2-я позиция! Перед глаголом только ОДНО слово.",
    tip_ru: "Считай до двух: что бы ни стояло первым — глагол идёт сразу за ним, на 2-е место. Перед глаголом всегда только ОДИН член предложения.",
  },

  {
    id: "a1_gr_007", level: "A1",
    title_de: "Verneinung: nicht & kein",
    title_ru: "Отрицание: nicht и kein",
    explanation_de: "'Nicht' verneint Verben und Adjektive. 'Kein/keine/kein' verneint Substantive mit unbestimmtem Artikel oder ohne Artikel.",
    explanation_ru: `В немецком есть два слова для отрицания, и их нельзя путать — у каждого своя зона ответственности.

<strong>NICHT</strong> — отрицает всё, кроме существительных без определённого артикля:
• Глаголы: Ich trinke <strong>nicht</strong>. (Я не пью.)
• Прилагательные: Das ist <strong>nicht</strong> gut. (Это нехорошо.)
• Наречия: Er kommt <strong>nicht</strong> heute. (Он приедет не сегодня.)
• Существительные с определённым артиклем: Ich kaufe <strong>nicht</strong> <u>den</u> Apfel. (Я покупаю не тот яблоко.)

<strong>KEIN / KEINE / KEIN</strong> — отрицает существительные с неопределённым артиклем или без артикля:
• Ich habe <strong>kein</strong> Auto. (У меня нет машины. / «нет» + существительное)
• Das ist <strong>keine</strong> Katze. (Это не кошка.)
• Ich habe <strong>keine</strong> Zeit. (У меня нет времени.)

Простое правило: если в положительном предложении стоит «ein / eine / —», в отрицании ставь «kein / keine / kein». Если глагол или прилагательное — ставь «nicht».

Формы kein: мужской → kein, женский → keine, средний → kein, мн.ч. → keine.`,
    examples: [
      { de: "Ich trinke nicht.",    ru: "Я не пью. (глагол)"          },
      { de: "Das ist nicht gut.",   ru: "Это нехорошо. (прилагат.)"   },
      { de: "Ich habe kein Auto.",  ru: "У меня нет машины."          },
      { de: "Das ist keine Katze.", ru: "Это не кошка."               },
    ],
    tip_de: "nicht = отрицание глаголов/прилагательных | kein = отрицание существительных",
    tip_ru: "Nicht = НЕ (для глаголов, прилагат., наречий). Kein/keine = НЕТ (для существительных). Ein → kein, eine → keine.",
  },

  {
    id: "a1_gr_008", level: "A1",
    title_de: "Personalpronomen",
    title_ru: "Личные местоимения",
    explanation_de: "Die Personalpronomen ersetzen Substantive: ich, du, er/sie/es, wir, ihr, sie/Sie. 'Sie' mit großem S ist die höfliche Anrede (Вы).",
    explanation_ru: `Личные местоимения — это слова, которые заменяют существительные, чтобы не повторяться. «Анна пришла. <strong>Она</strong> устала» — «она» заменяет «Анна».

В немецком их набор похож на русский, но есть важные особенности:

<table style="border-collapse:collapse;margin:8px 0">
<tr><td style="padding:3px 12px 3px 0"><strong>ich</strong></td><td style="color:#aaa">я</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>du</strong></td><td style="color:#aaa">ты (неформально, к другу/ребёнку)</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>er</strong></td><td style="color:#aaa">он (и для слов мужского рода: der Hund → er)</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>sie</strong></td><td style="color:#aaa">она (и для слов женского рода: die Katze → sie)</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>es</strong></td><td style="color:#aaa">оно (для слов среднего рода: das Kind → es)</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>wir</strong></td><td style="color:#aaa">мы</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>ihr</strong></td><td style="color:#aaa">вы (неформально, к группе друзей)</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>sie</strong></td><td style="color:#aaa">они</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>Sie</strong></td><td style="color:#aaa">Вы — вежливое обращение к незнакомцу/старшему</td></tr>
</table>

⚠️ Главная ловушка: <strong>sie</strong> (строчная) = она / они — зависит от контекста. <strong>Sie</strong> (заглавная) = вежливое «Вы» — всегда с заглавной, даже в середине предложения!

В Германии к незнакомым взрослым обращаются на <strong>Sie</strong> (Вы). Перейти на «du» (ты) — это особый момент, его предлагают явно.`,
    examples: [
      { de: "Ich komme aus Russland.",    ru: "Я из России."            },
      { de: "Er trinkt Kaffee.",          ru: "Он пьёт кофе."           },
      { de: "Sie trinkt Tee.",            ru: "Она пьёт чай."           },
      { de: "Wir lernen Deutsch.",        ru: "Мы учим немецкий."       },
      { de: "Sie sind Studenten.",        ru: "Они студенты. (мн.ч.)"   },
      { de: "Sprechen Sie Deutsch?",      ru: "Вы говорите по-немецки? (вежл.)" },
    ],
    tip_de: "Sie (заглавная) = вежливое Вы | sie (строчная) = она / они",
    tip_ru: "Sie (заглавная) = вежливое Вы — всегда с заглавной! sie (строчная) = она ИЛИ они — смотри по контексту.",
  },

  {
    id: "a1_gr_009", level: "A1",
    title_de: "Reguläre Verben: Konjugation",
    title_ru: "Правильные глаголы: спряжение",
    explanation_de: "Reguläre Verben folgen einem festen Muster. Stamm + Endung. Die Endungen sind immer gleich: -e, -st, -t, -en, -t, -en.",
    explanation_ru: `Большинство немецких глаголов — <strong>правильные</strong>. Их спрягать очень просто по одной формуле:

<strong>Основа (Stamm) = инфинитив − «en»</strong>
• mach<strong>en</strong> → Stamm: <em>mach-</em>
• wohn<strong>en</strong> → Stamm: <em>wohn-</em>
• lern<strong>en</strong> → Stamm: <em>lern-</em>

Затем добавляем окончание по лицу:

<table style="border-collapse:collapse;margin:8px 0">
<tr><td style="padding:3px 12px 3px 0"><strong>ich</strong></td><td><strong>-e</strong></td><td style="color:#aaa;padding-left:12px">ich mach<strong>e</strong></td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>du</strong></td><td><strong>-st</strong></td><td style="color:#aaa;padding-left:12px">du mach<strong>st</strong></td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>er/sie/es</strong></td><td><strong>-t</strong></td><td style="color:#aaa;padding-left:12px">er mach<strong>t</strong></td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>wir</strong></td><td><strong>-en</strong></td><td style="color:#aaa;padding-left:12px">wir mach<strong>en</strong></td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>ihr</strong></td><td><strong>-t</strong></td><td style="color:#aaa;padding-left:12px">ihr mach<strong>t</strong></td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>sie/Sie</strong></td><td><strong>-en</strong></td><td style="color:#aaa;padding-left:12px">sie mach<strong>en</strong></td></tr>
</table>

⚠️ Если основа оканчивается на <strong>-t / -d</strong> (arbeit-, find-), перед окончанием добавляется «e» для удобства произношения: du arbeit<strong>e</strong>st, er arbeit<strong>e</strong>t.`,
    examples: [
      { de: "Ich lerne Deutsch.",       ru: "Я учу немецкий."        },
      { de: "Du wohnst in Berlin.",     ru: "Ты живёшь в Берлине."   },
      { de: "Er macht Hausaufgaben.",   ru: "Он делает домашнее задание." },
      { de: "Wir hören Musik.",         ru: "Мы слушаем музыку."     },
      { de: "Ihr lernt schnell.",       ru: "Вы учитесь быстро."     },
      { de: "Sie schreiben eine E-Mail.", ru: "Они пишут имейл."     },
    ],
    tip_de: "Stamm + Endung: -e | -st | -t | -en | -t | -en",
    tip_ru: "Формула: основа + окончание. ich→-e, du→-st, er→-t, wir→-en, ihr→-t, sie→-en. Wir и sie/Sie одинаковые — как инфинитив!",
  },

  {
    id: "a1_gr_010", level: "A1",
    title_de: "du oder Sie? Formell und informell",
    title_ru: "du или Sie? Как обращаться к людям",
    explanation_de: "Im Deutschen gibt es zwei Möglichkeiten: 'du' (informell) und 'Sie' (formell). Die Wahl hängt von der Situation und der Beziehung ab.",
    explanation_ru: `В немецком есть два способа обратиться к человеку — и выбрать неправильный может быть невежливо!

<strong>du</strong> — неформальное «ты»:
• к друзьям, однокурсникам, детям
• в семье
• между молодёжью
• когда человек сам предложил перейти на «du»

<strong>Sie</strong> (всегда с заглавной!) — вежливое «Вы»:
• к незнакомым взрослым
• к старшим
• в официальных ситуациях (врач, продавец, начальник)
• пока человек не предложил «du»

Разница в глаголах:
<table style="border-collapse:collapse;margin:8px 0">
<tr><td style="padding:3px 16px 3px 0"><strong>du</strong></td><td><strong>Sie</strong></td></tr>
<tr><td style="padding:3px 16px 3px 0">Wie heißt <em>du</em>?</td><td>Wie heißen <em>Sie</em>?</td></tr>
<tr><td style="padding:3px 16px 3px 0">Woher kommst <em>du</em>?</td><td>Woher kommen <em>Sie</em>?</td></tr>
<tr><td style="padding:3px 16px 3px 0">Wer bist <em>du</em>?</td><td>Wer sind <em>Sie</em>?</td></tr>
</table>

В Германии переход на «du» — это особый момент. Обычно предлагает тот, кто старше или выше по должности: «Wir können uns duzen» (Мы можем говорить на «ты»).`,
    examples: [
      { de: "Wie heißt du? – Ich heiße Anna.",       ru: "Как тебя зовут? (к другу)"         },
      { de: "Wie heißen Sie? – Ich heiße Herr Müller.", ru: "Как вас зовут? (к незнакомому)" },
      { de: "Woher kommst du?",                       ru: "Откуда ты? (неформально)"          },
      { de: "Woher kommen Sie?",                      ru: "Откуда вы? (формально)"            },
    ],
    tip_de: "du = друзья/семья | Sie (заглавная) = незнакомые/официально",
    tip_ru: "Не знаешь как обратиться — используй Sie, не ошибёшься. Перейти на du предложит сам собеседник, если захочет.",
  },

  {
    id: "a1_gr_011", level: "A1",
    title_de: "W-Fragen: Fragewörter",
    title_ru: "W-вопросы: вопросительные слова",
    explanation_de: "W-Fragen beginnen mit einem Fragewort (Wer, Was, Wo, Woher, Wie, Wann...). Das Verb steht auf Position 2, direkt nach dem Fragewort.",
    explanation_ru: `W-вопросы — открытые вопросы, на которые нельзя ответить просто «да» или «нет». Начинаются с вопросительного слова.

Главные вопросительные слова:
<table style="border-collapse:collapse;margin:8px 0">
<tr><td style="padding:3px 16px 3px 0"><strong>Wer?</strong></td><td style="color:#aaa">Кто?</td><td style="padding-left:12px;color:#aaa">Wer ist das?</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>Was?</strong></td><td style="color:#aaa">Что?</td><td style="padding-left:12px;color:#aaa">Was ist das?</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>Wo?</strong></td><td style="color:#aaa">Где?</td><td style="padding-left:12px;color:#aaa">Wo wohnst du?</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>Woher?</strong></td><td style="color:#aaa">Откуда?</td><td style="padding-left:12px;color:#aaa">Woher kommen Sie?</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>Wie?</strong></td><td style="color:#aaa">Как?</td><td style="padding-left:12px;color:#aaa">Wie heißen Sie?</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>Wie alt?</strong></td><td style="color:#aaa">Сколько лет?</td><td style="padding-left:12px;color:#aaa">Wie alt bist du?</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>Wann?</strong></td><td style="color:#aaa">Когда?</td><td style="padding-left:12px;color:#aaa">Wann kommst du?</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>Welche?</strong></td><td style="color:#aaa">Какой / Который?</td><td style="padding-left:12px;color:#aaa">Welche Sprache?</td></tr>
</table>

Структура: <strong>Fragewort → Verb → Subjekt → Rest</strong>
• Woher <strong>kommst</strong> <em>du</em>?
• Wie <strong>heißen</strong> <em>Sie</em>?

Это та же позиция 2 для глагола — вопросительное слово занимает позицию 1.`,
    examples: [
      { de: "Wer sind Sie?",          ru: "Кто вы?"                  },
      { de: "Wie heißt du?",          ru: "Как тебя зовут?"          },
      { de: "Woher kommen Sie?",      ru: "Откуда вы?"               },
      { de: "Wo wohnst du?",          ru: "Где ты живёшь?"           },
      { de: "Wie alt bist du?",       ru: "Сколько тебе лет?"        },
      { de: "Welche Sprache sprechen Sie?", ru: "На каком языке вы говорите?" },
    ],
    tip_de: "Fragewort → Verb (Pos. 2) → Subjekt → Rest",
    tip_ru: "W-слово стоит первым, затем сразу глагол на 2-м месте. Wer/Was/Wo/Woher/Wie — главные пять, выучи их наизусть!",
  },

  {
    id: "a1_gr_012", level: "A1",
    title_de: "Possessivpronomen: mein / dein / sein / ihr",
    title_ru: "Притяжательные местоимения: мой / твой / его / её",
    explanation_de: "Possessivpronomen zeigen, wem etwas gehört. Sie richten sich im Genus nach dem Substantiv, das sie begleiten.",
    explanation_ru: `Притяжательные местоимения отвечают на вопрос «чей?»:

<table style="border-collapse:collapse;margin:8px 0">
<tr><th style="padding:3px 16px 3px 0;text-align:left">Местоимение</th><th style="padding:3px 16px 3px 0;text-align:left">Значение</th></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>mein</strong></td><td style="color:#aaa">мой / моя / моё</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>dein</strong></td><td style="color:#aaa">твой / твоя / твоё</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>sein</strong></td><td style="color:#aaa">его (у него)</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>ihr</strong></td><td style="color:#aaa">её (у неё)</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>unser</strong></td><td style="color:#aaa">наш / наша</td></tr>
<tr><td style="padding:3px 16px 3px 0"><strong>Ihr</strong></td><td style="color:#aaa">Ваш / Ваша (вежливо)</td></tr>
</table>

Окончание зависит от <strong>рода существительного</strong> после:
• мужской/средний → <strong>mein</strong> Vater, <strong>mein</strong> Kind
• женский → <strong>mein<em>e</em></strong> Mutter, <strong>mein<em>e</em></strong> Schwester
• мн.ч. → <strong>mein<em>e</em></strong> Eltern, <strong>mein<em>e</em></strong> Kinder

Правило простое: если после него «die» или мн.ч. — добавь <strong>-e</strong> на конец. Если «der» или «das» — без изменений.`,
    examples: [
      { de: "Das ist mein Vater.",      ru: "Это мой отец."          },
      { de: "Das ist meine Mutter.",    ru: "Это моя мать."          },
      { de: "Das ist mein Kind.",       ru: "Это мой ребёнок."       },
      { de: "Wie heißt dein Bruder?",   ru: "Как зовут твоего брата?" },
      { de: "Das ist seine Frau Ana.",  ru: "Это его жена Ана."      },
      { de: "Meine Eltern kommen aus Polen.", ru: "Мои родители из Польши." },
    ],
    tip_de: "mein/dein → +e vor die-Wörtern und Pluralformen",
    tip_ru: "Перед «die»-словами и мн.ч. → добавь -е: mein<strong>e</strong> Mutter, dein<strong>e</strong> Schwester. Перед «der/das» → без -е: mein Vater, mein Kind.",
  },

  {
    id: "a1_gr_013", level: "A1",
    title_de: "Verben mit Vokalwechsel: e→i und e→ie",
    title_ru: "Глаголы с изменением гласной: e→i и e→ie",
    explanation_de: "Einige Verben ändern den Stammvokal bei du und er/sie/es: e→i (sprechen, essen) oder e→ie (lesen, sehen). Diese Verben müssen einzeln gelernt werden.",
    explanation_ru: `У некоторых глаголов в формах <strong>du</strong> и <strong>er/sie/es</strong> меняется гласная в основе. Это нужно запомнить для каждого глагола отдельно.

<strong>e → i</strong> (е становится и):
<table style="border-collapse:collapse;margin:8px 0">
<tr><td style="padding:3px 12px 3px 0"></td><td style="padding:3px 12px 3px 0"><strong>sprechen</strong></td><td><strong>essen</strong></td></tr>
<tr><td style="padding:3px 12px 3px 0">ich</td><td>spr<strong>e</strong>che</td><td><strong>e</strong>sse</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>du</strong></td><td>spr<strong>i</strong>chst ⚡</td><td><strong>i</strong>sst ⚡</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>er/sie</strong></td><td>spr<strong>i</strong>cht ⚡</td><td><strong>i</strong>sst ⚡</td></tr>
<tr><td style="padding:3px 12px 3px 0">wir</td><td>spr<strong>e</strong>chen</td><td><strong>e</strong>ssen</td></tr>
</table>

<strong>e → ie</strong> (е становится ие):
<table style="border-collapse:collapse;margin:8px 0">
<tr><td style="padding:3px 12px 3px 0"></td><td style="padding:3px 12px 3px 0"><strong>lesen</strong></td><td><strong>sehen</strong></td></tr>
<tr><td style="padding:3px 12px 3px 0">ich</td><td>l<strong>e</strong>se</td><td>s<strong>e</strong>he</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>du</strong></td><td>l<strong>ie</strong>st ⚡</td><td>s<strong>ie</strong>hst ⚡</td></tr>
<tr><td style="padding:3px 12px 3px 0"><strong>er/sie</strong></td><td>l<strong>ie</strong>st ⚡</td><td>s<strong>ie</strong>ht ⚡</td></tr>
<tr><td style="padding:3px 12px 3px 0">wir</td><td>l<strong>e</strong>sen</td><td>s<strong>e</strong>hen</td></tr>
</table>

⚠️ Изменение происходит ТОЛЬКО в формах du и er/sie/es. Ich, wir, ihr, sie — как обычно!`,
    examples: [
      { de: "Ich spreche Deutsch.",      ru: "Я говорю по-немецки."      },
      { de: "Du sprichst Englisch.",     ru: "Ты говоришь по-английски." },
      { de: "Er spricht Arabisch.",      ru: "Он говорит по-арабски."    },
      { de: "Ich lese ein Buch.",        ru: "Я читаю книгу."            },
      { de: "Du liest eine E-Mail.",     ru: "Ты читаешь имейл."         },
      { de: "Was isst du gern?",         ru: "Что ты любишь есть?"       },
    ],
    tip_de: "e→i: sprechen, essen, helfen, nehmen | e→ie: lesen, sehen, empfehlen",
    tip_ru: "Изменяются только du и er/sie/es! Ich и wir — всегда с обычным 'e'. Главные глаголы: sprech→sprich, ess→iss, les→lies.",
  },

  // ════════════════════════════════
  //  СЮДА ДОБАВЛЯЙ СВОИ ПРАВИЛА:
  // ════════════════════════════════

];
