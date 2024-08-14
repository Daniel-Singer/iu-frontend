import { Group, Paper, Stack, Text } from '@mantine/core';
import StatsCard from '../../../layout/stats/StatsCard';
import StatsLabel from '../../../layout/stats/StatsLabel';
import { IconAlertCircle } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { listMyIssues } from '../../../queries/issues/listMyIssues';

const IssuesCount = () => {
  const { data: issues } = useQuery({
    queryKey: ['my_issues'],
    queryFn: listMyIssues,
  });
  return (
    <StatsCard>
      <Paper p="xs">
        <Stack>
          <StatsLabel icon={<IconAlertCircle />}>Deine Meldungen</StatsLabel>
          <Group justify="space-between">
            <Text>Anzahl</Text>
            <Text>{issues?.length! ?? 0}</Text>
          </Group>
        </Stack>
      </Paper>
    </StatsCard>
  );
};

export default IssuesCount;
