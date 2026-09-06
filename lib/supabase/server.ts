import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { env } from './env'

/**
 * Server-side Supabase client for Server Components and Server Actions.
 * Uses the PUBLISHABLE key — applies Row Level Security (RLS).
 * Safe for reading publicly published content.
 */
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL || '',
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Ignore in Server Components — middleware handles session refresh
          }
        },
      },
    }
  )
}
