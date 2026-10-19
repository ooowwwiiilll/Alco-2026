# Team rules

## Scope and design
- Change only what the task asks for. No unsolicited redesigns of navbar, footer, logo, colors or fonts.
- Keep the official logo assets; never replace them with text or add sub-labels unless asked.
- When a design reference (Figma inspect, HTML/CSS) is given, match structure, spacing, colors and type exactly.

## Code
- Strict TypeScript, no `any`. `npm run check` must pass before every push.
- UI components get data and callbacks through props; storage access lives in `services/` and `persistence/`, rules in `domain/` (pure, unit-tested).
- Split components before they pass ~500 lines; one concern per file.
- All markup rendering goes through `preview/prepareSection.ts` (sanitized). Never inject unsanitized HTML.
- Browser storage is for preferences and unsaved drafts only — never identity, roles or shared data.

## Data and security
- Never report a save before the write is confirmed. Conflicts must fail visibly.
- Never store passwords or hashes in Firestore. Identity is Firebase Auth; roles are enforced by `firestore.rules`.
- Demo profiles exist only in the local workspace. Production always requires Firebase.
- Approved releases are immutable snapshots; edits create a new review cycle.
- Keep `firestore.rules` in sync with any new collection or permission.
