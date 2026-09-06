import type { CmsRepository } from './repository';

/**
 * Repository selection — server-side only.
 *
 * Reads CMS_PROVIDER env var at runtime to select the backend:
 *   'supabase' → SupabaseCmsRepository (real database)
 *   'local'    → MockCmsRepository (local mock data, default)
 *
 * RULES:
 * - If CMS_PROVIDER=supabase and Supabase is misconfigured → THROWS, does NOT silently fallback.
 * - Fallback to local is ONLY allowed when CMS_PROVIDER is explicitly 'local' or unset.
 * - Never use this in Client Components.
 */
export async function getCmsRepository(): Promise<CmsRepository> {
  const provider = process.env.CMS_PROVIDER ?? 'local';

  if (provider === 'supabase') {
    // Dynamic import ensures admin credentials are never bundled client-side
    const { SupabaseCmsRepository } = await import('./supabase-repository');
    return new SupabaseCmsRepository();
  }

  if (provider === 'local') {
    const { cmsRepository } = await import('./repository');
    return cmsRepository;
  }

  throw new Error(`[CMS] Unknown CMS_PROVIDER: "${provider}". Must be "supabase" or "local".`);
}
