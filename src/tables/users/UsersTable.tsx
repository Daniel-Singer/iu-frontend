import { Paper, ScrollArea, Table } from '@mantine/core';
import Thead from './Thead';

import classes from './UsersTable.module.css';
import { ReactNode, useState } from 'react';
import StudentBody from './body/StudentBody';
import TutorBody from './body/TutorBody';

interface IRow {
  [key: string]: ReactNode;
}

const userRows: IRow = {
  student: <StudentBody />,
  tutor: <TutorBody />,
};

interface IProps {
  role: string;
}

const UsersTable = ({ role }: IProps) => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  return (
    <ScrollArea.Autosize
      onScrollPositionChange={({ y }) => setScrolling(y !== 0)}
    >
      <Paper withBorder style={{ flex: 1 }}>
        <Table highlightOnHover className={classes.table}>
          <Thead role={role} scrolling={scrolling} />
          {userRows[role]}
        </Table>
      </Paper>
    </ScrollArea.Autosize>
  );
};

export default UsersTable;
