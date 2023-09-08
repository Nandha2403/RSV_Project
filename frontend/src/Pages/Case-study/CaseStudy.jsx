import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
import CaseStudyIntroImg from "../../Images/CaseStudy-IntroImg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CaseStudy.css";
import Footer from "../../Components/Footer/Footer";
import "react-fancy-circular-carousel/FancyCarousel.css";
import FancyCarousel from "react-fancy-circular-carousel";

const CaseStudy = () => {
  const screenWidth = window.screen.width;
  // console.log(`Screen Width: ${screenWidth}px`);

  const images = [
    "https://images.unsplash.com/photo-1693249646175-8b21fe05acc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMjZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1693432666286-23dd461d0a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyODF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1693438672953-409b661134fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1693464081656-c5b1368960d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1671718110228-a1d3f64163fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    "https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  ];
  const info = ["Delhi", "Mumbai", "Bengaluru", "Kolkata", "Chennai", "Goa"];
  const content = [
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis voluptates facere sunt dolorum aperiam, beatae exercitationem animi nostrum? Eaque.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis voluptates facere.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis voluptates.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis.",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore temporibus labore quos ipsam similique eum praesentium quibusdam id ratione facilis.",
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
                focusElementStyling={{ border: "1px solid #ba4949" }}
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
              <button>Learn More</button>
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
        {/* <Box className="ProcessContainer">
          <Box className="ProcessHeading">
            <Text className="headings">Process</Text>
          </Box>
          <Box className="ProcessParent">
            <Box>
              <img src={Process1} alt="Process1" />
              <Box>
                <Text mt={"-50px"}>
                  <Text as={"span"} color={"#D6522E"}>
                    0.1
                  </Text>{" "}
                  Data Standardization
                </Text>
              </Box>
            </Box>
            <Box id="elem2">
              <Box>
                <Text mb={"-45px"}>
                  <Text as={"span"} color={"#F4B03A"}>
                    0.2
                  </Text>{" "}
                  Blinded Reads
                </Text>
              </Box>
              <img src={Process2} alt="Process2" />
            </Box>
            <Box>
              <img src={Process3} alt="Process3" />
              <Box>
                <Text mt={"-50px"}>
                  <Text as={"span"} color={"#76A90A"}>
                    0.3
                  </Text>{" "}
                  Image Retriveal using Meta Data
                </Text>
              </Box>
            </Box>
            <Box>
              <Box>
                <Text mb={"-45px"}>
                  <Text as={"span"} color={"#55B29A"}>
                    0.4
                  </Text>{" "}
                  Image Retriveal using Meta Data
                </Text>
              </Box>
              <img src={Process4} alt="Process4" />
            </Box>
            <Box>
              <img src={Process5} alt="Process5" />
              <Box>
                <Text mt={"-50px"}>
                  <Text as={"span"} color={"#367A7C"}>
                    0.5
                  </Text>{" "}
                  External Collaboration
                </Text>
              </Box>
            </Box>
            <Box>
              <Box>
                <Text mb={"-45px"}>
                  <Text as={"span"} color={"#3080B2"}>
                    0.6
                  </Text>{" "}
                  Data Access
                </Text>
              </Box>
              <img src={Process6} alt="Process6" />
            </Box>
            <Box>
              <img src={Process7} alt="Process7" />
              <Box>
                <Text mt={"-50px"}>
                  <Text as={"span"} color={"#17165D"}>
                    0.7
                  </Text>{" "}
                  Data Storage and Migration
                </Text>
              </Box>
            </Box>
          </Box>
        </Box> */}
        <Footer />
      </Box>
    </div>
  );
};

export default CaseStudy;
