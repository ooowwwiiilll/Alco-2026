import { useCallback } from 'react';
import type { Feedback } from '../components/Feedback';
import { canChangeReleaseStatus, canDeleteRelease, isReleaseAuthor } from '../domain/access';
import { createId, nowIso } from '../domain/ids';
import { RELEASE_STATUS_LABELS } from '../domain/releaseStatus';
import {
  commentNotifications,
  initialReleaseStatus,
  notification,
  reviewRequestNotifications,
  statusAfterContentEdit,
  statusChangeText,
} from '../domain/releaseWorkflow';
import type { NewReleaseInput } from '../features/releases/SaveReleaseModal';
import {
  addComment,
  deleteComment,
  logActivity,
  sendNotifications,
} from '../services/collaboration';
import {
  createRelease,
  deleteRelease,
  previewPath,
  saveReleaseContent,
  updateRelease,
} from '../services/releases';
import type { AppUser, DeviceMode, ReleaseComment, ReleaseItem, ReleaseStatus } from '../types';
import { cleanComponentName } from '../utils/format';
import type { EditorState } from './useEditorDocument';

interface Options {
  user: AppUser;
  users: AppUser[];
  editor: EditorState;
  feedback: Feedback;
}

/** Release lifecycle: create, edit, review, discuss, share and delete. */
export function useReleaseActions({ user, users, editor, feedback }: Options) {
  const { load, markSaved } = editor;

  const open = useCallback(
    (release: ReleaseItem) =>
      load({
        sections: structuredClone(release.sections),
        id: release.id,
        name: cleanComponentName(release.name),
        revision: release.contentRevision ?? 0,
      }),
    [load],
  );

  const create = useCallback(
    async ({ name, description, sourceTemplate }: NewReleaseInput) => {
      const release: ReleaseItem = {
        id: createId('rel'),
        name: cleanComponentName(name),
        description,
        version: 'v1.0.0',
        status: initialReleaseStatus(user),
        createdAt: nowIso(),
        authorId: user.id,
        authorName: user.name,
        authorEmail: user.email,
        authorRole: user.role,
        division: user.division,
        sections: structuredClone(editor.sections),
        thumbnailBg: 'bg-gradient-to-br from-[#262626] via-[#1E1E1E] to-[#121212]',
        ...(sourceTemplate
          ? { sourceTemplateId: sourceTemplate.id, sourceTemplateName: sourceTemplate.name }
          : {}),
      };
      const saved = await createRelease(release);
      markSaved({ id: saved.id, name: saved.name, revision: saved.contentRevision ?? 1 });
      await Promise.all([
        saved.status === 'in_review'
          ? sendNotifications(reviewRequestNotifications(saved, user, users))
          : null,
        logActivity(user, 'create', saved),
      ]);
      feedback.notify(
        `Rilis "${saved.name}" tersimpan (Source Template: "${saved.sourceTemplateName ?? 'Landing Page'}").`,
      );
    },
    [user, users, editor.sections, markSaved, feedback],
  );

  /** The author saves canvas changes; a reviewed release goes back to review. */
  const saveContent = useCallback(
    async (release: ReleaseItem) => {
      if (!isReleaseAuthor(user, release)) {
        feedback.warn('Anda tidak dapat mengedit release yang tidak Anda buat.');
        return;
      }
      const status = statusAfterContentEdit(release.status);
      const saved = await saveReleaseContent(release.id, editor.sections, editor.revision, {
        status,
      });
      markSaved({ revision: saved.contentRevision ?? 0 });
      const backToReview = status !== release.status;
      await Promise.all([
        backToReview ? sendNotifications(reviewRequestNotifications(saved, user, users)) : null,
        logActivity(user, 'edit', saved),
      ]);
      feedback.notify(
        backToReview
          ? `Perubahan rilis "${release.name}" disimpan. Status kembali "Dalam Review" dan notifikasi terkirim ke admin.`
          : `Perubahan rilis "${release.name}" berhasil disimpan.`,
      );
    },
    [user, users, editor.sections, editor.revision, markSaved, feedback],
  );

  /** Reviewers change status; a note is kept as a release comment and the author is notified. */
  const changeStatus = useCallback(
    async (release: ReleaseItem, status: ReleaseStatus, note = '') => {
      if (!canChangeReleaseStatus(user)) {
        feedback.warn('Hanya Admin dan Role Manager yang berwenang mengubah status release.');
        return;
      }
      const trimmed = note.trim();
      await updateRelease(release.id, { status });
      const followUps: Promise<unknown>[] = [];
      if (trimmed)
        followUps.push(
          addComment({
            id: createId('comment'),
            releaseId: release.id,
            userId: user.id,
            userName: user.name,
            userRole: user.role,
            division: user.division,
            ...(user.avatar ? { avatar: user.avatar } : {}),
            text: `[Status: ${RELEASE_STATUS_LABELS[status]}] ${trimmed}`,
            componentTag: 'Status Note',
            createdAt: nowIso(),
          }),
        );
      if (release.authorId !== user.id)
        followUps.push(
          sendNotifications([
            notification(
              release.authorId,
              user,
              'status_change',
              statusChangeText(user.name, release, status, trimmed),
              release,
            ),
          ]),
        );
      await Promise.all(followUps);
      feedback.notify(
        release.status === status && trimmed
          ? `Catatan review release "${release.name}" berhasil dikirim.`
          : `Status release "${release.name}" berhasil diubah menjadi ${RELEASE_STATUS_LABELS[status]}.`,
      );
    },
    [user, feedback],
  );

  const remove = useCallback(
    async (release: ReleaseItem) => {
      if (!canDeleteRelease(user, release)) {
        feedback.warn('Anda tidak dapat menghapus release yang tidak Anda buat.');
        return;
      }
      await deleteRelease(release.id);
      await logActivity(user, 'delete', release);
      if (editor.id === release.id) markSaved({ id: null, revision: 0 });
      feedback.notify(`Release "${release.name}" berhasil dihapus.`);
    },
    [user, editor.id, markSaved, feedback],
  );

  const duplicate = useCallback(
    async (release: ReleaseItem) => {
      const copy = await createRelease({
        ...structuredClone(release),
        id: createId('rel'),
        name: `${release.name} (Copy)`,
        status: initialReleaseStatus(user),
        createdAt: nowIso(),
        updatedAt: undefined,
        revision: undefined,
        authorId: user.id,
        authorName: user.name,
        authorEmail: user.email,
        authorRole: user.role,
        division: user.division,
      });
      await logActivity(user, 'create', copy);
      feedback.notify(`Release "${copy.name}" berhasil diduplikasi.`);
    },
    [user, feedback],
  );

  const share = useCallback(
    async (release: ReleaseItem, device: DeviceMode = 'desktop') => {
      const url = `${location.origin}${previewPath(release, device)}`;
      try {
        await navigator.clipboard.writeText(url);
        feedback.notify(`Link Prototype Rilis "${release.name}" berhasil disalin ke clipboard!`);
      } catch {
        feedback.notify(`Salin link ini: ${url}`);
      }
    },
    [feedback],
  );

  const comment = useCallback(
    async (release: ReleaseItem, text: string, previous: ReleaseComment[]) => {
      const saved = await addComment({
        id: createId('comment'),
        releaseId: release.id,
        userId: user.id,
        userName: user.name,
        userRole: user.role,
        division: user.division,
        ...(user.avatar ? { avatar: user.avatar } : {}),
        text,
        createdAt: nowIso(),
      });
      await sendNotifications(commentNotifications(release, saved, user, users, previous));
      feedback.notify('Komentar berhasil dikirim dan notifikasi balasan diteruskan.');
    },
    [user, users, feedback],
  );

  const removeComment = useCallback(
    async (commentId: string) => {
      await deleteComment(commentId);
      feedback.notify('Komentar berhasil dihapus.');
    },
    [feedback],
  );

  return {
    open,
    create,
    saveContent,
    changeStatus,
    remove,
    duplicate,
    share,
    comment,
    removeComment,
  };
}

export type ReleaseActions = ReturnType<typeof useReleaseActions>;
