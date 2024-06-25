import { Group, PasswordInput, SimpleGrid, Stack, Text } from '@mantine/core';
import SubmitButton from '../../components/buttons/SubmitButton';

const PasswordForm = () => {
  return (
    <form>
      <Stack>
        <Text size="sm" c="green">
          Passwort ändern
        </Text>
        <SimpleGrid cols={2}>
          <PasswordInput label="Altes Passwort" />
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <PasswordInput label="Neues Passwort" />
          <PasswordInput label="Neues Passwort bestätigen" />
        </SimpleGrid>
        <Group>
          <SubmitButton>Passwort ändern</SubmitButton>
        </Group>
      </Stack>
    </form>
  );
};

export default PasswordForm;
