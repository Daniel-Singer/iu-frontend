import { Anchor, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

interface IProps {
  path: string;
  children: string;
}

const AdminOrTutorAnchor = ({ path, children }: IProps) => {
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  return (
    <>
      {auth.role === 'admin' || auth.role === 'tutor' ? (
        <Anchor c="green" onClick={() => navigate(path)}>
          {children}
        </Anchor>
      ) : (
        <Text>{children}</Text>
      )}
    </>
  );
};

export default AdminOrTutorAnchor;
