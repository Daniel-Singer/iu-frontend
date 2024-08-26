import { useMutation, useQuery } from '@tanstack/react-query';
import { MediaFormProvider, useMediaForm } from './context';
import { useParams } from 'react-router-dom';
import { getIssueMedia } from '../../queries/media/getIssueMedia';
import { useEffect } from 'react';
import { Stack } from '@mantine/core';
import MediaSelect from './selects/MediaSelect';
import MediaDetailsInputs from './selects/MediaDetailsSelect';
import SubmitButton from '../../components/buttons/SubmitButton';
import { addMediaDescription } from '../../queries/media/addMediaDescription';
import { showNotification } from '../../helpers/notifications/showNotification';
import { useModalContext } from '../../context/ModalContext';

const MediaForm = () => {
  const params = useParams();
  const { toggleModal } = useModalContext();
  const { data: issue_media, isSuccess } = useQuery({
    queryKey: ['issue_media'],
    queryFn: () => getIssueMedia(params?.id!),
    enabled: !!params?.id,
  });
  const { mutate: addDescription } = useMutation({
    mutationFn: addMediaDescription,
    onSuccess: () => {
      showNotification(
        'success',
        'MEDIA',
        'Beschreibung erfolgreich hinhzugefügt'
      );
      toggleModal();
    },
    onError: (error: any) => console.log(error),
  });

  const form = useMediaForm({
    initialValues: {
      file_path: undefined,
      media_type: undefined,
      page: undefined,
      line: undefined,
      timestamp: undefined,
      url: undefined,
      label: undefined,
      chapter: undefined,
    },
  });
  useEffect(() => {
    if (issue_media && isSuccess) {
      form.setFieldValue('media_type', issue_media?.media_type!);
      form.resetDirty(issue_media);
    }
  }, [issue_media, isSuccess]);
  return (
    <MediaFormProvider form={form}>
      <form
        onSubmit={form.onSubmit((values) =>
          addDescription({ issue_id: params?.id!, ...values })
        )}
      >
        <Stack>
          <MediaSelect />
          <MediaDetailsInputs />
          <SubmitButton type="submit">speichern</SubmitButton>
        </Stack>
      </form>
    </MediaFormProvider>
  );
};

export default MediaForm;
