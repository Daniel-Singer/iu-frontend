import { ReactNode } from 'react';
import { useAuthContext } from '../context/AuthContext';

interface IProps {
  children: ReactNode;
}

const AdminAndTutorOnly = ({ children }: IProps) => {
  const { auth } = useAuthContext();
  return auth?.role === 'admin' || auth?.role === 'tutor' ? (
    <>{children}</>
  ) : null;
};

export default AdminAndTutorOnly;
