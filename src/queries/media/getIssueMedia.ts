import axios from '../../axios';

export const getIssueMedia = async (id: string): Promise<IIssueMediaBase> => {
  const { data } = await axios.get(`/api/v1/issues/media/${id}`);
  return data;
};
