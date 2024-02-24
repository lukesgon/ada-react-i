import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from './routes/Root/root.jsx';
import Home from './routes/Home/home.jsx';
import Welcome from './routes/Welcome/welcome.jsx';
import SingIn from './routes/SignIn/signin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  
    children: [
      {
        path: '/',
        element: <Welcome />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/signin',
        element: <SingIn />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);