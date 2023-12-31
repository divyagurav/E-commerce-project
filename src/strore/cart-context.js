import React from "react";

const cartContext = React.createContext({
  products: [],
  totalAmount: 0,
  totalQuantity: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default cartContext;
