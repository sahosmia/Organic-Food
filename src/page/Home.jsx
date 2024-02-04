import Hero from "../component/Hero";
import Offer from "../component/Offer";
import About from "../component/About";
import Category from "../component/Category";
import News from "../component/News";
import Product from "../component/Product";

function Home() {

  return (
    <>
      <Hero />
      <Offer />
      <About />
      <Product/>
      <Category />
      <News/>
    </>
  );
}

export default Home;
