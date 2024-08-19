import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// styles
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './App.css';

// Screen imports
import DashboardScreen from './screens/DashboardScreen';
import MessagesScreen from './screens/MessagesScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import ScreenLayout from './layout/ScreenLayout';
import AccountScreen from './screens/AccountScreen';

import { theme } from './theme';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import LoginScreen from './screens/LoginScreen';
import AuthWrapper from './auth/AuthWrapper';
import LogoutScreen from './screens/LogoutScreen';
import IssueDetailsScreen from './screens/IssueDetailsScreen';
import { ModalProvider } from './context/ModalContext';
import CoursesScreen from './screens/CoursesScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import UsersScreen from './screens/UsersScreen';
import NotificationScreen from './screens/NotificationScreen';
import NotificationDetailsScreen from './screens/NotificationDetailsScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

// instantiate QueryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Notifications position="top-center" />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <AuthWrapper allowedRoles={['student', 'admin', 'tutor']} />
              }
            >
              <Route path="/" element={<ScreenLayout />}>
                <Route
                  index
                  element={
                    <ModalProvider>
                      <DashboardScreen />
                    </ModalProvider>
                  }
                />
                <Route path="messages" element={<MessagesScreen />} />
                <Route path="notifications" element={<NotificationScreen />} />
                <Route
                  path="notifications/:id"
                  element={<NotificationDetailsScreen />}
                />
                <Route path="account" element={<AccountScreen />} />
                <Route path="admin" element={<AdminDashboardScreen />} />
                <Route
                  path="users"
                  element={<AuthWrapper allowedRoles={['admin', 'tutor']} />}
                >
                  <Route
                    index
                    element={
                      <ModalProvider>
                        <UsersScreen />
                      </ModalProvider>
                    }
                  />
                  <Route path=":id" element={<UserDetailsScreen />} />
                </Route>
                <Route
                  path="courses"
                  element={<AuthWrapper allowedRoles={['admin']} />}
                >
                  <Route
                    index
                    element={
                      <ModalProvider>
                        <CoursesScreen />
                      </ModalProvider>
                    }
                  />
                  <Route
                    path=":id"
                    element={
                      <ModalProvider>
                        <CourseDetailsScreen />
                      </ModalProvider>
                    }
                  />
                </Route>
                <Route path="issue/:id" element={<IssueDetailsScreen />} />
                <Route path="logout" element={<LogoutScreen />} />
              </Route>
            </Route>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/*" element={<NotFoundScreen />} />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
