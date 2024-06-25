import axios from '../../axios';

export const getMyAccount = async (): Promise<IUserBase> => {
  const { data } = await axios.get(`/api/v1/accounts`);
  return data;
};
