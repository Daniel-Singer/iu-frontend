import { useQuery } from '@tanstack/react-query';
import { listIssuesComments } from '../../queries/comments/listIssuesComments';
import { useParams } from 'react-router-dom';
import { Alert, Stack, Text } from '@mantine/core';
import Comment from './Comment';
import { IconAlertCircle } from '@tabler/icons-react';

const CommentList = () => {
  const params = useParams();
  const { data: comments, isSuccess } = useQuery({
    queryKey: ['comments'],
    queryFn: () => listIssuesComments(params?.id!),
    enabled: !!params.id,
  });
  if (isSuccess && comments?.length! > 0) {
    return (
      <Stack gap="xs" p="xs">
        {comments?.map((comment, index) => (
          <Comment key={comment.id!} {...comment} isFirst={index === 0} />
        ))}
      </Stack>
    );
  } else {
    return (
      <Alert icon={<IconAlertCircle size={20} />} m="xs">
        <Text size="sm" c="blue">
          Keine Kommentare vorhanden
        </Text>
      </Alert>
    );
  }
};

export default CommentList;
