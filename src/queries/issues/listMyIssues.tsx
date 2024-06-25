import axios from '../../axios';

export const listMyIssues = async (): Promise<IIssueReceive[]> => {
  const { data } = await axios.get('/api/v1/issues/user');
  return data;
};
