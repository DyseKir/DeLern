/* ══════════════════════════════════════════════════
   БАЗА ДАННЫХ СЛОВ
   Добавляй слова сюда сам!

   Структура одного слова:
   { id: "уникальный_id", article: "der/die/das", word: "Слово", translation: "перевод" }

   Уровни: A1, A2, B1, B2
   Категория: любое название на латинице
══════════════════════════════════════════════════ */

window.VOCAB_DATA = [

  // ════════════════════════════════
  //  A1 — ESSEN & TRINKEN
  // ════════════════════════════════
  {
    level: "A1", category: "essen", name: "Essen & Trinken", emoji: "🍔",
    words: [
      { id: "a1_essen_001", article: "der", word: "Apfel",     translation: "яблоко"    },
      { id: "a1_essen_002", article: "die", word: "Milch",     translation: "молоко"    },
      { id: "a1_essen_003", article: "das", word: "Brot",      translation: "хлеб"      },
      { id: "a1_essen_004", article: "die", word: "Pizza",     translation: "пицца"     },
      { id: "a1_essen_005", article: "der", word: "Käse",      translation: "сыр"       },
      { id: "a1_essen_006", article: "das", word: "Wasser",    translation: "вода"      },
      { id: "a1_essen_007", article: "der", word: "Tee",       translation: "чай"       },
      { id: "a1_essen_008", article: "der", word: "Kaffee",    translation: "кофе"      },
      { id: "a1_essen_009", article: "die", word: "Butter",    translation: "масло"     },
      { id: "a1_essen_010", article: "das", word: "Ei",        translation: "яйцо"      },
      { id: "a1_essen_011", article: "die", word: "Banane",    translation: "банан"     },
      { id: "a1_essen_012", article: "die", word: "Tomate",    translation: "помидор"   },
      { id: "a1_essen_013", article: "die", word: "Kartoffel", translation: "картофель" },
      { id: "a1_essen_014", article: "das", word: "Fleisch",   translation: "мясо"      },
      { id: "a1_essen_015", article: "der", word: "Saft",      translation: "сок"       },
    ]
  },

  // ════════════════════════════════
  //  A1 — TRANSPORT
  // ════════════════════════════════
  {
    level: "A1", category: "transport", name: "Transport", emoji: "🚌",
    words: [
      { id: "a1_tr_001", article: "das", word: "Auto",        translation: "машина"    },
      { id: "a1_tr_002", article: "der", word: "Bus",         translation: "автобус"   },
      { id: "a1_tr_003", article: "das", word: "Fahrrad",     translation: "велосипед" },
      { id: "a1_tr_004", article: "der", word: "Zug",         translation: "поезд"     },
      { id: "a1_tr_005", article: "das", word: "Flugzeug",    translation: "самолёт"   },
      { id: "a1_tr_006", article: "das", word: "Schiff",      translation: "корабль"   },
      { id: "a1_tr_007", article: "die", word: "U-Bahn",      translation: "метро"     },
      { id: "a1_tr_008", article: "das", word: "Motorrad",    translation: "мотоцикл"  },
      { id: "a1_tr_009", article: "die", word: "Straßenbahn", translation: "трамвай"   },
      { id: "a1_tr_010", article: "das", word: "Taxi",        translation: "такси"     },
    ]
  },

  // ════════════════════════════════
  //  A1 — TIERE
  // ════════════════════════════════
  {
    level: "A1", category: "tiere", name: "Tiere", emoji: "🦌",
    words: [
      { id: "a1_ti_001", article: "der", word: "Hund",     translation: "собака"  },
      { id: "a1_ti_002", article: "die", word: "Katze",    translation: "кошка"   },
      { id: "a1_ti_003", article: "der", word: "Vogel",    translation: "птица"   },
      { id: "a1_ti_004", article: "das", word: "Pferd",    translation: "лошадь"  },
      { id: "a1_ti_005", article: "die", word: "Kuh",      translation: "корова"  },
      { id: "a1_ti_006", article: "der", word: "Fisch",    translation: "рыба"    },
      { id: "a1_ti_007", article: "der", word: "Bär",      translation: "медведь" },
      { id: "a1_ti_008", article: "der", word: "Löwe",     translation: "лев"     },
      { id: "a1_ti_009", article: "der", word: "Elefant",  translation: "слон"    },
      { id: "a1_ti_010", article: "die", word: "Schlange", translation: "змея"    },
    ]
  },

  // ════════════════════════════════
  //  A1 — EINKAUFEN
  // ════════════════════════════════
  {
    level: "A1", category: "einkaufen", name: "Einkaufen", emoji: "🛒",
    words: [
      { id: "a1_ei_001", article: "der", word: "Supermarkt", translation: "супермаркет" },
      { id: "a1_ei_002", article: "das", word: "Geld",       translation: "деньги"      },
      { id: "a1_ei_003", article: "die", word: "Tasche",     translation: "сумка"       },
      { id: "a1_ei_004", article: "der", word: "Preis",      translation: "цена"        },
      { id: "a1_ei_005", article: "die", word: "Kasse",      translation: "касса"       },
      { id: "a1_ei_006", article: "das", word: "Geschäft",   translation: "магазин"     },
      { id: "a1_ei_007", article: "der", word: "Markt",      translation: "рынок"       },
      { id: "a1_ei_008", article: "die", word: "Rechnung",   translation: "счёт / чек"  },
    ]
  },

  // ════════════════════════════════
  //  A1 — STADT & ORIENTIERUNG  🟢
  // ════════════════════════════════
  {
    level: "A1", category: "stadt", name: "Stadt & Orientierung", emoji: "🏙️",
    words: [
      { id: "a1_st_001", article: "die", word: "Ampel",       translation: "светофор"   },
      { id: "a1_st_002", article: "die", word: "Brücke",      translation: "мост"       },
      { id: "a1_st_003", article: "die", word: "Ecke",        translation: "угол / поворот" },
      { id: "a1_st_004", article: "die", word: "Seite",       translation: "сторона"    },
      { id: "a1_st_005", article: "die", word: "Bank",        translation: "банк"       },
      { id: "a1_st_006", article: "die", word: "Bäckerei",    translation: "пекарня"    },
      { id: "a1_st_007", article: "der", word: "Kindergarten",translation: "детский сад"},
      { id: "a1_st_008", article: "der", word: "Park",        translation: "парк"       },
      { id: "a1_st_009", article: "das", word: "Theater",     translation: "театр"      },
      { id: "a1_st_010", article: "das", word: "Krankenhaus", translation: "больница"   },
      { id: "a1_st_011", article: "die", word: "Apotheke",    translation: "аптека"     },
      { id: "a1_st_012", article: "die", word: "Brille",      translation: "очки"       },
      { id: "a1_st_013", article: "das", word: "Land",        translation: "страна"     },
      { id: "a1_st_014", article: "das", word: "Telefon",     translation: "телефон"    },
    ]
  },

  // ════════════════════════════════
  //  A2 — STADT & BEHÖRDEN  🟡
  // ════════════════════════════════
  {
    level: "A2", category: "stadtA2", name: "Stadt & Behörden", emoji: "🏛️",
    words: [
      { id: "a2_sb_001", article: "die", word: "Kreuzung",          translation: "перекрёсток"         },
      { id: "a2_sb_002", article: "das", word: "Jobcenter",         translation: "центр занятости"     },
      { id: "a2_sb_003", article: "das", word: "Schwimmbad",        translation: "бассейн"             },
      { id: "a2_sb_004", article: "die", word: "Metzgerei",         translation: "мясная лавка"        },
      { id: "a2_sb_005", article: "der", word: "Busbahnhof",        translation: "автовокзал"          },
      { id: "a2_sb_006", article: "die", word: "Bushaltestelle",    translation: "автобусная остановка"},
      { id: "a2_sb_007", article: "der", word: "Augenarzt",         translation: "окулист"             },
      { id: "a2_sb_008", article: "die", word: "Augentropfen",      translation: "капли для глаз"      },
      { id: "a2_sb_009", article: "das", word: "Geldgeschenk",      translation: "денежный подарок"    },
      { id: "a2_sb_010", article: "das", word: "Einkommen",         translation: "доход"               },
      { id: "a2_sb_011", article: "der", word: "Geburtsort",        translation: "место рождения"      },
      { id: "a2_sb_012", article: "das", word: "Geburtsdatum",      translation: "дата рождения"       },
      { id: "a2_sb_013", article: "die", word: "Staatsangehörigkeit",translation: "гражданство"        },
    ]
  },

  // ════════════════════════════════
  //  B1 — BEHÖRDEN & OPTIKER  🟠
  // ════════════════════════════════
  {
    level: "B1", category: "behoerden", name: "Behörden & Optiker", emoji: "🏛️",
    words: [
      { id: "b1_bo_001", article: "der", word: "Kreisverkehr",            translation: "круговое движение / кольцо" },
      { id: "b1_bo_002", article: "die", word: "Kurzsichtigkeit",         translation: "близорукость"                },
      { id: "b1_bo_003", article: "die", word: "Weitsichtigkeit",         translation: "дальнозоркость"              },
      { id: "b1_bo_004", article: "der", word: "Brillenpass",             translation: "паспорт очков"               },
      { id: "b1_bo_005", article: "die", word: "Bescheinigung",           translation: "справка / свидетельство"     },
      { id: "b1_bo_006", article: "die", word: "Befreiung",               translation: "освобождение (от налогов)"   },
      { id: "b1_bo_007", article: "der", word: "Rundfunkbeitrag",         translation: "взнос за радио и ТВ"         },
      { id: "b1_bo_008", article: "die", word: "Rentenversicherungsnummer",translation: "номер пенсионного страхования"},
      { id: "b1_bo_009", article: "der", word: "Geburtsname",             translation: "фамилия при рождении"        },
    ]
  },

  // ════════════════════════════════
  //  B2 — MEDIZIN & BÜROKRATIE  🔴
  // ════════════════════════════════
  {
    level: "B2", category: "buerokratie", name: "Medizin & Bürokratie", emoji: "📑",
    words: [
      { id: "b2_mb_001", article: "der", word: "Astigmatismus",        translation: "астигматизм"                         },
      { id: "b2_mb_002", article: "die", word: "Messbrille",           translation: "пробные очки для теста зрения"       },
      { id: "b2_mb_003", article: "die", word: "Hyaluronsäure",        translation: "гиалуроновая кислота"                },
      { id: "b2_mb_004", article: "die", word: "Veränderungsmitteilung",translation: "уведомление об изменениях"          },
      { id: "b2_mb_005", article: "das", word: "Transitgeld",          translation: "транзитные деньги"                   },
      { id: "b2_mb_006", article: "die", word: "Mitwirkungspflicht",   translation: "обязанность содействовать ведомству" },
      { id: "b2_mb_007", article: "die", word: "Bedarfsgemeinschaft",  translation: "совместное хозяйство для Jobcenter"  },
      { id: "b2_mb_008", article: "der", word: "Kontoauszug",          translation: "выписка со счёта"                    },
      { id: "b2_mb_009", article: "der", word: "Nachweis",             translation: "доказательство / подтверждение"      },
      { id: "b2_mb_010", article: "der", word: "Leistungsbezug",       translation: "получение социальных выплат"         },
    ]
  },

  // ════════════════════════════════
  //  СЮДА ДОБАВЛЯЙ СВОИ КАТЕГОРИИ:
  // ════════════════════════════════
  /*
  {
    level: "A1", category: "wohnen", name: "Wohnen", emoji: "🏠",
    words: [
      { id: "a1_wo_001", article: "das", word: "Haus",    translation: "дом"      },
      { id: "a1_wo_002", article: "die", word: "Wohnung", translation: "квартира" },
    ]
  },
  */

];
