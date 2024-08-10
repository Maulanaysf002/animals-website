import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/homePage';
import DetailPage from './Pages/detailPage';
import LoginPage from './Pages/loginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
  {
    path: '/detail',
    element: <DetailPage></DetailPage>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
