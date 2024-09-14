import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registeredUsersList: JSON.parse(localStorage.getItem("registeredList")) || [],
  registerStatus: "",
  loginStatus: "",
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser(state, action) {
      const isIncluded = state.registeredUsersList.some(
        (user) => user.email === action.payload.email
      );
      if (isIncluded) {
        state.registerStatus = "already-registered";
      } else {
        console.log(action.payload);
        state.registerStatus = "registered";
        state.registeredUsersList.push(action.payload);
        state.user = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem(
          "registeredList",
          JSON.stringify(state.registeredUsersList)
        );
      }
    },
    signupUser(state, action) {
      const isIncluded = state.registeredUsersList.find(
        (user) => user.email === action.payload.email
      );
      console.log(isIncluded);
      if (
        isIncluded?.email &&
        isIncluded?.password &&
        isIncluded?.email === action.payload?.email &&
        isIncluded?.password === action.payload?.password
      ) {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loginStatus = "success";
      } else {
        state.loginStatus = "fail";
      }
    },
    logoutUser(state) {
      (state.user = null), (state.isAuthenticated = false);
      state.registerStatus = "";
      state.loginStatus = "";
    },
  },
});

export const { registerUser, signupUser, logoutUser } = userSlice.actions;

export const getUserName = (email) => (store) => {
  return (
    store.user.registeredUsersList.find((user) => user.email === email)?.name ??
    ""
  );
};

export default userSlice.reducer;
