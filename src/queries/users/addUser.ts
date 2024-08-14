import axios from '../../axios';

type TUserReceive = Pick<IUserBase, 'id' | 'first_name' | 'last_name'>;

export const addUser = async (user: IUserBase): Promise<TUserReceive> => {
  const { data } = await axios.post(`/api/v1/users`, user);
  return data;
};
