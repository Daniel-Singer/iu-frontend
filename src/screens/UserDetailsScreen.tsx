import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getUser } from '../queries/users/getUser';
import ScreenHeader from '../components/screen/ScreenHeader';
import { useEffect } from 'react';
import { SimpleGrid, Stack } from '@mantine/core';
import UserCard from '../components/cards/user/UserCard';
import ResetPasswordForm from '../forms/password/ResetPasswordForm';

const UserDetailsScreen = () => {
  const params = useParams();
  const queryClient = useQueryClient();
  const {
    data: user,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(params?.id!),
    enabled: !!params.id,
  });

  useEffect(() => {
    return () => queryClient.removeQueries({ queryKey: ['user'] });
  }, []);

  return (
    <>
      <ScreenHeader
        label={
          isSuccess && !isLoading ? `${user.first_name} ${user.last_name}` : ' '
        }
      />
      <SimpleGrid cols={2}>
        <Stack>
          <UserCard {...(user! as IUserCreate)} />
          <ResetPasswordForm />
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default UserDetailsScreen;
