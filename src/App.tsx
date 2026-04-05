import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Search from "./pages/Search";
import LearningProgress from "./pages/LearningProgress";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "Settings", element: <Settings /> },
      { path: "progress", element: <LearningProgress /> },
    ],
  },
  {
    path: "/",
    children: [
      { path: "logout", element: <Logout /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/",
    children: [{ path: "search", element: <Search /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
