import { Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

// Page
import Home from "../page/Home";
// import About from "../page/About";

import Contact from "../page/Contact";
// import Specialities from "../page/Specialities";
import Blood from "../page/Blood";
import Doctor from "../page/Doctor";
import Clinik from "../page/Clinik";
import BloodGroup from "../page/BloodGroup";

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="specialities" element={<Specialities />} /> */}
        <Route path="blood" element={<Blood />} />
        <Route path="blood/:group" element={<BloodGroup />} />

        <Route path="doctor" element={<Doctor />} />
        <Route path="clinik" element={<Clinik />} />


        <Route path="contact" element={<Contact />} />



      </Route>
    </Routes>
  );
}
