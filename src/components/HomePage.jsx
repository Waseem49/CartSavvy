import React, { useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Product } from "../components/Product";
import { Mycontext } from "../context/ProductContext";

const HomePage = () => {
  const { state } = useContext(Mycontext);
  console.log(state);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "auto",
          width: "80%",
        }}>
        {state?.products?.map((el, i) => (
          <div key={i}>
            <Product {...el} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
