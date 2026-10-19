import type { AppUser, ReleaseComment, ReleaseItem } from '../types';

export interface MentionCandidate {
  id: string;
  name: string;
  role?: string;
}

/** People who can be @mentioned on a release: its author, earlier commenters, then everyone. */
export function mentionCandidates(
  release: ReleaseItem | null,
  comments: ReleaseComment[],
  users: AppUser[],
  currentUser: Pick<AppUser, 'name'> | null,
): MentionCandidate[] {
  const seen = new Set<string>();
  const result: MentionCandidate[] = [];
  const add = (candidate: MentionCandidate) => {
    const key = candidate.name.trim().toLowerCase();
    if (!key || seen.has(key)) return;
    seen.add(key);
    result.push(candidate);
  };
  if (currentUser?.name) seen.add(currentUser.name.trim().toLowerCase());
  if (release)
    add({ id: release.authorId || 'author', name: release.authorName, role: 'Author / Releaser' });
  for (const comment of comments)
    add({ id: comment.userId || comment.userName, name: comment.userName, role: comment.userRole });
  for (const user of users) add({ id: user.id, name: user.name, role: user.role });
  return result;
}
