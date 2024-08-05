import { Button, MantineColor } from '@mantine/core';
import { IconPencil } from '@tabler/icons-react';

interface IProps {
  disabled?: boolean;
  color?: MantineColor;
  children: string;
  onClick: () => void;
}

const EditButton = ({
  children,
  color = 'grape',
  disabled = false,
}: IProps) => {
  return (
    <Button
      color={color}
      leftSection={<IconPencil size={20} />}
      disabled={disabled}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default EditButton;
