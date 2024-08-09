import { Group, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useForm } from '@mantine/form';
import { useAuthContext } from '../../context/AuthContext';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getMyAccount } from '../../queries/users/getMyAccount';
import { updateAccount } from '../../queries/users/updateAccount';
import { showNotification } from '../../helpers/notifications/showNotification';

const AccountForm = () => {
  const { auth } = useAuthContext();
  const queryClient = useQueryClient();
  const { data: myaccount, isSuccess } = useQuery({
    queryKey: ['myaccount'],
    queryFn: getMyAccount,
    enabled: !!auth?.id,
  });
  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
    },
  });

  const { mutate: updateUserData } = useMutation({
    mutationFn: updateAccount,
    onSuccess: () => {
      showNotification(
        'success',
        'UPDATE ERFOLGREICH',
        'Dein Daten wurden erfolgreich geändert'
      );
      queryClient.invalidateQueries({ queryKey: ['myaccount'] });
    },
    onError: (error: any) => {
      showNotification(
        'error',
        'UPDATE FEHLGESCHLAGEN',
        error?.response?.data?.message ??
          'Deine Daten konnten nicht geändert werden'
      );
    },
  });

  useEffect(() => {
    if (isSuccess) {
      form.setFieldValue('first_name', myaccount?.first_name!);
      form.setFieldValue('last_name', myaccount?.last_name!);
      form.setFieldValue('username', myaccount?.username!);
      form.setFieldValue('email', myaccount?.email! ?? 'k.A.');
    }
  }, [isSuccess]);

  return (
    <form
      onSubmit={form.onSubmit((values) =>
        updateUserData({ id: auth.id, update: values })
      )}
    >
      <Stack>
        <Text size="sm" c="green">
          Stammdaten
        </Text>
        <Group grow>
          <TextInput
            label="Vorname"
            {...form.getInputProps('first_name')}
            withAsterisk
          />
          <TextInput
            label="Nachname"
            {...form.getInputProps('last_name')}
            withAsterisk
          />
        </Group>
        <SimpleGrid cols={2}>
          <TextInput label="Benutzername" {...form.getInputProps('username')} />
          <TextInput label="E-Mail" {...form.getInputProps('email')} />
        </SimpleGrid>
        <Group>
          <SubmitButton type="submit">Stammdaten ändern</SubmitButton>
        </Group>
      </Stack>
    </form>
  );
};

export default AccountForm;
