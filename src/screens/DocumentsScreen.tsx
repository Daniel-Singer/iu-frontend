import { Paper, ScrollArea } from '@mantine/core';
import ScreenHeader from '../components/screen/ScreenHeader';

const DocumentsScreen = () => {
  return (
    <>
      <ScreenHeader label="Dokumente" />
      <ScrollArea.Autosize>
        <Paper flex={1} p="xs"></Paper>
      </ScrollArea.Autosize>
    </>
  );
};
export default DocumentsScreen;
