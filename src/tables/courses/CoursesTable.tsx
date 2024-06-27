import { Paper, ScrollArea, Table, Text } from '@mantine/core';

import classes from './CoursesTable.module.css';
import Thead from './Thead';
import Tbody from './Tbody';

const CoursesTable = () => {
  return (
    <ScrollArea.Autosize>
      <Paper withBorder>
        <Table highlightOnHover className={classes.table}>
          <Thead />
          <Tbody />
        </Table>
      </Paper>
    </ScrollArea.Autosize>
  );
};

export default CoursesTable;
