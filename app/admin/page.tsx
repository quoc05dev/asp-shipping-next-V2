import type { Metadata } from 'next';
import { requireAdmin } from '@/lib/admin/auth';

export const metadata: Metadata = {
  title: 'Admin — ASP Shipping',
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const admin = await requireAdmin();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0f1e',
      fontFamily: 'system-ui, sans-serif',
      color: '#f9fafb',
      padding: '48px'
    }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
        ASP CMS Dashboard
      </h1>
      <p style={{ color: '#9ca3af', marginBottom: '32px' }}>
        Signed in as <strong style={{ color: '#60a5fa' }}>{admin.email}</strong> ({admin.role})
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        maxWidth: '900px'
      }}>
        {[
          { label: 'Pages', href: '/admin/pages', icon: '📄' },
          { label: 'Services', href: '/admin/services', icon: '⚙️' },
          { label: 'Fleet', href: '/admin/fleet', icon: '🚢' },
          { label: 'Media', href: '/admin/media', icon: '📰' },
          { label: 'Careers', href: '/admin/careers', icon: '💼' },
          { label: 'Offices', href: '/admin/offices', icon: '🏢' },
          { label: 'Inbox', href: '/admin/inbox', icon: '📬' },
          { label: 'Settings', href: '/admin/settings', icon: '🔧' },
        ].map(item => (
          <a key={item.href} href={item.href} style={{
            display: 'block',
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: '10px',
            padding: '20px',
            textDecoration: 'none',
            color: '#f9fafb',
            fontSize: '15px',
            fontWeight: 500,
            transition: 'border-color 0.2s'
          }}>
            <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>

      <p style={{ marginTop: '48px', fontSize: '12px', color: '#4b5563' }}>
        Admin UI — Full implementation in FT4
      </p>
    </div>
  );
}
