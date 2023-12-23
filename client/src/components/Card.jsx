import React from "react";
import { useSelector } from "react-redux";
import useCartFunctions from "../hooks/CustomHook";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { selectFilteredMobiles } from "../redux/slices/SearchSlice";

const Card = () => {
  const filteredMobiles = useSelector(selectFilteredMobiles);
  const { addCart, removeCart, isItemInCart } = useCartFunctions();
  const navigate = useNavigate();

  const navigateToMobile = (productId, product) => {
    navigate(`/mobiles/${productId}`, { state: { product } });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {filteredMobiles.map((item, index) => (
          <div
            key={index}
            className="max-w-xs mx-2 my-4 p-4 bg-white shadow-purple-300 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-700 transition duration-300 ease-in-out"
          >
            <img
              className="w-auto h-auto"
              src={item.url}
              alt={item.modelName}
            />
            <div className="px-4 py-2">
              <h4 className="text-xl font-semibold text-gray-800">
                {item.modelName}
              </h4>
              <p className="text-gray-600">{item.description}</p>
              <span className="text-purple-500 font-bold">${item.price}</span>
            </div>
            <div className="flex justify-evenly">
              {!isItemInCart(item._id) ? (
                <button
                  onClick={() => addCart(item)}
                  className="bg-purple-500 shadow-md shadow-purple-800 text-white px-4 py-2 rounded-lg mt-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Add to Cart
                </button>
              ) : (
                <>
                  <button
                    onClick={() => removeCart(item)}
                    className="bg-red-500 shadow-md shadow-red-800 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Remove to Cart
                  </button>
                </>
              )}
              <Toaster />
              <div>
                <button
                  onClick={() => navigateToMobile(item._id, item)}
                  className="bg-yellow-300 shadow-md shadow-yellow-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-yellow-400 focus:outline-none focus:shadow-outline-purple"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
