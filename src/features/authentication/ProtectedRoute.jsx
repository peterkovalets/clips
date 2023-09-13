import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/', { replace: true });
  }, [isAuthenticated, navigate]);

  return children;
}

export default ProtectedRoute;
