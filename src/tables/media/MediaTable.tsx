import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Alert, FileInput, Group, Stack, Table, Text } from '@mantine/core';
import { IconAlertCircle, IconPaperclip } from '@tabler/icons-react';
import ImageColumn from './ImageColumn';
import UploadButton from '../../components/buttons/UploadButton';
import { useForm } from '@mantine/form';
import { uploadMedia } from '../../queries/media/uploadMedia';
import { showNotification } from '../../helpers/notifications/showNotification';
import { getMediaFileInfo } from '../../queries/media/getMediaFileInfo';

const MediaTable = () => {
  const params = useParams();
  const queryClient = useQueryClient();

  const { data: media } = useQuery({
    queryKey: ['media'],
    queryFn: () => getMediaFileInfo(params?.id!),
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

  const { mutate: uploadFile } = useMutation({
    mutationFn: uploadMedia,
    onSuccess: () => {
      form.reset();
      showNotification('success', 'DATEI', `Upload erfolgreich!`);
      queryClient.invalidateQueries({
        queryKey: ['issue_media'],
      });
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message ?? 'Uplaod fehlgechlagen!';
      form.reset();
      showNotification('error', 'DATEI', message);
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
              <ImageColumn media_label={media?.name!} id={media?.id!} />
              <Table.Td>{media?.mimetype!}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </>
    );
  } else {
    return (
      <Stack gap="xs" p="xs">
        <form
          onSubmit={form.onSubmit((values) =>
            uploadFile({
              id: params?.id!,
              attached_file: values.attached_file!,
            })
          )}
        >
          <Group>
            <FileInput
              flex={1}
              leftSection={<IconPaperclip size={16} />}
              placeholder="Datei wählen"
              accept={'image/jpeg, image/png, application/pdf'}
              {...form.getInputProps('attached_file')}
              clearable
            />
            <UploadButton disabled={!form.values.attached_file} type="submit">
              hochladen
            </UploadButton>
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
