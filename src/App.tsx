import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Security from "./pages/Security";
import Logout from "./pages/Logout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "security", element: <Security /> },
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