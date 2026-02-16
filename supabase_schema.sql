-- Create contact_messages table
create table public.contact_messages (
  id uuid not null default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamp with time zone not null default now(),
  constraint contact_messages_pkey primary key (id)
);

-- Create admission_inquiries table
create table public.admission_inquiries (
  id uuid not null default gen_random_uuid(),
  student_name text not null,
  parent_name text not null,
  phone text not null,
  level_applying text not null,
  message text,
  created_at timestamp with time zone not null default now(),
  constraint admission_inquiries_pkey primary key (id)
);

-- Enable RLS
alter table public.contact_messages enable row level security;
alter table public.admission_inquiries enable row level security;

-- Create policies (allow insert for anon, select for authenticated admins only)
create policy "Enable insert for everyone" on public.contact_messages
  for insert with check (true);

create policy "Enable insert for everyone" on public.admission_inquiries
  for insert with check (true);
