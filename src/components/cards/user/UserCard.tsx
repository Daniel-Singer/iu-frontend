import { Paper, Stack } from '@mantine/core';
import CardRow from '../../../layout/card/CardRow';
import ActivateUserForm from '../../../forms/user/ActivateUserForm';
import AdminOnly from '../../../auth/AdminOnly';

type TProps = Partial<IUserCreate> & { loading?: boolean };

const UserCard = ({
  first_name,
  last_name,
  matrikel_nr,
  role,
  active,
  loading,
}: TProps) => {
  return (
    <Paper p="xs">
      <Stack>
        <CardRow label="Vorname" value={first_name} loading={loading} />
        <CardRow label="Nachname" value={last_name} loading={loading} />
        <CardRow
          label="Rolle"
          value={`${role!}`.toUpperCase()}
          loading={loading}
        />
        {matrikel_nr ? (
          <CardRow
            label="Matrikel Nr."
            value={matrikel_nr!}
            loading={loading}
          />
        ) : null}
        <AdminOnly>
          <ActivateUserForm active={active!} />
        </AdminOnly>
      </Stack>
    </Paper>
  );
};
export default UserCard;
