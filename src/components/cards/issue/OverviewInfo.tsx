import { Divider, Group } from '@mantine/core';
import CardRow from '../../../layout/card/CardRow';
import StatusLabel from '../../status/StatusLabel';
import CardLabel from '../label/CardLabel';
import EditButton from '../../buttons/EditButton';
import { useModalContext } from '../../../context/ModalContext';
import AdminAndTutorOnly from '../../../auth/AdminAndTutorOnly';
import AdminOrTutorAnchor from '../../anchor/AdminOrTutorAnchor';
import { useCourseContext } from '../../../context/CourseContext';

interface IProps {
  issue: IIssueReceive;
  isLoading: boolean;
}

const OverviewInfo = ({ issue, isLoading }: IProps) => {
  const { toggleModal } = useModalContext();
  const { active } = useCourseContext();
  return (
    <>
      <CardLabel>Übersicht</CardLabel>
      <CardRow
        label="Status"
        value={
          <StatusLabel id={issue?.status?.id!} label={issue?.status?.label!} />
        }
        loading={isLoading}
      />
      {issue?.status?.reason ? (
        <CardRow
          label={issue.status?.id === 3 ? 'Ticketlösung' : 'Begründung'}
          value={issue?.status?.reason!}
          loading={isLoading}
        />
      ) : null}
      <AdminAndTutorOnly>
        <Group>
          <EditButton
            onClick={toggleModal}
            variant="light"
            disabled={!active && !isLoading}
          >
            status ändern
          </EditButton>
        </Group>
      </AdminAndTutorOnly>
      <Divider />
      <CardRow label="ID" value={issue?.id!} />
      <CardRow
        label="Eingereicht von"
        value={
          <AdminOrTutorAnchor
            path={`/users/${issue?.created_from?.id!}`}
          >{`${issue?.created_from?.first_name!} ${issue?.created_from
            ?.last_name!}`}</AdminOrTutorAnchor>
        }
        loading={isLoading}
      />
      <CardRow label="Titel" value={issue?.title} loading={isLoading} />
      <CardRow label="Beschreibung" value={issue?.description} />
    </>
  );
};

export default OverviewInfo;
