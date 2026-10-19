import { useCallback } from 'react';
import { resetPassword } from '../auth/service';
import type { Feedback } from '../components/Feedback';
import { nowIso } from '../domain/ids';
import { notification } from '../domain/releaseWorkflow';
import { roleChangeError, roleLabel, roleOnApproval } from '../domain/userGovernance';
import { isLocalWorkspace } from '../lib/runtime';
import {
  createDivision,
  deleteDivision,
  deleteUser,
  updateDivision,
  updateUser,
} from '../services/accounts';
import { sendNotifications } from '../services/collaboration';
import type { AppUser, DivisionItem, DivisionStatus } from '../types';

interface Options {
  user: AppUser;
  users: AppUser[];
  divisions: DivisionItem[];
  feedback: Feedback;
}

type AssignableRole = 'admin' | 'product';

/** Role Manager account approval, roles, divisions and password resets. */
export function useAccountActions({ user, users, divisions, feedback }: Options) {
  const find = useCallback((id: string) => users.find((item) => item.id === id), [users]);

  const approve = useCallback(
    async (id: string, requested: AssignableRole = 'product') => {
      const target = find(id);
      if (!target) return;
      const role = roleOnApproval(target, users, requested);
      await updateUser(id, {
        status: 'approved',
        role,
        approvedAt: nowIso(),
        approvedBy: user.email,
        canAccessComponents: role === 'admin',
      });
      feedback.notify(`Pendaftaran pengguna berhasil disetujui sebagai ${roleLabel(role)}.`);
    },
    [find, users, user.email, feedback],
  );

  const reject = useCallback(
    async (id: string, reason?: string) => {
      await updateUser(id, {
        status: 'rejected',
        rejectionReason: reason || 'Ditolak oleh Role Manager',
      });
      feedback.notify('Pendaftaran pengguna telah ditolak.');
    },
    [feedback],
  );

  const changeRole = useCallback(
    async (id: string, role: AssignableRole) => {
      const target = find(id);
      if (!target) return;
      const error = roleChangeError(target, role, users);
      if (error) {
        feedback.warn(error);
        return;
      }
      await updateUser(id, { role, canAccessComponents: role === 'admin' });
      feedback.notify(`Hak akses peran diperbarui menjadi ${roleLabel(role)}.`);
    },
    [find, users, feedback],
  );

  const changeDivision = useCallback(
    async (id: string, division: string) => {
      const target = find(id);
      await updateUser(id, { division });
      if (target && target.id !== user.id)
        await sendNotifications([
          notification(
            target.id,
            user,
            'account',
            `Divisi Anda telah diperbarui oleh ${user.name} menjadi "${division}".`,
          ),
        ]);
      feedback.notify(`Divisi pengguna ${target?.name ?? ''} diperbarui menjadi ${division}.`);
    },
    [find, user, feedback],
  );

  const rename = useCallback(
    async (id: string, name: string) => {
      await updateUser(id, { name: name.trim() });
      feedback.notify(`Nama pengguna diperbarui menjadi "${name.trim()}".`);
    },
    [feedback],
  );

  /** Removes the profile; releases and templates created by the account are kept. */
  const remove = useCallback(
    async (id: string) => {
      await deleteUser(id);
      feedback.notify(
        'Pengguna berhasil dihapus. Seluruh template dan release akun ini tetap ada di Alco.',
      );
    },
    [feedback],
  );

  /** Firebase emails the user a reset link; passwords are never set or seen by the manager. */
  const sendPasswordReset = useCallback(
    async (id: string) => {
      const target = find(id);
      if (!target) return;
      if (isLocalWorkspace) {
        feedback.warn(
          'Akun demo lokal tidak memiliki password. Gunakan mode Firebase untuk reset password.',
        );
        return;
      }
      await resetPassword(target.email);
      feedback.notify(`Link reset password telah dikirim ke ${target.email}.`);
    },
    [find, feedback],
  );

  const addDivision = useCallback(
    async (name: string, description = '', status: DivisionStatus = 'Active') => {
      await createDivision(name, description, status, user.email);
      feedback.notify(`Divisi "${name.trim()}" berhasil ditambahkan.`);
    },
    [user.email, feedback],
  );

  /** Renaming a division moves its members along with it. */
  const editDivision = useCallback(
    async (id: string, changes: Partial<DivisionItem>) => {
      const previous = divisions.find((division) => division.id === id);
      await updateDivision(id, changes);
      if (previous && changes.name && changes.name !== previous.name)
        await Promise.all(
          users
            .filter((member) => member.division === previous.name)
            .map((member) => updateUser(member.id, { division: changes.name })),
        );
      feedback.notify('Divisi berhasil diperbarui.');
    },
    [divisions, users, feedback],
  );

  const removeDivision = useCallback(
    async (id: string) => {
      await deleteDivision(id);
      feedback.notify('Divisi berhasil dihapus.');
    },
    [feedback],
  );

  return {
    approve,
    reject,
    changeRole,
    changeDivision,
    rename,
    remove,
    sendPasswordReset,
    addDivision,
    editDivision,
    removeDivision,
  };
}

export type AccountActions = ReturnType<typeof useAccountActions>;
