import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage.tsx';
import HomePage from '../pages/HomePage.tsx';
import LogInPage from '../pages/LogInPage.tsx';
import RegisterPage from '../pages/RegisterPage.tsx';
import AuthLayout from '../layouts/AuthLayout.tsx';
import RequireAuth from '../helpers/RequireAuth.tsx';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><HomePage /></RequireAuth>,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LogInPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);