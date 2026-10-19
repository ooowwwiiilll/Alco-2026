import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { isLocalWorkspace } from './runtime';

interface FirebaseSettings {
  apiKey: string;
  projectId: string;
  appId: string;
  authDomain: string;
  storageBucket?: string;
  firestoreDatabaseId?: string;
}
/** AI Studio prototype project; still serving the original app, so never reused here. */
const PROTOTYPE_PROJECT_ID = 'marine-artifact-7xjsq';

let firebaseConfig: FirebaseSettings = {
  apiKey: 'local-placeholder',
  projectId: 'demo-alco-local',
  appId: 'local',
  authDomain: 'localhost',
};
export let firebaseConfigurationError = '';
if (!isLocalWorkspace) {
  try {
    const settings = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG ?? '{}') as FirebaseSettings;
    if (!settings.apiKey || !settings.projectId || !settings.appId || !settings.authDomain)
      throw new Error('Configure VITE_FIREBASE_CONFIG with the ALCO Firebase web app settings.');
    if (settings.projectId === PROTOTYPE_PROJECT_ID)
      throw new Error(
        'Use a dedicated Firebase project: the AI Studio prototype project still serves the old app.',
      );
    if (settings.firestoreDatabaseId && settings.firestoreDatabaseId !== '(default)')
      throw new Error(
        'Use the default Firestore database: Storage approval rules read its user profiles.',
      );
    firebaseConfig = settings;
  } catch (error) {
    firebaseConfigurationError =
      error instanceof Error ? error.message : 'Invalid Firebase settings.';
  }
}
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore with custom database ID if specified in config
export const db = firebaseConfig.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

export function getFirebaseAuth() {
  if (isLocalWorkspace) throw new Error('Firebase identity is unavailable in the local workspace.');
  if (firebaseConfigurationError) throw new Error(firebaseConfigurationError);
  return getAuth(app);
}
