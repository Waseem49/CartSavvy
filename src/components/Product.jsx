import React from "react";

export const Product = ({
  id,
  image,
  category,
  description,
  price,
  rating,
  title,
}) => {
  return (
    <div id="product">
      <div>
        <div>
          <img src={image} alt="alt" />
          <h3>{title}</h3>
          <h4>Price: ${price}</h4>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};
