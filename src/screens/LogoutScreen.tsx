import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const LogoutScreen = () => {
  useEffect(() => {
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth');
  }, []);
  return <Navigate to="/" replace={true} />;
};

export default LogoutScreen;
