import { Stack } from '@mantine/core';
import classes from './Navbar.module.css';
import {
  IconHome,
  IconMessage,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import Navlink from '../navlink/Navlink';
import ColorSchemeButton from '../buttons/ColorSchemeButton';
import { ReactNode } from 'react';

interface INavLinkInfo {
  path: string;
  label: string;
  icon: ReactNode;
}

interface INavLinks {
  [key: string]: INavLinkInfo[];
}

const navLinks: INavLinks = {
  admin: [
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
  ],
};

const Navbar = () => {
  return (
    <Stack className={classes.navbar} justify="space-between">
      <Stack>
        {navLinks['admin'].map((link) => (
          <Navlink key={link.path} {...link} />
        ))}
      </Stack>
      <Stack>
        <ColorSchemeButton />
      </Stack>
    </Stack>
  );
};

export default Navbar;
