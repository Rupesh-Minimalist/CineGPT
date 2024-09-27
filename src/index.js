import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import appStore from './redux/appStore';
import appRouter from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
