import dayjs from 'dayjs';
import {
  Alert,
  Anchor,
  Paper,
  ScrollArea,
  Table,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import classes from './NotificationsTable.module.css';
import { IconAlertCircle, IconMail, IconMailOpened } from '@tabler/icons-react';
import { useNotificationsContext } from '../../context/NotificationsContext';
import Thead from './Thead';
import { useScrollingContext } from '../../context/ScrollingContext';

const NotificationsTable = () => {
  const { notifications } = useNotificationsContext();
  const { setIsScrolling } = useScrollingContext();
  const navigate = useNavigate();
  if (notifications?.length! > 0) {
    return (
      <ScrollArea.Autosize
        onScrollPositionChange={({ y }) => setIsScrolling(y !== 0)}
      >
        <Paper flex={1}>
          <Table highlightOnHover className={classes.table}>
            <Thead />
            <Table.Tbody>
              {notifications?.map(
                ({ id, subject, issue_id, created_at, seen }) => (
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
                        {seen ? (
                          <IconMailOpened size={16} />
                        ) : (
                          <IconMail size={16} />
                        )}
                      </ThemeIcon>
                    </Table.Td>
                    <Table.Td>
                      <Anchor
                        size="sm"
                        onClick={() => navigate(`/notifications/${id}`)}
                      >
                        {id}
                      </Anchor>
                    </Table.Td>
                    <Table.Td onClick={() => navigate(`/notifications/${id}`)}>
                      {subject}
                    </Table.Td>
                    <Table.Td>
                      <Anchor onClick={() => navigate(`/issue/${issue_id}`)}>
                        <Text size="sm" c="green">
                          {issue_id}
                        </Text>
                      </Anchor>
                    </Table.Td>
                    <Table.Td>
                      {dayjs(created_at).format('DD.MM.YYYY')}
                    </Table.Td>
                    <Table.Td>{dayjs(created_at).format('HH:mm')}</Table.Td>
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
      <Alert icon={<IconAlertCircle size={18} />} m="xs">
        <Text size="sm" c="blue">
          Aktuell keine Benachrichtigungen vorhanden
        </Text>
      </Alert>
    );
  }
};

export default NotificationsTable;
