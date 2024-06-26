import {
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

const ColorSchemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <UnstyledButton onClick={toggleColorScheme} p="xs">
      <Group>
        <ThemeIcon variant="light">
          {colorScheme === 'light' ? (
            <IconMoon size={20} />
          ) : (
            <IconSun size={20} />
          )}
        </ThemeIcon>
        <Text>{colorScheme === 'light' ? 'Dark Mode' : 'Light Mode'}</Text>
      </Group>
    </UnstyledButton>
  );
};

export default ColorSchemeButton;
