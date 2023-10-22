import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducerfunc } from "../reducer/ProductReducer";

export const Mycontext = createContext();
export const ContextProvider = ({ children }) => {
  const initialState = {
    products: [],
    cart: [],
    cartlength: 0,
  };
  const [state, dispatch] = useReducer(reducerfunc, initialState);
  const getData = async () => {
    try {
      const res = await fetch("https://mock-api-2fkx.onrender.com/products");
      const json = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: json });
      const cartitems = await axios.get(
        "https://mock-api-2fkx.onrender.com/cart"
      );
      dispatch({ type: "ADDTOCART", payload: cartitems.data });
      dispatch({ type: "CARTLENGTH", payload: cartitems.data.length });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Mycontext.Provider value={{ state, dispatch }}>
      {children}
    </Mycontext.Provider>
  );
};
