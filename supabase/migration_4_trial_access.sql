-- Выполнить один раз в SQL Editor — пробная неделя + автоматическое отключение по таймеру

alter table public.profiles add column if not exists access_until timestamptz;

-- Новый пользователь сразу получает доступ на 7 дней, без ручной активации
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name, is_active, access_until)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    true,
    now() + interval '7 days'
  );
  insert into public.progress (user_id, data) values (new.id, '{}'::jsonb);
  return new;
end;
$$;

-- access_until тоже редактирует только админ
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
  end if;
  return new;
end;
$$;
