-- Выполнить один раз в SQL Editor — таблица для общего рейтинга (график по дням).
-- Видна ВСЕМ активным пользователям (это просто статистика, без email/заметок/платежей).

create table if not exists public.progress_daily_snapshots (
  user_id       uuid not null references public.profiles(id) on delete cascade,
  display_name  text not null default '',
  snapshot_date date not null,
  learned_count int not null default 0,
  primary key (user_id, snapshot_date)
);

alter table public.progress_daily_snapshots enable row level security;

-- Любой активный пользователь сайта видит рейтинг всех (только имя + счётчик слов)
create policy "snapshots_select_active_users" on public.progress_daily_snapshots
  for select using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_active)
  );

-- Каждый может писать только свою собственную строку
create policy "snapshots_insert_own" on public.progress_daily_snapshots
  for insert with check (auth.uid() = user_id);

create policy "snapshots_update_own" on public.progress_daily_snapshots
  for update using (auth.uid() = user_id);
