import { Table, Text } from '@mantine/core';

import classes from '../UsersTable.module.css';
import { useNavigate } from 'react-router-dom';

interface IProps {
  users: IUserReceive[];
}

const StudentBody = ({ users }: IProps) => {
  const navigate = useNavigate();
  return (
    <Table.Tbody>
      {users?.map((student) => (
        <Table.Tr
          key={student.id}
          onDoubleClick={() => navigate(`${student.id!}`)}
        >
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
          <Table.Td>
            <Text size="sm" c={student.issues_count > 0 ? 'red' : 'green'}>
              {student.issues_count}
            </Text>
          </Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

export default StudentBody;
