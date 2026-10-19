import { useEffect, useState } from 'react';
import { watchIdentity } from '../auth/service';
import { reportFailure } from '../services/store';
import type { AppUser } from '../types';

/** The signed-in, approved account; `resolved` stays false until the session is known. */
export function useIdentity() {
  const [state, setState] = useState<{ user: AppUser | null; resolved: boolean }>({
    user: null,
    resolved: false,
  });
  useEffect(
    () =>
      watchIdentity(
        (user) => setState({ user, resolved: true }),
        (error) => {
          setState((current) => ({ ...current, resolved: true }));
          reportFailure(error);
        },
      ),
    [],
  );
  return { currentUser: state.user, resolved: state.resolved };
}
