import { useEffect } from 'react';
import { Paper, ScrollArea, SimpleGrid, Stack, Text } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';

import IssueDetailsForm from '../forms/issue/IssueDetailsForm';
import StatusTable from '../tables/status/StatusTable';
import { ModalProvider } from '../context/ModalContext';
import CommentModal from '../modals/comment/CommentModal';
import CommentList from '../components/comment/CommentList';

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
        <SimpleGrid cols={2}>
          <Stack>
            <Text c="blue">DETAILS</Text>
            <Paper withBorder p="xs">
              <ModalProvider>
                <CommentModal />
                <IssueDetailsForm />
              </ModalProvider>
            </Paper>
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
