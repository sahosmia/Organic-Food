import React from "react";
import { Link } from "react-router-dom";

function ProductAll({ products }) {
  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      {products.map((product, i) => (
        <Link key={i} to="/shop-single" state={product}>
          <div className="bg-white outline outline-1 outline-slate-400  rounded-xl">
            <h5 className="bg-main text-light text-md capitalize rounded-xl px-5 py-2 m-5 inline-block">
              {product.category}
            </h5>
            <div className="w-60 m-auto">
              <img className="inline-block h-full" src={product.src} alt="" />
            </div>
            <div className="m-5 mt-0">
              <h2 className="title-sm mb-2">{product.title}</h2>
              <hr className="mb-4" />
              <div className="flex justify-between">
                <ul className="flex gap-2 font-bold">
                  <li className="line-through text-slate-300">
                    ${product.oldPrice}
                  </li>
                  <li className="text-main">${product.currentPrice}</li>
                </ul>
                <ul className="flex">
                  <li className="text-yellowca">
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li className="text-yellowca">
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li className="text-yellowca">
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li className="text-yellowca">
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li className="text-yellowca">
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductAll;
