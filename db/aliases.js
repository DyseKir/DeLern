/* ══════════════════════════════════════════════════════════════
   ДУБЛИ СЛОВ: одно и то же слово (тот же смысл) было записано в разных
   карточках под разными id. Здесь дубль → основной id.
   При загрузке дубль во всех карточках заменяется основным словом
   (слово остаётся во всех темах, но это одна карточка), а прогресс
   пользователя с дубля переносится на основной id (см. migrateAliasProgress в app.js).
   Намеренно НЕ дубли (разный смысл): Uhr (часы / час), ziehen, vorstellen /
   sich vorstellen, sein (быть / его), sie / Sie / ihr; «Тело – чьё?» —
   отдельное упражнение sein/ihr.
══════════════════════════════════════════════════════════════ */
window.ID_ALIASES = {
  a1_ao_011: 'a1_ei_006',   // das Geschäft
  a1_bh_012: 'a1_ei_007',   // der Markt
  a1_ao_012: 'a1_st_006',   // die Bäckerei
  a1_ao_008: 'a1_st_010',   // das Krankenhaus
  a1_ao_013: 'a1_s2_017',   // die Schule
  a1_ao_009: 'a1_od_004',   // das Restaurant
  a2_sb_008: 'a1_ar_031',   // die Augentropfen
  a1_br_028: 'a1_ar_002',   // der Zahnarzt
  a1_pp_075: 'a1_fw_004',   // woher
  a1_adj_029: 'a1_gf_001',  // glücklich
  a1_adj_023: 'a1_gf_013',  // langweilig
  a1_ae_004: 'a1_gf_013',   // langweilig
  a1_ae_005: 'a1_adj_022',  // interessant
  a1_ae_002: 'a1_adj_025',  // freundlich
  a1_ae_010: 'a1_jz_012',   // vorgestern
  a1_kj_012: 'a1_gu_008',   // bitte
  a1_av_010: 'a1_vb_023',   // suchen
  a1_av_001: 'a1_vb_031',   // arbeiten
  a1_pp_107: 'a1_vb_071',   // anziehen
  a1_pp_066: 'a1_mv_005',   // solltest → sollen (бывшая карточка «Пепа»)
  a1_pp_077: 'a2_am_013',   // zeihen (ошибка распознавания) → ziehen (бывшая карточка «Пепа»)
  a1_pp_088: 'a1_vb_014',   // nimm → nehmen (бывшая карточка «Пепа»)
  a1_pp_094: 'a1_mv_004',   // wolltest → wollen (бывшая карточка «Пепа»)
  a1_pp_118: 'a2_vb_bewegung_015',   // stand → stehen (бывшая карточка «Пепа»)
  a1_pp_125: 'a1_pp_114',   // guck → gucken (бывшая карточка «Пепа»)
  a1_pp_133: 'a2_vb_weitere_026',   // glaubst → glauben (бывшая карточка «Пепа»)
  a1_pp_139: 'a1_pp_097',   // riecht → riechen (бывшая карточка «Пепа»)
  a1_pp_149: 'a1_pp_119',   // aufgepasst → aufpassen (бывшая карточка «Пепа»)
  a1_pp_158: 'a1_pp_071',   // schlimmeres → schlimm (бывшая карточка «Пепа»)
  a1_pp_159: 'a1_vc_014',   // hält → halten (бывшая карточка «Пепа»)
  a1_pp_170: 'a1_pp_121',   // feinst → fein (бывшая карточка «Пепа»)
  a1_pp_175: 'a1_pp_097',   // riechst → riechen (бывшая карточка «Пепа»)
  a1_pp_180: 'a1_uv_045',   // hättet → haben (бывшая карточка «Пепа»)
  a1_pp_187: 'a1_pp_112',   // steuerst → steuern (бывшая карточка «Пепа»)
};

(function () {
  const A = window.ID_ALIASES, byId = {};
  (window.VOCAB_DATA || []).forEach(c => (c.words || []).forEach(w => { if (!A[w.id] && !byId[w.id]) byId[w.id] = w; }));
  (window.VOCAB_DATA || []).forEach(c => {
    if (c.mode === 'conjugation' || c.mode === 'possessive') return;
    const seen = new Set();
    c.words = c.words.map(w => (A[w.id] && byId[A[w.id]]) ? byId[A[w.id]] : w)
                     .filter(w => !seen.has(w.id) && seen.add(w.id));
  });
})();
