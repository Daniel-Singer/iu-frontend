import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface IProps {
  allowedRoles: string[];
}

const AuthWrapper = ({ allowedRoles }: IProps) => {
  const auth = JSON.parse(sessionStorage?.getItem('auth')!);
  const location = useLocation();

  const commonRoles = (): boolean => {
    if (!auth) {
      return false;
    } else {
      if (!auth.user?.role) {
        return false;
      }
      return allowedRoles.includes(auth.user.role!);
    }
  };

  return commonRoles() ? (
    <Outlet />
  ) : auth?.user?.accessToken! ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AuthWrapper;
