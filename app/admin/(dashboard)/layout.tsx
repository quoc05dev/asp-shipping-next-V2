import Link from 'next/link';
import { requireAdmin } from '@/lib/admin/auth';
import { logoutAction } from '@/lib/admin/actions';
import { adminTables } from '@/lib/admin/tables';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0f1e', color: '#f9fafb', fontFamily: 'system-ui, sans-serif' }}>
      <aside style={{ width: '230px', flexShrink: 0, borderRight: '1px solid #1f2937', padding: '24px 14px', display: 'flex', flexDirection: 'column' }}>
        <Link href="/admin" style={{ color: '#f9fafb', textDecoration: 'none', fontSize: '16px', fontWeight: 700, marginBottom: '20px', padding: '0 8px' }}>
          ASP CMS
        </Link>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflowY: 'auto' }}>
          {Object.entries(adminTables).map(([key, config]) => (
            <Link key={key} href={`/admin/${key}`} style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '13px', padding: '7px 8px', borderRadius: '6px' }}>
              {config.label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #1f2937', fontSize: '12px', color: '#9ca3af' }}>
          <div style={{ marginBottom: '8px' }}>{admin.email} ({admin.role})</div>
          <form action={logoutAction}>
            <button type="submit" style={{ width: '100%', padding: '8px', background: '#1f2937', color: '#f9fafb', border: '1px solid #374151', borderRadius: '6px', cursor: 'pointer' }}>
              Sign out
            </button>
          </form>
        </div>
      </aside>
      <main style={{ flex: 1, padding: '32px', minWidth: 0 }}>{children}</main>
    </div>
  );
}
