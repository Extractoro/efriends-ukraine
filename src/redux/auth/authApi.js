import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "efriends",
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
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    registrationUser: builder.mutation({
      query: (body) => ({
        url: "/api/auth/registration",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/api/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/api/auth/logout",
        method: "GET",
      }),
      invalidatesTags: ["auth"],
    }),
    resendVerification: builder.mutation({
      query: (body) => ({
        url: "/api/auth/verify_again",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    currentUser: builder.query({
      query: () => ({
        url: "/api/auth/current",
      }),
      providesTags: ["auth"],
    }),
    updateAvatar: builder.mutation({
      query: (body) => ({
        url: "/api/auth/users/avatars",
        method: "PATCH",
        body,
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useRegistrationUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useResendVerificationMutation,
  useCurrentUserQuery,
  useUpdateAvatarMutation,
} = authApi;
