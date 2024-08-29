import { Alert, Center, Loader, Table, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { useQuery } from '@tanstack/react-query';
import { listDocuments } from '../../queries/documents/listDocuments';
import FileRow from './FileRow';

import classes from './DocumentsTable.module.css';
import { IconAlertCircle } from '@tabler/icons-react';

const DocumentsTable = () => {
  const { data: documents, isLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: listDocuments,
  });

  if (isLoading) {
    return (
      <Center h={200}>
        <Loader />
      </Center>
    );
  } else {
    if (documents?.length! > 0) {
      return (
        <Table className={classes.table}>
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
    } else {
      return (
        <Alert icon={<IconAlertCircle size={20} />}>
          <Text size="sm" c="blue">
            Keine Dokumente zum Download verfügbar
          </Text>
        </Alert>
      );
    }
  }
};

export default DocumentsTable;
