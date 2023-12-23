import axios from "axios";
import React, { useEffect, useState } from "react";
import useCartFunctions from "../hooks/CustomHook";
import { Toaster } from "react-hot-toast";
import { setSpinner } from "../redux/slices/SpinnerSlice";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import Spinner from "./Spinner";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const [product, setProduct] = useState({});
  const { addCart, removeCart, isItemInCart } = useCartFunctions();

  const fetchData = async () => {
    try {
      dispatch(setSpinner(true));
      let response = await axios(`${apiUrl}/mobiles/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      // Handle the error as needed, e.g., redirect to an error page
    } finally {
      dispatch(setSpinner(false));
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]); // Include id as a dependency to fetch data when id changes

  if (!Object.keys(product).length) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <NavBar />

      <div className="flex justify-center mt-8">
        <div className="sm:mb-8 max-w-2xl p-4 flex flex-col md:flex-row bg-white shadow-purple-300 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-700 transition duration-300 ease-in-out">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 p-4 mb-4 md:mb-0">
            <img
              className="w-auto h-auto"
              src={product.url}
              alt={product.modelName}
            />
          </div>

          {/* Right side - Mobile Details */}
          <div className="w-full md:w-1/2 p-4">
            <div className="text-center mb-4">
              <h4 className="text-2xl font-bold text-gray-800">
                {product.modelName}
              </h4>
            </div>

            <div className="mt-4">
              {product &&
                product.highlights &&
                Object.keys(product.highlights).map((item, index) => (
                  <div key={index} className="mb-2">
                    <p className="text-md">
                      <span className="font-semibold text-gray-700">
                        {item.toUpperCase()}:
                      </span>{" "}
                      {product.highlights[item]}
                    </p>
                  </div>
                ))}
            </div>

            <p className="text-gray-600 mt-4">{product.description}</p>
            <div className="flex items-center justify-between mt-5">
              <span className="text-purple-500 font-bold text-lg">
                ${product.price}
              </span>
              <div>
                {!isItemInCart(product._id) ? (
                  <button
                    onClick={() => addCart(product)}
                    className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => removeCart(product)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Remove from Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default ProductDetails;
