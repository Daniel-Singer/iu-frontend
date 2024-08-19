import { Table } from '@mantine/core';

const Thead = () => {
  return (
    <Table.Thead>
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
