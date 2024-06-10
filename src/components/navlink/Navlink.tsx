import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { INavlink } from '../../types/Navlink';

const Navlink = ({ label, path, icon }: INavlink) => {
  const navigate = useNavigate();
  return (
    <UnstyledButton onClick={() => navigate(`/${path}`)}>
      <Group>
        <ThemeIcon variant="light">{icon}</ThemeIcon>
        <Text>{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

export default Navlink;
