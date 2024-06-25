import { Alert, Paper, ScrollArea, Table, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { IconAlertTriangle } from '@tabler/icons-react';
import { listMyIssues } from '../../queries/issues/listMyIssues';
import classes from './IssuesTable.module.css';
import Status from './Status';

const IssuesTable = () => {
  const { data: myIssues } = useQuery({
    queryKey: ['my_issues'],
    queryFn: listMyIssues,
  });
  if (myIssues?.length! > 0) {
    return (
      <ScrollArea.Autosize>
        <Paper flex={1} withBorder radius="sm">
          <Table className={classes.table} highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ID</Table.Th>
                <Table.Th>Kurs</Table.Th>
                <Table.Th>Kurzbeschreibung</Table.Th>
                <Table.Th>Kategorie</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Erstellt am</Table.Th>
                <Table.Th>Letztes Update</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {myIssues?.map(
                ({
                  id,
                  title,
                  category,
                  course,
                  status,
                  created_at,
                  updated_at,
                }) => (
                  <Table.Tr
                    key={`issue${id}`}
                    onDoubleClick={() => console.log('test')}
                  >
                    <Table.Td>{id}</Table.Td>
                    <Table.Td>
                      <Text size="sm" c="green">
                        {course.code}
                      </Text>
                    </Table.Td>
                    <Table.Td>{title}</Table.Td>
                    <Table.Td>
                      <Text c={!category.label ? 'red' : 'default'} size="sm">
                        {!category?.label ? 'k.A' : category?.label!}
                      </Text>
                    </Table.Td>
                    <Status>{status}</Status>
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
