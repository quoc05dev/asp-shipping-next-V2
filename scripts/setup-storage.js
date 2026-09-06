// scripts/setup-storage.js
// Creates required Supabase Storage buckets via the Supabase admin client
// Run: node scripts/setup-storage.js

const fs = require('fs');
const path = require('path');
const https = require('https');

function readEnv() {
  const envContent = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf-8');
  const env = {};
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx < 0) continue;
    env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
  }
  return env;
}

async function supabaseRequest(url, method, secret, body) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const bodyStr = body ? JSON.stringify(body) : null;
    const options = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method,
      headers: {
        'apikey': secret,
        'Authorization': `Bearer ${secret}`,
        'Content-Type': 'application/json',
        ...(bodyStr ? { 'Content-Length': Buffer.byteLength(bodyStr) } : {})
      }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

async function main() {
  const env = readEnv();
  const url = env['NEXT_PUBLIC_SUPABASE_URL'];
  const secret = env['SUPABASE_SECRET_KEY'];

  if (!url || !secret || secret === 'PASTE_SECRET_HERE') {
    console.error('FAIL: Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SECRET_KEY');
    process.exit(1);
  }

  const buckets = [
    { id: 'cms-images',  name: 'cms-images',  public: false, allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'], fileSizeLimit: 10485760 },
    { id: 'fleet',       name: 'fleet',        public: true,  allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],                               fileSizeLimit: 20971520 },
    { id: 'news',        name: 'news',         public: true,  allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],                               fileSizeLimit: 10485760 },
    { id: 'documents',   name: 'documents',    public: false, allowedMimeTypes: ['application/pdf'],                                                     fileSizeLimit: 52428800 },
  ];

  console.log('Setting up Supabase Storage buckets...\n');

  for (const bucket of buckets) {
    const res = await supabaseRequest(
      `${url}/storage/v1/bucket`,
      'POST',
      secret,
      {
        id: bucket.id,
        name: bucket.name,
        public: bucket.public,
        allowed_mime_types: bucket.allowedMimeTypes,
        file_size_limit: bucket.fileSizeLimit,
      }
    );

    if (res.status === 200 || res.status === 201) {
      console.log(`✅ CREATED: ${bucket.name} (public: ${bucket.public})`);
    } else if (res.status === 409 || (typeof res.body === 'object' && res.body?.error === 'Duplicate')) {
      console.log(`ℹ️  EXISTS:  ${bucket.name} (already created)`);
    } else {
      console.log(`❌ FAILED:  ${bucket.name} — HTTP ${res.status}`, typeof res.body === 'object' ? res.body?.message : res.body?.slice?.(0, 100));
    }
  }

  console.log('\nStorage setup complete.');
  console.log('\nBUCKET PLAN:');
  console.log('  cms-images  — Private. CMS-managed page/section images.');
  console.log('  fleet       — Public.  Fleet vessel images.');
  console.log('  news        — Public.  News article thumbnails.');
  console.log('  documents   — Private. PDF downloads, PDFs up to 50MB.');
  console.log('\nStatic design/theme assets remain in: public/');
  console.log('No existing media has been moved.');
}

main().catch(e => { console.error(e); process.exit(1); });
