import { ReactNode } from 'react';
import { useAuthContext } from '../context/AuthContext';

interface IProps {
  children: ReactNode;
}

const AdminOnly = ({ children }: IProps) => {
  const { auth } = useAuthContext();
  return auth?.role === 'admin' ? <>{children}</> : null;
};

export default AdminOnly;
