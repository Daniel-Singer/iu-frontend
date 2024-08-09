import { Group, PasswordInput, SimpleGrid, Stack, Text } from '@mantine/core';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useForm } from '@mantine/form';

const PasswordForm = () => {
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
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
          <SubmitButton>Passwort ändern</SubmitButton>
        </Group>
      </Stack>
    </form>
  );
};

export default PasswordForm;
