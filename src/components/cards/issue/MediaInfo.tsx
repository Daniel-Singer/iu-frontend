import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getIssueMedia } from '../../../queries/media/getIssueMedia';
import CardRow from '../../../layout/card/CardRow';
import { mediaLabels } from '../../../constants/media';
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
    </>
  );
};

export default MediaInfo;
