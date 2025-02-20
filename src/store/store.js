import { configureStore } from "@reduxjs/toolkit";
import { infoAPI } from "../feature/GetInfo";

export const store = configureStore({
  reducer: {
    // Добавьте редюсер RTK Query
    [infoAPI.reducerPath]: infoAPI.reducer,
  },
  // Добавьте middleware для работы с RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(infoAPI.middleware),
});

 