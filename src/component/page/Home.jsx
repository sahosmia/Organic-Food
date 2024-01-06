import React from "react";
import Hero from "../component/Hero";
import BloodGroupList from "../component/blood/BloodGroupList";
import Address from "../component/home/Address";
import Doctors from "../component/home/Doctors";
import Appointment from "../component/home/Appointment";
import Choose from "../component/home/Choose";

function Home() {
  return (
    <>
      <Hero />
      <Address />
      <Choose/>
      <div className="container">
        <BloodGroupList />
      </div>
      <Doctors />
      <Appointment />
    </>
  );
}

export default Home;
