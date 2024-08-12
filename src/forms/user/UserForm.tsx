import {
  NumberInput,
  PasswordInput,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import SubmitButton from '../../components/buttons/SubmitButton';

const roles = [
  {
    value: 'student',
    label: 'Student',
  },
  {
    value: 'tutor',
    label: 'Tutor',
  },
  {
    value: 'admin',
    label: 'Admin',
  },
];

const UserForm = () => {
  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      role: '',
      matrikel_nr: null,
      password: '',
      confirmPassword: '',
    },
    validate: {
      first_name: (value) =>
        value && value !== '' ? null : 'Vorname erforderlich',
      last_name: (value) =>
        value && value !== '' ? null : 'Nachname erforderlich',
      username: (value) =>
        value && value !== '' ? null : 'Username erforderlich',
      email: (value) => (value && value !== '' ? null : 'E-Mail erforderlich'),
      role: (value) => (value && value !== '' ? null : 'Rolle erforderlich'),
      matrikel_nr: (value, values) => {
        if (values.role !== 'student') {
          return null;
        } else {
          if (value) {
            return null;
          }
          return 'Matrikel Nr. erforderlich';
        }
      },
      password: (value) =>
        value && value !== '' ? null : 'Passwort erforderlich',
      confirmPassword: (value, values) => {
        if (!value || value === '') {
          return 'Neues Passwort muss bestätigt werden';
        } else if (value !== values.confirmPassword) {
          return 'Die Passwörter stimmen nicht überein';
        } else {
          return null;
        }
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack gap="xs">
        <SimpleGrid cols={2}>
          <TextInput
            label="Vorname"
            withAsterisk
            data-autofocus
            {...form.getInputProps('first_name')}
          />
          <TextInput
            label="Nachname"
            withAsterisk
            {...form.getInputProps('last_name')}
          />
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <TextInput
            label="Username"
            withAsterisk
            {...form.getInputProps('username')}
          />
          <TextInput
            label="E-Mail"
            withAsterisk
            {...form.getInputProps('email')}
          />
        </SimpleGrid>
        <Select
          label="Rolle"
          withAsterisk
          data={roles}
          allowDeselect={false}
          {...form.getInputProps('role')}
        />
        {form.values.role === 'student' ? (
          <NumberInput
            label="Matrikel Nr."
            min={0}
            withAsterisk
            {...form.getInputProps('matrikel_nr')}
          />
        ) : null}
        <SimpleGrid cols={2}>
          <PasswordInput label="Passwort" withAsterisk />
          <PasswordInput label="Passwort bestätigen" withAsterisk />
        </SimpleGrid>
        <Text size="xs" c="dimmed">
          Passwort kann später von User geändert werden
        </Text>
        <SubmitButton type="submit">Speichern</SubmitButton>
      </Stack>
    </form>
  );
};

export default UserForm;
