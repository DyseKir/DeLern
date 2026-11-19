-- Выполнить один раз в SQL Editor — метки админа:
--   unlimited             — доступ без ограничений (таймер access_until игнорируется)
--   hide_from_leaderboard — пользователь скрыт с графиков рейтинга (данные НЕ удаляются)

alter table public.profiles add column if not exists unlimited boolean not null default false;
alter table public.profiles add column if not exists hide_from_leaderboard boolean not null default false;

-- Эти поля тоже меняет только админ
create or replace function public.protect_profile_fields()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  if auth.uid() is not null and not public.is_admin() then
    new.role      := old.role;
    new.is_active := old.is_active;
    new.note      := old.note;
    new.email     := old.email;
    new.next_payment_date := old.next_payment_date;
    new.access_until := old.access_until;
    new.unlimited := old.unlimited;
    new.hide_from_leaderboard := old.hide_from_leaderboard;
  end if;
  return new;
end;
$$;

-- Чужие профили обычным пользователям не видны, поэтому список скрытых отдаём функцией
create or replace function public.leaderboard_hidden_ids()
returns setof uuid
language sql
stable
security definer set search_path = public
as $$
  select id from public.profiles where hide_from_leaderboard;
$$;

grant execute on function public.leaderboard_hidden_ids() to authenticated;
