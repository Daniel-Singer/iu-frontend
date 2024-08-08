import { Table } from '@mantine/core';
import StatusLabel from '../../components/status/StatusLabel';

interface IProps {
  id: number;
  label: string;
}

const Status = ({ id, label }: IProps) => {
  return (
    <Table.Td>
      <StatusLabel id={id!} label={label} size="sm" />
    </Table.Td>
  );
};

export default Status;
