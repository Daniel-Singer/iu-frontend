import { useQuery } from '@tanstack/react-query';
import { listAvailableUsers } from '../../queries/messages/listAvailableUsers';
import { Paper, Stack } from '@mantine/core';
import MessageContact from '../../components/messages/MessageContect';

const ContactsTable = () => {
  const { data: users } = useQuery({
    queryKey: ['available_users'],
    queryFn: listAvailableUsers,
  });
  return (
    <Paper>
      <Stack gap={0}>
        {users?.map((user) => (
          <MessageContact key={user.id!} {...user} />
        ))}
      </Stack>
    </Paper>
  );
};

export default ContactsTable;
