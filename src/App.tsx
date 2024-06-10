import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Router>
        <Routes>
          <Route path="/" element={<ScreenLayout />}>
            <Route index element={<DashboardScreen />} />
            <Route path="messages" element={<MessagesScreen />} />
            <Route path="account" element={<AccountScreen />} />
            <Route path="settings" element={<SettingsScreen />} />
            <Route path="admin" element={<AdminDashboardScreen />} />
          </Route>
          <Route path="/*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
