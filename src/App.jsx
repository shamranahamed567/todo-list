import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Home from "./interface/Home";
import Register from "./features/register/Register";
import Login from "./features/login/Login";
import NotFound from "./interface/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signup" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
