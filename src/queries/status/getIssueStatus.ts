import axios from '../../axios';

export const getIssueStatus = async (
  id: string
): Promise<IIssueStatusReceive[]> => {
  const { data } = await axios.get(`/api/v1/issues/status/${id}`);
  return data;
};
