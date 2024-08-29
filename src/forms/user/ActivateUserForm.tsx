import { Stack, Switch } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setUsersActiveStatus } from '../../queries/users/setUsersActiveStatus';
import { useParams } from 'react-router-dom';
import { showNotification } from '../../helpers/notifications/showNotification';
interface IProps {
  active: boolean;
}

const ActivateUserForm = ({ active }: IProps) => {
  const params = useParams();
  const queryClient = useQueryClient();
  const { mutate: changeActiveStatus } = useMutation({
    mutationFn: setUsersActiveStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
      showNotification(
        'success',
        'AKTIV/INAKTIV',
        'User Status erfolgreich geändert'
      );
    },
    onError: () => {
      showNotification(
        'error',
        'AKTIV/INAKTIV',
        'User Status konnte nicht geändert werden'
      );
    },
  });
  return (
    <form>
      <Stack>
        <Switch
          label="Aktiv"
          checked={active}
          onChange={() => changeActiveStatus(params?.id!)}
          description="Ist User Inaktiv, kann dieser nicht auf die Plattform zugreifen"
        />
      </Stack>
    </form>
  );
};

export default ActivateUserForm;
