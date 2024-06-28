import { Alert, Table, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getIssueStatus } from '../../queries/status/getIssueStatus';
import { IconAlertTriangle } from '@tabler/icons-react';
import dayjs from 'dayjs';

const StatusTable = () => {
  const params = useParams();

  const { data: status } = useQuery({
    queryKey: ['issue_status'],
    queryFn: () => getIssueStatus(params?.id!),
    enabled: !!params.id,
  });
  if (status?.length! < 1) {
    return (
      <Alert icon={<IconAlertTriangle size={20} />} m="xs">
        <Text size="sm" c="blue">
          Keine Status für diese Fehlermeldung gespeichert
        </Text>
      </Alert>
    );
  } else {
    return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Datum</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Erstellt von</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {status?.map((element) => (
            <Table.Tr key={element.id}>
              <Table.Td>
                {dayjs(element.created_at).format('DD.MM.YYYY')}
              </Table.Td>
              <Table.Td>{element.status.label}</Table.Td>
              <Table.Td>{`${element?.created_from?.first_name!} ${
                element?.created_from?.last_name
              }`}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    );
  }
};

export default StatusTable;
