import { Anchor, Divider, Group } from '@mantine/core';
import CardRow from '../../../layout/card/CardRow';
import StatusLabel from '../../status/StatusLabel';
import CardLabel from '../label/CardLabel';
import EditButton from '../../buttons/EditButton';
import { useModalContext } from '../../../context/ModalContext';
import AdminAndTutorOnly from '../../../auth/AdminAndTutorOnly';
import { useNavigate } from 'react-router-dom';

interface IProps {
  issue: IIssueReceive;
  isLoading: boolean;
}

const OverviewInfo = ({ issue, isLoading }: IProps) => {
  const { toggleModal } = useModalContext();
  const navigate = useNavigate();
  return (
    <>
      <CardLabel>Übersicht</CardLabel>
      <CardRow
        label="Status"
        value={
          <StatusLabel id={issue?.status?.id!} label={issue?.status?.label!} />
        }
      />
      {issue?.status?.reason ? (
        <CardRow label="Begründung" value={issue?.status?.reason!} />
      ) : null}
      <AdminAndTutorOnly>
        <Group>
          <EditButton onClick={toggleModal} variant="light">
            status ändern
          </EditButton>
        </Group>
      </AdminAndTutorOnly>
      <Divider />
      <CardRow label="ID" value={issue?.id!} loading={isLoading} />
      <CardRow
        label="Eingereicht von"
        value={
          <Anchor
            c="green"
            onClick={() => navigate(`/users/${issue?.created_from?.id!}`)}
          >{`${issue?.created_from?.first_name!} ${issue?.created_from
            ?.last_name!}`}</Anchor>
        }
        loading={isLoading}
      />
      <CardRow label="Titel" value={issue?.title} loading={isLoading} />
      <CardRow label="Beschreibung" value={issue?.description} />
    </>
  );
};

export default OverviewInfo;
