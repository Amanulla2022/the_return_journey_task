import React from "react";

const Item = ({ item }) => {
  return (
    <div className="bg-gray-200 shadow-xl rounded-md p-2 m-2">
      <span className="bg-violet-500 rounded-md text-white p-1 px-2 my-4">
        {item.id}
      </span>
      <p className="text-xl font-semibold text-center">{item.name}</p>
      <p className="text-gray-600 rounded-md text-center">{item.description}</p>
      <p className="text-end text-gray-700 text-md">
        Items left: <span className="text-red-600">{item.quantity}</span>
      </p>
      <p className="text-start text-gray-700 text-md">
        Price:{" "}
        <span className="text-green-600">
          <span className="text-red-600">₹</span>
          {item.price}
        </span>
      </p>
    </div>
  );
};

export default Item;
