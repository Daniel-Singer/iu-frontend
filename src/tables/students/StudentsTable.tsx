import { Anchor, Paper, ScrollArea, Table } from '@mantine/core';
import { useState } from 'react';
import classes from './StudentsTable.module.css';

import { useModalContext } from '../../context/ModalContext';
import { useQuery } from '@tanstack/react-query';
import { listUsers } from '../../queries/users/listUsers';

const StudentsTable = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const { toggleModal } = useModalContext();
  const handleShowDetails = () => {
    toggleModal();
  };
  const { data: students } = useQuery({
    queryKey: ['students'],
    queryFn: () => listUsers('student'),
  });
  return (
    <ScrollArea.Autosize
      onScrollPositionChange={({ y }) => setScrolling(y !== 0)}
    >
      <Paper style={{ flex: 1 }} withBorder radius="sm">
        <Table highlightOnHover className={classes.table}>
          <Table.Thead
            className={classes.header}
            data-scrolling={scrolling === true || undefined}
          >
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Matrikel Nr.</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>E-Mail</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {students?.map((student) => (
              <Table.Tr key={student?.id!}>
                <Table.Td>{student.id!}</Table.Td>
                <Table.Td>
                  <Anchor size="sm" c="green" onClick={handleShowDetails}>
                    {student.matrikel_nr}
                  </Anchor>
                </Table.Td>
                <Table.Td>{`${student.first_name} ${student.last_name}`}</Table.Td>
                <Table.Td>{student.email}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </ScrollArea.Autosize>
  );
};

export default StudentsTable;
