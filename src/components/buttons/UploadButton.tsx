import { Button, MantineColor } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

interface IProps {
  color?: MantineColor;
  onClick?: () => void;
  children: string;
  disabled?: boolean;
}

const UploadButton = ({
  color = 'green',
  onClick,
  children,
  disabled = false,
}: IProps) => {
  return (
    <Button
      leftSection={<IconUpload size={20} />}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children.toUpperCase()}
    </Button>
  );
};

export default UploadButton;
