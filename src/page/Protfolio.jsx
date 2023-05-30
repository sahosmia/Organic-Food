import React from 'react'
import PageBanner from '../component/tools/PageBanner';
import { Link } from 'react-router-dom';

function Protfolio() {
  const protfolios = [
    {
      src: "/img/protfolio/one.png",
      title: "Green & Tasty Lemon",
      category: "Fruites",
    },
    {
      src: "/img/protfolio/six.png",
      title: "Green & Tasty Lemon",
      category: "Fruites",
    },
    {
      src: "/img/protfolio/five.png",
      title: "Green & Tasty Lemon",
      category: "Fruites",
    },
    {
      src: "/img/protfolio/four.png",
      title: "Green & Tasty Lemon",
      category: "Fruites",
    },
    {
      src: "/img/protfolio/two.png",
      title: "Green & Tasty Lemon",
      category: "Fruites",
    },
    {
      src: "/img/protfolio/three.png",
      title: "Green & Tasty Lemon",
      category: "Fruites",
    },
  ];
  return (
    <div>
      <PageBanner bg="bg-banner-protfolio" title="Protfolio Standerd" />
      <div className="py-20 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {protfolios.map((protfolio, index) => (
          <div key={index}>
            <div className="relative group">
              <img className="rounded-lg mb-5 w-full" src={protfolio.src} alt="" />

              <div className="absolute opacity-0 group-hover:opacity-100 w-full h-full top-0 left-0 transition-all duration-500">
                <div className="flex flex-col justify-center gap-4 bg-light bg-opacity-80 w-[90%] h-[90%] m-auto my-[5%] rounded-lg">
                  
                  <Link to="/protfolio-single" state={protfolio} className="text-md text-main text-center"><i className='fa-solid fa-arrow-right'></i></Link>
                </div>
              </div>

            </div>
            <h2 className="title-md mb-2">{protfolio.title}</h2>
            <h4 className="secondary-title mb-5">{protfolio.category}</h4>
          </div>
        ))}
        {/* <ProductAll products={products} /> */}
      </div>
    </div>
  );
}

export default Protfolio