import React, { useEffect, useRef, useState } from "react";
import { Product } from "./Product";

const Hpwithinfinitescrolling = () => {
  const observerTarget = useRef(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  function createObserver() {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore) {
          setIsLoading(true);
          loadMoreData(page).then((newItems) => {
            if (newItems.length > 0) {
              setItems((prevItems) => [...prevItems, ...newItems]);
              setPage((prevPage) => prevPage + 1);
            } else {
              setHasMore(false);
            }
            setIsLoading(false);
          });
        }
      });
    });
  }

  function loadMoreData(page) {
    return fetch(`https://fakestoreapi.com/products?page=${page}`)
      .then((response) => response.json())
      .then((data) => data);
  }

  useEffect(() => {
    const observer = createObserver();
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        width: "80%",
        margin: "auto",
      }}>
      {items.map((el, i) => (
        <Product {...el} key={i} />
      ))}
      {isLoading && <h1>Loading...</h1>}
      {!hasMore && <h1>No more items available to load</h1>}
      <div ref={observerTarget}></div>
    </div>
  );
};

export default Hpwithinfinitescrolling;
