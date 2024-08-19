import { Table } from '@mantine/core';
import classes from './UsersTable.module.css';
import { useScrollingContext } from '../../context/ScrollingContext';

interface IProps {
  role: string;
}

interface ITheadLabels {
  [key: string]: string[];
}

const labels: ITheadLabels = {
  admin: ['ID', 'Name', 'E-Mail'],
  tutor: ['ID', 'Name', 'E-Mail', 'Zugewiesene Fehlermeldungen'],
  student: ['ID', 'Matrikel-Nr.', 'Name', 'E-Mail', 'Anzahl Fehlermeldungen'],
};

const Thead = ({ role }: IProps) => {
  const { scrolling } = useScrollingContext();
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
