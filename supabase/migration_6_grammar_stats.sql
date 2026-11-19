-- Выполнить один раз в SQL Editor — счётчик грамматики для графика рейтинга.
-- grammar_count = сколько тем «Грамматика по учебнику» пройдено (из 35).
-- Пока колонки нет, сайт сохраняет снимки без неё (только слова) — ничего не ломается.

alter table public.progress_daily_snapshots
  add column if not exists grammar_count int not null default 0;
