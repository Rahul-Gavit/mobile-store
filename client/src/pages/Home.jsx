import React from "react";
import NavBar from "../components/NavBar";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Home;
