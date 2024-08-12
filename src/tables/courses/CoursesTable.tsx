import { Alert, Paper, ScrollArea, Table, Text } from '@mantine/core';

import classes from './CoursesTable.module.css';
import Thead from './Thead';
import Tbody from './Tbody';
import { useQuery } from '@tanstack/react-query';
import { listCourses } from '../../queries/courses/listCourses';
import { IconAlertTriangle } from '@tabler/icons-react';

// TODO - 1.2 - Rand bei Tabelle entfernen. Dazu bei Paper Komponente withBorder Attribut entfernen

const CoursesTable = () => {
  const { data: courses, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: listCourses,
  });
  if (!courses || (courses.length < 1 && !isLoading)) {
    return (
      <Alert icon={<IconAlertTriangle size={20} />}>
        <Text c="blue" size="sm">
          Keine Kurse in Datenbank hinterlegt
        </Text>
      </Alert>
    );
  } else {
    return (
      <ScrollArea.Autosize>
        <Paper withBorder>
          <Table highlightOnHover className={classes.table}>
            <Thead />
            <Tbody courses={courses!} />
          </Table>
        </Paper>
      </ScrollArea.Autosize>
    );
  }
};

export default CoursesTable;
