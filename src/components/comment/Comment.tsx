import { Stack, Text } from '@mantine/core';
import dayjs from 'dayjs';

const Comment = ({ id, text, created_from, created_at }: ICommentReceive) => {
  return (
    <Stack>
      <Text size="xs" c="dimmed">{`${created_from.first_name} ${
        created_from.last_name
      } schrieb am ${dayjs(created_at).format('DD.MM.YYYY')}`}</Text>
      <Text>{text}</Text>
    </Stack>
  );
};

export default Comment;
