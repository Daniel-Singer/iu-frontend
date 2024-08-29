import {
  Divider,
  Group,
  Paper,
  PasswordInput,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import SubmitButton from '../../components/buttons/SubmitButton';

const ResetPasswordForm = () => {
  const form = useForm({
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
      ownPassword: '',
    },
  });
  return (
    <Paper p="xs">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
              {...form.getInputProps('confirmNewPassword')}
            />
          </Group>
          <Divider />
          <Text c="blue">AUTHENTIFIZIERUNG</Text>
          <Text size="xs" c="red">
            Um das Passwort eines Users zurückzusetzen muss ein
            Idenditätsnachweis erfolgen. Bitte geben Sie ihr Passwort an.
          </Text>
          <SimpleGrid cols={2}>
            <PasswordInput
              label="Passwort"
              {...form.getInputProps('ownPassword')}
            />
          </SimpleGrid>
          <Space />
          <Group>
            <SubmitButton>Passwort zurücksetzen</SubmitButton>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
};

export default ResetPasswordForm;
