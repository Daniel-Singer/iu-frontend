import ScreenHeader from '../components/screen/ScreenHeader';
import { ScrollingProvider } from '../context/ScrollingContext';
import NotificationsTable from '../tables/notifications/NotificationsTable';

const NotificationScreen = () => {
  return (
    <>
      <ScreenHeader label="Benachrichtigungen" />
      <ScrollingProvider>
        <NotificationsTable />
      </ScrollingProvider>
    </>
  );
};

export default NotificationScreen;
