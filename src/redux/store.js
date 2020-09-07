import { configureStore } from "@reduxjs/toolkit";
import session from "./sessionReducer";

const store = configureStore({
  reducer: {
    session
  }
});

export default store;
