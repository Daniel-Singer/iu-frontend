import { Center } from '@mantine/core';
import LoginForm from '../forms/login/LoginForm';
import { useQueryClient } from '@tanstack/react-query';
import { ModalProvider } from '../context/ModalContext';

const LoginScreen = () => {
  const queryClient = useQueryClient();
  queryClient.removeQueries();
  return (
    <Center style={{ height: '100%', width: '100%' }}>
      <ModalProvider>
        <LoginForm />
      </ModalProvider>
    </Center>
  );
};

export default LoginScreen;
