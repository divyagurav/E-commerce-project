import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Auth/Signup";

import About from "./components/Pages/About";
import ContactUs from "./components/Pages/ContactUs";
import Home from "./components/Pages/Home";
import Store from "./components/Pages/Store";

import ProductPage from "./components/Products/ProductPage";

// import Header from "./components/Layout/Header";
// import Generic from "./components/Layout/Generic";
// import ProductList from "./components/Products/ProductList";
// import Cart from "./components/Cart/Cart";
// import { useState } from "react";

function App() {
  // const [showCart, setShowCart] = useState(false);

  // const showCartHandler = () => {
  //   setShowCart(true);
  // };

  // const hideCartHandler = () => {
  //   setShowCart(false);
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:productId" element={<ProductPage />} />
      </Routes>

      {/* <Store /> */}
    </div>
  );
}

export default App;
