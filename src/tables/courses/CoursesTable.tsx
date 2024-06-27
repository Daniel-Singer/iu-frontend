import { Paper, ScrollArea, Table, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listCourses } from '../../queries/courses/listCourses';

import classes from './CoursesTable.module.css';

const CoursesTable = () => {
  const { data: courses } = useQuery({
    queryKey: ['courses'],
    queryFn: listCourses,
  });
  return (
    <ScrollArea.Autosize>
      <Paper withBorder>
        <Table highlightOnHover className={classes.table}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Code</Table.Th>
              <Table.Th>Bezeichnung</Table.Th>
              <Table.Th>Tutor</Table.Th>
              <Table.Th>Gemeldete Fehler</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {courses?.map((course) => (
              <Table.Tr key={course.id!}>
                <Table.Td>{course.id!}</Table.Td>
                <Table.Td>
                  <Text size="sm" c="green">
                    {course.code}
                  </Text>
                </Table.Td>
                <Table.Td>{course.title}</Table.Td>
                <Table.Td>{`${course.tutor.first_name} ${course.tutor.last_name}`}</Table.Td>
                <Table.Td>
                  <Text c={course.issues.count < 1 ? 'green' : 'red'} size="sm">
                    {course.issues.count}
                  </Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </ScrollArea.Autosize>
  );
};

export default CoursesTable;
