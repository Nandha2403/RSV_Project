import React from "react";
import "./AboutUs.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
import AboutUs1 from "../../Images/AboutUs-1.png";
import AboutUs2 from "../../Images/AboutUs-2.png";
import AboutUs3 from "../../Images/AboutUs-3.png";
import OurTeam from "../../Images/Our_team.jpeg";
import CoreImg from "../../Images/CoreImg.png";
import FocusImg from "../../Images/FocusImg.png";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";


const AboutUs = () => {

  return (
    <div>
      <Box>
        <Menu />
        <Box className="bodyContainerAboutUs">
          <Box className="BannerContainerAboutUs">
            <Navbar />
            {/* Banner area */}
            {/* The solutions available today for sponsors to manage their imaging clinical trials are expensive, error prone, inefficient, and non transparent. */}

            <Box textAlign={"left"} color={"white"}>
              <Box pt={"12rem"}>
                <Text
                  fontSize={"4xl"}
                  ml={"1.5rem"}
                  fontWeight={"bold"}
                  fontFamily={"poppins"}
                >
                  Where Clinical Trials Find a <br /> New Dimension.
                </Text>
              </Box>
              <Box className="BannerIntroContent">
                <Text as={"p"} fontSize={"lg"}>
                  The solutions available today for sponsors to manage their
                  imaging clinical trials are expensive, error-prone,
                  inefficient, and non-transparent.
                </Text>
              </Box>
              <Box ml={"1.5rem"} mt={"2rem"} pb={"4rem"}>
              </Box>
            </Box>
          </Box>
          {/* About Us Section-I */}
          <Box className="AboutUsSectionI">
            <Text className="headings" ml={"1.5rem"}>
              About Us
            </Text>
            <Box className="AboutUsSectionI-Cont">
              <Box className="AboutUsSectionText">
                <p>
                  Radiant Sage Ventures (RSV) is a pioneer in cloud-based
                  clinical trial imaging software and management (CTIM),
                  offering end-to-end clinical trial imaging support. We are
                  dedicated to bringing automation and convenience to the CTIM
                  landscape. RSV solutions and processes are designed with this
                  in mind, aligning with the six EIFCCT fundamentals:
                  Efficiency, Innovation, Flexibility, Control,
                  Comprehensiveness, and Transparency.
                </p>
                <Box className="AboutUsSectionBtnCont">
                  <Button
                    size={"xs"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    <Link to={"/Solutions"}>Solution</Link>
                  </Button>
                  <Button
                    size={"xs"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    // colorScheme="#131049"
                    border={"1px solid #131049"}
                    // bg="#131049"
                  >
                    <Link to={"/Career"}>Career</Link>
                  </Button>
                </Box>
              </Box>
              <Box className="AboutUsSectionImgCont">
                <img src={AboutUs1} alt="AboutUs1" />
              </Box>
            </Box>
          </Box>
          {/* Section-II */}
          <Box className="AboutUsSectionII">
            <Text className="headings AboutUsSectionII-Heading">Our Story</Text>
            <Box className="AboutUsSectionII-Cont">
              <Box className="AboutUsSectionIImgCont">
                <img src={AboutUs2} alt="AboutUs2" />
              </Box>
              <Box className="AboutUsSectionIIText">
                <p>
                  At Radiant Sage, we are driven by the belief in returning
                  control to sponsors in managing clinical imaging trials. We
                  are committed to enabling transparent outsourcing, preserving
                  trial oversight, and empowering flexible trial components.
                  Through focused involvement, we amplify sponsor impact on
                  design, execution, and pharmaceutical, biotech, and research
                  entities. Our purpose-built Web 2.0 offerings, delivered
                  through a SaaS model, provide core lab functionality. Our
                  mission is to replace costly, error-prone options with
                  efficient solutions, redefining trial management.
                </p>
              </Box>
            </Box>
          </Box>
          {/* Section-III */}
          <Box className="AboutUsSectionI">
            <Text className="headings" ml={"1.5rem"}>
              Radiant Sage Has The Solution For You!
            </Text>
            <Box className="AboutUsSectionI-Cont">
              <Box className="AboutUsSectionText">
                <p>
                  We have developed our solutions based on a deep understanding
                  of the imaging clinical trial process, FDA's regulatory
                  requirements, and the unfulfilled needs of the trial sponsor
                  and various participants in the trials. The solutions
                  (CoreLab-in-a-Box and RadVista Viewer) are designed to enable
                  a sponsor to quickly set up a trial with custom or
                  pre-designed standard workflows as required by the protocol
                  and begin collecting data.
                </p>
              </Box>
              <Box className="AboutUsSectionImgCont">
                <img src={AboutUs3} alt="AboutUs3" />
              </Box>
            </Box>
          </Box>
          {/* Our Core Belief */}
          <Box className="AboutUsSectionII">
            <Text className="headings AboutUsSectionII-Heading">
              Our Core Belief
            </Text>
            <Box className="AboutUsSectionII-Cont">
              <Box className="AboutUsSectionIImgCont">
                <img src={CoreImg} alt="AboutUs2" />
              </Box>
              <Box className="AboutUsSectionIIText">
                <Text>
                  At RSV, we are committed to empowering sponsors by giving them
                  control over clinical trial imaging while still allowing them
                  to outsource certain components. We understand the importance
                  of providing clinical trial stakeholders with access to
                  accurate, reliable data on time.
                </Text>
                <Text mt={"1rem"}>
                  We strive to provide transparency and flexibility throughout
                  the process, believing that the more involved sponsors are,
                  the greater impact they will have on the design, execution,
                  and outcome of the trial.
                </Text>
              </Box>
            </Box>
          </Box>
          {/* Our Focus */}
          <Box className="AboutUsSectionI">
            <Text className="headings" ml={"1.5rem"}>
              Our Focus
            </Text>
            <Box className="AboutUsSectionI-Cont">
              <Box className="AboutUsSectionText">
                <Text>
                  Radiant Sage offers clinical image management solutions to
                  pharmaceutical, medical devices, biotech, and research
                  organizations involved in drug discovery and development.
                </Text>
                <Text mt={"1rem"}>
                  Our solutions are unique in the market as they are
                  purpose-built, with a foundation in SaaS delivery approach,
                  encompassing all the features of a core lab. Specifically
                  designed, these solutions empower sponsors to retain trial
                  control without resorting to the expensive, time-consuming,
                  error-prone, and inefficient options available today.
                </Text>
              </Box>
              <Box className="AboutUsSectionImgCont">
                <img src={FocusImg} alt="AboutUs3" />
              </Box>
            </Box>
          </Box>
          {/* Our Team */}
          <Box className="OurTeamContainer">
            <Box className="TeamMembers">
              <img src={OurTeam} alt="OurTeam" />
            </Box>
            <Box className="OurTeamText">
              <Text className="headings OurTeamHeading">Our Team</Text>
              <Text className="OurTeamContent">
                At Radiant Sage, our team embodies a culture of innovation,
                excellence, and collaboration. We are customer-centric,
                adaptable, and empowered to make a significant impact. Diversity
                and inclusivity enrich our problem-solving abilities, while
                continuous learning keeps us at the forefront of industry
                developments. Led by our visionary CEO, Mr. Ven Thangaraj, we
                are united by a shared commitment to revolutionize clinical
                trials. Join us on this transformative journey as we shape the
                future of healthcare through precision, efficiency, and
                technology.
              </Text>
              <Button
                size={"sm"}
                borderRadius={"15px"}
                p={"0px 20px 0px 20px"}
                colorScheme="#131049"
                bg="#131049"
              >
                <Link to={"/Career"}>Join Us</Link>
              </Button>
            </Box>
          </Box>
          {/* EmailAndName */}
          {/* <Box className="EmailAndName">
            <Box className="EmailAndNameInptCont">
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Full Name" />
            </Box>
            <Box className="EmailAndNameBtnCont">
              <Button
                size={"sm"}
                borderRadius={"15px"}
                p={"0px 20px 0px 20px"}
                colorScheme="#131049"
                bg="#131049"
              >
                Sign up
              </Button>
            </Box>
          </Box> */}
          {/* Footer */}
          <Box mt={"3rem"}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;
