import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
