import { useEffect } from 'react';
import { Group, ScrollArea, SimpleGrid, Stack, Text } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';

import IssueCard from '../components/cards/issue/IssueCard';
import TimelineTabs from '../components/timeline/TimelineTabs';
import CommentButton from '../components/buttons/CommentButton';
import { ModalProvider } from '../context/ModalContext';
import AuditCard from '../components/cards/audit/AuditCard';

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
            <ModalProvider>
              <AuditCard />
            </ModalProvider>
          </Stack>
        </SimpleGrid>
      </ScrollArea.Autosize>
    </>
  );
};

export default IssueDetailsScreen;
