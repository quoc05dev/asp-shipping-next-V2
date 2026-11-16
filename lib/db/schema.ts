import { sql } from 'drizzle-orm';
import {
  boolean,
  check,
  index,
  integer,
  jsonb,
  numeric,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  type AnyPgColumn,
} from 'drizzle-orm/pg-core';
import {
  account,
  session,
  user,
  verification,
  accountRelations,
  sessionRelations,
  userRelations,
} from './auth-schema';

export { account, session, user, verification, accountRelations, sessionRelations, userRelations };

const timestamps = {
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
};

export const pages = pgTable('pages', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull().unique(),
  title: text('title'),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  published: boolean('published').default(false).notNull(),
  ...timestamps,
});

export const pageSections = pgTable(
  'page_sections',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    pageId: uuid('page_id')
      .notNull()
      .references(() => pages.id, { onDelete: 'cascade' }),
    sectionKey: text('section_key').notNull(),
    content: jsonb('content').notNull().default({}),
    displayOrder: integer('display_order').default(0),
    published: boolean('published').default(false).notNull(),
    ...timestamps,
  },
  (table) => [
    uniqueIndex('page_sections_page_id_section_key_key').on(table.pageId, table.sectionKey),
    index('idx_page_sections_page_id').on(table.pageId),
  ],
);

export const services = pgTable('services', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  description: text('description'),
  iconUrl: text('icon_url'),
  displayOrder: integer('display_order').default(0),
  published: boolean('published').default(false).notNull(),
  ...timestamps,
});

export const serviceFaqs = pgTable(
  'service_faqs',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    serviceId: uuid('service_id').references(() => services.id, { onDelete: 'cascade' }),
    question: text('question').notNull(),
    answer: text('answer').notNull(),
    displayOrder: integer('display_order').default(0),
    published: boolean('published').default(false).notNull(),
    ...timestamps,
  },
  (table) => [index('idx_service_faqs_service_id').on(table.serviceId)],
);

export const fleetCategories = pgTable('fleet_categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  published: boolean('published').default(false).notNull(),
  ...timestamps,
});

export const fleetVessels = pgTable(
  'fleet_vessels',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    categoryId: uuid('category_id').references(() => fleetCategories.id, { onDelete: 'set null' }),
    name: text('name').notNull(),
    imoNumber: text('imo_number').unique(),
    builtYear: integer('built_year'),
    dwt: numeric('dwt'),
    cbm: numeric('cbm'),
    specifications: jsonb('specifications'),
    imageUrl: text('image_url'),
    displayOrder: integer('display_order').default(0),
    published: boolean('published').default(false).notNull(),
    ...timestamps,
  },
  (table) => [
    uniqueIndex('fleet_vessels_name_key').on(table.name),
    index('idx_fleet_vessels_category_id').on(table.categoryId),
  ],
);

export const newsCategories = pgTable('news_categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  ...timestamps,
});

export const newsArticles = pgTable(
  'news_articles',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    categoryId: uuid('category_id').references(() => newsCategories.id, { onDelete: 'set null' }),
    slug: text('slug').notNull().unique(),
    title: text('title').notNull(),
    excerpt: text('excerpt'),
    content: text('content'),
    imageUrl: text('image_url'),
    publishedDate: timestamp('published_date', { withTimezone: true }),
    displayOrder: integer('display_order').default(0),
    published: boolean('published').default(false).notNull(),
    ...timestamps,
  },
  (table) => [index('idx_news_articles_category_id').on(table.categoryId)],
);

export const leadershipProfiles = pgTable('leadership_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  title: text('title').notNull(),
  bio: text('bio'),
  imageUrl: text('image_url'),
  displayOrder: integer('display_order').default(0),
  published: boolean('published').default(false).notNull(),
  ...timestamps,
});

export const historyTimeline = pgTable('history_timeline', {
  id: uuid('id').primaryKey().defaultRandom(),
  year: integer('year').notNull(),
  title: text('title').notNull(),
  description: text('description'),
  imageUrl: text('image_url'),
  displayOrder: integer('display_order').default(0),
  published: boolean('published').default(false).notNull(),
  ...timestamps,
});

export const jobPostings = pgTable('job_postings', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  department: text('department'),
  location: text('location'),
  description: text('description'),
  requirements: text('requirements'),
  isActive: boolean('is_active').default(true).notNull(),
  ...timestamps,
});

export const offices = pgTable('offices', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  address: text('address'),
  phone: text('phone'),
  email: text('email'),
  latitude: numeric('latitude'),
  longitude: numeric('longitude'),
  displayOrder: integer('display_order').default(0),
  published: boolean('published').default(false).notNull(),
  ...timestamps,
});

export const contactSubmissions = pgTable('contact_submissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company'),
  subject: text('subject'),
  message: text('message').notNull(),
  isRead: boolean('is_read').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const siteSettings = pgTable('site_settings', {
  id: uuid('id').primaryKey().defaultRandom(),
  settingKey: text('setting_key').notNull().unique(),
  settingValue: jsonb('setting_value').notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const navigationItems = pgTable(
  'navigation_items',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    menuLocation: text('menu_location').notNull(),
    label: text('label').notNull(),
    url: text('url').notNull(),
    parentId: uuid('parent_id').references((): AnyPgColumn => navigationItems.id, {
      onDelete: 'cascade',
    }),
    displayOrder: integer('display_order').default(0),
    published: boolean('published').default(false).notNull(),
    ...timestamps,
  },
  (table) => [index('idx_navigation_items_parent_id').on(table.parentId)],
);

export const partners = pgTable(
  'partners',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull().unique(),
    logoUrl: text('logo_url'),
    logoAlt: text('logo_alt'),
    displayOrder: integer('display_order').default(0),
    published: boolean('published').default(true).notNull(),
    ...timestamps,
  },
  (table) => [index('idx_partners_display_order').on(table.displayOrder)],
);

export const adminProfiles = pgTable(
  'admin_profiles',
  {
    id: text('id')
      .primaryKey()
      .references(() => user.id, { onDelete: 'cascade' }),
    role: text('role').notNull(),
    email: text('email'),
    ...timestamps,
  },
  (table) => [
    uniqueIndex('admin_profiles_email_key').on(table.email),
    check(
      'admin_profiles_role_check',
      sql`${table.role} IN ('SUPER_ADMIN', 'EDITOR')`,
    ),
  ],
);
