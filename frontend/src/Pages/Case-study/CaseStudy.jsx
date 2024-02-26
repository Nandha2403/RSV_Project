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

  const images = [
    CaseImg1,
    CaseImg2,
    CaseImg3,
    CaseImg4,
    CaseImg5,
    CaseImg6,
    CaseImg4,
    CaseImg5,
  ];
  const info = [
    "AI In Clinical Trials",
    "AI In Dermatology",
    "Business Intelligence",
    "Oncology Workflow",
    "Query Management",
    "Electronic Data Capture",
    "Hand Scintigraphy",
    "Paired Reads",
  ];
  const content = [
    "The ability of Artificial Intelligence (AI) to perform tasks that humans do, albeit more effectively, quickly, and affordably, is becoming increasingly sophisticated.Robotics and artificial intelligence are already commonplace in our daily lives, but the field of healthcare is where they have the most potential.",
    "Owing to its extensive clinical, dermatoscopical, and dermatopathological image library, dermatology has assumed the lead position for the implementation of AI in the medical industry. AI medical image identification and analysis is extremely helpful for high-speed, high-precision diagnosis along with professional review in those fields of medicine that rely on imaging data, particularly in the dermatological field.",
    "Business intelligence (BI) is a technological process that uses data mining, data visualisation, and business analytics to extract useful information from substantial amounts of data. In the clinical trial industry, BI is a topic that is getting increased attention.",
    "Oncology workflow is a specialized process used in clinical trials imaging to evaluate and track the progress of cancer patients.The workflow involves acquiring, processing, analysing, and interpreting imaging data from a variety of imaging modalities, including CT, MRI, and PET scans.",
    "Query management is a process used in clinical trials to manage and resolve data queries related to imaging data. It involves identifying, tracking, and resolving issues related to the quality or completeness of the data collected during the trial.",
    "EDC (Electronic Data Capture) extension is an application or software that is used in clinical trials to capture, manage, and analyze clinical data in electronic form instead of using paper forms. It simplifies the clinical trial process by eliminating the need for manual entry of data, reducing the risk of errors, and increasing the speed of data processing and management.",
    "Hand scintigraphy is a medical imaging technique that is used to evaluate the function of the bones and joints in the hand. It involves injecting a small amount of radioactive material into the bloodstream and then taking images of the hand using a special camera that can detect the radiation emitted by the material.",
    "Paired reads, also known as paired-end sequencing, are a type of DNA sequencing method that involves sequencing both ends of a DNA fragment. This allows for the detection of structural variants such as insertions, deletions, and inversions, which are important in clinical trial imaging for understanding the genetic basis of diseases and developing personalized therapies.",
  ];

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
            <Box pt={"8rem"}>
              <Text
                fontSize={"4xl"}
                ml={"1.5rem"}
                fontWeight={"bold"}
                fontFamily={"poppins"}
              >
                Case Study
              </Text>
            </Box>
            <Box
              ml={"1.5rem"}
              mt={"2rem"}
              w={{ base: "85%", sm: "85%", md: "85%", lg: "40%" }}
            >
              <Text>
                Radiant Sage's solutions exemplify how they can be leveraged in
                Clinical Imaging Trials to enable the smooth acquisition,
                processing, and delivery of information on a timely basis.
              </Text>
            </Box>
            <Box ml={"1.5rem"} mt={"2rem"} pb={"4rem"}>
              {/* <Button
                size={"xs"}
                borderRadius={"15px"}
                p={"0px 20px 0px 20px"}
                colorScheme="#131049"
                bg="#131049"
              >
                Learn More
              </Button> */}
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
            {/* <Text>Revolutionizing Clinical Trial with AI</Text> */}
          </Box>
          <Box className="CaseStudyConatiner">
            <Box className="CaseStudyMain-Left">
              <img src={CaseStudyIntroImg} alt="CaseStudyIntroImg" />
            </Box>
            <Box className="CaseStudyMain-Right">
              <Box className="CaseStudy-IntroHeading">
                <Text>Introduction :</Text>
              </Box>
              <Box className="CaseStudy-text">
                <Text>
                  Image data is challenging to manage and store for
                  pharmaceutical companies, especially when they need to share
                  it for licensing, acquisition, or due diligence.
                </Text>
                <Text mt={"1rem"}>
                  Image analysis is often a key endpoint for demonstrating the
                  efficacy of a drug. However, without proper data warehousing,
                  reproducing the results and proving the value of the drug can
                  be challenging. Reproducibility is essential for providing
                  hard evidence to regulators and investors.
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
              <Button
                size={"xs"}
                borderRadius={"15px"}
                p={"0px 20px 0px 20px"}
                colorScheme="#131049"
                bg="#131049"
              >
                <Link to={linkBtn[focusElement]}>Learn More</Link>
              </Button>
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
                <Text>Adavantages</Text>
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
                  Improving the cost of productivity and outcomes in clinical
                  development
                </li>
                <li>Monitoring Participants Adherence</li>
                <li>Improving the quality of patient pool and trial design</li>
                <li>Aiding in clinical trial data gathering and analysis</li>
                <li>Improving the patient experience during clinical trials</li>
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
                <li>Data privacy & Ethical concerns</li>
                <li>Potential bias</li>
                <li>Inconsistent data managment</li>
                <li>Difficulty comparing different algorithms</li>
                <li>Challenges related to machine learning</li>
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
