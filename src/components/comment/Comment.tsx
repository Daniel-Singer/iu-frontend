import { Stack, Text } from '@mantine/core';
import dayjs from 'dayjs';

const Comment = ({ text, created_from, created_at }: ICommentReceive) => {
  return (
    <Stack gap="xs">
      <Text size="xs" c="dimmed">{`${created_from.first_name} ${
        created_from.last_name
      } schrieb am ${dayjs(created_at).format('DD.MM.YYYY')}, um ${dayjs(
        created_at
      ).format('HH:mm')}`}</Text>
      <Text>{text}</Text>
    </Stack>
  );
};

export default Comment;
