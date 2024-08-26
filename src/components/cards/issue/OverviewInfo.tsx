import { Group } from '@mantine/core';
import AdminOnly from '../../../auth/AdminOnly';
import CardRow from '../../../layout/card/CardRow';
import StatusLabel from '../../status/StatusLabel';
import CardLabel from '../label/CardLabel';
import EditButton from '../../buttons/EditButton';
import { useModalContext } from '../../../context/ModalContext';

interface IProps {
  issue: IIssueReceive;
  isLoading: boolean;
}

const OverviewInfo = ({ issue, isLoading }: IProps) => {
  const { toggleModal } = useModalContext();
  return (
    <>
      <CardLabel>Übersicht</CardLabel>
      <CardRow
        label="Status"
        value={
          <StatusLabel id={issue?.status?.id!} label={issue?.status?.label!} />
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
          <EditButton onClick={toggleModal} variant="light">
            status ändern
          </EditButton>
        </Group>
      </AdminOnly>
    </>
  );
};

export default OverviewInfo;
