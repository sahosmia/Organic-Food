import { Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

// Page
import Home from "../page/Home";
// import About from "../page/About";
import Blog from "../page/Blog";
import BlogSingle from "../page/BlogSingle";
import Contact from "../page/Contact";
import Team from "../page/Team";
import Shop from "../page/Shop";
import ShopSingle from "../page/ShopSingle";
import Protfolio from "../page/Protfolio";
import ProtfolioSingle from "../page/ProtfolioSingle";

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        {/* <Route path="about" element={<About />} /> */}
        <Route path="news" element={<Blog />} />
        <Route path="news-single" element={<BlogSingle />} />

        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />} />
        
        <Route path="shop" element={<Shop />} />
        <Route path="shop-single" element={<ShopSingle />} />

        <Route path="protfolio" element={<Protfolio />} />
        <Route path="protfolio-single" element={<ProtfolioSingle />} />
      
      </Route>
    </Routes>
  );
}
