import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import CartItem from "../components/CartItem";
import { removeFromCart } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { reset } from "../redux/slices/CounterSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cartItems.reduce((acc, curr) => acc + curr.price, 0));
  }, [cartItems]);

  const checkOut = () => {
    // Reset total amount and remove items from the cart
    setTotalAmount(0);
    cartItems.forEach((item) => dispatch(removeFromCart(item)));
    // dispatch(decrement(cartItems.length));
    dispatch(reset());
    toast.success("Checkout successful!");
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start">
        <CartItem />
        <Toaster position="top-center" />
        {totalAmount > 0 ? (
          <div className="w-full md:w-6/12 flex flex-col justify-start p-4 md:p-8 mt-4 md:mt-0">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">Your Cart</h2>
              <div className="text-gray-600">Summary</div>
              <div className="flex items-center mt-2">
                <span className="text-xl font-semibold">Total:</span>{" "}
                <span className="text-xl font-bold">
                  {" "}
                  $
                  {totalAmount.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={checkOut}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Check Out
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-2xl mb-8 font-bold">Empty Cart</p>
            <button
              className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              onClick={() => navigate("/mobiles")}
            >
              Show Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
