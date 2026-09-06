-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ROLES (Super Admin, Editor)
-- We'll use application-level role mapping, assuming Supabase Auth user.id links to admin_profiles

-- ==========================================
-- 1. CMS PAGES & SECTIONS
-- ==========================================
CREATE TABLE public.pages (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug text UNIQUE NOT NULL,
    title text,
    seo_title text,
    seo_description text,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.page_sections (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_id uuid NOT NULL REFERENCES public.pages(id) ON DELETE CASCADE,
    section_key text NOT NULL,
    content jsonb NOT NULL DEFAULT '{}'::jsonb,
    display_order integer DEFAULT 0,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    UNIQUE(page_id, section_key)
);

-- ==========================================
-- 2. SERVICES
-- ==========================================
CREATE TABLE public.services (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug text UNIQUE NOT NULL,
    title text NOT NULL,
    description text,
    icon_url text,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.service_faqs (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    service_id uuid REFERENCES public.services(id) ON DELETE CASCADE,
    question text NOT NULL,
    answer text NOT NULL,
    display_order integer DEFAULT 0,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- ==========================================
-- 3. FLEET
-- ==========================================
CREATE TABLE public.fleet_categories (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug text UNIQUE NOT NULL,
    name text NOT NULL,
    description text,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.fleet_vessels (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id uuid REFERENCES public.fleet_categories(id) ON DELETE SET NULL,
    name text NOT NULL,
    imo_number text UNIQUE,
    built_year integer,
    dwt numeric,
    cbm numeric,
    specifications jsonb,
    image_url text,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- ==========================================
-- 4. MEDIA / NEWS
-- ==========================================
CREATE TABLE public.news_categories (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug text UNIQUE NOT NULL,
    name text NOT NULL,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.news_articles (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id uuid REFERENCES public.news_categories(id) ON DELETE SET NULL,
    slug text UNIQUE NOT NULL,
    title text NOT NULL,
    excerpt text,
    content text,
    image_url text,
    published_date timestamptz,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- ==========================================
-- 5. LEADERSHIP & HISTORY
-- ==========================================
CREATE TABLE public.leadership_profiles (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name text NOT NULL,
    title text NOT NULL,
    bio text,
    image_url text,
    display_order integer DEFAULT 0,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.history_timeline (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    year integer NOT NULL,
    title text NOT NULL,
    description text,
    image_url text,
    display_order integer DEFAULT 0,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- ==========================================
-- 6. CAREERS & OFFICES
-- ==========================================
CREATE TABLE public.job_postings (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title text NOT NULL,
    department text,
    location text,
    description text,
    requirements text,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.offices (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name text NOT NULL,
    address text,
    phone text,
    email text,
    latitude numeric,
    longitude numeric,
    display_order integer DEFAULT 0,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- ==========================================
-- 7. INBOX & CONTACT
-- ==========================================
CREATE TABLE public.contact_submissions (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name text NOT NULL,
    email text NOT NULL,
    subject text,
    message text NOT NULL,
    is_read boolean DEFAULT false,
    created_at timestamptz DEFAULT now()
);

CREATE TABLE public.newsletter_subscribers (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email text UNIQUE NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now()
);

-- ==========================================
-- 8. SETTINGS & NAVIGATION
-- ==========================================
CREATE TABLE public.site_settings (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    setting_key text UNIQUE NOT NULL,
    setting_value jsonb NOT NULL,
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.navigation_items (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    menu_location text NOT NULL, -- e.g., 'header', 'footer_col1'
    label text NOT NULL,
    url text NOT NULL,
    parent_id uuid REFERENCES public.navigation_items(id) ON DELETE CASCADE,
    display_order integer DEFAULT 0,
    published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- ==========================================
-- 9. ADMIN ROLES
-- ==========================================
CREATE TABLE public.admin_profiles (
    id uuid PRIMARY KEY, -- References auth.users(id)
    role text NOT NULL CHECK (role IN ('SUPER_ADMIN', 'EDITOR')),
    email text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- ==========================================
-- RLS (Row Level Security)
-- ==========================================

-- Enable RLS on all tables
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fleet_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fleet_vessels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leadership_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.history_timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_postings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.offices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.navigation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;

-- ------------------------------------------
-- PUBLIC SELECT POLICIES
-- ------------------------------------------
CREATE POLICY "Public can view published pages" ON public.pages FOR SELECT USING (published = true);
CREATE POLICY "Public can view published page sections" ON public.page_sections FOR SELECT USING (published = true);
CREATE POLICY "Public can view published services" ON public.services FOR SELECT USING (published = true);
CREATE POLICY "Public can view published service faqs" ON public.service_faqs FOR SELECT USING (published = true);
CREATE POLICY "Public can view published fleet categories" ON public.fleet_categories FOR SELECT USING (published = true);
CREATE POLICY "Public can view published fleet vessels" ON public.fleet_vessels FOR SELECT USING (published = true);
CREATE POLICY "Public can view news categories" ON public.news_categories FOR SELECT USING (true);
CREATE POLICY "Public can view published news articles" ON public.news_articles FOR SELECT USING (published = true);
CREATE POLICY "Public can view published leadership profiles" ON public.leadership_profiles FOR SELECT USING (published = true);
CREATE POLICY "Public can view published history timeline" ON public.history_timeline FOR SELECT USING (published = true);
CREATE POLICY "Public can view active job postings" ON public.job_postings FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view published offices" ON public.offices FOR SELECT USING (published = true);
CREATE POLICY "Public can view site settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Public can view published navigation items" ON public.navigation_items FOR SELECT USING (published = true);

-- Note: No public policies for contact_submissions, newsletter_subscribers, admin_profiles
-- Insertion into contact_submissions and newsletter_subscribers will be handled via Server Actions with service role.

-- ------------------------------------------
-- ADMIN POLICIES
-- ------------------------------------------
-- Note: Rather than complex RLS for admins, the admin dashboard will interact via Server Actions 
-- using the Supabase Service Role Key (bypassing RLS) after validating the user's role 
-- against the admin_profiles table. 

-- ==========================================
-- INDEXES
-- ==========================================
CREATE INDEX idx_page_sections_page_id ON public.page_sections(page_id);
CREATE INDEX idx_service_faqs_service_id ON public.service_faqs(service_id);
CREATE INDEX idx_fleet_vessels_category_id ON public.fleet_vessels(category_id);
CREATE INDEX idx_news_articles_category_id ON public.news_articles(category_id);
CREATE INDEX idx_navigation_items_parent_id ON public.navigation_items(parent_id);
