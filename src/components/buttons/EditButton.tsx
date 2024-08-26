import { Button, MantineColor } from '@mantine/core';
import { IconPencil } from '@tabler/icons-react';

interface IProps {
  disabled?: boolean;
  color?: MantineColor;
  children: string;
  onClick?: () => void;
  variant?: string;
}

const EditButton = ({
  children,
  color = 'grape',
  disabled = false,
  onClick,
  variant = 'filled',
}: IProps) => {
  return (
    <Button
      color={color}
      leftSection={<IconPencil size={20} />}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default EditButton;
