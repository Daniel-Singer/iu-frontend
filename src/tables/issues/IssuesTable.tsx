import { Alert, Paper, ScrollArea, Table, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { IconAlertTriangle } from '@tabler/icons-react';
import { listMyIssues } from '../../queries/issues/listMyIssues';
import classes from './IssuesTable.module.css';
import Thead from './Thead';
import Tbody from './Tbody';
import { useSearchContext } from '../../context/SearchContext';
import { useFilterContext } from '../../context/IssueFilterContext';
import { useScrollingContext } from '../../context/ScrollingContext';
import { useAuthContext } from '../../context/AuthContext';

const IssuesTable = () => {
  const { auth } = useAuthContext();
  const { searchValue } = useSearchContext();
  const { filterValue, isAssignee } = useFilterContext();
  const { setIsScrolling } = useScrollingContext();
  const { data: myIssues } = useQuery({
    queryKey: ['my_issues'],
    queryFn: listMyIssues,
    select: (issues) => {
      if (filterValue) {
        let filterdIssues = issues.filter(
          ({ status }) => status.id === filterValue
        );
        if (searchValue && searchValue !== '') {
          filterdIssues = filterdIssues?.filter(
            ({ course, category }) =>
              course.code.toLowerCase().includes(searchValue?.toLowerCase()) ||
              category.label.toLowerCase().includes(searchValue?.toLowerCase())
          );
        }
        return filterdIssues;
      } else {
        if (!searchValue || searchValue === '') {
          return issues;
        } else {
          return issues?.filter(
            ({ course, category }) =>
              course.code.toLowerCase().includes(searchValue?.toLowerCase()) ||
              category.label.toLowerCase().includes(searchValue?.toLowerCase())
          );
        }
      }
    },
  });
  if (myIssues?.length! > 0) {
    return (
      <ScrollArea.Autosize
        onScrollPositionChange={({ y }) => setIsScrolling(y !== 0)}
      >
        <Paper flex={1} radius="sm">
          <Table className={classes.table} highlightOnHover>
            <Thead />
            <Tbody
              issues={
                !isAssignee
                  ? myIssues!
                  : myIssues?.filter(
                      ({ assigned_to }) => assigned_to.id === auth.id
                    )
              }
            />
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
