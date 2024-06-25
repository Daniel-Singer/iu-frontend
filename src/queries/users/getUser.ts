import axios from '../../axios';

export const getUser = async (id: string): Promise<IUserBase> => {
  const { data } = await axios.get(`/api/v1/users/${id}`);
  return data;
};
