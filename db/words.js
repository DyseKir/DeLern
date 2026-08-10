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
      { id: "a1_tr_011", article: "-",   word: "zu Fuß",     translation: "пешком"    },
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
      { id: "a1_s2_024", article: "der", word: "Kaffeeautomat", translation: "кофейный автомат"},
      { id: "a1_s2_025", article: "die", word: "Arztpraxis",   translation: "кабинет врача / клиника"   },
      { id: "a1_s2_026", article: "der", word: "Platz",        translation: "площадь / место"           },
      { id: "a1_s2_027", article: "die", word: "Rakete",       translation: "ракета"                    },
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
    level: "A1", category: "familie", name: "Familie", name_ru: "Семья", emoji: "👨‍👩‍👧", ruleId: "a1_gr_012",
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
      { id: "a1_wt_009", article: "die", word: "Woche",      translation: "неделя"       },
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
    level: "A1", category: "vorstellen", name: "Sich vorstellen", name_ru: "Знакомство", emoji: "🤝", ruleId: "a1_gr_011",
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
    level: "A1", category: "koerper", name: "Körper & Aussehen", name_ru: "Тело и внешность", emoji: "🧍", ruleId: "a1_gr_001",
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
      { id: "a1_kb_019", article: "die", word: "Faust",    translation: "кулак"               },
      { id: "a1_kb_022", article: "die", word: "Stirn",      translation: "лоб"                  },
      { id: "a1_kb_023", article: "die", word: "Augenbraue", translation: "бровь"                },
      { id: "a1_kb_024", article: "das", word: "Kinn",       translation: "подбородок"           },
      { id: "a1_kb_025", article: "die", word: "Wange",      translation: "щека"                 },
      { id: "a1_kb_026", article: "die", word: "Brust",      translation: "грудь"                },
      { id: "a1_kb_027", article: "der", word: "Zeh",        translation: "палец ноги"           },
      { id: "a1_kb_028", article: "der", word: "Ellbogen",   translation: "локоть"               },
      { id: "a1_kb_029", article: "der", word: "Po",         translation: "попа / ягодицы (разг.)"},
      { id: "a1_kb_030", article: "der", word: "Körper",     translation: "тело"                 },
      // Лицо
      { id: "a1_kb_031", article: "die", word: "Zunge",        translation: "язык"                 },
      { id: "a1_kb_032", article: "der", word: "Schnurrbart",  translation: "усы"                  },
      { id: "a1_kb_033", article: "der", word: "Bart",         translation: "борода"               },
      { id: "a1_kb_034", article: "die", word: "Lippe",        translation: "губа"                 },
      // Верхняя часть тела
      { id: "a1_kb_035", article: "der", word: "Oberkörper",   translation: "верхняя часть тела"   },
      { id: "a1_kb_036", article: "der", word: "Unterkörper",  translation: "нижняя часть тела"    },
      { id: "a1_kb_037", article: "der", word: "Nacken",       translation: "затылок / задняя часть шеи" },
      { id: "a1_kb_038", article: "das", word: "Handgelenk",   translation: "запястье"             },
      { id: "a1_kb_039", article: "die", word: "Taille",       translation: "талия"                },
      // Нижняя часть тела
      { id: "a1_kb_040", article: "der", word: "Hintern",      translation: "зад (разг.)"          },
      { id: "a1_kb_041", article: "der", word: "Oberschenkel", translation: "бедро"                },
      { id: "a1_kb_042", article: "der", word: "Unterschenkel",translation: "голень"               },
      { id: "a1_kb_043", article: "die", word: "Kniekehle",    translation: "подколенная ямка"     },
      { id: "a1_kb_044", article: "die", word: "Wade",         translation: "икра (ноги)"          },
      { id: "a1_kb_045", article: "das", word: "Fußgelenk",    translation: "голеностоп"           },
      { id: "a1_kb_046", article: "der", word: "Knöchel",      translation: "лодыжка / щиколотка"  },
      // Внутренние органы
      { id: "a1_kb_047", article: "das", word: "Herz",         translation: "сердце"               },
      { id: "a1_kb_048", article: "die", word: "Lunge",        translation: "лёгкое"               },
      { id: "a1_kb_049", article: "das", word: "Gehirn",       translation: "мозг"                 },
      { id: "a1_kb_050", article: "die", word: "Niere",        translation: "почка"                },
      { id: "a1_kb_051", article: "der", word: "Magen",        translation: "желудок"              },
      { id: "a1_kb_052", article: "der", word: "Darm",         translation: "кишечник"             },
      { id: "a1_kb_053", article: "die", word: "Leber",        translation: "печень"               },
      // Прочее
      { id: "a1_kb_054", article: "das", word: "Blut",         translation: "кровь"                },
      { id: "a1_kb_055", article: "der", word: "Muskel",       translation: "мышца"                },
      { id: "a1_kb_056", article: "der", word: "Knochen",      translation: "кость"                },
    ]
  },

  // ════════════════════════════════
  //  A1 — KÖRPER PLURAL (Тело — мн. число, разблокируется после koerper)
  // ════════════════════════════════
  {
    level: "A1", category: "koerper_plural",
    name: "Körper – sein/ihr", name_ru: "Тело – чьё? (sein/ihr)",
    emoji: "🧍", requiresCategory: "koerper", mode: "possessive", ruleId: "a1_gr_031",
    words: [
      // der → sein / ihr
      { id: "a1_kp2_001", article: "der", word: "Kopf",     translation: "голова (der)"        },
      { id: "a1_kp2_002", article: "der", word: "Arm",      translation: "рука (der)"          },
      { id: "a1_kp2_003", article: "der", word: "Bauch",    translation: "живот (der)"         },
      { id: "a1_kp2_004", article: "der", word: "Rücken",   translation: "спина (der)"         },
      { id: "a1_kp2_005", article: "der", word: "Fuß",      translation: "ступня (der)"        },
      { id: "a1_kp2_006", article: "der", word: "Hals",     translation: "шея (der)"           },
      { id: "a1_kp2_007", article: "der", word: "Mund",     translation: "рот (der)"           },
      { id: "a1_kp2_008", article: "der", word: "Zahn",     translation: "зуб (der)"           },
      { id: "a1_kp2_009", article: "der", word: "Finger",   translation: "палец (der)"         },
      // das → sein / ihr
      { id: "a1_kp2_010", article: "das", word: "Bein",     translation: "нога (das)"          },
      { id: "a1_kp2_011", article: "das", word: "Auge",     translation: "глаз (das)"          },
      { id: "a1_kp2_012", article: "das", word: "Ohr",      translation: "ухо (das)"           },
      { id: "a1_kp2_013", article: "das", word: "Knie",     translation: "колено (das)"        },
      { id: "a1_kp2_014", article: "das", word: "Gesicht",  translation: "лицо (das)"          },
      { id: "a1_kp2_015", article: "das", word: "Kinn",     translation: "подбородок (das)"    },
      // die → seine / ihre
      { id: "a1_kp2_016", article: "die", word: "Hand",      translation: "кисть руки (die)"   },
      { id: "a1_kp2_017", article: "die", word: "Nase",      translation: "нос (die)"          },
      { id: "a1_kp2_018", article: "die", word: "Schulter",  translation: "плечо (die)"        },
      { id: "a1_kp2_019", article: "die", word: "Brust",     translation: "грудь (die)"        },
      { id: "a1_kp2_020", article: "die", word: "Wange",     translation: "щека (die)"         },
      { id: "a1_kp2_021", article: "die", word: "Stirn",     translation: "лоб (die)"          },
      { id: "a1_kp2_022", article: "die", word: "Augenbraue",translation: "бровь (die)"        },
      // Plural → seine / ihre (всегда -e)
      { id: "a1_kp2_023", article: "die", word: "Arme",     translation: "руки (мн.ч.)",  plural: true },
      { id: "a1_kp2_024", article: "die", word: "Beine",    translation: "ноги (мн.ч.)",  plural: true },
      { id: "a1_kp2_025", article: "die", word: "Augen",    translation: "глаза (мн.ч.)", plural: true },
      { id: "a1_kp2_026", article: "die", word: "Ohren",    translation: "уши (мн.ч.)",   plural: true },
      { id: "a1_kp2_027", article: "die", word: "Hände",    translation: "руки/кисти (мн.ч.)", plural: true },
      { id: "a1_kp2_028", article: "die", word: "Füße",     translation: "ступни (мн.ч.)", plural: true },
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
      { id: "a1_kl_016", article: "der", word: "Strumpf",     translation: "чулок / длинный носок" },
      { id: "a1_kl_017", article: "der", word: "Gürtel",      translation: "ремень / пояс"         },
      { id: "a1_kl_018", article: "der", word: "Hut",         translation: "шляпа"                 },
    ]
  },

  // ════════════════════════════════
  //  A1 — BERUFE (Профессии)
  // ════════════════════════════════
  {
    level: "A1", category: "berufe", name: "Berufe", name_ru: "Профессии", emoji: "👔",
    words: [
      { id: "a1_br_001", article: "der", word: "Arzt",            translation: "врач (м)"        },
      { id: "a1_br_001f",article: "die", word: "Ärztin",          translation: "врач (ж)"        },
      { id: "a1_br_002", article: "der", word: "Lehrer",          translation: "учитель"         },
      { id: "a1_br_002f",article: "die", word: "Lehrerin",        translation: "учительница"     },
      { id: "a1_br_003", article: "der", word: "Student",         translation: "студент"         },
      { id: "a1_br_003f",article: "die", word: "Studentin",       translation: "студентка"       },
      { id: "a1_br_004", article: "der", word: "Koch",            translation: "повар"           },
      { id: "a1_br_004f",article: "die", word: "Köchin",          translation: "повариха"        },
      { id: "a1_br_005", article: "der", word: "Bäcker",          translation: "пекарь (м)"      },
      { id: "a1_br_005f",article: "die", word: "Bäckerin",        translation: "пекарь (ж)"      },
      { id: "a1_br_006", article: "der", word: "Ingenieur",       translation: "инженер (м)"     },
      { id: "a1_br_006f",article: "die", word: "Ingenieurin",     translation: "инженер (ж)"     },
      { id: "a1_br_007", article: "der", word: "Krankenpfleger",  translation: "медбрат"         },
      { id: "a1_br_007f",article: "die", word: "Krankenschwester",translation: "медсестра"       },
      { id: "a1_br_008", article: "der", word: "Polizist",        translation: "полицейский"     },
      { id: "a1_br_008f",article: "die", word: "Polizistin",      translation: "полицейская"     },
      { id: "a1_br_009", article: "der", word: "Verkäufer",       translation: "продавец"        },
      { id: "a1_br_009f",article: "die", word: "Verkäuferin",     translation: "продавщица"      },
      { id: "a1_br_010", article: "der", word: "Fahrer",          translation: "водитель (м)"    },
      { id: "a1_br_010f",article: "die", word: "Fahrerin",        translation: "водитель (ж)"    },
      { id: "a1_br_011", article: "der", word: "Kellner",         translation: "официант"        },
      { id: "a1_br_011f",article: "die", word: "Kellnerin",       translation: "официантка"      },
      { id: "a1_br_012", article: "der", word: "Mechaniker",      translation: "механик (м)"     },
      { id: "a1_br_012f",article: "die", word: "Mechanikerin",    translation: "механик (ж)"     },
      { id: "a1_br_013", article: "der", word: "Friseur",         translation: "парикмахер (м)"  },
      { id: "a1_br_013f",article: "die", word: "Friseurin",       translation: "парикмахер (ж)"  },
      { id: "a1_br_014", article: "der", word: "Sekretär",        translation: "секретарь (м)"   },
      { id: "a1_br_014f",article: "die", word: "Sekretärin",      translation: "секретарь (ж)"   },
      { id: "a1_br_015", article: "der", word: "Gärtner",         translation: "садовник"        },
      { id: "a1_br_015f",article: "die", word: "Gärtnerin",       translation: "садовница"       },
      { id: "a1_br_016", article: "der", word: "Fabrikarbeiter",  translation: "рабочий завода (м)" },
      { id: "a1_br_016f",article: "die", word: "Fabrikarbeiterin",translation: "рабочая завода (ж)" },
      { id: "a1_br_017", article: "der", word: "Bauarbeiter",     translation: "строитель (м)"   },
      { id: "a1_br_017f",article: "die", word: "Bauarbeiterin",   translation: "строитель (ж)"   },
      { id: "a1_br_018", article: "der", word: "Pfleger",         translation: "санитар / сиделка (м)" },
      { id: "a1_br_018f",article: "die", word: "Pflegerin",       translation: "санитарка / сиделка (ж)" },
      { id: "a1_br_019", article: "der", word: "Bürokaufmann",    translation: "офис-менеджер (м)" },
      { id: "a1_br_019f",article: "die", word: "Bürokauffrau",    translation: "офис-менеджер (ж)" },
      { id: "a1_br_020", article: "der", word: "Kaufmann",        translation: "коммерсант / служащий" },
      { id: "a1_br_020f",article: "die", word: "Kauffrau",        translation: "коммерсант / служащая" },
      { id: "a1_br_021", article: "der", word: "Hausmann",        translation: "домохозяин"      },
      { id: "a1_br_021f",article: "die", word: "Hausfrau",        translation: "домохозяйка"     },
      { id: "a1_br_022", article: "der", word: "Taxifahrer",      translation: "водитель такси (м)" },
      { id: "a1_br_022f",article: "die", word: "Taxifahrerin",    translation: "водитель такси (ж)" },
      { id: "a1_br_023", article: "der", word: "Techniker",       translation: "техник (м)"      },
      { id: "a1_br_023f",article: "die", word: "Technikerin",     translation: "техник (ж)"      },
      { id: "a1_br_024", article: "der", word: "Mechatroniker",   translation: "мехатроник (м)"  },
      { id: "a1_br_024f",article: "die", word: "Mechatronikerin", translation: "мехатроник (ж)"  },
      { id: "a1_br_025", article: "der", word: "Bauer",           translation: "фермер / крестьянин" },
      { id: "a1_br_025f",article: "die", word: "Bäuerin",         translation: "фермерша / крестьянка" },
      { id: "a1_br_026", article: "der", word: "Pilot",           translation: "пилот (м)"       },
      { id: "a1_br_026f",article: "die", word: "Pilotin",         translation: "пилот (ж)"       },
      { id: "a1_br_027", article: "der", word: "Journalist",      translation: "журналист"       },
      { id: "a1_br_027f",article: "die", word: "Journalistin",    translation: "журналистка"     },
      { id: "a1_br_028", article: "der", word: "Zahnarzt",        translation: "стоматолог (м)"  },
      { id: "a1_br_028f",article: "die", word: "Zahnärztin",      translation: "стоматолог (ж)"  },
      { id: "a1_br_029", article: "der", word: "Musiker",         translation: "музыкант (м)"    },
      { id: "a1_br_029f",article: "die", word: "Musikerin",       translation: "музыкант (ж)"    },
      { id: "a1_br_030", article: "der", word: "Fotograf",        translation: "фотограф (м)"    },
      { id: "a1_br_030f",article: "die", word: "Fotografin",      translation: "фотограф (ж)"    },
      { id: "a1_br_031", article: "der", word: "Maler",           translation: "художник / маляр (м)" },
      { id: "a1_br_031f",article: "die", word: "Malerin",         translation: "художница / маляр (ж)" },
    ]
  },

  // ════════════════════════════════
  //  A1 — FRAGEWÖRTER (Вопросительные слова, без артикля)
  // ════════════════════════════════
  {
    level: "A1", category: "fragewörter", name: "Fragewörter", name_ru: "Вопросительные слова", emoji: "❓", ruleId: "a1_gr_011",
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
  //  A1 — ORDNUNGSZAHLEN (первый, второй...)
  // ════════════════════════════════
  {
    level: "A1", category: "ordnungszahlen", name: "Ordnungszahlen", name_ru: "Порядковые числительные", emoji: "🥇",
    words: [
      { id: "a1_oz_001", article: "-", word: "erste",        translation: "1-й — первый" },
      { id: "a1_oz_002", article: "-", word: "zweite",       translation: "2-й — второй" },
      { id: "a1_oz_003", article: "-", word: "dritte",       translation: "3-й — третий" },
      { id: "a1_oz_004", article: "-", word: "vierte",       translation: "4-й — четвёртый" },
      { id: "a1_oz_005", article: "-", word: "fünfte",       translation: "5-й — пятый" },
      { id: "a1_oz_006", article: "-", word: "sechste",      translation: "6-й — шестой" },
      { id: "a1_oz_007", article: "-", word: "siebte",       translation: "7-й — седьмой" },
      { id: "a1_oz_008", article: "-", word: "achte",        translation: "8-й — восьмой" },
      { id: "a1_oz_009", article: "-", word: "neunte",       translation: "9-й — девятый" },
      { id: "a1_oz_010", article: "-", word: "zehnte",       translation: "10-й — десятый" },
      { id: "a1_oz_011", article: "-", word: "elfte",        translation: "11-й — одиннадцатый" },
      { id: "a1_oz_012", article: "-", word: "zwölfte",      translation: "12-й — двенадцатый" },
      { id: "a1_oz_013", article: "-", word: "neunzehnte",   translation: "19-й — девятнадцатый" },
      { id: "a1_oz_014", article: "-", word: "zwanzigste",   translation: "20-й — двадцатый" },
      { id: "a1_oz_015", article: "-", word: "einundzwanzigste", translation: "21-й — двадцать первый" },
      { id: "a1_oz_016", article: "-", word: "dreißigste",   translation: "30-й — тридцатый" },
    ]
  },

  // ════════════════════════════════
  //  A1 — GEFÜHLE (Эмоции, без артикля)
  // ════════════════════════════════
  {
    level: "A1", category: "gefuehle", name: "Gefühle", name_ru: "Эмоции и состояния", emoji: "😊", ruleId: "a1_gr_027",
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
      { id: "a1_adj_031", article: "-", word: "günstig",      translation: "выгодный / недорогой"   },
      { id: "a1_adj_032", article: "-", word: "viel",         translation: "много"                  },
      { id: "a1_adj_033", article: "-", word: "kaputt",       translation: "сломанный"               },
      { id: "a1_adj_034", article: "-", word: "alle",         translation: "все"                    },
      { id: "a1_adj_035", article: "-", word: "alles",        translation: "всё"                    },
      { id: "a1_adj_036", article: "-", word: "alleine",      translation: "один / самостоятельно"  },
      { id: "a1_adj_037", article: "-", word: "natürlich",    translation: "конечно / естественно"  },
      { id: "a1_adj_038", article: "-", word: "besonders",    translation: "особенно"               },
      { id: "a1_adj_039", article: "-", word: "anders",       translation: "иначе / по-другому"     },
      { id: "a1_adj_040", article: "-", word: "genau",        translation: "точно"                  },
      { id: "a1_adj_041", article: "-", word: "kostenlos",    translation: "бесплатный"              },
      { id: "a1_adj_042", article: "-", word: "arbeitslos",   translation: "безработный"             },
      { id: "a1_adj_043", article: "-", word: "sicher",       translation: "уверенный / надёжный"    },
      { id: "a1_adj_044", article: "-", word: "hart",         translation: "твёрдый / суровый"       },
      { id: "a1_adj_045", article: "-", word: "ruhig",        translation: "спокойный"               },
      { id: "a1_adj_046", article: "-", word: "zufällig",     translation: "случайный"               },
      { id: "a1_adj_047", article: "-", word: "königlich",    translation: "королевский"             },
      { id: "a1_adj_048", article: "-", word: "vornehm",      translation: "благородный / изысканный"},
      { id: "a1_adj_049", article: "-", word: "fleißig",      translation: "прилежный / трудолюбивый"},
      { id: "a1_adj_050", article: "-", word: "hoch",         translation: "высокий (о высоте)"      },
      { id: "a1_adj_051", article: "-", word: "dreifach",     translation: "тройной"                 },
      { id: "a1_hf_007",  article: "-", word: "bequem",       translation: "удобный"                 },
      { id: "a1_hf_008",  article: "-", word: "unbequem",     translation: "неудобный"               },
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
    ]
  },

  // ════════════════════════════════
  //  A1 — FAMILIENSTAND (Семейное положение)
  // ════════════════════════════════
  {
    level: "A1", category: "familienstand", name: "Familienstand", name_ru: "Семейное положение", emoji: "💍",
    words: [
      { id: "a1_fs_001", article: "der", word: "Familienstand", translation: "семейное положение" },
      { id: "a1_vw_010", article: "-",   word: "ledig",         translation: "холост / не замужем" },
      { id: "a1_vw_011", article: "-",   word: "verheiratet",   translation: "женат / замужем" },
      { id: "a1_fs_004", article: "-",   word: "geschieden",    translation: "разведён / разведена" },
      { id: "a1_fs_005", article: "-",   word: "verwitwet",     translation: "вдовец / вдова (статус)" },
      { id: "a1_fs_006", article: "der", word: "Witwer",        translation: "вдовец" },
      { id: "a1_fs_007", article: "die", word: "Witwe",         translation: "вдова" },
      { id: "a1_vw_012", article: "die", word: "Beziehung",     translation: "отношения" },
      { id: "a1_fs_009", article: "-",   word: "in einer Beziehung", translation: "состою в отношениях" },
      { id: "a1_fs_010", article: "der", word: "Partner",       translation: "партнёр (сожитель)" },
      { id: "a1_fs_011", article: "die", word: "Partnerin",     translation: "партнёрша (сожительница)" },
      { id: "a1_vw_013", article: "die", word: "Scheidung",     translation: "развод" },
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
      { id: "a1_mo_001", article: "-", word: "Januar",    translation: "1 — январь"    },
      { id: "a1_mo_002", article: "-", word: "Februar",   translation: "2 — февраль"   },
      { id: "a1_mo_003", article: "-", word: "März",      translation: "3 — март"      },
      { id: "a1_mo_004", article: "-", word: "April",     translation: "4 — апрель"    },
      { id: "a1_mo_005", article: "-", word: "Mai",       translation: "5 — май"       },
      { id: "a1_mo_006", article: "-", word: "Juni",      translation: "6 — июнь"      },
      { id: "a1_mo_007", article: "-", word: "Juli",      translation: "7 — июль"      },
      { id: "a1_mo_008", article: "-", word: "August",    translation: "8 — август"    },
      { id: "a1_mo_009", article: "-", word: "September", translation: "9 — сентябрь"  },
      { id: "a1_mo_010", article: "-", word: "Oktober",   translation: "10 — октябрь"  },
      { id: "a1_mo_011", article: "-", word: "November",  translation: "11 — ноябрь"   },
      { id: "a1_mo_012", article: "-", word: "Dezember",  translation: "12 — декабрь"  },
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
    level: "A1", category: "laender", name: "Länder", name_ru: "Страны", emoji: "🌍", ruleId: "a1_gr_026",
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

  // ════════════════════════════════
  //  A1 — ORTE (das-Wörter)
  // ════════════════════════════════
  {
    level: "A1", category: "orte_das", name: "Orte (das)", name_ru: "Места (das-слова)", emoji: "🏨",
    words: [
      { id: "a1_od_001", article: "das", word: "Kino",       translation: "кинотеатр"    },
      { id: "a1_od_002", article: "das", word: "Hotel",      translation: "отель"        },
      { id: "a1_od_003", article: "das", word: "Rathaus",    translation: "ратуша"       },
      { id: "a1_od_004", article: "das", word: "Restaurant", translation: "ресторан", translit: "ресторан" },
      { id: "a1_od_005", article: "das", word: "Café",       translation: "кафе"         },
      { id: "a1_od_006", article: "das", word: "Haus",       translation: "дом"          },
      { id: "a1_od_007", article: "das", word: "Dach",       translation: "крыша"        },
      { id: "a1_od_008", article: "das", word: "Gleis",      translation: "ж/д путь / платформа" },
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
  //  A1 — WICHTIGE VERBEN (Важные глаголы A1)
  // ════════════════════════════════
  {
    level: "A1", category: "verben", name: "Wichtige Verben", name_ru: "Важные глаголы", emoji: "🏃", ruleId: "a1_gr_009",
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
      { id: "a1_vb_036", article: "-", word: "träumen",    translation: "мечтать" },
      { id: "a1_vb_037", article: "-", word: "schreien",   translation: "кричать" },
      { id: "a1_vb_038", article: "-", word: "rechnen",    translation: "считать / вычислять" },
      { id: "a1_vb_039", article: "-", word: "stehlen",    translation: "красть" },
      { id: "a1_vb_040", article: "-", word: "weinen",     translation: "плакать" },
      { id: "a1_vb_041", article: "-", word: "wehtun",     translation: "болеть (причинять боль)" },
      { id: "a1_vb_042", article: "-", word: "wünschen",   translation: "желать" },
      { id: "a1_vb_043", article: "-", word: "vergessen",  translation: "забывать" },
      { id: "a1_vb_044", article: "-", word: "klopfen",    translation: "стучать" },
      { id: "a1_vb_045", article: "-", word: "küssen",     translation: "целовать" },
      { id: "a1_vb_046", article: "-", word: "lachen",     translation: "смеяться" },
      { id: "a1_vb_047", article: "-", word: "schlagen",   translation: "бить" },
      { id: "a1_vb_048", article: "-", word: "begrüßen",   translation: "приветствовать" },
      { id: "a1_vb_049", article: "-", word: "schimpfen",  translation: "ругаться / бранить(ся)" },
      { id: "a1_vb_050", article: "-", word: "gehören",    translation: "принадлежать" },
      { id: "a1_vb_051", article: "-", word: "klingeln",   translation: "звонить (в дверь)" },
      { id: "a1_vb_052", article: "-", word: "werfen",     translation: "бросать" },
      { id: "a1_vb_053", article: "-", word: "fangen",     translation: "ловить" },
      { id: "a1_vb_054", article: "-", word: "trösten",    translation: "утешать" },
      { id: "a1_vb_055", article: "-", word: "leihen",     translation: "одалживать" },
      { id: "a1_vb_056", article: "-", word: "streicheln", translation: "гладить" },
      { id: "a1_vb_057", article: "-", word: "versuchen",  translation: "пробовать / пытаться" },
      { id: "a1_vb_058", article: "-", word: "stellen",    translation: "ставить" },
      { id: "a1_vb_059", article: "-", word: "aufhören",   translation: "прекращать / заканчивать" },
      { id: "a1_vb_060", article: "-", word: "liegen",     translation: "лежать" },
      { id: "a1_vb_061", article: "-", word: "baden",      translation: "купаться / принимать ванну" },
      { id: "a1_vb_062", article: "-", word: "sich freuen",    translation: "радоваться" },
      { id: "a1_vb_063", article: "-", word: "sich streiten",  translation: "ссориться" },
      { id: "a1_vb_064", article: "-", word: "sich erinnern",  translation: "вспоминать" },
      { id: "a1_vb_065", article: "-", word: "sich fürchten",  translation: "бояться" },
      { id: "a1_vb_066", article: "-", word: "sich melden",    translation: "поднимать руку (отзываться)" },
      { id: "a1_vb_067", article: "-", word: "sich verlaufen", translation: "заблудиться (пешком)" },
      { id: "a1_vb_068", article: "-", word: "sich beeilen",   translation: "спешить" },
      { id: "a1_vb_069", article: "-", word: "sich ausziehen", translation: "раздеваться" },
      { id: "a1_vb_070", article: "-", word: "sich ärgern",    translation: "злиться / раздражаться" },
      { id: "a1_vb_071", article: "-", word: "sich anziehen",  translation: "одеваться" },
      { id: "a1_vb_072", article: "-", word: "reisen",         translation: "путешествовать" },
      { id: "a1_vb_073", article: "-", word: "tun",            translation: "делать / поступать" },
      { id: "a1_vb_074", article: "-", word: "lassen",         translation: "оставлять / позволять" },
      { id: "a1_vb_075", article: "-", word: "verschwinden",   translation: "исчезать / пропадать" },
      { id: "a1_vb_076", article: "-", word: "beschließen",    translation: "решать / принимать решение" },
      { id: "a1_vb_077", article: "-", word: "vermissen",      translation: "скучать (по кому-л.) / недоставать" },
      { id: "a1_vb_078", article: "-", word: "gucken",         translation: "смотреть / глядеть (разг.)" },
      { id: "a1_vb_079", article: "-", word: "verleihen",      translation: "выдавать напрокат / вручать (награду)" },
      { id: "a1_vb_080", article: "-", word: "rauskommen",     translation: "выходить (наружу)" },
      { id: "a1_vb_081", article: "-", word: "segeln",         translation: "плавать под парусом" },
      { id: "a1_vb_082", article: "-", word: "schrubben",      translation: "тереть / оттирать (щёткой)" },
      { id: "a1_vb_083", article: "-", word: "reinspringen",   translation: "запрыгивать (внутрь)" },
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
      { id: "a1_nw_022", article: "-",   word: "man",            translation: "люди (в общем) / безличное «ты»" },
      { id: "a1_nw_023", article: "-",   word: "es gibt",        translation: "есть / имеется (в наличии)"      },
      { id: "a1_nw_024", article: "die", word: "Zeit",           translation: "время" },
      { id: "a1_nw_025", article: "der", word: "Unterricht",     translation: "урок / занятие" },
      { id: "a1_nw_026", article: "die", word: "Übung",          translation: "упражнение" },
      { id: "a1_nw_027", article: "die", word: "Frage",          translation: "вопрос" },
      { id: "a1_nw_028", article: "die", word: "Antwort",        translation: "ответ" },
      { id: "a1_nw_029", article: "das", word: "Geschenk",       translation: "подарок" },
      { id: "a1_nw_030", article: "die", word: "Sache",          translation: "вещь / дело" },
      { id: "a1_nw_031", article: "die", word: "Welt",           translation: "мир (вселенная)" },
      { id: "a1_nw_032", article: "die", word: "Geschichte",     translation: "история / рассказ" },
      { id: "a1_nw_033", article: "der", word: "Besuch",         translation: "визит / посещение" },
      { id: "a1_nw_034", article: "der", word: "Schatz",         translation: "сокровище / дорогой (обращение)" },
      { id: "a1_nw_035", article: "das", word: "Meer",           translation: "море" },
      { id: "a1_nw_036", article: "das", word: "Zeug",           translation: "вещи / барахло (разг.)" },
      { id: "a1_nw_037", article: "die", word: "Überraschung",   translation: "сюрприз" },
      { id: "a1_nw_038", article: "-",   word: "schade",         translation: "жаль / досадно" },
      { id: "a1_nw_039", article: "die", word: "Königin",        translation: "королева" },
      { id: "a1_nw_040", article: "der", word: "Palast",         translation: "дворец" },
      { id: "a1_nw_041", article: "die", word: "Krone",          translation: "корона" },
      { id: "a1_nw_042", article: "der", word: "Orden",          translation: "орден (награда)" },
      { id: "a1_nw_043", article: "die", word: "Alge",           translation: "водоросль" },
      { id: "a1_nw_044", article: "der", word: "Schrottplatz",   translation: "свалка металлолома" },
      { id: "a1_nw_045", article: "das", word: "Feuerwehrauto",  translation: "пожарная машина" },
      { id: "a1_nw_046", article: "der", word: "Rettungshubschrauber", translation: "спасательный вертолёт" },
    ]
  },

  // ════════════════════════════════
  //  A1 — KRANKHEITEN & GESUNDHEIT (Болезни и здоровье)
  // ════════════════════════════════
  {
    level: "A1", category: "krankheiten", name: "Krankheiten & Gesundheit", name_ru: "Болезни и здоровье", emoji: "🤒", ruleId: "a1_gr_032",
    words: [
      { id: "a1_kr_001", article: "die", word: "Kopfschmerzen",   translation: "головная боль (мн.ч.)"      },
      { id: "a1_kr_002", article: "die", word: "Bauchschmerzen",  translation: "боль в животе (мн.ч.)"      },
      { id: "a1_kr_003", article: "die", word: "Halsschmerzen",   translation: "боль в горле (мн.ч.)"       },
      { id: "a1_kr_004", article: "die", word: "Zahnschmerzen",   translation: "зубная боль (мн.ч.)"        },
      { id: "a1_kr_005", article: "die", word: "Rückenschmerzen", translation: "боль в спине (мн.ч.)"       },
      { id: "a1_kr_006", article: "das", word: "Fieber",          translation: "температура / жар"          },
      { id: "a1_kr_007", article: "die", word: "Erkältung",       translation: "простуда"                   },
      { id: "a1_kr_008", article: "der", word: "Husten",          translation: "кашель"                     },
      { id: "a1_kr_009", article: "der", word: "Schnupfen",       translation: "насморк"                    },
      { id: "a1_kr_010", article: "die", word: "Depression",      translation: "депрессия"                  },
      { id: "a1_kr_011", article: "der", word: "Durchfall",       translation: "понос / диарея"             },
      { id: "a1_kr_012", article: "der", word: "Ausschlag",       translation: "сыпь"                       },
      { id: "a1_kr_013", article: "die", word: "Grippe",          translation: "грипп"                      },
      { id: "a1_kr_014", article: "die", word: "Schmerzen",       translation: "боль / боли (мн.ч.)"        },
      { id: "a1_kr_015", article: "die", word: "Beschwerden",     translation: "недомогания (мн.ч.)"        },
      { id: "a1_kr_016", article: "die", word: "Gesundheit",      translation: "здоровье"                   },
      { id: "a1_kr_017", article: "die", word: "Krankheit",       translation: "болезнь"                    },
      { id: "a1_kr_018", article: "die", word: "Übelkeit",        translation: "тошнота"                    },
      { id: "a1_kr_019", article: "die", word: "Wunde",           translation: "рана"                       },
      { id: "a1_kr_020", article: "das", word: "Medikament",      translation: "лекарство"                  },
    ]
  },

  // ════════════════════════════════
  //  A1 — BEIM ARZT & APOTHEKE (У врача и в аптеке)
  // ════════════════════════════════
  {
    level: "A1", category: "arzt", name: "Beim Arzt & Apotheke", name_ru: "У врача и в аптеке", emoji: "🩺",
    words: [
      // Врачи
      { id: "a1_ar_001", article: "der", word: "Hausarzt",          translation: "семейный врач"               },
      { id: "a1_ar_002", article: "der", word: "Zahnarzt",          translation: "стоматолог"                  },
      { id: "a1_ar_003", article: "der", word: "Frauenarzt",        translation: "гинеколог"                   },
      { id: "a1_ar_004", article: "der", word: "Kinderarzt",        translation: "педиатр"                     },
      { id: "a1_ar_005", article: "der", word: "HNO-Arzt",          translation: "ЛОР-врач"                    },
      { id: "a1_ar_006", article: "der", word: "Orthopäde",         translation: "ортопед"                     },
      { id: "a1_ar_007", article: "der", word: "Facharzt",          translation: "врач-специалист"             },
      // На приёме
      { id: "a1_ar_008", article: "der", word: "Termin",            translation: "приём / запись"              },
      { id: "a1_ar_009", article: "die", word: "Sprechstunde",      translation: "часы приёма"                 },
      { id: "a1_ar_010", article: "die", word: "Sprechstundenhilfe",translation: "ассистент врача"             },
      { id: "a1_ar_011", article: "das", word: "Wartezimmer",       translation: "комната ожидания"            },
      { id: "a1_ar_012", article: "die", word: "Untersuchung",      translation: "обследование"                },
      { id: "a1_ar_013", article: "die", word: "Blutentnahme",      translation: "забор крови"                 },
      { id: "a1_ar_014", article: "die", word: "Impfung",           translation: "прививка"                    },
      { id: "a1_ar_015", article: "der", word: "Impfpass",          translation: "паспорт прививок"            },
      { id: "a1_ar_016", article: "das", word: "Röntgenbild",       translation: "рентгеновский снимок"        },
      { id: "a1_ar_017", article: "die", word: "Vorsorge",          translation: "профилактический осмотр"     },
      // Документы
      { id: "a1_ar_018", article: "das", word: "Rezept",            translation: "рецепт"                      },
      { id: "a1_ar_019", article: "die", word: "Überweisung",       translation: "направление (к специалисту)" },
      { id: "a1_ar_020", article: "die", word: "Krankschreibung",   translation: "больничный лист"             },
      { id: "a1_ar_021", article: "die", word: "Krankmeldung",      translation: "уведомление о болезни"       },
      { id: "a1_ar_022", article: "die", word: "Gesundheitskarte",  translation: "карта медстрахования"        },
      { id: "a1_ar_023", article: "die", word: "Krankenkasse",      translation: "больничная касса / страховая"},
      { id: "a1_ar_024", article: "der", word: "Behandlungsschein", translation: "талон на лечение"            },
      // В аптеке
      { id: "a1_ar_025", article: "die", word: "Spritze",           translation: "шприц / укол"                },
      { id: "a1_ar_026", article: "die", word: "Tablette",          translation: "таблетка"                    },
      { id: "a1_ar_027", article: "die", word: "Salbe",             translation: "мазь"                        },
      { id: "a1_ar_028", article: "der", word: "Hustensaft",        translation: "сироп от кашля"              },
      { id: "a1_ar_029", article: "der", word: "Verband",          translation: "повязка / бинт"              },
      { id: "a1_ar_030", article: "das", word: "Fieberthermometer", translation: "градусник"                   },
      { id: "a1_ar_031", article: "die", word: "Augentropfen",      translation: "глазные капли (мн.ч.)"       },
      { id: "a1_ar_032", article: "das", word: "Verhütungsmittel",  translation: "противозачаточное средство"  },
    ]
  },

  // ════════════════════════════════
  //  A1 — MODALVERBEN (Модальные глаголы)
  // ════════════════════════════════
  {
    level: "A1", category: "modalverben", name: "Modalverben", name_ru: "Модальные глаголы (спряжение)", emoji: "🔑", ruleId: "a1_gr_016", mode: "conjugation",
    words: [
      { id: "a1_mv_001", article: "-", word: "können",  translation: "мочь / уметь (способность)",          hint: "Ich <b>kann</b> schwimmen. — Я умею плавать. (способность)",        conj: { ich:"kann",  du:"kannst",   er:"kann",  wir:"können",  ihr:"könnt",  sie:"können"  } },
      { id: "a1_mv_002", article: "-", word: "müssen",  translation: "должен (необходимость, надо)",         hint: "Ich <b>muss</b> arbeiten. — Я должен работать. (надо, иначе никак)",  conj: { ich:"muss",  du:"musst",    er:"muss",  wir:"müssen",  ihr:"müsst",  sie:"müssen"  } },
      { id: "a1_mv_003", article: "-", word: "dürfen",  translation: "можно (разрешение)",                  hint: "Ich <b>darf</b> bleiben. — Мне можно остаться. (разрешение)",         conj: { ich:"darf",  du:"darfst",   er:"darf",  wir:"dürfen",  ihr:"dürft",  sie:"dürfen"  } },
      { id: "a1_mv_004", article: "-", word: "wollen",  translation: "хотеть (намерение)",                  hint: "Ich <b>will</b> Deutsch lernen. — Я хочу учить немецкий. (намерение)",conj: { ich:"will",  du:"willst",   er:"will",  wir:"wollen",  ihr:"wollt",  sie:"wollen"  } },
      { id: "a1_mv_005", article: "-", word: "sollen",  translation: "следует / должен (по указанию, совет)",hint: "Der Arzt sagt, ich <b>soll</b> schlafen. — Врач велит мне спать. (чужое указание)", conj: { ich:"soll",  du:"sollst",   er:"soll",  wir:"sollen",  ihr:"sollt",  sie:"sollen"  } },
      { id: "a1_mv_006", article: "-", word: "mögen",   translation: "нравиться / любить",                  hint: "Ich <b>mag</b> Schokolade. — Я люблю шоколад.",                       conj: { ich:"mag",   du:"magst",    er:"mag",   wir:"mögen",   ihr:"mögt",   sie:"mögen"   } },
      { id: "a1_mv_007", article: "-", word: "möchten", translation: "хотел бы (вежливая просьба)",          hint: "Ich <b>möchte</b> einen Kaffee. — Я хотел бы кофе. (вежливо)",        conj: { ich:"möchte",du:"möchtest", er:"möchte",wir:"möchten", ihr:"möchtet",sie:"möchten" } },
      { id: "a1_mv_008", article: "-", word: "wissen",  translation: "знать (факт, информацию)",             hint: "Ich <b>weiß</b> die Antwort. — Я знаю ответ.",                        conj: { ich:"weiß",  du:"weißt",    er:"weiß",  wir:"wissen",  ihr:"wisst",  sie:"wissen"  } },
    ]
  },

  // ════════════════════════════════
  //  A1 — LAGE / WO? (Расположение объекта — предлоги места)
  // ════════════════════════════════
  {
    level: "A1", category: "lage", name: "Lage – Wo?", name_ru: "Расположение (где?)", emoji: "📍", ruleId: "a1_gr_018",
    words: [
      { id: "a1_lg_001", article: "-", word: "vor",        translation: "перед"                  },
      { id: "a1_lg_002", article: "-", word: "hinter",     translation: "за / позади"            },
      { id: "a1_lg_003", article: "-", word: "neben",      translation: "рядом / возле"          },
      { id: "a1_lg_004", article: "-", word: "über",       translation: "над"                    },
      { id: "a1_lg_005", article: "-", word: "unter",      translation: "под"                    },
      { id: "a1_lg_006", article: "-", word: "an",         translation: "у / возле (вплотную)"   },
      { id: "a1_lg_007", article: "-", word: "auf",        translation: "на (поверхности)"       },
      { id: "a1_lg_008", article: "-", word: "in",         translation: "в / внутри"             },
      { id: "a1_lg_009", article: "-", word: "zwischen",   translation: "между"                  },
      { id: "a1_lg_010", article: "-", word: "gegenüber",  translation: "напротив"               },
      { id: "a1_lg_011", article: "-", word: "links",      translation: "слева"                  },
      { id: "a1_lg_012", article: "-", word: "rechts",     translation: "справа"                 },
      { id: "a1_lg_013", article: "-", word: "oben",       translation: "наверху"                },
      { id: "a1_lg_014", article: "-", word: "unten",      translation: "внизу"                  },
      { id: "a1_lg_015", article: "-", word: "innen",      translation: "внутри"                 },
      { id: "a1_lg_016", article: "-", word: "außen",      translation: "снаружи"                },
    ]
  },

  // ════════════════════════════════
  //  A1 — WEGBESCHREIBUNG (Как пройти / описание пути)
  // ════════════════════════════════
  {
    level: "A1", category: "weg", name: "Wegbeschreibung", name_ru: "Как пройти / дорога", emoji: "🧭", ruleId: "a1_gr_021",
    words: [
      { id: "a1_wg_001", article: "-", word: "geradeaus",                 translation: "прямо"                        },
      { id: "a1_wg_002", article: "-", word: "abbiegen",                  translation: "поворачивать"                 },
      { id: "a1_wg_003", article: "-", word: "nach links abbiegen",       translation: "повернуть налево"             },
      { id: "a1_wg_004", article: "-", word: "nach rechts abbiegen",      translation: "повернуть направо"            },
      { id: "a1_wg_005", article: "-", word: "überqueren",               translation: "переходить (улицу)"           },
      { id: "a1_wg_006", article: "-", word: "die Straße überqueren",     translation: "перейти улицу"                },
      { id: "a1_wg_007", article: "-", word: "über die Brücke gehen",     translation: "перейти через мост"           },
      { id: "a1_wg_008", article: "-", word: "über die Kreuzung gehen",   translation: "перейти перекрёсток"          },
      { id: "a1_wg_009", article: "-", word: "vorbeigehen",               translation: "пройти мимо"                  },
      { id: "a1_wg_010", article: "-", word: "an ... vorbei",             translation: "мимо чего-то"                 },
      { id: "a1_wg_011", article: "-", word: "entlang",                   translation: "вдоль"                        },
      { id: "a1_wg_012", article: "-", word: "die erste Straße links",    translation: "первая улица налево"          },
      { id: "a1_wg_013", article: "-", word: "die zweite Straße rechts",  translation: "вторая улица направо"         },
      { id: "a1_wg_014", article: "-", word: "weitergehen",               translation: "идти дальше"                  },
      { id: "a1_wg_015", article: "-", word: "bis zur Ampel",             translation: "до светофора"                 },
      { id: "a1_wg_016", article: "-", word: "gegenüber von",             translation: "напротив (чего-то)"           },
      { id: "a1_wg_017", article: "der", word: "Weg",                     translation: "путь / дорога"                },
      { id: "a1_wg_018", article: "die", word: "Richtung",               translation: "направление"                  },
      { id: "a1_wg_019", article: "-", word: "zu Fuß gehen",              translation: "идти пешком"                  },
      { id: "a1_wg_020", article: "-", word: "die Treppe hinauf",         translation: "вверх по лестнице"            },
    ]
  },

  // ════════════════════════════════
  //  A1 — VERBEN MIT VOKALWECHSEL (спряжение, изменение корня)
  // ════════════════════════════════
  {
    level: "A1", category: "vokalwechsel", name: "Verben – Vokalwechsel", name_ru: "Глаголы с изменением корня", emoji: "🔄", ruleId: "a1_gr_013", mode: "conjugation",
    words: [
      { id: "a1_vc_001", article: "-", word: "sprechen",  translation: "говорить",   hint: "e→i: du spr<b>i</b>chst, er spr<b>i</b>cht", conj: { ich:"spreche", du:"sprichst", er:"spricht", wir:"sprechen", ihr:"sprecht", sie:"sprechen" } },
      { id: "a1_vc_002", article: "-", word: "essen",     translation: "есть/кушать",hint: "e→i: du <b>i</b>sst, er <b>i</b>sst",       conj: { ich:"esse",    du:"isst",     er:"isst",     wir:"essen",    ihr:"esst",    sie:"essen"    } },
      { id: "a1_vc_003", article: "-", word: "geben",     translation: "давать",     hint: "e→i: du g<b>i</b>bst, er g<b>i</b>bt",       conj: { ich:"gebe",    du:"gibst",    er:"gibt",     wir:"geben",    ihr:"gebt",    sie:"geben"    } },
      { id: "a1_vc_004", article: "-", word: "nehmen",    translation: "брать",      hint: "e→i +mm: du n<b>imm</b>st, er n<b>imm</b>t", conj: { ich:"nehme",   du:"nimmst",   er:"nimmt",    wir:"nehmen",   ihr:"nehmt",   sie:"nehmen"   } },
      { id: "a1_vc_005", article: "-", word: "helfen",    translation: "помогать",   hint: "e→i: du h<b>i</b>lfst, er h<b>i</b>lft",     conj: { ich:"helfe",   du:"hilfst",   er:"hilft",    wir:"helfen",   ihr:"helft",   sie:"helfen"   } },
      { id: "a1_vc_006", article: "-", word: "treffen",   translation: "встречать",  hint: "e→i: du tr<b>i</b>ffst, er tr<b>i</b>fft",   conj: { ich:"treffe",  du:"triffst",  er:"trifft",   wir:"treffen",  ihr:"trefft",  sie:"treffen"  } },
      { id: "a1_vc_007", article: "-", word: "lesen",     translation: "читать",     hint: "e→ie: du l<b>ie</b>st, er l<b>ie</b>st",     conj: { ich:"lese",    du:"liest",    er:"liest",    wir:"lesen",    ihr:"lest",    sie:"lesen"    } },
      { id: "a1_vc_008", article: "-", word: "sehen",     translation: "видеть",     hint: "e→ie: du s<b>ie</b>hst, er s<b>ie</b>ht",    conj: { ich:"sehe",    du:"siehst",   er:"sieht",    wir:"sehen",    ihr:"seht",    sie:"sehen"    } },
      { id: "a1_vc_009", article: "-", word: "empfehlen", translation: "рекомендовать",hint:"e→ie: du empf<b>ie</b>hlst, er empf<b>ie</b>hlt", conj:{ ich:"empfehle", du:"empfiehlst", er:"empfiehlt", wir:"empfehlen", ihr:"empfehlt", sie:"empfehlen" } },
      { id: "a1_vc_010", article: "-", word: "fahren",    translation: "ехать",      hint: "a→ä: du f<b>ä</b>hrst, er f<b>ä</b>hrt",     conj: { ich:"fahre",   du:"fährst",   er:"fährt",    wir:"fahren",   ihr:"fahrt",   sie:"fahren"   } },
      { id: "a1_vc_011", article: "-", word: "schlafen",  translation: "спать",      hint: "a→ä: du schl<b>ä</b>fst, er schl<b>ä</b>ft", conj: { ich:"schlafe", du:"schläfst", er:"schläft",  wir:"schlafen", ihr:"schlaft", sie:"schlafen" } },
      { id: "a1_vc_012", article: "-", word: "tragen",    translation: "носить",     hint: "a→ä: du tr<b>ä</b>gst, er tr<b>ä</b>gt",     conj: { ich:"trage",   du:"trägst",   er:"trägt",    wir:"tragen",   ihr:"tragt",   sie:"tragen"   } },
      { id: "a1_vc_013", article: "-", word: "waschen",   translation: "мыть/стирать",hint:"a→ä: du w<b>ä</b>schst, er w<b>ä</b>scht",   conj: { ich:"wasche",  du:"wäschst",  er:"wäscht",   wir:"waschen",  ihr:"wascht",  sie:"waschen"  } },
      { id: "a1_vc_014", article: "-", word: "halten",    translation: "держать/останавливаться",hint:"a→ä: du h<b>ä</b>ltst, er h<b>ä</b>lt", conj:{ ich:"halte",  du:"hältst",   er:"hält",     wir:"halten",   ihr:"haltet",  sie:"halten"   } },
      { id: "a1_vc_015", article: "-", word: "laufen",    translation: "бежать/идти",hint: "au→äu: du l<b>äu</b>fst, er l<b>äu</b>ft",   conj: { ich:"laufe",   du:"läufst",   er:"läuft",    wir:"laufen",   ihr:"lauft",   sie:"laufen"   } },
      { id: "a1_vc_016", article: "-", word: "werden",    translation: "становиться",hint: "неправильный: du w<b>i</b>rst, er w<b>i</b>rd", conj: { ich:"werde", du:"wirst",  er:"wird",     wir:"werden",   ihr:"werdet",  sie:"werden"   } },
    ]
  },

  // ════════════════════════════════
  //  A1 — ARBEIT (Работа — термины, договор, зарплата)
  // ════════════════════════════════
  {
    level: "A1", category: "arbeit", name: "Arbeit", name_ru: "Работа (термины)", emoji: "💼",
    words: [
      { id: "a1_ab_001", article: "der", word: "Arbeitgeber",      translation: "работодатель"              },
      { id: "a1_ab_002", article: "der", word: "Arbeitnehmer",     translation: "работник / сотрудник"      },
      { id: "a1_ab_003", article: "die", word: "Arbeitserlaubnis", translation: "разрешение на работу"      },
      { id: "a1_ab_004", article: "der", word: "Arbeitsvertrag",   translation: "трудовой договор"          },
      { id: "a1_ab_005", article: "die", word: "Arbeitszeit",      translation: "рабочее время"             },
      { id: "a1_ab_006", article: "der", word: "Arbeitstag",       translation: "рабочий день"              },
      { id: "a1_ab_007", article: "die", word: "Ausbildung",       translation: "профобучение / образование" },
      { id: "a1_ab_008", article: "der", word: "Berufsabschluss",  translation: "квалификация / диплом"     },
      { id: "a1_ab_009", article: "die", word: "Berufserfahrung",  translation: "опыт работы"               },
      { id: "a1_ab_010", article: "die", word: "Berufsanerkennung",translation: "признание профессии"       },
      { id: "a1_ab_011", article: "die", word: "Bewerbung",        translation: "заявка о приёме на работу" },
      { id: "a1_ab_012", article: "das", word: "Bewerbungsgespräch",translation: "собеседование"            },
      { id: "a1_ab_013", article: "der", word: "Lebenslauf",       translation: "резюме / автобиография"    },
      { id: "a1_ab_014", article: "der", word: "Antrag",           translation: "заявление"                 },
      { id: "a1_ab_015", article: "die", word: "Stellenanzeige",   translation: "объявление о вакансии"     },
      { id: "a1_ab_016", article: "die", word: "Anzeige",          translation: "объявление"                },
      { id: "a1_ab_017", article: "das", word: "Zeugnis",          translation: "аттестат / свидетельство"  },
      { id: "a1_ab_018", article: "das", word: "Zertifikat",       translation: "сертификат"                },
      { id: "a1_ab_019", article: "der", word: "Stundenlohn",      translation: "почасовая оплата"          },
      { id: "a1_ab_020", article: "der", word: "Bruttolohn",       translation: "зарплата брутто (до налогов)" },
      { id: "a1_ab_021", article: "der", word: "Nettolohn",        translation: "зарплата нетто (на руки)"  },
      { id: "a1_ab_022", article: "der", word: "Mindestlohn",      translation: "минимальная зарплата"      },
      { id: "a1_ab_023", article: "der", word: "Urlaub",           translation: "отпуск"                    },
      { id: "a1_ab_024", article: "die", word: "Tätigkeit",        translation: "деятельность / род занятий" },
      { id: "a1_ab_025", article: "die", word: "Aushilfe",         translation: "подработка / временная помощь" },
      { id: "a1_ab_026", article: "der", word: "Anruf",            translation: "звонок"                    },
      { id: "a1_ab_027", article: "der", word: "Rückruf",          translation: "обратный звонок"           },
      { id: "a1_ab_028", article: "-",   word: "pro Stunde",       translation: "за час / в час"            },
      { id: "a1_ab_029", article: "-",   word: "frei haben",       translation: "иметь выходной"            },
      { id: "a1_ab_030", article: "-",   word: "Stress haben",     translation: "испытывать стресс"         },
    ]
  },

  // ════════════════════════════════
  //  A1 — ARBEITSORTE (Места работы)
  // ════════════════════════════════
  {
    level: "A1", category: "arbeitsorte", name: "Arbeitsorte", name_ru: "Места работы", emoji: "🏢",
    words: [
      { id: "a1_ao_001", article: "das", word: "Büro",         translation: "офис"                 },
      { id: "a1_ao_002", article: "die", word: "Werkstatt",    translation: "мастерская"           },
      { id: "a1_ao_003", article: "die", word: "Universität",  translation: "университет"          },
      { id: "a1_ao_004", article: "die", word: "Fabrik",       translation: "фабрика / завод"      },
      { id: "a1_ao_005", article: "die", word: "Gärtnerei",    translation: "садоводство / питомник" },
      { id: "a1_ao_006", article: "die", word: "Baustelle",    translation: "стройка"              },
      { id: "a1_ao_007", article: "das", word: "Pflegeheim",   translation: "дом престарелых"      },
      { id: "a1_ao_008", article: "das", word: "Krankenhaus",  translation: "больница"             },
      { id: "a1_ao_009", article: "das", word: "Restaurant",   translation: "ресторан", translit: "ресторан" },
      { id: "a1_ao_010", article: "der", word: "Salon",        translation: "салон"                },
      { id: "a1_ao_011", article: "das", word: "Geschäft",     translation: "магазин"              },
      { id: "a1_ao_012", article: "die", word: "Bäckerei",     translation: "пекарня"              },
      { id: "a1_ao_013", article: "die", word: "Schule",       translation: "школа"                },
      { id: "a1_ao_014", article: "-",   word: "zu Hause",     translation: "дома"                 },
    ]
  },

  // ════════════════════════════════
  //  A1 — VERBEN: ARBEIT (Глаголы — работа)
  // ════════════════════════════════
  {
    level: "A1", category: "arbeitsverben", name: "Verben – Arbeit", name_ru: "Глаголы (работа)", emoji: "🛠️",
    words: [
      { id: "a1_av_001", article: "-", word: "arbeiten",     translation: "работать"                 },
      { id: "a1_av_002", article: "-", word: "backen",       translation: "печь"                     },
      { id: "a1_av_003", article: "-", word: "organisieren", translation: "организовывать"            },
      { id: "a1_av_004", article: "-", word: "pflegen",      translation: "ухаживать / заботиться"   },
      { id: "a1_av_005", article: "-", word: "putzen",       translation: "убирать / чистить"        },
      { id: "a1_av_006", article: "-", word: "reparieren",   translation: "ремонтировать"            },
      { id: "a1_av_007", article: "-", word: "schneiden",    translation: "резать"                   },
      { id: "a1_av_008", article: "-", word: "servieren",    translation: "подавать (блюда)"         },
      { id: "a1_av_009", article: "-", word: "studieren",    translation: "учиться (в вузе)"         },
      { id: "a1_av_010", article: "-", word: "suchen",       translation: "искать"                   },
      { id: "a1_av_011", article: "-", word: "telefonieren", translation: "звонить по телефону"      },
      { id: "a1_av_012", article: "-", word: "unterrichten", translation: "преподавать"              },
      { id: "a1_av_013", article: "-", word: "untersuchen",  translation: "осматривать (пациента)"   },
      { id: "a1_av_014", article: "-", word: "pflanzen",     translation: "сажать (растения)"        },
      { id: "a1_av_015", article: "-", word: "bauen",        translation: "строить"                  },
      { id: "a1_av_016", article: "-", word: "produzieren",  translation: "производить"              },
      { id: "a1_av_017", article: "-", word: "kochen",       translation: "готовить"                 },
      { id: "a1_av_018", article: "-", word: "frisieren",    translation: "делать причёску"          },
      { id: "a1_av_019", article: "-", word: "verkaufen",    translation: "продавать"                },
    ]
  },

  // ════════════════════════════════
  //  A1 — AM ARBEITSPLATZ (На рабочем месте — свойства)
  // ════════════════════════════════
  {
    level: "A1", category: "arbeitsplatz", name: "Am Arbeitsplatz", name_ru: "На работе (свойства)", emoji: "🧑‍💼",
    words: [
      { id: "a1_ae_001", article: "-", word: "flexibel",    translation: "гибкий"                   },
      { id: "a1_ae_002", article: "-", word: "freundlich",  translation: "дружелюбный"              },
      { id: "a1_ae_003", article: "-", word: "kreativ",     translation: "креативный / творческий"  },
      { id: "a1_ae_004", article: "-", word: "langweilig",  translation: "скучный"                  },
      { id: "a1_ae_005", article: "-", word: "interessant", translation: "интересный"               },
      { id: "a1_ae_006", article: "-", word: "pünktlich",   translation: "пунктуальный"             },
      { id: "a1_ae_007", article: "-", word: "gern",        translation: "охотно"                   },
      { id: "a1_ae_008", article: "-", word: "lieber",      translation: "охотнее / предпочтительнее" },
      { id: "a1_ae_009", article: "-", word: "heute Morgen",translation: "сегодня утром"            },
      { id: "a1_ae_010", article: "-", word: "vorgestern",  translation: "позавчера"                },
    ]
  },

  // ════════════════════════════════
  //  A1 — TRENNBARE VERBEN (Отделяемые глаголы, спряжение)
  //  Приставка «отрывается» и уходит в конец: ich stehe … auf
  // ════════════════════════════════
  {
    level: "A1", category: "trennbar", name: "Trennbare Verben", name_ru: "Отделяемые глаголы", emoji: "✂️", ruleId: "a1_gr_035", mode: "conjugation",
    words: [
      { id: "a1_tv_001", article: "-", word: "aufstehen",   translation: "вставать",            hint: "приставка <b>auf-</b> уходит в конец: ich stehe … <b>auf</b>", conj: { ich:"stehe auf",    du:"stehst auf",    er:"steht auf",    wir:"stehen auf",    ihr:"steht auf",    sie:"stehen auf"    } },
      { id: "a1_tv_002", article: "-", word: "einkaufen",   translation: "делать покупки",      hint: "приставка <b>ein-</b> в конец: ich kaufe … <b>ein</b>",       conj: { ich:"kaufe ein",    du:"kaufst ein",    er:"kauft ein",    wir:"kaufen ein",    ihr:"kauft ein",    sie:"kaufen ein"    } },
      { id: "a1_tv_003", article: "-", word: "ausfüllen",   translation: "заполнять (бланк)",   hint: "приставка <b>aus-</b> в конец: ich fülle … <b>aus</b>",       conj: { ich:"fülle aus",    du:"füllst aus",    er:"füllt aus",    wir:"füllen aus",    ihr:"füllt aus",    sie:"füllen aus"    } },
      { id: "a1_tv_004", article: "-", word: "anrufen",     translation: "звонить (кому-то)",   hint: "приставка <b>an-</b> в конец: ich rufe … <b>an</b>",          conj: { ich:"rufe an",      du:"rufst an",      er:"ruft an",      wir:"rufen an",      ihr:"ruft an",      sie:"rufen an"      } },
      { id: "a1_tv_005", article: "-", word: "anmelden",    translation: "регистрировать(ся)",  hint: "приставка <b>an-</b>: ich melde … <b>an</b>",                 conj: { ich:"melde an",     du:"meldest an",    er:"meldet an",    wir:"melden an",     ihr:"meldet an",    sie:"melden an"     } },
      { id: "a1_tv_006", article: "-", word: "aufräumen",   translation: "убирать (наводить порядок)", hint: "приставка <b>auf-</b>: ich räume … <b>auf</b>",         conj: { ich:"räume auf",    du:"räumst auf",    er:"räumt auf",    wir:"räumen auf",    ihr:"räumt auf",    sie:"räumen auf"    } },
      { id: "a1_tv_007", article: "-", word: "aufmachen",   translation: "открывать",           hint: "приставка <b>auf-</b>: ich mache … <b>auf</b>",               conj: { ich:"mache auf",    du:"machst auf",    er:"macht auf",    wir:"machen auf",    ihr:"macht auf",    sie:"machen auf"    } },
      { id: "a1_tv_008", article: "-", word: "fernsehen",   translation: "смотреть телевизор",  hint: "e→ie + <b>fern</b> в конец: ich sehe … <b>fern</b>, du s<b>ie</b>hst … fern", conj: { ich:"sehe fern",  du:"siehst fern",   er:"sieht fern",   wir:"sehen fern",    ihr:"seht fern",    sie:"sehen fern"    } },
      { id: "a1_tv_009", article: "-", word: "anfangen",    translation: "начинать",            hint: "a→ä + <b>an</b>: ich fange … an, du f<b>ä</b>ngst … <b>an</b>", conj: { ich:"fange an",    du:"fängst an",     er:"fängt an",     wir:"fangen an",     ihr:"fangt an",     sie:"fangen an"     } },
      { id: "a1_tv_010", article: "-", word: "aussteigen",  translation: "выходить (из транспорта)", hint: "приставка <b>aus-</b>: ich steige … <b>aus</b>",          conj: { ich:"steige aus",   du:"steigst aus",   er:"steigt aus",   wir:"steigen aus",   ihr:"steigt aus",   sie:"steigen aus"   } },
      { id: "a1_tv_011", article: "-", word: "umsteigen",   translation: "пересаживаться",      hint: "приставка <b>um-</b>: ich steige … <b>um</b>",                conj: { ich:"steige um",    du:"steigst um",    er:"steigt um",    wir:"steigen um",    ihr:"steigt um",    sie:"steigen um"    } },
      { id: "a1_tv_012", article: "-", word: "umtauschen",  translation: "обменивать (товар)",  hint: "приставка <b>um-</b>: ich tausche … <b>um</b>",               conj: { ich:"tausche um",   du:"tauschst um",   er:"tauscht um",   wir:"tauschen um",   ihr:"tauscht um",   sie:"tauschen um"   } },
      { id: "a1_tv_013", article: "-", word: "abholen",     translation: "забирать (встречать)",hint: "приставка <b>ab-</b>: ich hole … <b>ab</b>",                  conj: { ich:"hole ab",      du:"holst ab",      er:"holt ab",      wir:"holen ab",      ihr:"holt ab",      sie:"holen ab"      } },
      { id: "a1_tv_014", article: "-", word: "mitbringen",  translation: "приносить (с собой)", hint: "приставка <b>mit-</b>: ich bringe … <b>mit</b>",              conj: { ich:"bringe mit",   du:"bringst mit",   er:"bringt mit",   wir:"bringen mit",   ihr:"bringt mit",   sie:"bringen mit"   } },
      { id: "a1_tv_015", article: "-", word: "vorbereiten", translation: "подготавливать",      hint: "приставка <b>vor-</b>: ich bereite … <b>vor</b>",             conj: { ich:"bereite vor",  du:"bereitest vor", er:"bereitet vor", wir:"bereiten vor",  ihr:"bereitet vor", sie:"bereiten vor"  } },
      { id: "a1_tv_016", article: "-", word: "vorstellen",  translation: "представлять",        hint: "приставка <b>vor-</b>: ich stelle … <b>vor</b>",              conj: { ich:"stelle vor",   du:"stellst vor",   er:"stellt vor",   wir:"stellen vor",   ihr:"stellt vor",   sie:"stellen vor"   } },
      { id: "a1_tv_017", article: "-", word: "nachfragen",  translation: "переспрашивать",      hint: "приставка <b>nach-</b>: ich frage … <b>nach</b>",             conj: { ich:"frage nach",   du:"fragst nach",   er:"fragt nach",   wir:"fragen nach",   ihr:"fragt nach",   sie:"fragen nach"   } },
    ]
  },

  // ════════════════════════════════  МЕБЕЛЬ И ТЕХНИКА  ════════════════════════════════
  {
    level: "A1", category: "einrichtung", name: "Möbel & Einrichtung", name_ru: "Мебель и техника", emoji: "🛋️",
    words: [
      { id: "a1_en_001", article: "der", word: "Teppich",       translation: "ковёр"                     },
      { id: "a1_en_002", article: "das", word: "Regal",         translation: "полка / стеллаж"           },
      { id: "a1_en_003", article: "die", word: "Heizung",       translation: "батарея / отопление"       },
      { id: "a1_en_004", article: "die", word: "Kommode",       translation: "комод"                     },
      { id: "a1_en_005", article: "die", word: "Decke",         translation: "одеяло / потолок"          },
      { id: "a1_en_006", article: "die", word: "Matratze",      translation: "матрас"                    },
      { id: "a1_en_007", article: "die", word: "Dusche",        translation: "душ"                       },
      { id: "a1_en_008", article: "der", word: "Backofen",      translation: "духовка"                   },
      { id: "a1_en_009", article: "die", word: "Badewanne",     translation: "ванна"                     },
      { id: "a1_en_010", article: "die", word: "Waschmaschine", translation: "стиральная машина"         },
      { id: "a1_en_011", article: "die", word: "Spülmaschine",  translation: "посудомоечная машина"      },
      { id: "a1_en_012", article: "die", word: "Toilette",      translation: "туалет"                    },
      { id: "a1_en_013", article: "der", word: "Mülleimer",     translation: "мусорное ведро"            },
      { id: "a1_en_014", article: "die", word: "Steckdose",     translation: "розетка"                   },
      { id: "a1_en_015", article: "die", word: "Glühbirne",     translation: "лампочка"                  },
      { id: "a1_en_016", article: "der", word: "Wasserhahn",    translation: "кран (водопроводный)"      },
      { id: "a1_en_017", article: "das", word: "Waschbecken",   translation: "раковина"                  },
      { id: "a1_en_018", article: "der", word: "Spiegel",       translation: "зеркало"                   },
      { id: "a1_en_019", article: "der", word: "Vorhang",       translation: "штора / занавеска"         },
    ]
  },

  // ════════════════════════════════  КОМНАТЫ  ════════════════════════════════
  {
    level: "A1", category: "raeume", name: "Räume", name_ru: "Комнаты в доме", emoji: "🚪",
    words: [
      { id: "a1_rm_001", article: "das", word: "Wohnzimmer",    translation: "гостиная"                  },
      { id: "a1_rm_002", article: "das", word: "Schlafzimmer",  translation: "спальня"                   },
      { id: "a1_rm_003", article: "die", word: "Küche",         translation: "кухня"                     },
      { id: "a1_rm_004", article: "das", word: "Badezimmer",    translation: "ванная комната"            },
      { id: "a1_rm_005", article: "das", word: "Kinderzimmer",  translation: "детская комната"           },
      { id: "a1_rm_006", article: "das", word: "Arbeitszimmer", translation: "рабочий кабинет"           },
      { id: "a1_rm_007", article: "der", word: "Balkon",        translation: "балкон"                    },
      { id: "a1_rm_008", article: "der", word: "Keller",        translation: "подвал"                    },
      { id: "a1_rm_009", article: "die", word: "Garage",        translation: "гараж"                     },
      { id: "a1_rm_010", article: "der", word: "Garten",        translation: "сад"                       },
      { id: "a1_rm_011", article: "der", word: "Flur",          translation: "коридор / прихожая"        },
      { id: "a1_rm_012", article: "die", word: "Waschküche",    translation: "прачечная"                 },
    ]
  },

  // ════════════════════════════════  ТИПЫ ЖИЛЬЯ  ════════════════════════════════
  {
    level: "A1", category: "wohnformen", name: "Wohnformen", name_ru: "Типы жилья", emoji: "🏠",
    words: [
      { id: "a1_wf_001", article: "die", word: "Wohnung",            translation: "квартира"             },
      { id: "a1_wf_002", article: "das", word: "Einfamilienhaus",    translation: "дом на одну семью"    },
      { id: "a1_wf_003", article: "das", word: "Mehrfamilienhaus",   translation: "многоквартирный дом"  },
      { id: "a1_wf_004", article: "das", word: "Reihenhaus",         translation: "таунхаус"             },
      { id: "a1_wf_005", article: "das", word: "Hochhaus",           translation: "высотка"              },
      { id: "a1_wf_006", article: "das", word: "Erdgeschoss",        translation: "первый этаж"          },
      { id: "a1_wf_007", article: "das", word: "Obergeschoss",       translation: "верхний этаж"         },
      { id: "a1_wf_008", article: "das", word: "Dachgeschoss",       translation: "мансарда / верх. этаж" },
      { id: "a1_wf_009", article: "die", word: "Wohngemeinschaft",   translation: "совместное жильё (WG)" },
      { id: "a1_wf_010", article: "das", word: "Eigentum",           translation: "собственность"        },
    ]
  },

  // ════════════════════════════════  ДОМ И ВХОД  ════════════════════════════════
  {
    level: "A1", category: "hauseingang", name: "Haus & Eingang", name_ru: "Дом и вход", emoji: "🚪",
    words: [
      { id: "a1_he_001", article: "das", word: "Fenster",       translation: "окно"                      },
      { id: "a1_he_002", article: "der", word: "Rollladen",     translation: "рольставни / жалюзи"       },
      { id: "a1_he_003", article: "der", word: "Lichtschalter", translation: "выключатель света"         },
      { id: "a1_he_004", article: "die", word: "Klingel",       translation: "дверной звонок"            },
      { id: "a1_he_005", article: "der", word: "Briefkasten",   translation: "почтовый ящик"             },
      { id: "a1_he_006", article: "die", word: "Hausnummer",    translation: "номер дома"                },
      { id: "a1_he_007", article: "die", word: "Treppe",        translation: "лестница"                  },
      { id: "a1_he_008", article: "der", word: "Vermieter",     translation: "арендодатель"              },
      { id: "a1_he_009", article: "der", word: "Mieter",        translation: "арендатор / квартиросъёмщик" },
    ]
  },

  // ════════════════════════════════  АРЕНДА ЖИЛЬЯ  ════════════════════════════════
  {
    level: "A1", category: "mieten", name: "Wohnung mieten", name_ru: "Аренда жилья", emoji: "🔑",
    words: [
      { id: "a1_mt_001", article: "der", word: "Mietvertrag",   translation: "договор аренды"            },
      { id: "a1_mt_002", article: "die", word: "Miete",         translation: "аренда / квартплата"       },
      { id: "a1_mt_003", article: "die", word: "Kaltmiete",     translation: "аренда без комм. услуг (KM)" },
      { id: "a1_mt_004", article: "die", word: "Warmmiete",     translation: "аренда с комм. услугами (WM)" },
      { id: "a1_mt_005", article: "die", word: "Nebenkosten",   translation: "коммунальные расходы (NK)" },
      { id: "a1_mt_006", article: "die", word: "Kaution",       translation: "залог (KT)"                },
      { id: "a1_mt_007", article: "der", word: "Quadratmeter",  translation: "квадратный метр (qm)"      },
      { id: "a1_mt_008", article: "die", word: "Einbauküche",   translation: "встроенная кухня (EBK)"    },
      { id: "a1_mt_009", article: "das", word: "Zimmer",        translation: "комната (Zi)"              },
      { id: "a1_mt_010", article: "die", word: "Kündigung",     translation: "расторжение / уведомление" },
      { id: "a1_mt_011", article: "die", word: "Hausordnung",   translation: "правила проживания"        },
    ]
  },

  // ════════════════════════════════  КОТОРЫЙ ЧАС  ════════════════════════════════
  {
    level: "A1", category: "uhrzeit", name: "Uhrzeit", name_ru: "Который час (время)", emoji: "🕐",
    words: [
      { id: "a1_uz_001", article: "-", word: "Wie spät ist es?",   translation: "который час?"           },
      { id: "a1_uz_002", article: "-", word: "Viertel nach",       translation: "четверть после (:15)"   },
      { id: "a1_uz_003", article: "-", word: "Viertel vor",        translation: "без четверти (:45)"     },
      { id: "a1_uz_004", article: "-", word: "halb",               translation: "половина (:30)"         },
      { id: "a1_uz_005", article: "-", word: "fünf nach",          translation: "пять минут после (:05)" },
      { id: "a1_uz_006", article: "-", word: "zehn nach",          translation: "десять после (:10)"     },
      { id: "a1_uz_007", article: "-", word: "zwanzig nach",       translation: "двадцать после (:20)"   },
      { id: "a1_uz_008", article: "-", word: "fünf vor",           translation: "без пяти (:55)"         },
      { id: "a1_uz_009", article: "-", word: "zehn vor",           translation: "без десяти (:50)"       },
      { id: "a1_uz_010", article: "-", word: "zwanzig vor",        translation: "без двадцати (:40)"     },
      { id: "a1_uz_011", article: "-", word: "geöffnet",           translation: "открыто"                },
      { id: "a1_uz_012", article: "-", word: "geschlossen",        translation: "закрыто"                },
    ]
  },

  // ════════════════════════════════  МОЙ ДЕНЬ  ════════════════════════════════
  {
    level: "A1", category: "alltag", name: "Mein Tag", name_ru: "Мой день (распорядок)", emoji: "📅",
    words: [
      { id: "a1_al_001", article: "-", word: "ins Bett gehen",         translation: "ложиться спать"       },
      { id: "a1_al_002", article: "-", word: "frühstücken",            translation: "завтракать"           },
      { id: "a1_al_003", article: "-", word: "Frühstück machen",       translation: "готовить завтрак"     },
      { id: "a1_al_004", article: "-", word: "Fußball spielen",        translation: "играть в футбол"      },
      { id: "a1_al_005", article: "-", word: "müde sein",              translation: "быть уставшим"        },
      { id: "a1_al_006", article: "-", word: "Sport machen",           translation: "заниматься спортом"   },
      { id: "a1_al_007", article: "-", word: "spazieren gehen",        translation: "гулять"               },
      { id: "a1_al_008", article: "-", word: "ein Computerspiel spielen", translation: "играть в комп. игру" },
      { id: "a1_al_009", article: "-", word: "eine E-Mail schreiben",  translation: "писать имейл"         },
    ]
  },

  // ════════════════════════════════  РАБОТА ПО ДОМУ  ════════════════════════════════
  {
    level: "A1", category: "hausarbeit", name: "Hausarbeit & Wäsche", name_ru: "Работа по дому и бельё", emoji: "🧹",
    words: [
      { id: "a1_ha_001", article: "die", word: "Hausarbeit",              translation: "работа по дому"        },
      { id: "a1_ha_002", article: "-",   word: "Wäsche waschen",          translation: "стирать бельё"         },
      { id: "a1_ha_003", article: "-",   word: "Wäsche trocknen",         translation: "сушить бельё"          },
      { id: "a1_ha_004", article: "-",   word: "Wäsche aufhängen",        translation: "вешать бельё"          },
      { id: "a1_ha_005", article: "-",   word: "Wäsche bügeln",           translation: "гладить бельё"         },
      { id: "a1_ha_006", article: "-",   word: "Wäsche zusammenfalten",   translation: "складывать бельё"      },
      { id: "a1_ha_007", article: "-",   word: "den Müll rausbringen",    translation: "выносить мусор"        },
      { id: "a1_ha_008", article: "-",   word: "das Bett machen",         translation: "заправлять кровать"    },
      { id: "a1_ha_009", article: "-",   word: "den Tisch decken",        translation: "накрывать на стол"     },
      { id: "a1_ha_010", article: "-",   word: "den Tisch abräumen",      translation: "убирать со стола"      },
      { id: "a1_ha_011", article: "-",   word: "das Geschirr spülen",     translation: "мыть посуду"           },
      { id: "a1_ha_012", article: "-",   word: "die Blumen gießen",       translation: "поливать цветы"        },
      { id: "a1_ha_013", article: "-",   word: "staubsaugen",             translation: "пылесосить"            },
      { id: "a1_ha_014", article: "-",   word: "im Haushalt helfen",      translation: "помогать по хозяйству" },
      { id: "a1_ha_015", article: "das", word: "Elterngeld",             translation: "пособие на ребёнка"    },
      { id: "a1_ha_016", article: "die", word: "Tagesmutter",           translation: "няня (дневная)"        },
      { id: "a1_ha_017", article: "-",   word: "Teilzeit arbeiten",       translation: "работать на полставки" },
      { id: "a1_ha_018", article: "-",   word: "Vollzeit arbeiten",       translation: "работать на полную ставку" },
    ]
  },

  // ════════════════════════════════  УПАКОВКИ  ════════════════════════════════
  {
    level: "A1", category: "verpackung", name: "Verpackungen", name_ru: "Упаковки", emoji: "📦",
    words: [
      { id: "a1_vp_001", article: "die", word: "Packung",     translation: "пачка / упаковка"           },
      { id: "a1_vp_002", article: "die", word: "Papiertüte",  translation: "бумажный пакет"             },
      { id: "a1_vp_003", article: "die", word: "Dose",        translation: "банка (консервная)"         },
      { id: "a1_vp_004", article: "der", word: "Karton",      translation: "картонная коробка / пакет"  },
      { id: "a1_vp_005", article: "der", word: "Becher",      translation: "стаканчик (йогурта)"        },
      { id: "a1_vp_006", article: "das", word: "Netz",        translation: "сетка (для овощей)"         },
      { id: "a1_vp_007", article: "die", word: "Schachtel",   translation: "коробка (напр. конфет)"     },
    ]
  },

  // ════════════════════════════════  В СУПЕРМАРКЕТЕ  ════════════════════════════════
  {
    level: "A1", category: "supermarkt", name: "Im Supermarkt", name_ru: "В супермаркете", emoji: "🛒",
    words: [
      { id: "a1_sm_001", article: "der", word: "Einkaufswagen",   translation: "тележка для покупок"    },
      { id: "a1_sm_002", article: "der", word: "Einkaufskorb",    translation: "корзина для покупок"    },
      { id: "a1_sm_003", article: "die", word: "Einkaufsliste",   translation: "список покупок"         },
      { id: "a1_sm_004", article: "die", word: "Frischetheke",    translation: "прилавок свежих продуктов" },
      { id: "a1_sm_005", article: "die", word: "Gemüseabteilung", translation: "овощной отдел"          },
      { id: "a1_sm_006", article: "die", word: "Tiefkühltruhe",   translation: "морозильная камера"     },
      { id: "a1_sm_007", article: "der", word: "Kassenzettel",    translation: "чек (кассовый)"         },
      { id: "a1_sm_008", article: "das", word: "Produkt",         translation: "продукт / товар"        },
      { id: "a1_sm_009", article: "die", word: "Tüte",            translation: "пакет"                  },
      { id: "a1_sm_010", article: "die", word: "Quittung",        translation: "квитанция"              },
    ]
  },

  // ════════════════════════════════  ГИГИЕНА 2  ════════════════════════════════
  {
    level: "A1", category: "hygiene2", name: "Hygieneartikel 2", name_ru: "Гигиена (ещё)", emoji: "🧼",
    words: [
      { id: "a1_hy_001", article: "das", word: "Make-up",        translation: "макияж / косметика"      },
      { id: "a1_hy_002", article: "die", word: "Binde",          translation: "гигиеническая прокладка" },
      { id: "a1_hy_003", article: "der", word: "Tampon",         translation: "тампон"                  },
      { id: "a1_hy_004", article: "die", word: "Bürste",         translation: "щётка (для волос)"       },
      { id: "a1_hy_005", article: "das", word: "Handtuch",       translation: "полотенце"               },
      { id: "a1_hy_006", article: "das", word: "Spülmittel",     translation: "средство для мытья посуды" },
      { id: "a1_hy_007", article: "die", word: "Windel",         translation: "подгузник"               },
      { id: "a1_hy_008", article: "das", word: "Taschentuch",    translation: "носовой платок"          },
      { id: "a1_hy_009", article: "das", word: "Küchenpapier",   translation: "бумажные полотенца"      },
      { id: "a1_hy_010", article: "das", word: "Waschmittel",    translation: "стиральный порошок"      },
    ]
  },

  // ════════════════════════════════  ОДЕЖДА 2  ════════════════════════════════
  {
    level: "A1", category: "kleidung2", name: "Kleidung 2", name_ru: "Одежда (ещё)", emoji: "👕",
    words: [
      { id: "a1_k2_001", article: "der", word: "Kapuzenpullover", translation: "худи / толстовка"       },
      { id: "a1_k2_002", article: "die", word: "Shorts",          translation: "шорты"                  },
      { id: "a1_k2_003", article: "der", word: "Schlafanzug",     translation: "пижама"                 },
      { id: "a1_k2_004", article: "die", word: "Unterwäsche",     translation: "нижнее бельё"           },
      { id: "a1_k2_005", article: "die", word: "Flip-Flops",      translation: "вьетнамки / шлёпанцы"   },
      { id: "a1_k2_006", article: "die", word: "Kappe",           translation: "кепка"                  },
      { id: "a1_k2_007", article: "die", word: "Sonnenbrille",    translation: "солнцезащитные очки"    },
      { id: "a1_k2_008", article: "die", word: "Gummistiefel",    translation: "резиновые сапоги"       },
      { id: "a1_k2_009", article: "die", word: "Uhr",             translation: "часы (наручные)"        },
      { id: "a1_k2_010", article: "der", word: "Ring",            translation: "кольцо"                 },
      { id: "a1_k2_011", article: "das", word: "Kopftuch",        translation: "платок (на голову)"     },
      { id: "a1_k2_012", article: "der", word: "Kleiderbügel",    translation: "вешалка (плечики)"      },
      { id: "a1_k2_013", article: "der", word: "Body",            translation: "боди (детский)"         },
    ]
  },

  // ════════════════════════════════  КАК ЧАСТО  ════════════════════════════════
  {
    level: "A1", category: "haeufigkeit", name: "Häufigkeit", name_ru: "Как часто", emoji: "🔁",
    words: [
      { id: "a1_hf_001", article: "-", word: "immer",     translation: "всегда (100%)"     },
      { id: "a1_hf_002", article: "-", word: "meistens",  translation: "чаще всего (80%)"  },
      { id: "a1_hf_003", article: "-", word: "oft",       translation: "часто (60%)"       },
      { id: "a1_hf_004", article: "-", word: "manchmal",  translation: "иногда (40%)"      },
      { id: "a1_hf_005", article: "-", word: "selten",    translation: "редко (20%)"       },
      { id: "a1_hf_006", article: "-", word: "nie",       translation: "никогда (0%)"      },
    ]
  },

  // ════════════════════════════════
  //  A2 — ЭКСКУРСИЯ: СУЩЕСТВИТЕЛЬНЫЕ И ГЛАГОЛЫ
  // ════════════════════════════════

  {
    level: "A2", category: "strassen", name: "Straßen & Verkehr", name_ru: "Дороги и движение", emoji: "🚦",
    words: [
      { id: "a2_strassen_001", article: "das", word: "E-Bike", translation: "электровелосипед" },
      { id: "a2_strassen_002", article: "das", word: "Schlagloch", translation: "выбоина на дороге" },
      { id: "a2_strassen_003", article: "das", word: "Stoppschild", translation: "знак «стоп»" },
      { id: "a2_strassen_004", article: "das", word: "Straßenschild", translation: "дорожный указатель" },
      { id: "a2_strassen_005", article: "das", word: "Verkehrsschild", translation: "дорожный знак" },
      { id: "a2_strassen_006", article: "das", word: "Vorfahrtsschild", translation: "знак приоритета проезда" },
      { id: "a2_strassen_007", article: "der", word: "Asphalt", translation: "асфальт" },
      { id: "a2_strassen_008", article: "der", word: "Bahnsteig", translation: "платформа (перрон)" },
      { id: "a2_strassen_009", article: "der", word: "Bahnübergang", translation: "железнодорожный переезд" },
      { id: "a2_strassen_010", article: "der", word: "Bordstein", translation: "бордюр" },
      { id: "a2_strassen_011", article: "der", word: "Busfahrer", translation: "водитель автобуса" },
      { id: "a2_strassen_012", article: "der", word: "Bürgersteig", translation: "тротуар" },
      { id: "a2_strassen_013", article: "der", word: "Fahrradständer", translation: "велопарковка" },
      { id: "a2_strassen_014", article: "der", word: "Fußgänger", translation: "пешеход" },
      { id: "a2_strassen_015", article: "der", word: "Gehweg", translation: "пешеходная дорожка" },
      { id: "a2_strassen_016", article: "der", word: "Gully", translation: "ливневый люк" },
      { id: "a2_strassen_017", article: "der", word: "Kanaldeckel", translation: "канализационный люк" },
      { id: "a2_strassen_018", article: "der", word: "Kies", translation: "гравий" },
      { id: "a2_strassen_019", article: "der", word: "Kiesel", translation: "галька" },
      { id: "a2_strassen_020", article: "der", word: "Lastwagen", translation: "грузовик" },
      { id: "a2_strassen_021", article: "der", word: "Lichtmast", translation: "фонарный столб" },
      { id: "a2_strassen_022", article: "der", word: "Lieferwagen", translation: "фургон для доставки" },
      { id: "a2_strassen_023", article: "der", word: "Parkplatz", translation: "парковка" },
      { id: "a2_strassen_024", article: "der", word: "Pflasterstein", translation: "брусчатка" },
      { id: "a2_strassen_025", article: "der", word: "Poller", translation: "защитный столбик" },
      { id: "a2_strassen_026", article: "der", word: "Radfahrer", translation: "велосипедист" },
      { id: "a2_strassen_027", article: "der", word: "Regenablauf", translation: "водосток" },
      { id: "a2_strassen_028", article: "der", word: "Riss", translation: "трещина" },
      { id: "a2_strassen_029", article: "der", word: "Sand", translation: "песок" },
      { id: "a2_strassen_030", article: "der", word: "Schotter", translation: "щебень" },
      { id: "a2_strassen_031", article: "der", word: "Stein", translation: "камень" },
      { id: "a2_strassen_032", article: "der", word: "Tunnel", translation: "туннель" },
      { id: "a2_strassen_033", article: "die", word: "Ausfahrt", translation: "выезд" },
      { id: "a2_strassen_034", article: "die", word: "Bordsteinkante", translation: "край бордюра" },
      { id: "a2_strassen_035", article: "die", word: "Einbahnstraße", translation: "улица с односторонним движением" },
      { id: "a2_strassen_036", article: "die", word: "Einfahrt", translation: "въезд" },
      { id: "a2_strassen_037", article: "die", word: "Fahrbahn", translation: "проезжая часть" },
      { id: "a2_strassen_038", article: "die", word: "Fahrspur", translation: "полоса движения" },
      { id: "a2_strassen_039", article: "die", word: "Ladestation", translation: "зарядная станция" },
      { id: "a2_strassen_040", article: "die", word: "Laterne", translation: "фонарь" },
      { id: "a2_strassen_041", article: "die", word: "Markierung", translation: "разметка" },
      { id: "a2_strassen_042", article: "die", word: "Parkbucht", translation: "парковочный карман" },
      { id: "a2_strassen_043", article: "die", word: "Parkuhr", translation: "паркомат" },
      { id: "a2_strassen_044", article: "die", word: "Pfütze", translation: "лужа" },
      { id: "a2_strassen_045", article: "die", word: "Schranke", translation: "шлагбаум" },
      { id: "a2_strassen_046", article: "die", word: "Straßenlaterne", translation: "уличный фонарь" },
    ]
  },

  {
    level: "A2", category: "gebaeude", name: "Gebäude & Wohnumgebung", name_ru: "Здания и жилая среда", emoji: "🏘️",
    words: [
      { id: "a2_gebaeude_001", article: "das", word: "Dachfenster", translation: "мансардное окно" },
      { id: "a2_gebaeude_002", article: "das", word: "Garagentor", translation: "ворота гаража" },
      { id: "a2_gebaeude_003", article: "das", word: "Gartenhaus", translation: "садовый домик" },
      { id: "a2_gebaeude_004", article: "das", word: "Gartentor", translation: "садовая калитка" },
      { id: "a2_gebaeude_005", article: "das", word: "Geländer", translation: "перила" },
      { id: "a2_gebaeude_006", article: "das", word: "Namensschild", translation: "табличка с именем" },
      { id: "a2_gebaeude_007", article: "das", word: "Tor", translation: "ворота" },
      { id: "a2_gebaeude_008", article: "das", word: "Treppengeländer", translation: "перила лестницы" },
      { id: "a2_gebaeude_009", article: "das", word: "Vordach", translation: "козырёк над входом" },
      { id: "a2_gebaeude_010", article: "der", word: "Altkleidercontainer", translation: "контейнер для одежды" },
      { id: "a2_gebaeude_011", article: "der", word: "Busch", translation: "куст" },
      { id: "a2_gebaeude_012", article: "der", word: "Carport", translation: "навес для машины" },
      { id: "a2_gebaeude_013", article: "der", word: "Glascontainer", translation: "контейнер для стекла" },
      { id: "a2_gebaeude_014", article: "der", word: "Hinterhof", translation: "задний двор" },
      { id: "a2_gebaeude_015", article: "der", word: "Hof", translation: "двор" },
      { id: "a2_gebaeude_016", article: "der", word: "Kellerabgang", translation: "спуск в подвал" },
      { id: "a2_gebaeude_017", article: "der", word: "Schornstein", translation: "дымоход" },
      { id: "a2_gebaeude_018", article: "der", word: "Schuppen", translation: "сарай" },
      { id: "a2_gebaeude_019", article: "die", word: "Außenlampe", translation: "уличный светильник" },
      { id: "a2_gebaeude_020", article: "die", word: "Biotonne", translation: "бак для биоотходов" },
      { id: "a2_gebaeude_021", article: "die", word: "Dachrinne", translation: "водосточный жёлоб" },
      { id: "a2_gebaeude_022", article: "die", word: "Eingangstür", translation: "входная дверь" },
      { id: "a2_gebaeude_023", article: "die", word: "Fassade", translation: "фасад" },
      { id: "a2_gebaeude_024", article: "die", word: "Hauswand", translation: "стена дома" },
      { id: "a2_gebaeude_025", article: "die", word: "Hecke", translation: "живая изгородь" },
      { id: "a2_gebaeude_026", article: "die", word: "Hofeinfahrt", translation: "въезд во двор" },
      { id: "a2_gebaeude_027", article: "die", word: "Mauer", translation: "стена (ограждение)" },
      { id: "a2_gebaeude_028", article: "die", word: "Mülltonne", translation: "мусорный бак" },
      { id: "a2_gebaeude_029", article: "die", word: "Papiertonne", translation: "бак для бумаги" },
      { id: "a2_gebaeude_030", article: "die", word: "Regenrinne", translation: "водосточная труба" },
      { id: "a2_gebaeude_031", article: "die", word: "Satellitenschüssel", translation: "спутниковая тарелка" },
      { id: "a2_gebaeude_032", article: "die", word: "Solaranlage", translation: "солнечная батарея" },
      { id: "a2_gebaeude_033", article: "die", word: "Sprechanlage", translation: "домофон" },
      { id: "a2_gebaeude_034", article: "die", word: "Stufe", translation: "ступенька" },
      { id: "a2_gebaeude_035", article: "die", word: "Terrasse", translation: "терраса" },
      { id: "a2_gebaeude_036", article: "die", word: "Türklinke", translation: "дверная ручка" },
    ]
  },

  {
    level: "A2", category: "natur", name: "Natur", name_ru: "Природа", emoji: "🌳",
    words: [
      { id: "a2_natur_001", article: "das", word: "Blatt", translation: "лист" },
      { id: "a2_natur_002", article: "das", word: "Feld", translation: "поле" },
      { id: "a2_natur_003", article: "das", word: "Gras", translation: "трава" },
      { id: "a2_natur_004", article: "das", word: "Laub", translation: "опавшая листва" },
      { id: "a2_natur_005", article: "das", word: "Moos", translation: "мох" },
      { id: "a2_natur_006", article: "das", word: "Schilf", translation: "камыш" },
      { id: "a2_natur_007", article: "das", word: "Unkraut", translation: "сорняк" },
      { id: "a2_natur_008", article: "der", word: "Ast", translation: "ветка (сук)" },
      { id: "a2_natur_009", article: "der", word: "Bach", translation: "ручей" },
      { id: "a2_natur_010", article: "der", word: "Baumstamm", translation: "ствол дерева" },
      { id: "a2_natur_012", article: "der", word: "Farn", translation: "папоротник" },
      { id: "a2_natur_013", article: "der", word: "Fels", translation: "скала" },
      { id: "a2_natur_014", article: "der", word: "Fluss", translation: "река" },
      { id: "a2_natur_015", article: "der", word: "Himmel", translation: "небо" },
      { id: "a2_natur_016", article: "der", word: "Hügel", translation: "холм" },
      { id: "a2_natur_017", article: "der", word: "Kieselstein", translation: "галька" },
      { id: "a2_natur_018", article: "der", word: "Klee", translation: "клевер" },
      { id: "a2_natur_019", article: "der", word: "Rasen", translation: "газон" },
      { id: "a2_natur_020", article: "der", word: "Regenbogen", translation: "радуга" },
      { id: "a2_natur_021", article: "der", word: "Schatten", translation: "тень" },
      { id: "a2_natur_022", article: "der", word: "Schlamm", translation: "грязь / ил" },
      { id: "a2_natur_023", article: "der", word: "See", translation: "озеро" },
      { id: "a2_natur_024", article: "der", word: "Strauch", translation: "кустарник" },
      { id: "a2_natur_025", article: "der", word: "Tannenzapfen", translation: "еловая шишка" },
      { id: "a2_natur_026", article: "der", word: "Teich", translation: "пруд" },
      { id: "a2_natur_027", article: "der", word: "Wald", translation: "лес" },
      { id: "a2_natur_028", article: "der", word: "Waldboden", translation: "лесная подстилка" },
      { id: "a2_natur_029", article: "der", word: "Zweig", translation: "веточка" },
      { id: "a2_natur_030", article: "die", word: "Baumrinde", translation: "кора дерева" },
      { id: "a2_natur_031", article: "die", word: "Blüte", translation: "цветение / соцветие" },
      { id: "a2_natur_032", article: "die", word: "Buche", translation: "бук" },
      { id: "a2_natur_033", article: "die", word: "Eichel", translation: "жёлудь" },
      { id: "a2_natur_034", article: "die", word: "Erde", translation: "земля / почва" },
      { id: "a2_natur_035", article: "die", word: "Kastanie", translation: "каштан" },
      { id: "a2_natur_036", article: "die", word: "Knospe", translation: "почка (растения)" },
      { id: "a2_natur_037", article: "die", word: "Wurzel", translation: "корень" },
    ]
  },

  {
    level: "A2", category: "geschaefte", name: "Geschäfte & öffentliche Orte", name_ru: "Магазины и общественные места", emoji: "🏪",
    words: [
      { id: "a2_geschaefte_001", article: "das", word: "Denkmal", translation: "памятник" },
      { id: "a2_geschaefte_002", article: "das", word: "Plakat", translation: "афиша" },
      { id: "a2_geschaefte_003", article: "das", word: "Schaufenster", translation: "витрина" },
      { id: "a2_geschaefte_004", article: "der", word: "Ausgang", translation: "выход" },
      { id: "a2_geschaefte_005", article: "der", word: "Brunnen", translation: "фонтан" },
      { id: "a2_geschaefte_006", article: "der", word: "Eingang", translation: "вход" },
      { id: "a2_geschaefte_007", article: "der", word: "Geldautomat", translation: "банкомат" },
      { id: "a2_geschaefte_008", article: "der", word: "Sportplatz", translation: "спортивная площадка" },
      { id: "a2_geschaefte_009", article: "der", word: "Wochenmarkt", translation: "еженедельный рынок" },
      { id: "a2_geschaefte_010", article: "die", word: "Drogerie", translation: "магазин косметики (дрогери)" },
      { id: "a2_geschaefte_011", article: "die", word: "Eisdiele", translation: "кафе-мороженое" },
      { id: "a2_geschaefte_012", article: "die", word: "Feuerwehr", translation: "пожарная часть" },
      { id: "a2_geschaefte_013", article: "die", word: "Litfaßsäule", translation: "афишная тумба" },
      { id: "a2_geschaefte_014", article: "die", word: "Sitzbank", translation: "скамейка" },
      { id: "a2_geschaefte_015", article: "die", word: "Sporthalle", translation: "спортзал" },
      { id: "a2_geschaefte_016", article: "die", word: "Statue", translation: "статуя" },
      { id: "a2_geschaefte_017", article: "die", word: "Werbung", translation: "реклама" },
    ]
  },

  {
    level: "A2", category: "menschen", name: "Menschen, Tiere & Gegenstände", name_ru: "Люди, животные и предметы", emoji: "🧑‍🤝‍🧑",
    words: [
      { id: "a2_menschen_001", article: "das", word: "Angebot", translation: "предложение (акция)" },
      { id: "a2_menschen_002", article: "das", word: "Baby", translation: "младенец" },
      { id: "a2_menschen_003", article: "das", word: "Eichhörnchen", translation: "белка" },
      { id: "a2_menschen_004", article: "das", word: "Paket", translation: "посылка" },
      { id: "a2_menschen_005", article: "das", word: "Preisschild", translation: "ценник" },
      { id: "a2_menschen_006", article: "das", word: "Schloss", translation: "замок (устройство)" },
      { id: "a2_menschen_007", article: "der", word: "Erwachsene", translation: "взрослый" },
      { id: "a2_menschen_008", article: "der", word: "Hundebesitzer", translation: "хозяин собаки" },
      { id: "a2_menschen_009", article: "der", word: "Hundekotbeutel", translation: "пакет для собачьих отходов" },
      { id: "a2_menschen_010", article: "der", word: "Kassenbon", translation: "кассовый чек" },
      { id: "a2_menschen_011", article: "der", word: "Kinderwagen", translation: "детская коляска" },
      { id: "a2_menschen_012", article: "der", word: "Korb", translation: "корзина" },
      { id: "a2_menschen_013", article: "der", word: "Radhelm", translation: "велошлем" },
      { id: "a2_menschen_014", article: "der", word: "Regenschirm", translation: "зонт" },
      { id: "a2_menschen_015", article: "der", word: "Rollerfahrer", translation: "самокатчик" },
      { id: "a2_menschen_016", article: "der", word: "Rucksack", translation: "рюкзак" },
      { id: "a2_menschen_017", article: "der", word: "Schmetterling", translation: "бабочка" },
      { id: "a2_menschen_018", article: "der", word: "Senior", translation: "пожилой человек" },
      { id: "a2_menschen_019", article: "der", word: "Zigarettenautomat", translation: "сигаретный автомат" },
      { id: "a2_menschen_020", article: "die", word: "Ameise", translation: "муравей" },
      { id: "a2_menschen_021", article: "die", word: "Biene", translation: "пчела" },
      { id: "a2_menschen_022", article: "die", word: "Familie", translation: "семья" },
      { id: "a2_menschen_023", article: "die", word: "Fliege", translation: "муха" },
      { id: "a2_menschen_024", article: "die", word: "Hundeleine", translation: "поводок для собаки" },
      { id: "a2_menschen_025", article: "die", word: "Kamera", translation: "фотоаппарат" },
      { id: "a2_menschen_026", article: "die", word: "Kopfhörer", translation: "наушники" },
      { id: "a2_menschen_027", article: "die", word: "Krähe", translation: "ворона" },
      { id: "a2_menschen_028", article: "die", word: "Seniorin", translation: "пожилая женщина" },
      { id: "a2_menschen_029", article: "die", word: "Taube", translation: "голубь" },
      { id: "a2_menschen_030", article: "die", word: "Warnweste", translation: "светоотражающий жилет" },
      { id: "a2_menschen_031", article: "die", word: "Wasserflasche", translation: "бутылка для воды" },
      { id: "a2_menschen_032", article: "die", word: "Zigarette", translation: "сигарета" },
    ]
  },

  {
    level: "A2", category: "vb_bewegung", name: "Verben – Bewegung", name_ru: "Глаголы: движение", emoji: "🏃",
    words: [
      { id: "a2_vb_bewegung_001", article: "-", word: "anhalten", translation: "останавливать(ся)" },
      { id: "a2_vb_bewegung_002", article: "-", word: "ankommen", translation: "прибывать" },
      { id: "a2_vb_bewegung_003", article: "-", word: "entlanggehen", translation: "идти вдоль" },
      { id: "a2_vb_bewegung_004", article: "-", word: "fallen", translation: "падать" },
      { id: "a2_vb_bewegung_005", article: "-", word: "folgen", translation: "следовать" },
      { id: "a2_vb_bewegung_006", article: "-", word: "hüpfen", translation: "прыгать (скакать)" },
      { id: "a2_vb_bewegung_007", article: "-", word: "joggen", translation: "бегать трусцой" },
      { id: "a2_vb_bewegung_008", article: "-", word: "klettern", translation: "лазить / карабкаться" },
      { id: "a2_vb_bewegung_009", article: "-", word: "rennen", translation: "бежать (быстро)" },
      { id: "a2_vb_bewegung_010", article: "-", word: "schieben", translation: "толкать" },
      { id: "a2_vb_bewegung_011", article: "-", word: "schleichen", translation: "красться" },
      { id: "a2_vb_bewegung_012", article: "-", word: "sitzen", translation: "сидеть" },
      { id: "a2_vb_bewegung_013", article: "-", word: "spazieren", translation: "гулять" },
      { id: "a2_vb_bewegung_014", article: "-", word: "springen", translation: "прыгать" },
      { id: "a2_vb_bewegung_015", article: "-", word: "stehen", translation: "стоять" },
      { id: "a2_vb_bewegung_016", article: "-", word: "steigen", translation: "подниматься" },
      { id: "a2_vb_bewegung_017", article: "-", word: "stolpern", translation: "спотыкаться" },
      { id: "a2_vb_bewegung_018", article: "-", word: "umdrehen", translation: "разворачиваться" },
      { id: "a2_vb_bewegung_019", article: "-", word: "verlassen", translation: "покидать" },
      { id: "a2_vb_bewegung_020", article: "-", word: "wandern", translation: "путешествовать пешком" },
      { id: "a2_vb_bewegung_021", article: "-", word: "warten", translation: "ждать" },
      { id: "a2_vb_bewegung_022", article: "-", word: "zurückgehen", translation: "возвращаться (идти назад)" },
    ]
  },

  {
    level: "A2", category: "vb_sehen", name: "Verben – Sehen & Wahrnehmen", name_ru: "Глаголы: видеть и воспринимать", emoji: "👀",
    words: [
      { id: "a2_vb_sehen_001", article: "-", word: "anschauen", translation: "смотреть (разглядывать)" },
      { id: "a2_vb_sehen_002", article: "-", word: "ansehen", translation: "смотреть на" },
      { id: "a2_vb_sehen_003", article: "-", word: "bemerken", translation: "замечать" },
      { id: "a2_vb_sehen_004", article: "-", word: "beobachten", translation: "наблюдать" },
      { id: "a2_vb_sehen_005", article: "-", word: "betrachten", translation: "рассматривать" },
      { id: "a2_vb_sehen_006", article: "-", word: "entdecken", translation: "обнаруживать" },
      { id: "a2_vb_sehen_007", article: "-", word: "erkennen", translation: "узнавать / распознавать" },
      { id: "a2_vb_sehen_008", article: "-", word: "fühlen", translation: "чувствовать" },
      { id: "a2_vb_sehen_009", article: "-", word: "riechen", translation: "нюхать / пахнуть" },
      { id: "a2_vb_sehen_010", article: "-", word: "schauen", translation: "смотреть" },
      { id: "a2_vb_sehen_011", article: "-", word: "spüren", translation: "ощущать" },
      { id: "a2_vb_sehen_012", article: "-", word: "vergleichen", translation: "сравнивать" },
      { id: "a2_vb_sehen_013", article: "-", word: "wahrnehmen", translation: "воспринимать" },
    ]
  },

  {
    level: "A2", category: "vb_komm", name: "Verben – Kommunikation", name_ru: "Глаголы: коммуникация", emoji: "💬",
    words: [
      { id: "a2_vb_komm_001", article: "-", word: "berichten", translation: "докладывать / сообщать" },
      { id: "a2_vb_komm_002", article: "-", word: "beschreiben", translation: "описывать" },
      { id: "a2_vb_komm_003", article: "-", word: "buchstabieren", translation: "произносить по буквам" },
      { id: "a2_vb_komm_004", article: "-", word: "diskutieren", translation: "обсуждать" },
      { id: "a2_vb_komm_005", article: "-", word: "erklären", translation: "объяснять" },
      { id: "a2_vb_komm_006", article: "-", word: "erzählen", translation: "рассказывать" },
      { id: "a2_vb_komm_007", article: "-", word: "grüßen", translation: "здороваться" },
      { id: "a2_vb_komm_008", article: "-", word: "heißen", translation: "зваться (как зовут)" },
      { id: "a2_vb_komm_009", article: "-", word: "nennen", translation: "называть" },
      { id: "a2_vb_komm_010", article: "-", word: "reden", translation: "говорить / разговаривать" },
      { id: "a2_vb_komm_011", article: "-", word: "unterhalten", translation: "беседовать" },
      { id: "a2_vb_komm_012", article: "-", word: "wiederholen", translation: "повторять" },
      { id: "a2_vb_komm_013", article: "-", word: "zuhören", translation: "слушать" },
      { id: "a2_vb_komm_014", article: "-", word: "übersetzen", translation: "переводить" },
    ]
  },

  {
    level: "A2", category: "vb_orient", name: "Verben – Orientierung", name_ru: "Глаголы: ориентация", emoji: "🧭",
    words: [
      { id: "a2_vb_orient_001", article: "-", word: "ankreuzen", translation: "отмечать галочкой" },
      { id: "a2_vb_orient_002", article: "-", word: "betreten", translation: "входить (ступать)" },
      { id: "a2_vb_orient_003", article: "-", word: "durchgehen", translation: "проходить (через)" },
      { id: "a2_vb_orient_004", article: "-", word: "erreichen", translation: "достигать" },
      { id: "a2_vb_orient_005", article: "-", word: "orientieren", translation: "ориентироваться" },
      { id: "a2_vb_orient_006", article: "-", word: "verirren", translation: "заблудиться" },
      { id: "a2_vb_orient_007", article: "-", word: "wechseln", translation: "менять" },
    ]
  },

  {
    level: "A2", category: "vb_alltag", name: "Verben – Alltag", name_ru: "Глаголы: повседневность", emoji: "📋",
    words: [
      { id: "a2_vb_alltag_001", article: "-", word: "benutzen", translation: "использовать" },
      { id: "a2_vb_alltag_002", article: "-", word: "bestellen", translation: "заказывать" },
      { id: "a2_vb_alltag_003", article: "-", word: "bezahlen", translation: "оплачивать" },
      { id: "a2_vb_alltag_004", article: "-", word: "bringen", translation: "приносить" },
      { id: "a2_vb_alltag_005", article: "-", word: "einladen", translation: "приглашать" },
      { id: "a2_vb_alltag_006", article: "-", word: "fotografieren", translation: "фотографировать" },
      { id: "a2_vb_alltag_007", article: "-", word: "holen", translation: "забирать / приносить" },
      { id: "a2_vb_alltag_008", article: "-", word: "mitnehmen", translation: "брать с собой" },
      { id: "a2_vb_alltag_009", article: "-", word: "parken", translation: "парковаться" },
      { id: "a2_vb_alltag_010", article: "-", word: "planen", translation: "планировать" },
      { id: "a2_vb_alltag_011", article: "-", word: "reservieren", translation: "бронировать" },
      { id: "a2_vb_alltag_012", article: "-", word: "schließen", translation: "закрывать" },
      { id: "a2_vb_alltag_013", article: "-", word: "verlieren", translation: "терять" },
      { id: "a2_vb_alltag_014", article: "-", word: "verwenden", translation: "использовать (применять)" },
      { id: "a2_vb_alltag_015", article: "-", word: "öffnen", translation: "открывать" },
      { id: "a2_vb_alltag_016", article: "-", word: "üben", translation: "тренироваться / практиковаться" },
    ]
  },

  {
    level: "A2", category: "vb_umwelt", name: "Verben – Natur & Umwelt", name_ru: "Глаголы: природа и окружающая среда", emoji: "🌦️",
    words: [
      { id: "a2_vb_umwelt_001", article: "-", word: "blühen", translation: "цвести" },
      { id: "a2_vb_umwelt_002", article: "-", word: "frieren", translation: "мёрзнуть" },
      { id: "a2_vb_umwelt_003", article: "-", word: "gießen", translation: "поливать" },
      { id: "a2_vb_umwelt_004", article: "-", word: "regnen", translation: "идти (о дожде)" },
      { id: "a2_vb_umwelt_005", article: "-", word: "scheinen", translation: "светить (о солнце)" },
      { id: "a2_vb_umwelt_006", article: "-", word: "schneien", translation: "идти (о снеге)" },
      { id: "a2_vb_umwelt_007", article: "-", word: "wachsen", translation: "расти" },
      { id: "a2_vb_umwelt_008", article: "-", word: "wehen", translation: "дуть (о ветре)" },
      { id: "a2_vb_umwelt_009", article: "-", word: "zwitschern", translation: "щебетать" },
    ]
  },

  {
    level: "A2", category: "vb_unterwegs", name: "Verben – Unterwegs", name_ru: "Глаголы: в пути", emoji: "🚏",
    words: [
      { id: "a2_vb_unterwegs_001", article: "-", word: "abfahren", translation: "отправляться (транспорт)" },
      { id: "a2_vb_unterwegs_002", article: "-", word: "anklopfen", translation: "стучать(ся)" },
      { id: "a2_vb_unterwegs_003", article: "-", word: "ausruhen", translation: "отдыхать" },
      { id: "a2_vb_unterwegs_004", article: "-", word: "einbiegen", translation: "сворачивать (на дорогу)" },
      { id: "a2_vb_unterwegs_005", article: "-", word: "einpacken", translation: "упаковывать" },
      { id: "a2_vb_unterwegs_006", article: "-", word: "einwerfen", translation: "опускать (в ящик)" },
      { id: "a2_vb_unterwegs_007", article: "-", word: "entwerten", translation: "компостировать (билет)" },
      { id: "a2_vb_unterwegs_008", article: "-", word: "festhalten", translation: "держаться (крепко)" },
      { id: "a2_vb_unterwegs_009", article: "-", word: "mitfahren", translation: "ехать вместе" },
      { id: "a2_vb_unterwegs_010", article: "-", word: "mitkommen", translation: "идти вместе (сопровождать)" },
      { id: "a2_vb_unterwegs_011", article: "-", word: "vorfahren", translation: "подъезжать" },
      { id: "a2_vb_unterwegs_012", article: "-", word: "vorzeigen", translation: "предъявлять" },
      { id: "a2_vb_unterwegs_013", article: "-", word: "wegwerfen", translation: "выбрасывать" },
      { id: "a2_vb_unterwegs_014", article: "-", word: "zusteigen", translation: "подсаживаться (в транспорт)" },
    ]
  },

  {
    level: "A2", category: "vb_weitere", name: "Verben – Weitere wichtige", name_ru: "Глаголы: другие важные", emoji: "📚",
    words: [
      { id: "a2_vb_weitere_001", article: "-", word: "ablegen", translation: "откладывать / снимать" },
      { id: "a2_vb_weitere_002", article: "-", word: "abschließen", translation: "запирать / завершать" },
      { id: "a2_vb_weitere_003", article: "-", word: "abstellen", translation: "выключать / отставлять" },
      { id: "a2_vb_weitere_004", article: "-", word: "anfassen", translation: "трогать" },
      { id: "a2_vb_weitere_005", article: "-", word: "anprobieren", translation: "примерять" },
      { id: "a2_vb_weitere_006", article: "-", word: "anziehen", translation: "надевать" },
      { id: "a2_vb_weitere_007", article: "-", word: "auspacken", translation: "распаковывать" },
      { id: "a2_vb_weitere_008", article: "-", word: "aussehen", translation: "выглядеть" },
      { id: "a2_vb_weitere_009", article: "-", word: "auswählen", translation: "выбирать" },
      { id: "a2_vb_weitere_010", article: "-", word: "begegnen", translation: "встречать(ся)" },
      { id: "a2_vb_weitere_011", article: "-", word: "behalten", translation: "оставлять себе" },
      { id: "a2_vb_weitere_012", article: "-", word: "bekommen", translation: "получать" },
      { id: "a2_vb_weitere_013", article: "-", word: "besichtigen", translation: "осматривать (достопримечательности)" },
      { id: "a2_vb_weitere_014", article: "-", word: "besuchen", translation: "посещать" },
      { id: "a2_vb_weitere_015", article: "-", word: "bezweifeln", translation: "сомневаться" },
      { id: "a2_vb_weitere_016", article: "-", word: "danken", translation: "благодарить" },
      { id: "a2_vb_weitere_017", article: "-", word: "drücken", translation: "нажимать" },
      { id: "a2_vb_weitere_018", article: "-", word: "empfangen", translation: "принимать (гостей/сигнал)" },
      { id: "a2_vb_weitere_019", article: "-", word: "entscheiden", translation: "решать" },
      { id: "a2_vb_weitere_020", article: "-", word: "erlauben", translation: "разрешать" },
      { id: "a2_vb_weitere_021", article: "-", word: "erleben", translation: "переживать (испытывать)" },
      { id: "a2_vb_weitere_022", article: "-", word: "erwarten", translation: "ожидать" },
      { id: "a2_vb_weitere_023", article: "-", word: "feststellen", translation: "устанавливать / констатировать" },
      { id: "a2_vb_weitere_024", article: "-", word: "folgern", translation: "делать вывод" },
      { id: "a2_vb_weitere_025", article: "-", word: "genießen", translation: "наслаждаться" },
      { id: "a2_vb_weitere_026", article: "-", word: "glauben", translation: "верить / полагать" },
      { id: "a2_vb_weitere_027", article: "-", word: "informieren", translation: "информировать" },
      { id: "a2_vb_weitere_028", article: "-", word: "kennen", translation: "знать (быть знакомым)" },
      { id: "a2_vb_weitere_029", article: "-", word: "kennenlernen", translation: "знакомиться" },
      { id: "a2_vb_weitere_030", article: "-", word: "kontrollieren", translation: "проверять / контролировать" },
      { id: "a2_vb_weitere_031", article: "-", word: "lächeln", translation: "улыбаться" },
      { id: "a2_vb_weitere_032", article: "-", word: "merken", translation: "запоминать / замечать" },
      { id: "a2_vb_weitere_033", article: "-", word: "mieten", translation: "арендовать" },
      { id: "a2_vb_weitere_034", article: "-", word: "ordnen", translation: "упорядочивать" },
      { id: "a2_vb_weitere_035", article: "-", word: "prüfen", translation: "проверять" },
      { id: "a2_vb_weitere_036", article: "-", word: "sammeln", translation: "собирать" },
      { id: "a2_vb_weitere_037", article: "-", word: "schenken", translation: "дарить" },
      { id: "a2_vb_weitere_038", article: "-", word: "schützen", translation: "защищать" },
      { id: "a2_vb_weitere_039", article: "-", word: "teilen", translation: "делить(ся)" },
      { id: "a2_vb_weitere_040", article: "-", word: "verbessern", translation: "улучшать" },
      { id: "a2_vb_weitere_041", article: "-", word: "verbinden", translation: "соединять" },
      { id: "a2_vb_weitere_042", article: "-", word: "verstehen", translation: "понимать" },
      { id: "a2_vb_weitere_043", article: "-", word: "winken", translation: "махать (рукой)" },
      { id: "a2_vb_weitere_044", article: "-", word: "wählen", translation: "выбирать / голосовать" },
      { id: "a2_vb_weitere_045", article: "-", word: "zählen", translation: "считать" },
    ]
  },

  // ════════════════════════════════
  //  A1 — IM KINDERGARTEN (действия)
  // ════════════════════════════════
  {
    level: "A1", category: "kindergarten_akt", name: "Im Kindergarten", name_ru: "В детском саду (действия)", emoji: "🧒",
    words: [
      { id: "a1_kg_001", article: "-",   word: "turnen",  translation: "заниматься физкультурой" },
      { id: "a1_kg_002", article: "-",   word: "feiern",  translation: "праздновать" },
      { id: "a1_kg_003", article: "-",   word: "malen",   translation: "рисовать (красками)" },
      { id: "a1_kg_004", article: "der", word: "Ausflug", translation: "экскурсия / поездка" },
    ]
  },

  // ════════════════════════════════
  //  A2 — HANDY & FUNKTIONEN
  // ════════════════════════════════
  {
    level: "A2", category: "handy_funktionen", name: "Handy & Funktionen", name_ru: "Смартфон и его функции", emoji: "📱",
    words: [
      { id: "a2_handy_001", article: "die", word: "Mobile Daten",  translation: "мобильный интернет" },
      { id: "a2_handy_002", article: "der", word: "Telefon-Empfang", translation: "приём сигнала (сотовая связь)" },
      { id: "a2_handy_003", article: "das", word: "WLAN",          translation: "вай-фай" },
      { id: "a2_handy_004", article: "der", word: "Akku-Stand",    translation: "заряд аккумулятора" },
      { id: "a2_handy_005", article: "der", word: "An-/Aus-Knopf", translation: "кнопка вкл/выкл" },
      { id: "a2_handy_006", article: "die", word: "SIM-Karte",     translation: "сим-карта" },
      { id: "a2_handy_007", article: "die", word: "Nachrichten",   translation: "сообщения" },
      { id: "a2_handy_008", article: "die", word: "Fotos",         translation: "фотографии" },
      { id: "a2_handy_009", article: "der", word: "Bildschirm",    translation: "экран" },
      { id: "a2_handy_010", article: "das", word: "Video",         translation: "видео" },
      { id: "a2_handy_011", article: "die", word: "Taste",         translation: "кнопка / клавиша" },
    ]
  },

  // ════════════════════════════════
  //  A2 — MEDIEN & GERÄTE
  // ════════════════════════════════
  {
    level: "A2", category: "medien_geraete", name: "Medien & Geräte", name_ru: "Медиа и устройства", emoji: "💻",
    words: [
      { id: "a2_medien_001", article: "der", word: "Laptop",       translation: "ноутбук" },
      { id: "a2_medien_002", article: "das", word: "Radio",        translation: "радио" },
      { id: "a2_medien_003", article: "die", word: "Fernbedienung", translation: "пульт управления" },
      { id: "a2_medien_004", article: "das", word: "Kabel",        translation: "кабель" },
      { id: "a2_medien_005", article: "die", word: "Tastatur",     translation: "клавиатура" },
      { id: "a2_medien_006", article: "das", word: "Internet",     translation: "интернет" },
      { id: "a2_medien_007", article: "der", word: "WLAN-Router",  translation: "вай-фай роутер" },
    ]
  },

  // ════════════════════════════════
  //  A2 — TASTATUR-TASTEN
  // ════════════════════════════════
  {
    level: "A2", category: "tastatur_tasten", name: "Tastatur-Tasten", name_ru: "Клавиши клавиатуры", emoji: "⌨️",
    words: [
      { id: "a2_tast_001", article: "die", word: "Abbruch-Taste",  translation: "клавиша отмены (Esc)" },
      { id: "a2_tast_002", article: "die", word: "Alt-Taste",      translation: "клавиша Alt" },
      { id: "a2_tast_003", article: "die", word: "Eingabe-Taste",  translation: "клавиша ввода (Enter)" },
      { id: "a2_tast_004", article: "die", word: "Groß-Taste",     translation: "клавиша заглавных букв" },
      { id: "a2_tast_005", article: "die", word: "Löschen-Taste",  translation: "клавиша удаления" },
      { id: "a2_tast_006", article: "die", word: "Strg-Taste",     translation: "клавиша Ctrl" },
      { id: "a2_tast_007", article: "die", word: "Leer-Taste",     translation: "клавиша пробела" },
    ]
  },

  // ════════════════════════════════
  //  A2 — IN DER BIBLIOTHEK
  // ════════════════════════════════
  {
    level: "A2", category: "bibliothek_medien", name: "In der Bibliothek", name_ru: "В библиотеке", emoji: "📚",
    words: [
      { id: "a2_bib_001", article: "der", word: "Comic",           translation: "комикс" },
      { id: "a2_bib_002", article: "der", word: "Krimi",           translation: "детектив" },
      { id: "a2_bib_003", article: "die", word: "CD",              translation: "компакт-диск" },
      { id: "a2_bib_004", article: "das", word: "Kochbuch",        translation: "кулинарная книга" },
      { id: "a2_bib_005", article: "das", word: "Wörterbuch",      translation: "словарь" },
      { id: "a2_bib_006", article: "die", word: "Liebesgeschichte", translation: "любовный роман" },
    ]
  },

  // ════════════════════════════════
  //  A2 — INTERNET-REGELN
  // ════════════════════════════════
  {
    level: "A2", category: "internet_regeln", name: "Internet-Regeln", name_ru: "Правила в интернете", emoji: "🛡️",
    words: [
      { id: "a2_ireg_001", article: "die", word: "Regel",      translation: "правило" },
      { id: "a2_ireg_002", article: "-",   word: "vorsichtig", translation: "осторожный" },
      { id: "a2_ireg_003", article: "-",   word: "erlaubt",    translation: "разрешено" },
      { id: "a2_ireg_004", article: "-",   word: "verboten",   translation: "запрещено" },
      { id: "a2_ireg_005", article: "-",   word: "strafbar",   translation: "наказуемо (по закону)" },
      { id: "a2_ireg_006", article: "die", word: "Erlaubnis",  translation: "разрешение" },
      { id: "a2_ireg_007", article: "die", word: "Meinung",    translation: "мнение" },
    ]
  },

  // ════════════════════════════════
  //  A2 — DIE SCHULTÜTE (доп. предметы)
  // ════════════════════════════════
  {
    level: "A2", category: "schultuete", name: "Die Schultüte", name_ru: "Школьный набор первоклассника", emoji: "🎒",
    words: [
      { id: "a2_schult_001", article: "der", word: "Bleistift",   translation: "карандаш" },
      { id: "a2_schult_002", article: "der", word: "Anspitzer",   translation: "точилка" },
      { id: "a2_schult_003", article: "das", word: "Mäppchen",    translation: "пенал" },
      { id: "a2_schult_004", article: "der", word: "Radiergummi", translation: "ластик" },
      { id: "a2_schult_005", article: "die", word: "Schuhe",      translation: "обувь / туфли" },
    ]
  },

  // ════════════════════════════════
  //  A2 — SCHULSYSTEM
  // ════════════════════════════════
  {
    level: "A2", category: "schulsystem", name: "Das Schulsystem", name_ru: "Школьная система Германии", emoji: "🏫",
    words: [
      { id: "a2_schsys_001", article: "die", word: "Kinderkrippe", translation: "ясли (0–3 года)" },
      { id: "a2_schsys_002", article: "die", word: "Grundschule",  translation: "начальная школа (1–4 класс)" },
      { id: "a2_schsys_003", article: "die", word: "Hauptschule",  translation: "основная школа (базовый уровень)" },
      { id: "a2_schsys_004", article: "die", word: "Realschule",   translation: "реальная школа (средний уровень)" },
      { id: "a2_schsys_005", article: "das", word: "Gymnasium",    translation: "гимназия (ведёт к абитуру/университету)" },
      { id: "a2_schsys_006", article: "die", word: "Klasse",       translation: "класс (школьный)" },
    ]
  },

  // ════════════════════════════════
  //  A2 — DEMOKRATIE & GRUNDGESETZ
  // ════════════════════════════════
  {
    level: "A2", category: "demokratie", name: "Demokratie & Grundgesetz", name_ru: "Демократия и права", emoji: "🗳️",
    words: [
      { id: "a2_dk_001", article: "die", word: "Demokratie",        translation: "демократия" },
      { id: "a2_dk_002", article: "das", word: "Volk",              translation: "народ" },
      { id: "a2_dk_003", article: "die", word: "Regierung",         translation: "правительство" },
      { id: "a2_dk_004", article: "die", word: "Wahl",               translation: "выборы" },
      { id: "a2_dk_005", article: "das", word: "Grundgesetz",       translation: "основной закон (конституция Германии)" },
      { id: "a2_dk_006", article: "die", word: "Verfassung",        translation: "конституция" },
      { id: "a2_dk_007", article: "die", word: "Grundrechte",       translation: "основные права (мн.ч.)" },
      { id: "a2_dk_008", article: "die", word: "Meinungsfreiheit",  translation: "свобода слова" },
      { id: "a2_dk_009", article: "die", word: "Pressefreiheit",    translation: "свобода прессы" },
      { id: "a2_dk_010", article: "die", word: "Gleichberechtigung",translation: "равноправие" },
      { id: "a2_dk_011", article: "die", word: "Herkunft",          translation: "происхождение" },
      { id: "a2_dk_012", article: "die", word: "Hautfarbe",         translation: "цвет кожи" },
      { id: "a2_dk_013", article: "-",   word: "diskriminieren",    translation: "дискриминировать" },
      { id: "a2_dk_014", article: "-",   word: "respektieren",      translation: "уважать" },
      { id: "a2_dk_015", article: "-",   word: "sich kümmern (um)", translation: "заботиться (о ком-л. / чём-л.)" },
    ]
  },

  // ════════════════════════════════
  //  A2 — REGELN IN DER UNTERKUNFT
  // ════════════════════════════════
  {
    level: "A2", category: "unterkunft_regeln", name: "Regeln in der Unterkunft", name_ru: "Правила проживания в общежитии", emoji: "🏘️",
    words: [
      { id: "a2_uk_001", article: "die", word: "Unterkunft",   translation: "жильё (общежитие для переселенцев)" },
      { id: "a2_uk_002", article: "der", word: "Bewohner",     translation: "жилец" },
      { id: "a2_uk_003", article: "die", word: "Nachtruhe",    translation: "тишина в ночное время" },
      { id: "a2_uk_004", article: "die", word: "Rücksicht",    translation: "внимательность к другим" },
      { id: "a2_uk_005", article: "das", word: "Gelände",      translation: "территория" },
      { id: "a2_uk_006", article: "der", word: "Besucher",     translation: "посетитель / гость" },
      { id: "a2_uk_007", article: "die", word: "Reinigung",    translation: "уборка" },
      { id: "a2_uk_008", article: "der", word: "Sozialarbeiter", translation: "социальный работник" },
      { id: "a2_uk_009", article: "der", word: "Wertstoffhof", translation: "пункт приёма вторсырья" },
      { id: "a2_uk_010", article: "-",   word: "trennen",      translation: "сортировать (мусор)" },
      { id: "a2_uk_011", article: "-",   word: "abwesend",     translation: "отсутствующий" },
      { id: "a2_uk_012", article: "die", word: "Drogen",       translation: "наркотики (мн.ч.)" },
      { id: "a2_uk_013", article: "die", word: "Waffen",       translation: "оружие (мн.ч.)" },
      { id: "a2_uk_014", article: "-",   word: "entsorgen",    translation: "утилизировать" },
      { id: "a2_uk_015", article: "-",   word: "freihalten",   translation: "оставлять свободным" },
      { id: "a2_uk_016", article: "der", word: "Lärm",         translation: "шум" },
      { id: "a2_uk_017", article: "-",   word: "beleidigen",   translation: "оскорблять" },
      { id: "a2_uk_018", article: "-",   word: "bedrohen",     translation: "угрожать" },
      { id: "a2_uk_019", article: "die", word: "Gefahr",       translation: "опасность" },
      { id: "a2_uk_020", article: "der", word: "Notfall",      translation: "экстренный случай" },
      { id: "a2_uk_021", article: "der", word: "Diebstahl",    translation: "кража" },
      { id: "a2_uk_022", article: "die", word: "Nachbarschaft",translation: "соседство" },
      { id: "a2_uk_023", article: "die", word: "Bedrohung",    translation: "угроза" },
    ]
  },

  // ════════════════════════════════
  //  A2 — IM AMT / BEHÖRDE
  // ════════════════════════════════
  {
    level: "A2", category: "amt", name: "Im Amt", name_ru: "В ведомстве", emoji: "🗂️",
    words: [
      { id: "a2_am_001", article: "der", word: "Ausweis",      translation: "удостоверение личности / паспорт" },
      { id: "a2_am_002", article: "die", word: "Unterschrift", translation: "подпись" },
      { id: "a2_am_003", article: "die", word: "Frist",        translation: "срок (крайний срок)" },
      { id: "a2_am_004", article: "die", word: "Nummer",       translation: "номер (талон / очередь)" },
      { id: "a2_am_005", article: "-",   word: "vereinbaren",  translation: "договориться (о встрече)" },
      { id: "a2_am_006", article: "-",   word: "absagen",      translation: "отменить" },
      { id: "a2_am_007", article: "-",   word: "einhalten",    translation: "соблюдать (срок, правило)" },
      { id: "a2_am_008", article: "-",   word: "zeigen",       translation: "показывать" },
      { id: "a2_am_009", article: "-",   word: "überprüfen",   translation: "перепроверять (документы)" },
      { id: "a2_am_010", article: "-",   word: "abgeben",      translation: "сдавать (документ)" },
      { id: "a2_am_011", article: "-",   word: "ausdrucken",   translation: "распечатывать" },
      { id: "a2_am_012", article: "-",   word: "unterschreiben", translation: "подписывать" },
      { id: "a2_am_013", article: "-",   word: "ziehen",       translation: "взять (номерок: eine Nummer ziehen)" },
      { id: "a2_am_014", article: "-",   word: "aufrufen",     translation: "вызывать (по номеру)" },
      { id: "a2_am_015", article: "-",   word: "leisten",      translation: "поставить (die Unterschrift leisten)" },
      { id: "a2_am_016", article: "-",   word: "bestätigen",   translation: "подтверждать" },
      { id: "a2_am_017", article: "-",   word: "verlängern",   translation: "продлевать" },
      { id: "a2_am_018", article: "-",   word: "verpassen",    translation: "пропустить (срок, приём)" },
      { id: "a2_am_019", article: "-",   word: "angeben",      translation: "указывать (данные)" },
      { id: "a2_am_020", article: "-",   word: "ändern",       translation: "изменять" },
      { id: "a2_am_021", article: "-",   word: "mitteilen",    translation: "сообщать" },
    ]
  },

  // ════════════════════════════════
  //  A2 — IM MUSEUM
  // ════════════════════════════════
  {
    level: "A2", category: "museum", name: "Im Museum", name_ru: "В музее", emoji: "🖼️",
    words: [
      { id: "a2_mu_001", article: "die", word: "Ausstellung",   translation: "выставка" },
      { id: "a2_mu_002", article: "das", word: "Kunstwerk",     translation: "произведение искусства" },
      { id: "a2_mu_003", article: "die", word: "Eintrittskarte",translation: "входной билет" },
      { id: "a2_mu_004", article: "das", word: "Schließfach",   translation: "шкафчик для вещей (камера хранения)" },
      { id: "a2_mu_005", article: "die", word: "Absperrung",    translation: "ограждение" },
      { id: "a2_mu_006", article: "-",   word: "beachten",      translation: "соблюдать (правила)" },
    ]
  },

  // ════════════════════════════════
  //  A2 — IM PARK
  // ════════════════════════════════
  {
    level: "A2", category: "park", name: "Im Park", name_ru: "В парке", emoji: "🌷",
    words: [
      { id: "a2_pk_001", article: "die", word: "Leine",     translation: "поводок" },
      { id: "a2_pk_002", article: "der", word: "Grill",     translation: "гриль / мангал" },
      { id: "a2_pk_003", article: "die", word: "Blume",     translation: "цветок" },
      { id: "a2_pk_004", article: "-",   word: "anleinen",  translation: "брать на поводок" },
      { id: "a2_pk_005", article: "-",   word: "sich hinsetzen", translation: "присесть / сесть" },
      { id: "a2_pk_006", article: "-",   word: "aufpassen", translation: "следить / приглядывать" },
    ]
  },

  // ════════════════════════════════
  //  A2 — IM SCHWIMMBAD
  // ════════════════════════════════
  {
    level: "A2", category: "schwimmbad", name: "Im Schwimmbad", name_ru: "В бассейне", emoji: "🏊",
    words: [
      { id: "a2_sw_001", article: "der", word: "Eintritt",         translation: "вход (плата за вход)" },
      { id: "a2_sw_002", article: "die", word: "Umkleidekabine",   translation: "раздевалка" },
      { id: "a2_sw_003", article: "das", word: "Schwimmbecken",    translation: "бассейн (чаша)" },
      { id: "a2_sw_004", article: "der", word: "Nichtschwimmer",   translation: "не умеющий плавать" },
      { id: "a2_sw_005", article: "der", word: "Bademeister",      translation: "спасатель (на бассейне)" },
      { id: "a2_sw_006", article: "-",   word: "gefährlich",       translation: "опасный" },
      { id: "a2_sw_007", article: "-",   word: "sich umziehen",    translation: "переодеваться" },
      { id: "a2_sw_008", article: "-",   word: "duschen",          translation: "принимать душ" },
      { id: "a2_sw_009", article: "-",   word: "schubsen",         translation: "толкать (человека)" },
    ]
  },

  // ════════════════════════════════
  //  A2 — IM SPRACHKURS / IN DER SCHULE
  // ════════════════════════════════
  {
    level: "A2", category: "sprachkurs", name: "Im Sprachkurs", name_ru: "На языковых курсах", emoji: "📖",
    words: [
      { id: "a2_sk_001", article: "die", word: "Lehrkraft",  translation: "преподаватель" },
      { id: "a2_sk_002", article: "der", word: "Kursraum",   translation: "учебный кабинет" },
      { id: "a2_sk_003", article: "das", word: "Lehrbuch",   translation: "учебник" },
      { id: "a2_sk_004", article: "die", word: "Aufgabe",    translation: "задание" },
      { id: "a2_sk_005", article: "die", word: "Tafel",      translation: "доска" },
      { id: "a2_sk_006", article: "die", word: "Pause",      translation: "перерыв" },
      { id: "a2_sk_007", article: "-",   word: "mitarbeiten",translation: "активно участвовать (в занятии)" },
      { id: "a2_sk_008", article: "die", word: "Ordnung",    translation: "порядок" },
    ]
  },

  // ════════════════════════════════
  //  A2 — IN ÖFFENTLICHEN VERKEHRSMITTELN
  // ════════════════════════════════
  {
    level: "A2", category: "verkehr_oeffentlich", name: "Öffentliche Verkehrsmittel", name_ru: "Общественный транспорт (правила)", emoji: "🚏",
    words: [
      { id: "a2_vk_001", article: "die", word: "Haltestelle",     translation: "остановка" },
      { id: "a2_vk_002", article: "die", word: "Durchsage",       translation: "объявление (по громкой связи)" },
      { id: "a2_vk_003", article: "-",   word: "einsteigen",      translation: "садиться (в транспорт)" },
      { id: "a2_vk_004", article: "die", word: "Verkehrsregeln",  translation: "правила дорожного движения (мн.ч.)" },
    ]
  },

  // ════════════════════════════════
  //  A1 — MAHLZEITEN
  // ════════════════════════════════
  {
    level: "A1", category: "mahlzeiten", name: "Mahlzeiten", name_ru: "Приёмы пищи", emoji: "🍽️",
    words: [
      { id: "a1_mz_001", article: "das", word: "Frühstück",    translation: "завтрак" },
      { id: "a1_mz_002", article: "das", word: "Mittagessen",  translation: "обед" },
      { id: "a1_mz_003", article: "das", word: "Abendessen",   translation: "ужин" },
      { id: "a1_mz_004", article: "die", word: "Mahlzeit",     translation: "приём пищи" },
    ]
  },

  // ════════════════════════════════
  //  A1 — REISEN
  // ════════════════════════════════
  {
    level: "A1", category: "reisen", name: "Reisen", name_ru: "Путешествия", emoji: "🧳",
    words: [
      { id: "a1_rs_001", article: "der", word: "Koffer",       translation: "чемодан" },
      { id: "a1_rs_002", article: "das", word: "Gepäck",       translation: "багаж" },
      { id: "a1_rs_003", article: "der", word: "Flughafen",    translation: "аэропорт" },
      { id: "a1_rs_004", article: "der", word: "Reisepass",    translation: "загранпаспорт" },
      { id: "a1_rs_005", article: "die", word: "Reise",        translation: "поездка / путешествие" },
      { id: "a1_rs_006", article: "die", word: "Ferien",       translation: "каникулы (мн.ч.)" },
      { id: "a1_rs_007", article: "-",   word: "buchen",       translation: "бронировать (поездку, билет)" },
    ]
  },

  // ════════════════════════════════
  //  A1 — FESTE
  // ════════════════════════════════
  {
    level: "A1", category: "feste", name: "Feste & Feiertage", name_ru: "Праздники", emoji: "🎉",
    words: [
      { id: "a1_fe_001", article: "der", word: "Geburtstag",   translation: "день рождения" },
      { id: "a1_fe_002", article: "der", word: "Feiertag",     translation: "праздничный день" },
      { id: "a1_fe_003", article: "-",   word: "Weihnachten",  translation: "Рождество" },
      { id: "a1_fe_004", article: "-",   word: "Ostern",       translation: "Пасха" },
      { id: "a1_fe_005", article: "-",   word: "Silvester",    translation: "канун Нового года" },
      { id: "a1_fe_006", article: "das", word: "Neujahr",      translation: "Новый год" },
    ]
  },

  // ════════════════════════════════
  //  A1 — KONJUNKTIONEN & PARTIKELN
  // ════════════════════════════════
  {
    level: "A1", category: "konjunktionen", name: "Konjunktionen & Partikeln", name_ru: "Союзы и частицы", emoji: "🔗",
    words: [
      { id: "a1_kj_001", article: "-", word: "bald",           translation: "скоро" },
      { id: "a1_kj_002", article: "-", word: "normalerweise",  translation: "обычно" },
      { id: "a1_kj_003", article: "-", word: "so",             translation: "так" },
      { id: "a1_kj_004", article: "-", word: "vielleicht",     translation: "возможно / может быть" },
      { id: "a1_kj_005", article: "-", word: "erst",           translation: "только (в значении времени), сначала" },
      { id: "a1_kj_006", article: "-", word: "zu",             translation: "слишком" },
      { id: "a1_kj_007", article: "-", word: "etwa",           translation: "около / примерно" },
      { id: "a1_kj_008", article: "-", word: "einmal",         translation: "один раз" },
      { id: "a1_kj_009", article: "-", word: "zweimal",        translation: "дважды" },
      { id: "a1_kj_010", article: "-", word: "oder",           translation: "или" },
      { id: "a1_kj_011", article: "-", word: "nur",            translation: "только" },
      { id: "a1_kj_012", article: "-", word: "bitte",          translation: "пожалуйста" },
      { id: "a1_kj_013", article: "-", word: "aber",           translation: "но" },
      { id: "a1_kj_014", article: "-", word: "nichts",         translation: "ничего" },
      { id: "a1_kj_015", article: "-", word: "dieser",         translation: "этот (м.р.)" },
      { id: "a1_kj_016", article: "-", word: "diese",          translation: "эта (ж.р.)" },
      { id: "a1_kj_017", article: "-", word: "dieses",         translation: "это (ср.р.)" },
      { id: "a1_kj_018", article: "-", word: "dann",           translation: "тогда / потом" },
      { id: "a1_kj_019", article: "-", word: "bis dann",       translation: "до скорого" },
      { id: "a1_kj_020", article: "-", word: "ach so",         translation: "а, вот оно что" },
      { id: "a1_kj_021", article: "-", word: "da",             translation: "там" },
      { id: "a1_kj_022", article: "-", word: "also",           translation: "итак / следовательно" },
      { id: "a1_kj_023", article: "-", word: "dies",           translation: "это (указательное)" },
      { id: "a1_kj_024", article: "-", word: "bei",             translation: "у / при / возле" },
      { id: "a1_kj_025", article: "-", word: "schon",           translation: "уже" },
      { id: "a1_kj_026", article: "-", word: "ganz",            translation: "совсем / целиком" },
      { id: "a1_kj_027", article: "-", word: "wieder",          translation: "снова / опять" },
      { id: "a1_kj_028", article: "-", word: "doch",            translation: "всё же / ведь" },
      { id: "a1_kj_029", article: "-", word: "jemand",          translation: "кто-то / кто-нибудь" },
      { id: "a1_kj_030", article: "-", word: "niemand",         translation: "никто" },
      { id: "a1_kj_031", article: "-", word: "euer",            translation: "ваш (неформально, к группе)" },
      { id: "a1_kj_032", article: "-", word: "weiter",          translation: "дальше" },
      { id: "a1_kj_033", article: "-", word: "dafür",           translation: "за это / для этого" },
      { id: "a1_kj_034", article: "-", word: "wohl",            translation: "пожалуй / наверное" },
      { id: "a1_kj_035", article: "-", word: "leider",          translation: "к сожалению" },
      { id: "a1_kj_036", article: "-", word: "zwar",            translation: "хотя (и) / правда" },
      { id: "a1_kj_037", article: "-", word: "dran",            translation: "на очереди (разг.)" },
      { id: "a1_kj_038", article: "-", word: "soweit",          translation: "насколько / пока что" },
      { id: "a1_kj_039", article: "-", word: "miteinander",     translation: "друг с другом / вместе" },
      { id: "a1_kj_040", article: "-", word: "bestimmt",        translation: "точно / наверняка" },
    ]
  },

];
