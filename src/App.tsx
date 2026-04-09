import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import LearningProgress from "./pages/LearningProgress";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import DeleteAccount from "./pages/DeleteAccount";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About";
import CourseDetails from "./pages/CourseDetails";
import Notifications from "./pages/Notification";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "progress", element: <LearningProgress /> },
      { path: "Settings", element: <Settings /> },
      { path: "about", element: <About /> },
      { path: "courses/:id", element: <CourseDetails /> },
      { path: "notifications", element: <Notifications/> },
    ],
  },
  {
    path: "/",
    children: [
      { path: "logout", element: <Logout /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "delete-profile", element: <DeleteAccount /> },
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
  