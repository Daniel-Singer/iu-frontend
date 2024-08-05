import { Paper, Tabs } from '@mantine/core';
import StatusTable from '../../tables/status/StatusTable';
import CommentList from '../comment/CommentList';

const TimelineTabs = () => {
  return (
    <Paper>
      <Tabs defaultValue="status">
        <Tabs.List>
          <Tabs.Tab value="status">Status</Tabs.Tab>
          <Tabs.Tab value="comments">Kommentare</Tabs.Tab>
          <Tabs.Tab value="audit">Audit</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="status">
          <StatusTable />
        </Tabs.Panel>
        <Tabs.Panel value="comments">
          <CommentList />
        </Tabs.Panel>
        <Tabs.Panel value="audit">test</Tabs.Panel>
      </Tabs>
    </Paper>
  );
};

export default TimelineTabs;
