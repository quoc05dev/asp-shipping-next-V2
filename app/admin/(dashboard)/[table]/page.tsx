import { notFound } from 'next/navigation';
import { fetchAdminRows } from '@/lib/admin/rows';
import { adminTables, type AdminField } from '@/lib/admin/tables';
import { saveRowAction } from '@/lib/admin/actions';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 10px',
  background: '#0f172a',
  border: '1px solid #374151',
  borderRadius: '6px',
  color: '#f9fafb',
  fontSize: '13px',
  boxSizing: 'border-box',
};

const buttonStyle: React.CSSProperties = {
  padding: '8px 14px',
  background: '#2563eb',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
};

function FieldInput({ field, value }: { field: AdminField; value?: unknown }) {
  if (field.type === 'boolean') {
    return <input type="checkbox" name={field.name} defaultChecked={Boolean(value)} />;
  }
  if (field.type === 'textarea' || field.type === 'json') {
    const text = field.type === 'json'
      ? (value == null ? '' : JSON.stringify(value, null, 2))
      : String(value ?? '');
    return <textarea name={field.name} defaultValue={text} rows={field.type === 'json' ? 10 : 3} style={{ ...inputStyle, fontFamily: field.type === 'json' ? 'monospace' : 'inherit' }} />;
  }
  if (field.type === 'number') {
    return <input type="number" step="any" name={field.name} defaultValue={value == null ? '' : String(value)} style={inputStyle} />;
  }
  return <input type="text" name={field.name} defaultValue={String(value ?? '')} style={inputStyle} />;
}

function RowForm({ tableKey, title, row, isNew }: { tableKey: string; title: string; row?: Record<string, unknown>; isNew?: boolean }) {
  const config = adminTables[tableKey];
  return (
    <form action={saveRowAction} style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '10px', padding: '16px', marginBottom: '12px' }}>
      <input type="hidden" name="_table" value={tableKey} />
      {!isNew && <input type="hidden" name="_id" value={String(row?.id ?? '')} />}
      <h3 style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 12px', fontWeight: 600 }}>{title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px' }}>
        {config.fields.map((field) => (
          <label key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', color: '#9ca3af' }}>
            <span>{field.label}{field.required ? ' *' : ''}</span>
            <FieldInput field={field} value={isNew ? undefined : row?.[field.name]} />
          </label>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
        <button type="submit" name="_intent" value="save" style={buttonStyle}>Save</button>
        {!isNew && (
          <button type="submit" name="_intent" value="delete" style={{ ...buttonStyle, background: '#7f1d1d' }}>
            Delete
          </button>
        )}
      </div>
    </form>
  );
}

export default async function AdminTablePage({
  params,
  searchParams,
}: {
  params: Promise<{ table: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { table } = await params;
  const { error } = await searchParams;
  const config = adminTables[table];
  if (!config) notFound();

  let rows: Record<string, unknown>[] = [];
  let queryError: string | undefined;

  try {
    rows = await fetchAdminRows(config);
  } catch (error) {
    queryError = error instanceof Error ? error.message : 'Unable to load rows';
  }

  const message = error ?? queryError;

  return (
    <div>
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>{config.label}</h1>
      <p style={{ color: '#9ca3af', marginBottom: '20px', fontSize: '13px' }}>
        {rows.length} row(s) in <code>{config.table}</code>
      </p>

      {message && (
        <div style={{ background: '#7f1d1d', border: '1px solid #991b1b', color: '#fecaca', padding: '10px 14px', borderRadius: '8px', marginBottom: '16px', fontSize: '13px' }}>
          {message}
        </div>
      )}

      <RowForm tableKey={table} title="Create new row" isNew />
      {rows.map((row) => (
        <RowForm key={String(row.id)} tableKey={table} title={`#${String(row.id)}`} row={row} />
      ))}
    </div>
  );
}
