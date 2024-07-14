import axios from '../../../axios';

export const getUsersCommentAnalytics =
  async (): Promise<ICommentAnalyticsUser> => {
    const { data } = await axios.get(`/api/v1/analytics/comments/seen`);
    return data;
  };
