import { Button, MantineColor } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

interface IProps {
  color?: MantineColor;
  children: string;
}

const AddButton = ({ color = 'green', children }: IProps) => {
  return (
    <Button leftSection={<IconPlus size={20} />} color={color}>
      {children.toUpperCase()}
    </Button>
  );
};

export default AddButton;
