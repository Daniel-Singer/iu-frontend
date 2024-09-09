import { Table } from '@mantine/core';
import { useScrollingContext } from '../../context/ScrollingContext';
import classes from './NotificationsTable.module.css';

const Thead = () => {
  const { scrolling } = useScrollingContext();
  return (
    <Table.Thead
      className={classes.header}
      data-scrolling={scrolling === true || undefined}
    >
      <Table.Tr>
        <Table.Th></Table.Th>
        <Table.Th>ID</Table.Th>
        <Table.Th>Betreff</Table.Th>
        <Table.Th>Fehlermeldung</Table.Th>
        <Table.Th>Erhalten am</Table.Th>
        <Table.Th>Erhalten um</Table.Th>
      </Table.Tr>
    </Table.Thead>
  );
};

export default Thead;
