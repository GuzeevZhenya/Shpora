import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { router } from "./common/router";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендеринг приложения
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
