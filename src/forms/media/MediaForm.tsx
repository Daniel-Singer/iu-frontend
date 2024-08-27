import { useMutation, useQuery } from '@tanstack/react-query';
import { MediaFormProvider, TMediaFormValues, useMediaForm } from './context';
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
      issue_id: undefined,
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

  const handleSubmit = (values: TMediaFormValues) => {
    let data: any = { ...values };
    for (let key in values) {
      //@ts-ignore
      if (values[key] === '') {
        //@ts-ignore
        data[key] = undefined;
      }
    }
    addDescription({ ...data, issue_id: params?.id! });
  };

  useEffect(() => {
    if (issue_media && isSuccess) {
      form.setValues(issue_media);
      form.resetDirty();
    } else {
      form.reset();
    }
  }, [issue_media, isSuccess]);
  return (
    <MediaFormProvider form={form}>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack>
          <MediaSelect />
          <MediaDetailsInputs />
          <SubmitButton type="submit">
            {!form.values?.issue_id ? 'Update' : 'Speichern'}
          </SubmitButton>
        </Stack>
      </form>
    </MediaFormProvider>
  );
};

export default MediaForm;
