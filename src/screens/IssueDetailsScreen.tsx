import { useEffect } from 'react';
import { ScrollArea, SimpleGrid, Stack, Text } from '@mantine/core';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import IssueCard from '../components/cards/issue/IssueCard';
import { ModalProvider } from '../context/ModalContext';
import AuditCard from '../components/cards/audit/AuditCard';
import { getIssue } from '../queries/issues/getIssue';
import { useParams } from 'react-router-dom';

const IssueDetailsScreen = () => {
  const queryClient = useQueryClient();

  const params = useParams();

  const { data: issue, isLoading } = useQuery({
    queryKey: ['issue'],
    queryFn: () => getIssue(params.id!),
    enabled: !!params.id,
  });

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
            <IssueCard issue={issue!} isLoading={isLoading} />
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
