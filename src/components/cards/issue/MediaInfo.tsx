import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getIssueMedia } from '../../../queries/media/getIssueMedia';
import CardRow from '../../../layout/card/CardRow';
import { mediaDetailLabels, mediaLabels } from '../../../constants/media';
import { Group, Text, ThemeIcon } from '@mantine/core';

const MediaInfo = () => {
  const params = useParams();
  const { data: media } = useQuery({
    queryKey: ['issue_media'],
    queryFn: () => getIssueMedia(params?.id!),
    enabled: !!params?.id,
  });
  return (
    <>
      <CardRow
        label="Lehrmaterial"
        value={
          <Group>
            <ThemeIcon color="green" variant="light" size="sm">
              {mediaLabels[media?.media_type!]?.icon}
            </ThemeIcon>
            <Text>{mediaLabels[media?.media_type!]?.label!}</Text>
          </Group>
        }
      />
      {media?.page ? (
        <CardRow label={mediaDetailLabels.page} value={media?.page} />
      ) : null}
      {media?.line ? (
        <CardRow label={mediaDetailLabels.line} value={media?.line} />
      ) : null}
      {media?.url ? (
        <CardRow label={mediaDetailLabels.url} value={media?.url} />
      ) : null}
      {media?.chapter ? (
        <CardRow label={mediaDetailLabels.chapter} value={media?.chapter} />
      ) : null}
    </>
  );
};

export default MediaInfo;
