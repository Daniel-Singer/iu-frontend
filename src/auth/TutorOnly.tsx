import { ReactNode } from 'react';
import { useAuthContext } from '../context/AuthContext';

interface IProps {
  children: ReactNode;
}

const TutorOnly = ({ children }: IProps) => {
  const { auth } = useAuthContext();
  return auth?.role === 'tutor' ? <>{children}</> : null;
};

export default TutorOnly;
