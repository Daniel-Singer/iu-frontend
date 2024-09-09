import { Anchor, Divider, Paper, Stack } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';

import CardRow from '../../../layout/card/CardRow';
import MediaInfo from './MediaInfo';
import CardLabel from '../label/CardLabel';
import { ModalProvider } from '../../../context/ModalContext';
import MediaModal from '../../../modals/media/MediaModal';
import OverviewInfo from './OverviewInfo';
import StatusModal from '../../../modals/status/StatusModal';

import { getIssue } from '../../../queries/issues/getIssue';
import AdminOrTutorAnchor from '../../anchor/AdminOrTutorAnchor';

const IssueCard = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: issue, isLoading } = useQuery({
    queryKey: ['issue'],
    queryFn: () => getIssue(params.id!),
    enabled: !!params.id,
  });
  return (
    <Paper p="xs">
      <Stack>
        <ModalProvider>
          <StatusModal />
          <OverviewInfo issue={issue!} isLoading={isLoading} />
        </ModalProvider>
        <ModalProvider>
          <MediaModal />
          <MediaInfo />
        </ModalProvider>
        <Divider />
        <CardLabel>Kursinformationen</CardLabel>
        <CardRow
          label="Kurs"
          value={
            <AdminOrTutorAnchor
              path={`/courses/${issue?.course?.id!}`}
            >{`${issue?.course.code!} - ${issue?.course
              .title!}`}</AdminOrTutorAnchor>
          }
          loading={isLoading}
        />
        <CardRow
          label="Tutor"
          value={
            <Anchor
              c="green"
              onClick={() => navigate(`/users/${issue?.course?.tutor?.id!}`)}
            >{`${issue?.course.tutor.first_name} ${issue?.course?.tutor.last_name}`}</Anchor>
          }
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
      </Stack>
    </Paper>
  );
};

export default IssueCard;
