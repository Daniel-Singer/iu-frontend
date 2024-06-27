import { Table, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listUsers } from '../../../queries/users/listUsers';

import classes from '../UsersTable.module.css';

const StudentBody = () => {
  const { data: users } = useQuery({
    queryKey: [`students`],
    queryFn: () => listUsers('student'),
  });
  return (
    <Table.Tbody>
      {users?.map((student) => (
        <Table.Tr key={student.id}>
          <Table.Td>{student.id}</Table.Td>
          <Table.Td className={classes.matrikel_nr}>
            <Text size="sm" c="green">
              {student.matrikel_nr}
            </Text>
          </Table.Td>
          <Table.Td
            className={classes.name}
          >{`${student.first_name} ${student.last_name}`}</Table.Td>
          <Table.Td>{student.email}</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

export default StudentBody;
