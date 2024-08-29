import { Paper, Stack } from '@mantine/core';
import CardRow from '../../../layout/card/CardRow';
import ActivateUserForm from '../../../forms/user/ActivateUserForm';

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
        <ActivateUserForm active={active!} />
      </Stack>
    </Paper>
  );
};
export default UserCard;
