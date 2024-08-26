import { Select, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useQuery } from '@tanstack/react-query';
import { listStatus } from '../../queries/status/listStatus';
import { useParams } from 'react-router-dom';
import { getIssue } from '../../queries/issues/getIssue';
import { useEffect } from 'react';

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
    <form>
      <Stack>
        <Select
          data={status}
          label="Status"
          withAsterisk
          {...form.getInputProps('status.id')}
          allowDeselect={false}
        />
      </Stack>
    </form>
  );
};

export default StatusForm;
