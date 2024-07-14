import { Box, Title } from '@mantine/core';
import { useAuthContext } from '../../context/AuthContext';

const WelcomeUser = () => {
  const { auth } = useAuthContext();
  return (
    <Box>
      <Title order={2}>{`Hallo, ${auth?.first_name!}!`}</Title>
    </Box>
  );
};

export default WelcomeUser;
