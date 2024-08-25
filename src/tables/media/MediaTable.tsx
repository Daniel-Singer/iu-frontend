import { useQuery } from '@tanstack/react-query';
import { getIssueMedia } from '../../queries/media/getIssueMedia';
import { useParams } from 'react-router-dom';
import { Alert, Group, Stack, Table, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import ImageColumn from './ImageColumn';
import UploadButton from '../../components/buttons/UploadButton';

const MediaTable = () => {
  const params = useParams();
  const { data: media } = useQuery({
    queryKey: ['issue_media'],
    queryFn: () => getIssueMedia(params?.id!),
    enabled: !!params.id,
  });

  if (media?.length! > 0) {
    return (
      <>
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
                <ImageColumn media_label={media_label!} id={id!} />
                <Table.Td>{mimetype}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </>
    );
  } else {
    return (
      <Stack gap="xs" p="xs">
        <Group justify="flex-end">
          <UploadButton>Datei hochladen</UploadButton>
        </Group>
        <Alert icon={<IconAlertCircle size={18} />}>
          <Text size="sm" c="blue">
            Keine Dateien für diese Fehlermeldung hinzugefügt
          </Text>
        </Alert>
      </Stack>
    );
  }
};

export default MediaTable;
