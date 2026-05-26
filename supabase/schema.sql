-- OLYYO Database Schema for Supabase (PostgreSQL)

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Users Table
create table if not exists public.users (
  id uuid primary key default uuid_generate_v4(),
  phone text unique not null,
  name text,
  email text,
  role text not null default 'customer', -- 'customer', 'admin', 'delivery', 'restaurant', 'middleman'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security (RLS) for Users Table
alter table public.users enable row level security;
create policy "Allow public access to users" on public.users for all using (true);

-- 2. OTP Verifications Table
create table if not exists public.otp_verifications (
  phone text primary key,
  otp_code text not null,
  expires_at timestamp with time zone not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.otp_verifications enable row level security;
create policy "Allow public access to otp_verifications" on public.otp_verifications for all using (true);

-- 3. Restaurants Table
create table if not exists public.restaurants (
  id serial primary key,
  name text not null,
  cuisines text[] not null,
  rating numeric(3,2) default 4.0,
  delivery_time text,
  price_range text,
  image_url text,
  is_veg boolean default false,
  tags text[],
  discount text,
  distance text,
  promoted boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.restaurants enable row level security;
create policy "Allow public access to restaurants" on public.restaurants for all using (true);

-- 4. Menu Items Table
create table if not exists public.menu_items (
  id serial primary key,
  restaurant_id integer references public.restaurants(id) on delete cascade not null,
  name text not null,
  price numeric(10,2) not null,
  image_url text,
  is_veg boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.menu_items enable row level security;
create policy "Allow public access to menu_items" on public.menu_items for all using (true);

-- 5. Orders Table
create table if not exists public.orders (
  id text primary key, -- Format: OLY-123456
  user_id uuid references public.users(id) on delete set null,
  restaurant_id integer references public.restaurants(id) on delete set null,
  total_amount numeric(10,2) not null,
  address text not null,
  payment_method text not null,
  status text not null default 'pending', -- 'pending', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.orders enable row level security;
create policy "Allow public access to orders" on public.orders for all using (true);

-- 6. Order Items Table
create table if not exists public.order_items (
  id serial primary key,
  order_id text references public.orders(id) on delete cascade not null,
  menu_item_id integer references public.menu_items(id) on delete set null,
  quantity integer not null,
  price numeric(10,2) not null
);

alter table public.order_items enable row level security;
create policy "Allow public access to order_items" on public.order_items for all using (true);


-- ========================================================
-- Insert Seed Data (Restaurants and Menu Items)
-- ========================================================

-- Insert Restaurants
insert into public.restaurants (id, name, cuisines, rating, delivery_time, price_range, image_url, is_veg, tags, discount, distance, promoted) values
(1, 'Spicy Dragon', ARRAY['Chinese', 'Asian'], 4.5, '25-30 min', '₹₹₹', 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop', false, ARRAY['Trending', 'Must Try'], '40% OFF', '1.2 km', true),
(2, 'Green Leaf', ARRAY['South Indian', 'Vegetarian'], 4.7, '20-25 min', '₹₹', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop', true, ARRAY['Pure Veg'], '30% OFF', '0.8 km', false),
(3, 'Burger Hub', ARRAY['American', 'Fast Food'], 4.2, '15-20 min', '₹₹', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', false, ARRAY['Best Seller'], 'Buy 1 Get 1', '1.5 km', true),
(4, 'Pasta Paradise', ARRAY['Italian', 'Continental'], 4.6, '30-35 min', '₹₹₹₹', 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop', true, ARRAY['Italian'], '20% OFF', '2.1 km', false),
(5, 'Masala Darbar', ARRAY['North Indian', 'Mughlai'], 4.4, '35-40 min', '₹₹₹', 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop', false, ARRAY['Spicy'], '50% OFF', '1.8 km', true),
(6, 'Sushi Masters', ARRAY['Japanese', 'Asian'], 4.8, '40-45 min', '₹₹₹₹₹', 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop', false, ARRAY['Premium'], '25% OFF', '3.2 km', false),
(7, 'The Dosa Factory', ARRAY['South Indian', 'Breakfast'], 4.3, '20-25 min', '₹₹', 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop', true, ARRAY['Authentic'], 'Free Delivery', '1.1 km', true),
(8, 'BBQ Nation', ARRAY['Barbecue', 'North Indian'], 4.5, '45-50 min', '₹₹₹₹', 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop', false, ARRAY['Non-Veg'], '30% OFF', '2.5 km', false)
on conflict (id) do update set
  name = excluded.name,
  cuisines = excluded.cuisines,
  rating = excluded.rating,
  delivery_time = excluded.delivery_time,
  price_range = excluded.price_range,
  image_url = excluded.image_url,
  is_veg = excluded.is_veg,
  tags = excluded.tags,
  discount = excluded.discount,
  distance = excluded.distance,
  promoted = excluded.promoted;

-- Reset serial sequence for restaurants
select setval('public.restaurants_id_seq', (select max(id) from public.restaurants));

-- Insert Menu Items
insert into public.menu_items (id, restaurant_id, name, price, image_url, is_veg) values
-- Restaurant 1: Spicy Dragon
(1, 1, 'Chicken Biryani', 299.00, 'https://images.unsplash.com/photo-1563379091339-03246963d9d6?w=400&h=300&fit=crop', false),
(2, 1, 'Schezwan Noodles', 189.00, 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop', false),
(3, 1, 'Veg Spring Roll', 129.00, 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop', true),
-- Restaurant 2: Green Leaf
(4, 2, 'Masala Dosa', 120.00, 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop', true),
(5, 2, 'Idli Sambhar (2 Pcs)', 80.00, 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop', true),
(6, 2, 'Filter Coffee', 45.00, 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop', true),
-- Restaurant 3: Burger Hub
(7, 3, 'Classic Chicken Burger', 149.00, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', false),
(8, 3, 'Veg Cheese Burger', 119.00, 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop', true),
(9, 3, 'Peri Peri Fries', 99.00, 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop', true),
-- Restaurant 4: Pasta Paradise
(10, 4, 'Arrabiata Pasta (Red)', 249.00, 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop', true),
(11, 4, 'Alfredo Pasta (White)', 269.00, 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop', true),
(12, 4, 'Garlic Bread with Cheese', 139.00, 'https://images.unsplash.com/photo-1573145959861-11d4097e35b1?w=400&h=300&fit=crop', true),
-- Restaurant 5: Masala Darbar
(13, 5, 'Butter Chicken', 349.00, 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop', false),
(14, 5, 'Kadhai Paneer', 289.00, 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop', true),
(15, 5, 'Garlic Naan', 89.00, 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop', true)
on conflict (id) do update set
  restaurant_id = excluded.restaurant_id,
  name = excluded.name,
  price = excluded.price,
  image_url = excluded.image_url,
  is_veg = excluded.is_veg;

-- Reset serial sequence for menu items
select setval('public.menu_items_id_seq', (select max(id) from public.menu_items));
