/* ══════════════════════════════════════════════════
   ПРЕДЛОЖЕНИЯ ДЛЯ ПЕРЕВОДА (RU → DE)
   Показываются только те, где ВСЕ ключевые слова (use)
   уже выучены пользователем.
   Формат: { ru, uk?, de:[допустимые ответы], use:[немецкие леммы] }
   Служебные слова (ich, ein, in, ist, habe, gehe…) в use НЕ нужны.
══════════════════════════════════════════════════ */
window.TRANSLATE_SENTENCES = [
  // ── Еда и простые ──
  { ru:"Я ем яблоко.", uk:"Я їм яблуко.", de:["ich esse einen apfel"], use:["Apfel","essen"] },
  { ru:"Я пью воду.", uk:"Я п'ю воду.", de:["ich trinke wasser"], use:["Wasser","trinken"] },
  { ru:"Я пью кофе.", uk:"Я п'ю каву.", de:["ich trinke kaffee"], use:["Kaffee","trinken"] },
  { ru:"Хлеб лежит на столе.", uk:"Хліб лежить на столі.", de:["das brot liegt auf dem tisch","das brot ist auf dem tisch"], use:["Brot","Tisch"] },
  { ru:"Молоко в холодильнике.", uk:"Молоко в холодильнику.", de:["die milch ist im kühlschrank","die milch ist in dem kühlschrank"], use:["Milch","Kühlschrank"] },
  { ru:"Яблоко красное.", uk:"Яблуко червоне.", de:["der apfel ist rot"], use:["Apfel","rot"] },
  { ru:"Я покупаю сыр и масло.", uk:"Я купую сир і масло.", de:["ich kaufe käse und butter"], use:["kaufen","Käse","Butter"] },

  // ── Семья, люди, свойства ──
  { ru:"У меня есть собака.", uk:"У мене є собака.", de:["ich habe einen hund"], use:["Hund"] },
  { ru:"Кошка маленькая.", uk:"Кішка маленька.", de:["die katze ist klein"], use:["Katze","klein"] },
  { ru:"Собака большая и коричневая.", uk:"Собака великий і коричневий.", de:["der hund ist groß und braun"], use:["Hund","groß","braun"] },
  { ru:"Мой отец — врач.", uk:"Мій батько — лікар.", de:["mein vater ist arzt"], use:["Vater","Arzt"] },
  { ru:"Мой брат — студент.", uk:"Мій брат — студент.", de:["mein bruder ist student"], use:["Bruder","Student"] },
  { ru:"Моя сестра играет музыку.", uk:"Моя сестра грає музику.", de:["meine schwester spielt musik"], use:["Schwester","spielen","Musik"] },

  // ── Профессии за работой ──
  { ru:"Моя мать работает в больнице.", uk:"Моя мати працює в лікарні.", de:["meine mutter arbeitet im krankenhaus","meine mutter arbeitet in dem krankenhaus"], use:["Mutter","arbeiten","Krankenhaus"] },
  { ru:"Врач работает в больнице.", uk:"Лікар працює в лікарні.", de:["der arzt arbeitet im krankenhaus","der arzt arbeitet in dem krankenhaus"], use:["Arzt","arbeiten","Krankenhaus"] },
  { ru:"Пекарь печёт хлеб.", uk:"Пекар пече хліб.", de:["der bäcker backt brot"], use:["Bäcker","backen","Brot"] },
  { ru:"Учитель преподаёт в школе.", uk:"Учитель викладає в школі.", de:["der lehrer unterrichtet in der schule"], use:["Lehrer","unterrichten","Schule"] },
  { ru:"Продавец продаёт хлеб.", uk:"Продавець продає хліб.", de:["der verkäufer verkauft brot"], use:["Verkäufer","verkaufen","Brot"] },
  { ru:"Повар готовит еду.", uk:"Кухар готує їжу.", de:["der koch kocht das essen","der koch kocht essen"], use:["Koch","kochen"] },
  { ru:"Механик ремонтирует машину.", uk:"Механік ремонтує машину.", de:["der mechaniker repariert das auto"], use:["Mechaniker","reparieren","Auto"] },
  { ru:"Садовник сажает дерево.", uk:"Садівник садить дерево.", de:["der gärtner pflanzt einen baum"], use:["Gärtner","pflanzen","Baum"] },
  { ru:"Официант подаёт еду.", uk:"Офіціант подає їжу.", de:["der kellner serviert das essen","der kellner serviert essen"], use:["Kellner","servieren"] },
  { ru:"Пилот летает на самолёте.", uk:"Пілот літає на літаку.", de:["der pilot fliegt ein flugzeug"], use:["Pilot","fliegen","Flugzeug"] },
  { ru:"Врач осматривает ребёнка.", uk:"Лікар оглядає дитину.", de:["der arzt untersucht das kind"], use:["Arzt","untersuchen","Kind"] },

  // ── Транспорт, движение, падежи ──
  { ru:"Я еду на автобусе.", uk:"Я їду автобусом.", de:["ich fahre mit dem bus"], use:["Bus","fahren"] },
  { ru:"Я еду на машине в школу.", uk:"Я їду машиною до школи.", de:["ich fahre mit dem auto zur schule","ich fahre mit dem auto zu der schule"], use:["Auto","fahren","Schule"] },
  { ru:"Книга лежит на столе.", uk:"Книга лежить на столі.", de:["das buch liegt auf dem tisch"], use:["Buch","Tisch"] },
  { ru:"Я кладу книгу на стол.", uk:"Я кладу книгу на стіл.", de:["ich lege das buch auf den tisch"], use:["Buch","Tisch"] },
  { ru:"Я вижу мужчину.", uk:"Я бачу чоловіка.", de:["ich sehe den mann"], use:["Mann","sehen"] },
  { ru:"Я помогаю ребёнку.", uk:"Я допомагаю дитині.", de:["ich helfe dem kind"], use:["Kind","helfen"] },
  { ru:"Я иду к матери.", uk:"Я йду до матері.", de:["ich gehe zur mutter","ich gehe zu der mutter"], use:["Mutter","gehen"] },
  { ru:"Мы идём через парк.", uk:"Ми йдемо через парк.", de:["wir gehen durch den park"], use:["Park","gehen"] },
  { ru:"Я иду к врачу.", uk:"Я йду до лікаря.", de:["ich gehe zum arzt","ich gehe zu dem arzt"], use:["Arzt","gehen"] },

  // ── Здоровье ──
  { ru:"У меня болит голова.", uk:"У мене болить голова.", de:["ich habe kopfschmerzen"], use:["Kopfschmerzen"] },
  { ru:"У меня температура.", uk:"У мене температура.", de:["ich habe fieber"], use:["Fieber"] },
  { ru:"Я болен.", uk:"Я хворий.", de:["ich bin krank"], use:["krank"] },
  { ru:"Мне нужно лекарство.", uk:"Мені потрібні ліки.", de:["ich brauche ein medikament"], use:["Medikament","brauchen"] },
  { ru:"Я иду в аптеку.", uk:"Я йду в аптеку.", de:["ich gehe in die apotheke","ich gehe zur apotheke"], use:["Apotheke","gehen"] },

  // ── Модальные глаголы ──
  { ru:"Я могу говорить по-немецки.", uk:"Я можу говорити німецькою.", de:["ich kann deutsch sprechen"], use:["sprechen","können","Deutsch"] },
  { ru:"Ты должен рано вставать.", uk:"Ти мусиш рано вставати.", de:["du musst früh aufstehen"], use:["müssen","aufstehen"] },
  { ru:"Мы хотим учить немецкий.", uk:"Ми хочемо вчити німецьку.", de:["wir wollen deutsch lernen"], use:["wollen","lernen","Deutsch"] },

  // ── Отделяемые глаголы ──
  { ru:"Я встаю в шесть.", uk:"Я встаю о шостій.", de:["ich stehe um sechs auf","ich stehe um sechs uhr auf"], use:["aufstehen","sechs"] },
  { ru:"Она делает покупки в супермаркете.", uk:"Вона робить покупки в супермаркеті.", de:["sie kauft im supermarkt ein","sie kauft in dem supermarkt ein"], use:["einkaufen","Supermarkt"] },
  { ru:"Я звоню другу.", uk:"Я телефоную другу.", de:["ich rufe meinen freund an"], use:["anrufen","Freund"] },
  { ru:"Вечером мы смотрим телевизор.", uk:"Увечері ми дивимося телевізор.", de:["am abend sehen wir fern"], use:["fernsehen","Abend"] },
  { ru:"Когда ты начинаешь?", uk:"Коли ти починаєш?", de:["wann fängst du an"], use:["anfangen","Wann"] },

  // ── Работа: договор, зарплата, поиск ──
  { ru:"Мне нужно разрешение на работу.", uk:"Мені потрібен дозвіл на роботу.", de:["ich brauche eine arbeitserlaubnis"], use:["Arbeitserlaubnis","brauchen"] },
  { ru:"Я пишу резюме.", uk:"Я пишу резюме.", de:["ich schreibe einen lebenslauf"], use:["Lebenslauf","schreiben"] },
  { ru:"Летом у меня отпуск.", uk:"Влітку в мене відпустка.", de:["im sommer habe ich urlaub","ich habe urlaub im sommer"], use:["Sommer","Urlaub"] },
  { ru:"Завтра у меня встреча.", uk:"Завтра в мене зустріч.", de:["morgen habe ich einen termin"], use:["Termin","morgen"] },
];
