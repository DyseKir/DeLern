-- Выполнить один раз в SQL Editor — учёт кликов по темам для аналитики в админке

create table if not exists public.category_events (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  level text not null,
  category text not null,
  created_at timestamptz not null default now()
);

alter table public.category_events enable row level security;

create policy "category_events_insert_own" on public.category_events
  for insert with check (auth.uid() = user_id);

create policy "category_events_select_admin" on public.category_events
  for select using (public.is_admin());
