import {
  Group,
  MantineColor,
  MantineSize,
  Text,
  ThemeIcon,
} from '@mantine/core';
import {
  IconCheck,
  IconDownload,
  IconPencil,
  IconX,
} from '@tabler/icons-react';
import { ReactNode } from 'react';

interface IStatusColor {
  [key: number]: MantineColor;
}

const statusColors: IStatusColor = {
  1: 'blue',
  2: 'grape',
  3: 'green',
  4: 'red',
};

interface IStatusIcon {
  [key: number]: ReactNode;
}

const statusIcon: IStatusIcon = {
  1: <IconDownload size={14} />,
  2: <IconPencil size={14} />,
  3: <IconCheck size={14} />,
  4: <IconX size={14} />,
};

interface IProps {
  id: number;
  label: string;
  size?: MantineSize;
}

const StatusLabel = ({ id, label, size = 'md' }: IProps) => {
  return (
    <Group>
      <ThemeIcon size="sm" color={statusColors[id]} variant="light">
        {statusIcon[id]}
      </ThemeIcon>
      <Text size={size} c={statusColors[id]}>
        {label}
      </Text>
    </Group>
  );
};

export default StatusLabel;
