import { Skeleton, Stack } from '@mantine/core';

const NotificationsPlaceholder = () => {
  return (
    <Stack>
      <Skeleton height={30} width="20%"></Skeleton>
      <Skeleton height={30} width="100%"></Skeleton>

      <Skeleton height={30} width="10%%"></Skeleton>
      <Skeleton height={30} width="20%"></Skeleton>
    </Stack>
  );
};

export default NotificationsPlaceholder;
