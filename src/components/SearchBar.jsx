import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/itemSlice";

const SearchBar = () => {
  const dispatch = useDispatch(); // dispatch function

  // handling input change
  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value)); // dispatching search term
  };

  return (
    <input
      type="text"
      placeholder="Search Items..."
      className="my-4 py-2 px-4 w-4/5 text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={handleSearchChange} // onchange of input
    />
  );
};

export default SearchBar;
