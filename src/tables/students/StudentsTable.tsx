import { Anchor, Paper, ScrollArea, Table } from '@mantine/core';
import { useState } from 'react';
import classes from './StudentsTable.module.css';

import students from '../../mock/students.json';
import { useModalContext } from '../../context/ModalContext';

const StudentsTable = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const { toggleModal } = useModalContext();
  const handleShowDetails = () => {
    toggleModal();
  };
  return (
    <ScrollArea.Autosize
      onScrollPositionChange={({ y }) => setScrolling(y !== 0)}
    >
      <Paper style={{ flex: 1 }} withBorder radius="sm">
        <Table highlightOnHover className={classes.table}>
          <Table.Thead
            className={classes.header}
            data-scrolling={scrolling ? true : false}
          >
            <Table.Tr>
              <Table.Th>Matrikel Nr.</Table.Th>
              <Table.Th>Vorname</Table.Th>
              <Table.Th>Nachname</Table.Th>
              <Table.Th>E-Mail</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {students.map((student) => (
              <Table.Tr key={student?.id!}>
                <Table.Td>
                  <Anchor size="sm" c="green" onClick={handleShowDetails}>
                    {student.matrikel_nr}
                  </Anchor>
                </Table.Td>
                <Table.Td>{student.first_name}</Table.Td>
                <Table.Td>{student.last_name}</Table.Td>
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
