/* ══════════════════════════════════════════════════════════════
   ТЕМЫ для вкладки «Карточки»
   Каждая тема собирает категории из db/words.js по ключу категории.
   Ключ указывается БЕЗ суффикса части речи: "arbeit" подхватит
   arbeit_n, arbeit_v, arbeit_a, arbeit_o.
   Категория, не попавшая ни в одну тему, окажется в «Другое».
══════════════════════════════════════════════════════════════ */
window.THEMES_DATA = [
  { id: "wohnen",     emoji: "🏠", de: "Wohnen",               ru: "Жильё",                  uk: "Житло",
    cats: ["moebel","einrichtung","raeume","wohnformen","hauseingang","mieten","hausarbeit","unterkunft_regeln","gebaeude"] },
  { id: "gesundheit", emoji: "🩺", de: "Gesundheit & Körper",  ru: "Здоровье и тело",        uk: "Здоров'я і тіло",
    cats: ["krankheiten","arzt","koerper","koerper_plural","koerperpflege","hygiene2","gefuehle"] },
  { id: "essen",      emoji: "🍎", de: "Essen & Einkaufen",    ru: "Еда и покупки",          uk: "Їжа і покупки",
    cats: ["essen","obst_gemuese","lebensmittel","mahlzeiten","einkaufen","supermarkt","verpackung","geschaefte","kleidung","kleidung2"] },
  { id: "menschen",   emoji: "👨‍👩‍👧", de: "Menschen & Familie", ru: "Люди и семья",          uk: "Люди і сім'я",
    cats: ["familie","verwandte","familienstand","vorstellen","menschen","sprachen","laender","gruesse"] },
  { id: "arbeit",     emoji: "💼", de: "Arbeit & Beruf",       ru: "Работа и профессии",     uk: "Робота і професії",
    cats: ["arbeit","arbeitsorte","arbeitsverben","arbeitsplatz","berufe"] },
  { id: "stadt",      emoji: "🏙️", de: "Stadt & Verkehr",      ru: "Город и транспорт",      uk: "Місто і транспорт",
    cats: ["stadt","stadtA2","transport","strassen","verkehr_oeffentlich","bahnhof","weg","lage","orte_das","reisen","vb_unterwegs","vb_orient"] },
  { id: "aemter",     emoji: "🏛️", de: "Ämter & Gesellschaft", ru: "Ведомства и общество",   uk: "Установи і суспільство",
    cats: ["behoerden","buerokratie","amt","demokratie","internet_regeln"] },
  { id: "schule",     emoji: "🎓", de: "Schule & Medien",      ru: "Учёба и медиа",          uk: "Навчання і медіа",
    cats: ["schulsystem","schultuete","sprachkurs","bibliothek_medien","handy_funktionen","medien_geraete","tastatur_tasten","kindergarten_akt"] },
  { id: "freizeit",   emoji: "⚽", de: "Freizeit & Natur",     ru: "Досуг и природа",        uk: "Дозвілля і природа",
    cats: ["natur","tiere","wetter","park","schwimmbad","museum","vereine","feste","weihnachten","vb_umwelt"] },
  { id: "zeit",       emoji: "🕐", de: "Zeit & Alltag",        ru: "Время и распорядок дня", uk: "Час і розпорядок дня",
    cats: ["wochentage","monate","jahreszeiten","uhrzeit","alltag","haeufigkeit","zeitfolge"] },
  { id: "verben",     emoji: "🔀", de: "Verben",               ru: "Глаголы",                uk: "Дієслова",
    cats: ["verben","unreg_verben","vokalwechsel","modalverben","trennbar","vor_verben","vb_bewegung","vb_sehen","vb_komm","vb_alltag","vb_weitere"] },
  { id: "basis",      emoji: "🧩", de: "Grundwortschatz",      ru: "Базовые слова",          uk: "Базові слова",
    cats: ["pepa","nuetzlich","adjektive","farben","zahlen","ordnungszahlen","fragewörter","konjunktionen","redewendungen"] },
];
