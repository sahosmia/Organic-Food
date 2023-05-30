import React from "react";
import ProductAll from "./ProductAll";

function Product() {
  const products = [
    {
      title: "Calabrese Brocoli",
      oldPrice: 20.0,
      currentPrice: 13.0,
      category: "vegetable",
      src: "/img/product/one.png",
    },
    {
      title: "Calabrese Brocoli",
      oldPrice: 20.0,
      currentPrice: 13.0,
      category: "vegetable",
      src: "/img/product/two.png",
    },
    {
      title: "Calabrese Brocoli",
      oldPrice: 20.0,
      currentPrice: 13.0,
      category: "vegetable",
      src: "/img/product/three.png",
    },
    {
      title: "Calabrese Brocoli",
      oldPrice: 20.0,
      currentPrice: 13.0,
      category: "vegetable",
      src: "/img/product/four.png",
    },
    {
      title: "Calabrese Brocoli",
      oldPrice: 20.0,
      currentPrice: 13.0,
      category: "vegetable",
      src: "/img/product/five.png",
    },
    {
      title: "Calabrese Brocoli",
      oldPrice: 20.0,
      currentPrice: 13.0,
      category: "vegetable",
      src: "/img/product/six.png",
    },
  ];
  return (
    <div className="py-20">
      <div className="container text-center">
        <h4 className="secondary-title pb-2">Category</h4>
        <h2 className="title-lg pb-5">Our Products</h2>
      </div>
      <ProductAll products={products} />
    </div>
  );
}

export default Product;
