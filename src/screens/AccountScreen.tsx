import { Paper, SimpleGrid, Stack } from '@mantine/core';
import ScreenHeader from '../components/screen/ScreenHeader';
import AccountForm from '../forms/account/AccountForm';
import PasswordForm from '../forms/password/PasswordForm';

// TODO - Logik für Passwortänderung Implementieren. Muss
//        auch im Backend erstellt werden

const AccountScreen = () => {
  return (
    <>
      <ScreenHeader label="Mein Account"></ScreenHeader>
      <SimpleGrid cols={2}>
        <Paper p="xs">
          <Stack>
            <AccountForm />
            <PasswordForm />
          </Stack>
        </Paper>
      </SimpleGrid>
    </>
  );
};

export default AccountScreen;
