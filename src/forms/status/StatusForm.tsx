import { Select, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useQuery } from '@tanstack/react-query';
import { listStatus } from '../../queries/status/listStatus';
import { useParams } from 'react-router-dom';
import { getIssue } from '../../queries/issues/getIssue';
import { useEffect } from 'react';
import SubmitButton from '../../components/buttons/SubmitButton';

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
  const form = useForm<any>({
    initialValues: {
      status: {
        id: undefined,
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

  useEffect(() => {
    if (issue && !isLoading) {
      form.setFieldValue('status.id', String(issue?.status?.id!));
    }
  }, [issue, isLoading]);
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack>
        <Select
          data={status}
          label="Status"
          withAsterisk
          {...form.getInputProps('status.id')}
          allowDeselect={false}
        />
        <SubmitButton disabled={!form.isDirty()}>
          {buttonStatusText[form.values.status.id] ?? 'Updates'}
        </SubmitButton>
      </Stack>
    </form>
  );
};

export default StatusForm;
