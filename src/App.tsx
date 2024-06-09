import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@mantine/core/styles.css";
import "./App.css";
import DashboardScreen from "./screens/DashboardScreen";
import MessagesScreen from "./screens/MessageesScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardScreen />,
  },
  {
    path: "/messages",
    element: <MessagesScreen />,
  },
  {
    path: "/*",
    element: <NotFoundScreen />,
  },
]);

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;
