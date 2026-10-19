# Firebase & deployment setup

The AI Studio prototype project (`marine-artifact-7xjsq`) is rejected on purpose: it still serves the old app and its data model (browser-side password hashes, open rules) is incompatible. Use a dedicated project.

## 1. Firebase project (once, by the project owner)

1. Create a Firebase project. Enable **Authentication → Email/Password**, **Firestore** (default database, production mode) and **Storage**.
2. Add a **Web app** and copy its config (public client settings, safe to share with the team).
3. Deploy rules from this repo:
   ```bash
   npx firebase-tools login
   npx firebase-tools deploy --only firestore:rules,storage --project <project-id>
   ```
   When prompted, allow Storage rules to read Firestore (cross-service rules).
4. Firestore → TTL policies: add a policy on collection group `activityLog`, field `expireAt` (30-day history retention).
5. Create the first Role Manager: sign up through the app, then in the Firestore console edit `users/<uid>`: `role: "manager"`, `status: "approved"`, `canAccessComponents: true`, and increment `revision`. Everyone else registers in the app and is approved by the Role Manager.
6. Authentication → Settings → Authorized domains: add your Vercel domain(s).

## 2. Each developer machine

```bash
cp .env.example .env.local
```

Set:

```
VITE_DATA_MODE=firebase
VITE_FIREBASE_CONFIG='{"apiKey":"…","projectId":"…","appId":"…","authDomain":"….firebaseapp.com","storageBucket":"…"}'
```

`npm run dev` then uses real accounts and shared data. Without these settings the app runs in the local demo workspace.

## 3. Vercel

Import the GitHub repo; framework preset Vite (build `npm run build`, output `dist`, see `vercel.json`). Add `VITE_FIREBASE_CONFIG` as an environment variable for Production and Preview. Production builds always use Firebase and never show demo profiles.

## 4. Migrating prototype data (optional)

Export old data as a backup JSON (or use the Codex-era export), then sign in as Role Manager and import it through Backup & Restore. Imports validate first, convert legacy statuses (`dalam_review` → `in_review`, `published` → `approved`), drop embedded comments, archive overwritten documents in `migrationBackups`, and write atomically (≤ 100 documents per file). Old password hashes are never imported; users reset passwords by email. Map old `authorId` values to new Auth UIDs before importing.

## Limits

- Single organization workspace; division filters are UI filters, not privacy boundaries.
- Preview links require an approved account; anonymous stakeholder links are not implemented.
- Strapi resolution is a tested server adapter; no live CMS or Drupal renderer is wired.
