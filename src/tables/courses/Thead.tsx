import { Table } from '@mantine/core';

// TODO - 1.1 - Neue Spalte für Überschrift hinzufügen. Table.Th sollte dazu verwendet werden.

const Thead = () => {
  return (
    <Table.Thead>
      <Table.Tr>
        <Table.Th>ID</Table.Th>
        <Table.Th>Code</Table.Th>
        <Table.Th>Bezeichnung</Table.Th>
        <Table.Th>Tutor</Table.Th>
        <Table.Th>Gemeldete Fehler</Table.Th>
      </Table.Tr>
    </Table.Thead>
  );
};

export default Thead;
