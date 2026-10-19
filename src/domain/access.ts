import type { ReleaseItem, UserRole } from '../types';

type Actor = { role: UserRole; id?: string } | null | undefined;

/** The single Role Manager administers accounts, media and the component library. */
export const isManager = (user: Actor): boolean => user?.role === 'manager';
/** Role Manager and division admins review releases and curate templates. */
export const isEditor = (user: Actor): boolean =>
  user?.role === 'manager' || user?.role === 'admin';
export const isProduct = (user: Actor): boolean => user?.role === 'product';

export const isReleaseAuthor = (user: Actor, release: ReleaseItem | null | undefined): boolean =>
  Boolean(user && release && release.authorId === user.id);

/** Only the author edits a release's canvas; reviewers comment and change its status. */
export const canEditReleaseContent = (user: Actor, release: ReleaseItem | null | undefined) =>
  !release || isReleaseAuthor(user, release);

export const canChangeReleaseStatus = (user: Actor): boolean => isEditor(user);

export const canDeleteRelease = (user: Actor, release: ReleaseItem): boolean =>
  isEditor(user) || isReleaseAuthor(user, release);

/** Product users may only discuss their own releases. */
export const canCommentOnRelease = (user: Actor, release: ReleaseItem | null | undefined) =>
  Boolean(user && release && (isEditor(user) || isReleaseAuthor(user, release)));

export const canManagePageTemplates = (user: Actor): boolean => isEditor(user);
export const canEditLibraryComponents = (user: Actor): boolean => isManager(user);
export const canManageUsers = (user: Actor): boolean => isManager(user);
export const canManageMedia = (user: Actor): boolean => isManager(user);
