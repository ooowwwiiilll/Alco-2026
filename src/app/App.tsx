import { useIdentity } from '../hooks/useIdentity';
import { SignIn } from './SignIn';
import { Workspace } from './Workspace';

export default function App() {
  const { currentUser, resolved } = useIdentity();
  if (!resolved) return <div className="h-dvh w-full bg-black" aria-busy="true" />;
  if (!currentUser) return <SignIn />;
  // Keyed by account: switching users never carries editor state across accounts.
  return <Workspace key={currentUser.id} user={currentUser} />;
}
