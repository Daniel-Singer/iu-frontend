import { Center } from '@mantine/core';
import LoginForm from '../forms/login/LoginForm';
import { useQueryClient } from '@tanstack/react-query';

const LoginScreen = () => {
  const queryClient = useQueryClient();
  queryClient.removeQueries();
  return (
    <Center style={{ height: '100%', width: '100%' }}>
      <LoginForm />
    </Center>
  );
};

export default LoginScreen;
