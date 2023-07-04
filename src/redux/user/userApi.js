import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
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
  tagTypes: ["user"],
  endpoints: (builder) => ({
    changeName: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_name",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    changeAbout: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_about",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    changeBio: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_bio",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    changeFacebook: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_facebook",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    changeGithub: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_github",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    changeLinkedin: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_linkedin",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    changeLocation: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_location",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    changePhone: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_phone",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    changeTelegram: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_telegram",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    changeTwitter: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_twitter",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    changeWebsite: builder.mutation({
      query: (body) => ({
        url: "/api/user/change_website",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useChangeNameMutation,
  useChangeAboutMutation,
  useChangeBioMutation,
  useChangeFacebookMutation,
  useChangeLinkedinMutation,
  useChangeGithubMutation,
  useChangeLocationMutation,
  useChangePhoneMutation,
  useChangeTelegramMutation,
  useChangeTwitterMutation,
  useChangeWebsiteMutation,
} = userApi;
