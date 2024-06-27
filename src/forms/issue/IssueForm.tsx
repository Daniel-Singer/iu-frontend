import { FileInput, Stack, TextInput, Textarea } from '@mantine/core';
import { IconPaperclip } from '@tabler/icons-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import SubmitButton from '../../components/buttons/SubmitButton';
import { createIssue } from '../../queries/issues/createIssue';
import { showNotification } from '../../helpers/notifications/showNotification';
import { useModalContext } from '../../context/ModalContext';
import CourseSelect from './selects/CourseSelect';
import { IssueFormProvider, useIssueForm } from './context';
import CategorySelect from './selects/CategorySelect';
import MediaSelect from './selects/MediaSelect';

const IssueForm = () => {
  const { toggleModal } = useModalContext();
  const form = useIssueForm({
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
    <IssueFormProvider form={form}>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack>
          <CourseSelect />
          <CategorySelect />
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
          <MediaSelect />
          <FileInput
            label="Datei anhängen"
            leftSection={<IconPaperclip size={18} />}
            {...form.getInputProps('attached_file')}
          />
          <SubmitButton>Speichern</SubmitButton>
        </Stack>
      </form>
    </IssueFormProvider>
  );
};

export default IssueForm;
