/* ══════════════════════════════════════════════════════════════
   ГЕНЕРАТОР ЗАДАНИЙ ДЛЯ ГРАММАТИКИ ПО УЧЕБНИКУ
   window.SG_GEN[id темы]() → новое случайное задание, каждый раз другое:
     { type: 'g'|'c'|'o', de, ans: [...], wrong: [...], ru, task }
   task — что именно нужно сделать; в заданиях на вставку в скобках всегда
   начальная форма (инфинитив, der/die/das, ich/du …) — её нужно поставить в нужную форму.
══════════════════════════════════════════════════════════════ */
(function () {
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  /* ── лица ── */
  const P = { ich: 'я', du: 'ты', er: 'он', sie: 'она', es: 'оно', wir: 'мы', ihr: 'вы (ihr)', siePl: 'они', Sie: 'Вы (вежл.)' };
  const PERS = ['ich', 'du', 'er', 'sie', 'wir', 'ihr', 'siePl', 'Sie'];
  const subj = p => p === 'siePl' ? 'sie' : p;              // как писать в предложении
  const slot = p => ({ ich: 0, du: 1, er: 2, sie: 2, es: 2, wir: 3, ihr: 4, siePl: 5, Sie: 5 })[p];

  /* ── существительные: [артикль, слово, перевод, теги] t вещь, m мебель, f еда, p место, v транспорт ── */
  const N = [
    ['der', 'Tisch', 'стол', 'tm'], ['der', 'Stuhl', 'стул', 'tm'], ['der', 'Schrank', 'шкаф', 'tm'], ['das', 'Bett', 'кровать', 'tm'],
    ['das', 'Sofa', 'диван', 'tm'], ['die', 'Lampe', 'лампа', 't'], ['das', 'Regal', 'полка', 'tm'], ['der', 'Kühlschrank', 'холодильник', 'tm'],
    ['die', 'Kommode', 'комод', 'tm'], ['der', 'Sessel', 'кресло', 'tm'],
    ['der', 'Apfel', 'яблоко', 'f'], ['die', 'Banane', 'банан', 'f'], ['das', 'Brot', 'хлеб', 'f'], ['der', 'Käse', 'сыр', 'f'],
    ['die', 'Wurst', 'колбаса', 'f'], ['das', 'Ei', 'яйцо', 'f'], ['die', 'Tomate', 'помидор', 'f'], ['der', 'Kuchen', 'пирог', 'f'],
    ['die', 'Pizza', 'пицца', 'f'], ['das', 'Brötchen', 'булочка', 'f'], ['die', 'Suppe', 'суп', 'f'], ['der', 'Salat', 'салат', 'f'],
    ['der', 'Pullover', 'свитер', 't'], ['die', 'Jacke', 'куртка', 't'], ['das', 'Kleid', 'платье', 't'], ['der', 'Rock', 'юбка', 't'],
    ['das', 'Hemd', 'рубашка', 't'], ['der', 'Hut', 'шляпа', 't'], ['die', 'Tasche', 'сумка', 't'], ['das', 'Buch', 'книга', 't'],
    ['das', 'Handy', 'телефон', 't'], ['der', 'Computer', 'компьютер', 't'], ['die', 'Uhr', 'часы', 't'], ['der', 'Schlüssel', 'ключ', 't'],
    ['das', 'Fahrrad', 'велосипед', 'tv'], ['das', 'Auto', 'машина', 'tv'], ['der', 'Bus', 'автобус', 'v'], ['die', 'U-Bahn', 'метро', 'v'],
    ['der', 'Zug', 'поезд', 'v'], ['die', 'Straßenbahn', 'трамвай', 'v'], ['das', 'Taxi', 'такси', 'v'],
    ['der', 'Supermarkt', 'супермаркет', 'p'], ['die', 'Apotheke', 'аптека', 'p'], ['das', 'Kino', 'кино', 'p'], ['die', 'Schule', 'школа', 'p'],
    ['der', 'Park', 'парк', 'p'], ['das', 'Restaurant', 'ресторан', 'p'], ['die', 'Bank', 'банк', 'p'], ['das', 'Krankenhaus', 'больница', 'p'],
    ['die', 'Post', 'почта', 'p'], ['der', 'Bahnhof', 'вокзал', 'p'], ['das', 'Café', 'кафе', 'p'], ['die', 'Bäckerei', 'пекарня', 'p'],
    ['das', 'Büro', 'офис', 'p'], ['die', 'Küche', 'кухня', 'p'], ['der', 'Garten', 'сад', 'p'],
  ];
  const noun = tag => pick(N.filter(n => n[3].includes(tag)));
  const PEOPLE = [['der', 'Vater', 'отец'], ['die', 'Mutter', 'мама'], ['das', 'Kind', 'ребёнок'], ['der', 'Bruder', 'брат'],
    ['die', 'Schwester', 'сестра'], ['der', 'Freund', 'друг'], ['die', 'Freundin', 'подруга'], ['der', 'Lehrer', 'учитель'],
    ['die', 'Lehrerin', 'учительница'], ['der', 'Opa', 'дедушка'], ['die', 'Oma', 'бабушка'], ['der', 'Chef', 'шеф'], ['die', 'Kollegin', 'коллега']];

  /* артикли по падежам: [der, die, das] */
  const ART = {
    def: { nom: ['der', 'die', 'das'], akk: ['den', 'die', 'das'], dat: ['dem', 'der', 'dem'] },
    ein: { nom: ['ein', 'eine', 'ein'], akk: ['einen', 'eine', 'ein'], dat: ['einem', 'einer', 'einem'] },
    kein: { nom: ['kein', 'keine', 'kein'], akk: ['keinen', 'keine', 'kein'], dat: ['keinem', 'keiner', 'keinem'] },
  };
  const gi = art => ({ der: 0, die: 1, das: 2 })[art];
  const POSS = { ich: 'mein', du: 'dein', er: 'sein', sie: 'ihr', es: 'sein', wir: 'unser', ihr: 'euer', siePl: 'ihr', Sie: 'Ihr' };
  const possForm = (base, art, cas) => {      // mein + окончание как у ein; euer → eure
    const end = ART.ein[cas][gi(art)].slice(3);   // ein-em, ein-e, ein-en
    const b = base === 'euer' && end ? 'eur' : base;
    return b + end;
  };

  /* ── глаголы: [инфинитив, перевод, 3 л. ед. ч., haben/sein, Partizip II, продолжение предложения] ── */
  const V = [
    ['wohnen', 'жить', 'wohnt', 'hat', 'gewohnt', 'in Berlin'], ['lernen', 'учить', 'lernt', 'hat', 'gelernt', 'Deutsch'],
    ['machen', 'делать', 'macht', 'hat', 'gemacht', 'Sport'], ['spielen', 'играть', 'spielt', 'hat', 'gespielt', 'Fußball'],
    ['kaufen', 'покупать', 'kauft', 'hat', 'gekauft', 'Brot'], ['kochen', 'готовить', 'kocht', 'hat', 'gekocht', 'Suppe'],
    ['arbeiten', 'работать', 'arbeitet', 'hat', 'gearbeitet', 'im Büro'], ['warten', 'ждать', 'wartet', 'hat', 'gewartet', 'auf den Bus'],
    ['hören', 'слушать', 'hört', 'hat', 'gehört', 'Musik'], ['suchen', 'искать', 'sucht', 'hat', 'gesucht', 'den Schlüssel'],
    ['trinken', 'пить', 'trinkt', 'hat', 'getrunken', 'Kaffee'], ['essen', 'есть', 'isst', 'hat', 'gegessen', 'Pizza'],
    ['fahren', 'ехать', 'fährt', 'ist', 'gefahren', 'nach Hamburg'], ['schlafen', 'спать', 'schläft', 'hat', 'geschlafen', 'lange'],
    ['lesen', 'читать', 'liest', 'hat', 'gelesen', 'ein Buch'], ['sprechen', 'говорить', 'spricht', 'hat', 'gesprochen', 'Deutsch'],
    ['sehen', 'смотреть, видеть', 'sieht', 'hat', 'gesehen', 'einen Film'], ['nehmen', 'брать', 'nimmt', 'hat', 'genommen', 'den Bus'],
    ['helfen', 'помогать', 'hilft', 'hat', 'geholfen', 'der Oma'], ['kommen', 'приходить', 'kommt', 'ist', 'gekommen', 'nach Hause'],
    ['gehen', 'идти', 'geht', 'ist', 'gegangen', 'ins Kino'], ['schreiben', 'писать', 'schreibt', 'hat', 'geschrieben', 'eine E-Mail'],
    ['finden', 'находить', 'findet', 'hat', 'gefunden', 'den Weg'], ['tanzen', 'танцевать', 'tanzt', 'hat', 'getanzt', 'Salsa'],
    ['reisen', 'путешествовать', 'reist', 'ist', 'gereist', 'nach Italien'], ['fragen', 'спрашивать', 'fragt', 'hat', 'gefragt', 'den Lehrer'],
    ['öffnen', 'открывать', 'öffnet', 'hat', 'geöffnet', 'das Fenster'], ['laufen', 'бегать', 'läuft', 'ist', 'gelaufen', 'im Park'],
    ['waschen', 'мыть, стирать', 'wäscht', 'hat', 'gewaschen', 'das Auto'], ['treffen', 'встречать', 'trifft', 'hat', 'getroffen', 'Freunde'],
    ['bezahlen', 'платить', 'bezahlt', 'hat', 'bezahlt', 'die Rechnung'], ['besuchen', 'навещать', 'besucht', 'hat', 'besucht', 'die Oma'],
    ['verstehen', 'понимать', 'versteht', 'hat', 'verstanden', 'die Frage'], ['bekommen', 'получать', 'bekommt', 'hat', 'bekommen', 'einen Brief'],
    ['vergessen', 'забывать', 'vergisst', 'hat', 'vergessen', 'den Termin'], ['erzählen', 'рассказывать', 'erzählt', 'hat', 'erzählt', 'eine Geschichte'],
    ['studieren', 'учиться (в вузе)', 'studiert', 'hat', 'studiert', 'Medizin'], ['telefonieren', 'говорить по телефону', 'telefoniert', 'hat', 'telefoniert', 'mit Mama'],
    ['reparieren', 'чинить', 'repariert', 'hat', 'repariert', 'das Fahrrad'], ['geben', 'давать', 'gibt', 'hat', 'gegeben', 'dem Kind Geld'],
  ];
  // отделяемые: [инфинитив, перевод, приставка, корень-глагол (3 л.), haben/sein, Partizip II, продолжение]
  const SEP = [
    ['aufstehen', 'вставать', 'auf', 'steht', 'ist', 'aufgestanden', 'um sieben Uhr'], ['einkaufen', 'делать покупки', 'ein', 'kauft', 'hat', 'eingekauft', 'im Supermarkt'],
    ['anrufen', 'звонить', 'an', 'ruft', 'hat', 'angerufen', 'die Mama'], ['fernsehen', 'смотреть телевизор', 'fern', 'sieht', 'hat', 'ferngesehen', 'am Abend'],
    ['aufräumen', 'убирать', 'auf', 'räumt', 'hat', 'aufgeräumt', 'das Zimmer'], ['mitkommen', 'идти вместе', 'mit', 'kommt', 'ist', 'mitgekommen', 'ins Kino'],
    ['abholen', 'забирать', 'ab', 'holt', 'hat', 'abgeholt', 'die Kinder'], ['einladen', 'приглашать', 'ein', 'lädt', 'hat', 'eingeladen', 'die Freunde'],
    ['anfangen', 'начинать', 'an', 'fängt', 'hat', 'angefangen', 'mit der Arbeit'], ['aufmachen', 'открывать', 'auf', 'macht', 'hat', 'aufgemacht', 'das Fenster'],
    ['zumachen', 'закрывать', 'zu', 'macht', 'hat', 'zugemacht', 'die Tür'], ['ausgehen', 'выходить (развлечься)', 'aus', 'geht', 'ist', 'ausgegangen', 'am Samstag'],
  ];

  /* ── спряжение в Präsens ── */
  const TABLE = {
    sein: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'], haben: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'],
    werden: ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'], wissen: ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'],
    können: ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'], müssen: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
    dürfen: ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'], wollen: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
    sollen: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'], mögen: ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
    möchten: ['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten'],
  };
  const stemOf = inf => /[lr]n$/.test(inf) && !/en$/.test(inf) ? inf.slice(0, -1) : inf.slice(0, -2);
  const needE = st => /[td]$/.test(st) || /[^lrhmn][mn]$/.test(st);   // arbeit-et, öffn-et
  const sEnd = st => /(s|ß|z|x)$/.test(st);
  function conjRegular3(inf) { const st = stemOf(inf); return st + (needE(st) ? 'et' : 't'); }
  function conj(inf, p, er3) {
    if (TABLE[inf]) return TABLE[inf][slot(p)];
    const st = stemOf(inf), i = slot(p);
    const reg3 = st + (needE(st) ? 'et' : 't');
    const e3 = er3 || reg3;
    if (i === 0) return st + 'e';
    if (i === 3 || i === 5) return inf;
    if (i === 4) return reg3;
    if (i === 2) return e3;
    // du
    if (e3 === reg3) return st + (needE(st) ? 'est' : sEnd(st) ? 't' : 'st');
    if (/[td]$/.test(st) && !/et$/.test(e3) && /t$/.test(e3) && !/[td]t$/.test(e3)) return e3 + 'st';   // hält → hältst
    const base = e3.replace(/t$/, '');
    return base + (sEnd(base) ? 't' : 'st');
  }
  const IRREG3 = V.filter(v => conjRegular3(v[0]) !== v[2]);   // глаголы со сменой гласной
  const vRu = v => `${v[0]} — ${v[1]}`;

  /* ── Präteritum ── */
  const PRAET = { gehen: 'ging', kommen: 'kam', fahren: 'fuhr', sehen: 'sah', finden: 'fand', bleiben: 'blieb', geben: 'gab', ziehen: 'zog',
    schreiben: 'schrieb', lesen: 'las', sprechen: 'sprach', nehmen: 'nahm', essen: 'aß', trinken: 'trank', schlafen: 'schlief', laufen: 'lief',
    helfen: 'half', treffen: 'traf', wissen: 'wusste', denken: 'dachte', bringen: 'brachte', kennen: 'kannte', haben: 'hatte', sein: 'war',
    werden: 'wurde', bekommen: 'bekam', verstehen: 'verstand', vergessen: 'vergaß', waschen: 'wusch', können: 'konnte', müssen: 'musste', dürfen: 'durfte', wollen: 'wollte', sollen: 'sollte', mögen: 'mochte' };
  function praet(inf, p) {
    const i = slot(p);
    let s = PRAET[inf];
    if (!s) { const st = stemOf(inf); s = st + (needE(st) ? 'ete' : 'te'); }
    const vowelEnd = /e$/.test(s);
    if (i === 0 || i === 2) return s;
    if (i === 1) return s + (vowelEnd ? 'st' : sEnd(s) ? 'est' : 'st');
    if (i === 3 || i === 5) return s + (vowelEnd ? 'n' : 'en');
    return s + (vowelEnd ? 't' : sEnd(s) ? 't' : 't');
  }

  /* ── Konjunktiv II ── */
  const K2 = { werden: 'würde', haben: 'hätte', sein: 'wäre', können: 'könnte', müssen: 'müsste', sollen: 'sollte', dürfen: 'dürfte' };
  const k2 = (inf, p) => { const s = K2[inf], i = slot(p); return inf === 'sein' ? ['wäre', 'wärst', 'wäre', 'wären', 'wärt', 'wären'][i] : [s, s + 'st', s, s + 'n', s + 't', s + 'n'][i]; };

  /* ── вспомогательные конструкторы ── */
  const G = (de, ans, ru, task) => ({ type: 'g', de, ans: [].concat(ans), ru, task });
  const C = (de, ans, wrong, ru, task) => ({ type: 'c', de, ans: [ans], wrong: [...new Set(wrong.filter(w => w !== ans))].slice(0, 3), ru, task });
  const O = (de, ru, task) => ({ type: 'o', de, ru, task: task || 'Собери предложение: расставь слова в правильном порядке' });
  const persPick = list => pick(list || PERS);
  const S = p => cap(subj(p));

  /* ═════════════ генераторы по темам ═════════════ */
  const conjTask = (inf, p, tense) => `Поставь глагол «${inf}» в форму для «${subj(p) === 'sie' && p === 'siePl' ? 'sie (они)' : subj(p)}»${tense ? ' — ' + tense : ' (Präsens)'}`;
  function genConj(persons, withSein) {
    return () => {
      const p = persPick(persons);
      if (withSein && Math.random() < 0.3) {
        const inf = pick(['sein', 'haben']), rest = inf === 'sein' ? pick(['müde', 'zu Hause', 'aus Polen', 'Lehrer']) : pick(['Hunger', 'Zeit', 'ein Auto', 'zwei Kinder']);
        return G(`${S(p)} ___ ${rest}. (${inf})`, conj(inf, p), `${inf} — ${inf === 'sein' ? 'быть' : 'иметь'} · ${P[p]}`, conjTask(inf, p));
      }
      const v = pick(V);
      return G(`${S(p)} ___ ${v[5]}. (${v[0]})`, conj(v[0], p, v[2]), `${vRu(v)} · ${P[p]}`, conjTask(v[0], p));
    };
  }
  function genVokal() {
    const v = pick(IRREG3), p = pick(['du', 'er', 'sie', 'ich', 'wir']);
    return G(`${S(p)} ___ ${v[5]}. (${v[0]})`, conj(v[0], p, v[2]), `${vRu(v)} · ${P[p]} — смена гласной только у du и er/sie/es`, conjTask(v[0], p));
  }
  function genModal(list) {
    return () => {
      const m = pick(list), p = persPick(), v = pick(V);
      const ruM = { können: 'мочь, уметь', müssen: 'быть должным', dürfen: 'сметь, иметь разрешение', wollen: 'хотеть', sollen: 'быть должным (по указанию)', möchten: 'хотел бы' }[m];
      if (Math.random() < 0.6) return G(`${S(p)} ___ heute ${v[5]} ${v[0]}. (${m})`, conj(m, p), `${m} — ${ruM} · ${P[p]}; второй глагол стоит в конце в инфинитиве`, conjTask(m, p));
      return O(`${S(p)} ${conj(m, p)} heute ${v[5]} ${v[0]}.`, `${P[p]} + ${m} (${ruM}) + ${v[0]} (${v[1]})`, 'Собери предложение: модальный глагол на 2-м месте, инфинитив в конце');
    };
  }
  function genPerf(opts = {}) {
    return () => {
      const p = persPick(), useSep = Math.random() < 0.3;
      let inf, aux, part, rest, ru;
      if (useSep) { const s = pick(SEP); [inf, , , , aux, part, rest] = s; ru = `${s[0]} — ${s[1]}`; }
      else {
        let pool = V;
        if (opts.haben) pool = V.filter(v => v[3] === 'hat');
        if (opts.noge) pool = Math.random() < 0.6 ? V.filter(v => /^(be|ver|er|ent|emp|zer|ge)/.test(v[0]) && v[0] !== 'geben' && v[0] !== 'gehen' || /ieren$/.test(v[0])) : V;
        const v = pick(pool); [inf, , , aux, part, rest] = v; ru = vRu(v);
      }
      const auxInf = aux === 'ist' ? 'sein' : 'haben';
      return G(`${S(p)} ___ gestern ${rest} ___. (${inf})`, `${conj(auxInf, p)} … ${part}`, `${ru} · ${P[p]} · вспомогательный: ${auxInf}`,
        `Поставь «${inf}» в Perfekt: ${auxInf} в нужной форме + Partizip II в конце (два пропуска)`);
    };
  }
  function genSep() {
    const s = pick(SEP), p = persPick();
    const f = conj(s[0].slice(s[2].length), p, s[3]);
    if (Math.random() < 0.65) return G(`${S(p)} ___ ${s[6]} ___. (${s[0]})`, `${f} … ${s[2]}`, `${s[0]} — ${s[1]} · ${P[p]}`,
      `Поставь отделяемый глагол «${s[0]}»: глагол на 2-м месте, приставка «${s[2]}» в конце (два пропуска)`);
    return O(`${S(p)} ${f} ${s[6]} ${s[2]}.`, `${s[0]} — ${s[1]} · ${P[p]}`, 'Собери предложение: приставка уходит в конец');
  }
  function genImp() {
    const sep = Math.random() < 0.35, form = pick(['du', 'ihr', 'Sie']);
    let inf, er3, pre = '', rest, ru;
    if (sep) { const s = pick(SEP.filter(x => x[4] === 'hat')); inf = s[0].slice(s[2].length); er3 = s[3]; pre = s[2]; rest = s[6]; ru = `${s[0]} — ${s[1]}`; }
    else { const v = pick(V); inf = v[0]; er3 = v[2]; rest = v[5]; ru = vRu(v); }
    let verb;
    if (form === 'Sie') verb = inf;
    else if (form === 'ihr') verb = conj(inf, 'ihr', er3);
    else {
      const st = stemOf(inf), reg3 = conjRegular3(inf);
      if (er3 !== reg3 && /[iI]/.test(er3) && !/[äöü]/.test(er3)) verb = er3.replace(/t$/, '');      // nimmt → nimm, liest → lies
      else verb = st + (needE(st) ? 'e' : '');
    }
    const word = cap(verb) + (form === 'Sie' ? ' Sie' : '');
    const hint = (pre ? pre : '') + inf;
    if (pre) return G(`___ bitte ${rest} ___! (${hint}, ${form})`, `${word} … ${pre}`, `${ru} · просьба к «${form}»`, `Образуй повелительное наклонение (Imperativ) для «${form}»; приставка «${pre}» в конце`);
    return G(`___ bitte ${rest}! (${hint}, ${form})`, word, `${ru} · просьба к «${form}»`, `Образуй повелительное наклонение (Imperativ) от «${hint}» для «${form}»${form === 'Sie' ? ' (глагол + Sie)' : ''}`);
  }
  function genWerden() {
    const p = persPick(), rest = pick(['morgen 30', 'bald Lehrer', 'müde', 'im Mai 18', 'Mutter']);
    return G(`${S(p)} ___ ${rest}. (werden)`, conj('werden', p), `werden — становиться · ${P[p]}`, conjTask('werden', p));
  }
  function genPraetSeinHaben() {
    const p = persPick(), inf = pick(['sein', 'haben']);
    const rest = inf === 'sein' ? pick(['gestern müde', 'letzte Woche krank', 'im Urlaub in Spanien', 'früher Lehrer']) : pick(['gestern keine Zeit', 'letzte Woche Fieber', 'früher ein Auto', 'gestern Kopfschmerzen']);
    return G(`${S(p)} ___ ${rest}. (${inf})`, praet(inf, p), `${inf} в прошедшем (Präteritum) · ${P[p]}`, conjTask(inf, p, 'Präteritum (прошедшее время)'));
  }
  function genPraetModal() {
    const m = pick(['können', 'müssen', 'dürfen', 'wollen', 'sollen']), p = persPick(), v = pick(V);
    return G(`Gestern ___ ${subj(p)} ${v[5]} ${v[0]}. (${m})`, praet(m, p), `${m} — Präteritum · ${P[p]} (без умляута, + -te)`, conjTask(m, p, 'Präteritum (прошедшее время)'));
  }
  function genPraet() {
    const pool = V.filter(v => PRAET[v[0]] || !IRREG3.includes(v)), v = pick(pool), p = persPick();
    return G(`Gestern ___ ${subj(p)} ${v[5]}. (${v[0]})`, praet(v[0], p, v), `${vRu(v)} · ${P[p]} · ${PRAET[v[0]] ? 'неправильный глагол' : 'правильный: основа + -te'}`, conjTask(v[0], p, 'Präteritum (прошедшее время)'));
  }
  function genK2() {
    const p = persPick(), r = Math.random();
    if (r < 0.4) { const v = pick(V); return G(`${S(p)} ___ gern ${v[5]} ${v[0]}. (werden)`, k2('werden', p), `würde + инфинитив = «бы» · ${P[p]}`, conjTask('werden', p, 'Konjunktiv II (würde)')); }
    if (r < 0.7) { const rest = pick(['gern mehr Zeit', 'gern einen Hund', 'gern ein großes Haus']); return G(`${S(p)} ___ ${rest}. (haben)`, k2('haben', p), `hätte = «имел бы» · ${P[p]}`, conjTask('haben', p, 'Konjunktiv II (hätte)')); }
    const rest = pick(['jetzt gern am Meer', 'gern reich', 'gern in Urlaub']); return G(`${S(p)} ___ ${rest}. (sein)`, k2('sein', p), `wäre = «был бы» · ${P[p]}`, conjTask('sein', p, 'Konjunktiv II (wäre)'));
  }
  function genRat() {
    const p = pick(['du', 'Sie', 'ihr', 'wir']), m = p === 'wir' ? 'können' : 'sollen', v = pick(V);
    return G(`${S(p)} ___ ${v[5]} ${v[0]}. (${m}, Konjunktiv II)`, k2(m, p), p === 'wir' ? 'könnten — предложение «мы могли бы»' : 'solltest/sollten — совет «тебе стоило бы»', conjTask(m, p, 'Konjunktiv II'));
  }

  /* артикли и падежи */
  function genDer() {
    const n = pick(N), w = ART.def.nom;
    return C(`___ ${n[1]} ist neu.`, cap(n[0]), w.map(cap), `${n[1]} — ${n[2]}`, 'Выбери правильный определённый артикль (der, die или das)');
  }
  function genEin() {
    const n = pick(N.filter(x => !x[3].includes('p'))), neg = Math.random() < 0.4;
    const t = neg ? 'kein' : 'ein';
    return G(`Das ist ___ ${n[1]}. (${t})`, ART[t].nom[gi(n[0])], `${n[0]} ${n[1]} — ${n[2]}`, `Поставь «${t}» в нужную форму по роду слова «${n[1]}» (Nominativ)`);
  }
  function genAkk() {
    const n = pick(N.filter(x => /[tf]/.test(x[3]))), t = pick(['ein', 'kein', 'def']), verb = pick(['Ich kaufe', 'Ich brauche', 'Wir suchen', 'Ich nehme', 'Hast du']);
    const base = t === 'def' ? 'der/die/das' : t;
    return G(`${verb} ___ ${n[1]}${verb === 'Hast du' ? '?' : '.'} (${base})`, ART[t].akk[gi(n[0])], `${n[0]} ${n[1]} — ${n[2]} · кого? что? → Akkusativ`, `Поставь артикль в Akkusativ (кого? что?). Меняется только мужской род: der → den, ein → einen`);
  }
  function genWoDat() {
    if (Math.random() < 0.5) {
      const thing = pick(N.filter(x => x[3] === 't')), furn = pick(N.filter(x => x[3].includes('m'))), prep = pick(['auf', 'unter', 'neben', 'vor', 'hinter']);
      return G(`${cap(thing[0])} ${thing[1]} liegt ${prep} ___ ${furn[1]}. (${furn[0]})`, ART.def.dat[gi(furn[0])], `${prep} + Dativ (где?) · ${furn[0]} ${furn[1]} — ${furn[2]}`, `Где? → Dativ. Поставь «${furn[0]}» в Dativ (der → dem, die → der, das → dem)`);
    }
    const place = pick(N.filter(x => x[3] === 'p')), prep = pick(['vor', 'neben', 'hinter']);
    return G(`Ich warte ${prep} ___ ${place[1]}. (${place[0]})`, ART.def.dat[gi(place[0])], `${prep} + Dativ (где?) · ${place[1]} — ${place[2]}`, `Где? → Dativ. Поставь «${place[0]}» в Dativ`);
  }
  function genMit() {
    const v = pick(N.filter(x => x[3].includes('v')));
    return G(`Ich fahre mit ___ ${v[1]}. (${v[0]})`, ART.def.dat[gi(v[0])], `mit + Dativ · ${v[1]} — ${v[2]}`, `После «mit» всегда Dativ. Поставь «${v[0]}» в Dativ`);
  }
  function genWechsel() {
    const thing = pick(N.filter(x => x[3] === 't' && !x[3].includes('v'))), furn = pick(N.filter(x => x[3].includes('m'))), prep = pick(['auf', 'unter', 'neben', 'vor', 'hinter']);
    const wohin = Math.random() < 0.5;
    if (wohin) return G(`Ich lege ${thing[0] === 'der' ? 'den' : thing[0]} ${thing[1]} ${prep} ___ ${furn[1]}. (${furn[0]})`, ART.def.akk[gi(furn[0])], `Wohin? (куда кладу) → Akkusativ · ${furn[1]} — ${furn[2]}`, `Куда? (движение) → Akkusativ. Поставь «${furn[0]}» в нужную форму`);
    return G(`${cap(thing[0])} ${thing[1]} liegt ${prep} ___ ${furn[1]}. (${furn[0]})`, ART.def.dat[gi(furn[0])], `Wo? (где лежит) → Dativ · ${furn[1]} — ${furn[2]}`, `Где? (место) → Dativ. Поставь «${furn[0]}» в нужную форму`);
  }
  function genStellen() {
    const items = [['die', 'Flasche', 'бутылка', 'stehen', 'stellen'], ['die', 'Vase', 'ваза', 'stehen', 'stellen'], ['das', 'Glas', 'стакан', 'stehen', 'stellen'],
      ['das', 'Buch', 'книга', 'liegen', 'legen'], ['der', 'Schlüssel', 'ключ', 'liegen', 'legen'], ['das', 'Handy', 'телефон', 'liegen', 'legen'],
      ['das', 'Bild', 'картина', 'hängen', 'hängen'], ['die', 'Jacke', 'куртка', 'hängen', 'hängen']];
    const it = pick(items), furn = it[3] === 'hängen' ? ['die', 'Wand', 'стена'] : pick(N.filter(x => x[3].includes('m')));
    const prep = it[3] === 'hängen' ? 'an' : pick(['auf', 'neben', 'unter']);
    const state = Math.random() < 0.5;
    const conj3 = { stehen: 'steht', liegen: 'liegt', hängen: 'hängt', stellen: 'stellt', legen: 'legt' };
    if (state) return C(`${cap(it[0])} ${it[1]} ___ ${prep} ${ART.def.dat[gi(furn[0])]} ${furn[1]}.`, conj3[it[3]], ['steht', 'stellt', 'liegt', 'legt', 'hängt'], `Wo? (где — состояние) · ${it[1]} — ${it[2]}`, 'Где находится? Выбери глагол состояния (stehen / liegen / hängen)');
    const ich = { stellen: 'stelle', legen: 'lege', hängen: 'hänge' }[it[4]];
    return C(`Ich ___ ${it[0] === 'der' ? 'den' : it[0]} ${it[1]} ${prep} ${ART.def.akk[gi(furn[0])]} ${furn[1]}.`, ich, ['stelle', 'stehe', 'lege', 'liege', 'hänge'], `Wohin? (куда — действие) · ${it[1]} — ${it[2]}`, 'Куда кладу/ставлю? Выбери глагол действия (stellen / legen / hängen)');
  }
  function genPoss(persons) {
    return () => {
      const p = pick(persons), n = pick(N.filter(x => /[tm]/.test(x[3])));
      const owner = { ich: 'ich', du: 'du', er: 'er', sie: 'sie', wir: 'wir', ihr: 'ihr', Sie: 'Sie' }[p];
      return G(`Das ist ___ ${n[1]}. (${owner} → ${POSS[p]})`, possForm(POSS[p], n[0], 'nom'), `${POSS[p]} — притяжательное от «${owner}» · ${n[0]} ${n[1]} — ${n[2]}`, `Поставь притяжательное «${POSS[p]}» с правильным окончанием по роду слова «${n[1]}»`);
    };
  }
  function genPossDat() {
    const p = pick(['ich', 'du', 'er', 'sie', 'wir']), pers = pick(PEOPLE), thing = pick(N.filter(x => x[3] === 't'));
    return G(`Ich schenke ___ ${pers[1]} ${thing[0] === 'der' ? 'einen' : thing[0] === 'die' ? 'eine' : 'ein'} ${thing[1]}. (${POSS[p]})`, possForm(POSS[p], pers[0], 'dat'),
      `кому? → Dativ · ${pers[0]} ${pers[1]} — ${pers[2]}`, `Кому дарю? → Dativ. Поставь «${POSS[p]}» в Dativ (-em для der/das, -er для die)`);
  }
  function genIndef() {
    const n = pick(N.filter(x => /[tf]/.test(x[3]))), neg = Math.random() < 0.4;
    const pron = neg ? ['keinen', 'keine', 'keins'] : ['einen', 'eine', 'eins'];
    const de = neg ? `Hast du ${ART.ein.akk[gi(n[0])]} ${n[1]}? – Nein, ich habe ___. (kein-)` : `Ich brauche ${ART.ein.akk[gi(n[0])]} ${n[1]}. Hast du ___? (ein-)`;
    return G(de, pron[gi(n[0])], `${n[0]} ${n[1]} — ${n[2]} · вместо существительного — местоимение`, `Замени существительное местоимением: einen/eine/eins (или keinen/keine/keins) по роду`);
  }
  function genPronEr() {
    const n = pick(N), r = { der: 'Er', die: 'Sie', das: 'Es' }[n[0]];
    return C(`Wo ist ${n[0]} ${n[1]}? – ___ ist hier.`, r, ['Er', 'Sie', 'Es'], `${n[0]} ${n[1]} — ${n[2]}`, 'Замени существительное личным местоимением: der → er, die → sie, das → es');
  }
  const PRON = { akk: { ich: 'mich', du: 'dich', er: 'ihn', sie: 'sie', es: 'es', wir: 'uns', ihr: 'euch', Sie: 'Sie' }, dat: { ich: 'mir', du: 'dir', er: 'ihm', sie: 'ihr', es: 'ihm', wir: 'uns', ihr: 'euch', Sie: 'Ihnen' } };
  function genPron(cas) {
    return () => {
      const p = pick(['ich', 'du', 'er', 'sie', 'wir', 'ihr', 'Sie']);
      const frames = cas === 'akk' ? [['Ich besuche ___ morgen.', 'besuchen (+ Akk.)'], ['Ich sehe ___ jeden Tag.', 'sehen (+ Akk.)'], ['Wir laden ___ ein.', 'einladen (+ Akk.)'], ['Das Geschenk ist für ___.', 'für (+ Akk.)']]
        : [['Ich helfe ___ gern.', 'helfen (+ Dat.)'], ['Das Buch gefällt ___.', 'gefallen (+ Dat.)'], ['Ich danke ___.', 'danken (+ Dat.)'], ['Ich gebe ___ das Geld.', 'geben (кому? + Dat.)']];
      const f = pick(frames.filter(x => !(p === 'ich' && x[0].startsWith('Ich ')) && !(p === 'wir' && x[0].startsWith('Wir '))));
      return G(`${f[0]} (${p})`, PRON[cas][p], `${f[1]} · «${p}» в ${cas === 'akk' ? 'Akkusativ (кого?)' : 'Dativ (кому?)'}`, `Поставь местоимение «${p}» в ${cas === 'akk' ? 'Akkusativ: mich, dich, ihn …' : 'Dativ: mir, dir, ihm …'}`);
    };
  }
  function genRefl() {
    const verbs = [['sich waschen', 'waschen', 'wäscht', 'jeden Morgen'], ['sich beeilen', 'beeilen', null, 'heute'], ['sich freuen', 'freuen', null, 'auf den Urlaub'],
      ['sich treffen', 'treffen', 'trifft', 'mit Freunden'], ['sich ärgern', 'ärgern', null, 'über den Stau'], ['sich interessieren', 'interessieren', null, 'für Sport'], ['sich bewegen', 'bewegen', null, 'zu wenig']];
    const v = pick(verbs), p = persPick(['ich', 'du', 'er', 'sie', 'wir', 'ihr', 'Sie']);
    const REFL = { ich: 'mich', du: 'dich', er: 'sich', sie: 'sich', wir: 'uns', ihr: 'euch', Sie: 'sich' };
    return G(`${S(p)} ${conj(v[1], p, v[2])} ___ ${v[3]}. (sich)`, REFL[p],
      `${v[0]} · ${P[p]}`, 'Поставь возвратное местоимение «sich» в форму для этого лица: mich, dich, sich, uns, euch, sich');
  }
  /* сравнение */
  const KOMP = { schnell: ['schneller', 'schnellsten', 'быстрый'], groß: ['größer', 'größten', 'большой'], klein: ['kleiner', 'kleinsten', 'маленький'], alt: ['älter', 'ältesten', 'старый'],
    jung: ['jünger', 'jüngsten', 'молодой'], teuer: ['teurer', 'teuersten', 'дорогой'], billig: ['billiger', 'billigsten', 'дешёвый'], lang: ['länger', 'längsten', 'длинный'],
    warm: ['wärmer', 'wärmsten', 'тёплый'], kalt: ['kälter', 'kältesten', 'холодный'], gut: ['besser', 'besten', 'хороший'], hoch: ['höher', 'höchsten', 'высокий'], schön: ['schöner', 'schönsten', 'красивый'] };
  const KOMPF = [['Das Auto ist ___ als das Fahrrad.', ['schnell', 'teuer']], ['Mein Opa ist ___ als mein Vater.', ['alt']], ['Meine Schwester ist ___ als ich.', ['jung', 'alt', 'groß', 'klein']],
    ['Im Sommer ist es ___ als im Winter.', ['warm']], ['Im Winter ist es ___ als im Sommer.', ['kalt']], ['Der Berg ist ___ als das Haus.', ['hoch']], ['Das Hotel ist ___ als die Jugendherberge.', ['teuer', 'schön']],
    ['Das Fahrrad ist ___ als das Auto.', ['billig']], ['Der Film ist ___ als das Buch.', ['lang', 'gut']]];
  function genKomp() {
    if (Math.random() < 0.7) { const f = pick(KOMPF), a = pick(f[1]); return G(`${f[0]} (${a})`, KOMP[a][0], `${a} — ${KOMP[a][2]} · сравнение: -er + als`, `Поставь прилагательное «${a}» в сравнительную степень (Komparativ)`); }
    const a = pick(Object.keys(KOMP)); return G(`Was ist am ___? (${a})`, KOMP[a][1], `${a} — ${KOMP[a][2]} · превосходная: am …sten`, `Поставь «${a}» в превосходную степень (am …sten)`);
  }
  /* окончания прилагательных */
  const ADJ = [['neu', 'новый'], ['alt', 'старый'], ['groß', 'большой'], ['klein', 'маленький'], ['schön', 'красивый'], ['rot', 'красный'], ['blau', 'синий'], ['billig', 'дешёвый'], ['warm', 'тёплый'], ['schwarz', 'чёрный']];
  function genAdj(kind) {
    return () => {
      const a = pick(ADJ), n = pick(N.filter(x => x[3].includes('t') && !x[3].includes('v'))), g = gi(n[0]), cas = pick(['nom', 'akk', 'dat']);
      const art = kind === 'def' ? ART.def[cas][g] : ART.ein[cas][g];
      let end;
      if (kind === 'def') end = cas === 'nom' || (cas === 'akk' && g !== 0) ? 'e' : 'en';
      else end = cas === 'dat' ? 'en' : cas === 'akk' && g === 0 ? 'en' : ['er', 'e', 'es'][g];
      const frame = { nom: kind === 'def' ? `${cap(art)} ___ ${n[1]} ist teuer.` : `Das ist ${art} ___ ${n[1]}.`, akk: `Ich kaufe ${art} ___ ${n[1]}.`, dat: `Ich bin mit ${art} ___ ${n[1]} zufrieden.` }[cas];
      const casName = { nom: 'Nominativ', akk: 'Akkusativ', dat: 'Dativ' }[cas];
      return G(`${frame} (${a[0]})`, a[0] + end, `${a[0]} — ${a[1]} · ${n[0]} ${n[1]} — ${n[2]} · ${casName}`, `Добавь к прилагательному «${a[0]}» правильное окончание (${kind === 'def' ? 'после der/die/das' : 'после ein/eine'}, ${casName})`);
    };
  }
  /* weil / dass / wenn */
  const CL = [ // [подлежащее, середина, глагол (форма), инфинитив, русский]
    ['ich', 'krank', 'bin', 'sein', 'я болен'], ['ich', 'keine Zeit', 'habe', 'haben', 'у меня нет времени'], ['er', 'viel', 'arbeitet', 'arbeiten', 'он много работает'],
    ['es', 'heute', 'regnet', 'regnen', 'сегодня идёт дождь'], ['wir', 'Deutsch', 'lernen', 'lernen', 'мы учим немецкий'], ['sie', 'in Berlin', 'wohnt', 'wohnen', 'она живёт в Берлине'],
    ['du', 'müde', 'bist', 'sein', 'ты устал'], ['der Bus', 'Verspätung', 'hat', 'haben', 'у автобуса опоздание'], ['ich', 'den Schlüssel', 'suche', 'suchen', 'я ищу ключ'],
    ['das Wetter', 'schön', 'ist', 'sein', 'погода хорошая'], ['meine Mutter', 'heute', 'kommt', 'kommen', 'мама сегодня приходит'], ['ihr', 'Hunger', 'habt', 'haben', 'вы голодны'],
  ];
  const MAINS = ['Ich bleibe zu Hause', 'Ich komme später', 'Wir gehen nicht spazieren', 'Ich rufe dich an', 'Er ist traurig', 'Sie geht früh ins Bett'];
  function genSub(conjWord) {
    return () => {
      const c = pick(CL);
      const head = conjWord === 'dass' ? pick(['Ich glaube', 'Ich denke', 'Ich weiß', 'Ich hoffe', 'Es ist schön']) : pick(MAINS);
      const full = `${head}, ${conjWord} ${c[0]} ${c[1]} ${c[2]}.`;
      if (Math.random() < 0.5) return O(full, `${conjWord} = ${conjWord === 'weil' ? 'потому что' : 'что'} · ${c[4]}`, `Собери предложение: после «${conjWord}» спрягаемый глагол уходит в самый конец`);
      return G(`${head}, ${conjWord} ${c[0]} ${c[1]} ___. (${c[3]})`, c[2], `${conjWord} — ${conjWord === 'weil' ? 'потому что' : 'что'} · ${c[4]}`, `Поставь «${c[3]}» в нужную форму — в придаточном с «${conjWord}» глагол стоит в конце`);
    };
  }
  function genWenn() {
    const c = pick(CL), res = pick([['bleibe', 'ich', 'zu Hause'], ['gehe', 'ich', 'spazieren'], ['rufe', 'ich', 'dich an'], ['komme', 'ich', 'später']]);
    const full = `Wenn ${c[0]} ${c[1]} ${c[2]}, ${res[0]} ${res[1]} ${res[2]}.`;
    if (Math.random() < 0.5) return O(full.charAt(0).toUpperCase() + full.slice(1), `wenn = если · ${c[4]}`, 'Собери предложение: в «wenn»-части глагол в конце, потом сразу глагол главного предложения');
    return G(`Wenn ${c[0]} ${c[1]} ___, ${res[0]} ${res[1]} ${res[2]}. (${c[3]})`, c[2], `wenn = если · ${c[4]}`, `Поставь «${c[3]}» в нужную форму — в части с «wenn» глагол стоит в конце`);
  }
  /* Passiv */
  const PASS = [['Das Auto', 'reparieren', 'repariert'], ['Die Pizza', 'liefern', 'geliefert'], ['Das Paket', 'schicken', 'geschickt'], ['Die Rechnung', 'bezahlen', 'bezahlt'],
    ['Das Haus', 'bauen', 'gebaut'], ['Das Fenster', 'öffnen', 'geöffnet'], ['Die Wohnung', 'putzen', 'geputzt'], ['Der Tisch', 'reservieren', 'reserviert'], ['Das Essen', 'kochen', 'gekocht'],
    ['Die Briefe', 'schreiben', 'geschrieben'], ['Die Kinder', 'abholen', 'abgeholt']];
  function genPassiv() {
    const x = pick(PASS), pl = /^Die (Briefe|Kinder)/.test(x[0]);
    return G(`${x[0]} ___ heute ___. (${x[1]})`, `${pl ? 'werden' : 'wird'} … ${x[2]}`, `Passiv: werden + Partizip II · ${x[1]}`, `Образуй Passiv Präsens от «${x[1]}»: werden в нужной форме + Partizip II в конце (два пропуска)`);
  }
  /* время, даты */
  const NUM = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf'];
  function genUhr() {
    const h = 1 + Math.floor(Math.random() * 11), kind = pick(['nach15', 'vor15', 'halb', 'nach5', 'vor10', 'voll']);
    const hn = NUM[h], hn1 = NUM[h + 1 > 12 ? 1 : h + 1];
    const map = { nach15: [`${h}:15`, `Viertel nach ${hn}`], vor15: [`${h}:45`, `Viertel vor ${hn1}`], halb: [`${h}:30`, `halb ${hn1}`], nach5: [`${h}:05`, `fünf nach ${hn}`], vor10: [`${h}:50`, `zehn vor ${hn1}`], voll: [`${h}:00`, `${hn} Uhr`] };
    const [time, ans] = map[kind];
    const wrong = Object.values(map).map(x => x[1]).filter(x => x !== ans);
    return C(`Es ist ${time.replace(/^(\d):/, '0$1:')}. Wie spät ist es? – Es ist ___.`, ans, [pick([`halb ${hn}`, `Viertel nach ${hn1}`]), ...wrong.sort(() => Math.random() - 0.5)], `${time} — разговорный вариант`, 'Выбери, как сказать это время в разговоре (Viertel nach / vor, halb …)');
  }
  const ORD = ['', 'erste', 'zweite', 'dritte', 'vierte', 'fünfte', 'sechste', 'siebte', 'achte', 'neunte', 'zehnte', 'elfte', 'zwölfte', 'dreizehnte', 'vierzehnte', 'fünfzehnte', 'sechzehnte', 'siebzehnte', 'achtzehnte', 'neunzehnte',
    'zwanzigste', 'einundzwanzigste', 'zweiundzwanzigste', 'dreiundzwanzigste', 'vierundzwanzigste', 'fünfundzwanzigste', 'sechsundzwanzigste', 'siebenundzwanzigste', 'achtundzwanzigste', 'neunundzwanzigste', 'dreißigste', 'einunddreißigste'];
  const MON = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  function genDatum() {
    const d = 1 + Math.floor(Math.random() * 28), m = pick(MON);
    if (Math.random() < 0.5) return G(`Heute ist der ___ ${m}. (${d}.)`, ORD[d], `Какое сегодня число? — der + …te/…ste`, `Напиши число ${d}. словом как порядковое: der …te (до 19), der …ste (с 20)`);
    return G(`Ich habe am ___ ${m} Geburtstag. (${d}.)`, ORD[d] + 'n', `Когда? — am + …ten/…sten`, `Напиши число ${d}. словом после «am»: am …ten / am …sten`);
  }

  /* ═════════════ темы → генераторы ═════════════ */
  window.SG_GEN = {
    sg01_konj: genConj(['ich', 'du', 'Sie'], true),
    sg02_konj: genConj(PERS, true),
    sg02_poss: genPoss(['ich', 'du', 'Sie']),
    sg03_ein: genEin,
    sg04_der: genDer,
    sg04_pron: genPronEr,
    sg05_trenn: genSep,
    sg05_zeit: genUhr,
    sg06_akk: genAkk,
    sg06_vokal: genVokal,
    sg07_modal: genModal(['können', 'wollen']),
    sg07_perf: genPerf({ haben: true }),
    sg08_praet: genPraetSeinHaben,
    sg09_muss: genModal(['müssen', 'dürfen']),
    sg09_imp: genImp,
    sg10_poss: genPoss(['er', 'sie', 'wir', 'ihr', 'Sie']),
    sg10_sollen: genModal(['sollen']),
    sg11_wo: genWoDat,
    sg11_mit: genMit,
    sg13_dativ: genPron('dat'),
    sg13_komp: genKomp,
    sg14_datum: genDatum,
    sg14_akk: genPron('akk'),
    sg14_werden: genWerden,
    sg3_01_weil: genSub('weil'),
    sg3_01_perf: genPerf({ noge: true }),
    sg3_02_wechsel: genWechsel,
    sg3_02_verben: genStellen,
    sg3_03_indef: genIndef,
    sg3_04_wenn: genWenn,
    sg3_05_refl: genRefl,
    sg3_06_dass: genSub('dass'),
    sg3_06_praet: genPraetModal,
    sg3_07_dativ: genPossDat,
    sg4_08_konj: genK2,
    sg4_08_rat: genRat,
    sg4_09_adjunb: genAdj('ein'),
    sg4_09_komp: genKomp,
    sg4_10_adjbest: genAdj('def'),
    sg4_13_passiv: genPassiv,
    sg4_14_praet: genPraet,
  };
  // для проверок
  window.SG_GEN_TEST = { conj, praet, k2, possForm };
})();
