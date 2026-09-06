import { createClient } from '@supabase/supabase-js'
import { env } from './env'

/**
 * ADMIN-ONLY Supabase client using the SECRET key.
 *
 * ⚠️  SECURITY RULES:
 * - This bypasses Row Level Security (RLS) entirely.
 * - NEVER import this file in any Client Component.
 * - NEVER pass the client or its credentials to the browser.
 * - Only use in: Server Actions, Route Handlers, migration scripts.
 * - The SUPABASE_SECRET_KEY must never appear in client bundles.
 */
export function createAdminClient() {
  const url = env.NEXT_PUBLIC_SUPABASE_URL;
  const secret = env.SUPABASE_SECRET_KEY;

  if (!url || !secret) {
    throw new Error(
      '[Admin] Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SECRET_KEY. ' +
      'These must be set in .env.local and never committed.'
    );
  }

  return createClient(url, secret, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    }
  })
}
