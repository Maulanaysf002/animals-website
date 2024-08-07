import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/home';
import DetailPage from './Pages/detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
  {
    path: '/detail',
    element: <DetailPage></DetailPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
