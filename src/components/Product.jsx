import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Mycontext } from "../context/ProductContext";

export const Product = (product) => {
  const { id, thumbnail, price, title } = product;
  const { dispatch, state } = useContext(Mycontext);

  const addToCart = async () => {
    const filteritem = state.cart.filter((el) => el.id === id);

    if (filteritem.length === 0) {
      try {
        dispatch({ type: "ADDTOCART", payload: [product] });
        const response = await axios.post(
          "https://mock-api-2fkx.onrender.com/cart",
          product
        );
        dispatch({ type: "CARTLENGTH", payload: ++state.cart.length });
        toast("Product added to cart successfully", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        toast(error.message, {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.error("Failed to add product to cart:", error);
      }
    } else {
      toast("This product is already in your cart.", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div id="product">
      <div>
        <div>
          <img src={thumbnail} alt="alt" />
          <h3>{title.substring(0, 30)}</h3>
          <h4>Price: ${price}</h4>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};
