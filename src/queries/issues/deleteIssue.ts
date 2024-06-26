import axios from '../../axios';

export const deleteIssue = async (id: number): Promise<IIssueReceive> => {
  const { data } = await axios.delete(`/api/v1/issues/${id}`);
  return data;
};
