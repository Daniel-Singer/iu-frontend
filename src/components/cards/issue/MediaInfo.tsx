import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getIssueMedia } from '../../../queries/media/getIssueMedia';
import CardRow from '../../../layout/card/CardRow';
import { mediaDetailLabels, mediaLabels } from '../../../constants/media';
import { Divider, Group, Text, ThemeIcon } from '@mantine/core';
import CardLabel from '../label/CardLabel';
import EditButton from '../../buttons/EditButton';
import { useModalContext } from '../../../context/ModalContext';

const MediaInfo = () => {
  const params = useParams();
  const { data: media } = useQuery({
    queryKey: ['issue_media'],
    queryFn: () => getIssueMedia(params?.id!),
    enabled: !!params?.id,
  });
  const { toggleModal } = useModalContext();
  if (!media?.id) {
    return (
      <>
        <Divider />
        <CardLabel>Medium</CardLabel>
        <Text size="sm" c="red">
          Noch keine Details zur Identifikation des Fehlers in Kursmedien
          hinzugefügt
        </Text>
        <Group>
          <EditButton onClick={toggleModal} variant="light">
            Details ändern
          </EditButton>
        </Group>
      </>
    );
  } else {
    return (
      <>
        <Divider />
        <CardLabel>Medium</CardLabel>
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
        <Group>
          <EditButton onClick={toggleModal} variant="light">
            Details ändern
          </EditButton>
        </Group>
      </>
    );
  }
};

export default MediaInfo;
