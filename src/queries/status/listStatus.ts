import axios from '../../axios';

export const listStatus = async (): Promise<IStatusBase[]> => {
  const { data } = await axios.get(`/api/v1/status`);
  return data;
};
