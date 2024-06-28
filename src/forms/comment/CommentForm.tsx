import { Stack, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import SubmitButton from '../../components/buttons/SubmitButton';

const CommentForm = () => {
  const form = useForm({
    initialValues: {
      text: '',
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
