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
import SettingsScreen from './screens/SettingsScreen';

import { theme } from './theme';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import StudentsScreen from './screens/StudentsScreen';
import LoginScreen from './screens/LoginScreen';
import AuthWrapper from './auth/AuthWrapper';
import LogoutScreen from './screens/LogoutScreen';
import IssueDetailsScreen from './screens/IssueDetailsScreen';
import { ModalProvider } from './context/ModalContext';
import CoursesScreen from './screens/CoursesScreen';
import TutorsScreen from './screens/TutorsScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';

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
                <Route path="account" element={<AccountScreen />} />
                <Route path="settings" element={<SettingsScreen />} />
                <Route path="admin" element={<AdminDashboardScreen />} />
                <Route
                  path="students"
                  element={<AuthWrapper allowedRoles={['admin', 'tutor']} />}
                >
                  <Route index element={<StudentsScreen />} />
                </Route>
                <Route
                  path="courses"
                  element={<AuthWrapper allowedRoles={['admin']} />}
                >
                  <Route index element={<CoursesScreen />} />
                  <Route path=":id" element={<CourseDetailsScreen />} />
                </Route>
                <Route
                  path="tutors"
                  element={<AuthWrapper allowedRoles={['admin']} />}
                >
                  <Route index element={<TutorsScreen />} />
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
