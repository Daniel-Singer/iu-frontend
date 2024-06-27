import { Table } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listUsers } from '../../../queries/users/listUsers';

import classes from '../UsersTable.module.css';

const TutorBody = () => {
  const { data: users } = useQuery({
    queryKey: [`tutors`],
    queryFn: () => listUsers('tutor'),
  });
  return (
    <Table.Tbody>
      {users?.map((tutor) => (
        <Table.Tr key={tutor.id}>
          <Table.Td>{tutor.id}</Table.Td>
          <Table.Td
            className={classes.name}
          >{`${tutor.first_name} ${tutor.last_name}`}</Table.Td>
          <Table.Td>{tutor.email}</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

export default TutorBody;
