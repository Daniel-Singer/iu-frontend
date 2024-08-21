import { Paper, Tabs } from '@mantine/core';
import StatusTable from '../../tables/status/StatusTable';
import CommentList from '../comment/CommentList';
import MediaTable from '../../tables/media/MediaTable';
import { ModalProvider } from '../../context/ModalContext';

const TimelineTabs = () => {
  return (
    <Paper>
      <Tabs defaultValue="comments">
        <Tabs.List>
          <Tabs.Tab value="comments">Kommentare</Tabs.Tab>
          <Tabs.Tab value="status">Status</Tabs.Tab>
          <Tabs.Tab value="media">Dateien</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="comments">
          <CommentList />
        </Tabs.Panel>
        <Tabs.Panel value="status">
          <StatusTable />
        </Tabs.Panel>
        <Tabs.Panel value="media">
          <ModalProvider>
            <MediaTable />
          </ModalProvider>
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
};

export default TimelineTabs;
