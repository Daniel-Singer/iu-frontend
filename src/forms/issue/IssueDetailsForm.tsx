import { useEffect } from 'react';
import {
  Divider,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import dayjs from 'dayjs';
import { useForm } from '@mantine/form';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getIssue } from '../../queries/issues/getIssue';
import DeleteButton from '../../components/buttons/DeleteButton';
import CardRow from '../../layout/card/CardRow';
import SubmitButton from '../../components/buttons/SubmitButton';
import { deleteIssue } from '../../queries/issues/deleteIssue';
import { showNotification } from '../../helpers/notifications/showNotification';
import { updateIssue } from '../../queries/issues/updateIssue';
import CommentButton from '../../components/buttons/CommentButton';
import { useModalContext } from '../../context/ModalContext';

const IssueDetailsForm = () => {
  const params = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { toggleModal } = useModalContext();

  const form = useForm({
    initialValues: {
      title: '',
      description: '',
    },
  });

  // get issue data from database
  const { data: issue, isSuccess } = useQuery({
    queryKey: ['issue'],
    queryFn: () => getIssue(params.id!),
    enabled: !!params.id,
  });

  // update issue in database
  const { mutate: update } = useMutation({
    mutationFn: updateIssue,
    onSuccess: (issue) => {
      queryClient.invalidateQueries({
        queryKey: ['my_issues'],
      });
      showNotification(
        'success',
        'UPDATE!',
        `Update für ${issue?.title} erfolgreich`
      );
      form.resetDirty();
    },
  });

  // remove issue from database
  const { mutate: remove } = useMutation({
    mutationFn: deleteIssue,
    onSuccess: (issue) => {
      navigate('/');
      queryClient.invalidateQueries({
        queryKey: ['my_issues'],
      });
      showNotification(
        'success',
        'ERFOLG!',
        `${issue.title} erfolgreich gelöscht`
      );
    },
  });

  useEffect(() => {
    if (isSuccess) {
      form.setFieldValue('title', issue.title);
      form.setFieldValue('description', issue.description);

      form.resetDirty();
    }
  }, [isSuccess]);

  return (
    <form
      onSubmit={form.onSubmit((values) =>
        update({ id: issue?.id!, update: values })
      )}
    >
      <Stack>
        <CardRow label="ID" value={issue?.id!} />
        <CardRow
          label="Kurs"
          value={`${issue?.course.code!} - ${issue?.course.title!}`}
        />
        <CardRow
          label="Tutor"
          value={`${issue?.course.tutor.first_name} ${issue?.course?.tutor.last_name}`}
        />
        <CardRow
          label="Erstellt"
          value={dayjs(issue?.created_at).format('DD.MM.YYYY')}
        />
        <CardRow
          label="Geändert"
          value={dayjs(issue?.updated_at).format('DD.MM.YYYY')}
        />
        <Divider h={0} />
        <Group justify="end">
          <CommentButton onClick={toggleModal}>Kommentieren</CommentButton>
        </Group>
        <Divider h={0} />
        <Text size="sm" c="dimmed">
          Inhalte ändern
        </Text>
        <TextInput
          label="Titel"
          {...form.getInputProps('title')}
          withAsterisk
        />
        <Textarea
          label="Beschreibung"
          withAsterisk
          minRows={5}
          autosize
          {...form.getInputProps('description')}
        />
        <CardRow label="Status" value={<Text>{issue?.status[0].label}</Text>} />
        <Group justify="space-between">
          <SubmitButton disabled={!form.isDirty()}>Update</SubmitButton>
          <DeleteButton onClick={() => remove(issue?.id!)}>
            Meldung entfernen
          </DeleteButton>
        </Group>
      </Stack>
    </form>
  );
};

export default IssueDetailsForm;
