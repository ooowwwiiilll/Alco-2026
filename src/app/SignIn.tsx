import { login, loginLocalProfile, register, resetPassword } from '../auth/service';
import { LOCAL_DEMO_USERS } from '../data/localUsers';
import { LandingAuthPage } from '../features/auth/LandingAuthPage';
import { usePublicWorkspace } from '../hooks/useCollaboration';
import { isLocalWorkspace } from '../lib/runtime';

/** Approved demo profiles are offered only in the local development workspace. */
const DEMO_PROFILES = isLocalWorkspace
  ? LOCAL_DEMO_USERS.filter((user) => user.status === 'approved')
  : [];

export function SignIn({ initialMode }: { initialMode?: 'landing' | 'login' }) {
  const { authBackground, divisions } = usePublicWorkspace();
  return (
    <LandingAuthPage
      divisions={divisions.filter((division) => division.status !== 'Inactive')}
      authBackground={authBackground}
      demoProfiles={DEMO_PROFILES}
      onDemoLogin={async (user) => {
        await loginLocalProfile(user.id);
      }}
      onLogin={async (email, password) => {
        await login(email, password);
      }}
      onRegister={async (input) => {
        await register(input);
      }}
      onRequestPasswordReset={resetPassword}
      initialMode={initialMode}
    />
  );
}
