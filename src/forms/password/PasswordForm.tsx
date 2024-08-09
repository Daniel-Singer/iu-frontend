import { Group, PasswordInput, SimpleGrid, Stack, Text } from '@mantine/core';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import { updateAccount } from '../../queries/users/updateAccount';
import { useAuthContext } from '../../context/AuthContext';
import { showNotification } from '../../helpers/notifications/showNotification';

const PasswordForm = () => {
  const { auth } = useAuthContext();
  const form = useForm({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validate: {
      currentPassword: (value) =>
        !value || value === '' ? 'Bitte Passwort angeben' : null,
      newPassword: (value, values) => {
        if (!value || value === '') {
          return 'Neues Passwort muss angegeben werden';
        } else if (value !== values.confirmNewPassword) {
          return 'Die Passwörter stimmen nicht überein';
        } else {
          return null;
        }
      },
      confirmNewPassword: (value, values) => {
        if (!value || value === '') {
          return 'Neues Passwort muss bestätigt werden';
        } else if (value !== values.newPassword) {
          return 'Die Passwörter stimmen nicht überein';
        } else {
          return null;
        }
      },
    },
  });

  const { mutate: updatePassword } = useMutation({
    mutationFn: updateAccount,
    onSuccess: () => {
      showNotification(
        'success',
        'USER ACCOUNT',
        'Passwort Update erfolgreich!'
      );
      form.reset();
    },
    onError: (error: any) => {
      console.log(error);
      showNotification(
        'error',
        'FEHLER',
        error?.response?.data?.message ?? 'Passwort Update fehlgeschlagen'
      );
    },
  });
  return (
    <form
      onSubmit={form.onSubmit((values) =>
        updatePassword({ id: auth.id!, update: values })
      )}
    >
      <Stack>
        <Text size="sm" c="green">
          Passwort ändern
        </Text>
        <SimpleGrid cols={2}>
          <PasswordInput
            label="Altes Passwort"
            {...form.getInputProps('currentPassword')}
          />
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <PasswordInput
            label="Neues Passwort"
            {...form.getInputProps('newPassword')}
          />
          <PasswordInput
            label="Neues Passwort bestätigen"
            {...form.getInputProps('confirmNewPassword')}
          />
        </SimpleGrid>
        <Group>
          <SubmitButton type="submit">Passwort ändern</SubmitButton>
        </Group>
      </Stack>
    </form>
  );
};

export default PasswordForm;
