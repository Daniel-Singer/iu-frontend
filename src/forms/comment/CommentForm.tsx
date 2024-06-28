import { Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

const CommentForm = () => {
  const form = useForm({
    initialValues: {
      text: '',
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Textarea label="Kommentar" />
    </form>
  );
};
