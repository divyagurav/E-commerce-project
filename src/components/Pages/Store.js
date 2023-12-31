import { useState } from "react";
import Cart from "../Cart/Cart";
import ProductList from "../Products/ProductList";
import Generic from "../Layout/Generic";
import Header from "../Layout/Header";

function Store() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div className="App">
      <Header onShow={showCartHandler} />

      <Generic />

      <ProductList />
      {showCart && <Cart onHide={hideCartHandler} />}
    </div>
  );
}

export default Store;
