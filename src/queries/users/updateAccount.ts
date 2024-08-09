import axios from '../../axios';

export const updateAccount = async ({ id, update }: any): Promise<any> => {
  const { data } = await axios.put(`/api/v1/users/${id}`, { ...update });
  console.log({ id, update });
  return data;
};
