import axios from '../../axios';

export const getIssue = async (id: string | number): Promise<IIssueReceive> => {
  const { data } = await axios.get(`/api/v1/issues/${id}`);
  return data;
};
