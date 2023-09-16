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
import Slider from "react-slick";
import CustomPrevArrow from "../../Components/CustomArrows/CustomPrevArrow";
import CustomNextArrow from "../../Components/CustomArrows/CustomNextArrow";
import SliderCompForAI from "../../Components/AI-In-ClinicalTrail-Slider/SliderCompForAI";
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
            <Box mt={"4rem"} pt={"16rem"} pb={"2rem"}>
              <Box ml={"1.5rem"}>
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
                  Revolutionizing Clinical Trial Management for Sponsors, Our
                  Solutions Address the Shortcomings of Traditional Methods.
                  Designeed Specifically for Imaging Trials, We Eliminate High
                  Costs, Errors, and Inefficiences. Unlike PAC's and RIS,
                  Tailored to Medical Settings, Our Technology Ensures
                  Transparency and Control. We replace Manpower-Dependent
                  Approaches with Advanced tools, Preventing budget Overruns,
                  Delays, and Trial Risks. Embrace streamlined,
                  Technology-Driven Success with.
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
                  At Radiant sage, We're driven by the belief in Returning
                  Control to Sponsors in Managing Clinical imaging trials. We're
                  Committed to Enabling Transparent Outsourcing. Preserving
                  Trial Oversight, and Empowering flexible Trial components.
                  Though Focused Involvement, We Amplify Sponsor Impact on
                  Design, Execution, and Pharmaceutical, Biotech and Research
                  Entities. Our Purpose - built Web 2.0 Offerings, Delivered
                  Through a SAAS Model, Deliver core Lab Functionality. Our
                  Mission is to Replace Costly, Error - Prone options with
                  Efficient Solutions, Redefining Trial Management.
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
                  We have Developed Our Solutions based on a Deep Understanding
                  of the Imaging Clinical Trial Process, FDA's Regulatory
                  Requirements and the Unfulfilled Needs of the Trial Sponsor
                  and Various Participants in the Trials. The Solutions
                  (CoreLab-in-a-Box and Radvista Viewer) are Designed to Enable
                  a Sponsor to Quickly Set Up a Trial with Custom or
                  Pre-designed Standard Workflows as Required by the protocol
                  and begin Collecting.
                </p>
              </Box>
              <Box className="AboutUsSectionImgCont">
                <img src={AboutUs3} alt="AboutUs3" />
              </Box>
            </Box>
          </Box>
          {/* AI in Clinical Trial */}
          <Box className="AI-in-ClinicalTrailCont">
            <Box>
              <Text className="headings AI-in-ClinicalTrailHeading">
                AI In Clinical Trial
              </Text>
            </Box>
            <Box className="AI-in-ClinicalTrail-Slider">
              {/* Slider */}
              <Slider {...settings}>
                {ClientsImages.map((el, ind) => (
                  <SliderCompForAI {...el} key={ind} />
                ))}
              </Slider>
            </Box>
          </Box>
          {/* Our Team */}
          <Box className="OurTeamContainer">
            <Box className="TeamMembers">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="TeamMembers"
              />
            </Box>
            <Box className="OurTeamText">
              <Text className="headings OurTeamHeading">Our Team</Text>
              <Text className="OurTeamContent">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
                maiores sapiente harum numquam dolore aliquam accusamus,
                inventore iste error velit corporis placeat ullam illo ipsum.
                Est quo rerum voluptates temporibus? Nobis facere placeat
                exercitationem quisquam doloribus porro at aliquid praesentium
                ducimus. Veritatis consectetur dolores vel? Eveniet eum
                veritatis molestias, magni perspiciatis ipsam optio neque ullam
                inventore ducimus dolorem, doloribus laudantium. Minus, odit.
                Accusantium quo modi possimus aliquam debitis minima laboriosam
                quia deleniti sapiente mollitia porro numquam cumque adipisci
                dolorem, alias necessitatibus error accusamus ipsum nostrum,
                excepturi dolor eligendi nihil facilis! Hic blanditiis
                doloremque dolor cum velit quos id aliquid repudiandae odio.
                Quas recusandae amet, nam dolor architecto libero corrupti ex
                facilis praesentium officia delectus odit deleniti eum saepe.
              </Text>
              <Button
                size={"sm"}
                borderRadius={"15px"}
                p={"0px 20px 0px 20px"}
                colorScheme="#131049"
                bg="#131049"
              >
                Contact Us
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
                Contact Us
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
