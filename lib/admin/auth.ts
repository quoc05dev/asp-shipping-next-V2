'use server';

import { redirect } from 'next/navigation';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export type AdminRole = 'SUPER_ADMIN' | 'EDITOR';

export interface AdminProfile {
  id: string;
  role: AdminRole;
  email: string | null;
  created_at: string;
}

/**
 * Get the currently authenticated admin profile.
 * Returns null if not authenticated or not an admin.
 * 
 * SECURITY: Role is read from the database (admin_profiles table),
 * never from client-supplied values.
 */
export async function getAdminProfile(): Promise<AdminProfile | null> {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) return null;

  const admin = createAdminClient();
  const { data: profile } = await admin
    .from('admin_profiles')
    .select('id, role, email, created_at')
    .eq('id', user.id)
    .single();

  if (!profile) return null;

  return profile as AdminProfile;
}

/**
 * Require authenticated admin. Redirects to /admin/login if not authenticated.
 */
export async function requireAdmin(): Promise<AdminProfile> {
  const profile = await getAdminProfile();
  if (!profile) {
    redirect('/admin/login');
  }
  return profile;
}

/**
 * Require SUPER_ADMIN role. Redirects to /admin if insufficient privileges.
 */
export async function requireSuperAdmin(): Promise<AdminProfile> {
  const profile = await requireAdmin();
  if (profile.role !== 'SUPER_ADMIN') {
    redirect('/admin');
  }
  return profile;
}

/**
 * Sign in with email/password via Supabase Auth.
 * After sign-in, verifies user exists in admin_profiles.
 */
export async function signInAdmin(email: string, password: string): Promise<{ error?: string }> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: 'Invalid credentials' };
  }

  // Verify this user is an admin
  const adminDb = createAdminClient();
  const { data: profile } = await adminDb
    .from('admin_profiles')
    .select('id, role')
    .eq('id', data.user.id)
    .single();

  if (!profile) {
    // Sign them out — not an admin
    await supabase.auth.signOut();
    return { error: 'Access denied. Your account does not have admin privileges.' };
  }

  return {};
}

/**
 * Sign out the current admin user.
 */
export async function signOutAdmin(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}
