import React from "react";
import Hero from "../component/Hero";
import Offer from "../component/Offer";
import About from "../component/About";
import Category from "../component/Category";
import EcoFriendly from "../component/EcoFriendly";
import News from "../component/News";
import Product from "../component/Product";

function Home() {

  return (
    <>
      <Hero />
      <Offer />
      <About />
      <Product/>
      {/* <EcoFriendly/> */}
      <Category />
      <News/>
    </>
  );
}

export default Home;
