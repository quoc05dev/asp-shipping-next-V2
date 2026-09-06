# Parallel development

Repository: https://github.com/dauduc-luu/asp-shipping-next.git.

| Branch | Purpose | Local directory |
| --- | --- | --- |
| `master` | Stable, verified business-review baseline | `asp-shipping-next` |
| `dev` | Integration and verification | `asp-shipping-next`, when checked out to `dev` |
| `frontend/anty` | Antigravity frontend work | `../asp-shipping-anty` |
| `backend/codex` | Codex backend work | `../asp-shipping-codex` |

Create `dev` from the verified master baseline, then create both feature branches
from `dev`. Use Git worktrees for the two sibling feature directories. Keep the
original project directory intact.

## Ownership

Antigravity owns unfinished public pages, layout, CSS, responsive behavior,
Sustainability, Careers, Fleet and Media public UI, animations, header/mobile
navigation, and visual parity.

Codex owns Supabase/database, Auth/RLS, `/admin`, the CMS repository, CRUD,
Contact/Newsletter backend, Storage, Server Actions, validation, and security.

## Working rules

1. Never implement features directly on `master`.
2. Antigravity and Codex must never work in the same local directory.
3. Each agent commits only the files belonging to its own completed task.
4. Stage explicit reviewed file paths. Never use `git add .` or `git add -A`.
5. Push the feature branch after a completed unit of work.
6. Merge feature branches into `dev` and resolve conflicts there.
7. On `dev`, run `npm run build` first, start the resulting production server,
   and then run `npm run test:frontend-regression`. Verify public runtime assets.
   The guard preserves all 43 public presentation contracts and separately checks
   admin route existence, login rendering, and anonymous authentication redirects.
   Both scopes must pass; a nonzero exit code blocks integration.
8. Merge `dev` into `master` only after verification and business review.
9. Never commit `.env.local`, credentials, generated output, or scratch files.
10. Coordinate shared-file changes before editing; review the combined result.

High-conflict shared files: `package.json`, `package-lock.json`, `middleware.ts`,
`data/cms/types.ts`, `data/cms/repository.ts`, and `.env.example`.

## Local environment

After worktrees exist, the user should manually copy the existing `.env.local`
into `../asp-shipping-codex/.env.local` before backend work. Never print its values.

For frontend work prefer `CMS_PROVIDER=local` and local/mock CMS content. Do not
copy `SUPABASE_SECRET_KEY` unless the specific task requires server credentials.
The current authentication middleware still requires public Supabase connection
settings; local CMS selection alone does not disable authentication middleware.

Install dependencies separately in each worktree with `npm ci`. When running
servers simultaneously, use distinct ports. The existing regression script
targets `http://localhost:3000`; ensure it reaches the intended production build.

Pushing Git branches does not authorize Vercel deployment or production database
changes. Seed and storage setup scripts are preserved for deliberate backend
work and must not run as part of baseline verification.

## KNOWN FRONTEND ISSUES

`CAREERS_VISUAL_DEBT`: **5 missing icons**, owned by `frontend/anty`.
The `/careers` page returns HTTP 200, but these rendered image requests return
HTTP 404 under `public/wp-content/uploads/2024/01/`:

- `careers-open-culture-icon.svg`
- `careers-recognising-talent-icon.svg`
- `careers-training-and-development-icon.svg`
- `careers-competitive-benefits-icon.svg`
- `careers-equal-opportunities-icon.svg`

No exact copies were found in the current Git history, local legacy/project
backups, or downloaded archives. The legacy HTML has relative image paths and an
ASP.com canonical URL; its original pre-migration hostname could not be verified.
Requests at the recorded host did not yield SVG assets. No substitute files were
created. This known visual debt is explicitly accepted for the parallel baseline
and does not block GitHub setup. Recover exact artwork or obtain a separately
approved frontend change; do not silently hide the 404s.

Optional Media/gallery/news images and historical download links also remain
frontend content debt. The public route/content regression is not a complete
asset-integrity or visual-parity audit. Antigravity should review these during
Media and unfinished public-page work.

The admin checks verify anonymous access behavior and login rendering only.
Authenticated login submission, role/RLS enforcement and CRUD require separate
backend work; the current login form is a foundation for that implementation.
