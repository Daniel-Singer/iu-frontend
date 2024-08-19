import axios from '../../axios';

export const getNotification = async (
  id: string
): Promise<INotificationReceive> => {
  const { data } = await axios.get(`/api/v1/notifications/${id}`);
  return data;
};
