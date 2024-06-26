import { useQuery, useQueryClient } from '@tanstack/react-query';
import ScreenHeader from '../components/screen/ScreenHeader';
import { getIssue } from '../queries/issues/getIssue';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Paper, SimpleGrid, Stack, Text } from '@mantine/core';

const IssueDetailsScreen = () => {
  const params = useParams();
  const queryClient = useQueryClient();
  const { data: issue } = useQuery({
    queryKey: ['issue'],
    queryFn: () => getIssue(params.id!),
    enabled: !!params.id,
  });
  useEffect(() => {
    return () =>
      queryClient.removeQueries({
        queryKey: ['issue'],
      });
  }, []);
  return (
    <>
      <ScreenHeader label="Details Fehlermeldung"></ScreenHeader>
      <SimpleGrid cols={2}>
        <Paper withBorder p="xs">
          <Stack>
            <Text>ID</Text>
          </Stack>
        </Paper>
      </SimpleGrid>
    </>
  );
};

export default IssueDetailsScreen;
