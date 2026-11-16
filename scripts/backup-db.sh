#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
set -a
# shellcheck disable=SC1091
[ -f .env ] && . ./.env
set +a

mkdir -p backups
stamp="$(date -u +%Y%m%dT%H%M%SZ)"
out="backups/asp-${stamp}.dump"

docker compose exec -T -e "PGPASSWORD=${POSTGRES_PASSWORD:?POSTGRES_PASSWORD is required}" db \
  pg_dump -h 127.0.0.1 \
  -U "${POSTGRES_USER:-asp}" \
  -d "${POSTGRES_DB:-asp}" \
  -Fc > "$out"

find backups -type f -name 'asp-*.dump' -mtime +7 -delete
echo "Backup written: $out"
