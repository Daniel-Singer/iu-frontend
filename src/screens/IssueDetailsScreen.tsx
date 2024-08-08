import { useEffect } from 'react';
import { ScrollArea, SimpleGrid, Stack, Text } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';

import IssueCard from '../components/cards/issue/IssueCard';
import TimelineTabs from '../components/timeline/TimelineTabs';

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
          </Stack>
          <Stack>
            <Text c="blue">AUDIT</Text>
            <TimelineTabs />
          </Stack>
        </SimpleGrid>
      </ScrollArea.Autosize>
    </>
  );
};

export default IssueDetailsScreen;
