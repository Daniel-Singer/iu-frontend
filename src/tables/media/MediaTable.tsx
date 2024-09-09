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
import { checkAttackedFileExtension } from '../../helpers/issue/checkAttachedFileExtension';

interface IFormValues {
  attached_file: any;
}

const MediaTable = () => {
  const params = useParams();
  const queryClient = useQueryClient();

  const { data: media, isLoading } = useQuery({
    queryKey: ['media'],
    queryFn: () => getMediaFileInfo(params?.id!),
    enabled: !!params.id,
  });

  const form = useForm<IFormValues>({
    initialValues: {
      attached_file: null,
    },
    validate: {
      // attached_file: (value) => (!value ? 'Bitte Datei auswählen' : null),
      attached_file: (value) => {
        if (value) {
          const isAllowed = checkAttackedFileExtension({
            name: value.name,
            allowed: ['.png', '.jpg', '.jpeg'],
          });
          return isAllowed ? null : 'Ungültiges Dateiformat';
        } else {
          return 'Bitte Datei wählen';
        }
      },
    },
  });

  const { mutate: uploadFile } = useMutation({
    mutationFn: uploadMedia,
    onSuccess: () => {
      form.reset();
      showNotification('success', 'DATEI', `Upload erfolgreich!`);
      queryClient.invalidateQueries({
        queryKey: ['media'],
      });
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message ?? 'Uplaod fehlgechlagen!';
      form.reset();
      showNotification('error', 'DATEI', message);
    },
  });

  if (media?.length! > 0 && !isLoading) {
    return (
      <Stack gap="xs">
        <form
          onSubmit={form.onSubmit((values) =>
            uploadFile({
              id: params?.id!,
              attached_file: values.attached_file!,
            })
          )}
        >
          <Group align="end" p="xs">
            <FileInput
              flex={1}
              leftSection={<IconPaperclip size={16} />}
              placeholder="Datei wählen"
              description="Es sind nur JPEG und PNG Dateien erlaubt"
              accept={'image/jpeg, image/png'}
              {...form.getInputProps('attached_file')}
              clearable
            />
            <UploadButton disabled={!form.values.attached_file} type="submit">
              hochladen
            </UploadButton>
          </Group>
        </form>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Bezeichnung</Table.Th>
              <Table.Th>Typ</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {media?.map((element) => (
              <Table.Tr key={element.id!}>
                <ImageColumn media_label={element?.name!} id={element?.id!} />
                <Table.Td>{element?.mimetype!}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Stack>
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
