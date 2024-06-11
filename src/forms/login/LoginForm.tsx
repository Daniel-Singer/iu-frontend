import {
  Anchor,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useEffect, useRef } from 'react';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import { authenticateUser } from '../../queries/auth/authenticateUser';
import axios from '../../axios';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value) =>
        !value || value === '' ? 'Benutzername erforderlich' : null,
      password: (value) =>
        !value || value === '' ? 'Passwort erforderlich' : null,
    },
  });

  const location = useLocation();

  const navigate = useNavigate();

  const { mutate: login } = useMutation({
    mutationFn: authenticateUser,
    onSuccess: (user) => {
      sessionStorage.setItem('auth_token', user.accessToken!);
      sessionStorage.setItem('auth', JSON.stringify(user));
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${user.accessToken}`;
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    },
  });
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <Paper p="md" w={400} withBorder>
      <form onSubmit={form.onSubmit((values) => login(values))}>
        <Stack>
          <Title style={{ alignSelf: 'center' }}>IU KMS</Title>
          <TextInput
            label="Benutzername oder E-Mail"
            withAsterisk
            ref={ref}
            {...form.getInputProps('username')}
          />
          <PasswordInput
            label="Passwort"
            withAsterisk
            {...form.getInputProps('password')}
          />
          <Anchor>Passwort vergessen?</Anchor>
          <SubmitButton>login</SubmitButton>
        </Stack>
      </form>
    </Paper>
  );
};

export default LoginForm;
