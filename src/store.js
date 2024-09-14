import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import todoReducer from "./features/todo/todoSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
});

export default store;
