import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import cartContext from "../../strore/cart-context";
import "./ProductList.css";

function Product({ product }) {
  const cartCtx = useContext(cartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div id="music-content">
      <div id="album1">
        <h3>{product.title}</h3>

        <div className="image-container">
          <Link to={`/store/${product.id}`}>
            <img
              className="prod-images"
              src={product.imageUrl}
              alt=""
              // onClick={imageHandler}
            />
          </Link>
        </div>
        <div className="prod-details">
          <span>
            <span>${product.price}</span>
          </span>
          <button
            className="shop-item-button"
            type="button"
            onClick={submitHandler}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
