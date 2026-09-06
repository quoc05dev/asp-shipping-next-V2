export const env = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  // Public publishable key — safe to expose to browser
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  // Secret key — MUST NEVER be included in client bundles
  SUPABASE_SECRET_KEY: process.env.SUPABASE_SECRET_KEY,
};

export function requireEnv(key: keyof typeof env): string {
  const val = env[key];
  if (!val) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return val;
}
