import { useQuery } from '@tanstack/react-query';
import ScreenHeader from '../components/screen/ScreenHeader';
import { getNotification } from '../queries/notifications/getNotification';
import { useNavigate, useParams } from 'react-router-dom';
import { Anchor, Group, Paper, Stack, Text } from '@mantine/core';

const NotificationDetailsScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: notification } = useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotification(params?.id!),
    enabled: !!params?.id,
  });
  return (
    <>
      <ScreenHeader label="Benachrichtigung Details" />
      <Paper flex={1} p="xs">
        <Stack>
          <Text>{notification?.head}</Text>
          <Text>{notification?.body}</Text>
          <Group>
            <Text>Folgender Link führt Sie zur Meldung: </Text>
            <Anchor
              onClick={() => navigate(`/issue/${notification?.issue_id}`)}
            >{`#${notification?.issue_id}`}</Anchor>
          </Group>
          <div
            dangerouslySetInnerHTML={{ __html: notification?.footer! }}
          ></div>
        </Stack>
      </Paper>
    </>
  );
};

export default NotificationDetailsScreen;
