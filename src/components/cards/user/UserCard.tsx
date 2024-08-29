import { Paper, Stack } from '@mantine/core';
import CardRow from '../../../layout/card/CardRow';
import ActivateUserForm from '../../../forms/user/ActivateUserForm';
import AdminOnly from '../../../auth/AdminOnly';

type TProps = Partial<IUserCreate>;

const UserCard = ({
  first_name,
  last_name,
  matrikel_nr,
  role,
  active,
}: TProps) => {
  return (
    <Paper p="xs">
      <Stack>
        <CardRow label="Vorname" value={first_name} />
        <CardRow label="Nachname" value={last_name} />
        <CardRow label="Rolle" value={`${role!}`.toUpperCase()} />
        {matrikel_nr ? (
          <CardRow label="Matrikel Nr." value={matrikel_nr!} />
        ) : null}
        <AdminOnly>
          <ActivateUserForm active={active!} />
        </AdminOnly>
      </Stack>
    </Paper>
  );
};
export default UserCard;
