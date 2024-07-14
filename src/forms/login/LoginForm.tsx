import {
  Alert,
  Anchor,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useEffect, useRef, useState } from 'react';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import { authenticateUser } from '../../queries/auth/authenticateUser';
import axios from '../../axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconAlertTriangle } from '@tabler/icons-react';

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

  const [errorText, setErrorText] = useState<string | null>(null);

  // make authentication request
  const { mutate: login } = useMutation({
    mutationFn: authenticateUser,
    onSuccess: (user) => {
      setErrorText(null);
      sessionStorage.setItem('auth_token', user.accessToken!);
      sessionStorage.setItem('auth', JSON.stringify(user));
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${user.accessToken}`;

      // navigate to requested route in case user tried to access different page before authentication
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    },
    onError: (error: any) => {
      // handle 500 error, no connection to server
      if (error?.response?.status === 500) {
        setErrorText(
          'Etwas ist schief gelaufen. Bitte versuche es etwas später wieder'
        );
      } else {
        setErrorText(error?.response?.data?.message ?? null);
      }
      ref.current?.focus();
    },
  });

  // set focus on username input when after page render
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Paper p="md" w={400} withBorder>
      <form onSubmit={form.onSubmit((values) => login(values))}>
        <Stack>
          <Title style={{ alignSelf: 'center' }}>IU KMS</Title>
          {errorText ? (
            <Alert color="red" icon={<IconAlertTriangle size={20} />}>
              <Text size="sm" c="red">
                {errorText}
              </Text>
            </Alert>
          ) : null}
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
