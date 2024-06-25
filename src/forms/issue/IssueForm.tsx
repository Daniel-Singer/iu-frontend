import { Select, Stack, TextInput, Textarea } from '@mantine/core';
import { useSelectData } from './hooks/useSelectData';
import { useForm } from '@mantine/form';
import SubmitButton from '../../components/buttons/SubmitButton';

const IssueForm = () => {
  const { categories, courses } = useSelectData();
  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      course_id: '',
      category_id: '',
    },
    validate: {
      category_id: (value) => (value !== '' ? null : 'Kategorie erforderlich'),
      course_id: (value) => (value !== '' ? null : 'KursID erforderlich'),
      title: (value) => (value !== '' ? null : 'Kurzbeschreibung erforderlich'),
      description: (value) =>
        value !== '' ? null : 'Beschreibung erforderlich',
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack>
        <Select
          label="Kategorie"
          data={categories}
          withAsterisk
          {...form.getInputProps('category_id')}
        />
        <Select
          label="Kurs"
          data={courses}
          withAsterisk
          searchable
          {...form.getInputProps('course_id')}
        />
        <TextInput
          label="Kurzbeschreibung"
          withAsterisk
          {...form.getInputProps('title')}
        />
        <Textarea
          label="Beschreibung"
          withAsterisk
          minRows={5}
          autosize
          {...form.getInputProps('description')}
        />
        <SubmitButton>Speichern</SubmitButton>
      </Stack>
    </form>
  );
};

export default IssueForm;
