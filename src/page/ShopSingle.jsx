import React, { useState } from "react";
import PageBanner from "../component/tools/PageBanner";
import ProductAll from "../component/ProductAll";
import { useLocation } from "react-router";
import MainBtn from "../component/tools/btn/MainBtn";

function ShopSingle() {
  const location = useLocation();

  const products = [
    {
      title: "Calabrese Brocoli",
      oldPrice: 20.0,
      currentPrice: 13.0,
      category: "vegetable",
      src: "/img/product/one.png",
      tab: [
        {
          title: "Product Description",
          des: "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
        },
        {
          title: "Additional Info",
          des: "Info to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
        },
        {
          title: "Review",
          des: "Review",
        },
      ],
    },
    {
      title: "Calabrese Brocoli",
      oldPrice: 20.0,
      currentPrice: 13.0,
      category: "vegetable",
      src: "/img/product/two.png",
      tab: [
        {
          title: "Product Description",
          des: "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
        },
        {
          title: "Additional Info",
          des: "Info to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
        },
        {
          title: "Review",
          des: "Review",
        },
      ],
    },
    {
      title: "Calabrese Brocoli",
      oldPrice: 20.0,
      currentPrice: 13.0,
      category: "vegetable",
      src: "/img/product/three.png",
      tab: [
        {
          title: "Product Description",
          des: "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
        },
        {
          title: "Additional Info",
          des: "Info to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
        },
        {
          title: "Review",
          des: "Review",
        },
      ],
    },

    {
      title: "Calabrese Brocoli",
      oldPrice: 20.0,
      currentPrice: 13.0,
      category: "vegetable",
      src: "/img/product/seven.png",
      tab: [
        {
          title: "Product Description",
          des: "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
        },
        {
          title: "Additional Info",
          des: "Info to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
        },
        {
          title: "Review",
          des: "Review",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <PageBanner bg="bg-banner-shop-single" title="Shop Single" />
      <div className="container py-10 flex flex-col md:flex-row items-center">
        <div className="flex-1 ">
          <h5 className="bg-main text-light text-md capitalize rounded-xl px-5 py-2 m-5 inline-block">
            {location.state.category}
          </h5>
          <img
            className="w-auto block m-auto"
            src={location.state.src}
            alt=""
          />
        </div>
        <div className="flex-1 ">
          <div className="mx-20">
            <h2 className="title-lg mb-2">{location.state.title}</h2>
            <ul className="flex mb-2">
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

            <ul className="flex gap-2 font-bold mb-10">
              <li className="line-through text-slate-300">
                ${location.state.oldPrice}
              </li>
              <li className="text-main">${location.state.currentPrice}</li>
            </ul>

            <p className="mb-10">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <form className="flex gap-5 items-center">
              <lable className="title-sm font-bold text-main">Quantity :</lable>
              <input
                type="number"
                className="outline outline-2 outline-main text-center rounded-lg w-28 h-7 font-bold py-8 title-sm text-main"
                min="1"
                max="10"
                defaultValue={1}
              />
              <MainBtn title="Add To Cart" />
            </form>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="flex justify-center gap-5 mb-10">
          {location.state.tab.map((tabItem, index) => (
            <button
              key={index}
              className={`font-bold px-7 py-5 rounded-lg ${
                index === activeTab
                  ? "bg-main text-light"
                  : "bg-slate-200 text-main"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tabItem.title}
            </button>
          ))}
        </div>
        <div className="w-full lg:w-4/5 text-center m-auto">
          <p>{location.state.tab[activeTab].des}</p>
        </div>
      </div>
      <div className="py-20">
        <ProductAll products={products} />
      </div>
    </div>
  );
}

export default ShopSingle;
