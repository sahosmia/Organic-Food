import React from "react";
import DoctorList from "../doctor/DoctorList";

function Doctors() {
  return (
    <div>
      <div className="container">
        <div className="m-auto w-full md:w-1/2 text-center mb-8 md:mb-20">
          <h2 className="text-[24px] md:text-[40px] text-secondary font-bold md:pb-4">
            Our Medical Specialists
          </h2>
          <p className="text-[#999999] text-sm md:text-base px-2">
            Experience the Convenience and Versatility of Our Expansive
            Marketplace, Offering a Vast Array of Cutting-Edge SaaS Solutions to
            Fuel Your Business Success
          </p>
        </div>
        <DoctorList />
      </div>
    </div>
  );
}

export default Doctors;
