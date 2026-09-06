import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login — ASP Shipping',
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0f1e',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        background: '#111827',
        border: '1px solid #1f2937',
        borderRadius: '12px',
        padding: '48px',
        width: '100%',
        maxWidth: '400px',
        color: '#f9fafb'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: '#f9fafb' }}>
          ASP Admin
        </h1>
        <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '32px' }}>
          Sign in to access the CMS dashboard.
        </p>

        {/* Login form — full implementation in FT4 */}
        <form action="/api/admin/auth/login" method="POST">
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="email" style={{ display: 'block', fontSize: '14px', color: '#d1d5db', marginBottom: '6px' }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              style={{
                width: '100%',
                padding: '10px 14px',
                background: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#f9fafb',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label htmlFor="password" style={{ display: 'block', fontSize: '14px', color: '#d1d5db', marginBottom: '6px' }}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              style={{
                width: '100%',
                padding: '10px 14px',
                background: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#f9fafb',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Sign In
          </button>
        </form>

        <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '24px', textAlign: 'center' }}>
          Admin access only. Unauthorized access is prohibited.
        </p>
      </div>
    </div>
  );
}
