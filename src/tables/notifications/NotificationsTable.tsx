import { useQuery } from '@tanstack/react-query';
import { listNotifications } from '../../queries/notifications/listNotifications';
import { Anchor, Table, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const NotificationsTable = () => {
  const { data: notifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: listNotifications,
  });
  const navigate = useNavigate();
  return (
    <Table highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Betreff</Table.Th>
          <Table.Th>Fehlermeldung</Table.Th>
          <Table.Th>Erhalten am</Table.Th>
          <Table.Th>Erhalten um</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {notifications?.map(({ id, subject, body, issue_id, created_at }) => (
          <Table.Tr
            key={id}
            onDoubleClick={() => navigate(`/notifications/${id}`)}
          >
            <Table.Td>{id}</Table.Td>
            <Table.Td>{subject}</Table.Td>
            <Table.Td>
              <Anchor onClick={() => navigate(`/issue/${issue_id}`)}>
                <Text size="sm" c="green">
                  {issue_id}
                </Text>
              </Anchor>
            </Table.Td>
            <Table.Td>{dayjs(created_at).format('DD.MM.YYYY')}</Table.Td>
            <Table.Td>{dayjs(created_at).format('HH:mm')}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default NotificationsTable;
