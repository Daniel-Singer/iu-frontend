import { ReactNode } from 'react';
import { useAuthContext } from '../context/AuthContext';

interface IProps {
  tutor_id: number;
  children: ReactNode;
}

const ResponsibleTutorOnly = ({ children, tutor_id }: IProps) => {
  const { auth } = useAuthContext();
  return auth?.role === 'admin'
    ? children
    : auth?.role === 'tutor' && auth?.id === tutor_id
    ? children
    : null;
};

export default ResponsibleTutorOnly;
