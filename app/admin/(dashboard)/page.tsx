import Link from 'next/link';
import { adminTables } from '@/lib/admin/tables';

export const metadata = {
  title: 'Admin — ASP Shipping',
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '8px' }}>ASP CMS Dashboard</h1>
      <p style={{ color: '#9ca3af', marginBottom: '28px', fontSize: '14px' }}>
        Manage the content stored in PostgreSQL. Changes appear on the public site immediately.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px', maxWidth: '960px' }}>
        {Object.entries(adminTables).map(([key, config]) => (
          <Link key={key} href={`/admin/${key}`} style={{
            display: 'block',
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: '10px',
            padding: '18px',
            textDecoration: 'none',
            color: '#f9fafb',
            fontSize: '14px',
            fontWeight: 500,
          }}>
            {config.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
