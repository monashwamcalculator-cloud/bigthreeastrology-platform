# BIGThreeAstrology

Next.js App Router + TypeScript platform with:
- Big three calculator
- Blog-first CMS publishing flow
- Astrologer listing and owner dashboard updates
- Listing reminder/staleness lifecycle job
- Canonical + robots + schema-oriented SEO setup

## Environment Variables

Copy `.env.example` to `.env` and configure:
- `DATABASE_URL`
- `AUTH_SECRET`
- `NEXTAUTH_URL`
- `NEXT_PUBLIC_SITE_URL`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- `CRON_SECRET`
- `LISTING_REMINDER_DAYS` (default `7`)
- `LISTING_STALE_DAYS` (default `30`)

## Local Run

```bash
npm install
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run prisma:seed
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Listing Reminder + Staleness Job (Cron-Friendly)

Run this route on a schedule (recommended daily):

```bash
curl -X POST "http://localhost:3000/api/cron/listings" \
  -H "Authorization: Bearer ${CRON_SECRET}"
```

Behavior:
- Sends reminder emails every `LISTING_REMINDER_DAYS` when owner has not updated listing.
- Marks stale approved listings `isIndexable=false` after `LISTING_STALE_DAYS`.
- Stale listings are excluded from indexable listing pages.
- Owner can restore indexing by logging in and updating listing via dashboard.

## Seed Credentials

Password for all: `Pass@12345`
- ADMIN: `admin@bigthree.local`
- EDITOR: `editor@bigthree.local`
- ASTROLOGER: `astro@bigthree.local`
- USER: `user@bigthree.local`
