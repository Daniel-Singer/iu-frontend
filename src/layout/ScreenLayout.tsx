import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import classes from './Layout.module.css';
import { listCategories } from '../queries/categories/listCategories';
import { useQueries } from '@tanstack/react-query';
import { AuthProvider } from '../context/AuthContext';
import { listCourses } from '../queries/courses/listCourses';
import { listStatus } from '../queries/status/listStatus';
import { NotificationsProvider } from '../context/NotificationsContext';

/**
 * ScreenLayout
 *
 * @description   Its the wrapper for all screen components of the app. It also queries
 *                the initial Data from backend needed.
 */

interface IInitQuery {
  queryKey: string[];
  queryFn: () => void;
}
const initQueries: IInitQuery[] = [
  {
    queryKey: ['categories'],
    queryFn: listCategories,
  },
  {
    queryKey: ['courses'],
    queryFn: listCourses,
  },
  {
    queryKey: ['status'],
    queryFn: listStatus,
  },
];
const ScreenLayout = () => {
  useQueries({
    queries: initQueries.map(({ queryKey, queryFn }) => ({
      queryKey,
      queryFn,
    })),
  });
  return (
    <AuthProvider>
      <NotificationsProvider>
        <div className={classes.screen}>
          <Navbar />
          <div className={classes.main}>
            <Outlet />
          </div>
        </div>
      </NotificationsProvider>
    </AuthProvider>
  );
};

export default ScreenLayout;
