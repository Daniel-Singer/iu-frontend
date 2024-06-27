import { Table } from '@mantine/core';
import classes from './UsersTable.module.css';

interface IProps {
  role: string;
  scrolling: boolean;
}

interface ITheadLabels {
  [key: string]: string[];
}

const labels: ITheadLabels = {
  admin: ['ID', 'Name', 'E-Mail'],
  tutor: ['ID', 'Name', 'E-Mail'],
  student: ['ID', 'Matrikel-Nr.', 'Name', 'E-Mail'],
};

const Thead = ({ role, scrolling }: IProps) => {
  return (
    <Table.Thead
      className={classes.header}
      data-scrolling={scrolling === true || undefined}
    >
      <Table.Tr>
        {labels[role].map((label) => (
          <Table.Th key={label}>{label}</Table.Th>
        ))}
      </Table.Tr>
    </Table.Thead>
  );
};

export default Thead;
