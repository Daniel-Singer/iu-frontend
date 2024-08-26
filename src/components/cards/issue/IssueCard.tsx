import { Divider, Group, Paper, Stack } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getIssue } from '../../../queries/issues/getIssue';
import { useParams } from 'react-router-dom';
import CardRow from '../../../layout/card/CardRow';
import dayjs from 'dayjs';
import { useState } from 'react';
import CommentButton from '../../buttons/CommentButton';
import EditButton from '../../buttons/EditButton';
import CommentModal from '../../../modals/comment/CommentModal';
import StatusLabel from '../../status/StatusLabel';
import MediaInfo from './MediaInfo';
import CardLabel from '../label/CardLabel';
import AdminOnly from '../../../auth/AdminOnly';
import { ModalProvider } from '../../../context/ModalContext';
import MediaModal from '../../../modals/media/MediaModal';

const IssueCard = () => {
  const [commentOpen, setCommentOpen] = useState<boolean>(false);

  const params = useParams();
  const { data: issue, isLoading } = useQuery({
    queryKey: ['issue'],
    queryFn: () => getIssue(params.id!),
    enabled: !!params.id,
  });
  return (
    <Paper p="xs">
      <CommentModal
        open={commentOpen}
        toggle={() => setCommentOpen(!commentOpen)}
      />
      {/* <ModalProvider>
        <IssueEditModal open={editOpen} toggle={() => setEditOpen(!editOpen)} />
      </ModalProvider> */}
      <Stack>
        <CardLabel>Übersicht</CardLabel>
        <CardRow
          label="Status"
          value={
            <StatusLabel
              id={issue?.status?.id!}
              label={issue?.status?.label!}
            />
          }
        />
        <CardRow label="ID" value={issue?.id!} loading={isLoading} />
        <CardRow
          label="Eingereicht von"
          value={`${issue?.created_from?.first_name!} ${issue?.created_from
            ?.last_name!}`}
          loading={isLoading}
        />
        <CardRow label="Titel" value={issue?.title} loading={isLoading} />
        <CardRow label="Beschreibung" value={issue?.description} />
        <AdminOnly>
          <Group>
            <EditButton variant="light">status ändern</EditButton>
          </Group>
        </AdminOnly>
        <ModalProvider>
          <MediaModal />
          <MediaInfo />
        </ModalProvider>
        <Divider />
        <CardLabel>Kursinformationen</CardLabel>
        <CardRow
          label="Kurs"
          value={`${issue?.course.code!} - ${issue?.course.title!}`}
          loading={isLoading}
        />
        <CardRow
          label="Tutor"
          value={`${issue?.course.tutor.first_name} ${issue?.course?.tutor.last_name}`}
          loading={isLoading}
        />
        <Divider />
        <CardLabel>Zusätzliche Informationen</CardLabel>
        <CardRow
          label="Erstellt"
          value={dayjs(issue?.created_at).format('DD.MM.YYYY')}
        />
        <CardRow
          label="Letzte Änderung"
          value={dayjs(issue?.updated_at).format('DD.MM.YYYY')}
        />
        <Divider />
      </Stack>
      <Group mt="sm" justify="space-between">
        <CommentButton
          color="blue"
          onClick={() => setCommentOpen(!commentOpen)}
        >
          Kommentieren
        </CommentButton>
      </Group>
    </Paper>
  );
};

export default IssueCard;
