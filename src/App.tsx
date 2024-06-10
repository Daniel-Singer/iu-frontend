import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@mantine/core/styles.css';
import './App.css';
import DashboardScreen from './screens/DashboardScreen';
import MessagesScreen from './screens/MessageesScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import ScreenLayout from './layout/ScreenLayout';

const App = () => {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ScreenLayout />}>
            <Route index element={<DashboardScreen />} />
            <Route path="messages" element={<MessagesScreen />} />
          </Route>
          <Route path="/*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
