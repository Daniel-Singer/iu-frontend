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

const LoginForm = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <Paper p="md" w={400} withBorder>
      <form>
        <Stack>
          <Title style={{ alignSelf: 'center' }}>IU KMS</Title>
          <TextInput label="Benutzername oder E-Mail" withAsterisk ref={ref} />
          <PasswordInput label="Passwort" withAsterisk />
          <Anchor>Passwort vergessen?</Anchor>
          <SubmitButton>login</SubmitButton>
        </Stack>
      </form>
    </Paper>
  );
};

export default LoginForm;
