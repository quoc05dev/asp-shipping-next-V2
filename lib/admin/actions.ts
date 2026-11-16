'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { requireAdmin, signInAdmin, signOutAdmin } from './auth';
import { deleteAdminRow, saveAdminRow } from './rows';
import { adminTables, type AdminField } from './tables';

function fail(back: string, message: string): never {
  redirect(`${back}?error=${encodeURIComponent(message)}`);
}

function readField(formData: FormData, field: AdminField): unknown {
  const raw = formData.get(field.name);

  if (field.type === 'boolean') return raw === 'on';

  if (field.type === 'number') {
    if (raw === null || String(raw).trim() === '') return null;
    const num = Number(raw);
    if (!Number.isFinite(num)) throw new Error(`${field.label} must be a number`);
    return num;
  }

  if (field.type === 'json') {
    if (raw === null || String(raw).trim() === '') return null;
    return JSON.parse(String(raw));
  }

  const value = String(raw ?? '').trim();
  return value === '' ? null : value;
}

export async function loginAction(formData: FormData): Promise<void> {
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const redirectTo = String(formData.get('redirectTo') ?? '/admin');

  if (!email || !password) {
    redirect('/admin/login?error=' + encodeURIComponent('Email and password are required.'));
  }

  let error: string | undefined;
  try {
    const result = await signInAdmin(email, password);
    error = result.error;
  } catch {
    error = 'Unable to sign in. Check the server configuration.';
  }

  if (error) {
    redirect('/admin/login?error=' + encodeURIComponent(error));
  }

  const safeRedirect =
    redirectTo.startsWith('/admin') && !redirectTo.startsWith('//') ? redirectTo : '/admin';
  redirect(safeRedirect);
}

export async function logoutAction(): Promise<void> {
  await signOutAdmin();
}

export async function saveRowAction(formData: FormData): Promise<void> {
  const tableKey = String(formData.get('_table') ?? '');
  const config = adminTables[tableKey];
  if (!config) redirect('/admin?error=' + encodeURIComponent('Unknown table'));

  await requireAdmin();

  const back = `/admin/${tableKey}`;
  const intent = String(formData.get('_intent') ?? 'save');
  const id = String(formData.get('_id') ?? '').trim();

  if (intent === 'delete') {
    if (!id) fail(back, 'Missing row ID');
    try {
      await deleteAdminRow(config, id);
    } catch (error) {
      fail(back, error instanceof Error ? error.message : 'Delete failed');
    }
    revalidatePath('/', 'layout');
    redirect(back);
  }

  const row: Record<string, unknown> = {};
  for (const field of config.fields) {
    let value: unknown;
    try {
      value = readField(formData, field);
    } catch (error) {
      fail(back, error instanceof Error ? error.message : `${field.label} is invalid`);
    }
    if (field.required && value === null) fail(back, `${field.label} is required`);
    row[field.name] = value;
  }

  try {
    await saveAdminRow(config, id, row);
  } catch (error) {
    fail(back, error instanceof Error ? error.message : 'Save failed');
  }

  revalidatePath('/', 'layout');
  redirect(back);
}
