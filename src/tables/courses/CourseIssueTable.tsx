import { Alert, Paper, ScrollArea, Table, Text } from '@mantine/core';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { IconAlertTriangle } from '@tabler/icons-react';
import { listByCourse } from '../../queries/issues/listByCourse';
import { useParams } from 'react-router-dom';
import Thead from '../issues/Thead';
import Tbody from '../issues/Tbody';
import TablePlaceholer from '../../layout/tables/TablePlaceholder';

import classes from './CoursesTable.module.css';
import { useEffect } from 'react';

// TODO - 2.1 - Table muss teilweise Responsive gestaltet werden. Overflow der Zellen muss versteckt werden
const CourseIssuesTable = () => {
  const params = useParams();
  const queryClient = useQueryClient();

  const {
    data: issues,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['course_issues'],
    queryFn: () => listByCourse(params?.id!),
    enabled: !!params.id,
  });

  useEffect(() => {
    return () =>
      queryClient.removeQueries({
        queryKey: ['course_issues'],
      });
  }, []);

  if (issues?.length! > 0 && isSuccess) {
    return (
      <ScrollArea.Autosize>
        <Paper flex={1} radius="sm">
          <Table highlightOnHover className={classes.issuetable}>
            <Thead hasCode={false} />
            <Tbody issues={issues!} />
          </Table>
        </Paper>
      </ScrollArea.Autosize>
    );
  } else {
    if (isLoading) {
      return <TablePlaceholer />;
    } else {
      return (
        <Alert icon={<IconAlertTriangle size={20} />}>
          <Text size="sm" c="blue">
            Keine Fehlermeldungen für diesen Kurs hinterlegt
          </Text>
        </Alert>
      );
    }
  }
};

export default CourseIssuesTable;
