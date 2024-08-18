import { Table } from '@mantine/core';
import classes from './IssuesTable.module.css';

interface IProps {
  hasCode?: boolean;
  scrolling?: boolean;
}

const Thead = ({ hasCode = true, scrolling = false }: IProps) => {
  return (
    <Table.Thead
      className={classes.header}
      data-scrolling={scrolling === true || undefined}
    >
      <Table.Tr>
        <Table.Th>ID</Table.Th>
        {hasCode ? <Table.Th>Kurs</Table.Th> : null}
        <Table.Th>Kurzbeschreibung</Table.Th>
        <Table.Th>Kategorie</Table.Th>
        <Table.Th>Status</Table.Th>
        <Table.Th>Erstellt am</Table.Th>
        <Table.Th>Letztes Update</Table.Th>
      </Table.Tr>
    </Table.Thead>
  );
};

export default Thead;
