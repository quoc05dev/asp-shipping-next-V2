export type AdminFieldType = 'text' | 'textarea' | 'number' | 'boolean' | 'json';

export interface AdminField {
  name: string;
  label: string;
  type: AdminFieldType;
  required?: boolean;
}

export interface AdminTable {
  table: string;
  label: string;
  orderBy: string;
  orderAscending?: boolean;
  fields: AdminField[];
}

const published: AdminField = { name: 'published', label: 'Published', type: 'boolean' };

export const adminTables: Record<string, AdminTable> = {
  pages: {
    table: 'pages',
    label: 'Pages',
    orderBy: 'slug',
    orderAscending: true,
    fields: [
      { name: 'slug', label: 'Slug', type: 'text', required: true },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'seo_title', label: 'SEO title', type: 'text' },
      { name: 'seo_description', label: 'SEO description', type: 'textarea' },
      published,
    ],
  },
  sections: {
    table: 'page_sections',
    label: 'Page Sections',
    orderBy: 'display_order',
    orderAscending: true,
    fields: [
      { name: 'page_id', label: 'Page ID', type: 'text', required: true },
      { name: 'section_key', label: 'Section key', type: 'text', required: true },
      { name: 'content', label: 'Content (JSON)', type: 'json', required: true },
      { name: 'display_order', label: 'Order', type: 'number' },
      published,
    ],
  },
  services: {
    table: 'services',
    label: 'Services',
    orderBy: 'display_order',
    orderAscending: true,
    fields: [
      { name: 'slug', label: 'Slug', type: 'text', required: true },
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'icon_url', label: 'Image URL', type: 'text' },
      { name: 'display_order', label: 'Order', type: 'number' },
      published,
    ],
  },
  faqs: {
    table: 'service_faqs',
    label: 'Service FAQs',
    orderBy: 'display_order',
    orderAscending: true,
    fields: [
      { name: 'service_id', label: 'Service ID', type: 'text', required: true },
      { name: 'question', label: 'Question', type: 'text', required: true },
      { name: 'answer', label: 'Answer', type: 'textarea', required: true },
      { name: 'display_order', label: 'Order', type: 'number' },
      published,
    ],
  },
  fleet: {
    table: 'fleet_vessels',
    label: 'Fleet',
    orderBy: 'display_order',
    orderAscending: true,
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'imo_number', label: 'IMO number', type: 'text' },
      { name: 'built_year', label: 'Built year', type: 'number' },
      { name: 'dwt', label: 'DWT', type: 'number' },
      { name: 'cbm', label: 'CBM', type: 'number' },
      { name: 'specifications', label: 'Specifications (JSON)', type: 'json' },
      { name: 'image_url', label: 'Image URL', type: 'text' },
      { name: 'display_order', label: 'Order', type: 'number' },
      published,
    ],
  },
  partners: {
    table: 'partners',
    label: 'Partners',
    orderBy: 'display_order',
    orderAscending: true,
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'logo_url', label: 'Logo URL', type: 'text' },
      { name: 'logo_alt', label: 'Logo alt', type: 'text' },
      { name: 'display_order', label: 'Order', type: 'number' },
      published,
    ],
  },
  'news-categories': {
    table: 'news_categories',
    label: 'News Categories',
    orderBy: 'name',
    orderAscending: true,
    fields: [
      { name: 'slug', label: 'Slug', type: 'text', required: true },
      { name: 'name', label: 'Name', type: 'text', required: true },
    ],
  },
  news: {
    table: 'news_articles',
    label: 'News',
    orderBy: 'published_date',
    fields: [
      { name: 'category_id', label: 'Category ID', type: 'text' },
      { name: 'slug', label: 'Slug', type: 'text', required: true },
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'excerpt', label: 'Excerpt', type: 'textarea' },
      { name: 'content', label: 'Content (HTML)', type: 'textarea' },
      { name: 'image_url', label: 'Image URL', type: 'text' },
      { name: 'published_date', label: 'Published date (ISO)', type: 'text' },
      { name: 'display_order', label: 'Order', type: 'number' },
      published,
    ],
  },
  navigation: {
    table: 'navigation_items',
    label: 'Navigation',
    orderBy: 'display_order',
    orderAscending: true,
    fields: [
      { name: 'menu_location', label: 'Location', type: 'text', required: true },
      { name: 'label', label: 'Label', type: 'text', required: true },
      { name: 'url', label: 'URL', type: 'text', required: true },
      { name: 'parent_id', label: 'Parent ID', type: 'text' },
      { name: 'display_order', label: 'Order', type: 'number' },
      published,
    ],
  },
  careers: {
    table: 'job_postings',
    label: 'Careers',
    orderBy: 'created_at',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'location', label: 'Location', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'requirements', label: 'Requirements', type: 'textarea' },
      { name: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  offices: {
    table: 'offices',
    label: 'Offices',
    orderBy: 'display_order',
    orderAscending: true,
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'address', label: 'Address', type: 'textarea' },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'latitude', label: 'Latitude', type: 'number' },
      { name: 'longitude', label: 'Longitude', type: 'number' },
      { name: 'display_order', label: 'Order', type: 'number' },
      published,
    ],
  },
  inbox: {
    table: 'contact_submissions',
    label: 'Inbox',
    orderBy: 'created_at',
    fields: [
      { name: 'name', label: 'Name', type: 'text' },
      { name: 'first_name', label: 'First name', type: 'text' },
      { name: 'last_name', label: 'Last name', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'subject', label: 'Subject', type: 'text' },
      { name: 'message', label: 'Message', type: 'textarea' },
      { name: 'is_read', label: 'Read', type: 'boolean' },
    ],
  },
  subscribers: {
    table: 'newsletter_subscribers',
    label: 'Subscribers',
    orderBy: 'created_at',
    fields: [
      { name: 'email', label: 'Email', type: 'text', required: true },
      { name: 'first_name', label: 'First name', type: 'text' },
      { name: 'last_name', label: 'Last name', type: 'text' },
      { name: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  settings: {
    table: 'site_settings',
    label: 'Settings',
    orderBy: 'setting_key',
    orderAscending: true,
    fields: [
      { name: 'setting_key', label: 'Key', type: 'text', required: true },
      { name: 'setting_value', label: 'Value (JSON)', type: 'json', required: true },
    ],
  },
};
