# Architecture

## Layers

```
features/* (UI)  →  hooks/* (state + commands)  →  services/* (collections)  →  persistence/* (repository)
                         ↘ domain/* (pure rules, no I/O)          preview/* (rendering)
```

- **UI never touches storage.** Components receive data and callbacks; `app/useWorkspace.ts` composes the hooks for one signed-in account. `Workspace` is keyed by user ID, so switching accounts resets all editor state.
- **One storage mode per run.** `lib/runtime.ts` picks IndexedDB (local dev) or Firestore (shared/production). Both implement `persistence/contracts.ts`: validated reads, revision-checked transactional writes, filtered subscriptions.
- **Business rules are pure functions** in `domain/` and unit-tested: who may edit, review, comment, lock; release status transitions; notification fan-out; division admin governance.

## Data model (Firestore collections)

| Collection | Contents | Written by |
| --- | --- | --- |
| `users` | Profiles keyed by Firebase Auth UID (no credentials) | self (pending signup), Role Manager |
| `divisions`, `publicConfig` | Readable before sign-in | Role Manager |
| `appConfig/global` | Renames/hidden built-ins, template categories, placeholder image | admins, Role Manager |
| `customTemplates`, `componentOverrides` | Custom components; Role Manager edits to built-ins | admins / Role Manager |
| `pageTemplates` | Page templates (built-ins get a stored copy on first edit) | admins, Role Manager |
| `releases` | Pages under review; `manifest` = renderer contract | author (content), reviewers (status) |
| `publishedReleases` | Immutable snapshot per approved revision | written atomically with approval |
| `releaseComments`, `notifications` | Discussion and per-recipient inbox | approved users |
| `activityLog` | Append-only release activity, 30-day TTL on `expireAt` | approved users |
| `mediaLibrary` | Image catalog (files in Storage `assets/<uid>/…`) | Role Manager |

## Release workflow

`draft → in_review → approved | rejected`. Admins/Role Manager publish directly; product releases enter review and notify their division's admins. Saving content on an approved/rejected release sends it back to review. Reviewers change status (with a note stored as a comment) and the author is notified. Approval writes an immutable snapshot; share links point to `/preview/<id>/<revision>` (approved) or `/preview/<id>` (live), both requiring an approved account.

## Concurrency

Every document has `revision` (incremented in a transaction). Canvas documents also have `contentRevision`: the editor remembers the content revision it opened and a save fails with a conflict if another session saved content since — reviewer status changes do not block the author.

## Rendering

`preview/prepareSection.ts` is the single renderer: sanitizes (DOMPurify; inline styles may reference safe images only), applies custom values (per-language `_id`/`_en`, `m-` desktop/mobile companions), shows the `*-desktop` or `*-mobile` variant, marks editable fields and enforces field locks. The canvas, previews, thumbnails, PDF export and read-only preview all use it.

## Integration contract (CMS / external renderers)

Pages carry a versioned `PageManifest` (`domain/manifest.ts`): ordered sections with component ID + version, string props and optional Strapi bindings. CMS bindings are resolved server-side at approval (`integrations/strapi.ts`); a Drupal or other renderer implements `preview/renderManifest.ts#RendererAdapter`.
