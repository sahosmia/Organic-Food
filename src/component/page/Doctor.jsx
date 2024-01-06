import React from "react";
import doctors from "../data/doctors.json";
import { Link } from "react-router-dom";
import PageBanner from "../component/tools/PageBanner";
import DoctorList from "../component/doctor/DoctorList";

function Doctor() {
  return (
    <>
      <PageBanner bg="bg-common-banner" title="Doctor" />

      <div className="container py-20">
        <DoctorList/>
      </div>
    </>
  );
}

export default Doctor;
