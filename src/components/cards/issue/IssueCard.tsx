import { Alert, Divider, Paper, Stack, Text } from '@mantine/core';
import dayjs from 'dayjs';

import CardRow from '../../../layout/card/CardRow';
import MediaInfo from './MediaInfo';
import CardLabel from '../label/CardLabel';
import { ModalProvider } from '../../../context/ModalContext';
import MediaModal from '../../../modals/media/MediaModal';
import OverviewInfo from './OverviewInfo';
import StatusModal from '../../../modals/status/StatusModal';

import AdminOrTutorAnchor from '../../anchor/AdminOrTutorAnchor';
import { useCourseContext } from '../../../context/CourseContext';
import { IconAlertTriangle } from '@tabler/icons-react';

interface IProps {
  issue: IIssueReceive;
  isLoading: boolean;
}

const IssueCard = ({ issue, isLoading }: IProps) => {
  const { active } = useCourseContext();
  return (
    <Paper p="xs">
      {!active && issue ? (
        <Alert mb="xs" color="red" icon={<IconAlertTriangle size={20} />}>
          <Text c="red" size="sm">
            Der dieser Fehlermeldung zugewiesene Kurs ist inaktiv.
            Fehlermeldungen die diesen betreffen können nicht bearbeitet werden.
          </Text>
        </Alert>
      ) : null}
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
              color={issue?.course?.active! ? 'green' : 'red'}
              path={`/courses/${issue?.course?.id!}`}
            >{`${issue?.course.code!} - ${issue?.course
              .title!}`}</AdminOrTutorAnchor>
          }
          loading={isLoading}
        />
        <CardRow
          label="Tutor"
          value={
            <AdminOrTutorAnchor
              path={`/users/${issue?.course?.tutor?.id!}`}
            >{`${issue?.course.tutor.first_name} ${issue?.course?.tutor.last_name}`}</AdminOrTutorAnchor>
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
