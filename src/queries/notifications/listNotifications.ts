import axios from '../../axios';

export const listNotifications = async (): Promise<
  INotificationListReceive[]
> => {
  const { data } = await axios.get('/api/v1/notifications');
  return data;
};
