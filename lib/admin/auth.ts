'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { getAuth } from '@/lib/auth';
import { db } from '@/lib/db';
import { adminProfiles } from '@/lib/db/schema';

export type AdminRole = 'SUPER_ADMIN' | 'EDITOR';

export interface AdminProfile {
  id: string;
  role: AdminRole;
  email: string | null;
  created_at: string;
}

export async function getAdminProfile(): Promise<AdminProfile | null> {
  const auth = getAuth();
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) return null;

  const [profile] = await db
    .select()
    .from(adminProfiles)
    .where(eq(adminProfiles.id, session.user.id))
    .limit(1);

  if (!profile) return null;

  return {
    id: profile.id,
    role: profile.role as AdminRole,
    email: profile.email,
    created_at: profile.createdAt.toISOString(),
  };
}

export async function requireAdmin(): Promise<AdminProfile> {
  const profile = await getAdminProfile();
  if (!profile) {
    redirect('/admin/login');
  }
  return profile;
}

export async function requireSuperAdmin(): Promise<AdminProfile> {
  const profile = await requireAdmin();
  if (profile.role !== 'SUPER_ADMIN') {
    redirect('/admin');
  }
  return profile;
}

export async function signInAdmin(
  email: string,
  password: string,
): Promise<{ error?: string }> {
  const normalizedEmail = email.trim().toLowerCase();
  const [profile] = await db
    .select()
    .from(adminProfiles)
    .where(eq(adminProfiles.email, normalizedEmail))
    .limit(1);

  if (!profile) {
    return { error: 'Invalid credentials' };
  }

  try {
    const result = await getAuth().api.signInEmail({
      body: { email: normalizedEmail, password, rememberMe: true },
      headers: await headers(),
    });

    if (result.user.id !== profile.id) {
      return { error: 'Invalid credentials' };
    }
  } catch {
    return { error: 'Invalid credentials' };
  }

  return {};
}

export async function signOutAdmin(): Promise<void> {
  await getAuth().api.signOut({ headers: await headers() });
  redirect('/admin/login');
}
