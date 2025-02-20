import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const infoAPI = createApi({
  reducerPath: "infoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Materials", "Hooks", "Cheatsheet", "Themes"],
  endpoints: (build) => ({
    getAllMateryal: build.query({
      query: () => "/materials",
      providesTags: ["Materials"],
    }),
    getHooks: build.query({
      query: () => "/hooks",
      providesTags: ["Hooks"],
    }),
    getCheatsheet: build.query({
      query: () => "/cheatsheet",
      providesTags: ["Cheatsheet"],
    }),

    createHook: build.mutation({
      query: (post) => ({
        url: "/hooks",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Hooks"],
    }),
    deleteHook: build.mutation({
      query: (id) => ({
        url: `/hooks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Hooks"],
    }),
    updateHook: build.mutation({
      query: (hook) => ({
        url: `/hooks/${hook.id}`, // Используем правильный id
        method: "PUT",
        body: hook,
      }),
      invalidatesTags: ["Hooks"],
    }),

    createCheatsheet: build.mutation({
      query: (cheatsheet) => ({
        url: "/cheatsheet",
        method: "POST",
        body: cheatsheet,
      }),
      invalidatesTags: ["Cheatsheet"],
    }),
    deleteCheatsheet: build.mutation({
      query: (id) => ({
        url: `/cheatsheet/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cheatsheet"],
    }),
    createTheme: build.mutation({
      query: (theme) => ({
        url: "/materials",
        method: "POST",
        body: theme,
      }),
      invalidatesTags: ["Materials"],
    }),
  }),
});

// Экспортируйте хук
export const {
  useGetAllMateryalQuery,
  useGetHooksQuery,
  useCreateHookMutation,
  useCreateCheatsheetMutation,
  useGetCheatsheetQuery,
  useCreateThemeMutation,
  useDeleteHookMutation,
  useDeleteCheatsheetMutation,
  useUpdateHookMutation,
} = infoAPI;
