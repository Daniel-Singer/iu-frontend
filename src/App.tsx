import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// styles
import '@mantine/core/styles.css';
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

// instantiate QueryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<ScreenLayout />}>
              <Route index element={<DashboardScreen />} />
              <Route path="messages" element={<MessagesScreen />} />
              <Route path="account" element={<AccountScreen />} />
              <Route path="settings" element={<SettingsScreen />} />
              <Route path="admin" element={<AdminDashboardScreen />} />
              <Route path="students" element={<StudentsScreen />} />
            </Route>
            <Route path="/*" element={<NotFoundScreen />} />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
