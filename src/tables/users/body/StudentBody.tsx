import { Table } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listUsers } from '../../../queries/users/listUsers';

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
          <Table.Td>{student.matrikel_nr}</Table.Td>
          <Table.Td>{`${student.first_name} ${student.last_name}`}</Table.Td>
          <Table.Td>{student.email}</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

export default StudentBody;
