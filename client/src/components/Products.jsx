import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Spinner from "./Spinner";

const Products = () => {
  const spinner = useSelector((state) => state.spinner);

  return (
    <div>
      {spinner ? (
        <Spinner />
      ) : (
        <div>
          <Card />
        </div>
      )}
    </div>
  );
};

export default Products;
