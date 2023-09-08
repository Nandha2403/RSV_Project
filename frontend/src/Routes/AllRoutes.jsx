import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Home-page/Homepage";
import CaseStudy from "../Pages/Case-study/CaseStudy";
import ContactUs from "../Pages/Contact-us/ContactUs";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Case-study" element={<CaseStudy />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
  );
};

export default AllRoutes;
