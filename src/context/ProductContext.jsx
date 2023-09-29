import { createContext, useEffect, useReducer, useState } from "react";
import useFetch from "../hooks/useFetch";
import { reducerfunc } from "../reducer/ProductReducer";

export const Mycontext = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(reducerfunc, initialState);
  const getData = async () => {
    try {
      const res = await fetch("https://mock-api-6jin.onrender.com/products");
      const json = await res.json();
      console.log(json);
      dispatch({ type: "FETCH_SUCCESS", payload: json });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(state);
  return (
    <Mycontext.Provider value={{ state, dispatch }}>
      {children}
    </Mycontext.Provider>
  );
};
