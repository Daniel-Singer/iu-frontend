import { Anchor, Table, Text, ThemeIcon } from '@mantine/core';

import classes from '../UsersTable.module.css';
import { useNavigate } from 'react-router-dom';
import { IconCheck, IconX } from '@tabler/icons-react';

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
          <Table.Td className={classes.name}>
            <Anchor
              size="sm"
              onClick={() => navigate(`/users/${student.id}`)}
            >{`${student.first_name} ${student.last_name}`}</Anchor>
          </Table.Td>
          <Table.Td>{student.email}</Table.Td>
          <Table.Td className={classes.active}>
            <ThemeIcon
              variant="light"
              size="sm"
              color={student?.active! ? 'green' : 'red'}
            >
              {student?.active! ? <IconCheck size={16} /> : <IconX size={16} />}
            </ThemeIcon>
          </Table.Td>
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
