import axios from '../../axios';

export const deleteMediaFile = async (id: string | number): Promise<any> => {
  const { data } = await axios.delete(`/api/v1/media/${id}`);
  return data;
};
