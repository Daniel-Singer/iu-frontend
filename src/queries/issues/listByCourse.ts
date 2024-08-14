import axios from '../../axios';

export const listByCourse = async (id: string): Promise<IIssueReceive[]> => {
  const { data } = await axios.get(`/api/v1/issues/course/${id}`);
  return data;
};
