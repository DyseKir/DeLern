-- Выполнить один раз в SQL Editor (добавляет поле "дата следующего платежа")

alter table public.profiles add column if not exists next_payment_date date;

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
  end if;
  return new;
end;
$$;
