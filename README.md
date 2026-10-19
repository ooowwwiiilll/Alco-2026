# ALCO — Aleph Layout & Content Orchestrator

ALCO assembles reviewable website previews from a governed component library (the Pegadaian library, 63 components). Product teams build pages from templates, division admins and the Role Manager review them, and approved releases become immutable, shareable previews.

Stack: React 19, strict TypeScript, Vite 6, Tailwind 4, Firebase (Auth, Firestore, Storage). Express serves local development and the optional production runner; Vercel serves the static build.

## Quick start

Requires Node ≥ 22.12 (Node 24 LTS recommended).

```bash
npm ci
cp .env.example .env.local   # optional; local mode is the default
npm run dev                  # http://localhost:3000
```

Local mode needs no Firebase: data lives in this browser's IndexedDB and the landing page offers one-click demo profiles (Role Manager, admins, product users). To work against the shared team workspace, set `VITE_DATA_MODE=firebase` and `VITE_FIREBASE_CONFIG` in `.env.local` — see [docs/PRODUCTION_SETUP.md](docs/PRODUCTION_SETUP.md).

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run check` | Type-check, formatting, unit tests and production build (CI gate) |
| `npm test` | Domain, rendering and repository tests |
| `npm run test:rules` | Firestore/Storage rules against the emulators (Java 21 + `firebase-tools`) |
| `npm run test:production` | Built bundle starts and never exposes demo access |
| `npm run format` | Prettier |

## Project layout

```
src/
  app/            App shell, sign-in, workspace controller and dialogs
  features/       UI by feature: auth, dashboard, editor (navbar/sidebar/canvas), releases,
                  templates, users, media, account, backup
  components/     Shared UI (feedback toasts, avatar, thumbnails, empty state)
  hooks/          State hooks: workspace data, editor document (undo/redo), actions per domain
  domain/         Pure business rules: access, release workflow, governance, canvas policy,
                  manifest contract, validation
  services/       Data access per collection (validated, revision-checked)
  persistence/    Repository adapters (IndexedDB local, Firestore cloud), assets, backups
  preview/        Sanitized rendering shared by canvas, previews, thumbnails and PDF
  data/library/   Component library, one module per component
  integrations/   CMS adapters (Strapi resolver)
```

Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) before changing data flows, and [MEMORY.md](MEMORY.md) for the team's working rules.
