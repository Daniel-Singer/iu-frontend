import { Stack } from '@mantine/core';
import classes from './Navbar.module.css';
import { IconHome, IconMessage } from '@tabler/icons-react';
import { INavlink } from '../../types/Navlink';
import Navlink from '../navlink/Navlink';

const navLinks: INavlink[] = [
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

const Navbar = () => {
  return (
    <Stack className={classes.navbar}>
      {navLinks?.map((link) => (
        <Navlink key={link.path} {...link} />
      ))}
    </Stack>
  );
};

export default Navbar;
