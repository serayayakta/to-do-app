import { configureStore } from "@reduxjs/toolkit";
import listSlice from "../features/list/listSlice";

const store = configureStore({
  reducer: {
    list: listSlice,
  },
});

export default store;
