import { Stack } from '@mantine/core';
import classes from './Navbar.module.css';
import {
  IconBook,
  IconHome,
  IconMessage,
  IconPower,
  IconSchool,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import Navlink from '../navlink/Navlink';
import ColorSchemeButton from '../buttons/ColorSchemeButton';
import { ReactNode } from 'react';
import { useAuthContext } from '../../context/AuthContext';

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
      path: 'students',
      label: 'Studierende',
      icon: <IconSchool size={20} />,
    },
    {
      path: 'tutors',
      label: 'Tutoren',
      icon: <IconUser size={20} />,
    },
    {
      path: 'courses',
      label: 'Kurse',
      icon: <IconBook size={20} />,
    },
    {
      path: 'settings',
      label: 'Einstellungen',
      icon: <IconSettings size={20} />,
    },
  ],
  student: [
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
  ],
  tutor: [
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
  ],
};

const Navbar = () => {
  const { auth } = useAuthContext();
  return (
    <Stack className={classes.navbar} justify="space-between">
      <Stack gap={0}>
        {navLinks[auth?.role]?.map((link) => (
          <Navlink key={link.path} {...link} />
        ))}
      </Stack>
      <Stack gap={0}>
        <ColorSchemeButton />
        <Navlink
          path="account"
          label="Mein Account"
          icon={<IconUser size={20} />}
        />
        <Navlink path="logout" label="Logout" icon={<IconPower size={20} />} />
      </Stack>
    </Stack>
  );
};

export default Navbar;
