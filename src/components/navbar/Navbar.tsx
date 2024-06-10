import { Stack } from '@mantine/core';
import classes from './Navbar.module.css';
import {
  IconHome,
  IconMessage,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { INavlink } from '../../types/Navlink';
import Navlink from '../navlink/Navlink';

const navLinks = [
  {
    path: '',
    label: 'Dashboard',
    icon: <IconHome size={20} />,
  },
  {
    path: 'messages',
    label: 'Nachrichten',
    icon: <IconMessage size={20} />,
  },
];

const systemLinks: INavlink[] = [
  {
    path: 'account',
    label: 'Mein Account',
    icon: <IconUser size={20} />,
  },
  {
    path: 'settings',
    label: 'Einstellungen',
    icon: <IconSettings size={20} />,
  },
];

const Navbar = () => {
  return (
    <Stack className={classes.navbar} justify="space-between">
      <Stack>
        {navLinks?.map((link) => (
          <Navlink key={link.path} {...link} />
        ))}
      </Stack>
      <Stack>
        {systemLinks?.map((link) => (
          <Navlink key={link.path} {...link} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
