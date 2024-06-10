import { Button, MantineColor } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

interface IProps {
  color?: MantineColor;
  onClick?: () => void;
  children: string;
}

const AddButton = ({ color = 'green', onClick, children }: IProps) => {
  return (
    <Button
      leftSection={<IconPlus size={20} />}
      color={color}
      onClick={onClick}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default AddButton;
