import { authApi } from "./authApi";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: {
    name: null,
    email: null,
    subscription: null,
    avatarURL: null,
  },
  token: null,
  // googleToken: null,
  isLoggedIn: false,
  isPending: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.registrationUser.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        authApi.endpoints.registrationUser.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        authApi.endpoints.registrationUser.matchRejected,
        (state, _action) => {
          state.isError = true;
          state.isPending = false;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        authApi.endpoints.loginUser.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        authApi.endpoints.logoutUser.matchFulfilled,
        (state, _action) => {
          state.user = null;
          state.token = null;
          state.isLoggedIn = false;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        authApi.endpoints.resendVerification.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        authApi.endpoints.resendVerification.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        authApi.endpoints.resendVerification.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        authApi.endpoints.currentUser.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        authApi.endpoints.currentUser.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.user = payload.user;
        }
      )
      .addMatcher(
        authApi.endpoints.currentUser.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        authApi.endpoints.updateAvatar.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        authApi.endpoints.updateAvatar.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.avatarURL = payload.res;
        }
      )
      .addMatcher(
        authApi.endpoints.updateAvatar.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      );
  },
});

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsError = (state) => state.auth.isError;
export const selectIsPending = (state) => state.auth.isPending;
