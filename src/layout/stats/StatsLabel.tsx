import { Group, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface IProps {
  children: string;
  icon?: ReactNode;
}

const StatsLabel = ({ children, icon }: IProps) => {
  return (
    <Group justify="space-between">
      <Text size="xs" c="dimmed">
        {children.toUpperCase()}
      </Text>
      {icon}
    </Group>
  );
};

export default StatsLabel;
