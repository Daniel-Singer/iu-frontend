import { Badge, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { INavlink } from '../../types/Navlink';

import classes from './Navlink.module.css';
import { useNotificationsContext } from '../../context/NotificationsContext';
import { useMemo } from 'react';

const NotificationsLink = ({ label, path, icon }: INavlink) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { notifications } = useNotificationsContext();
  const unseenNotifications = useMemo(
    () => notifications?.filter(({ seen }) => !seen).length,
    [notifications]
  );
  return (
    <UnstyledButton
      onClick={() => navigate(`/${path}`)}
      data-active={location.pathname === `/${path}` || undefined}
      className={classes.navlink}
      p="xs"
    >
      <Group justify="space-between">
        <Group>
          <ThemeIcon variant="light">{icon}</ThemeIcon>
          <Text>{label}</Text>
        </Group>
        {unseenNotifications! > 0 ? (
          <Badge color="red">{unseenNotifications}</Badge>
        ) : null}
      </Group>
    </UnstyledButton>
  );
};

export default NotificationsLink;
