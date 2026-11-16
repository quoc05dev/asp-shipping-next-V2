import type { CmsRepository } from './repository';

/**
 * Repository selection - server-side only.
 *
 * CMS_PROVIDER:
 *   'postgres' -> PostgresCmsRepository (real database)
 *   'local'    -> MockCmsRepository (local mock data, default)
 *
 * RULES:
 * - If CMS_PROVIDER=postgres and the database is misconfigured -> THROWS, does NOT silently fallback.
 * - Fallback to local is ONLY allowed when CMS_PROVIDER is explicitly 'local' or unset.
 * - Never use this in Client Components.
 */
export async function getCmsRepository(): Promise<CmsRepository> {
  const provider = process.env.CMS_PROVIDER ?? 'local';

  if (provider === 'postgres') {
    const { PostgresCmsRepository } = await import('./postgres-repository');
    return new PostgresCmsRepository();
  }

  if (provider === 'local') {
    const { cmsRepository } = await import('./repository');
    return cmsRepository;
  }

  throw new Error(
    `[CMS] Unknown CMS_PROVIDER: "${provider}". Must be "postgres" or "local".`,
  );
}
