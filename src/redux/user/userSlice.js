import { userApi } from "./userApi";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isPending: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userApi.endpoints.changeName.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changeName.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changeName.matchRejected,
        (state, _action) => {
          state.isError = true;
          state.isPending = false;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        userApi.endpoints.changeAbout.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changeAbout.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changeAbout.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        userApi.endpoints.changeBio.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changeBio.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changeBio.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        userApi.endpoints.changeFacebook.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changeFacebook.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changeFacebook.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        userApi.endpoints.changeGithub.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changeGithub.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changeGithub.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        userApi.endpoints.changeLinkedin.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changeLinkedin.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changeLinkedin.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        userApi.endpoints.changeLocation.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changeLocation.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changeLocation.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        userApi.endpoints.changePhone.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changePhone.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changePhone.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        userApi.endpoints.changeTelegram.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changeTelegram.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changeTelegram.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        userApi.endpoints.changeTwitter.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changeTwitter.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changeTwitter.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      // ---------------------------------------------------------
      .addMatcher(
        userApi.endpoints.changeWebsite.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        userApi.endpoints.changeWebsite.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(
        userApi.endpoints.changeWebsite.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      );
  },
});

export default userSlice.reducer;

export const selectIsError = (state) => state.user.isError;
export const selectIsPending = (state) => state.user.isPending;
