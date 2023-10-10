import React from "react";
import doctors from "../../data/doctors.json";
import DoctorItem from "./DoctorItem";

function DoctorList() {
  return (
    <div className="grid grid-cols-4 gap-10">
      {doctors.map((doctor, i) => (
       <DoctorItem key={i} doctor={doctor}/>
      ))}
    </div>
  );
}

export default DoctorList;
