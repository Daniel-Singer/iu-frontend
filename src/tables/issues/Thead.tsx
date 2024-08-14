import { Table } from '@mantine/core';

interface IProps {
  hasCode?: boolean;
}

const Thead = ({ hasCode = true }: IProps) => {
  return (
    <Table.Thead>
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
