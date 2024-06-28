import { Button, MantineColor } from '@mantine/core';
import { IconMessageCircle } from '@tabler/icons-react';

interface IProps {
  children: string;
  color?: MantineColor;
  disabled?: boolean;
  onClick?: () => void;
}
const CommentButton = ({
  color = 'orange',
  disabled = false,
  children,
  onClick,
}: IProps) => {
  return (
    <Button
      color={color}
      leftSection={<IconMessageCircle size={20} />}
      disabled={disabled}
      onClick={onClick}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default CommentButton;
