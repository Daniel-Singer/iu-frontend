import { Alert, Paper, ScrollArea, Table, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { IconAlertTriangle } from '@tabler/icons-react';
import { listMyIssues } from '../../queries/issues/listMyIssues';
import classes from './IssuesTable.module.css';
import Thead from './Thead';
import Tbody from './Tbody';

const IssuesTable = () => {
  const { data: myIssues } = useQuery({
    queryKey: ['my_issues'],
    queryFn: listMyIssues,
  });
  if (myIssues?.length! > 0) {
    return (
      <ScrollArea.Autosize>
        <Paper flex={1} withBorder radius="sm">
          <Table className={classes.table} highlightOnHover>
            <Thead />
            <Tbody issues={myIssues!} />
          </Table>
        </Paper>
      </ScrollArea.Autosize>
    );
  } else {
    return (
      <Alert icon={<IconAlertTriangle size={20} />}>
        <Text size="sm" c="blue">
          Keine Fehlermeldungen angelegt
        </Text>
      </Alert>
    );
  }
};

export default IssuesTable;
