import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Anchor, Table, Text, ThemeIcon } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { listNotifications } from '../../queries/notifications/listNotifications';
import classes from './NotificationsTable.module.css';
import { IconMail, IconMailOpened } from '@tabler/icons-react';

const NotificationsTable = () => {
  const { data: notifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: listNotifications,
  });
  const navigate = useNavigate();
  return (
    <Table highlightOnHover className={classes.table}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>ID</Table.Th>
          <Table.Th>Betreff</Table.Th>
          <Table.Th>Fehlermeldung</Table.Th>
          <Table.Th>Erhalten am</Table.Th>
          <Table.Th>Erhalten um</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {notifications?.map(({ id, subject, issue_id, created_at, seen }) => (
          <Table.Tr
            key={id}
            onDoubleClick={() => navigate(`/notifications/${id}`)}
          >
            <Table.Td>
              <ThemeIcon
                size="sm"
                variant="light"
                color={!seen ? 'orange' : 'green'}
              >
                {seen ? <IconMailOpened size={16} /> : <IconMail size={16} />}
              </ThemeIcon>
            </Table.Td>
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
