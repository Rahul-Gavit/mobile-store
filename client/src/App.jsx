import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSpinner } from "./redux/slices/SpinnerSlice";
import { setData } from "./redux/slices/DataSlice";
import Cart from "./pages/Cart";
import Mobile from "./pages/Mobile";
import { setAllMobiles } from "./redux/slices/SearchSlice";

function App() {
  const dispatch = useDispatch();
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const fetchData = async () => {
    dispatch(setSpinner(true));
    try {
      const response = await axios(`${apiUrl}/mobiles`);
      dispatch(setData(response.data));
      dispatch(setAllMobiles(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setSpinner(false));
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mobiles" element={<Home />} />
      <Route path="/mobiles/:id" element={<Mobile />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
