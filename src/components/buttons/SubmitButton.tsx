import { Button, MantineColor } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

interface IProps {
  color?: MantineColor;
  onClick?: () => void;
  children: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const SubmitButton = ({
  color = 'blue',
  onClick,
  children,
  type = 'submit',
  disabled = false,
}: IProps) => {
  return (
    <Button
      leftSection={<IconCheck size={20} />}
      color={color}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default SubmitButton;
