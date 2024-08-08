import { Box, Grid } from '@mantine/core';
import ScreenHeader from '../components/screen/ScreenHeader';
import ContactsTable from '../tables/messages/ContactsTable';
import MessageContainer from '../layout/messages/MessageContainer';

// TODO - Design des Nachrichten Screens mithilfe von Komponenten
// TODO - Implementierung der Abfrage an Server für neue Nachrichten

const MessagesScreen = () => {
  return (
    <>
      <ScreenHeader label="Nachrichten"></ScreenHeader>
      <Box flex={1}>
        <Grid style={{ height: '100%' }}>
          <Grid.Col span={3}>
            <ContactsTable />
          </Grid.Col>
          <Grid.Col span={9}>
            <MessageContainer />
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
};

export default MessagesScreen;
