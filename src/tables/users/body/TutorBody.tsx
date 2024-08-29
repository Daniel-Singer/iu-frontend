import { Anchor, Table, Text, ThemeIcon } from '@mantine/core';

import classes from '../UsersTable.module.css';
import { useNavigate } from 'react-router-dom';
import { IconCheck, IconX } from '@tabler/icons-react';

interface IProps {
  users: IUserReceive[];
}

const TutorBody = ({ users }: IProps) => {
  const navigate = useNavigate();
  return (
    <Table.Tbody>
      {users?.map((tutor) => (
        <Table.Tr key={tutor.id} onDoubleClick={() => navigate(`${tutor.id!}`)}>
          <Table.Td>{tutor.id}</Table.Td>
          <Table.Td className={classes.name}>
            <Anchor
              size="sm"
              onClick={() => navigate(`/users/${tutor.id!}`)}
            >{`${tutor.first_name} ${tutor.last_name}`}</Anchor>
          </Table.Td>
          <Table.Td>{tutor.email}</Table.Td>
          <Table.Td className={classes.active}>
            <ThemeIcon
              variant="light"
              size="sm"
              color={tutor?.active! ? 'green' : 'red'}
            >
              {tutor?.active! ? <IconCheck size={16} /> : <IconX size={16} />}
            </ThemeIcon>
          </Table.Td>
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
