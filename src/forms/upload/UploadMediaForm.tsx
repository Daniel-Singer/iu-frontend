import { useForm } from '@mantine/form';
import { checkAttackedFileExtension } from '../../helpers/issue/checkAttachedFileExtension';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadMedia } from '../../queries/media/uploadMedia';
import { showNotification } from '../../helpers/notifications/showNotification';
import { useParams } from 'react-router-dom';
import { FileInput, Group } from '@mantine/core';
import { IconPaperclip } from '@tabler/icons-react';
import { useCourseContext } from '../../context/CourseContext';
import UploadButton from '../../components/buttons/UploadButton';

interface IFormValues {
  attached_file: any;
}

const UploadMediaForm = () => {
  const queryClient = useQueryClient();
  const params = useParams();
  const { active } = useCourseContext();
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
  return (
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
          disabled={!active}
        />
        <UploadButton
          disabled={!form.values.attached_file || !active}
          type="submit"
        >
          hochladen
        </UploadButton>
      </Group>
    </form>
  );
};

export default UploadMediaForm;
