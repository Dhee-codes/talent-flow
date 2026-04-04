import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Login from "./pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Settings", element: <Settings /> },
    ],
  },
  {
    path: "/",
    children: [
      { path: "logout", element: <Logout /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;