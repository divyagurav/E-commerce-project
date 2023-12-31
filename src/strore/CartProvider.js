import { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCartState = {
  products: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    const existingCartItemIndex = state.products.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.products[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };

      updatedItems = [...state.products];

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.products.concat(action.item);
    }

    return {
      products: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.products.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.products[existingCartItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingCartItem.price * existingCartItem.quantity;
    let updatedItems;
    updatedItems = state.products.filter((item) => item.id !== action.id);

    return {
      products: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const Context = {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <cartContext.Provider value={Context}>
      {props.children}
    </cartContext.Provider>
  );
}

export default CartProvider;
