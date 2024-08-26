import axios from '../../axios';

export const addMediaDescription = async (
  values: IIssueMediaBase & { issue_id: string }
): Promise<any> => {
  const { data } = await axios.post(`/api/v1/media/description`, values);
  return data;
};
