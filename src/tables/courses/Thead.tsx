import { Table } from '@mantine/core';
import classes from './CoursesTable.module.css';
import { useScrollingContext } from '../../context/ScrollingContext';

const Thead = () => {
  const { scrolling } = useScrollingContext();
  return (
    <Table.Thead
      className={classes.header}
      data-scrolling={scrolling === true || undefined}
    >
      <Table.Tr>
        <Table.Th>ID</Table.Th>
        <Table.Th>Code</Table.Th>
        <Table.Th>Bezeichnung</Table.Th>
        <Table.Th>Tutor</Table.Th>
        <Table.Th>Gemeldete Fehler</Table.Th>
        <Table.Th>Aktiv</Table.Th>
      </Table.Tr>
    </Table.Thead>
  );
};

export default Thead;
