const reducerfunc = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, products: [...state.products, ...action.payload] };
    case "ADDTOCART":
      return { ...state, cart: [...state.cart, ...action.payload] };
    case "CARTLENGTH":
      return { ...state, cartlength: action.payload };
    default:
      return state;
  }
};

export { reducerfunc };
