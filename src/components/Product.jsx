import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Mycontext } from "../context/ProductContext";

export const Product = (product) => {
  const { id, thumbnail, price, rating, title } = product;
  const { dispatch } = useContext(Mycontext);

  const addToCart = async () => {
    const cartitems = await axios.get(
      "https://mock-api-6jin.onrender.com/cart"
    );
    const filteritem = cartitems.data.filter((el) => el.id === id);
    if (filteritem.length === 0) {
      try {
        dispatch({ type: "ADDTOCART", payload: product });
        const response = await axios.post(
          "https://mock-api-6jin.onrender.com/cart",
          product
        );
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
          <h3>{title}</h3>
          <h4>Price: ${price}</h4>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

// Dispatch action to add to cart
// dispatch({ type: "ADDTOCART", payload: product });
//  Send a POST request to the specified URL
// fetch("https://mock-api-6jin.onrender.com/cart", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(product),
// })
//   .then((response) => {
//     if (response.ok) {
//       dispatch({ type: "ADDTOCART", payload: product });
//       console.log("Product added to cart successfully.");
//     } else {
//       console.error("Failed to add product to cart.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error while adding product to cart:", error);
//   });
