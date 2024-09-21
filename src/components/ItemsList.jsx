import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectedSearchTerm, selectItems } from "../redux/itemSlice";
import Item from "./Item";

const ItemsList = () => {
  const items = useSelector(selectItems); // items from the store
  const searchTerm = useSelector(selectedSearchTerm); // search term from the store

  // memoizing the filtered items based on search
  const filterdItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
      {filterdItems.length > 0 ? (
        filterdItems.map((item) => <Item key={item.id} item={item} />)
      ) : (
        <p className="col-span-3 text-center">No items found</p>
      )}
    </div>
  );
};

export default ItemsList;
