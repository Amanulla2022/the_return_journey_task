// Redux slice for managing items and search functionality
import { createSlice } from "@reduxjs/toolkit";
import itemsData from "../dummy/items.json"; // importing dummy data

const items = itemsData.items.map((item) => ({
  ...item,
}));

// Initial state of the items slice, with a empty search term
const initialState = {
  items,
  searchTerm: "",
};

// creating the items slice
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // action for search term in the state
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// exporting actions and selectors
export const { setSearchTerm } = itemsSlice.actions;
export const selectItems = (state) => state.items.items;
export const selectedSearchTerm = (state) => state.items.searchTerm;
export default itemsSlice.reducer;
