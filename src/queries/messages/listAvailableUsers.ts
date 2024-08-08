import axios from '../../axios';

export const listAvailableUsers = async (): Promise<IMessageUser[]> => {
  const { data } = await axios.get(`/api/v1/messages/users`);
  return data;
};
