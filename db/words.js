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
  //  A1 — FAMILIE
  // ════════════════════════════════
  {
    level: "A1", category: "familie", name: "Familie", emoji: "👨‍👩‍👧",
    words: [
      { id: "a1_fa_001", article: "der", word: "Vater",       translation: "отец"              },
      { id: "a1_fa_002", article: "die", word: "Mutter",      translation: "мать"              },
      { id: "a1_fa_003", article: "der", word: "Sohn",        translation: "сын"               },
      { id: "a1_fa_004", article: "die", word: "Tochter",     translation: "дочь"              },
      { id: "a1_fa_005", article: "der", word: "Bruder",      translation: "брат"              },
      { id: "a1_fa_006", article: "die", word: "Schwester",   translation: "сестра"            },
      { id: "a1_fa_007", article: "das", word: "Kind",        translation: "ребёнок"           },
      { id: "a1_fa_008", article: "der", word: "Mann",        translation: "муж / мужчина"     },
      { id: "a1_fa_009", article: "die", word: "Frau",        translation: "жена / женщина"    },
      { id: "a1_fa_010", article: "der", word: "Großvater",   translation: "дедушка"           },
      { id: "a1_fa_011", article: "die", word: "Großmutter",  translation: "бабушка"           },
      { id: "a1_fa_012", article: "der", word: "Opa",         translation: "дедуля"            },
      { id: "a1_fa_013", article: "die", word: "Oma",         translation: "бабуля"            },
      { id: "a1_fa_014", article: "der", word: "Onkel",       translation: "дядя"              },
      { id: "a1_fa_015", article: "die", word: "Tante",       translation: "тётя"              },
    ]
  },

  // ════════════════════════════════
  //  A1 — WOCHENTAGE
  // ════════════════════════════════
  {
    level: "A1", category: "wochentage", name: "Wochentage", emoji: "📅",
    words: [
      { id: "a1_wt_001", article: "der", word: "Montag",     translation: "понедельник"  },
      { id: "a1_wt_002", article: "der", word: "Dienstag",   translation: "вторник"      },
      { id: "a1_wt_003", article: "der", word: "Mittwoch",   translation: "среда"        },
      { id: "a1_wt_004", article: "der", word: "Donnerstag", translation: "четверг"      },
      { id: "a1_wt_005", article: "der", word: "Freitag",    translation: "пятница"      },
      { id: "a1_wt_006", article: "der", word: "Samstag",    translation: "суббота"      },
      { id: "a1_wt_007", article: "der", word: "Sonntag",    translation: "воскресенье"  },
      { id: "a1_wt_008", article: "das", word: "Wochenende", translation: "выходные"     },
    ]
  },

  // ════════════════════════════════
  //  A1 — OBST & GEMÜSE
  // ════════════════════════════════
  {
    level: "A1", category: "obst_gemuese", name: "Obst & Gemüse", emoji: "🥦",
    words: [
      { id: "a1_og_001", article: "die", word: "Karotte",   translation: "морковь"          },
      { id: "a1_og_002", article: "die", word: "Zwiebel",   translation: "лук"              },
      { id: "a1_og_003", article: "die", word: "Orange",    translation: "апельсин"         },
      { id: "a1_og_004", article: "die", word: "Birne",     translation: "груша"            },
      { id: "a1_og_005", article: "die", word: "Kirsche",   translation: "вишня / черешня"  },
      { id: "a1_og_006", article: "die", word: "Mango",     translation: "манго"            },
      { id: "a1_og_007", article: "die", word: "Traube",    translation: "виноград"         },
      { id: "a1_og_008", article: "der", word: "Pilz",      translation: "гриб"             },
      { id: "a1_og_009", article: "der", word: "Salat",     translation: "салат"            },
      { id: "a1_og_010", article: "die", word: "Paprika",   translation: "перец / паприка"  },
      { id: "a1_og_011", article: "die", word: "Gurke",     translation: "огурец"           },
      { id: "a1_og_012", article: "die", word: "Möhre",     translation: "морковь"          },
      { id: "a1_og_013", article: "die", word: "Melone",    translation: "дыня / арбуз"     },
      { id: "a1_og_014", article: "der", word: "Kohl",      translation: "капуста"          },
    ]
  },

  // ════════════════════════════════
  //  A1 — LEBENSMITTEL (расширенный)
  // ════════════════════════════════
  {
    level: "A1", category: "lebensmittel", name: "Lebensmittel", emoji: "🥫",
    words: [
      { id: "a1_lm_001", article: "das", word: "Brötchen",   translation: "булочка"           },
      { id: "a1_lm_002", article: "der", word: "Reis",       translation: "рис"               },
      { id: "a1_lm_003", article: "der", word: "Honig",      translation: "мёд"               },
      { id: "a1_lm_004", article: "die", word: "Marmelade",  translation: "варенье / джем"    },
      { id: "a1_lm_005", article: "die", word: "Schokolade", translation: "шоколад"           },
      { id: "a1_lm_006", article: "die", word: "Sahne",      translation: "сливки"            },
      { id: "a1_lm_007", article: "das", word: "Mehl",       translation: "мука"              },
      { id: "a1_lm_008", article: "das", word: "Salz",       translation: "соль"              },
      { id: "a1_lm_009", article: "der", word: "Wein",       translation: "вино"              },
      { id: "a1_lm_010", article: "das", word: "Bier",       translation: "пиво"              },
      { id: "a1_lm_011", article: "die", word: "Limonade",   translation: "лимонад"           },
      { id: "a1_lm_012", article: "die", word: "Cola",       translation: "кола"              },
      { id: "a1_lm_013", article: "der", word: "Kuchen",     translation: "торт / пирог"      },
      { id: "a1_lm_014", article: "der", word: "Joghurt",    translation: "йогурт"            },
      { id: "a1_lm_015", article: "der", word: "Zucker",     translation: "сахар"             },
      { id: "a1_lm_016", article: "die", word: "Nudel",      translation: "макаронина (мн: Nudeln)" },
      { id: "a1_lm_017", article: "das", word: "Öl",         translation: "масло (раст.)"     },
      { id: "a1_lm_018", article: "der", word: "Essig",      translation: "уксус"             },
      { id: "a1_lm_019", article: "die", word: "Wurst",      translation: "колбаса"           },
      { id: "a1_lm_020", article: "das", word: "Müsli",      translation: "мюсли"             },
    ]
  },

  // ════════════════════════════════
  //  A1 — KÖRPERPFLEGE
  // ════════════════════════════════
  {
    level: "A1", category: "koerperpflege", name: "Körperpflege", emoji: "🧴",
    words: [
      { id: "a1_kp_001", article: "die", word: "Zahnbürste",      translation: "зубная щётка"     },
      { id: "a1_kp_002", article: "der", word: "Kamm",            translation: "расчёска"         },
      { id: "a1_kp_003", article: "die", word: "Haarbürste",      translation: "щётка для волос"  },
      { id: "a1_kp_004", article: "das", word: "Toilettenpapier", translation: "туалетная бумага" },
      { id: "a1_kp_005", article: "die", word: "Creme",           translation: "крем"             },
      { id: "a1_kp_006", article: "der", word: "Rasierer",        translation: "бритва"           },
      { id: "a1_kp_007", article: "das", word: "Pflaster",        translation: "пластырь"         },
      { id: "a1_kp_008", article: "das", word: "Deo",             translation: "дезодорант"       },
      { id: "a1_kp_009", article: "das", word: "Shampoo",         translation: "шампунь"          },
      { id: "a1_kp_010", article: "die", word: "Zahnpasta",       translation: "зубная паста"     },
      { id: "a1_kp_011", article: "die", word: "Seife",           translation: "мыло"             },
      { id: "a1_kp_012", article: "das", word: "Duschgel",        translation: "гель для душа"    },
    ]
  },

];
