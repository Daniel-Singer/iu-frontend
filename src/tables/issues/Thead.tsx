import { Table } from '@mantine/core';

const Thead = () => {
  return (
    <Table.Thead>
      <Table.Tr>
        <Table.Th>ID</Table.Th>
        <Table.Th>Kurs</Table.Th>
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
