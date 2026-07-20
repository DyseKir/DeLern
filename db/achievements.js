/* ══════════════════════════════════════════════════════════════
   Достижения — значки, которые ученик получает за прогресс.
   check(s) получает объект статистики (см. computeAchievementStats в app.js).
══════════════════════════════════════════════════════════════ */
window.ACHIEVEMENTS_DATA = [
  { id: 'words_10',  emoji: '🌱', title: 'Первые шаги',      desc: 'Выучено 10 слов',                 check: s => s.learned >= 10  },
  { id: 'words_50',  emoji: '🚀', title: 'Набираем обороты', desc: 'Выучено 50 слов',                 check: s => s.learned >= 50  },
  { id: 'words_100', emoji: '💯', title: 'Сотня',            desc: 'Выучено 100 слов',                check: s => s.learned >= 100 },
  { id: 'words_200', emoji: '🔥', title: 'Двести',           desc: 'Выучено 200 слов',                check: s => s.learned >= 200 },
  { id: 'words_500', emoji: '🏆', title: 'Полиглот',         desc: 'Выучено 500 слов',                check: s => s.learned >= 500 },
  { id: 'cat_1',     emoji: '📘', title: 'Первая тема',      desc: 'Полностью пройдена одна тема',    check: s => s.catsDone >= 1  },
  { id: 'cat_5',     emoji: '📚', title: 'Коллекционер тем', desc: 'Пройдено 5 тем целиком',          check: s => s.catsDone >= 5  },
  { id: 'level_a1',  emoji: '🏁', title: 'A1 пройден',       desc: 'Все темы уровня A1 завершены',    check: s => s.a1Done         },
  { id: 'exam_1',    emoji: '📝', title: 'Экзаменатор',      desc: 'Пройден общий экзамен',           check: s => s.examTaken      },
  { id: 'streak_3',  emoji: '⚡', title: '3 дня подряд',     desc: 'Занимался 3 дня подряд',          check: s => s.streak >= 3    },
  { id: 'streak_7',  emoji: '🌟', title: 'Неделя подряд',    desc: 'Занимался 7 дней подряд',         check: s => s.streak >= 7    },
];
