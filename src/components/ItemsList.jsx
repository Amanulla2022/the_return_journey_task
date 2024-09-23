import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectedSearchTerm, selectItems } from "../redux/itemSlice";
import Item from "./Item";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const ItemsList = () => {
  const items = useSelector(selectItems); // items from the store
  const searchTerm = useSelector(selectedSearchTerm); // search term from the store

  const [currentPage, setCurrentPage] = useState(1); // state for current page
  const itemsPerpage = 9;

  // memoizing the filtered items based on search
  const filterdItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // calculating the total number of pages
  const totalPages = Math.ceil(filterdItems.length / itemsPerpage);

  // slicing the filtered items for the current page
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerpage;
    const endIndex = startIndex + itemsPerpage;

    return filterdItems.slice(startIndex, endIndex);
  }, [filterdItems, currentPage, itemsPerpage]);

  // handling previous page
  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  // handling next page
  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, totalPages]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => <Item key={index} item={item} />)
        ) : (
          <p className="col-span-3 text-center">No items found</p>
        )}
      </div>

      {/* only display pagination button when length of items greater than 0 */}
      {currentItems.length > 0 && (
        <div className="pagination-controls flex justify-center space-x-4 m-4">
          {/* Only display "Previous" if currentPage > 1 */}
          {currentPage > 1 && (
            <button
              className="p-2 bg-gray-700 text-white hover:text-black hover:bg-gray-300 rounded-full"
              onClick={handlePreviousPage}
            >
              <GrLinkPrevious />
            </button>
          )}

          <p className="px-4 py-2 text-xl">
            Page <span className="text-red-500 underline">{currentPage}</span>{" "}
            of <span className="text-green-500">{totalPages}</span>
          </p>

          {/* Only display "Next" if currentPage < totalPages */}
          {currentPage < totalPages && (
            <button
              className="p-2 bg-gray-700 text-white hover:text-black hover:bg-gray-300 rounded-full"
              onClick={handleNextPage}
            >
              <GrLinkNext />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ItemsList;
