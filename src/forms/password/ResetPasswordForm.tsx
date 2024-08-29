import { Group, Paper, PasswordInput, Stack, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { resetPassword } from '../../queries/users/resetPassword';
import { showNotification } from '../../helpers/notifications/showNotification';

const ResetPasswordForm = () => {
  const params = useParams();
  const form = useForm({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validate: {
      newPassword: (value, values) => {
        if (!value || value === '') {
          return 'Neues Passwort muss angegeben werden';
        } else if (value !== values.confirmPassword) {
          return 'Die Passwörter stimmen nicht überein';
        } else {
          return null;
        }
      },
      confirmPassword: (value, values) => {
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

  const { mutate: passwordReset } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      form.reset();
      showNotification(
        'success',
        'UPDATE',
        'Passwort wurde erfolgreich zurückgesetzt'
      );
    },
    onError: (error: any) => {
      form.reset();
      const message =
        error?.response?.data?.message ??
        'Passwort konnte nicht zurückgesetzt werden';
      showNotification('error', 'FEHLER', message);
    },
  });
  return (
    <Paper p="xs">
      <form
        onSubmit={form.onSubmit((values) =>
          passwordReset({ id: params?.id!, ...values })
        )}
      >
        <Stack>
          <Text c="blue">PASSWORT ZURÜCKSETZEN</Text>
          <Group grow>
            <PasswordInput
              label="Neues Passwort"
              withAsterisk
              {...form.getInputProps('newPassword')}
            />
            <PasswordInput
              label="Passwort bestätigen"
              withAsterisk
              {...form.getInputProps('confirmPassword')}
            />
          </Group>
          <Group>
            <SubmitButton disabled={!form.isDirty()}>
              Passwort zurücksetzen
            </SubmitButton>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
};

export default ResetPasswordForm;
