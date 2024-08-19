import { Paper } from '@mantine/core';
import ScreenHeader from '../components/screen/ScreenHeader';
import NotificationsTable from '../tables/notifications/NotificationsTable';

const NotificationScreen = () => {
  return (
    <>
      <ScreenHeader label="Benachrichtigungen" />
      <Paper flex={1}>
        <NotificationsTable />
      </Paper>
    </>
  );
};

export default NotificationScreen;
