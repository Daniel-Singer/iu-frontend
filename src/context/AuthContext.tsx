import { useSessionStorage } from '@mantine/hooks';
import { ReactNode, createContext, useContext } from 'react';

interface IAuthContext {
  auth: any;
  setAuth: any;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [auth, setAuth] = useSessionStorage({
    key: 'auth',
    defaultValue: undefined,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuthContext muss sich innerhalb von AuthProvider befinden'
    );
  }
  return context;
};
