import React from "react";

function DoctorItem({ doctor }) {
  return (
    <>
      <div className="overflow-hidden  transition-all duration-500 group">
        <img
          className="inline-block object-fill w-full rounded-xl"
          src={doctor.img}
          alt={doctor.name}
        />

        <div className="mt-10 group-hover:mt-5 transition-all duration-500">
          <h4 className="text-3xl text-secondary pb-2">{doctor.name}</h4>
          <h6 className="text-md text-main pb-5">{doctor.title}</h6>
        </div>
      </div>
    </>
  );
}

export default DoctorItem;
