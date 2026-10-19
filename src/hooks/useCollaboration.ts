import { useCallback, useEffect, useMemo, useState } from 'react';
import { subscribeDivisions } from '../services/accounts';
import {
  markNotificationRead,
  subscribeActivity,
  subscribeComments,
  subscribeNotifications,
} from '../services/collaboration';
import { subscribePublicConfig } from '../services/library';
import type {
  ActivityLogEntry,
  AppNotification,
  DivisionItem,
  PublicConfig,
  ReleaseComment,
} from '../types';

export function useNotifications(userId: string) {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  useEffect(() => subscribeNotifications(userId, setNotifications), [userId]);
  const unreadCount = useMemo(
    () => notifications.filter((notification) => !notification.read).length,
    [notifications],
  );
  const markAllRead = useCallback(
    () =>
      Promise.all(
        notifications
          .filter((notification) => !notification.read)
          .map((notification) => markNotificationRead(notification.id)),
      ),
    [notifications],
  );
  return { notifications, unreadCount, markAllRead };
}

export function useReleaseComments(releaseId: string | null) {
  const [comments, setComments] = useState<ReleaseComment[]>([]);
  useEffect(() => {
    setComments([]);
    return releaseId ? subscribeComments(releaseId, setComments) : undefined;
  }, [releaseId]);
  return comments;
}

/** Release activity from the last 30 days; subscribed only while shown. */
export function useActivityLog(enabled: boolean) {
  const [entries, setEntries] = useState<ActivityLogEntry[]>([]);
  useEffect(() => (enabled ? subscribeActivity(setEntries) : undefined), [enabled]);
  return entries;
}

/** Landing page settings and divisions, readable before sign-in. */
export function usePublicWorkspace() {
  const [config, setConfig] = useState<PublicConfig>({ id: 'global' });
  const [divisions, setDivisions] = useState<DivisionItem[]>([]);
  useEffect(() => {
    const stops = [subscribePublicConfig(setConfig), subscribeDivisions(setDivisions)];
    return () => stops.forEach((stop) => stop());
  }, []);
  return { authBackground: config.authBackground, divisions };
}
