import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
import CaseStudyIntroImg from "../../Images/CaseStudy-IntroImg.png";
import CaseImg1 from "../../Images/CaseStudyImg-1.jpeg";
import CaseImg2 from "../../Images/CaseStudyImg-2.jpeg";
import CaseImg3 from "../../Images/CaseStudyImg-3.jpeg";
import CaseImg4 from "../../Images/CaseStudyImg-4.jpeg";
import CaseImg5 from "../../Images/CaseStudyImg-5.jpeg";
import CaseImg6 from "../../Images/CaseStudyImg-6.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CaseStudy.css";
import Footer from "../../Components/Footer/Footer";
import "react-fancy-circular-carousel/FancyCarousel.css";
import FancyCarousel from "react-fancy-circular-carousel";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const screenWidth = window.screen.width;
  // console.log(`Screen Width: ${screenWidth}px`);

  const images = [CaseImg1, CaseImg2, CaseImg3, CaseImg4, CaseImg5, CaseImg6,CaseImg4,CaseImg5];
  const info = [
    "AI In Clincal Trial",
    "AI In Dermatology",
    "Business Intelligence",
    "Oncology Workflow",
    "Query Management",
    "Electronic Data Capture",
    "Hand Scintigraphy",
    "Paired Reads",
  ];
  const content = [
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis voluptates facere sunt dolorum aperiam, beatae exercitationem animi nostrum? Eaque.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis voluptates facere.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis voluptates.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis.",
  ];

  // <Route path="CaseStudy/AI-In-ClinicalTrial" element={<ClincalTrial />} />
  // <Route path="CaseStudy/AI-In-Dermatology" element={<Dermatology />} />
  // <Route
  //   path="CaseStudy/Business-Intelligence"
  //   element={<BusinessIntelligence />}
  // />
  // <Route
  //   path="CaseStudy/Oncology-Workflow"
  //   element={<OncologyWorkflow />}
  // />
  // <Route path="CaseStudy/Query-Management" element={<QueryManagement />} />
  // <Route
  //   path="CaseStudy/Electronic-Data-Capture"
  //   element={<ElectronicDataCapture />}
  // />
  // <Route
  //   path="CaseStudy/Hand-Scintigraphy"
  //   element={<HandScintigraphy />}
  // />
  // <Route path="CaseStudy/Paired-Reads" element={<PairedReads />} />

  const linkBtn = [
    "/CaseStudy/AI-In-ClinicalTrial",
    "/CaseStudy/AI-In-Dermatology",
    "/CaseStudy/Business-Intelligence",
    "/CaseStudy/Oncology-Workflow",
    "/CaseStudy/Query-Management",
    "/CaseStudy/Electronic-Data-Capture",
    "/CaseStudy/Hand-Scintigraphy",
    "/CaseStudy/Paired-Reads",
  ];

  const [focusElement, setFocusElement] = useState(0);
  //
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Menu />
      <Box className="bodyContainerCS">
        <Box className="BannerContainerCS">
          <Navbar />
          {/* Banner area */}
          <Box textAlign={"left"} color={"white"}>
            <Box pt={"6rem"}>
              <Text
                fontSize={"4xl"}
                ml={"1.5rem"}
                fontWeight={"bold"}
                fontFamily={"poppins"}
              >
                Case Study
              </Text>
            </Box>
            <Box ml={"1.5rem"} mt={"2rem"} w={"35%"}>
              <Text fontSize={"sm"}>
                Radient Sages's Solutions Exemplify, how it can be Leveraged in
                Clinical Imaging Trails to enable the smooth Acquistion,
                Processing, and Delivery of information on a Timely basis
              </Text>
            </Box>
            <Box ml={"1.5rem"} mt={"2rem"} pb={"4rem"}>
              <Button
                size={"xs"}
                borderRadius={"15px"}
                p={"0px 20px 0px 20px"}
                colorScheme="#131049"
                bg="#131049"
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Case Study */}
        <Box className="CaseStudyIntro">
          <Box className="CaseStudyHeading">
            <Text
              className="headings"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              CASE STUDY :
            </Text>
          </Box>
          <Box
            className="CaseStudy-SubHeading"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            <Text>Revolutionizing Clinical Trial with AI</Text>
          </Box>
          <Box className="CaseStudyConatiner">
            <Box
              className="CaseStudyMain-Left"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <img src={CaseStudyIntroImg} alt="CaseStudyIntroImg" />
            </Box>
            <Box
              className="CaseStudyMain-Right"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <Box className="CaseStudy-SubHeading">
                <Text>Introduction :</Text>
              </Box>
              <Box className="CaseStudy-text">
                <Text data-aos="fade-up" data-aos-duration="1000">
                  Image data is hard to manage and store for pharmaceutical
                  companies, especially when they need to share it for
                  licencing, acquisition, or due diligence.
                </Text>
                <Text data-aos="fade-up" data-aos-duration="1000" mt={"2rem"}>
                  Image analysis is often a key endpoint for showing the
                  efficacy of a drug, but without proper data warehousing, it
                  can be difficult to reproduce the results and prove the value
                  of thdrug.
                </Text>
                <Text data-aos="fade-up" data-aos-duration="1000" mt={"2rem"}>
                  Reproducibility is essential for providing hard evidence to
                  regulators and investors.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Circle Animation */}
        <div className="CircularImg">
          <div className="carousel">
            <div className="wheel">
              <FancyCarousel
                carouselRadius={screenWidth <= 767 ? 110 : 150}
                peripheralImageRadius={screenWidth <= 767 ? 30 : 40}
                centralImageRadius={screenWidth <= 767 ? 40 : 60}
                focusElementStyling={{ border: "1px solid black" }}
                autoRotateTime={3}
                borderWidth={4}
                borderHexColor={"1c364f"}
                images={images}
                setFocusElement={setFocusElement}
              />
            </div>
            <div className="info-box-wrapper">
              <p className="info-title"> {info[focusElement]} </p>
              <p className="info-content"> {content[focusElement]} </p>
              <button>
                <Link to={linkBtn[focusElement]} target="_top">Learn More</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Advantage and Challenges */}
        <Box className="AdvantangeAndChallenges">
          <Box className="Adavantage">
            <Box
              className="title-box1"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <Box className="title-text-container">
                <Text>Adavantage</Text>
              </Box>
            </Box>
            <Box
              className="Content-box"
              // data-aos="fade-down"
              // data-aos-duration="2000"
            >
              <ul>
                <li>Reducing Clinical Trial Cycle Times</li>
                <li>
                  Improving cost of Productivity and Outcomes of Clinical
                  development
                </li>
                <li>Monitoring Participants Adherence</li>
                <li>Improving Quality of Patient pool & Trail Design</li>
                <li>Aiding in Clinical Trail Data Gathering & Analysis</li>
                <li>Improving Patient Experience During Clinical Trails</li>
              </ul>
            </Box>
          </Box>
          <Box
            className="middel-border"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          ></Box>
          <Box className="Challenges">
            <Box
              className="title-box2"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <Box className="title-text-container">
                <Text>Challenges</Text>
              </Box>
            </Box>
            <Box
              className="Content-box2"
              // data-aos="fade-down"
              // data-aos-duration="1000"
            >
              <ul>
                <li>Data Privacy & Ethical Concerns</li>
                <li>Potential Bias</li>
                <li>Inconsistent Data Managment</li>
                <li>Difficulty Comparing Different Algorithms</li>
                <li>Challenges Related to Machine Learning</li>
              </ul>
            </Box>
          </Box>
        </Box>
        {/* Process */}

        <Footer />
      </Box>
    </div>
  );
};

export default CaseStudy;