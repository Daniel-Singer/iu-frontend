import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getNotification } from '../../queries/notifications/getNotification';
import { Anchor, Group, Paper, Stack, Text } from '@mantine/core';
import { useEffect } from 'react';
import NotificationsPlaceholder from '../../layout/notifications/NotificationsPlaceholder';

const Notification = () => {
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    data: notification,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotification(params?.id!),
    enabled: !!params?.id,
  });
  useEffect(() => {
    if (isSuccess && !isLoading) {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    }
  }, [isSuccess, isLoading]);
  return (
    <Paper flex={1} p="xs">
      {isSuccess && !isLoading ? (
        <Stack>
          <Text>{notification?.head}</Text>
          <div dangerouslySetInnerHTML={{ __html: notification?.body }}></div>
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
      ) : (
        <NotificationsPlaceholder />
      )}
    </Paper>
  );
};

export default Notification;
