import { useEffect } from 'react';
import {
  Box,
  Group,
  Paper,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';

import ScreenHeader from '../components/screen/ScreenHeader';
import IssueDetailsForm from '../forms/issue/IssueDetailsForm';
import StatusTable from '../tables/status/StatusTable';
import { ModalProvider } from '../context/ModalContext';
import CommentModal from '../modals/comment/CommentModal';

const IssueDetailsScreen = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    return () =>
      queryClient.removeQueries({
        queryKey: ['issue'],
      });
  }, []);

  return (
    <>
      <ScreenHeader label="Details Fehlermeldung"></ScreenHeader>
      <ScrollArea.Autosize>
        <SimpleGrid cols={2}>
          <Stack>
            <Paper withBorder p="xs">
              <ModalProvider>
                <CommentModal />
                <IssueDetailsForm />
              </ModalProvider>
            </Paper>
            <Paper withBorder p="xs"></Paper>
          </Stack>
          <Box>
            <Paper>
              <Group p="xs" justify="space-between">
                <Text c="blue">FORTSCHRITT</Text>
              </Group>
              <StatusTable />
            </Paper>
          </Box>
        </SimpleGrid>
      </ScrollArea.Autosize>
    </>
  );
};

export default IssueDetailsScreen;
