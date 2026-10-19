import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db, firebaseConfigurationError, getFirebaseAuth } from '../lib/firebase';
import { isLocalWorkspace } from '../lib/runtime';
import { initializeLocalWorkspace } from '../persistence/bootstrap';
import { repository } from '../persistence/repository';
import type { AppUser, RegistrationInput } from '../types';

const localListeners = new Set<(user: AppUser | null) => void>();
// Local workspace only: the chosen demo profile survives reloads in this browser tab.
const LOCAL_SESSION_KEY = 'alco:local-profile';
let localUserId: string | null = isLocalWorkspace
  ? sessionStorage.getItem(LOCAL_SESSION_KEY)
  : null;

export async function login(email: string, password: string): Promise<AppUser> {
  if (isLocalWorkspace)
    throw new Error(
      'Use a local demo profile above. For real accounts, run with VITE_DATA_MODE=firebase.',
    );
  const auth = getFirebaseAuth();
  const credential = await signInWithEmailAndPassword(auth, email, password);
  const user = await repository.get<AppUser>('users', credential.user.uid);
  if (!user || user.status !== 'approved') {
    await signOut(auth);
    throw new Error('Your account is not approved. Contact your administrator.');
  }
  return user;
}

export async function loginLocalProfile(id: string): Promise<AppUser> {
  if (!isLocalWorkspace) throw new Error('Demo access is unavailable.');
  await initializeLocalWorkspace();
  const user = await repository.get<AppUser>('users', id);
  if (!user || user.status !== 'approved') throw new Error('Local profile is unavailable.');
  localUserId = user.id;
  sessionStorage.setItem(LOCAL_SESSION_KEY, user.id);
  localListeners.forEach((listener) => listener(user));
  return user;
}

export async function register(input: RegistrationInput): Promise<AppUser> {
  if (isLocalWorkspace)
    throw new Error(
      'Registration needs Firebase mode. Local demo profiles are for development only.',
    );
  const auth = getFirebaseAuth();
  if (!input.password) throw new Error('A password is required.');
  const credential = await createUserWithEmailAndPassword(auth, input.email.trim(), input.password);
  const user: AppUser = {
    id: credential.user.uid,
    email: credential.user.email!,
    name: input.name.trim(),
    role: 'product',
    status: 'pending',
    division: input.division.trim(),
    ...(input.title?.trim() ? { title: input.title.trim() } : {}),
    createdAt: new Date().toISOString(),
    canAccessComponents: false,
    revision: 1,
  };
  try {
    // New profiles cannot be read until they exist; create-only rules protect this path.
    await setDoc(doc(db, 'users', user.id), user);
  } catch (error) {
    try {
      await credential.user.delete();
    } catch {
      /* Administrator can remove an orphan Auth account. */
    }
    throw error;
  } finally {
    await signOut(auth);
  }
  return user;
}

export async function logout(): Promise<void> {
  if (isLocalWorkspace) {
    localUserId = null;
    sessionStorage.removeItem(LOCAL_SESSION_KEY);
    localListeners.forEach((listener) => listener(null));
  } else await signOut(getFirebaseAuth());
}

export function watchIdentity(
  update: (user: AppUser | null) => void,
  error: (error: unknown) => void,
): () => void {
  if (!isLocalWorkspace && firebaseConfigurationError) {
    queueMicrotask(() => error(new Error(firebaseConfigurationError)));
    return () => {};
  }
  if (isLocalWorkspace) {
    localListeners.add(update);
    if (!localUserId) queueMicrotask(() => update(null));
    const unsubscribe = repository.subscribe<AppUser>(
      'users',
      (users) => {
        const user = users.find((value) => value.id === localUserId);
        update(user?.status === 'approved' ? user : null);
      },
      error,
    );
    return () => {
      localListeners.delete(update);
      unsubscribe();
    };
  }
  let stopProfile = () => {};
  const stopAuth = onAuthStateChanged(
    getFirebaseAuth(),
    (identity) => {
      stopProfile();
      if (!identity) {
        update(null);
        return;
      }
      stopProfile = onSnapshot(
        doc(db, 'users', identity.uid),
        (snapshot) => {
          const user = snapshot.exists()
            ? ({ ...snapshot.data(), id: snapshot.id } as AppUser)
            : null;
          update(user?.status === 'approved' ? user : null);
        },
        error,
      );
    },
    error,
  );
  return () => {
    stopProfile();
    stopAuth();
  };
}

/** Firebase emails a reset link; used by "forgot password" and by the Role Manager. */
export async function resetPassword(email: string): Promise<void> {
  if (isLocalWorkspace) throw new Error('Local demo profiles do not have passwords.');
  await sendPasswordResetEmail(getFirebaseAuth(), email.trim());
}
