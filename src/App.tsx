import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Security from "./pages/Security";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'security', element: <Security /> },
  ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;