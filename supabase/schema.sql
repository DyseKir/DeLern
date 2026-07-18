-- ══════════════════════════════════════════════════════════════
-- DeutschLernen — схема базы данных для Supabase
-- Выполнить один раз целиком в Supabase → SQL Editor → New query → Run
-- ══════════════════════════════════════════════════════════════

-- 1. Профили пользователей (расширяет встроенную auth.users)
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  email         text not null unique,
  display_name  text not null default '',
  role          text not null default 'user' check (role in ('user','admin')),
  is_active     boolean not null default false,
  note          text not null default '',
  next_payment_date date,
  created_at    timestamptz not null default now(),
  activated_at  timestamptz
);

-- 2. Прогресс пользователя (весь JSON-снимок localStorage одним блоком)
create table if not exists public.progress (
  user_id     uuid primary key references public.profiles(id) on delete cascade,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

-- 3. Автосоздание профиля и пустого прогресса при регистрации нового пользователя
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1))
  );
  insert into public.progress (user_id, data) values (new.id, '{}'::jsonb);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 4. Row Level Security
alter table public.profiles enable row level security;
alter table public.progress enable row level security;

-- Проверка "текущий пользователь — админ?" (security definer — не зацикливается на RLS)
create or replace function public.is_admin()
returns boolean
language sql security definer set search_path = public
as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

-- Защита привилегированных полей: обычный пользователь не может сам себе
-- выставить role='admin' или is_active=true, даже если попробует отправить такой update.
create or replace function public.protect_profile_fields()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  -- auth.uid() is null для прямых SQL-запросов (SQL Editor / дашборд) —
  -- там уже полный доступ к базе, ограничиваем только запросы от имени
  -- залогиненного НЕ-админа через сайт (PostgREST/anon key).
  if auth.uid() is not null and not public.is_admin() then
    new.role      := old.role;
    new.is_active := old.is_active;
    new.note      := old.note;
    new.email     := old.email;
    new.next_payment_date := old.next_payment_date;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_fields_trg on public.profiles;
create trigger protect_profile_fields_trg
  before update on public.profiles
  for each row execute procedure public.protect_profile_fields();

-- profiles: видеть свою строку, либо все строки — если ты админ
create policy "profiles_select_own_or_admin" on public.profiles
  for select using (auth.uid() = id or public.is_admin());

-- profiles: обновлять свою строку (поля вроде display_name) — привилегированные поля
-- всё равно защищены триггером выше; админ может обновлять любые строки полностью.
create policy "profiles_update_own_or_admin" on public.profiles
  for update using (auth.uid() = id or public.is_admin());

-- progress: видеть свой прогресс, либо все — если ты админ
create policy "progress_select_own_or_admin" on public.progress
  for select using (auth.uid() = user_id or public.is_admin());

-- progress: писать/обновлять только свой собственный прогресс
create policy "progress_insert_own" on public.progress
  for insert with check (auth.uid() = user_id);

create policy "progress_update_own" on public.progress
  for update using (auth.uid() = user_id);

-- ══════════════════════════════════════════════════════════════
-- ПОСЛЕ ТОГО как вы сами зарегистрируетесь на сайте под своей почтой —
-- выполните эту строку отдельно, подставив свою почту, чтобы стать админом:
--
-- update public.profiles set role = 'admin', is_active = true, activated_at = now()
-- where email = 'ВАША_ПОЧТА@example.com';
-- ══════════════════════════════════════════════════════════════
