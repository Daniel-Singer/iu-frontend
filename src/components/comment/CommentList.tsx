import { useQuery } from '@tanstack/react-query';
import { listIssuesComments } from '../../queries/comments/listIssuesComments';
import { useParams } from 'react-router-dom';
import { Paper, Stack, Text } from '@mantine/core';
import Comment from './Comment';

const CommentList = () => {
  const params = useParams();
  const { data: comments } = useQuery({
    queryKey: ['comments'],
    queryFn: () => listIssuesComments(params?.id!),
    enabled: !!params.id,
  });
  if (comments?.length! < 1) {
    return null;
  } else {
    return (
      <Stack gap="xs">
        <Text c="blue">KOMMENTARE</Text>
        {comments?.map((comment) => (
          <Paper withBorder p="xs">
            <Comment key={comment.id!} {...comment} />
          </Paper>
        ))}
      </Stack>
    );
  }
};

export default CommentList;
