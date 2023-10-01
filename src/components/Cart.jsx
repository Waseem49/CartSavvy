import React, { useContext } from "react";
import { Mycontext } from "../context/ProductContext";

const Cart = () => {
  const { state } = useContext(Mycontext);
  const totalPrice = state.cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h1>My Cart Items</h1>
      <div>
        <div>
          <div>
            {state.cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {state.cart.map((el) => (
                  <div className="cartitem">
                    <img src={el.thumbnail} alt="alt" />
                    <div>
                      <h3>{el.title.substring(0, 18)}</h3>
                      <div>
                        <h4>Price: ${el.price}</h4>
                        <button>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <div>
            {state.cart.length > 0 && (
              <div>
                <h3>Order Summary</h3>
                <p>Total: ${totalPrice.toFixed(2)}</p>
                <button>Proceed to Checkout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
