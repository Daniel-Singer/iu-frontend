import { Group, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useForm } from '@mantine/form';

const AccountForm = () => {
  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack>
        <Text size="sm" c="green">
          Stammdaten
        </Text>
        <Group grow>
          <TextInput
            label="Vorname"
            {...form.getInputProps('first_name')}
            withAsterisk
          />
          <TextInput
            label="Nachname"
            {...form.getInputProps('last_name')}
            withAsterisk
          />
        </Group>
        <SimpleGrid cols={2}>
          <TextInput label="Benutzername" {...form.getInputProps('username')} />
          <TextInput label="E-Mail" {...form.getInputProps('email')} />
        </SimpleGrid>
        <Group>
          <SubmitButton>Stammdaten ändern</SubmitButton>
        </Group>
      </Stack>
    </form>
  );
};

export default AccountForm;
