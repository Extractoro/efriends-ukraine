import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: (formData) => ({
        url: "/api/post/add",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["post"],
    }),
    getAll: builder.query({
      query: (body) => ({
        url: "/api/post/getAll",
        method: "GET",
        body,
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const { useAddPostMutation, useGetAllQuery } = postApi;
