import { MantineColor } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconThumbDown, IconThumbUp } from '@tabler/icons-react';

export const showNotification = (
  type: 'error' | 'success',
  title: string,
  message: string
) => {
  const color: MantineColor = type === 'error' ? 'red' : 'green';
  notifications.show({
    title,
    message,
    color,
    autoClose: 2000,
    icon:
      type === 'error' ? (
        <IconThumbDown size={18} />
      ) : (
        <IconThumbUp size={18} />
      ),
  });
};
