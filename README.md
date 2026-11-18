This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Database and deployment

Production runs as `Nginx (host) -> Next.js (Docker) -> PostgreSQL (Docker)`.
The Compose stack binds the web container to `127.0.0.1:3100`; host Nginx owns `80/443`.

```bash
cp .env.example .env
# Set POSTGRES_PASSWORD, DATABASE_URL, BETTER_AUTH_SECRET, BETTER_AUTH_URL,
# ADMIN_EMAIL and ADMIN_PASSWORD.
# DATABASE_URL must use the password from POSTGRES_PASSWORD and host "db".

docker compose --profile tools build
docker compose --profile tools run --rm tools npm run db:migrate
docker compose --profile tools run --rm tools npm run seed
docker compose --profile tools run --rm tools npm run create:admin
docker compose up -d
```

Run `seed` only once on a new database. It overwrites seeded content on later runs.

`CMS_PROVIDER=postgres` is set by Compose. Local `npm run dev` defaults to `CMS_PROVIDER=local` and needs no database.

### Host Nginx

Create `/etc/nginx/sites-available/asp-shipping.conf`, replace the domain, then enable it:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name asp.example.com;

    client_max_body_size 10m;

    location / {
        proxy_pass http://127.0.0.1:3100;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
ln -s /etc/nginx/sites-available/asp-shipping.conf /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
certbot --nginx -d asp.example.com
```

Backups are not automatic. Run from the VPS and copy the dump off-site:

```bash
bash scripts/backup-db.sh
```

The script keeps 7 days in `backups/`. Add it to cron and sync that folder with `rclone` or `restic`.

