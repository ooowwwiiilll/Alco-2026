import type {
  AppNotification,
  AppUser,
  NotificationType,
  ReleaseComment,
  ReleaseItem,
  ReleaseStatus,
} from '../types';
import { isEditor } from './access';
import { createId, nowIso } from './ids';
import { RELEASE_STATUS_LABELS } from './releaseStatus';

type Sender = Pick<AppUser, 'id' | 'name'>;

/** Editors publish directly; product releases wait for their division admins. */
export function initialReleaseStatus(author: Pick<AppUser, 'role'>): ReleaseStatus {
  return isEditor(author) ? 'approved' : 'in_review';
}

/** Editing a reviewed release sends it back to review. */
export function statusAfterContentEdit(status: ReleaseStatus): ReleaseStatus {
  return status === 'approved' || status === 'rejected' ? 'in_review' : status;
}

export function notification(
  recipientId: string,
  sender: Sender,
  type: NotificationType,
  text: string,
  release?: Pick<ReleaseItem, 'id' | 'name'>,
): AppNotification {
  return {
    id: createId('notif'),
    recipientId,
    senderId: sender.id,
    senderName: sender.name,
    type,
    text,
    ...(release ? { releaseId: release.id, releaseName: release.name } : {}),
    createdAt: nowIso(),
    read: false,
  };
}

const sameDivision = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase();

export function divisionAdmins(users: AppUser[], division: string): AppUser[] {
  return users.filter(
    (user) =>
      user.role === 'admin' && user.status === 'approved' && sameDivision(user.division, division),
  );
}

export function reviewRequestNotifications(
  release: ReleaseItem,
  sender: Sender,
  users: AppUser[],
): AppNotification[] {
  return divisionAdmins(users, release.division)
    .filter((admin) => admin.id !== sender.id)
    .map((admin) =>
      notification(
        admin.id,
        sender,
        'review_request',
        `Release ${release.name} dari ${sender.name} menunggu approval Anda`,
        release,
      ),
    );
}

export function statusChangeText(
  actorName: string,
  release: Pick<ReleaseItem, 'name' | 'status'>,
  nextStatus: ReleaseStatus,
  note?: string,
): string {
  const label = RELEASE_STATUS_LABELS[nextStatus];
  if (release.status === nextStatus)
    return note
      ? `${actorName} memberikan catatan review pada release "${release.name}": "${note}"`
      : `${actorName} meninjau release "${release.name}"`;
  return note
    ? `${actorName} mengubah status release "${release.name}" menjadi ${label}. Catatan: "${note}"`
    : `${actorName} mengubah status release "${release.name}" menjadi ${label}`;
}

const excerpt = (text: string) => (text.length > 45 ? `${text.slice(0, 45)}…` : text);

/** Mentioned users, earlier commenters who were mentioned, and the author are notified once. */
export function commentNotifications(
  release: ReleaseItem,
  comment: Pick<ReleaseComment, 'text'>,
  sender: Sender,
  users: AppUser[],
  previousComments: ReleaseComment[],
): AppNotification[] {
  const text = comment.text.toLowerCase();
  const mentioned = (name: string) =>
    Boolean(name.trim()) && text.includes(`@${name.trim().toLowerCase()}`);
  const notified = new Set<string>([sender.id]);
  const result: AppNotification[] = [];
  const add = (recipientId: string, type: NotificationType, message: string) => {
    if (notified.has(recipientId)) return;
    notified.add(recipientId);
    result.push(notification(recipientId, sender, type, message, release));
  };
  for (const user of users)
    if (mentioned(user.name))
      add(
        user.id,
        'mention',
        `${sender.name} menyebut Anda di release "${release.name}": "${excerpt(comment.text)}"`,
      );
  for (const previous of previousComments)
    if (mentioned(previous.userName))
      add(
        previous.userId,
        'mention',
        `${sender.name} membalas komentar Anda di "${release.name}": "${excerpt(comment.text)}"`,
      );
  add(
    release.authorId,
    'comment',
    `${sender.name} memberikan komentar pada rilis Anda "${release.name}": "${excerpt(comment.text)}"`,
  );
  return result;
}
