import { useQuery } from '@tanstack/react-query';
import { getIssueMedia } from '../../queries/media/getIssueMedia';
import { useParams } from 'react-router-dom';
import { Alert, FileInput, Group, Stack, Table, Text } from '@mantine/core';
import { IconAlertCircle, IconPaperclip } from '@tabler/icons-react';
import ImageColumn from './ImageColumn';
import UploadButton from '../../components/buttons/UploadButton';
import { useForm } from '@mantine/form';

const MediaTable = () => {
  const params = useParams();
  const { data: media } = useQuery({
    queryKey: ['issue_media'],
    queryFn: () => getIssueMedia(params?.id!),
    enabled: !!params.id,
  });

  const form = useForm({
    initialValues: {
      attached_file: null,
    },
    validate: {
      attached_file: (value) => (!value ? 'Bitte Datei auswählen' : null),
    },
  });

  if (media?.file_path) {
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
            <Table.Tr>
              <ImageColumn media_label={media?.media_label!} id={media?.id!} />
              <Table.Td>{media?.mimetype!}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </>
    );
  } else {
    return (
      <Stack gap="xs" p="xs">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Group>
            <FileInput
              flex={1}
              leftSection={<IconPaperclip size={16} />}
              placeholder="Datei wählen"
              accept={'image/jpeg, image/png, application/pdf'}
              {...form.getInputProps('attached_file')}
            />
            <UploadButton type="submit">hochladen</UploadButton>
          </Group>
        </form>
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
