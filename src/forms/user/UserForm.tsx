import {
  Alert,
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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUser } from '../../queries/users/addUser';
import { useModalContext } from '../../context/ModalContext';
import { showNotification } from '../../helpers/notifications/showNotification';
import { useRef, useState } from 'react';
import { IconAlertTriangle } from '@tabler/icons-react';
import { useAuthContext } from '../../context/AuthContext';

interface IRoleSelectElements {
  [key: string]: { value: string; label: string }[];
}

const roles: IRoleSelectElements = {
  tutor: [
    {
      value: 'student',
      label: 'Student',
    },
    {
      value: 'tutor',
      label: 'Tutor',
    },
  ],
  admin: [
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
  ],
};

const UserForm = () => {
  const { toggleModal } = useModalContext();
  const { auth } = useAuthContext();
  const queryClient = useQueryClient();
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const [displayError, setDisplayError] = useState<string | undefined>(
    undefined
  );
  const form = useForm<TUserCreate>({
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

  const { mutate: createUser } = useMutation({
    mutationFn: addUser,
    onSuccess: (user) => {
      toggleModal();
      queryClient.invalidateQueries({
        queryKey: ['students'],
      });
      queryClient.invalidateQueries({
        queryKey: ['tutors'],
      });
      showNotification(
        'success',
        'USER',
        `User ${user.first_name} ${user.last_name} erfolgreich hinzugefügt`
      );
    },
    onError: (error: any) => {
      if (error.response.status === 409) {
        setDisplayError(
          error?.response?.data?.message ?? 'User existiert bereits'
        );
        firstNameRef.current?.focus();
        setTimeout(() => setDisplayError(undefined), 2000);
      } else {
        showNotification(
          'error',
          'FEHLER',
          error?.response?.data?.message ?? 'User konnte nicht angelegt werden'
        );
      }
    },
  });

  const handleSubmit = (values: TUserCreate) => {
    createUser(values);
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack gap="xs">
        {displayError ? (
          <Alert icon={<IconAlertTriangle size={20} />} color="red">
            <Text c="red" size="sm">
              {displayError}
            </Text>
          </Alert>
        ) : null}
        <SimpleGrid cols={2}>
          <TextInput
            label="Vorname"
            withAsterisk
            data-autofocus
            {...form.getInputProps('first_name')}
            ref={firstNameRef}
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
          data={roles[auth?.role!]}
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
          <PasswordInput
            label="Passwort"
            withAsterisk
            {...form.getInputProps('password')}
          />
          <PasswordInput
            label="Passwort bestätigen"
            withAsterisk
            {...form.getInputProps('confirmPassword')}
          />
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
