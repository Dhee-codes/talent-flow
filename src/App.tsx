import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Signup from "./pages/Signup";


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
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
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