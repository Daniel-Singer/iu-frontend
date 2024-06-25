import { Alert, Paper, ScrollArea, Table, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listMyIssues } from '../../queries/issues/listMyIssues';
import dayjs from 'dayjs';
import { IconAlertTriangle } from '@tabler/icons-react';

const IssuesTable = () => {
  const { data: myIssues } = useQuery({
    queryKey: ['my_issues'],
    queryFn: listMyIssues,
  });
  if (myIssues?.length! > 1) {
    return (
      <ScrollArea.Autosize>
        <Paper flex={1} withBorder radius="sm">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ID</Table.Th>
                <Table.Th>Kurzbeschreibung</Table.Th>
                <Table.Th>Kategorie</Table.Th>
                <Table.Th>Kurs</Table.Th>
                <Table.Td>Erstellt am</Table.Td>
                <Table.Td>Bearbeitet am</Table.Td>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {myIssues?.map(
                ({ id, title, category, course, created_at, updated_at }) => (
                  <Table.Tr key={`issue${id}`}>
                    <Table.Td>{id}</Table.Td>
                    <Table.Td>{title}</Table.Td>
                    <Table.Td>
                      {!category?.label ? 'k.A' : category?.label!}
                    </Table.Td>
                    <Table.Td>{course.code}</Table.Td>
                    <Table.Td>
                      {dayjs(created_at).format('DD.MM.YYYY')}
                    </Table.Td>
                    <Table.Td>
                      {dayjs(updated_at).format('DD.MM.YYYY')}
                    </Table.Td>
                  </Table.Tr>
                )
              )}
            </Table.Tbody>
          </Table>
        </Paper>
      </ScrollArea.Autosize>
    );
  } else {
    return (
      <Alert icon={<IconAlertTriangle size={20} />}>
        <Text size="sm" c="blue">
          Keine Fehlermeldungen angelegt
        </Text>
      </Alert>
    );
  }
};

export default IssuesTable;
