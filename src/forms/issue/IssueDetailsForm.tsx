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
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getIssue } from '../../queries/issues/getIssue';
import DeleteButton from '../../components/buttons/DeleteButton';
import CardRow from '../../layout/card/CardRow';
import SubmitButton from '../../components/buttons/SubmitButton';

const IssueDetailsForm = () => {
  const params = useParams();

  const form = useForm();

  const { data: issue, isSuccess } = useQuery({
    queryKey: ['issue'],
    queryFn: () => getIssue(params.id!),
    enabled: !!params.id,
  });

  useEffect(() => {
    if (isSuccess) {
      form.setFieldValue('title', issue.title);
      form.setFieldValue('description', issue.description);

      form.resetDirty();
    }
  }, [isSuccess]);
  return (
    <form>
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
        <CardRow
          label="Status"
          value={<Text c="orange">In Bearbeitung</Text>}
        />
        <Group justify="space-between">
          <SubmitButton disabled={!form.isDirty()}>Update</SubmitButton>
          <DeleteButton>Meldung entfernen</DeleteButton>
        </Group>
      </Stack>
    </form>
  );
};

export default IssueDetailsForm;
