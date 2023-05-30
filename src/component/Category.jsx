import React from "react";

function Category() {
  const datas = [
    {
      src: "/img/category/one.jpg",
      alt: "category one",
      btnText: "Organic Food",
    },
    {
      src: "/img/category/two.jpg",
      alt: "category two",
      btnText: "Organic Jucie",
    },
    {
      src: "/img/category/three.jpg",
      alt: "category three",
      btnText: "Nut Cookics",
    },
  ];
  return (
    <div className="bg-whitethree py-28">
      <div className=" flex flex-col items-center md:flex-row gap-5 md:gap-8">
        {datas.map((data, i) => (
          <div
            key={i}
            className="group overflow-hidden flex-1 relative"
          >
            <img
              className="group-hover:scale-110 transition-all duration-700 inline-block w-full"
              src={data.src}
              alt={data.alt}
            />
            <div className="absolute inline  top-0 left-0 w-full h-full flex justify-center items-center">
              <a className="text-main font-bold inline-block bg-light px-7 py-5 rounded">
                {data.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
