import { Table } from '@mantine/core';

import classes from '../UsersTable.module.css';

interface IProps {
  users: IStudent[];
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
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

export default TutorBody;
