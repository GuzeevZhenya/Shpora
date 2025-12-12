import { createBrowserRouter } from 'react-router-dom';

import { App } from '../../app/App';
import { Hook } from '../components/Hook/Hook';
import { Cheatsheet } from '../components/Cheatsheet/Cheatsheet';
import { Themes } from '../components/Themes/Themes';
import { Navigate } from 'react-router-dom';
import { ThemeSinglePage } from '../components/ThemeSinglePage/ThemeSinglePage';
import { ErrorPage } from '../components/Errors/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/hooks',
        element: <Hook />,
      },
      {
        path: '/cheatsheet',
        element: <Cheatsheet />,
      },
      {
        path: '/',
        element: <Themes />,
      },
      {
        path: '/themes/:id',
        element: <ThemeSinglePage />,
      },
      {
        path: '/Shpora',
        element: <Navigate to="/" />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
