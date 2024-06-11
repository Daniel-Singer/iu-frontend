import axios from '../../axios';

export const authenticateUser = async (
  credentials: Pick<IUserBase, 'username' | 'password'>
): Promise<IUserBase> => {
  const { data } = await axios.post(`/api/v1/auth/login`, credentials);
  console.log(data);
  return data;
};
