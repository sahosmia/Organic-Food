import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center py-20 lg:py-44 xl:py-56">
        <div className="container">
          <h6 className="text-lg text-main lg:text-3xl leading-tight lg:w-1/2 w-full pb-4">
            Welcome to our medicale center
          </h6>
          <h4 className="text-3xl lg:text-5xl text-secondary leading-tight lg:w-1/2 w-full pb-5 lg:pb-10">
            We take care our paients helth
          </h4>
          <p className="font-medium pb-10 md:w-96">
            I realized that becoming a doctor, I can only help a small
            community.But by becoming a doctor, I can help my whole country.
          </p>
          <button className="text-light font-bold bg-secondary px-8 py-4 lg:px-10 lg:py-5 rounded flex items-center gap-2">
            Book Appointment
            
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
