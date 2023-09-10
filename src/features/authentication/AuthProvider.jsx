import SpinnerFullPage from '../../ui/SpinnerFullPage';
import { useUser } from './useUser';

function AuthProvider({ children }) {
  const { isLoading } = useUser();

  if (isLoading) return <SpinnerFullPage />;

  return children;
}

export default AuthProvider;
