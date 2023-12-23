import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";
import SpinnerSlice from "./slices/SpinnerSlice";
import DataSlice from "./slices/DataSlice";
import CartSlice from "./slices/CartSlice";
import SearchSlice from "./slices/SearchSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    spinner: SpinnerSlice,
    data: DataSlice,
    cart: CartSlice,
    search: SearchSlice,
  },
});
