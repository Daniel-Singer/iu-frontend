import { Group, Text } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './Stats.module.css';

interface IProps {
  children: string;
  icon?: ReactNode;
}

const StatsLabel = ({ children, icon }: IProps) => {
  return (
    <Group justify="space-between" className={classes.label}>
      <Text size="xs" c="dimmed">
        {children.toUpperCase()}
      </Text>
      {icon}
    </Group>
  );
};

export default StatsLabel;
