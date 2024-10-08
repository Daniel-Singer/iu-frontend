import { Alert, Paper, ScrollArea, Table, Text } from '@mantine/core';

import classes from './CoursesTable.module.css';
import Thead from './Thead';
import Tbody from './Tbody';
import { useQuery } from '@tanstack/react-query';
import { listCourses } from '../../queries/courses/listCourses';
import { IconAlertTriangle } from '@tabler/icons-react';
import TablePlaceholer from '../../layout/tables/TablePlaceholder';
import { useScrollingContext } from '../../context/ScrollingContext';
import { useSearchContext } from '../../context/SearchContext';

const CoursesTable = () => {
  const { setIsScrolling } = useScrollingContext();
  const { searchValue } = useSearchContext();
  const {
    data: courses,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['courses'],
    queryFn: listCourses,
    select: (courses) => {
      if (!searchValue || searchValue === '') {
        return courses;
      }
      return courses?.filter(
        ({ code, title }) =>
          code.toLowerCase().includes(searchValue?.toLowerCase()) ||
          title.toLowerCase().includes(searchValue?.toLowerCase())
      );
    },
  });
  if (courses?.length! > 0 && isSuccess) {
    return (
      <ScrollArea.Autosize
        onScrollPositionChange={({ y }) => setIsScrolling(y !== 0)}
      >
        <Paper>
          <Table highlightOnHover className={classes.table}>
            <Thead />
            <Tbody courses={courses!} />
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
          <Text c="blue" size="sm">
            Keine Kurse in Datenbank hinterlegt
          </Text>
        </Alert>
      );
    }
  }
};

export default CoursesTable;
