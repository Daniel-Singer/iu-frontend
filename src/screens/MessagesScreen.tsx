import { Box, Grid } from '@mantine/core';
import ScreenHeader from '../components/screen/ScreenHeader';
import ContactsTable from '../tables/messages/ContactsTable';

// TODO - Design des Nachrichten Screens mithilfe von Komponenten
// TODO - Implementierung der Abfrage an Server für neue Nachrichten

const MessagesScreen = () => {
  return (
    <>
      <ScreenHeader label="Nachrichten"></ScreenHeader>
      <Box flex={1}>
        <Grid>
          <Grid.Col span={3}>
            <ContactsTable />
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
};

export default MessagesScreen;
