import { Paper, ScrollArea, Table } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listCourses } from '../../queries/courses/listCourses';

const CoursesTable = () => {
  const { data: courses } = useQuery({
    queryKey: ['courses'],
    queryFn: listCourses,
  });
  return (
    <ScrollArea.Autosize>
      <Paper withBorder>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Code</Table.Th>
              <Table.Th>Bezeichnung</Table.Th>
              <Table.Th>Tutor</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {courses?.map((course) => (
              <Table.Tr key={course.id!}>
                <Table.Td>{course.id!}</Table.Td>
                <Table.Td>{course.code}</Table.Td>
                <Table.Td>{course.title}</Table.Td>
                <Table.Td>{course.id!}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </ScrollArea.Autosize>
  );
};

export default CoursesTable;
