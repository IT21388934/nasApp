import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isAuthenticating: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.isAuthenticating = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isAuthenticating = true;
      localStorage.setItem("userState", JSON.stringify(state));
      // Set a timer to clear local storage after half day

      setTimeout(() => {
        localStorage.removeItem("userState");
      }, 43200000);

      state.error = false;

      // console.log("currentUser: ", state.currentUser);
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.isAuthenticating = false;
      state.errorMessage = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.isAuthenticating = false;
      state.isFetching = false;
      state.error = false;
      state.errorMessage = "";
      localStorage.removeItem("userState");
      console.log("User logged out");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;
export default userSlice.reducer;
