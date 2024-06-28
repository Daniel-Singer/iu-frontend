import axios from '../../axios';

export const listIssuesComments = async (
  id: string
): Promise<ICommentReceive[]> => {
  const { data } = await axios.get(`/api/v1/comments/${id}`);
  return data;
};
