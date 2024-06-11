import axios from '../../axios';

export const authenticateUser = async (
  credentials: Pick<IUserBase, 'username' | 'password'>
): Promise<IUserBase> => {
  const { data } = await axios.post(`/api/v1/aouth/login`, credentials);
  return data;
};
