import { Paper, ScrollArea } from '@mantine/core';
import ScreenHeader from '../components/screen/ScreenHeader';
import DocumentsTable from '../tables/documents/DocumentsTable';

const DocumentsScreen = () => {
  return (
    <>
      <ScreenHeader label="Verfügbare Dokumente" />
      <ScrollArea.Autosize>
        <Paper flex={1}>
          <DocumentsTable />
        </Paper>
      </ScrollArea.Autosize>
    </>
  );
};
export default DocumentsScreen;
