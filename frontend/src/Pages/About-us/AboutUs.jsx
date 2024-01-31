import React, { useRef } from "react";
import "./AboutUs.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
import AboutUs1 from "../../Images/AboutUs-1.png";
import AboutUs2 from "../../Images/AboutUs-2.png";
import AboutUs3 from "../../Images/AboutUs-3.png";
import Client1 from "../../Images/Clients-1.png";
import Client2 from "../../Images/Clients-2.png";
import Client3 from "../../Images/Clients-3.png";
import Client4 from "../../Images/Clients-4.png";
import Client5 from "../../Images/Clients-5.png";
import Client6 from "../../Images/Clients-6.png";
import Client7 from "../../Images/Clients-7.png";
// import OurTeam from "../../Images/OurTeamImg.jpeg";
import CoreImg from "../../Images/CoreImg.png";
import FocusImg from "../../Images/FocusImg.png";
import CustomPrevArrow from "../../Components/CustomArrows/CustomPrevArrow";
import CustomNextArrow from "../../Components/CustomArrows/CustomNextArrow";
import Footer from "../../Components/Footer/Footer";

// Need to work on responsiveness

const AboutUs = () => {
  const firstField = useRef();
  const ClientsImages = [
    { ClientImage: Client1 },
    { ClientImage: Client2 },
    { ClientImage: Client3 },
    { ClientImage: Client4 },
    { ClientImage: Client5 },
    { ClientImage: Client6 },
    { ClientImage: Client7 },
  ];

  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplaySpeed: 2000,
    arrow: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
              <Box pt={"6rem"}>
                <Text
                  fontSize={"4xl"}
                  ml={"1.5rem"}
                  fontWeight={"bold"}
                  fontFamily={"poppins"}
                >
                  Where Clinical Trials Find <br /> a New Dimension.
                </Text>
              </Box>
              <Box className="BannerIntroContent">
                <Text as={"p"} fontSize={"lg"}>
                  The solutions available today for sponsors to manage their
                  imaging clinical trials are expensive, error-prone,
                  inefficient, and non-transparent
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
                  Get Started
                </Button>
                <Button
                  size={"xs"}
                  borderRadius={"15px"}
                  p={"0px 20px 0px 20px"}
                  //   colorScheme="black"
                  //   bg="white"
                  ml={"2rem"}
                >
                  Learn More
                </Button>
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
                    Solution
                  </Button>
                  <Button
                    size={"xs"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    // colorScheme="#131049"
                    border={"1px solid #131049"}
                    // bg="#131049"
                  >
                    Career
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
                  and begin collecting data."
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
                  purpose-built, with a foundation in Web 2.0 and a SaaS
                  delivery approach, encompassing all the features of a core
                  lab. Specifically designed, these solutions empower sponsors
                  to retain trial control without resorting to the expensive,
                  time-consuming, error-prone, and inefficient options available
                  today.
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
              {/* <img src={OurTeam} alt="OurTeam" /> */}
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
                Join Us
              </Button>
            </Box>
          </Box>
          {/* EmailAndName */}
          <Box className="EmailAndName">
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
          </Box>
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
