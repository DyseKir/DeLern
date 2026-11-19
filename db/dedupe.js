/* ══════════════════════════════════════════════════════════════
   КАЖДОЕ СЛОВО — В ОДНОЙ КАРТОЧКЕ
   Учебники и «Мои записи» используют те же id, что и основные карточки
   (прогресс общий). Здесь слово остаётся только в карточке с наивысшим
   приоритетом и убирается из остальных:
     учебник A1 → учебник A2.1 → основные карточки → «Мои записи».
   Не трогаем особые карточки-упражнения: спряжение, притяжательные,
   «Неправильные глаголы» (там важны формы, это справочный список).
   Грузится после всех файлов со словами (notizen.js).
══════════════════════════════════════════════════════════════ */
(function () {
  const V = window.VOCAB_DATA || [];
  // полный (нечищеный) набор — для справочных таблиц, генератора и игр, которые берут слова по названию карточки
  window.VOCAB_FULL = V.map(c => ({ ...c, words: c.words.slice() }));
  const exempt = c => c.mode === 'conjugation' || c.mode === 'possessive' || c.category === 'unreg_verben_v';
  const rank = c => c.category.startsWith('schritte_') ? 0 : c.category.startsWith('schritte3_') ? 1
                  : c.category.startsWith('notiz_') ? 3 : 2;
  const owner = {};
  V.filter(c => !exempt(c))
    .map((c, i) => ({ c, i }))
    .sort((a, b) => rank(a.c) - rank(b.c) || a.i - b.i)      // внутри источника — исходный порядок
    .forEach(({ c }) => {
      c.words = c.words.filter(w => {
        if (owner[w.id] && owner[w.id] !== c) return false;
        owner[w.id] = c;
        return true;
      });
    });
  // опустевшие карточки убираем; замки «сначала выучи …» на них снимаем
  const dropped = new Set();
  for (let i = V.length - 1; i >= 0; i--) {
    if (!exempt(V[i]) && !V[i].words.length) { dropped.add(V[i].level + '|' + V[i].category); V.splice(i, 1); }
  }
  V.forEach(c => { if (c.requiresCategory && dropped.has(c.level + '|' + c.requiresCategory)) delete c.requiresCategory; });
})();
