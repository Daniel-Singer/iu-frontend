import axios from '../../axios';

export const getIssue = async (id: string): Promise<IIssueReceive> => {
  const { data } = await axios.get(`/api/v1/issues/${id}`);
  console.log(data);
  return data;
};
