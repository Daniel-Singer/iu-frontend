import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { INavlink } from '../../types/Navlink';

import classes from './Navlink.module.css';

const Navlink = ({ label, path, icon }: INavlink) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <UnstyledButton
      onClick={() => navigate(`/${path}`)}
      data-active={location.pathname === `/${path}` || undefined}
      className={classes.navlink}
      p="xs"
    >
      <Group>
        <ThemeIcon variant="light">{icon}</ThemeIcon>
        <Text>{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

export default Navlink;
