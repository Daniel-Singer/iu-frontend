import { Table } from '@mantine/core';

interface IProps {
  role: string;
}

interface ITheadLabels {
  [key: string]: string[];
}

const labels: ITheadLabels = {
  admin: ['ID', 'Name', 'E-Mail'],
  tutor: ['ID', 'Name', 'E-Mail'],
  student: ['ID', 'Matrikel-Nr.', 'Name', 'E-Mail'],
};

const Tbody = ({ role }: IProps) => {
  return (
    <Table.Tbody>
      <Table.Tr>
        {labels[role].map((label) => (
          <Table.Td key={label}>{label}</Table.Td>
        ))}
      </Table.Tr>
    </Table.Tbody>
  );
};

export default Tbody;
