import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";

const store = configureStore({
  reducer:{
    auth: authSlice,
    //Add more slices here for post
  }
})
export default store;