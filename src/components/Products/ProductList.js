import React from "react";
import Product from "./Product";
import "./ProductList.css";

export default function ProductList() {
  const productsArr = [
    {
      id: "p1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "p2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "p3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "p4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="product-list">
        {productsArr.map((product) => (
          <div>
            <Product key={product.id} product={product}></Product>
          </div>
        ))}
      </div>
    </div>
  );
}
