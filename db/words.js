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
    level: "A1", category: "essen", name: "Essen & Trinken", name_ru: "Еда и напитки", emoji: "🍔",
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
    level: "A1", category: "transport", name: "Transport", name_ru: "Транспорт", emoji: "🚌",
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
    level: "A1", category: "tiere", name: "Tiere", name_ru: "Животные", emoji: "🦌",
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
    level: "A1", category: "einkaufen", name: "Einkaufen", name_ru: "Покупки", emoji: "🛒",
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
    level: "A1", category: "stadt", name: "Stadt & Orientierung", name_ru: "Город и ориентация", emoji: "🏙️",
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
    level: "A2", category: "stadtA2", name: "Stadt & Behörden", name_ru: "Город и учреждения", emoji: "🏛️",
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
    level: "B1", category: "behoerden", name: "Behörden & Optiker", name_ru: "Ведомства и оптика", emoji: "🏛️",
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
    level: "B2", category: "buerokratie", name: "Medizin & Bürokratie", name_ru: "Медицина и бюрократия", emoji: "📑",
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
    level: "A1", category: "familie", name: "Familie", name_ru: "Семья", emoji: "👨‍👩‍👧",
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
    level: "A1", category: "wochentage", name: "Wochentage", name_ru: "Дни недели", emoji: "📅",
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
    level: "A1", category: "obst_gemuese", name: "Obst & Gemüse", name_ru: "Фрукты и овощи", emoji: "🥦",
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
    level: "A1", category: "lebensmittel", name: "Lebensmittel", name_ru: "Продукты питания", emoji: "🥫",
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
    level: "A1", category: "koerperpflege", name: "Körperpflege", name_ru: "Гигиена", emoji: "🧴",
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


  // ════════════════════════════════
  //  A1 — SICH VORSTELLEN (Знакомство)
  // ════════════════════════════════
  {
    level: "A1", category: "vorstellen", name: "Sich vorstellen", name_ru: "Знакомство", emoji: "🤝",
    words: [
      { id: "a1_vs_001", article: "der", word: "Name",           translation: "имя / фамилия"         },
      { id: "a1_vs_002", article: "das", word: "Alter",          translation: "возраст"               },
      { id: "a1_vs_003", article: "der", word: "Beruf",          translation: "профессия"             },
      { id: "a1_vs_004", article: "der", word: "Wohnort",        translation: "место проживания"      },
      { id: "a1_vs_005", article: "die", word: "Nationalität",   translation: "национальность"        },
      { id: "a1_vs_006", article: "die", word: "Sprache",        translation: "язык"                  },
      { id: "a1_vs_007", article: "die", word: "Adresse",        translation: "адрес"                 },
      { id: "a1_vs_008", article: "das", word: "Hobby",          translation: "хобби"                 },
      { id: "a1_vs_009", article: "die", word: "Telefonnummer",  translation: "номер телефона"        },
      { id: "a1_vs_010", article: "die", word: "E-Mail",         translation: "электронная почта"     },
      { id: "a1_vs_011", article: "die", word: "Stadt",          translation: "город"                 },
      { id: "a1_vs_012", article: "der", word: "Vorname",        translation: "имя (личное)"          },
      { id: "a1_vs_013", article: "der", word: "Nachname",       translation: "фамилия"               },
      { id: "a1_vs_014", article: "das", word: "Formular",       translation: "анкета / бланк"        },
    ]
  },

  // ════════════════════════════════
  //  A1 — KÖRPER (Тело)
  // ════════════════════════════════
  {
    level: "A1", category: "koerper", name: "Körper & Aussehen", name_ru: "Тело и внешность", emoji: "🧍",
    words: [
      { id: "a1_kb_001", article: "der", word: "Kopf",     translation: "голова"              },
      { id: "a1_kb_002", article: "das", word: "Haar",     translation: "волосы"              },
      { id: "a1_kb_003", article: "das", word: "Auge",     translation: "глаз"                },
      { id: "a1_kb_004", article: "die", word: "Nase",     translation: "нос"                 },
      { id: "a1_kb_005", article: "der", word: "Mund",     translation: "рот"                 },
      { id: "a1_kb_006", article: "das", word: "Ohr",      translation: "ухо"                 },
      { id: "a1_kb_007", article: "der", word: "Arm",      translation: "рука (до плеча)"     },
      { id: "a1_kb_008", article: "das", word: "Bein",     translation: "нога"                },
      { id: "a1_kb_009", article: "die", word: "Hand",     translation: "рука (кисть)"        },
      { id: "a1_kb_010", article: "der", word: "Fuß",      translation: "ступня / нога"       },
      { id: "a1_kb_011", article: "der", word: "Bauch",    translation: "живот"               },
      { id: "a1_kb_012", article: "der", word: "Rücken",   translation: "спина"               },
      { id: "a1_kb_013", article: "die", word: "Schulter", translation: "плечо"               },
      { id: "a1_kb_014", article: "der", word: "Finger",   translation: "палец"               },
      { id: "a1_kb_015", article: "der", word: "Hals",     translation: "шея / горло"         },
      { id: "a1_kb_016", article: "das", word: "Gesicht",  translation: "лицо"                },
      { id: "a1_kb_017", article: "das", word: "Knie",     translation: "колено"              },
      { id: "a1_kb_018", article: "der", word: "Zahn",     translation: "зуб"                 },
    ]
  },

  // ════════════════════════════════
  //  A1 — KLEIDUNG (Одежда)
  // ════════════════════════════════
  {
    level: "A1", category: "kleidung", name: "Kleidung", name_ru: "Одежда", emoji: "👕",
    words: [
      { id: "a1_kl_001", article: "das", word: "Hemd",        translation: "рубашка"              },
      { id: "a1_kl_002", article: "die", word: "Hose",        translation: "брюки"                },
      { id: "a1_kl_003", article: "die", word: "Jacke",       translation: "куртка / жакет"       },
      { id: "a1_kl_004", article: "der", word: "Schuh",       translation: "ботинок / туфля"      },
      { id: "a1_kl_005", article: "die", word: "Socke",       translation: "носок"                },
      { id: "a1_kl_006", article: "der", word: "Pullover",    translation: "свитер"               },
      { id: "a1_kl_007", article: "der", word: "Rock",        translation: "юбка"                 },
      { id: "a1_kl_008", article: "das", word: "Kleid",       translation: "платье"               },
      { id: "a1_kl_009", article: "der", word: "Mantel",      translation: "пальто"               },
      { id: "a1_kl_010", article: "die", word: "Mütze",       translation: "шапка"                },
      { id: "a1_kl_011", article: "die", word: "Bluse",       translation: "блузка"               },
      { id: "a1_kl_012", article: "das", word: "T-Shirt",     translation: "футболка"             },
      { id: "a1_kl_013", article: "die", word: "Jeans",       translation: "джинсы"               },
      { id: "a1_kl_014", article: "der", word: "Schal",       translation: "шарф"                 },
      { id: "a1_kl_015", article: "der", word: "Handschuh",   translation: "перчатка"             },
    ]
  },

  // ════════════════════════════════
  //  A1 — BERUFE (Профессии)
  // ════════════════════════════════
  {
    level: "A1", category: "berufe", name: "Berufe", name_ru: "Профессии", emoji: "👔",
    words: [
      { id: "a1_br_001", article: "der", word: "Arzt",         translation: "врач (м) / die Ärztin (ж)"           },
      { id: "a1_br_002", article: "der", word: "Lehrer",       translation: "учитель (м) / die Lehrerin (ж)"      },
      { id: "a1_br_003", article: "der", word: "Student",      translation: "студент (м) / die Studentin (ж)"     },
      { id: "a1_br_004", article: "der", word: "Koch",         translation: "повар (м) / die Köchin (ж)"          },
      { id: "a1_br_005", article: "der", word: "Bäcker",       translation: "пекарь (м) / die Bäckerin (ж)"      },
      { id: "a1_br_006", article: "der", word: "Ingenieur",    translation: "инженер (м) / die Ingenieurin (ж)"   },
      { id: "a1_br_007", article: "die", word: "Krankenschwester", translation: "медсестра / der Krankenpfleger (м)" },
      { id: "a1_br_008", article: "der", word: "Polizist",     translation: "полицейский (м) / die Polizistin (ж)"},
      { id: "a1_br_009", article: "der", word: "Verkäufer",    translation: "продавец (м) / die Verkäuferin (ж)"  },
      { id: "a1_br_010", article: "der", word: "Fahrer",       translation: "водитель (м) / die Fahrerin (ж)"     },
      { id: "a1_br_011", article: "der", word: "Kellner",      translation: "официант (м) / die Kellnerin (ж)"    },
      { id: "a1_br_012", article: "der", word: "Mechaniker",   translation: "механик (м) / die Mechanikerin (ж)"  },
      { id: "a1_br_013", article: "der", word: "Friseur",      translation: "парикмахер (м) / die Friseurin (ж)"  },
      { id: "a1_br_014", article: "der", word: "Sekretär",     translation: "секретарь (м) / die Sekretärin (ж)"  },
    ]
  },

  // ════════════════════════════════
  //  A1 — FRAGEWÖRTER (Вопросительные слова, без артикля)
  // ════════════════════════════════
  {
    level: "A1", category: "fragewörter", name: "Fragewörter", name_ru: "Вопросительные слова", emoji: "❓",
    words: [
      { id: "a1_fw_001", article: "-", word: "Wer",       translation: "кто"                      },
      { id: "a1_fw_002", article: "-", word: "Was",       translation: "что"                      },
      { id: "a1_fw_003", article: "-", word: "Wo",        translation: "где"                      },
      { id: "a1_fw_004", article: "-", word: "Woher",     translation: "откуда"                   },
      { id: "a1_fw_005", article: "-", word: "Wohin",     translation: "куда"                     },
      { id: "a1_fw_006", article: "-", word: "Wie",       translation: "как"                      },
      { id: "a1_fw_007", article: "-", word: "Wie alt",   translation: "сколько лет"              },
      { id: "a1_fw_008", article: "-", word: "Wie viel",  translation: "сколько (количество)"     },
      { id: "a1_fw_009", article: "-", word: "Wann",      translation: "когда"                    },
      { id: "a1_fw_010", article: "-", word: "Warum",     translation: "почему"                   },
      { id: "a1_fw_011", article: "-", word: "Welcher",   translation: "какой / который (м)"      },
      { id: "a1_fw_012", article: "-", word: "Welche",    translation: "какая / которая (ж/мн)"   },
      { id: "a1_fw_013", article: "-", word: "Was für",   translation: "что за / какой"           },
      { id: "a1_fw_014", article: "-", word: "Wie lange", translation: "как долго"                },
    ]
  },

  // ════════════════════════════════
  //  A1 — FARBEN (Цвета, без артикля)
  // ════════════════════════════════
  {
    level: "A1", category: "farben", name: "Farben", name_ru: "Цвета", emoji: "🎨",
    words: [
      { id: "a1_fb_001", article: "-", word: "rot",      translation: "красный"          },
      { id: "a1_fb_002", article: "-", word: "blau",     translation: "синий / голубой"  },
      { id: "a1_fb_003", article: "-", word: "grün",     translation: "зелёный"          },
      { id: "a1_fb_004", article: "-", word: "gelb",     translation: "жёлтый"           },
      { id: "a1_fb_005", article: "-", word: "schwarz",  translation: "чёрный"           },
      { id: "a1_fb_006", article: "-", word: "weiß",     translation: "белый"            },
      { id: "a1_fb_007", article: "-", word: "grau",     translation: "серый"            },
      { id: "a1_fb_008", article: "-", word: "orange",   translation: "оранжевый"        },
      { id: "a1_fb_009", article: "-", word: "lila",     translation: "фиолетовый"       },
      { id: "a1_fb_010", article: "-", word: "rosa",     translation: "розовый"          },
      { id: "a1_fb_011", article: "-", word: "braun",    translation: "коричневый"       },
      { id: "a1_fb_012", article: "-", word: "bunt",     translation: "разноцветный"     },
    ]
  },

  // ════════════════════════════════
  //  A1 — ZAHLEN (Числа, без артикля)
  // ════════════════════════════════
  {
    level: "A1", category: "zahlen", name: "Zahlen", name_ru: "Числа", emoji: "🔢",
    words: [
      { id: "a1_zn_001", article: "-", word: "null",      translation: "0 — ноль"     },
      { id: "a1_zn_002", article: "-", word: "eins",      translation: "1 — один"     },
      { id: "a1_zn_003", article: "-", word: "zwei",      translation: "2 — два"      },
      { id: "a1_zn_004", article: "-", word: "drei",      translation: "3 — три"      },
      { id: "a1_zn_005", article: "-", word: "vier",      translation: "4 — четыре"   },
      { id: "a1_zn_006", article: "-", word: "fünf",      translation: "5 — пять"     },
      { id: "a1_zn_007", article: "-", word: "sechs",     translation: "6 — шесть"    },
      { id: "a1_zn_008", article: "-", word: "sieben",    translation: "7 — семь"     },
      { id: "a1_zn_009", article: "-", word: "acht",      translation: "8 — восемь"   },
      { id: "a1_zn_010", article: "-", word: "neun",      translation: "9 — девять"   },
      { id: "a1_zn_011", article: "-", word: "zehn",      translation: "10 — десять"  },
      { id: "a1_zn_012", article: "-", word: "elf",       translation: "11 — одиннадцать" },
      { id: "a1_zn_013", article: "-", word: "zwölf",          translation: "12 — двенадцать"      },
      { id: "a1_zn_020", article: "-", word: "dreizehn",       translation: "13 — тринадцать"      },
      { id: "a1_zn_021", article: "-", word: "vierzehn",       translation: "14 — четырнадцать"    },
      { id: "a1_zn_022", article: "-", word: "fünfzehn",       translation: "15 — пятнадцать"      },
      { id: "a1_zn_023", article: "-", word: "sechzehn",       translation: "16 — шестнадцать"     },
      { id: "a1_zn_024", article: "-", word: "siebzehn",       translation: "17 — семнадцать"      },
      { id: "a1_zn_025", article: "-", word: "achtzehn",       translation: "18 — восемнадцать"    },
      { id: "a1_zn_026", article: "-", word: "neunzehn",       translation: "19 — девятнадцать"    },
      { id: "a1_zn_014", article: "-", word: "zwanzig",        translation: "20 — двадцать"        },
      { id: "a1_zn_027", article: "-", word: "einundzwanzig",  translation: "21 — двадцать один"   },
      { id: "a1_zn_015", article: "-", word: "dreißig",        translation: "30 — тридцать"        },
      { id: "a1_zn_016", article: "-", word: "vierzig",        translation: "40 — сорок"           },
      { id: "a1_zn_017", article: "-", word: "fünfzig",        translation: "50 — пятьдесят"       },
      { id: "a1_zn_028", article: "-", word: "sechzig",        translation: "60 — шестьдесят"      },
      { id: "a1_zn_029", article: "-", word: "siebzig",        translation: "70 — семьдесят"       },
      { id: "a1_zn_030", article: "-", word: "achtzig",        translation: "80 — восемьдесят"     },
      { id: "a1_zn_031", article: "-", word: "neunzig",        translation: "90 — девяносто"       },
      { id: "a1_zn_018", article: "-", word: "hundert",        translation: "100 — сто"            },
      { id: "a1_zn_032", article: "-", word: "zweihundert",    translation: "200 — двести"         },
      { id: "a1_zn_019", article: "-", word: "tausend",        translation: "1000 — тысяча"        },
    ]
  },

  // ════════════════════════════════
  //  A1 — GEFÜHLE (Эмоции, без артикля)
  // ════════════════════════════════
  {
    level: "A1", category: "gefuehle", name: "Gefühle", name_ru: "Эмоции и состояния", emoji: "😊",
    words: [
      { id: "a1_gf_001", article: "-", word: "glücklich",   translation: "счастливый / счастлива"  },
      { id: "a1_gf_002", article: "-", word: "traurig",     translation: "грустный / грустна"      },
      { id: "a1_gf_003", article: "-", word: "wütend",      translation: "злой / злая"             },
      { id: "a1_gf_004", article: "-", word: "müde",        translation: "усталый / усталая"       },
      { id: "a1_gf_005", article: "-", word: "hungrig",     translation: "голодный / голодная"     },
      { id: "a1_gf_006", article: "-", word: "krank",       translation: "больной / больна"        },
      { id: "a1_gf_007", article: "-", word: "verliebt",    translation: "влюблённый / влюблена"   },
      { id: "a1_gf_008", article: "-", word: "ängstlich",   translation: "тревожный / тревожна"    },
      { id: "a1_gf_009", article: "-", word: "aufgeregt",   translation: "взволнованный / взволнована" },
      { id: "a1_gf_010", article: "-", word: "überrascht",  translation: "удивлённый / удивлена"   },
      { id: "a1_gf_011", article: "-", word: "nervös",      translation: "нервный / нервна"        },
      { id: "a1_gf_012", article: "-", word: "froh",        translation: "радостный / рада"        },
      { id: "a1_gf_013", article: "-", word: "langweilig",  translation: "скучный / скучно"        },
      { id: "a1_gf_014", article: "-", word: "gut",         translation: "хорошо / хорош"          },
      { id: "a1_gf_015", article: "-", word: "schlecht",    translation: "плохо / плохой"          },
    ]
  },

  // ════════════════════════════════
  //  A1 — ADJEKTIVE (Прилагательные, без артикля)
  // ════════════════════════════════
  {
    level: "A1", category: "adjektive", name: "Adjektive", name_ru: "Прилагательные", emoji: "🔤",
    words: [
      { id: "a1_adj_001", article: "-", word: "alt",          translation: "старый / старая"        },
      { id: "a1_adj_002", article: "-", word: "jung",         translation: "молодой / молодая"      },
      { id: "a1_adj_003", article: "-", word: "lang",         translation: "длинный / длинная"      },
      { id: "a1_adj_004", article: "-", word: "kurz",         translation: "короткий / короткая"    },
      { id: "a1_adj_005", article: "-", word: "groß",         translation: "большой / высокий"      },
      { id: "a1_adj_006", article: "-", word: "klein",        translation: "маленький / низкий"     },
      { id: "a1_adj_007", article: "-", word: "dick",         translation: "толстый / полный"       },
      { id: "a1_adj_008", article: "-", word: "dünn",         translation: "тонкий / худой"         },
      { id: "a1_adj_009", article: "-", word: "hässlich",     translation: "некрасивый"             },
      { id: "a1_adj_010", article: "-", word: "schön",        translation: "красивый / красивая"    },
      { id: "a1_adj_011", article: "-", word: "hell",         translation: "светлый / светлая"      },
      { id: "a1_adj_012", article: "-", word: "dunkel",       translation: "тёмный / тёмная"       },
      { id: "a1_adj_013", article: "-", word: "stark",        translation: "сильный / сильная"      },
      { id: "a1_adj_014", article: "-", word: "schwach",      translation: "слабый / слабая"        },
      { id: "a1_adj_015", article: "-", word: "reich",        translation: "богатый / богатая"      },
      { id: "a1_adj_016", article: "-", word: "arm",          translation: "бедный / бедная"        },
      { id: "a1_adj_017", article: "-", word: "schnell",      translation: "быстрый / быстрая"      },
      { id: "a1_adj_018", article: "-", word: "langsam",      translation: "медленный / медленная"  },
      { id: "a1_adj_019", article: "-", word: "laut",         translation: "громкий / громкая"      },
      { id: "a1_adj_020", article: "-", word: "leise",        translation: "тихий / тихая"          },
      { id: "a1_adj_021", article: "-", word: "neu",          translation: "новый / новая"          },
      { id: "a1_adj_022", article: "-", word: "interessant",  translation: "интересный"             },
      { id: "a1_adj_023", article: "-", word: "langweilig",   translation: "скучный / скучная"      },
      { id: "a1_adj_024", article: "-", word: "lustig",       translation: "смешной / весёлый"      },
      { id: "a1_adj_025", article: "-", word: "freundlich",   translation: "дружелюбный"            },
      { id: "a1_adj_026", article: "-", word: "unfreundlich", translation: "недружелюбный"          },
      { id: "a1_adj_027", article: "-", word: "sauber",       translation: "чистый / чистая"        },
      { id: "a1_adj_028", article: "-", word: "schmutzig",    translation: "грязный / грязная"      },
      { id: "a1_adj_029", article: "-", word: "glücklich",    translation: "счастливый"             },
      { id: "a1_adj_030", article: "-", word: "unglücklich",  translation: "несчастный"             },
    ]
  },

  // ════════════════════════════════
  //  A1 — MÖBEL & HAUSHALT (Мебель и быт)
  // ════════════════════════════════
  {
    level: "A1", category: "moebel", name: "Möbel & Haushalt", name_ru: "Мебель и быт", emoji: "🛋️",
    words: [
      { id: "a1_mb_001", article: "das", word: "Glas",         translation: "стакан"           },
      { id: "a1_mb_002", article: "das", word: "Messer",       translation: "нож"              },
      { id: "a1_mb_003", article: "das", word: "Sofa",         translation: "диван"            },
      { id: "a1_mb_004", article: "das", word: "Bett",         translation: "кровать"          },
      { id: "a1_mb_005", article: "das", word: "Buch",         translation: "книга"            },
      { id: "a1_mb_006", article: "das", word: "Heft",         translation: "тетрадь"          },
      { id: "a1_mb_007", article: "das", word: "Lineal",       translation: "линейка"          },
      { id: "a1_mb_008", article: "das", word: "Foto",         translation: "фото"             },
      { id: "a1_mb_009", article: "das", word: "Bild",         translation: "картина"          },
      { id: "a1_mb_010", article: "das", word: "Kissen",       translation: "подушка"          },
      { id: "a1_mb_011", article: "das", word: "Bücherregal",  translation: "книжная полка"    },
      { id: "a1_mb_012", article: "die", word: "Gabel",        translation: "вилка"            },
      { id: "a1_mb_013", article: "die", word: "Kanne",        translation: "чайник / кувшин"  },
      { id: "a1_mb_014", article: "die", word: "Tasse",        translation: "чашка / кружка"   },
      { id: "a1_mb_015", article: "die", word: "Pfanne",       translation: "сковородка"       },
      { id: "a1_mb_016", article: "die", word: "Vase",         translation: "ваза"             },
      { id: "a1_mb_017", article: "die", word: "Flasche",      translation: "бутылка"          },
      { id: "a1_mb_018", article: "die", word: "Lampe",        translation: "лампа"            },
      { id: "a1_mb_019", article: "die", word: "Tür",          translation: "дверь"            },
      { id: "a1_mb_020", article: "die", word: "Wanne",        translation: "ванна"            },
      { id: "a1_mb_021", article: "die", word: "Wand",         translation: "стена"            },
      { id: "a1_mb_022", article: "die", word: "Couch",        translation: "кушетка / диван"  },
      { id: "a1_mb_023", article: "die", word: "Telefonzelle", translation: "телефонная будка" },
      { id: "a1_mb_024", article: "der", word: "Löffel",       translation: "ложка"            },
      { id: "a1_mb_025", article: "der", word: "Teller",       translation: "тарелка"          },
      { id: "a1_mb_026", article: "der", word: "Kühlschrank",  translation: "холодильник"      },
      { id: "a1_mb_027", article: "der", word: "Herd",         translation: "плита"            },
      { id: "a1_mb_028", article: "die", word: "Handschelle",  translation: "наручник"         },
    ]
  },

  // ════════════════════════════════
  //  A1 — STADT ERWEITERT (Расширенный город)
  // ════════════════════════════════
  {
    level: "A1", category: "stadt2", name: "Stadt – mehr Orte", name_ru: "Город – больше мест", emoji: "🗺️",
    words: [
      { id: "a1_s2_001", article: "der", word: "Bahnhof",       translation: "вокзал"                    },
      { id: "a1_s2_002", article: "der", word: "Zoo",           translation: "зоопарк"                   },
      { id: "a1_s2_003", article: "der", word: "Baum",          translation: "дерево"                    },
      { id: "a1_s2_004", article: "der", word: "Kiosk",         translation: "киоск"                     },
      { id: "a1_s2_005", article: "der", word: "Spielplatz",    translation: "детская площадка"          },
      { id: "a1_s2_006", article: "der", word: "Zaun",          translation: "забор"                     },
      { id: "a1_s2_007", article: "der", word: "Fahrradweg",    translation: "велодорожка"               },
      { id: "a1_s2_008", article: "der", word: "Zebrastreifen", translation: "пешеходный переход"        },
      { id: "a1_s2_009", article: "der", word: "Fahrplan",      translation: "расписание"                },
      { id: "a1_s2_010", article: "die", word: "Post",          translation: "почта"                     },
      { id: "a1_s2_011", article: "die", word: "Straße",        translation: "улица"                     },
      { id: "a1_s2_012", article: "die", word: "Kirche",        translation: "церковь"                   },
      { id: "a1_s2_013", article: "die", word: "Bibliothek",    translation: "библиотека"                },
      { id: "a1_s2_014", article: "die", word: "Wiese",         translation: "луг / поляна"              },
      { id: "a1_s2_015", article: "die", word: "S-Bahn",        translation: "городская электричка"      },
      { id: "a1_s2_016", article: "die", word: "Tankstelle",    translation: "автозаправка"              },
      { id: "a1_s2_017", article: "die", word: "Schule",        translation: "школа"                     },
      { id: "a1_s2_018", article: "die", word: "Zeitung",       translation: "газета"                    },
      { id: "a1_s2_019", article: "die", word: "Moschee",       translation: "мечеть"                    },
      { id: "a1_s2_020", article: "die", word: "Polizei",       translation: "полиция"                   },
      { id: "a1_s2_021", article: "die", word: "Polizeiwache",  translation: "полицейский участок"       },
      { id: "a1_s2_022", article: "die", word: "Abfahrt",       translation: "отправление / выезд"       },
      { id: "a1_s2_023", article: "die", word: "Ankunft",       translation: "прибытие"                  },
      { id: "a1_s2_024", article: "der", word: "Kantenautomat", translation: "кофейный / торговый автомат"},
    ]
  },

  // ════════════════════════════════
  //  A1 — VERWANDTE ERWEITERT (Расширенная семья)
  // ════════════════════════════════
  {
    level: "A1", category: "verwandte", name: "Verwandte", name_ru: "Родственники", emoji: "👨‍👩‍👧‍👦",
    words: [
      { id: "a1_vw_001", article: "der", word: "Cousin",       translation: "двоюродный брат"          },
      { id: "a1_vw_002", article: "die", word: "Cousine",      translation: "двоюродная сестра"        },
      { id: "a1_vw_003", article: "der", word: "Ehemann",      translation: "муж / супруг"             },
      { id: "a1_vw_004", article: "die", word: "Ehefrau",      translation: "жена / супруга"           },
      { id: "a1_vw_005", article: "die", word: "Eltern",       translation: "родители (мн. ч.)"        },
      { id: "a1_vw_006", article: "die", word: "Geschwister",  translation: "братья и сёстры (мн. ч.)" },
      { id: "a1_vw_007", article: "die", word: "Großeltern",   translation: "дедушка и бабушка (мн.)"  },
      { id: "a1_vw_008", article: "die", word: "Verwandten",   translation: "родственники (мн. ч.)"    },
      { id: "a1_vw_009", article: "die", word: "Hochzeit",     translation: "свадьба"                  },
      { id: "a1_vw_010", article: "-",   word: "ledig",        translation: "холостой / незамужняя"    },
      { id: "a1_vw_011", article: "-",   word: "verheiratet",  translation: "женат / замужем"          },
      { id: "a1_vw_012", article: "die", word: "Beziehung",    translation: "отношения"                },
      { id: "a1_vw_013", article: "die", word: "Scheidung",    translation: "развод"                   },
    ]
  },

  // ════════════════════════════════
  //  A1 — DAS WETTER (Погода)
  // ════════════════════════════════
  {
    level: "A1", category: "wetter", name: "Das Wetter", name_ru: "Погода", emoji: "⛅",
    words: [
      { id: "a1_we_001", article: "das", word: "Wetter",      translation: "погода"              },
      { id: "a1_we_002", article: "der", word: "Wind",        translation: "ветер"               },
      { id: "a1_we_003", article: "der", word: "Regen",       translation: "дождь"               },
      { id: "a1_we_004", article: "der", word: "Schnee",      translation: "снег"                },
      { id: "a1_we_005", article: "die", word: "Wolke",       translation: "облако"              },
      { id: "a1_we_006", article: "das", word: "Gewitter",    translation: "гроза"               },
      { id: "a1_we_007", article: "die", word: "Sonne",       translation: "солнце"              },
      { id: "a1_we_008", article: "die", word: "Temperatur",  translation: "температура"         },
      { id: "a1_we_009", article: "der", word: "Frost",       translation: "мороз"               },
      { id: "a1_we_010", article: "der", word: "Nebel",       translation: "туман"               },
      { id: "a1_we_011", article: "-",   word: "sonnig",      translation: "солнечно"            },
      { id: "a1_we_012", article: "-",   word: "bewölkt",     translation: "пасмурно"            },
      { id: "a1_we_013", article: "-",   word: "windig",      translation: "ветрено"             },
      { id: "a1_we_014", article: "-",   word: "regnerisch",  translation: "дождливо"            },
      { id: "a1_we_015", article: "-",   word: "kalt",        translation: "холодно"             },
      { id: "a1_we_016", article: "-",   word: "warm",        translation: "тепло"               },
      { id: "a1_we_017", article: "-",   word: "heiß",        translation: "жарко"               },
      { id: "a1_we_018", article: "-",   word: "kühl",        translation: "прохладно"           },
    ]
  },

  // ════════════════════════════════
  //  A1 — MONATE (Месяцы)
  // ════════════════════════════════
  {
    level: "A1", category: "monate", name: "Monate", name_ru: "Месяцы", emoji: "📆",
    words: [
      { id: "a1_mo_001", article: "-", word: "Januar",    translation: "январь (im Januar)"      },
      { id: "a1_mo_002", article: "-", word: "Februar",   translation: "февраль (im Februar)"    },
      { id: "a1_mo_003", article: "-", word: "März",      translation: "март (im März)"          },
      { id: "a1_mo_004", article: "-", word: "April",     translation: "апрель (im April)"       },
      { id: "a1_mo_005", article: "-", word: "Mai",       translation: "май (im Mai)"            },
      { id: "a1_mo_006", article: "-", word: "Juni",      translation: "июнь (im Juni)"          },
      { id: "a1_mo_007", article: "-", word: "Juli",      translation: "июль (im Juli)"          },
      { id: "a1_mo_008", article: "-", word: "August",    translation: "август (im August)"      },
      { id: "a1_mo_009", article: "-", word: "September", translation: "сентябрь (im September)" },
      { id: "a1_mo_010", article: "-", word: "Oktober",   translation: "октябрь (im Oktober)"    },
      { id: "a1_mo_011", article: "-", word: "November",  translation: "ноябрь (im November)"    },
      { id: "a1_mo_012", article: "-", word: "Dezember",  translation: "декабрь (im Dezember)"   },
    ]
  },

  // ════════════════════════════════
  //  A1 — JAHRESZEITEN & TAGESZEITEN
  // ════════════════════════════════
  {
    level: "A1", category: "jahreszeiten", name: "Jahreszeiten & Zeit", name_ru: "Времена года и время", emoji: "🌸",
    words: [
      { id: "a1_jz_001", article: "der", word: "Frühling",   translation: "весна (warm)"             },
      { id: "a1_jz_002", article: "der", word: "Sommer",     translation: "лето (heiß)"              },
      { id: "a1_jz_003", article: "der", word: "Herbst",     translation: "осень (kühl)"             },
      { id: "a1_jz_004", article: "der", word: "Winter",     translation: "зима (kalt)"              },
      { id: "a1_jz_005", article: "der", word: "Morgen",     translation: "утро (6–10 Uhr)"          },
      { id: "a1_jz_006", article: "der", word: "Vormittag",  translation: "первая половина дня (10–12)"},
      { id: "a1_jz_007", article: "der", word: "Mittag",     translation: "полдень (12–14 Uhr)"      },
      { id: "a1_jz_008", article: "der", word: "Nachmittag", translation: "после полудня (14–18 Uhr)" },
      { id: "a1_jz_009", article: "der", word: "Abend",      translation: "вечер (18–22 Uhr)"        },
      { id: "a1_jz_010", article: "die", word: "Nacht",      translation: "ночь (22–6 Uhr)"          },
      { id: "a1_jz_011", article: "das", word: "Jahr",       translation: "год"                      },
      { id: "a1_jz_012", article: "-",   word: "vorgestern", translation: "позавчера"                },
      { id: "a1_jz_013", article: "-",   word: "gestern",    translation: "вчера"                    },
      { id: "a1_jz_014", article: "-",   word: "heute",      translation: "сегодня"                  },
      { id: "a1_jz_015", article: "-",   word: "morgen",     translation: "завтра"                   },
      { id: "a1_jz_016", article: "-",   word: "übermorgen", translation: "послезавтра"              },
    ]
  },

  // ════════════════════════════════
  //  A1 — SPRACHEN (Языки)
  // ════════════════════════════════
  {
    level: "A1", category: "sprachen", name: "Sprachen", name_ru: "Языки", emoji: "🗣️",
    words: [
      { id: "a1_sp_001", article: "-", word: "Deutsch",       translation: "немецкий язык"     },
      { id: "a1_sp_002", article: "-", word: "Russisch",      translation: "русский язык"      },
      { id: "a1_sp_003", article: "-", word: "Englisch",      translation: "английский язык"   },
      { id: "a1_sp_004", article: "-", word: "Französisch",   translation: "французский язык"  },
      { id: "a1_sp_005", article: "-", word: "Italienisch",   translation: "итальянский язык"  },
      { id: "a1_sp_006", article: "-", word: "Türkisch",      translation: "турецкий язык"     },
      { id: "a1_sp_007", article: "-", word: "Arabisch",      translation: "арабский язык"     },
      { id: "a1_sp_008", article: "-", word: "Spanisch",      translation: "испанский язык"    },
      { id: "a1_sp_009", article: "-", word: "Persisch",      translation: "персидский язык"   },
      { id: "a1_sp_010", article: "-", word: "Polnisch",      translation: "польский язык"     },
      { id: "a1_sp_011", article: "-", word: "Chinesisch",    translation: "китайский язык"    },
      { id: "a1_sp_012", article: "-", word: "Ukrainisch",    translation: "украинский язык"   },
    ]
  },

  // ════════════════════════════════
  //  A1 — LÄNDER (Страны)
  // ════════════════════════════════
  {
    level: "A1", category: "laender", name: "Länder", name_ru: "Страны", emoji: "🌍",
    words: [
      { id: "a1_la_001", article: "-",   word: "Deutschland",  translation: "Германия"   },
      { id: "a1_la_002", article: "-",   word: "Russland",     translation: "Россия"     },
      { id: "a1_la_003", article: "-",   word: "Österreich",   translation: "Австрия"    },
      { id: "a1_la_004", article: "-",   word: "Frankreich",   translation: "Франция"    },
      { id: "a1_la_005", article: "-",   word: "Italien",      translation: "Италия"     },
      { id: "a1_la_006", article: "-",   word: "Spanien",      translation: "Испания"    },
      { id: "a1_la_007", article: "die", word: "Türkei",       translation: "Турция"     },
      { id: "a1_la_008", article: "-",   word: "Polen",        translation: "Польша"     },
      { id: "a1_la_009", article: "die", word: "Ukraine",      translation: "Украина"    },
      { id: "a1_la_010", article: "die", word: "Schweiz",      translation: "Швейцария"  },
      { id: "a1_la_011", article: "-",   word: "Kanada",       translation: "Канада"     },
      { id: "a1_la_012", article: "-",   word: "China",        translation: "Китай"      },
      { id: "a1_la_013", article: "-",   word: "Afghanistan",  translation: "Афганистан" },
      { id: "a1_la_014", article: "-",   word: "Senegal",      translation: "Сенегал"    },
      { id: "a1_la_015", article: "-",   word: "Nigeria",      translation: "Нигерия"    },
      { id: "a1_la_016", article: "-",   word: "Ghana",        translation: "Гана"       },
      { id: "a1_la_017", article: "-",   word: "Eritrea",      translation: "Эритрея"    },
      { id: "a1_la_018", article: "-",   word: "Marokko",      translation: "Марокко"    },
      { id: "a1_la_019", article: "-",   word: "Dänemark",     translation: "Дания"      },
      { id: "a1_la_020", article: "-",   word: "Belgien",      translation: "Бельгия"    },
    ]
  },

  // ════════════════════════════════
  //  A1 — FAHRZEUGE ERWEITERT (Расширенный транспорт)
  // ════════════════════════════════
  {
    level: "A1", category: "fahrzeuge2", name: "Fahrzeuge – mehr", name_ru: "Транспорт – расширенный", emoji: "🚁",
    words: [
      { id: "a1_f2_001", article: "der", word: "Roller",         translation: "самокат / скутер"          },
      { id: "a1_f2_002", article: "der", word: "LKW",            translation: "грузовик (Lastkraftwagen)" },
      { id: "a1_f2_003", article: "der", word: "Traktor",        translation: "трактор"                   },
      { id: "a1_f2_004", article: "der", word: "Bagger",         translation: "экскаватор"                },
      { id: "a1_f2_005", article: "der", word: "Gabelstapler",   translation: "вилочный погрузчик"        },
      { id: "a1_f2_006", article: "der", word: "Hubschrauber",   translation: "вертолёт"                  },
      { id: "a1_f2_007", article: "der", word: "Heißluftballon", translation: "воздушный шар"             },
      { id: "a1_f2_008", article: "der", word: "ICE",            translation: "скоростной поезд"          },
      { id: "a1_f2_009", article: "die", word: "Seilbahn",       translation: "канатная дорога"           },
      { id: "a1_f2_010", article: "die", word: "Fähre",          translation: "паром"                     },
      { id: "a1_f2_011", article: "das", word: "Boot",           translation: "лодка"                     },
      { id: "a1_f2_012", article: "das", word: "Wohnmobil",      translation: "дом на колёсах"            },
      { id: "a1_f2_013", article: "das", word: "Motorboot",      translation: "моторная лодка"            },
      { id: "a1_f2_014", article: "das", word: "Segelboot",      translation: "парусная лодка"            },
      { id: "a1_f2_015", article: "das", word: "Kanu",           translation: "каноэ"                     },
      { id: "a1_f2_016", article: "das", word: "Kajak",          translation: "каяк"                      },
      { id: "a1_f2_017", article: "das", word: "U-Boot",         translation: "подводная лодка"           },
    ]
  },

  // ════════════════════════════════
  //  A1 — MÖBEL 2 (der-Wörter)
  // ════════════════════════════════
  {
    level: "A1", category: "moebel2", name: "Möbel & Zimmer", name_ru: "Мебель и комната (der)", emoji: "🪑",
    words: [
      { id: "a1_m2_001", article: "der", word: "Tisch",      translation: "стол"              },
      { id: "a1_m2_002", article: "der", word: "Stuhl",      translation: "стул"              },
      { id: "a1_m2_003", article: "der", word: "Sessel",     translation: "кресло"            },
      { id: "a1_m2_004", article: "der", word: "Schrank",    translation: "шкаф"              },
      { id: "a1_m2_005", article: "der", word: "Ofen",       translation: "печь / плита"      },
      { id: "a1_m2_006", article: "der", word: "Leuchter",   translation: "подсвечник / люстра"},
      { id: "a1_m2_007", article: "der", word: "Fernseher",  translation: "телевизор"         },
      { id: "a1_m2_008", article: "der", word: "Hocker",     translation: "табурет"           },
      { id: "a1_m2_009", article: "der", word: "Computer",   translation: "компьютер"         },
      { id: "a1_m2_010", article: "der", word: "Schlüssel",  translation: "ключ"              },
      { id: "a1_m2_011", article: "der", word: "Topf",       translation: "кастрюля"          },
      { id: "a1_m2_012", article: "der", word: "Stift",      translation: "ручка / карандаш"  },
      { id: "a1_m2_013", article: "der", word: "Brief",      translation: "письмо"            },
      { id: "a1_m2_014", article: "der", word: "Pinsel",     translation: "кисть"             },
    ]
  },

  // ════════════════════════════════
  //  A1 — ORTE (das-Wörter)
  // ════════════════════════════════
  {
    level: "A1", category: "orte_das", name: "Orte (das)", name_ru: "Места (das-слова)", emoji: "🏨",
    words: [
      { id: "a1_od_001", article: "das", word: "Kino",       translation: "кинотеатр"    },
      { id: "a1_od_002", article: "das", word: "Hotel",      translation: "отель"        },
      { id: "a1_od_003", article: "das", word: "Rathaus",    translation: "ратуша"       },
      { id: "a1_od_004", article: "das", word: "Restaurant", translation: "ресторан"     },
      { id: "a1_od_005", article: "das", word: "Café",       translation: "кафе"         },
      { id: "a1_od_006", article: "das", word: "Haus",       translation: "дом"          },
      { id: "a1_od_007", article: "das", word: "Dach",       translation: "крыша"        },
      { id: "a1_od_008", article: "das", word: "Gleis",      translation: "ж/д путь / платформа" },
    ]
  },

  // ════════════════════════════════
  //  A1 — ESSEN ERWEITERT
  // ════════════════════════════════
  {
    level: "A1", category: "essen2", name: "Essen – mehr", name_ru: "Еда – расширенная", emoji: "🍽️",
    words: [
      { id: "a1_e2_001", article: "der", word: "Döner",     translation: "донер-кебаб"    },
      { id: "a1_e2_002", article: "der", word: "Pfeffer",   translation: "перец (специя)" },
      { id: "a1_e2_003", article: "der", word: "Mais",      translation: "кукуруза"       },
      { id: "a1_e2_004", article: "der", word: "Speck",     translation: "бекон"          },
      { id: "a1_e2_005", article: "der", word: "Schinken",  translation: "ветчина"        },
      { id: "a1_e2_006", article: "der", word: "Lachs",     translation: "лосось"         },
      { id: "a1_e2_007", article: "der", word: "Ketchup",   translation: "кетчуп"         },
      { id: "a1_e2_008", article: "der", word: "Hamburger", translation: "гамбургер"      },
      { id: "a1_e2_009", article: "der", word: "Toast",     translation: "тост"           },
      { id: "a1_e2_010", article: "die", word: "Ananas",    translation: "ананас"         },
      { id: "a1_e2_011", article: "die", word: "Waffel",    translation: "вафля"          },
      { id: "a1_e2_012", article: "die", word: "Torte",     translation: "торт"           },
      { id: "a1_e2_013", article: "das", word: "Eis",       translation: "мороженое"      },
      { id: "a1_e2_014", article: "der", word: "Ticket",    translation: "билет"          },
    ]
  },

  // ════════════════════════════════
  //  A1 — MENSCHEN (Люди)
  // ════════════════════════════════
  {
    level: "A1", category: "menschen", name: "Menschen", name_ru: "Люди", emoji: "👥",
    words: [
      { id: "a1_me_001", article: "der", word: "Junge",     translation: "мальчик"           },
      { id: "a1_me_002", article: "das", word: "Mädchen",   translation: "девочка"           },
      { id: "a1_me_003", article: "der", word: "Freund",    translation: "друг / парень"     },
      { id: "a1_me_004", article: "die", word: "Freundin",  translation: "подруга / девушка" },
      { id: "a1_me_005", article: "der", word: "Enkel",     translation: "внук"              },
      { id: "a1_me_006", article: "die", word: "Enkelin",   translation: "внучка"            },
      { id: "a1_me_007", article: "der", word: "Kollege",   translation: "коллега (м)"       },
      { id: "a1_me_008", article: "die", word: "Kollegin",  translation: "коллега (ж)"       },
      { id: "a1_me_009", article: "der", word: "Nachbar",   translation: "сосед"             },
      { id: "a1_me_010", article: "die", word: "Nachbarin", translation: "соседка"           },
      { id: "a1_me_011", article: "der", word: "Rentner",   translation: "пенсионер"         },
      { id: "a1_me_012", article: "der", word: "Anwalt",    translation: "адвокат"           },
      { id: "a1_me_013", article: "der", word: "Schüler",   translation: "ученик"            },
      { id: "a1_me_014", article: "die", word: "Schülerin", translation: "ученица"           },
    ]
  },

  // ════════════════════════════════
  //  A1 — GRÜßE (Приветствия)
  // ════════════════════════════════
  {
    level: "A1", category: "gruesse", name: "Grüße & Begrüßung", name_ru: "Приветствия", emoji: "👋",
    words: [
      { id: "a1_gu_001", article: "-", word: "Hallo",           translation: "привет"                  },
      { id: "a1_gu_002", article: "-", word: "Tschüss",         translation: "пока"                    },
      { id: "a1_gu_003", article: "-", word: "Auf Wiedersehen", translation: "до свидания (форм.)"     },
      { id: "a1_gu_004", article: "-", word: "Guten Morgen",    translation: "доброе утро"             },
      { id: "a1_gu_005", article: "-", word: "Guten Tag",       translation: "добрый день"             },
      { id: "a1_gu_006", article: "-", word: "Guten Abend",     translation: "добрый вечер"            },
      { id: "a1_gu_007", article: "-", word: "Gute Nacht",      translation: "спокойной ночи"          },
      { id: "a1_gu_008", article: "-", word: "Bitte",           translation: "пожалуйста / прошу"      },
      { id: "a1_gu_009", article: "-", word: "Danke",           translation: "спасибо"                 },
      { id: "a1_gu_010", article: "-", word: "Entschuldigung",  translation: "извините / простите"     },
      { id: "a1_gu_011", article: "-", word: "Es tut mir leid", translation: "мне жаль"               },
      { id: "a1_gu_012", article: "-", word: "Ja",              translation: "да"                      },
      { id: "a1_gu_013", article: "-", word: "Nein",            translation: "нет"                     },
    ]
  },

  // ════════════════════════════════
  //  A1 — TIERE 2 (Животные расширенные)
  // ════════════════════════════════
  {
    level: "A1", category: "tiere2", name: "Tiere – mehr", name_ru: "Животные – расширенные", emoji: "🐸",
    words: [
      { id: "a1_t2_001", article: "der", word: "Frosch",    translation: "лягушка"           },
      { id: "a1_t2_002", article: "der", word: "Igel",      translation: "ёж"               },
      { id: "a1_t2_003", article: "der", word: "Esel",      translation: "осёл"             },
      { id: "a1_t2_004", article: "die", word: "Mücke",     translation: "комар"            },
      { id: "a1_t2_005", article: "die", word: "Maus",      translation: "мышь"             },
      { id: "a1_t2_006", article: "die", word: "Spinne",    translation: "паук"             },
      { id: "a1_t2_007", article: "das", word: "Pony",      translation: "пони"             },
      { id: "a1_t2_008", article: "das", word: "Rind",      translation: "бык / корова (скот)" },
      { id: "a1_t2_009", article: "die", word: "Gans",      translation: "гусь"             },
      { id: "a1_t2_010", article: "das", word: "Kaninchen", translation: "кролик"           },
      { id: "a1_t2_011", article: "der", word: "Hahn",      translation: "петух"            },
      { id: "a1_t2_012", article: "die", word: "Ziege",     translation: "коза"             },
    ]
  },

  // ════════════════════════════════
  //  A1 — WICHTIGE VERBEN (Важные глаголы A1)
  // ════════════════════════════════
  {
    level: "A1", category: "verben", name: "Wichtige Verben", name_ru: "Важные глаголы", emoji: "🏃",
    words: [
      { id: "a1_vb_001", article: "-", word: "gehen",      translation: "ходить / идти"           },
      { id: "a1_vb_002", article: "-", word: "kommen",     translation: "приходить / приезжать"   },
      { id: "a1_vb_003", article: "-", word: "fahren",     translation: "ехать (на транспорте)"   },
      { id: "a1_vb_004", article: "-", word: "fliegen",    translation: "летать"                  },
      { id: "a1_vb_005", article: "-", word: "laufen",     translation: "бегать / ходить пешком"  },
      { id: "a1_vb_006", article: "-", word: "schwimmen",  translation: "плавать"                 },
      { id: "a1_vb_007", article: "-", word: "trinken",    translation: "пить"                    },
      { id: "a1_vb_008", article: "-", word: "essen",      translation: "есть / кушать"           },
      { id: "a1_vb_009", article: "-", word: "schreiben",  translation: "писать"                  },
      { id: "a1_vb_010", article: "-", word: "lesen",      translation: "читать"                  },
      { id: "a1_vb_011", article: "-", word: "lernen",     translation: "учить / учиться"         },
      { id: "a1_vb_012", article: "-", word: "spielen",    translation: "играть"                  },
      { id: "a1_vb_013", article: "-", word: "geben",      translation: "давать"                  },
      { id: "a1_vb_014", article: "-", word: "nehmen",     translation: "брать"                   },
      { id: "a1_vb_015", article: "-", word: "kaufen",     translation: "покупать"                },
      { id: "a1_vb_016", article: "-", word: "brauchen",   translation: "нуждаться / нужно"       },
      { id: "a1_vb_017", article: "-", word: "hören",      translation: "слушать / слышать"       },
      { id: "a1_vb_018", article: "-", word: "sehen",      translation: "видеть / смотреть"       },
      { id: "a1_vb_019", article: "-", word: "sagen",      translation: "говорить / сказать"      },
      { id: "a1_vb_020", article: "-", word: "fragen",     translation: "спрашивать"              },
      { id: "a1_vb_021", article: "-", word: "antworten",  translation: "отвечать"                },
      { id: "a1_vb_022", article: "-", word: "machen",     translation: "делать"                  },
      { id: "a1_vb_023", article: "-", word: "suchen",     translation: "искать"                  },
      { id: "a1_vb_024", article: "-", word: "finden",     translation: "находить"                },
      { id: "a1_vb_025", article: "-", word: "bleiben",    translation: "оставаться"              },
      { id: "a1_vb_026", article: "-", word: "denken",     translation: "думать"                  },
      { id: "a1_vb_027", article: "-", word: "singen",     translation: "петь"                    },
      { id: "a1_vb_028", article: "-", word: "tanzen",     translation: "танцевать"               },
      { id: "a1_vb_029", article: "-", word: "schlafen",   translation: "спать"                   },
      { id: "a1_vb_030", article: "-", word: "wohnen",     translation: "жить / проживать"        },
      { id: "a1_vb_031", article: "-", word: "arbeiten",   translation: "работать"                },
      { id: "a1_vb_032", article: "-", word: "beginnen",   translation: "начинать"                },
      { id: "a1_vb_033", article: "-", word: "helfen",     translation: "помогать"                },
      { id: "a1_vb_034", article: "-", word: "treffen",    translation: "встречать / встречаться" },
      { id: "a1_vb_035", article: "-", word: "rufen",      translation: "звать / звонить"         },
    ]
  },

  // ════════════════════════════════
  //  A1 — AM BAHNHOF (На вокзале)
  // ════════════════════════════════
  {
    level: "A1", category: "bahnhof", name: "Am Bahnhof", name_ru: "На вокзале", emoji: "🚉",
    words: [
      { id: "a1_bh_001", article: "der", word: "Fahrkartenautomat", translation: "автомат для билетов"     },
      { id: "a1_bh_002", article: "die", word: "Fahrkarte",         translation: "билет на транспорт"      },
      { id: "a1_bh_003", article: "die", word: "Anzeigetafel",      translation: "информационное табло"    },
      { id: "a1_bh_004", article: "die", word: "Zugnummer",         translation: "номер поезда"            },
      { id: "a1_bh_005", article: "die", word: "Zielstation",       translation: "конечная станция"        },
      { id: "a1_bh_006", article: "die", word: "Ticketkontrolle",   translation: "контроль билетов"        },
      { id: "a1_bh_007", article: "der", word: "Serviceschalter",   translation: "стойка обслуживания"     },
      { id: "a1_bh_008", article: "die", word: "Stationen",         translation: "станции (мн. ч.)"        },
      { id: "a1_bh_009", article: "die", word: "Uhrzeit",           translation: "время / который час"     },
      { id: "a1_bh_010", article: "die", word: "Minute",            translation: "минута"                  },
      { id: "a1_bh_011", article: "die", word: "Stunde",            translation: "час"                     },
      { id: "a1_bh_012", article: "der", word: "Markt",             translation: "рынок / ярмарка"         },
    ]
  },

  // ════════════════════════════════
  //  A1 — NÜTZLICHE WÖRTER (Полезные слова)
  // ════════════════════════════════
  {
    level: "A1", category: "nuetzlich", name: "Nützliche Wörter", name_ru: "Полезные слова", emoji: "💡",
    words: [
      { id: "a1_nw_001", article: "die", word: "Musik",          translation: "музыка"                 },
      { id: "a1_nw_002", article: "die", word: "Ruhe",           translation: "тишина / покой"         },
      { id: "a1_nw_003", article: "der", word: "Spaß",           translation: "удовольствие / веселье" },
      { id: "a1_nw_004", article: "das", word: "Zentrum",        translation: "центр города"           },
      { id: "a1_nw_005", article: "die", word: "Haustür",        translation: "входная дверь"          },
      { id: "a1_nw_006", article: "die", word: "Schere",         translation: "ножницы"                },
      { id: "a1_nw_007", article: "das", word: "Museum",         translation: "музей"                  },
      { id: "a1_nw_008", article: "der", word: "Kuli",           translation: "шариковая ручка"        },
      { id: "a1_nw_009", article: "das", word: "Handy",          translation: "мобильный телефон"      },
      { id: "a1_nw_010", article: "das", word: "Verkehrsmittel", translation: "средство транспорта"    },
      { id: "a1_nw_011", article: "die", word: "Parkgebühren",   translation: "плата за парковку"      },
      { id: "a1_nw_012", article: "-",   word: "praktisch",      translation: "практичный"             },
      { id: "a1_nw_013", article: "-",   word: "öffentlich",     translation: "общественный"           },
      { id: "a1_nw_014", article: "-",   word: "teuer",          translation: "дорогой"                },
      { id: "a1_nw_015", article: "-",   word: "billig",         translation: "дешёвый"                },
      { id: "a1_nw_016", article: "-",   word: "wichtig",        translation: "важный"                 },
      { id: "a1_nw_017", article: "-",   word: "richtig",        translation: "правильный"             },
      { id: "a1_nw_018", article: "-",   word: "falsch",         translation: "неправильный"           },
      { id: "a1_nw_019", article: "-",   word: "schwer",         translation: "тяжёлый / сложный"      },
      { id: "a1_nw_020", article: "-",   word: "leicht",         translation: "лёгкий"                 },
      { id: "a1_nw_021", article: "-",   word: "fit",            translation: "в форме / бодрый"       },
    ]
  },

  // Расширение Länder: дополнительные страны
  {
    level: "A1", category: "laender2", name: "Länder – mehr", name_ru: "Страны – ещё", emoji: "🌐",
    words: [
      { id: "a1_l2_001", article: "die", word: "Slowakei",       translation: "Словакия"        },
      { id: "a1_l2_002", article: "die", word: "Niederlande",    translation: "Нидерланды"      },
      { id: "a1_l2_003", article: "der", word: "Iran",           translation: "Иран"            },
      { id: "a1_l2_004", article: "der", word: "Sudan",          translation: "Судан"           },
      { id: "a1_l2_005", article: "der", word: "Irak",           translation: "Ирак"            },
      { id: "a1_l2_006", article: "-",   word: "Uganda",         translation: "Уганда"          },
      { id: "a1_l2_007", article: "die", word: "USA",            translation: "США"             },
      { id: "a1_l2_008", article: "-",   word: "Saudi-Arabien",  translation: "Саудовская Аравия"},
      { id: "a1_l2_009", article: "-",   word: "Vietnam",        translation: "Вьетнам"         },
      { id: "a1_l2_010", article: "-",   word: "Japan",          translation: "Япония"          },
    ]
  },

];
