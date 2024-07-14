import { useQuery } from '@tanstack/react-query';
import StatsCard from '../../../layout/stats/StatsCard';
import { getUsersCommentAnalytics } from '../../../queries/analytics/comments/getUsersCommentAnalytics';
import StatsLabel from '../../../layout/stats/StatsLabel';
import { Group, Paper, Skeleton, Stack, Text } from '@mantine/core';

const UnseenComments = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['comment_analytics'],
    queryFn: getUsersCommentAnalytics,
  });
  return (
    <StatsCard>
      <Paper p="xs">
        <Stack>
          <StatsLabel>Kommentare</StatsLabel>
          {isLoading ? (
            <Skeleton h={24} />
          ) : (
            <Group justify="space-between">
              <Text>Ungesehen</Text>
              <Text>{data?.comments?.new?.count ?? 0}</Text>
            </Group>
          )}
        </Stack>
      </Paper>
    </StatsCard>
  );
};

export default UnseenComments;
