import { Select, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { listStatus } from '../../queries/status/listStatus';
import { useParams } from 'react-router-dom';
import { getIssue } from '../../queries/issues/getIssue';
import { useEffect } from 'react';
import SubmitButton from '../../components/buttons/SubmitButton';
import { updateIssue } from '../../queries/issues/updateIssue';
import { useModalContext } from '../../context/ModalContext';
import { showNotification } from '../../helpers/notifications/showNotification';

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

const StatusForm = () => {
  const params = useParams();
  const queryClient = useQueryClient();
  const { toggleModal } = useModalContext();
  const form = useForm<any>({
    initialValues: {
      status: {
        id: undefined,
      },
      reason: '',
    },
    validate: {
      reason: (value, values) => {
        if (values.status.id == 3 && values.status.id > 0) {
          return value === '' ? 'Ticketlösung erforderlich' : null;
        }
        return value === '' ? 'Begründung erforderlich' : null;
      },
    },
  });

  const { data: issue, isLoading } = useQuery({
    queryKey: ['issue'],
    queryFn: () => getIssue(params.id!),
    enabled: !!params.id,
  });

  const { data: status } = useQuery({
    queryKey: ['status'],
    queryFn: listStatus,
    select: (data) => {
      return data?.map((status) => ({
        value: String(status?.id!),
        label: status.label,
      }));
    },
  });

  const { mutate: update } = useMutation({
    mutationFn: updateIssue,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['issue'],
      });
      queryClient.invalidateQueries({
        queryKey: ['my_issues'],
      });
      queryClient.invalidateQueries({
        queryKey: ['issue_status'],
      });
      showNotification('success', 'STATUS', 'Statusupdate erfolgreich');
      toggleModal();
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message ?? 'Update fehlgeschlagen';
      showNotification('error', 'STATUS', message);
      toggleModal();
    },
  });

  const handleUpdate = (values: any) => {
    if (form.values.status.id <= 2) {
      update({ ...values, reason: null });
    } else {
      update({ ...values });
    }
  };

  useEffect(() => {
    if (issue && !isLoading) {
      form.setFieldValue('status.id', String(issue?.status?.id!));
      form.resetDirty();
    }
  }, [issue, isLoading]);
  return (
    <form
      onSubmit={form.onSubmit((values) =>
        handleUpdate({ id: params?.id, update: { ...values } })
      )}
    >
      <Stack>
        <Select
          data={status}
          label="Status"
          withAsterisk
          {...form.getInputProps('status.id')}
          allowDeselect={false}
        />
        {form.values.status.id > 2 ? (
          <TextInput
            label={form.values.status.id == 3 ? 'Ticketlösung' : 'Begründung'}
            {...form.getInputProps('reason')}
          />
        ) : null}
        <SubmitButton disabled={!form.isDirty()}>
          {buttonStatusText[form.values.status.id] ?? 'Updates'}
        </SubmitButton>
      </Stack>
    </form>
  );
};

export default StatusForm;
