import { Button, MantineColor } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

interface IProps {
  color?: MantineColor;
  onClick?: () => void;
  children: string;
  disabled?: boolean;
}

const AddButton = ({
  color = 'green',
  onClick,
  children,
  disabled = false,
}: IProps) => {
  return (
    <Button
      leftSection={<IconPlus size={20} />}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default AddButton;
