import { pool } from '@/lib/db';
import type { AdminField, AdminTable } from './tables';

function quoteIdentifier(identifier: string): string {
  return `"${identifier.replace(/"/g, '""')}"`;
}

function toSqlValue(field: AdminField, value: unknown): unknown {
  if (field.type === 'json' && value !== null) return JSON.stringify(value);
  return value;
}

export async function fetchAdminRows(
  config: AdminTable,
): Promise<Record<string, unknown>[]> {
  const direction = config.orderAscending ? 'ASC' : 'DESC';
  const result = await pool.query(
    `SELECT * FROM ${quoteIdentifier(config.table)} ORDER BY ${quoteIdentifier(config.orderBy)} ${direction} NULLS LAST`,
  );
  return result.rows;
}

export async function saveAdminRow(
  config: AdminTable,
  id: string,
  values: Record<string, unknown>,
): Promise<void> {
  const fields = config.fields.filter((field) => field.name in values);
  const columns = fields.map((field) => quoteIdentifier(field.name));
  const params = fields.map((field) => toSqlValue(field, values[field.name]));

  if (id) {
    const assignments = columns.map((column, index) => `${column} = $${index + 1}`);
    const result = await pool.query(
      `UPDATE ${quoteIdentifier(config.table)} SET ${assignments.join(', ')} WHERE "id" = $${params.length + 1} RETURNING "id"`,
      [...params, id],
    );
    if (result.rowCount === 0) throw new Error('Row not found');
    return;
  }

  const placeholders = columns.map((_, index) => `$${index + 1}`);
  await pool.query(
    `INSERT INTO ${quoteIdentifier(config.table)} (${columns.join(', ')}) VALUES (${placeholders.join(', ')})`,
    params,
  );
}

export async function deleteAdminRow(
  config: AdminTable,
  id: string,
): Promise<void> {
  const result = await pool.query(
    `DELETE FROM ${quoteIdentifier(config.table)} WHERE "id" = $1`,
    [id],
  );
  if (result.rowCount === 0) throw new Error('Row not found');
}
