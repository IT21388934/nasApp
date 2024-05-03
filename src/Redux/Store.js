import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";

// import store from "./store";
const persistedAuthState = localStorage.getItem("userState");
const preloadedState = persistedAuthState ? JSON.parse(persistedAuthState) : {};

const store = configureStore({
  reducer: {
    user: userReducer,

    // other reducers
  },
  preloadedState,
});

export default store;
