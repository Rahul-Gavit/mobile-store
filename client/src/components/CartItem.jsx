import React from "react";
import { useSelector } from "react-redux";
import useCartFunctions from "../hooks/CustomHook";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { removeCart } = useCartFunctions();

  return (
    <div className="lg:w-6/12 md:w-full sm:w-full p-4">
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row max-w-md mx-auto my-4 p-4 bg-white shadow-purple-300 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-700 transition duration-300 ease-in-out"
        >
          <img
            className="w-full h-auto sm:w-24 sm:h-24 mr-4 mb-4 sm:mb-0"
            src={item.url}
            alt={item.modelName}
          />
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                {item.modelName}
              </h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-purple-500 font-bold">${item.price}</span>
              <button
                onClick={() => removeCart(item)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
