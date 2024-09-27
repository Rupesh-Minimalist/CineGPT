import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import LoginAuth from './components/LoginAuth';
import Browse from './components/Browse';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginAuth />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default appRouter;
