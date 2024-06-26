import axios from '../../axios';

export const createIssue = async (
  issue: IIssueCreate
): Promise<IIssueReceive> => {
  const formattedData = {
    ...issue,
    course_id: parseInt(issue.course_id!),
    category_id: parseInt(issue.category_id!),
  };
  const { data } = await axios.post(`/api/v1/issues`, formattedData);
  return data;
};
