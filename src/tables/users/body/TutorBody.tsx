import { Table, Text } from '@mantine/core';

import classes from '../UsersTable.module.css';

interface IProps {
  users: IUserReceive[];
}

const TutorBody = ({ users }: IProps) => {
  return (
    <Table.Tbody>
      {users?.map((tutor) => (
        <Table.Tr key={tutor.id}>
          <Table.Td>{tutor.id}</Table.Td>
          <Table.Td
            className={classes.name}
          >{`${tutor.first_name} ${tutor.last_name}`}</Table.Td>
          <Table.Td>{tutor.email}</Table.Td>
          <Table.Td>
            <Text size="sm" c={tutor.assigned_count > 0 ? 'red' : 'green'}>
              {tutor.assigned_count}
            </Text>
          </Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

export default TutorBody;
