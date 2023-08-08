import { postApi } from "./postApi";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isPending: false,
  isError: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(postApi.endpoints.addPost.matchPending, (state, _action) => {
        state.isPending = true;
      })
      .addMatcher(
        postApi.endpoints.addPost.matchFulfilled,
        (state, _action) => {
          state.isPending = false;
        }
      )
      .addMatcher(postApi.endpoints.addPost.matchRejected, (state, _action) => {
        state.isError = true;
        state.isPending = false;
      })
      // ---------------------------------------------------------
      .addMatcher(postApi.endpoints.getAll.matchPending, (state, _action) => {
        state.isPending = true;
      })
      .addMatcher(postApi.endpoints.getAll.matchFulfilled, (state, _action) => {
        state.isPending = false;
      })
      .addMatcher(postApi.endpoints.getAll.matchRejected, (state, _action) => {
        state.isPending = false;
        state.isError = true;
      });
    // ---------------------------------------------------------
  },
});

export default postSlice.reducer;

export const selectIsError = (state) => state.post.isError;
export const selectIsPending = (state) => state.post.isPending;
