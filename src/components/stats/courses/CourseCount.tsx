import StatsCard from '../../../layout/stats/StatsCard';
import { Group, MantineColor, Paper, Stack, Text } from '@mantine/core';
import StatsLabel from '../../../layout/stats/StatsLabel';
import { ReactNode } from 'react';

interface IProps {
  label: string;
  value: string | number;
  color?: MantineColor;
  icon?: ReactNode;
}

const CoursePanel = ({ label, value, color, icon }: IProps) => {
  return (
    <StatsCard span={2}>
      <Paper p="xs">
        <Stack>
          <StatsLabel icon={icon}>{label}</StatsLabel>
          <Group justify="space-between">
            <Text>Anzahl</Text>
            <Text c={color}>{value}</Text>
          </Group>
        </Stack>
      </Paper>
    </StatsCard>
  );
};

export default CoursePanel;
