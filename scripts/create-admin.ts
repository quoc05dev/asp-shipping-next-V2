import * as dotenv from 'dotenv';
import path from 'path';
import { randomUUID } from 'crypto';
import { and, eq } from 'drizzle-orm';
import { hashPassword } from 'better-auth/crypto';
import { db, pool } from '../lib/db';
import { account, adminProfiles, user } from '../lib/db/schema';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  const role = process.env.ADMIN_ROLE ?? 'SUPER_ADMIN';

  if (!email || !password) {
    console.error('Missing ADMIN_EMAIL or ADMIN_PASSWORD (set them in .env.local).');
    process.exit(1);
  }
  if (password.length < 8) {
    console.error('ADMIN_PASSWORD must be at least 8 characters.');
    process.exit(1);
  }
  if (role !== 'SUPER_ADMIN' && role !== 'EDITOR') {
    console.error('ADMIN_ROLE must be SUPER_ADMIN or EDITOR.');
    process.exit(1);
  }

  const [existing] = await db
    .select({ id: user.id })
    .from(user)
    .where(eq(user.email, email))
    .limit(1);

  const userId = existing?.id ?? randomUUID();
  const passwordHash = await hashPassword(password);

  await db.transaction(async (tx) => {
    if (existing) {
      await tx.update(user).set({ emailVerified: true }).where(eq(user.id, userId));
    } else {
      await tx.insert(user).values({
        id: userId,
        name: email.split('@')[0],
        email,
        emailVerified: true,
      });
    }

    const [credential] = await tx
      .select({ id: account.id })
      .from(account)
      .where(and(eq(account.userId, userId), eq(account.providerId, 'credential')))
      .limit(1);

    if (credential) {
      await tx.update(account).set({ password: passwordHash }).where(eq(account.id, credential.id));
    } else {
      await tx.insert(account).values({
        id: randomUUID(),
        accountId: userId,
        providerId: 'credential',
        userId,
        password: passwordHash,
      });
    }

    await tx
      .insert(adminProfiles)
      .values({ id: userId, role, email })
      .onConflictDoUpdate({
        target: adminProfiles.id,
        set: { role, email },
      });
  });

  console.log(`Admin ready: ${email} (${role})`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => pool.end());
