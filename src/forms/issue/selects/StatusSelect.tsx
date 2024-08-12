import { Select } from '@mantine/core';
import { useIssueDetailsFormContext } from '../context';
import { useQuery } from '@tanstack/react-query';
import { listStatus } from '../../../queries/status/listStatus';
import { useAuthContext } from '../../../context/AuthContext';

const StatusSelect = () => {
  const form = useIssueDetailsFormContext();
  const { auth } = useAuthContext();
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
  if (auth.role !== 'student') {
    return (
      <Select
        data={status}
        label="Status"
        withAsterisk
        {...form.getInputProps('status.id')}
        allowDeselect={false}
      />
    );
  } else {
    return null;
  }
};

export default StatusSelect;
