import React, { useContext } from "react";
import { Mycontext } from "../context/ProductContext";

export const Product = (product) => {
  const { id, thumbnail, price, rating, title } = product;
  const { dispatch } = useContext(Mycontext);
  return (
    <div id="product">
      <div>
        <div>
          <img src={thumbnail} alt="alt" />
          <h3>{title}</h3>
          <h4>Price: ${price}</h4>
        </div>
        <button
          onClick={() => dispatch({ type: "ADDTOCART", payload: product })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
