import { Button, MantineColor } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

interface IProps {
  color?: MantineColor;
  onClick?: () => void;
  children: string;
}

const DeleteButton = ({ color = 'red', onClick, children }: IProps) => {
  return (
    <Button
      leftSection={<IconTrash size={20} />}
      color={color}
      onClick={onClick}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default DeleteButton;
