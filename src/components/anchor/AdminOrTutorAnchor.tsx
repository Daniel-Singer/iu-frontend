import { Anchor, MantineColor, MantineSize, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

interface IProps {
  path: string;
  size?: MantineSize;
  children: string;
  color?: MantineColor;
}

const AdminOrTutorAnchor = ({
  color = 'green',
  size = 'md',
  path,
  children,
}: IProps) => {
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  return (
    <>
      {auth.role === 'admin' || auth.role === 'tutor' ? (
        <Anchor c={color} onClick={() => navigate(path)}>
          <Text size={size}>{children}</Text>
        </Anchor>
      ) : (
        <Text size={size} c={color}>
          {children}
        </Text>
      )}
    </>
  );
};

export default AdminOrTutorAnchor;
