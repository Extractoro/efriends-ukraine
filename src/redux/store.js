import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/authSlice";
import { authApi } from "./auth/authApi";
import userSlice from "./user/userSlice";
import { userApi } from "./user/userApi";
import postSlice from "./posts/postSlice";
import { postApi } from "./posts/postApi";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isLoggedIn", "user"],
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: persistReducer(authPersistConfig, authSlice),
    user: userSlice,
    post: postSlice,
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    userApi.middleware,
    postApi.middleware,
  ],
  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
