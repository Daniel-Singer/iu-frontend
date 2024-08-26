import { useQuery } from '@tanstack/react-query';
import { MediaFormProvider, useMediaForm } from './context';
import { useParams } from 'react-router-dom';
import { getIssueMedia } from '../../queries/media/getIssueMedia';
import { useEffect } from 'react';
import { Stack } from '@mantine/core';
import MediaSelect from './selects/MediaSelect';
import MediaDetailsInputs from './selects/MediaDetailsSelect';

const MediaForm = () => {
  const params = useParams();
  const { data: issue_media, isSuccess } = useQuery({
    queryKey: ['issue_media'],
    queryFn: () => getIssueMedia(params?.id!),
    enabled: !!params?.id,
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
      <form>
        <Stack>
          <MediaSelect />
          <MediaDetailsInputs />
        </Stack>
      </form>
    </MediaFormProvider>
  );
};

export default MediaForm;
