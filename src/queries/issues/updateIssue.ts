import axios from '../../axios';

export const updateIssue = async ({
  id,
  update,
}: any): Promise<IIssueReceive> => {
  const { data } = await axios.put(`/api/v1/issues/${id!}`, { ...update });
  return data;
};
