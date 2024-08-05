import { Stack, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment } from '../../queries/comments/createComment';
import { useParams } from 'react-router-dom';
import { showNotification } from '../../helpers/notifications/showNotification';

interface IProps {
  toggle: () => void;
}

const CommentForm = ({ toggle }: IProps) => {
  const params = useParams();
  const queryClient = useQueryClient();
  const form = useForm<ICommentBase>({
    initialValues: {
      text: '',
    },
    validate: {
      text: (value) => (!value || value === '' ? 'Text erforderlich' : null),
    },
  });
  const { mutate: comment } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments'],
      });
      toggle();
      showNotification('success', 'KOMMENTAR', 'Erfolgreich gespeichert!');
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const handleSubmit = (values: ICommentBase) => {
    comment({ ...values, issue_id: parseInt(params.id!) });
  };
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack>
        <Textarea
          label="Kommentar"
          {...form.getInputProps('text')}
          data-autofocus
        />
        <SubmitButton>senden</SubmitButton>
      </Stack>
    </form>
  );
};

export default CommentForm;
