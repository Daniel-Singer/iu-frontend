import { Stack, TextInput, Textarea } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import SubmitButton from '../../components/buttons/SubmitButton';
import { createIssue } from '../../queries/issues/createIssue';
import { showNotification } from '../../helpers/notifications/showNotification';
import { useModalContext } from '../../context/ModalContext';
import CourseSelect from './selects/CourseSelect';
import { IssueFormProvider, useIssueForm } from './context';
import CategorySelect from './selects/CategorySelect';
import MediaSelect from './selects/MediaSelect';
import MediaDetailsInputs from './selects/MediaDetailsInputs';
import FileSelect from './selects/FileSelect';

const IssueForm = () => {
  const { toggleModal } = useModalContext();
  const form = useIssueForm({
    initialValues: {
      title: '',
      description: '',
      course_id: undefined,
      category_id: undefined,
      attached_file: null,
      issue_media: {
        media_type: undefined,
        page: undefined,
        line: undefined,
        timestamp: undefined,
        url: undefined,
        label: undefined,
        chapter: undefined,
      },
    },
    validate: {
      category_id: (value) => (value ? null : 'Kategorie erforderlich'),
      course_id: (value) => (value ? null : 'KursID erforderlich'),
      title: (value) => (value !== '' ? null : 'Kurzbeschreibung erforderlich'),
      description: (value) =>
        value !== '' ? null : 'Beschreibung erforderlich',
      issue_media: {
        chapter: (value, values) => {
          return values.issue_media.media_type === 'app' &&
            (!value || value === '')
            ? 'Kapitelangabe erforderlich'
            : null;
        },
      },
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
        'ERFOLG',
        `Ticket ${issue.title} wurde erfolgreich erstellt!`
      );
      toggleModal();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (values: IIssueCreate) => {
    for (let key in values.issue_media) {
      //@ts-ignore
      if (values.issue_media[key] === '') {
        //@ts-ignore
        values.issue_media[key] = null;
      }
    }
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
          <MediaDetailsInputs />
          <FileSelect form={form} />
          <SubmitButton>Speichern</SubmitButton>
        </Stack>
      </form>
    </IssueFormProvider>
  );
};

export default IssueForm;
