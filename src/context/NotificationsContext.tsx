import { useQuery } from '@tanstack/react-query';
import { createContext, ReactNode, useContext } from 'react';
import { listNotifications } from '../queries/notifications/listNotifications';

interface INotificationsContext {
  notifications: INotificationListReceive[] | undefined;
}

export const NotificationsContext = createContext<
  INotificationsContext | undefined
>(undefined);

interface INotificationsProps {
  children: ReactNode;
}

export const NotificationsProvider = ({ children }: INotificationsProps) => {
  const { data: notifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: listNotifications,
  });
  return (
    <NotificationsContext.Provider value={{ notifications }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotificationsContext = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      'useNotificationsContext muss sich innerhalb von NotificationsContext befinden'
    );
  }
  return context;
};
