/* ══════════════════════════════════════════════════════════════
   ГЕНЕРАТОР ПРЕДЛОЖЕНИЙ (вкладка «Предложения»)
   Собирает грамматически правильные немецкие предложения + русский
   перевод по настройкам: тема, уровень, время (Präsens / Präteritum /
   Perfekt), модальные глаголы, местоимения или существительные.

   Как устроено:
   • DE_VERBS — немецкие глаголы со всеми формами (правильные
     спрягаются автоматически через reg(), неправильные заданы явно).
   • RU_VERBS — русские глаголы: настоящее время по лицам, прошедшее
     по роду/числу, инфинитив.
   • TOPICS — темы; в каждой «рамки»: немецкий глагол + русский глагол
     + варианты дополнения [по-немецки, по-русски] уже в нужном падеже.
   Чтобы добавить тему/рамку — допиши TOPICS (и глагол, если нового нет).
══════════════════════════════════════════════════════════════ */
(function () {
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const cap  = s => s.charAt(0).toUpperCase() + s.slice(1);

  /* ── Лица: 0 ich, 1 du, 2 er/sie/es, 3 wir, 4 ihr, 5 sie/Sie ── */
  const HABEN = { praes: ['habe','hast','hat','haben','habt','haben'], praet: ['hatte','hattest','hatte','hatten','hattet','hatten'] };
  const SEIN  = { praes: ['bin','bist','ist','sind','seid','sind'],   praet: ['war','warst','war','waren','wart','waren'] };

  /* Правильный глагол: kaufen → kaufe/kaufst/…, kaufte…, gekauft */
  function reg(inf, o = {}) {
    const stem = /en$/.test(inf) ? inf.slice(0, -2) : inf.slice(0, -1);   // lernen → lern, wandern → wander
    const eIns = /([td]|[^aeiouhlr][mn])$/.test(stem);   // arbeit-e-st, rechn-e-t
    const sEnd = /[sßzx]$/.test(stem);                   // du putzt (не putzst)
    const e = eIns ? 'e' : '';
    const p3 = stem + e + 'te';
    const noGe = /ieren$/.test(inf) || /^(be|ver|er|ent|zer|ge|emp|miss|über|unter)/.test(inf);
    return {
      inf,
      praes: [stem + 'e', stem + e + (sEnd ? 't' : 'st'), stem + e + 't', inf, stem + e + 't', inf],
      praet: [p3, p3 + 'st', p3, p3 + 'n', p3 + 't', p3 + 'n'],
      part: (noGe ? '' : 'ge') + stem + e + 't',
      aux: o.aux || 'haben',
    };
  }
  /* Отделяемая приставка: sep('ein', reg('kaufen')) → kaufe … ein, eingekauft */
  function sep(prefix, base) {
    return { ...base, inf: prefix + base.inf, part: prefix + base.part, sep: prefix };
  }
  const irr = (inf, praes, praet, part, aux = 'haben') => ({ inf, praes: praes.split(' '), praet: praet.split(' '), part, aux });

  const DE_VERBS = {
    essen:      irr('essen', 'esse isst isst essen esst essen', 'aß aßt aß aßen aßt aßen', 'gegessen'),
    trinken:    irr('trinken', 'trinke trinkst trinkt trinken trinkt trinken', 'trank trankst trank tranken trankt tranken', 'getrunken'),
    kochen:     reg('kochen'),
    kaufen:     reg('kaufen'),
    backen:     { ...reg('backen'), praes: 'backe bäckst bäckt backen backt backen'.split(' '), part: 'gebacken' },
    bestellen:  reg('bestellen'),
    aufraeumen: sep('auf', reg('räumen')),
    putzen:     reg('putzen'),
    suchen:     reg('suchen'),
    mieten:     reg('mieten'),
    bezahlen:   reg('bezahlen'),
    reparieren: reg('reparieren'),
    waschen:    irr('waschen', 'wasche wäschst wäscht waschen wascht waschen', 'wusch wuschst wusch wuschen wuscht wuschen', 'gewaschen'),
    nehmen:     irr('nehmen', 'nehme nimmst nimmt nehmen nehmt nehmen', 'nahm nahmst nahm nahmen nahmt nahmen', 'genommen'),
    anrufen:    sep('an', irr('rufen', 'rufe rufst ruft rufen ruft rufen', 'rief riefst rief riefen rieft riefen', 'gerufen')),
    besuchen:   reg('besuchen'),
    messen:     irr('messen', 'messe misst misst messen messt messen', 'maß maßt maß maßen maßt maßen', 'gemessen'),
    schreiben:  irr('schreiben', 'schreibe schreibst schreibt schreiben schreibt schreiben', 'schrieb schriebst schrieb schrieben schriebt schrieben', 'geschrieben'),
    lesen:      irr('lesen', 'lese liest liest lesen lest lesen', 'las last las lasen last lasen', 'gelesen'),
    unterschreiben: irr('unterschreiben', 'unterschreibe unterschreibst unterschreibt unterschreiben unterschreibt unterschreiben', 'unterschrieb unterschriebst unterschrieb unterschrieben unterschriebt unterschrieben', 'unterschrieben'),
    beginnen:   irr('beginnen', 'beginne beginnst beginnt beginnen beginnt beginnen', 'begann begannst begann begannen begannt begannen', 'begonnen'),
    finden:     irr('finden', 'finde findest findet finden findet finden', 'fand fandest fand fanden fandet fanden', 'gefunden'),
    verdienen:  reg('verdienen'),
    arbeiten:   reg('arbeiten'),
    fahren:     irr('fahren', 'fahre fährst fährt fahren fahrt fahren', 'fuhr fuhrst fuhr fuhren fuhrt fuhren', 'gefahren', 'sein'),
    gehen:      irr('gehen', 'gehe gehst geht gehen geht gehen', 'ging gingst ging gingen gingt gingen', 'gegangen', 'sein'),
    warten:     reg('warten'),
    spielen:    reg('spielen'),
    sehen:      irr('sehen', 'sehe siehst sieht sehen seht sehen', 'sah sahst sah sahen saht sahen', 'gesehen'),
    hoeren:     reg('hören'),
    treffen:    irr('treffen', 'treffe triffst trifft treffen trefft treffen', 'traf trafst traf trafen traft trafen', 'getroffen'),
    schwimmen:  irr('schwimmen', 'schwimme schwimmst schwimmt schwimmen schwimmt schwimmen', 'schwamm schwammst schwamm schwammen schwammt schwammen', 'geschwommen', 'sein'),
    einkaufen:  sep('ein', reg('kaufen')),
    anprobieren: sep('an', reg('probieren')),
    helfen:     irr('helfen', 'helfe hilfst hilft helfen helft helfen', 'half halfst half halfen halft halfen', 'geholfen'),
    einladen:   sep('ein', irr('laden', 'lade lädst lädt laden ladet laden', 'lud ludst lud luden ludet luden', 'geladen')),
    lernen:     reg('lernen'),
    machen:     reg('machen'),
    verstehen:  irr('verstehen', 'verstehe verstehst versteht verstehen versteht verstehen', 'verstand verstandest verstand verstanden verstandet verstanden', 'verstanden'),
    fragen:     reg('fragen'),
    ueben:      reg('üben'),
  };

  /* ── Модальные глаголы ── */
  const DE_MODALS = {
    koennen: irr('können', 'kann kannst kann können könnt können', 'konnte konntest konnte konnten konntet konnten', 'gekonnt'),
    muessen: irr('müssen', 'muss musst muss müssen müsst müssen', 'musste musstest musste mussten musstet mussten', 'gemusst'),
    wollen:  irr('wollen', 'will willst will wollen wollt wollen', 'wollte wolltest wollte wollten wolltet wollten', 'gewollt'),
    duerfen: irr('dürfen', 'darf darfst darf dürfen dürft dürfen', 'durfte durftest durfte durften durftet durften', 'gedurft'),
    sollen:  irr('sollen', 'soll sollst soll sollen sollt sollen', 'sollte solltest sollte sollten solltet sollten', 'gesollt'),
    moechten: { ...irr('möchten', 'möchte möchtest möchte möchten möchtet möchten', 'wollte wolltest wollte wollten wolltet wollten', 'gewollt'), onlyPraes: true },
  };

  /* ── Русские глаголы: pres[6 лиц], past[m,f,n,pl], inf ── */
  const ruA = (stem, inf) => ({ pres: ['ю','ешь','ет','ем','ете','ют'].map(e => stem + e), past: ['л','ла','ло','ли'].map(e => stem + e), inf: inf || stem + 'ть' });
  const ruX = (pres, past, inf) => ({ pres: pres.split(' '), past: past.split(' '), inf });
  const RU_VERBS = {
    est:      ruX('ем ешь ест едим едите едят', 'ел ела ело ели', 'есть'),
    pit:      ruX('пью пьёшь пьёт пьём пьёте пьют', 'пил пила пило пили', 'пить'),
    gotovit:  ruX('готовлю готовишь готовит готовим готовите готовят', 'готовил готовила готовило готовили', 'готовить'),
    pokupat:  ruA('покупа'),
    pech:     ruX('пеку печёшь печёт печём печёте пекут', 'пёк пекла пекло пекли', 'печь'),
    zakazyvat: ruA('заказыва'),
    ubirat:   ruA('убира'),
    myt:      ruX('мою моешь моет моем моете моют', 'мыл мыла мыло мыли', 'мыть'),
    stirat:   ruA('стира'),
    iskat:    ruX('ищу ищешь ищет ищем ищете ищут', 'искал искала искало искали', 'искать'),
    snimat:   ruA('снима'),
    platit:   ruX('плачу платишь платит платим платите платят', 'платил платила платило платили', 'платить'),
    chinit:   ruX('чиню чинишь чинит чиним чините чинят', 'чинил чинила чинило чинили', 'чинить'),
    prinimat: ruA('принима'),
    zvonit:   ruX('звоню звонишь звонит звоним звоните звонят', 'звонил звонила звонило звонили', 'звонить'),
    naveshchat: ruA('навеща'),
    izmerjat: ruA('измеря'),
    pisat:    ruX('пишу пишешь пишет пишем пишете пишут', 'писал писала писало писали', 'писать'),
    chitat:   ruA('чита'),
    podpisyvat: ruA('подписыва'),
    nachinat: ruA('начина'),
    nahodit:  ruX('нахожу находишь находит находим находите находят', 'находил находила находило находили', 'находить'),
    zarabatyvat: ruA('зарабатыва'),
    rabotat:  ruA('работа'),
    ehat:     ruX('еду едешь едет едем едете едут', 'ехал ехала ехало ехали', 'ехать'),
    idti:     ruX('иду идёшь идёт идём идёте идут', 'шёл шла шло шли', 'идти'),
    zhdat:    ruX('жду ждёшь ждёт ждём ждёте ждут', 'ждал ждала ждало ждали', 'ждать'),
    igrat:    ruA('игра'),
    smotret:  ruX('смотрю смотришь смотрит смотрим смотрите смотрят', 'смотрел смотрела смотрело смотрели', 'смотреть'),
    slushat:  ruA('слуша'),
    vstrechat: ruA('встреча'),
    plavat:   ruA('плава'),
    delat:    ruA('дела'),
    primerjat: ruA('примеря'),
    pomogat:  ruA('помога'),
    priglashat: ruA('приглаша'),
    uchit:    ruX('учу учишь учит учим учите учат', 'учил учила учило учили', 'учить'),
    ponimat:  ruA('понима'),
    sprashivat: ruA('спрашива'),
    trenirovat: ruX('тренирую тренируешь тренирует тренируем тренируете тренируют', 'тренировал тренировала тренировало тренировали', 'тренировать'),
  };

  /* ── Русские модальные: present(person, gender), past(gender) ── */
  const G = { m: 0, f: 1, n: 2, pl: 3 };
  const dolzh = ['должен','должна','должно','должны'];
  const RU_MODALS = {
    koennen: { pres: (p) => 'могу можешь может можем можете могут'.split(' ')[p], past: g => ['мог','могла','могло','могли'][G[g]] },
    muessen: { pres: (p, g) => dolzh[G[g]], past: g => dolzh[G[g]] + ' ' + ['был','была','было','были'][G[g]] },
    sollen:  { pres: (p, g) => dolzh[G[g]], past: g => dolzh[G[g]] + ' ' + ['был','была','было','были'][G[g]] },
    wollen:  { pres: (p) => 'хочу хочешь хочет хотим хотите хотят'.split(' ')[p], past: g => ['хотел','хотела','хотело','хотели'][G[g]] },
    moechten: { pres: (p, g) => ['хотел бы','хотела бы','хотело бы','хотели бы'][G[g]], past: g => ['хотел','хотела','хотело','хотели'][G[g]] },
    duerfen: { pres: (p) => 'имею имеешь имеет имеем имеете имеют'.split(' ')[p] + ' право', past: g => ['имел','имела','имело','имели'][G[g]] + ' право' },
  };
  const MODAL_NAMES = { koennen: 'können', muessen: 'müssen', wollen: 'wollen', duerfen: 'dürfen', sollen: 'sollen', moechten: 'möchten' };

  /* ── Подлежащие ── */
  // p — лицо (индекс формы), g — род для русского прошедшего времени, rp — лицо русского глагола
  const PRONOUNS = [
    { de: 'ich', ru: 'я',   p: 0, g: 'm' },
    { de: 'du',  ru: 'ты',  p: 1, g: 'm' },
    { de: 'er',  ru: 'он',  p: 2, g: 'm' },
    { de: 'sie', ru: 'она', p: 2, g: 'f' },
    { de: 'wir', ru: 'мы',  p: 3, g: 'pl' },
    { de: 'ihr', ru: 'вы',  p: 4, g: 'pl' },
    { de: 'sie', ru: 'они', p: 5, g: 'pl', rp: 5 },
    { de: 'Sie', ru: 'Вы',  p: 5, g: 'pl', rp: 4 },
  ];
  const NOUNS = [
    { de: 'der Mann',       ru: 'мужчина',       p: 2, g: 'm' },
    { de: 'die Frau',       ru: 'женщина',       p: 2, g: 'f' },
    { de: 'das Kind',       ru: 'ребёнок',       p: 2, g: 'm' },
    { de: 'die Kinder',     ru: 'дети',          p: 5, g: 'pl' },
    { de: 'mein Bruder',    ru: 'мой брат',      p: 2, g: 'm' },
    { de: 'meine Freundin', ru: 'моя подруга',   p: 2, g: 'f' },
    { de: 'unsere Nachbarn', ru: 'наши соседи',  p: 5, g: 'pl' },
    { de: 'der Lehrer',     ru: 'учитель',       p: 2, g: 'm' },
  ];

  /* ── Обстоятельства времени ── */
  const TIME_NOW  = [['heute','сегодня'], ['jetzt','сейчас'], ['jeden Tag','каждый день'], ['morgen','завтра'], ['am Wochenende','на выходных']];
  const TIME_PAST = [['gestern','вчера'], ['letzte Woche','на прошлой неделе'], ['vorgestern','позавчера'], ['am Montag','в понедельник']];

  /* ── Темы и рамки: [нем. глагол, рус. глагол, [[дополнение DE, дополнение RU], …]] ── */
  const T = (de, ru, objs) => ({ de, ru, objs });
  const TOPICS = [
    { id: 'essen', emoji: '🍎', de: 'Essen & Trinken', ru: 'Еда и напитки', frames: [
      T('essen', 'est', [['einen Apfel','яблоко'], ['eine Suppe','суп'], ['einen Salat','салат'], ['eine Pizza','пиццу'], ['ein Ei','яйцо']]),
      T('trinken', 'pit', [['einen Kaffee','кофе'], ['einen Tee','чай'], ['ein Glas Wasser','стакан воды'], ['einen Saft','сок']]),
      T('kochen', 'gotovit', [['eine Suppe','суп'], ['das Abendessen','ужин'], ['Nudeln','макароны']]),
      T('backen', 'pech', [['einen Kuchen','пирог'], ['Brot','хлеб']]),
      T('bestellen', 'zakazyvat', [['eine Pizza','пиццу'], ['einen Kaffee','кофе'], ['das Essen','еду']]),
      T('kaufen', 'pokupat', [['Brot','хлеб'], ['Obst','фрукты'], ['Gemüse','овощи']]),
    ]},
    { id: 'wohnen', emoji: '🏠', de: 'Wohnen', ru: 'Жильё', frames: [
      T('aufraeumen', 'ubirat', [['das Zimmer','комнату'], ['die Küche','кухню'], ['die Wohnung','квартиру']]),
      T('putzen', 'myt', [['das Bad','ванную'], ['die Fenster','окна'], ['den Boden','пол']]),
      T('suchen', 'iskat', [['eine neue Wohnung','новую квартиру'], ['ein Zimmer','комнату']]),
      T('mieten', 'snimat', [['eine Wohnung','квартиру'], ['ein Haus','дом']]),
      T('bezahlen', 'platit', [['die Miete','за аренду'], ['die Nebenkosten','за коммунальные услуги']]),
      T('reparieren', 'chinit', [['die Heizung','отопление'], ['den Wasserhahn','кран'], ['die Tür','дверь']]),
      T('waschen', 'stirat', [['die Wäsche','бельё']]),
      T('waschen', 'myt', [['das Geschirr','посуду']]),
    ]},
    { id: 'gesundheit', emoji: '🩺', de: 'Gesundheit', ru: 'Здоровье', frames: [
      T('nehmen', 'prinimat', [['eine Tablette','таблетку'], ['das Medikament','лекарство']]),
      T('anrufen', 'zvonit', [['den Arzt','врачу'], ['die Praxis','в клинику']]),
      T('besuchen', 'naveshchat', [['die Oma im Krankenhaus','бабушку в больнице']]),
      T('messen', 'izmerjat', [['das Fieber','температуру']]),
      T('gehen', 'idti', [['zum Arzt','к врачу'], ['in die Apotheke','в аптеку']]),
    ]},
    { id: 'arbeit', emoji: '💼', de: 'Arbeit', ru: 'Работа', frames: [
      T('schreiben', 'pisat', [['eine E-Mail','письмо'], ['eine Bewerbung','резюме'], ['einen Bericht','отчёт']]),
      T('lesen', 'chitat', [['die Stellenanzeige','объявление о вакансии'], ['den Vertrag','договор']]),
      T('unterschreiben', 'podpisyvat', [['den Arbeitsvertrag','трудовой договор']]),
      T('beginnen', 'nachinat', [['die Arbeit','работу'], ['eine Ausbildung','обучение']]),
      T('finden', 'nahodit', [['eine neue Arbeit','новую работу']]),
      T('verdienen', 'zarabatyvat', [['viel Geld','много денег']]),
      T('arbeiten', 'rabotat', [['im Büro','в офисе'], ['im Krankenhaus','в больнице']]),
    ]},
    { id: 'stadt', emoji: '🏙️', de: 'Stadt & Verkehr', ru: 'Город и транспорт', frames: [
      T('fahren', 'ehat', [['mit dem Bus zur Arbeit','на автобусе на работу'], ['mit dem Zug nach Berlin','на поезде в Берлин']]),
      T('gehen', 'idti', [['in den Park','в парк'], ['zum Bahnhof','на вокзал'], ['in die Stadt','в город']]),
      T('kaufen', 'pokupat', [['eine Fahrkarte','билет']]),
      T('suchen', 'iskat', [['die Haltestelle','остановку'], ['den Bahnhof','вокзал']]),
      T('warten', 'zhdat', [['auf den Bus','автобус'], ['auf die Straßenbahn','трамвай']]),
    ]},
    { id: 'freizeit', emoji: '⚽', de: 'Freizeit', ru: 'Досуг', frames: [
      T('spielen', 'igrat', [['Fußball','в футбол'], ['Gitarre','на гитаре'], ['Karten','в карты']]),
      T('sehen', 'smotret', [['einen Film','фильм'], ['das Spiel','матч']]),
      T('lesen', 'chitat', [['ein Buch','книгу'], ['die Zeitung','газету']]),
      T('hoeren', 'slushat', [['Musik','музыку'], ['das Radio','радио']]),
      T('treffen', 'vstrechat', [['Freunde','друзей']]),
      T('schwimmen', 'plavat', [['im See','в озере'], ['im Schwimmbad','в бассейне']]),
    ]},
    { id: 'einkaufen', emoji: '🛒', de: 'Einkaufen', ru: 'Покупки', frames: [
      T('einkaufen', 'delat', [['im Supermarkt','покупки в супермаркете']]),
      T('kaufen', 'pokupat', [['eine Jacke','куртку'], ['neue Schuhe','новые туфли']]),
      T('anprobieren', 'primerjat', [['die Hose','брюки'], ['das Kleid','платье']]),
      T('bezahlen', 'platit', [['die Rechnung','по счёту'], ['an der Kasse','на кассе']]),
    ]},
    { id: 'familie', emoji: '👨‍👩‍👧', de: 'Familie & Freunde', ru: 'Семья и друзья', frames: [
      T('besuchen', 'naveshchat', [['die Großeltern','бабушку и дедушку'], ['die Eltern','родителей']]),
      T('anrufen', 'zvonit', [['die Mutter','маме'], ['den Bruder','брату']]),
      T('helfen', 'pomogat', [['dem Vater','папе'], ['der Nachbarin','соседке']]),
      T('einladen', 'priglashat', [['die Freunde','друзей'], ['die Familie','семью']]),
    ]},
    { id: 'lernen', emoji: '🎓', de: 'Lernen', ru: 'Учёба', frames: [
      T('lernen', 'uchit', [['Deutsch','немецкий'], ['neue Wörter','новые слова']]),
      T('machen', 'delat', [['die Hausaufgaben','домашнее задание'], ['einen Kurs','курс']]),
      T('verstehen', 'ponimat', [['die Aufgabe','задание'], ['den Text','текст']]),
      T('schreiben', 'pisat', [['einen Test','контрольную']]),
      T('fragen', 'sprashivat', [['den Lehrer','учителя']]),
      T('ueben', 'trenirovat', [['die Aussprache','произношение']]),
    ]},
  ];

  const INTROS = [['Er sagt','Он говорит'], ['Ich glaube','Я думаю'], ['Sie weiß','Она знает']];
  const LVL = { A1: 1, A2: 2, B1: 3, B2: 4 };

  /* ══ Сборка одного предложения ══ */
  function generate(opts = {}) {
    if (opts.mix && !opts._raw) return generateMixed(opts);
    const tenses = (opts.tenses && opts.tenses.length) ? opts.tenses : ['praes'];
    const lvl = LVL[opts.level] || 1;
    const topics = opts.topic && opts.topic !== 'all' ? TOPICS.filter(t => t.id === opts.topic) : TOPICS;
    const topic = pick(topics);
    const frame = pick(topic.frames);
    const [objDe, objRu] = pick(frame.objs);
    const V = DE_VERBS[frame.de], R = RU_VERBS[frame.ru];
    const subj = opts._subj || pick(opts.pronouns === false ? NOUNS : PRONOUNS);
    const rp = subj.rp != null ? subj.rp : subj.p;          // лицо русского глагола
    let tense = pick(tenses);

    // модальный глагол — примерно в половине предложений (или всегда, если 'always')
    let modalKey = null;
    if (opts.modals === 'always' || (opts.modals && Math.random() < 0.5)) {
      modalKey = pick(Object.keys(DE_MODALS));
      if (DE_MODALS[modalKey].onlyPraes && tense !== 'praes') modalKey = 'wollen';
    }
    const M = modalKey && DE_MODALS[modalKey];

    // ─ немецкие части: finite (2-я позиция), end (в конец), sub (порядок в придаточном) ─
    let finite, end = [], subEnd;
    const hints = [];
    if (M) {
      if (tense === 'perf') {
        finite = HABEN.praes[subj.p];
        end = [V.inf, M.inf];                                 // doppelter Infinitiv
        subEnd = `${finite} ${V.inf} ${M.inf}`;              // dass … hat essen können
        hints.push(`Perfekt с модальным: <b>${finite}</b> на 2-м месте, в конце два инфинитива «${V.inf} ${M.inf}».`);
      } else {
        finite = (tense === 'praet' ? M.praet : M.praes)[subj.p];
        end = [V.inf];
        subEnd = `${V.inf} ${finite}`;
        hints.push(`Модальный глагол <b>${finite}</b> на 2-м месте, инфинитив «${V.inf}» — в конец.`);
      }
    } else if (tense === 'perf') {
      const AUX = V.aux === 'sein' ? SEIN : HABEN;
      finite = AUX.praes[subj.p];
      end = [V.part];
      subEnd = `${V.part} ${finite}`;
      hints.push(`Perfekt: <b>${finite}</b> (${V.aux}) на 2-м месте, Partizip «${V.part}» в конце.` + (V.aux === 'sein' ? ' Глагол движения → с sein.' : ''));
    } else {
      const forms = tense === 'praet' ? V.praet : V.praes;
      finite = forms[subj.p];
      if (V.sep) { end = [V.sep]; subEnd = V.sep + finite; hints.push(`Отделяемая приставка «${V.sep}» уходит в конец предложения.`); }
      else subEnd = finite;
      if (tense === 'praet') hints.push(`Präteritum: «${V.inf}» → <b>${finite}</b>.`);
    }

    // ─ обстоятельство времени ─
    const pastLike = tense !== 'praes';
    const useTime = opts._forceTime || Math.random() < (pastLike ? 0.75 : 0.4);
    const time = useTime ? pick(pastLike ? TIME_PAST : TIME_NOW) : null;

    const subjDe = subj.de;
    const mid = [objDe].filter(Boolean);
    const join = a => a.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();

    // основной вариант + альтернативный порядок (для проверки ответа)
    const straight = join([subjDe, finite, time && time[0], ...mid, ...end]);           // Ich habe gestern …
    const inverted = time ? join([time[0], finite, subjDe, ...mid, ...end]) : null;     // Gestern habe ich …
    let main = straight;
    if (inverted && (lvl >= 2 ? Math.random() < 0.6 : false)) {
      main = inverted;
      hints.push(`Время впереди → глагол <b>${finite}</b> остаётся на 2-м месте, подлежащее после него (инверсия).`);
    }

    // ─ русская часть ─
    let ruVerb;
    if (M) {
      const RM = RU_MODALS[modalKey];
      ruVerb = (pastLike ? RM.past(subj.g) : RM.pres(rp, subj.g)) + ' ' + R.inf;
    } else {
      ruVerb = pastLike ? R.past[G[subj.g]] : R.pres[rp];
    }
    const ruClause = [subj.ru, time && time[1], ruVerb, objRu].filter(Boolean).join(' ');
    const ruMainFront = time ? [time[1], subj.ru, ruVerb, objRu].join(' ') : ruClause;

    // сырая часть для сложного предложения (generateMixed): без заглавной буквы и точки
    if (opts._raw) return {
      deRaw: inverted ? [main, main === inverted ? straight : inverted] : [main],
      ruRaw: ruMainFront, hints, subj, finite, meta: { topic: topic.id, tense, modal: modalKey && MODAL_NAMES[modalKey] },
    };

    let de = [cap(main) + '.'];
    if (inverted) de.push(cap(main === inverted ? straight : inverted) + '.');
    let ru = cap(ruMainFront) + '.';

    // ─ B1+: придаточное с dass (глагол в самом конце) ─
    if (lvl >= 3 && Math.random() < 0.45) {
      const [introDe, introRu] = pick(INTROS);
      const sub = join(['dass', subjDe, time && time[0], ...mid, subEnd]);
      de = [`${introDe}, ${sub}.`];
      ru = `${introRu}, что ${ruClause}.`;
      hints.length = 0;
      hints.push(`Придаточное с <b>dass</b>: спрягаемый глагол уходит в самый конец («${subEnd}»).`);
      if (M && tense === 'perf') hints.push('Особый случай: в придаточном с двойным инфинитивом вспомогательный глагол стоит ПЕРЕД инфинитивами.');
    }

    return {
      ru, uk: ru, de,
      hint: hints.join('<br>'),
      meta: { topic: topic.id, tense, modal: modalKey && MODAL_NAMES[modalKey], level: opts.level },
    };
  }

  // ─ два времени в одном предложении: «Gestern habe ich …, aber heute …» ─
  const TENSE_DE = { praes: 'Präsens', perf: 'Perfekt', praet: 'Präteritum' };
  const last = str => str.split(' ').slice(-1)[0];
  function generateMixed(opts) {
    const tenses = opts.tenses || [];
    const past = tenses.filter(t => t !== 'praes');
    const sub = { ...opts, mix: false, _raw: true, _forceTime: true, level: (LVL[opts.level] || 1) >= 2 ? 'A2' : 'A1' };
    const A = generate({ ...sub, tenses: [pick(past.length ? past : ['perf'])] });
    let B, tries = 0;
    // во второй части существительное заменяем местоимением: der Mann … , aber er …
    const s2 = PRONOUNS.includes(A.subj) ? A.subj
      : A.subj.g === 'pl' ? { de: 'sie', ru: 'они', p: 5, g: 'pl', rp: 5 }
      : { de: /^das /.test(A.subj.de) ? 'es' : A.subj.g === 'f' ? 'sie' : 'er', ru: A.subj.g === 'f' ? 'она' : 'он', p: 2, g: A.subj.g };
    do { B = generate({ ...sub, _subj: s2, topic: A.meta.topic, tenses: ['praes'] }); tries++; }
    while (tries < 12 && (last(B.deRaw[0]) === last(A.deRaw[0]) || last(B.ruRaw) === last(A.ruRaw)));
    const de = [];
    for (const conj of ['aber', 'und']) for (const a of A.deRaw) for (const b of B.deRaw) de.push(`${cap(a)}, ${conj} ${b}.`);
    const ru = `${cap(A.ruRaw)}, а ${B.ruRaw}.`;
    const hint = ['<b>Два времени в одном предложении.</b> Первая часть — ' + TENSE_DE[A.meta.tense] + ':', ...A.hints,
      'Вторая часть — Präsens (после <b>aber/und</b>, они не занимают место, глагол снова на 2-й позиции):',
      ...(B.hints.length ? B.hints : [`Präsens: <b>${B.finite}</b> на 2-м месте.`])].join('<br>');
    return {
      ru, uk: ru, de, hint,
      meta: { topic: A.meta.topic, tense: 'mix', mixLabel: TENSE_DE[A.meta.tense] + ' + Präsens',
              modal: A.meta.modal || B.meta.modal, level: opts.level },
    };
  }

  window.SentenceGen = {
    generate,
    topics: TOPICS.map(t => ({ id: t.id, emoji: t.emoji, de: t.de, ru: t.ru })),
    _verbs: DE_VERBS, _ruVerbs: RU_VERBS, _topics: TOPICS,
  };
})();
