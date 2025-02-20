import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Hook } from "../../Components/Hook/Hook";
import { Cheatsheet } from "../../Components/Cheatsheet/Cheatsheet";
import { Themes } from "../../Components/Themes/Themes";
import { ThemeSinglePage } from "../../Components/ThemeSinglePage/ThemeSinglePage";
import { ErrorPage } from "../../Components/404/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/hooks",
        element: <Hook />,
      },
      {
        path: "/cheatsheet",
        element: <Cheatsheet />,
      },
      {
        path: "/",
        element: <Themes />,
      },
      {
        path: "/themes/:id",
        element: <ThemeSinglePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
