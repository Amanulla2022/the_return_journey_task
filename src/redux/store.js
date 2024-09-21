// setting the redux store
import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer, // adding the items reducer to the store
  },
});
