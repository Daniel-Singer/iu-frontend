import axios from '../../axios';

export const listUsers = async (role?: string): Promise<IUserReceive[]> => {
  const queryString = role && role !== '' ? `?role=${role}` : '';
  const { data } = await axios.get(`/api/v1/users${queryString}`);
  return data;
};
