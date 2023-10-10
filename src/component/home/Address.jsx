import React from "react";
import { Link } from "react-router-dom";

function Address() {
  return (
    <div className="">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 itmems-center">
          <div className=" bg-address-pattern bg-no-repeat bg-center md:col-span-2 p-10 pl-0 flex justify-center flex-col">
            <h6 className="text-main text-lg md:text-2xl w-44 md:w-72 pb-2 md:pb-5">
              24 hours emergency assistance call us
            </h6>
            <h3 className="text-secondary text-2xl md:text-5xl">01952827301</h3>
          </div>

          <div className="bg-secondary lg:bg-main p-10 group relative overflow-hidden">
            <span className="text-light text-5xl pb-10 block ">
              <i className="fa-regular fa-calendar-days"></i>
            </span>
            <h5 className="text-light text-2xl pb-5 mb-5 border-b border-light border-opacity-20 inline-block pr-20 max-md:block">
              Request Appoinment
            </h5>

            <Link className="text-light underline font-bold">
              Appointment Hete
            </Link>
            <span className="text-light text-opacity-10 text-9xl pb-10 block absolute -right-10 top-10">
              <i className="fa-regular fa-calendar-days"></i>
            </span>
          </div>

          <div className="bg-cover bg-address-two-pattern bg-center bg-no-repeat "></div>
          <div className="bg-cover bg-address-three-pattern bg-center bg-no-repeat hidden md:block"></div>

          <div className="bg-main lg:bg-secondary p-10 group relative overflow-hidden">
            <span className="text-light text-5xl pb-10 block ">
              <i className="fa-regular fa-heart"></i>
            </span>
            <h5 className="text-light text-2xl pb-5 mb-5 border-b border-light border-opacity-20 inline-block pr-20 max-md:block">
              Our Location Support
            </h5>

            <Link className="text-light underline font-bold">Contact Us</Link>
            <span className="text-light text-opacity-10 text-9xl pb-10 block absolute -right-10 top-10">
              <i className="fa-regular fa-heart"></i>
            </span>
          </div>

          <div className="bg-cover bg-address-four-pattern bg-center hidden md:block max-lg:order-1"></div>

          <div className="bg-secondary p-10 group relative overflow-hidden">
            <span className="text-light text-5xl pb-10 block ">
              <i className="fa-solid fa-stethoscope"></i>
            </span>
            <h5 className="text-light text-2xl pb-5 mb-5 border-b border-light border-opacity-20 inline-block pr-20 max-md:block">
              Find the best doctor
            </h5>

            <Link className="text-light underline font-bold">Doctors</Link>
            <span className="text-light text-opacity-10 text-9xl pb-10 block absolute -right-10 top-10">
              <i className="fa-solid fa-stethoscope"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
