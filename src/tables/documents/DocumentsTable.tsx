import { useQuery } from '@tanstack/react-query';
import { listDocuments } from '../../queries/documents/listDocuments';
import { Table } from '@mantine/core';
import dayjs from 'dayjs';
import FileRow from './FileRow';

const DocumentsTable = () => {
  const { data: documents } = useQuery({
    queryKey: ['documents'],
    queryFn: listDocuments,
  });

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Dateiname</Table.Th>
          <Table.Th>Größe</Table.Th>
          <Table.Th>Erstellt</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {documents?.map((document) => (
          <Table.Tr key={document.filename}>
            <FileRow>{document.filename!}</FileRow>
            <Table.Td>{`${(document.size / 1024).toFixed(2)} KB`}</Table.Td>
            <Table.Td>
              {dayjs(document.created_at).format('DD.MM.YYYY')}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default DocumentsTable;
