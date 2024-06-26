import { useQueryClient } from '@tanstack/react-query';
import ScreenHeader from '../components/screen/ScreenHeader';
import { useEffect } from 'react';
import { Paper, SimpleGrid } from '@mantine/core';
import IssueDetailsForm from '../forms/issue/IssueDetailsForm';

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
      <SimpleGrid cols={2}>
        <Paper withBorder p="xs">
          <IssueDetailsForm />
        </Paper>
      </SimpleGrid>
    </>
  );
};

export default IssueDetailsScreen;
