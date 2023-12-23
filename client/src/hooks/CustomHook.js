// CustomHook.js
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import { increment, decrement } from "../redux/slices/CounterSlice";
import toast from "react-hot-toast";

const useCartFunctions = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const addCart = (item) => {
    dispatch(addToCart(item));
    dispatch(increment());
    toast.success("Item added to cart");
  };

  const removeCart = (item) => {
    dispatch(removeFromCart(item));
    dispatch(decrement());
    toast.error("Item removed from cart");
  };

  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item._id === itemId);
  };

  return { addCart, removeCart, isItemInCart };
};

export default useCartFunctions;
