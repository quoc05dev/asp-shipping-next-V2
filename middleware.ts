import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

/**
 * Next.js Middleware — handles session refresh and admin route protection.
 *
 * ADMIN ROUTES: /admin and /admin/*
 *   - Unauthenticated requests are redirected to /admin/login
 *   - Role verification (SUPER_ADMIN / EDITOR) happens in Server Components/Actions,
 *     not here, to keep middleware fast and avoid DB calls on every request.
 *
 * PUBLIC ROUTES: all others
 *   - Session cookies are refreshed if needed (Supabase SSR requirement)
 */
export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session — required for Supabase SSR
  const { data: { user } } = await supabase.auth.getUser()

  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isAdminLogin = request.nextUrl.pathname === '/admin/login'

  if (isAdminRoute && !isAdminLogin && !user) {
    // Not authenticated — redirect to login
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = '/admin/login'
    loginUrl.searchParams.set('redirectTo', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  if (isAdminLogin && user) {
    // Already authenticated — redirect to admin dashboard
    const dashUrl = request.nextUrl.clone()
    dashUrl.pathname = '/admin'
    dashUrl.searchParams.delete('redirectTo')
    return NextResponse.redirect(dashUrl)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    // Apply to all routes except static files and Next.js internals
    '/((?!_next/static|_next/image|favicon.ico|wp-content|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|eot|mp4|webm)).*)',
  ],
}
