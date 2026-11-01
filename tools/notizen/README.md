# «Мои записи» → db/notizen.js

1. `nz_words.txt` — слова по темам: `@тема|эмодзи|DE|RU|UK`, затем `pos|артикль|слово`.
2. `node nz_match.js` — сверяет со словами сайта и учебника (общие слова берутся оттуда же — общий прогресс).
3. `nz_tr.txt` — новые слова: `ключ|RU|UK|пример DE|перевод примера`; `@alias ключ=id` — привязать к существующему.
4. `node nz_build.js --ex` → `ex_nz.json` для spaCy (`roles_nz.json`), ручные правки разметки — `overrides_nz.txt`.
5. `node nz_build.js` — собирает `db/notizen.js`. id новых слов — в `nz_ids.json`, их НЕ менять.
