import { createBrowserClient } from '@supabase/ssr'
import { env } from './env'

/**
 * Browser-safe Supabase client.
 * Uses the PUBLISHABLE key — safe to expose in client bundles.
 * Do NOT use this to access protected/admin data.
 */
export function createClient() {
  return createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL || '',
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || ''
  )
}
