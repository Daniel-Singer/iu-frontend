import axios from '../../axios';

export const addMediaDescription = async (
  values: IIssueMediaBase & { issue_id: string | undefined }
): Promise<any> => {
  const { data } = await axios.post(
    `/api/v1/media/description/${values.issue_id}`,
    values
  );
  return data;
};
