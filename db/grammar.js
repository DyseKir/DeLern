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

  // ════════════════════════════════════════
  //  A1 — SEIN & HABEN
  // ════════════════════════════════════════
  {
    id: "a1_gr_014", level: "A1",
    title_de: "sein & haben – Konjugation",
    title_ru: "sein (быть) и haben (иметь) – спряжение",
    explanation_de: "sein und haben sind die wichtigsten Verben. Sie werden unregelmäßig konjugiert und auswendig gelernt.",
    explanation_ru: `<strong>sein</strong> (быть) и <strong>haben</strong> (иметь) — самые важные глаголы немецкого языка. Они неправильные — их нужно просто запомнить.

<strong>sein:</strong>
• ich bin / du bist / er–sie–es ist
• wir sind / ihr seid / sie–Sie sind

<strong>haben:</strong>
• ich habe / du hast / er–sie–es hat
• wir haben / ihr habt / sie–Sie haben

💡 sein используется для описания состояний и свойств: <em>Ich bin müde.</em>
💡 haben используется для обозначения владения: <em>Ich habe einen Hund.</em>`,
    examples: [
      { de: "Ich bin Student. Du bist Lehrerin.",     ru: "Я студент. Ты учительница."    },
      { de: "Er ist krank. Sie ist glücklich.",       ru: "Он болен. Она счастлива."      },
      { de: "Ich habe ein Buch. Du hast einen Hund.", ru: "У меня есть книга. У тебя собака." },
      { de: "Wir haben Hunger. Ihr habt Durst.",      ru: "Мы голодны. Вы хотите пить."   },
    ],
    tip_de: "sein und haben musst du auswendig lernen – sie folgen keiner Regel!",
    tip_ru: "sein и haben надо просто выучить наизусть — они не подчиняются никаким правилам!",
  },

  // ════════════════════════════════════════
  //  A1 — FREQUENZADVERBIEN
  // ════════════════════════════════════════
  {
    id: "a1_gr_015", level: "A1",
    title_de: "Frequenzadverbien – Wie oft?",
    title_ru: "Наречия частоты – Как часто?",
    explanation_de: "Frequenzadverbien zeigen, wie oft etwas passiert. Sie stehen meist direkt nach dem Verb.",
    explanation_ru: `Наречия частоты отвечают на вопрос «Как часто?» и показывают, насколько регулярно что-то происходит.

По убыванию частоты:
• <strong>immer</strong> — всегда (100%)
• <strong>meistens</strong> — чаще всего (≈80%)
• <strong>oft</strong> — часто (≈60%)
• <strong>manchmal</strong> — иногда (≈40%)
• <strong>selten</strong> — редко (≈20%)
• <strong>nie</strong> — никогда (0%)

Позиция в предложении: обычно сразу после глагола.
<em>Ich gehe <u>oft</u> ins Kino.</em>`,
    examples: [
      { de: "Ich trinke immer Kaffee am Morgen.",  ru: "Я всегда пью кофе утром."       },
      { de: "Er geht oft ins Fitnessstudio.",       ru: "Он часто ходит в спортзал."     },
      { de: "Wir fahren manchmal in die Berge.",    ru: "Мы иногда едем в горы."         },
      { de: "Sie ist selten krank.",                ru: "Она редко болеет."              },
      { de: "Ich esse nie Fleisch.",                ru: "Я никогда не ем мясо."          },
    ],
    tip_de: "immer → meistens → oft → manchmal → selten → nie",
    tip_ru: "Запомни шкалу: всегда → чаще всего → часто → иногда → редко → никогда",
  },

  // ════════════════════════════════════════
  //  A1 — MODALVERBEN
  // ════════════════════════════════════════
  {
    id: "a1_gr_016", level: "A1",
    title_de: "Modalverben – können, müssen, dürfen, wollen, sollen, mögen",
    title_ru: "Модальные глаголы",
    explanation_de: "Modalverben verändern die Bedeutung des Hauptverbs. Das Hauptverb steht im Infinitiv am Satzende.",
    explanation_ru: `Модальные глаголы изменяют смысл основного глагола. Основной глагол стоит в инфинитиве в КОНЦЕ предложения.

<strong>Когда какой использовать (главное!):</strong>

🟢 <strong>können</strong> — «мочь / уметь» = <u>способность или возможность</u>.
<em>Ich <strong>kann</strong> schwimmen.</em> — Я умею плавать.

🔴 <strong>müssen</strong> — «должен / надо» = <u>необходимость</u>, без вариантов (так надо, иначе нельзя).
<em>Ich <strong>muss</strong> arbeiten.</em> — Я должен работать (обязан, иначе никак).

🟣 <strong>sollen</strong> — «следует / должен» = <u>чужое указание, поручение, совет</u> (кто-то так велел/советует).
<em>Der Arzt sagt, ich <strong>soll</strong> mehr schlafen.</em> — Врач говорит, мне следует больше спать.

🟡 <strong>dürfen</strong> — «можно» = <u>разрешение</u> (мне разрешили).
<em>Ich <strong>darf</strong> heute länger bleiben.</em> — Мне можно сегодня остаться дольше.

🔵 <strong>wollen</strong> — «хотеть» = <u>сильное намерение, воля</u>.
<em>Ich <strong>will</strong> Deutsch lernen.</em> — Я хочу (намерен) учить немецкий.

🩷 <strong>möchten</strong> — «хотел бы» = <u>вежливое желание</u> (мягче, чем wollen).
<em>Ich <strong>möchte</strong> einen Kaffee.</em> — Я хотел бы кофе.

❤️ <strong>mögen</strong> — «нравиться / любить».
<em>Ich <strong>mag</strong> Schokolade.</em> — Я люблю шоколад.

<strong>⚖️ müssen или sollen?</strong>
• <strong>müssen</strong> = надо по объективной необходимости (я сам понимаю, что надо).
• <strong>sollen</strong> = надо, потому что <u>кто-то другой</u> так сказал/велел/советует.
Пример: <em>Ich <strong>muss</strong> Medikamente nehmen</em> (мне необходимо). / <em>Ich <strong>soll</strong> Medikamente nehmen</em> (врач так велел).

⚠️ У всех модальных ich = er/sie/es (без -t): ich kann = er kann.`,
    examples: [
      { de: "Ich kann Deutsch sprechen.",                  ru: "Я умею говорить по-немецки. (способность → können)" },
      { de: "Ich muss zum Arzt gehen.",                    ru: "Мне надо к врачу. (необходимость → müssen)"          },
      { de: "Du sollst deine Hausaufgaben machen.",        ru: "Ты должен сделать домашку. (велят → sollen)"          },
      { de: "Darf ich hier rauchen? – Nein, du darfst nicht.", ru: "Можно здесь курить? — Нет, нельзя. (разрешение → dürfen)" },
      { de: "Ich möchte einen Tee, bitte.",                ru: "Я хотел бы чай, пожалуйста. (вежливо → möchten)"      },
    ],
    tip_de: "müssen = eigene Notwendigkeit. sollen = jemand anderes sagt es. dürfen = Erlaubnis.",
    tip_ru: "müssen = надо (сам понимаю). sollen = велели/советуют. dürfen = разрешено. wollen = хочу. möchten = хотел бы (вежливо).",
  },

  // ════════════════════════════════════════
  //  A1 — IMPERATIV
  // ════════════════════════════════════════
  {
    id: "a1_gr_017", level: "A1",
    title_de: "Imperativ – Befehle und Bitten",
    title_ru: "Повелительное наклонение – приказы и просьбы",
    explanation_de: "Der Imperativ wird benutzt, um Befehle oder Bitten auszudrücken. Es gibt drei Formen: du, ihr, Sie.",
    explanation_ru: `Повелительное наклонение используется для команд и просьб. В немецком три формы:

<strong>du-Form</strong> (ты): Verbstamm (без окончания) → <em>Geh!</em>
<strong>ihr-Form</strong> (вы, неформально): wie ihr → <em>Geht!</em>
<strong>Sie-Form</strong> (Вы, формально): Infinitiv + Sie → <em>Gehen Sie!</em>

Особые глаголы:
• sein: Sei! / Seid! / Seien Sie!
• haben: Hab! / Habt! / Haben Sie!

Глаголы с e→i меняются и в du-форме:
• sprechen → Sprich! | lesen → Lies! | essen → Iss!`,
    examples: [
      { de: "Geh nach Hause! / Geht nach Hause! / Gehen Sie nach Hause!", ru: "Иди домой! / Идите (мн.)! / Идите (вежл.)!" },
      { de: "Komm her! / Kommt her! / Kommen Sie her!",                   ru: "Иди сюда! / Идите сюда (мн.)! / Подойдите!" },
      { de: "Sei ruhig! / Seid ruhig! / Seien Sie ruhig!",                ru: "Будь тихим! / Будьте тихими! / Будьте тихим!" },
      { de: "Sprich lauter! (du-Form von sprechen)",                       ru: "Говори громче! (e→i у du-формы)"              },
    ],
    tip_de: "du-Form: nur Verbstamm, kein -e am Ende (außer bei -t/-d-Stämmen).",
    tip_ru: "du-форма: только основа глагола, без -e в конце (кроме глаголов на -t/-d).",
  },

  // ════════════════════════════════════════
  //  A1 — PRÄPOSITIONEN WO? (DATIV)
  // ════════════════════════════════════════
  {
    id: "a1_gr_018", level: "A1",
    title_de: "Präpositionen Wo? + Dativ",
    title_ru: "Предлоги места + Дативный падеж",
    explanation_de: "Wechselpräpositionen stehen mit Dativ bei der Frage 'Wo?' (Lage/Position).",
    explanation_ru: `Предлоги места отвечают на вопрос <strong>Wo?</strong> (Где?) и требуют <strong>Dativ</strong>. Представь предмет и коробку 📦:

<strong>📦 Простые (тут редко ошибаются):</strong>
• <strong>vor</strong> — <u>перед</u>: <em>vor dem Haus</em> (перед домом)
• <strong>hinter</strong> — <u>за / позади</u>: <em>hinter dem Haus</em> (за домом)
• <strong>neben</strong> — <u>рядом, сбоку</u>: <em>neben dem Bett</em> (рядом с кроватью)
• <strong>über</strong> — <u>над</u> (не касаясь): <em>über dem Tisch</em> (лампа над столом)
• <strong>unter</strong> — <u>под</u>: <em>unter dem Stuhl</em> (под стулом)
• <strong>zwischen</strong> — <u>между</u> (двумя): <em>zwischen dem Bett und dem Schrank</em>

<strong>⚠️ Сложная тройка an / auf / in — главное запомнить:</strong>

🟢 <strong>auf</strong> = «на» <u>горизонтальной</u> поверхности, СВЕРХУ (предмет лежит/стоит на чём-то):
<em>Das Buch liegt <strong>auf</strong> dem Tisch.</em> — Книга на столе.
<em>Der Teller steht <strong>auf</strong> dem Tisch.</em>

🔵 <strong>an</strong> = «на/у» <u>вертикальной</u> поверхности или ВПЛОТНУЮ, касаясь сбоку/края:
<em>Das Bild hängt <strong>an</strong> der Wand.</em> — Картина на стене.
<em>Ich sitze <strong>am</strong> Tisch.</em> — Я сижу за столом (вплотную).
<em>Ich stehe <strong>an</strong> der Tür.</em> — Я у двери.

🟡 <strong>in</strong> = «в / внутри» (предмет ВНУТРИ чего-то):
<em>Die Milch ist <strong>im</strong> Kühlschrank.</em> — Молоко в холодильнике.
<em>Ich bin <strong>im</strong> Supermarkt.</em> — Я в супермаркете.

<strong>Подсказка на пальцах:</strong>
• лежит сверху → <strong>auf</strong> (на столе)
• висит/прислонено/вплотную сбоку → <strong>an</strong> (на стене, у двери)
• внутри → <strong>in</strong> (в коробке, в комнате)

<strong>Сокращения в Dativ:</strong> in+dem = <strong>im</strong> · an+dem = <strong>am</strong>
Артикли в Dativ: der → dem · die → der · das → dem · мн.ч. → den`,
    examples: [
      { de: "Das Buch liegt auf dem Tisch.",     ru: "Книга на столе. (сверху → auf)"             },
      { de: "Das Bild hängt an der Wand.",       ru: "Картина на стене. (вертикально → an)"       },
      { de: "Die Milch ist im Kühlschrank.",     ru: "Молоко в холодильнике. (внутри → in)"       },
      { de: "Die Katze sitzt unter dem Stuhl.",  ru: "Кошка под стулом."                          },
      { de: "Der Ball ist zwischen den Autos.",  ru: "Мяч между машинами."                        },
    ],
    tip_de: "auf = horizontal/oben. an = vertikal/Kante. in = innen. Wo? → immer Dativ!",
    tip_ru: "auf = сверху на горизонтали. an = на вертикали / вплотную. in = внутри. Wo? → всегда Dativ!",
  },

  // ════════════════════════════════════════
  //  A1 — AKKUSATIV
  // ════════════════════════════════════════
  {
    id: "a1_gr_019", level: "A1",
    title_de: "Der Akkusativ – Veränderungen",
    title_ru: "Винительный падеж (Akkusativ)",
    explanation_de: "Der Akkusativ zeigt das direkte Objekt. Nur der männliche Artikel ändert sich: der → den.",
    explanation_ru: `Аккузатив — это падеж прямого дополнения (кого? что?). В немецком меняется только <strong>мужской</strong> артикль!

Nominativ → Akkusativ:
• <strong>der</strong> (м.р.) → <strong>den</strong>
• <strong>die</strong> (ж.р.) → <strong>die</strong> (без изменений!)
• <strong>das</strong> (ср.р.) → <strong>das</strong> (без изменений!)
• Plural <strong>die</strong> → <strong>die</strong> (без изменений!)

Неопределённый артикль:
• ein → <strong>einen</strong> (м.р.) | eine → <strong>eine</strong> | ein → <strong>ein</strong>
• kein → <strong>keinen</strong> | keine → <strong>keine</strong> | kein → <strong>kein</strong>`,
    examples: [
      { de: "Ich sehe den Mann. (der → den)",    ru: "Я вижу мужчину. (мужской → изменяется)"  },
      { de: "Ich sehe die Frau. (die → die)",    ru: "Я вижу женщину. (женский → не меняется)" },
      { de: "Ich trinke einen Kaffee.",           ru: "Я пью кофе. (einen = AKK мужской)"       },
      { de: "Ich habe keinen Hunger.",            ru: "Я не голоден. (keinen = AKK мужской)"    },
    ],
    tip_de: "Nur der → den! Die und das bleiben gleich. Das ist die gute Nachricht!",
    tip_ru: "Только der → den! Женский и средний не меняются. Это хорошая новость!",
  },

  // ════════════════════════════════════════
  //  A1 — VERBEN MIT A→Ä
  // ════════════════════════════════════════
  {
    id: "a1_gr_020", level: "A1",
    title_de: "Starke Verben mit a → ä",
    title_ru: "Глаголы с изменением корня a → ä",
    explanation_de: "Einige starke Verben ändern den Vokal a → ä bei du und er/sie/es.",
    explanation_ru: `Некоторые глаголы меняют гласную <strong>a → ä</strong> в формах <em>du</em> и <em>er/sie/es</em>:

• <strong>fahren</strong> (ехать): ich fahre / du <strong>fäh</strong>rst / er <strong>fäh</strong>rt
• <strong>schlafen</strong> (спать): ich schlafe / du <strong>schläf</strong>st / er <strong>schläf</strong>t
• <strong>waschen</strong> (стирать/мыть): ich wasche / du <strong>wäsch</strong>st / er <strong>wäsch</strong>t
• <strong>gefallen</strong> (нравиться): ich gefalle / du <strong>gefäll</strong>st / er <strong>gefäll</strong>t
• <strong>laufen</strong> (бегать): ich laufe / du <strong>läuf</strong>st / er <strong>läuf</strong>t
• <strong>tragen</strong> (носить): ich trage / du <strong>träg</strong>st / er <strong>träg</strong>t

⚠️ Только du и er/sie/es! Ich, wir, ihr, sie — без изменений.`,
    examples: [
      { de: "Ich fahre, du fährst, er fährt.",         ru: "Я еду, ты едешь, он едет."           },
      { de: "Ich schlafe, du schläfst, er schläft.",   ru: "Я сплю, ты спишь, он спит."          },
      { de: "Das Kleid gefällt mir sehr gut.",         ru: "Мне очень нравится это платье."       },
      { de: "Sie wäscht die Wäsche jeden Montag.",     ru: "Она стирает бельё каждый понедельник."},
    ],
    tip_de: "a → ä nur bei du und er/sie/es. Ich bleibt immer normal!",
    tip_ru: "a → ä только у du и er/sie/es. Форма ich всегда остаётся без изменений!",
  },

  // ════════════════════════════════════════
  //  A1 — WEGBESCHREIBUNG
  // ════════════════════════════════════════
  {
    id: "a1_gr_021", level: "A1",
    title_de: "Wegbeschreibung – nach dem Weg fragen",
    title_ru: "Как объяснить дорогу",
    explanation_de: "Mit diesen Phrasen kannst du den Weg erklären und nach dem Weg fragen.",
    explanation_ru: `Основные фразы для объяснения пути:

<strong>Направления:</strong>
• nach rechts abbiegen — повернуть направо
• nach links abbiegen — повернуть налево
• geradeaus gehen — идти прямо
• die erste/zweite Straße links/rechts — первая/вторая улица налево/направо

<strong>Предлоги движения (+ Akkusativ):</strong>
• durch den Park gehen — идти через парк
• über die Brücke gehen — перейти мост
• an der Kirche vorbeigehen — пройти мимо церкви
• die Straße entlang gehen — идти вдоль улицы

<strong>Ориентиры:</strong>
• am Bahnhof — у вокзала
• an der Ampel — у светофора`,
    examples: [
      { de: "Gehen Sie geradeaus!",                        ru: "Идите прямо!"                          },
      { de: "Biegen Sie links ab! / Bieg links ab!",       ru: "Поверните налево! / Повернись налево!" },
      { de: "Nehmen Sie die erste Straße rechts.",         ru: "Возьмите первую улицу направо."         },
      { de: "Gehen Sie durch den Park.",                   ru: "Идите через парк."                     },
      { de: "Gehen Sie die Straße entlang.",               ru: "Идите вдоль улицы."                    },
      { de: "Gehen Sie über die Kreuzung.",                ru: "Пройдите через перекрёсток."            },
    ],
    tip_de: "durch/über/entlang stehen mit Akkusativ. an/bei stehen mit Dativ (vorbei).",
    tip_ru: "durch/über/entlang — с Akkusativ. an/bei (vorbei) — с Dativ.",
  },

  // ════════════════════════════════════════
  //  A1 — GEFÜHLE AUSDRÜCKEN
  // ════════════════════════════════════════
  {
    id: "a1_gr_022", level: "A1",
    title_de: "Gefühle ausdrücken – Wie geht es dir?",
    title_ru: "Выражение эмоций – Как дела?",
    explanation_de: "So fragst du nach dem Befinden und beschreibst Gefühle.",
    explanation_ru: `<strong>Как спросить о самочувствии:</strong>
• Wie geht es dir? — Как ты? (неформально, «ты»)
• Wie geht es Ihnen? — Как Вы? (формально, «Вы»)
• Wie geht's? — Как дела? (разговорно)
• Und dir? / Und Ihnen? — А у тебя? / А у Вас?

<strong>Ответы:</strong>
• Sehr gut! — Очень хорошо!
• Gut, danke! — Хорошо, спасибо!
• Es geht. — Неплохо / Так себе.
• Nicht so gut. — Не очень.
• Schlecht. — Плохо.

<strong>Эмоции с «Ich bin»:</strong>
Ich bin + прилагательное → Ich bin glücklich / müde / krank.`,
    examples: [
      { de: "Wie geht es dir? – Gut, danke!",              ru: "Как ты? — Хорошо, спасибо!"         },
      { de: "Wie geht es Ihnen? – Nicht so gut.",          ru: "Как Вы? — Не очень."                },
      { de: "Ich bin müde und hungrig.",                   ru: "Я устал и голоден."                 },
      { de: "Er ist sehr glücklich heute.",                ru: "Он очень счастлив сегодня."         },
    ],
    tip_de: "Ich bin + Adjektiv für Gefühle. Ich habe Hunger / Durst / Angst — Ausnahmen!",
    tip_ru: "Ich bin + прилагательное для чувств. Но: Ich habe Hunger / Durst / Angst — исключения!",
  },

  // ════════════════════════════════════════
  //  A1 — BESONDERE VERBFORMEN (-t/-d Stämme, -eln, heißen)
  // ════════════════════════════════════════
  {
    id: "a1_gr_023", level: "A1",
    title_de: "Besondere Verbformen – Stämme auf -t, -d, -eln",
    title_ru: "Особые формы глаголов – основы на -t, -d, -eln",
    explanation_de: "Verben mit Stämmen auf -t oder -d bekommen ein Extra-e. Verben auf -eln verlieren das -e bei ich.",
    explanation_ru: `<strong>Глаголы с основой на -t или -d</strong> добавляют дополнительное -e- для произносимости:

• <strong>arbeiten</strong> (работать): du arbeit<strong>e</strong>st / er arbeit<strong>e</strong>t
• <strong>finden</strong> (находить): du find<strong>e</strong>st / er find<strong>e</strong>t
• <strong>atmen</strong> (дышать): du atm<strong>e</strong>st / er atm<strong>e</strong>t

<strong>Глаголы на -eln</strong> — ich теряет -e:
• <strong>klingeln</strong> (звонить): ich kling<strong>le</strong> / du klingelst / er klingelt
• <strong>sammeln</strong> (собирать): ich samm<strong>le</strong> / du sammelst / er sammelt

<strong>Глаголы с -β / -ß / -z</strong> — du-форма не добавляет второй -s:
• <strong>heißen</strong>: du heiß<strong>t</strong> (не heißst!)
• <strong>benutzen</strong>: du benutz<strong>t</strong>
• <strong>tanzen</strong>: du tanz<strong>t</strong>`,
    examples: [
      { de: "Ich arbeite, du arbeitest, er arbeitet.",   ru: "Я работаю, ты работаешь, он работает."   },
      { de: "Ich finde, du findest, er findet.",         ru: "Я нахожу, ты находишь, он находит."      },
      { de: "Ich klingle, du klingelst, er klingelt.",   ru: "Я звоню, ты звонишь, он звонит."         },
      { de: "Ich heiße Anna. Wie heißt du?",            ru: "Меня зовут Анна. Как тебя зовут?"        },
    ],
    tip_de: "Nach -t/-d: immer extra -e- einfügen! Bei -eln: ich verliert das -e (ich sammle, nicht sammele).",
    tip_ru: "После -t/-d всегда вставляй дополнительное -e-! У -eln: ich теряет -e (ich sammle, не sammele).",
  },

  // ════════════════════════════════════════
  //  A1 — DATIV ПАДЕЖ
  // ════════════════════════════════════════
  {
    id: "a1_gr_024", level: "A1",
    title_de: "Der Dativ – wem? mit wem?",
    title_ru: "Дательный падеж (Dativ)",
    explanation_de: "Der Dativ bezeichnet das indirekte Objekt. Alle Artikel ändern sich!",
    explanation_ru: `Dativ — это падеж косвенного дополнения (кому? с кем? чем?). В отличие от Akkusativ, в Dativ меняются ВСЕ артикли:

Определённый артикль (Dativ):
• der (м.р.) → <strong>dem</strong>
• die (ж.р.) → <strong>der</strong>
• das (ср.р.) → <strong>dem</strong>
• die (мн.ч.) → <strong>den</strong> (+n к существительному!)

Сокращения:
• in + dem = <strong>im</strong>
• an + dem = <strong>am</strong>
• von + dem = <strong>vom</strong>
• zu + dem = <strong>zum</strong> | zu + der = <strong>zur</strong>

Предлоги всегда с Dativ: mit, von, zu, aus, bei, seit, nach, gegenüber`,
    examples: [
      { de: "Ich fahre mit dem Bus. (der Bus → dem Bus)",    ru: "Я еду на автобусе. (der→dem)"      },
      { de: "Ich gehe zur Schule. (zu+der)",                 ru: "Я иду в школу. (zu+der=zur)"       },
      { de: "Er kommt aus der Türkei. (die Türkei → der)",   ru: "Он из Турции. (die→der в Dativ)"   },
      { de: "Ich helfe dem Mann. (der Mann → dem Mann)",     ru: "Я помогаю мужчине."                },
    ],
    tip_de: "Merke: mit, von, zu, aus, bei, seit, nach → immer Dativ!",
    tip_ru: "Запомни: mit, von, zu, aus, bei, seit, nach → всегда Dativ!",
  },

  // ════════════════════════════════════════
  //  A1 — DIE UHRZEIT (Время)
  // ════════════════════════════════════════
  {
    id: "a1_gr_025", level: "A1",
    title_de: "Die Uhrzeit – Wie viel Uhr ist es?",
    title_ru: "Время – Который час?",
    explanation_de: "So fragst du nach der Uhrzeit und sagst sie auf zwei Arten.",
    explanation_ru: `<strong>Как спросить:</strong>
• Wie viel Uhr ist es? — Который час?
• Wie spät ist es? — Сколько времени?

<strong>Официальный способ</strong> (24 часа):
• 8:00 = acht Uhr
• 8:20 = acht Uhr zwanzig
• 15:49 = fünfzehn Uhr neunundvierzig

<strong>Разговорный способ</strong> (12 часов):
• halb... = «половина следующего» → halb neun = 8:30!
• Viertel nach... = «четверть прошла» → Viertel nach acht = 8:15
• Viertel vor... = «без четверти» → Viertel vor neun = 8:45
• zehn nach acht = 8:10
• zehn vor neun = 8:50

⚠️ <strong>halb neun = 8:30</strong>, НЕ 9:30! Halb bedeutet: halb[er Weg] zu neun.`,
    examples: [
      { de: "Wie viel Uhr ist es? – Es ist sieben Uhr.",         ru: "Который час? — Семь часов."             },
      { de: "Es ist halb neun. (= 8:30)",                        ru: "Половина девятого (= 8:30)."            },
      { de: "Es ist Viertel nach acht. (= 8:15)",                ru: "Четверть девятого (= 8:15)."            },
      { de: "Es ist Viertel vor zehn. (= 9:45)",                 ru: "Без четверти десять (= 9:45)."          },
      { de: "Der Zug fährt um 14:07 Uhr ab.",                    ru: "Поезд отправляется в 14:07."            },
    ],
    tip_de: "halb neun = 8:30, NICHT 9:30! Der Zeiger ist halb auf dem Weg zur 9.",
    tip_ru: "halb neun = 8:30, НЕ 9:30! Стрелка находится на полпути к девятке.",
  },

  // ════════════════════════════════════════
  //  A1 — LÄNDER MIT/OHNE ARTIKEL
  // ════════════════════════════════════════
  {
    id: "a1_gr_026", level: "A1",
    title_de: "Länder – mit oder ohne Artikel?",
    title_ru: "Страны – с артиклем или без?",
    explanation_de: "Die meisten Länder haben keinen Artikel. Einige wenige Länder haben einen festen Artikel.",
    explanation_ru: `<strong>Большинство стран</strong> — без артикля:
Deutschland, Russland, Italien, Spanien, Frankreich, Polen, Afghanistan, Uganda, Japan...

<em>Ich komme aus Deutschland. / Ich wohne in Deutschland.</em>

<strong>Некоторые страны</strong> — с артиклем (запомни!):
• <strong>die</strong> Türkei, die Ukraine, die Schweiz, die Slowakei, die Niederlande, die USA
• <strong>der</strong> Iran, der Sudan, der Irak

⚠️ С артиклем меняется в Dativ:
• aus der Türkei / in der Schweiz
• aus dem Iran / in den USA

Структура: Ich komme aus + [Dativ]
• Ich komme aus <u>Deutschland</u>. (без артикля)
• Ich komme aus <u>der Türkei</u>. (die → der в Dativ)
• Ich komme aus <u>dem Iran</u>. (der → dem в Dativ)`,
    examples: [
      { de: "Ich komme aus Deutschland.",        ru: "Я из Германии. (без артикля)"       },
      { de: "Er kommt aus der Türkei.",          ru: "Он из Турции. (die → der Dativ)"    },
      { de: "Sie wohnt in der Ukraine.",         ru: "Она живёт в Украине."               },
      { de: "Wir kommen aus den USA.",           ru: "Мы из США. (die → den Dativ)"       },
    ],
    tip_de: "Merke die Ausnahmen: die Türkei, die Schweiz, die Ukraine, der Iran, die USA.",
    tip_ru: "Запомни исключения: die Türkei, die Schweiz, die Ukraine, der Iran, die USA.",
  },

  // ════════════════════════════════════════
  //  A1 — SEIN VS HABEN BEI GEFÜHLEN
  // ════════════════════════════════════════
  {
    id: "a1_gr_027", level: "A1",
    title_de: "sein vs. haben bei Gefühlen",
    title_ru: "sein или haben при описании чувств?",
    explanation_de: "Manche Gefühle und Zustände werden mit 'sein', andere mit 'haben' ausgedrückt.",
    explanation_ru: `В немецком одни чувства выражаются через <strong>sein</strong> (быть), другие через <strong>haben</strong> (иметь):

<strong>Ich bin + Adjektiv:</strong>
• Ich bin müde (усталый) / traurig (грустный)
• Ich bin krank (больной) / wütend (злой)
• Ich bin glücklich (счастливый) / verliebt (влюблённый)
• Ich bin groß / klein / jung / alt / schön / stark

<strong>Ich habe + Nomen:</strong>
• Ich habe Hunger (голод) — я голоден
• Ich habe Durst (жажда) — я хочу пить
• Ich habe Angst (страх) — мне страшно
• Ich habe Schmerzen (боль) — у меня боль

⚠️ <strong>«Hunger/Durst/Angst haben»</strong> — это существительные, поэтому haben!`,
    examples: [
      { de: "Ich bin müde und traurig.",      ru: "Я устал и грустен. (sein + adj)"         },
      { de: "Ich habe Hunger und Durst.",     ru: "Я голоден и хочу пить. (haben + Nomen)"  },
      { de: "Er ist glücklich.",              ru: "Он счастлив. (sein)"                      },
      { de: "Sie hat Angst.",                 ru: "Ей страшно. (haben)"                      },
    ],
    tip_de: "Hunger/Durst/Angst/Schmerzen → haben! Adjektive → sein!",
    tip_ru: "Hunger/Durst/Angst/Schmerzen → haben! Прилагательные → sein!",
  },

  // ════════════════════════════════════════
  //  A1 — PLURAL DER NOMEN
  // ════════════════════════════════════════
  {
    id: "a1_gr_028", level: "A1",
    title_de: "Plural der Nomen – Mehrzahl bilden",
    title_ru: "Множественное число существительных",
    explanation_de: "Im Deutschen gibt es verschiedene Pluralendungen. Der Artikel ist immer 'die' im Plural.",
    explanation_ru: `Во множественном числе артикль всегда <strong>die</strong> — независимо от рода слова!

Основные типы множественного числа:
• <strong>-e</strong>: der Bahnhof → die Bahnhöf<strong>e</strong> | der Park → die Park<strong>s</strong>
• <strong>-en</strong>: die Schule → die Schul<strong>en</strong> | die Kirche → die Kirch<strong>en</strong>
• <strong>-er</strong>: das Krankenhaus → die Krankenhäus<strong>er</strong>
• <strong>-s</strong>: das Hotel → die Hotel<strong>s</strong> | das Restaurant → die Restaurant<strong>s</strong>
• <strong>без изменений</strong>: der Supermarkt → die Supermärkte (Umlaut!)
• <strong>только мн. ч.</strong>: die Eltern, die Geschwister, die Leute (не имеют ед. ч.)

⚠️ Умлаут (ä/ö/ü) часто появляется во мн. ч.!
• der Markt → die Märkt<strong>e</strong>
• die Apotheke → die Apothek<strong>en</strong>`,
    examples: [
      { de: "der Supermarkt → die Supermärkte",   ru: "супермаркет → супермаркеты"        },
      { de: "die Schule → die Schulen",            ru: "школа → школы"                    },
      { de: "das Hotel → die Hotels",              ru: "отель → отели"                    },
      { de: "das Krankenhaus → die Krankenhäuser", ru: "больница → больницы"              },
      { de: "die Post → (nur Singular)",           ru: "почта → только единственное число" },
    ],
    tip_de: "Im Plural ist der Artikel immer DIE! Plural lernst du am besten zusammen mit dem Wort.",
    tip_ru: "Во множественном числе артикль всегда DIE! Лучше учи множественное число вместе со словом.",
  },

  // ════════════════════════════════════════
  //  A1 — POSSESSIVPRONOMEN (полная таблица)
  // ════════════════════════════════════════
  {
    id: "a1_gr_029", level: "A1",
    title_de: "Possessivpronomen – mein, dein, sein, ihr...",
    title_ru: "Притяжательные местоимения",
    explanation_de: "Possessivpronomen zeigen, wem etwas gehört. Sie richten sich nach dem Artikel des Substantivs.",
    explanation_ru: `Притяжательные местоимения показывают принадлежность и согласуются с родом существительного:

<table style="border-collapse:collapse">
<tr><td><strong>ich →</strong></td><td>mein/meine</td><td>мой/моя/моё</td></tr>
<tr><td><strong>du →</strong></td><td>dein/deine</td><td>твой/твоя/твоё</td></tr>
<tr><td><strong>er →</strong></td><td>sein/seine</td><td>его</td></tr>
<tr><td><strong>sie →</strong></td><td>ihr/ihre</td><td>её</td></tr>
<tr><td><strong>wir →</strong></td><td>unser/unsere</td><td>наш/наша</td></tr>
<tr><td><strong>ihr →</strong></td><td>euer/eure</td><td>ваш/ваша</td></tr>
<tr><td><strong>sie/Sie →</strong></td><td>ihr/ihre / Ihr/Ihre</td><td>их/Ваш</td></tr>
</table>

Окончания:
• der-слова → <strong>mein</strong> Vater (без окончания)
• die-слова → <strong>meine</strong> Mutter (-e)
• das-слова → <strong>mein</strong> Kind (без окончания)`,
    examples: [
      { de: "Das ist mein Vater. / meine Mutter. / mein Kind.", ru: "Это мой отец / моя мать / моё дитя." },
      { de: "Wie heißt dein Bruder?",                           ru: "Как зовут твоего брата?"              },
      { de: "Er hat seine Tasche vergessen.",                   ru: "Он забыл свою сумку."                 },
      { de: "Das ist ihr Mann. (ihre Frau)",                    ru: "Это её муж. (её жена)"                },
    ],
    tip_de: "mein = kein: gleiche Endungen! Lern: 'mein' für der/das, 'meine' für die.",
    tip_ru: "mein = kein: одинаковые окончания! mein для der/das, meine для die.",
  },

  // ════════════════════════════════════════
  //  A1 — KÖRPERTEILE PLURAL
  // ════════════════════════════════════════
  {
    id: "a1_gr_030", level: "A1",
    title_de: "Körperteile – Plural",
    title_ru: "Части тела — множественное число",
    explanation_de: "Körperteile haben verschiedene Pluralformen. Im Plural ist der Artikel immer 'die'.",
    explanation_ru: `Части тела во множественном числе — у каждого своя форма. Артикль всегда <strong>die</strong>.

<strong>Голова (Der Kopf):</strong>
• das Gesicht → die Gesicht<strong>er</strong>
• der Hals → die Häls<strong>e</strong> (Umlaut!)
• der Zahn → die Zähn<strong>e</strong> (Umlaut!)
• der Mund → die Münder (Umlaut!)
• die Nase → die Nas<strong>en</strong>
• das Ohr → die Ohr<strong>en</strong>
• das Auge → die Aug<strong>en</strong>
• die Augenbraue → die Augenbrau<strong>en</strong>
• das Haar → die Haar<strong>e</strong>
• das Kinn → die Kinn<strong>e</strong>
• die Wange → die Wang<strong>en</strong>
• die Stirn → (nur Singular)

<strong>Тело (Der Körper):</strong>
• der Arm → die Arm<strong>e</strong>
• die Hand → die Händ<strong>e</strong> (Umlaut!)
• der Finger → die Finger (без изменений!)
• die Brust → die Brüst<strong>e</strong> (Umlaut!)
• der Rücken → die Rücken (без изменений!)
• die Schulter → die Schulter<strong>n</strong>
• der Bauch → die Bäuch<strong>e</strong> (Umlaut!)
• das Knie → die Knie (без изменений!)
• das Bein → die Bein<strong>e</strong>
• der Fuß → die Füß<strong>e</strong> (Umlaut!)
• der Zeh → die Zeh<strong>en</strong>
• der Ellbogen → die Ellbogen (без изменений!)`,
    examples: [
      { de: "Ich habe zwei Augen, zwei Ohren und eine Nase.",   ru: "У меня два глаза, два уха и один нос."       },
      { de: "Der Zahn → die Zähne (Umlaut + -e)",              ru: "Зуб → зубы (умлаут + -e)"                   },
      { de: "der Finger → die Finger (kein Plural-s!)",        ru: "Палец → пальцы (без окончания!)"            },
      { de: "die Hand → die Hände (Umlaut!)",                  ru: "Рука → руки (умлаут ä!)"                    },
      { de: "Mein Kopf tut weh! / Meine Ohren tun weh!",       ru: "У меня болит голова! / У меня болят уши!"   },
    ],
    tip_de: "Viele Körperteile bilden den Plural mit Umlaut (ä, ö, ü). Lerne Singular + Plural zusammen!",
    tip_ru: "Многие части тела во мн. числе получают умлаут (ä, ö, ü). Учи ед. и мн. число вместе!",
  },

  // ════════════════════════════════════════
  //  A1 — sein / seine / ihr / ihre
  // ════════════════════════════════════════
  {
    id: "a1_gr_031", level: "A1",
    title_de: "sein / seine / ihr / ihre",
    title_ru: "sein / seine / ihr / ihre — его и её",
    explanation_de: "sein = von ihm (er). ihr = von ihr (sie). Die Endung -e richtet sich nach dem Wort.",
    explanation_ru: `Это притяжательные местоимения <strong>3-го лица</strong>: «его» и «её».

<strong>1. Чьё это? — выбираем основу:</strong>
• Он (er, Leo) → <strong>sein</strong> (его)
• Она (sie, Lea) → <strong>ihr</strong> (её)

<strong>2. Какое слово стоит после? — выбираем окончание:</strong>
• der / das слово → БЕЗ окончания → <strong>sein</strong> / <strong>ihr</strong>
• die слово или МНОЖЕСТВЕННОЕ число → окончание <strong>-e</strong> → <strong>seine</strong> / <strong>ihre</strong>

<strong>Таблица:</strong>
<table style="border-collapse:collapse">
<tr><td></td><td><strong>Он (Leo)</strong></td><td><strong>Она (Lea)</strong></td></tr>
<tr><td>der Arm</td><td>sein Arm</td><td>ihr Arm</td></tr>
<tr><td>das Bein</td><td>sein Bein</td><td>ihr Bein</td></tr>
<tr><td>die Hand</td><td>seine Hand</td><td>ihre Hand</td></tr>
<tr><td>die Arme (мн.)</td><td>seine Arme</td><td>ihre Arme</td></tr>
</table>

💡 Множественное число всегда ведёт себя как die-слово → всегда <strong>-e</strong> (seine / ihre).`,
    examples: [
      { de: "Leo: sein Arm, sein Bein (der/das → sein)",     ru: "Лео: его рука, его нога (der/das → sein)"    },
      { de: "Leo: seine Hand, seine Arme (die/мн. → seine)", ru: "Лео: его кисть, его руки (die/мн. → seine)"  },
      { de: "Lea: ihr Arm, ihr Bein (der/das → ihr)",        ru: "Леа: её рука, её нога (der/das → ihr)"        },
      { de: "Lea: ihre Hand, ihre Arme (die/мн. → ihre)",    ru: "Леа: её кисть, её руки (die/мн. → ihre)"      },
    ],
    tip_de: "er → sein/seine | sie → ihr/ihre. Plural immer mit -e!",
    tip_ru: "Он → sein/seine | Она → ihr/ihre. Множественное число — всегда с -e (seine/ihre)!",
  },

  // ════════════════════════════════════════
  //  A1 — БОЛЬ: tut weh / Ich habe ...schmerzen
  // ════════════════════════════════════════
  {
    id: "a1_gr_032", level: "A1",
    title_de: "Schmerzen ausdrücken – tut weh / Ich habe ...",
    title_ru: "Как сказать что болит",
    explanation_de: "Es gibt zwei Wege, Schmerzen auszudrücken: mit 'tut weh' oder mit 'Ich habe ...schmerzen'.",
    explanation_ru: `Есть <strong>два способа</strong> сказать что у тебя болит:

<strong>Способ 1: ... tut weh (болит)</strong>
Подходит для одной части тела. Используем притяжательное местоимение (mein/dein...):
• <strong>Mein Kopf tut weh.</strong> — У меня болит голова.
• <strong>Mein Bauch tut weh.</strong> — У меня болит живот.

Если болят НЕСКОЛЬКО частей → <strong>tun weh</strong> (мн. число):
• <strong>Meine Ohren tun weh.</strong> — У меня болят уши.
• <strong>Meine Hände tun weh.</strong> — У меня болят руки.

<strong>Способ 2: Ich habe + ...schmerzen</strong>
Слова боли уже содержат «-schmerzen» и всегда во мн. числе (die):
• <strong>Ich habe Kopfschmerzen.</strong> — У меня головная боль.
• <strong>Ich habe Bauchschmerzen.</strong> — У меня болит живот.
• <strong>Ich habe Halsschmerzen.</strong> — У меня болит горло.

💡 mein → меняется по роду: mein Kopf (der/das), meine Hand (die), meine Ohren (мн.).`,
    examples: [
      { de: "Mein Kopf tut weh.",          ru: "У меня болит голова. (одна часть → tut weh)"   },
      { de: "Meine Ohren tun weh.",        ru: "У меня болят уши. (несколько → tun weh)"        },
      { de: "Ich habe Zahnschmerzen.",     ru: "У меня болит зуб. (Ich habe + schmerzen)"       },
      { de: "Ich habe Fieber und Husten.", ru: "У меня температура и кашель."                   },
      { de: "Was tut dir weh?",            ru: "Что у тебя болит?"                              },
    ],
    tip_de: "Einer → tut weh. Mehrere → tun weh. Oder einfach: Ich habe ...schmerzen.",
    tip_ru: "Одна часть → tut weh. Несколько → tun weh. Или проще: Ich habe ...schmerzen.",
  },

  // ════════════════════════════════════════
  //  A1 — NOMINATIV / AKKUSATIV / DATIV
  // ════════════════════════════════════════
  {
    id: "a1_gr_033", level: "A1",
    title_de: "Nominativ, Akkusativ, Dativ – welcher Fall?",
    title_ru: "Падежи: Nominativ / Akkusativ / Dativ — когда какой",
    explanation_de: "Drei Fälle: Nominativ (Subjekt), Akkusativ (direktes Objekt), Dativ (indirektes Objekt).",
    explanation_ru: `В немецком 3 главных падежа. Главное — понять <strong>роль слова в предложении</strong>.

<strong>🟢 NOMINATIV — кто/что делает (подлежащее)</strong>
Вопрос: <strong>Wer? Was?</strong> (Кто? Что?)
Это тот, кто выполняет действие.
<em><strong>Der Mann</strong> trinkt Kaffee.</em> — Мужчина пьёт кофе. (мужчина = подлежащее)

<strong>🔴 AKKUSATIV — кого/что (прямое дополнение)</strong>
Вопрос: <strong>Wen? Was?</strong> (Кого? Что?)
На кого направлено действие. Часто после: haben, sehen, kaufen, brauchen, essen, trinken, nehmen, suchen.
<em>Ich sehe <strong>den Mann</strong>.</em> — Я вижу мужчину.
<em>Ich habe <strong>einen Hund</strong>.</em>

<strong>🔵 DATIV — кому/чему (косвенное дополнение)</strong>
Вопрос: <strong>Wem?</strong> (Кому?)
Кому адресовано действие. После: helfen, danken, geben, gehören, gefallen, и предлогов mit, zu, aus, bei, von, nach, seit.
<em>Ich helfe <strong>dem Mann</strong>.</em> — Я помогаю мужчине.
<em>Ich fahre mit <strong>dem Bus</strong>.</em>

<strong>📋 Таблица артиклей:</strong>
<table style="border-collapse:collapse">
<tr><td></td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>мн.</b></td></tr>
<tr><td><b>Nom.</b></td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td><b>Akk.</b></td><td><span style="color:#ff6b8a">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td><b>Dat.</b></td><td>dem</td><td>der</td><td>dem</td><td>den+n</td></tr>
</table>

<strong>💡 Самое важное:</strong>
• Меняется заметнее всего <u>мужской род (der)</u>: der → den (Akk) → dem (Dat).
• Женский и средний в Akkusativ <u>НЕ меняются</u> (die/das остаются).
• Спроси себя: <strong>Кто делает?</strong> → Nom. <strong>Кого/что?</strong> → Akk. <strong>Кому?</strong> → Dat.`,
    examples: [
      { de: "Der Hund (Nom.) sieht die Katze (Akk.).", ru: "Собака (кто? Nom.) видит кошку (кого? Akk.)." },
      { de: "Ich gebe dem Kind (Dat.) einen Ball (Akk.).", ru: "Я даю ребёнку (кому? Dat.) мяч (что? Akk.)." },
      { de: "Der Mann → Ich sehe den Mann → Ich helfe dem Mann.", ru: "der → den (Akk) → dem (Dat) — меняется мужской род." },
      { de: "Ich fahre mit dem Auto. (mit → Dativ)", ru: "Я еду на машине. (mit всегда Dativ)" },
    ],
    tip_de: "Wer/Was? → Nominativ. Wen/Was? → Akkusativ. Wem? → Dativ. Nur der ändert sich stark!",
    tip_ru: "Кто/Что? → Nominativ. Кого/Что? → Akkusativ. Кому? → Dativ. Сильнее всего меняется только der!",
  },

  // ════════════════════════════════════════
  //  A1 — ПАДЕЖИ: ШПАРГАЛКА ПО СЛОВАМ-МАРКЕРАМ
  // ════════════════════════════════════════
  {
    id: "a1_gr_034", level: "A1",
    title_de: "Fälle erkennen – Signalwörter (Präpositionen & Verben)",
    title_ru: "Как определить падеж по словам-маркерам (предлоги и глаголы)",
    explanation_de: "Bestimmte Präpositionen und Verben zeigen dir sofort den Fall.",
    explanation_ru: `Самый простой способ — <strong>смотреть на слово-маркер</strong> (предлог или глагол). Оно подсказывает падеж. Разбираем по шагам.

<strong>━━━ ШАГ 1. Есть предлог? Смотри какой ━━━</strong>

<strong>🔵 Эти предлоги → ВСЕГДА Dativ</strong> (заучи их как стих!):
<strong>aus, bei, mit, nach, seit, von, zu</strong> (+ gegenüber)
• <em>Ich fahre <strong>mit</strong> dem Bus.</em> — mit → Dativ → der Bus стал <strong>dem</strong> Bus.
• <em>Ich komme <strong>aus</strong> der Türkei.</em>
• <em>Ich gehe <strong>zu</strong> dem (=zum) Arzt.</em>
• <em>Nach <strong>dem</strong> Essen.</em>
👉 Увидел mit / aus / bei / von / zu / nach / seit — ставь Dativ, не думай.

<strong>🔴 Эти предлоги → ВСЕГДА Akkusativ:</strong>
<strong>durch, für, gegen, ohne, um</strong> (+ bis)
• <em>Ich kaufe ein Geschenk <strong>für</strong> den Mann.</em> — für → Akk → <strong>den</strong> Mann.
• <em>Ich gehe <strong>durch</strong> den Park.</em>
• <em>Ich habe nichts <strong>gegen</strong> dich.</em>
👉 Увидел für / durch / gegen / ohne / um — ставь Akkusativ.

<strong>🟡 «Хитрые» предлоги (an, auf, in, über, unter, vor, hinter, neben, zwischen):</strong>
Зависит от вопроса:
• <strong>Wo?</strong> (Где? — предмет на месте) → <strong>Dativ</strong>: <em>Das Buch ist <strong>auf dem</strong> Tisch.</em>
• <strong>Wohin?</strong> (Куда? — движение) → <strong>Akkusativ</strong>: <em>Ich lege das Buch <strong>auf den</strong> Tisch.</em>

<strong>━━━ ШАГ 2. Предлога нет? Смотри на глагол ━━━</strong>

<strong>🔵 Эти глаголы требуют Dativ</strong> (кому?):
<strong>helfen, danken, gefallen, gehören, antworten, glauben, passen</strong>
• <em>Ich helfe <strong>dem</strong> Mann.</em> (помогаю кому?)
• <em>Das Auto gehört <strong>dem</strong> Vater.</em>

<strong>🔴 Большинство остальных глаголов → Akkusativ</strong> (кого/что?):
<strong>haben, sehen, kaufen, brauchen, essen, trinken, nehmen, suchen, lieben, fragen</strong>
• <em>Ich habe <strong>einen</strong> Hund.</em>
• <em>Ich sehe <strong>den</strong> Mann.</em>

<strong>📋 Таблица (главное — мужской род der!):</strong>
<table style="border-collapse:collapse">
<tr><td></td><td><b>der</b> (м)</td><td><b>die</b> (ж)</td><td><b>das</b> (ср)</td><td><b>мн.</b></td></tr>
<tr><td><b>Nom.</b> (кто?)</td><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die</td></tr>
<tr><td><b>Akk.</b> (кого?)</td><td style="color:#ff6b8a"><b>den / einen</b></td><td>die / eine</td><td>das / ein</td><td>die</td></tr>
<tr><td><b>Dat.</b> (кому?)</td><td><b>dem / einem</b></td><td><b>der / einer</b></td><td><b>dem / einem</b></td><td><b>den</b>+n</td></tr>
</table>

<strong>🧠 Запомни короткое правило:</strong>
1. Есть mit/aus/bei/von/zu/nach/seit? → <strong>Dativ</strong>
2. Есть für/durch/gegen/ohne/um? → <strong>Akkusativ</strong>
3. Есть helfen/danken/gehören? → <strong>Dativ</strong>
4. Ничего такого, просто «кого/что»? → <strong>Akkusativ</strong>
5. Кто делает действие? → <strong>Nominativ</strong> (он не меняется).`,
    examples: [
      { de: "Ich fahre mit dem Bus.",            ru: "mit → Dativ: der Bus → dem Bus." },
      { de: "Ein Geschenk für den Mann.",        ru: "für → Akkusativ: der Mann → den Mann." },
      { de: "Ich helfe dem Kind.",               ru: "helfen → Dativ: das Kind → dem Kind." },
      { de: "Ich kaufe den Apfel.",              ru: "kaufen (нет предлога) → Akkusativ: der → den." },
      { de: "Ich komme aus der Schweiz.",        ru: "aus → Dativ: die Schweiz → der Schweiz." },
    ],
    tip_de: "DATIV: aus,bei,mit,nach,seit,von,zu | AKKUSATIV: durch,für,gegen,ohne,um. Verben: helfen→Dativ, sonst meist Akkusativ.",
    tip_ru: "DATIV-предлоги: aus,bei,mit,nach,seit,von,zu. AKKUSATIV-предлоги: durch,für,gegen,ohne,um. helfen/danken/gehören → Dativ, остальное чаще Akkusativ.",
  },

  // ════════════════════════════════════════
  //  СЮДА ДОБАВЛЯЙ СВОИ ПРАВИЛА:
  // ════════════════════════════════════════

];
