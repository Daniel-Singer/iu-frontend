import axios from '../../axios';

export const createComment = async (
  values: ICommentCreate
): Promise<ICommentReceive> => {
  const { data } = await axios.post(`/api/v1/comments`, values);
  return data;
};
