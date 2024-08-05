import { useQuery } from '@tanstack/react-query';
import { listIssuesComments } from '../../queries/comments/listIssuesComments';
import { useParams } from 'react-router-dom';
import { Paper, Stack, Text } from '@mantine/core';
import Comment from './Comment';

const CommentList = () => {
  const params = useParams();
  const { data: comments, isSuccess } = useQuery({
    queryKey: ['comments'],
    queryFn: () => listIssuesComments(params?.id!),
    enabled: !!params.id,
  });
  if (isSuccess && comments?.length! > 0) {
    return (
      <Stack gap="xs">
        <Text c="blue">KOMMENTARE</Text>
        {comments?.map((comment) => (
          <Paper withBorder p="xs" key={comment?.id!}>
            <Comment key={comment.id!} {...comment} />
          </Paper>
        ))}
      </Stack>
    );
  } else {
    return null;
  }
};

export default CommentList;
