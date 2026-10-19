import { createId, nowIso } from '../domain/ids';
import type {
  ActivityAction,
  ActivityLogEntry,
  AppNotification,
  AppUser,
  ReleaseComment,
  ReleaseItem,
} from '../types';
import * as store from './store';

export const ACTIVITY_RETENTION_DAYS = 30;
const DAY_MS = 24 * 60 * 60 * 1000;

export const subscribeComments = (releaseId: string, update: (values: ReleaseComment[]) => void) =>
  store.subscribe<ReleaseComment>(
    'releaseComments',
    (values) => update(values.sort((a, b) => a.createdAt.localeCompare(b.createdAt))),
    undefined,
    { field: 'releaseId', op: '==', value: releaseId },
  );

export const addComment = (comment: ReleaseComment) => store.create('releaseComments', comment);
export const deleteComment = (id: string) => store.remove('releaseComments', id);

export const subscribeNotifications = (
  recipientId: string,
  update: (values: AppNotification[]) => void,
) =>
  store.subscribe<AppNotification>(
    'notifications',
    (values) => update(values.sort((a, b) => b.createdAt.localeCompare(a.createdAt))),
    undefined,
    { field: 'recipientId', op: '==', value: recipientId },
  );

export const sendNotifications = (notifications: AppNotification[]) =>
  Promise.all(notifications.map((value) => store.create('notifications', value)));

export const markNotificationRead = (id: string) =>
  store.update<AppNotification>('notifications', id, { read: true });

export const subscribeActivity = (update: (values: ActivityLogEntry[]) => void) =>
  store.subscribe<ActivityLogEntry>(
    'activityLog',
    (values) => update(values.sort((a, b) => b.timestamp.localeCompare(a.timestamp))),
    undefined,
    {
      field: 'timestamp',
      op: '>=',
      value: new Date(Date.now() - ACTIVITY_RETENTION_DAYS * DAY_MS).toISOString(),
    },
  );

export function logActivity(
  actor: Pick<AppUser, 'id' | 'name'>,
  action: ActivityAction,
  release: Pick<ReleaseItem, 'id' | 'name'>,
): Promise<ActivityLogEntry> {
  const timestamp = nowIso();
  return store.create<ActivityLogEntry>('activityLog', {
    id: createId('activity'),
    actorId: actor.id,
    actorName: actor.name,
    action,
    releaseId: release.id,
    releaseName: release.name,
    timestamp,
    expireAt: new Date(Date.parse(timestamp) + ACTIVITY_RETENTION_DAYS * DAY_MS).toISOString(),
  });
}
