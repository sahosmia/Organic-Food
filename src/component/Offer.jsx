import React from "react";

function Offer() {
  return (
    <div className="py-40">
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="flex-1 p-10 lg:p-20 rounded-xl bg-offer-one bg-cover bg-center bg-no-repate">
          <h4 className="secondary-title pb-4">Natural!!</h4>
          <h3 className="title-md text-light lg:w-60">Get Garden Fresh Fruits</h3>
        </div>

        <div className="flex-1 p-10 lg:p-20 rounded-xl bg-offer-two bg-cover bg-center bg-no-repate">
          <h4 className="secondary-title pb-4">Natural!!</h4>
          <h3 className=" text-main title-md lg:w-60">
            Get Garden Fresh Fruits
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Offer;
