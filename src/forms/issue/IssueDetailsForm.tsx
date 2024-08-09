import { useEffect } from 'react';
import { Stack, TextInput, Textarea } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getIssue } from '../../queries/issues/getIssue';
import { deleteIssue } from '../../queries/issues/deleteIssue';
import { showNotification } from '../../helpers/notifications/showNotification';
import { updateIssue } from '../../queries/issues/updateIssue';
import {
  IIssueDetailsFormValues,
  IssueDetailsFormProvider,
  useIssueDetailsForm,
} from './context';
import StatusSelect from './selects/StatusSelect';
import SubmitButton from '../../components/buttons/SubmitButton';
import DeleteButton from '../../components/buttons/DeleteButton';

interface IProps {
  toggle: () => void;
}

interface IButtonStatusText {
  [key: string]: string;
}

const buttonStatusText: IButtonStatusText = {
  '1': 'Einreichen',
  '2': 'Update',
  '3': 'Ticket schließen',
  '4': 'Ablehnen',
  '5': 'Ticket aussetzen',
};

const IssueDetailsForm = ({ toggle }: IProps) => {
  const params = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const form = useIssueDetailsForm({
    initialValues: {
      title: '',
      description: '',
      status: {
        id: undefined,
        label: '',
      },
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
      queryClient.invalidateQueries({
        queryKey: ['issue'],
      });
      queryClient.invalidateQueries({
        queryKey: ['issue_status'],
      });
      showNotification(
        'success',
        'UPDATE!',
        `Update für ${issue?.title} erfolgreich`
      );
      form.resetDirty();
      toggle();
    },
  });

  const handleUpdate = () => {
    let values: any = {};
    for (let value in form.values) {
      const typedKey = value as keyof IIssueDetailsFormValues;
      if (form.isDirty(typedKey)) {
        values[typedKey] = form.values[typedKey];
      }
    }
    // update everything except status
    update({ id: params?.id!, update: values });
  };

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

  const handleDelete = () => {
    remove(params?.id!);
    
  };

  useEffect(() => {
    if (isSuccess) {
      form.setFieldValue('title', issue.title);
      form.setFieldValue('description', issue.description);
      form.setFieldValue('status.id', String(issue.status.id));
      form.resetDirty();
    }
  }, [isSuccess]);

  return (
    <IssueDetailsFormProvider form={form}>
      <form onSubmit={form.onSubmit(() => handleUpdate())}>
        <Stack>
          <TextInput
            label="Titel"
            withAsterisk
            {...form.getInputProps('title')}
            data-autofocus
          />
          <Textarea
            label="Beschreibung"
            withAsterisk
            {...form.getInputProps('description')}
            minRows={5}
            autosize
          />
          <StatusSelect />
          <Stack>
            <SubmitButton disabled={!form.isDirty()}>
              {buttonStatusText[form.values.status.id] ??'Updates'}
            </SubmitButton>
            <DeleteButton onClick={handleDelete}>Löschen</DeleteButton>
          </Stack>
        </Stack>
      </form>
    </IssueDetailsFormProvider>
  );
};

export default IssueDetailsForm;
