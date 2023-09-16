import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Home-page/Homepage";
import CaseStudy from "../Pages/Case-study/CaseStudy";
import ContactUs from "../Pages/Contact-us/ContactUs";
import AboutUs from "../Pages/About-us/AboutUs";
import Career from "../Pages/CareerPage/Career";
import ClincalTrial from "../Pages/SingleCaseStudy/AI-In-ClinicalTrial/ClincalTrial";
import Dermatology from "../Pages/SingleCaseStudy/AI-In-Derma/Dermatology";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/CaseStudy" element={<CaseStudy />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/CaseStudy/AI-In-ClinicalTrial" element={<ClincalTrial />} />
      <Route path="/CaseStudy/AI-In-Dermatology" element={<Dermatology />} />
    </Routes>
  );
};

export default AllRoutes;
