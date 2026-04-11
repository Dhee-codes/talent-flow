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
import Payment from "./pages/Payment";
import PaymentSuccess from "./components/payment/success/PaymentSuccess";

import ComingSoon from "./pages/ComingSoon";


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
      { path: "notifications", element: <Notifications /> },

      { path: "cart", element: <ComingSoon /> },
      { path: "courses", element: <ComingSoon /> },
      { path: "chat", element: <ComingSoon /> },
      { path: "verify-certificate", element: <ComingSoon /> },
      { path: "blog", element: <ComingSoon /> },
      { path: "contact", element: <ComingSoon /> },
    ],
  },
  {
    path: "/",
    children: [
      { path: "logout", element: <Logout /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "payment", element: <Payment /> },
      { path: "payment/success", element: <PaymentSuccess /> },
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
