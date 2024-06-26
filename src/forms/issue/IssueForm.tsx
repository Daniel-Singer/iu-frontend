import { FileInput, Select, Stack, TextInput, Textarea } from '@mantine/core';
import { useSelectData } from './hooks/useSelectData';
import { useForm } from '@mantine/form';
import SubmitButton from '../../components/buttons/SubmitButton';
import { IconPaperclip } from '@tabler/icons-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createIssue } from '../../queries/issues/createIssue';
import { showNotification } from '../../helpers/notifications/showNotification';
import { useModalContext } from '../../context/ModalContext';

const IssueForm = () => {
  const { categories, courses } = useSelectData();
  const { toggleModal } = useModalContext();
  const form = useForm<IIssueCreate>({
    initialValues: {
      title: '',
      description: '',
      course_id: undefined,
      category_id: undefined,
      media_type: '',
      attached_file: '',
    },
    validate: {
      category_id: (value) => (value ? null : 'Kategorie erforderlich'),
      course_id: (value) => (value ? null : 'KursID erforderlich'),
      title: (value) => (value !== '' ? null : 'Kurzbeschreibung erforderlich'),
      description: (value) =>
        value !== '' ? null : 'Beschreibung erforderlich',
    },
  });

  const queryClient = useQueryClient();

  const { mutate: create } = useMutation({
    mutationFn: createIssue,
    onSuccess: (issue) => {
      queryClient.invalidateQueries({
        queryKey: ['my_issues'],
      });
      showNotification(
        'success',
        'FEHLERMELDUNG',
        `Fehlermeldung ${issue.title} erfolgreich erstellt!`
      );
      toggleModal();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (values: IIssueCreate) => {
    create(values);
  };
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack>
        <Select
          label="Kurs"
          data={courses}
          withAsterisk
          searchable
          {...form.getInputProps('course_id')}
        />
        <Select
          label="Kategorie"
          data={categories}
          withAsterisk
          {...form.getInputProps('category_id')}
        />
        <TextInput
          label="Titel"
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
        <Select
          data={[]}
          label="Medien-Typ"
          {...form.getInputProps('media_type')}
        />
        <FileInput
          label="Datei anhängen"
          leftSection={<IconPaperclip size={18} />}
          {...form.getInputProps('attached_file')}
        />
        <SubmitButton>Speichern</SubmitButton>
      </Stack>
    </form>
  );
};

export default IssueForm;
