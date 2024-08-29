import { Paper, ScrollArea, Table } from '@mantine/core';
import Thead from './Thead';

import classes from './UsersTable.module.css';
import { ReactNode } from 'react';
import StudentBody from './body/StudentBody';
import TutorBody from './body/TutorBody';
import { useQuery } from '@tanstack/react-query';
import { listUsers } from '../../queries/users/listUsers';
import { useSearchContext } from '../../context/SearchContext';
import NoUsersFound from '../../components/search/NoUsersFound';
import { useScrollingContext } from '../../context/ScrollingContext';

interface IRow {
  [key: string]: ReactNode;
}

interface IProps {
  role: string;
}

const UsersTable = ({ role }: IProps) => {
  const { searchValue } = useSearchContext();
  const { setIsScrolling } = useScrollingContext();

  const { data: students, isLoading: studentLoading } = useQuery({
    queryKey: [`students`],
    queryFn: () => listUsers('student'),
    retry: false,
    select: (users) => {
      if (!searchValue || searchValue === '') {
        return users;
      }
      return users?.filter(
        ({ first_name, last_name }) =>
          first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          last_name.toLowerCase().includes(searchValue?.toLowerCase())
      );
    },
  });

  const { data: tutors, isLoading: tutorLoading } = useQuery({
    queryKey: [`tutors`],
    queryFn: () => listUsers('tutor'),
    retry: false,
    select: (users) => {
      if (!searchValue || searchValue === '') {
        return users;
      }
      return users?.filter(
        ({ first_name, last_name }) =>
          first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          last_name.toLowerCase().includes(searchValue?.toLowerCase())
      );
    },
  });

  const userRows: IRow = {
    student: <StudentBody users={students!} />,
    tutor: <TutorBody users={tutors!} />,
  };

  return (
    <ScrollArea.Autosize
      onScrollPositionChange={({ y }) => setIsScrolling(y !== 0)}
    >
      <Paper withBorder style={{ flex: 1 }}>
        {role === 'student' && students?.length! > 0 ? (
          <Table highlightOnHover className={classes.table}>
            <Thead role={role} />
            {userRows[role]}
          </Table>
        ) : role === 'student' && !studentLoading ? (
          <NoUsersFound role="student" />
        ) : null}
        {role === 'tutor' && tutors?.length! > 0 ? (
          <Table highlightOnHover className={classes.table}>
            <Thead role={role} />
            {userRows[role]}
          </Table>
        ) : role === 'tutor' && !tutorLoading ? (
          <NoUsersFound role="tutor" />
        ) : null}
      </Paper>
    </ScrollArea.Autosize>
  );
};

export default UsersTable;
