import { configureStore } from '@reduxjs/toolkit';
import { infoAPI } from '../../feature/materials/api/getMaterialAPI';

export const store = configureStore({
  reducer: {
    [infoAPI.reducerPath]: infoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(infoAPI.middleware),
});
