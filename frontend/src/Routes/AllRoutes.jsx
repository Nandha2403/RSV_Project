import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Home-page/Homepage";
import CaseStudy from "../Pages/Case-study/CaseStudy";
import ContactUs from "../Pages/Contact-us/ContactUs";
import AboutUs from "../Pages/About-us/AboutUs";
import Career from "../Pages/CareerPage/Career";
import ClincalTrial from "../Pages/SingleCaseStudy/AI-In-ClinicalTrial/ClincalTrial";
import Dermatology from "../Pages/SingleCaseStudy/AI-In-Derma/Dermatology";
import PairedReads from "../Pages/SingleCaseStudy/Paired-Reads/PairedReads";
import OncologyWorkflow from "../Pages/SingleCaseStudy/Oncology-Workflow/OncologyWorkflow";
import QueryManagement from "../Pages/SingleCaseStudy/Query-Management/QueryManagement";
import BusinessIntelligence from "../Pages/SingleCaseStudy/Business-Intelligence/BusinessIntelligence";
import HandScintigraphy from "../Pages/SingleCaseStudy/Hand-Scintigraphy/HandScintigraphy";
import ElectronicDataCapture from "../Pages/SingleCaseStudy/Electronic-Data-Capture/ElectronicDataCapture";
import Products from "../Pages/Products-page/Products";
import Solutions from "../Pages/Solution-page/Solutions";
import Servicepage from "../Pages/Service-page/Servicepage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="CaseStudy" element={<CaseStudy />} />
      <Route path="ContactUs" element={<ContactUs />} />
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="Career" element={<Career />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Solutions" element={<Solutions />} />
      <Route path="/Services" element={<Servicepage />} />
      <Route path="CaseStudy/AI-In-ClinicalTrial" element={<ClincalTrial />} />
      <Route path="CaseStudy/AI-In-Dermatology" element={<Dermatology />} />
      <Route
        path="CaseStudy/Business-Intelligence"
        element={<BusinessIntelligence />}
      />
      <Route
        path="CaseStudy/Oncology-Workflow"
        element={<OncologyWorkflow />}
      />
      <Route path="CaseStudy/Query-Management" element={<QueryManagement />} />
      <Route
        path="CaseStudy/Electronic-Data-Capture"
        element={<ElectronicDataCapture />}
      />
      <Route
        path="CaseStudy/Hand-Scintigraphy"
        element={<HandScintigraphy />}
      />
      <Route path="CaseStudy/Paired-Reads" element={<PairedReads />} />
    </Routes>
  );
};

export default AllRoutes;
