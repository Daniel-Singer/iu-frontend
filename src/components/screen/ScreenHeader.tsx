import { Group, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface IProps {
  label?: string;
  children: ReactNode;
}

const ScreenHeader = ({ label, children }: IProps) => {
  return (
    <Group justify="space-between">
      <Text c="blue">{label?.toUpperCase()}</Text>
      <Group>{children}</Group>
    </Group>
  );
};

export default ScreenHeader;
