import { Select } from '@mantine/core';
import { useIssueDetailsFormContext } from '../context';
import { useQuery } from '@tanstack/react-query';
import { listStatus } from '../../../queries/status/listStatus';

const StatusSelect = () => {
  const form = useIssueDetailsFormContext();
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
  return (
    <Select
      data={status}
      label="Status"
      withAsterisk
      {...form.getInputProps('status.id')}
    />
  );
};

export default StatusSelect;
