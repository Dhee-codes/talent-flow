import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "Settings", element: <Settings /> },
    ],
  },
  {
    path: "/",
    children: [
      { path: "logout", element: <Logout /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;