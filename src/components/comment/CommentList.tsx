import { useQuery } from '@tanstack/react-query';
import { listIssuesComments } from '../../queries/comments/listIssuesComments';
import { useParams } from 'react-router-dom';
import { Stack } from '@mantine/core';
import Comment from './Comment';

const CommentList = () => {
  const params = useParams();
  const { data: comments } = useQuery({
    queryKey: ['comments'],
    queryFn: () => listIssuesComments(params?.id!),
    enabled: !!params.id,
  });
  return (
    <Stack>
      {comments?.map((comment) => (
        <Comment key={comment.id!} {...comment} />
      ))}
    </Stack>
  );
};

export default CommentList;
