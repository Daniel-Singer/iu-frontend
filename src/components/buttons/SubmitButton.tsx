import { Button, MantineColor } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

interface IProps {
  color?: MantineColor;
  onClick?: () => void;
  children: string;
}

const SubmitButton = ({ color = 'blue', onClick, children }: IProps) => {
  return (
    <Button
      leftSection={<IconCheck size={20} />}
      color={color}
      onClick={onClick}
      type="submit"
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default SubmitButton;
