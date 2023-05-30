import React from 'react'

function Hero() {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center pt-28 pb-32 xl:pt-60 xl:pb-72 xl:pt-80 xl:pb-96">
        <div className="container">
          <h4 className="secondary-title pb-10">100% Nuturul food</h4>
          <button className="yellow-btn">
            Explore Now
            <span className="text-light bg-main w-7 h-7 rounded-full text-center flex justify-center items-center">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero