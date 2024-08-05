import { useEffect } from 'react';
import { Paper, ScrollArea, SimpleGrid, Stack, Text } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';

import StatusTable from '../tables/status/StatusTable';
import CommentList from '../components/comment/CommentList';
import IssueCard from '../components/cards/issue/IssueCard';

// TODO - Audit Tab implementieren.
const IssueDetailsScreen = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: ['issue'],
      });
      queryClient.removeQueries({
        queryKey: ['comments'],
      });
    };
  }, []);

  return (
    <>
      <ScrollArea.Autosize>
        <SimpleGrid cols={2} p={0} spacing="xs">
          <Stack>
            <Text c="blue">DETAILS</Text>
            <IssueCard />
            <CommentList />
          </Stack>
          <Stack>
            <Text c="blue">FORTSCHRITT</Text>
            <Paper withBorder>
              <StatusTable />
            </Paper>
          </Stack>
        </SimpleGrid>
      </ScrollArea.Autosize>
    </>
  );
};

export default IssueDetailsScreen;
