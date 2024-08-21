import { useQuery } from '@tanstack/react-query';
import { getIssueMedia } from '../../queries/media/getIssueMedia';
import { useParams } from 'react-router-dom';
import { Alert, Anchor, Table, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

const MediaTable = () => {
  const params = useParams();
  const { data: media } = useQuery({
    queryKey: ['issue_media'],
    queryFn: () => getIssueMedia(params?.id!),
    enabled: !!params.id,
  });
  if (media?.length! > 0) {
    return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Bezeichnung</Table.Th>
            <Table.Th>Typ</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {media?.map(({ id, media_label, mimetype }) => (
            <Table.Tr key={id}>
              <Table.Td>
                <Anchor size="sm">{media_label}</Anchor>
              </Table.Td>
              <Table.Td>{mimetype}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    );
  } else {
    return (
      <Alert icon={<IconAlertCircle size={18} />}>
        <Text size="sm" c="blue">
          Keine Dateien für diese Fehlermeldung hinzugefügt
        </Text>
      </Alert>
    );
  }
};

export default MediaTable;
