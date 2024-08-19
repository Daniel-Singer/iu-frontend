import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getUser } from '../queries/users/getUser';
import ScreenHeader from '../components/screen/ScreenHeader';

const UserDetailsScreen = () => {
  const params = useParams();
  const {
    data: user,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(params?.id!),
    enabled: !!params.id,
  });
  return (
    <>
      <ScreenHeader
        label={
          isSuccess && !isLoading ? `${user.first_name} ${user.last_name}` : ' '
        }
      />
    </>
  );
};

export default UserDetailsScreen;
