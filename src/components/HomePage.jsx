import React from "react";
import useFetch from "../hooks/useFetch";
import { Product } from "./Product";

const HomePage = () => {
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
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
        {data?.map((el, i) => (
          <div key={i}>
            <Product {...el} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
