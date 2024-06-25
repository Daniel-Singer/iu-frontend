import { Group, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useForm } from '@mantine/form';
import { useAuthContext } from '../../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getMyAccount } from '../../queries/users/getMyAccount';

const AccountForm = () => {
  const { auth } = useAuthContext();
  const { data: myaccount, isSuccess } = useQuery({
    queryKey: ['myaccount'],
    queryFn: getMyAccount,
    enabled: !!auth?.id,
  });
  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
    },
  });

  useEffect(() => {
    if (isSuccess) {
      form.setFieldValue('first_name', myaccount?.first_name!);
      form.setFieldValue('last_name', myaccount?.last_name!);
      form.setFieldValue('username', myaccount?.username!);
      form.setFieldValue('email', myaccount?.email! ?? 'k.A.');
    }
  }, [isSuccess]);

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
