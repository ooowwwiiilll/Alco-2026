import type { AppUser } from '../types';

type AssignableRole = 'admin' | 'product';

const inDivision = (user: AppUser, division: string) =>
  user.division.trim().toLowerCase() === division.trim().toLowerCase();

/** The first approved account in a division always becomes its admin. */
export function roleOnApproval(
  target: AppUser,
  users: AppUser[],
  requested: AssignableRole,
): AssignableRole {
  const peers = users.filter(
    (user) =>
      user.status === 'approved' && user.id !== target.id && inDivision(user, target.division),
  );
  return peers.some((user) => user.role === 'admin') ? requested : 'admin';
}

/** Returns why a role change is refused, or null when it is allowed. */
export function roleChangeError(
  target: AppUser,
  role: AssignableRole,
  users: AppUser[],
): string | null {
  if (target.role === 'manager')
    return 'Peran akun Role Manager bersifat tunggal dan tidak dapat diubah.';
  if (role === 'product') {
    const accounts = users.filter(
      (user) =>
        (user.status === 'approved' || user.id === target.id) && inDivision(user, target.division),
    );
    const otherAdmins = accounts.filter((user) => user.role === 'admin' && user.id !== target.id);
    if (accounts.length >= 2 && otherAdmins.length === 0)
      return 'Divisi harus memiliki setidaknya satu Admin jika terdapat 2 akun atau lebih dalam satu divisi.';
  }
  return null;
}

export const roleLabel = (role: AppUser['role']): string =>
  role === 'manager' ? 'Role Manager' : role === 'admin' ? 'Admin' : 'Team Product';
