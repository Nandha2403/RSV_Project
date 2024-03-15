import { Box, Button, Input, Text } from "@chakra-ui/react";
import RSVSolution from "../../Images/RSV Solution.png";
import Service1 from "../../Images/Service-1.png";
import Service2 from "../../Images/Service-2.png";
import Service3 from "../../Images/Service-3.png";
import Client1 from "../../Images/Clients-1.png";
import Client2 from "../../Images/Clients-2.png";
import Client3 from "../../Images/Clients-3.png";
import Client4 from "../../Images/Clients-4.png";
import Client5 from "../../Images/Clients-5.png";
import Client6 from "../../Images/Clients-6.png";
import Client7 from "../../Images/Clients-7.png";
import SliderComp from "../../Components/ClientsSlider/SliderComp";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "react-slick";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homepage.css";
import CustomPrevArrow from "../../Components/CustomArrows/CustomPrevArrow";
import CustomNextArrow from "../../Components/CustomArrows/CustomNextArrow";
import ProcessFlow from "../../Images/ProcessNewDesign.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  const ClientsImages = [
    {
      ClientImage: Client1,
      title: "AI In Clinical Trial",
      link: "CaseStudy/AI-In-ClinicalTrial",
    },
    {
      ClientImage: Client2,
      title: "AI In Dermatology",
      link: "CaseStudy/AI-In-Dermatology",
    },
    {
      ClientImage: Client3,
      title: "Query Management",
      link: "CaseStudy/Query-Management",
    },
    {
      ClientImage: Client4,
      title: "Adverse Event Module",
      link: "CaseStudy/Adverse-Event-Module",
    },
    // { ClientImage: Client5, title: "External Collaboration" },
    // { ClientImage: Client6, title: "FDA Access for Review" },
    // { ClientImage: Client7, title: "External Collaboration" },
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
        breakpoint: 600,
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
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Box className="Main">
      {/* Menu */}
      <Menu />
      <Box className="body_container">
        <Box className="BannerContainer">
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
                {/* Pioneering Imaging for
                Tomorrow's Trials. */}
                Revolutionizing Clinical Trial Imaging <br /> through the Power
                of AI
                {/* AI-Powered Imaging for Tomorrow's Trials. */}
              </Text>
            </Box>
            <Box className="BannerIntroContent">
              <Text as={"p"}>
                Radiant Sage's solutions exemplify how imaging AI can be
                leveraged in Clinical Imaging Trials to enable the smooth
                acquisition, processing, and delivery of insights on a timely
                basis.
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
                <Link to={"/Solutions"}>Learn More</Link>
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Solution */}
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          // border={"1px solid green"}
          // w={'100%'}
        >
          <Box
            mt={"2rem"}
            textAlign={"left"}
            ml={{ base: "1rem", sm: "2rem", md: "3rem" }}
            w={"fit-content"}
          >
            <Text className="headings">Radiant Sage's Solutions Exemplify</Text>
          </Box>
          {/* left and right */}
          <Box
            w={"100%"}
            display={"flex"}
            flexDirection={{
              base: "column-reverse",
              sm: "column-reverse",
              md: "row",
              xl: "row",
              "2xl": "row",
            }}
            alignItems={"center"}
            // border={"1px solid teal"}
          >
            <Box
              w={{
                base: "98%",
                sm: "98%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              }}
              mt={"2rem"}
              // w={"50%"}
            >
              <Box className="SolutionsLeft">
                <ul>
                  <h1>Therapeutics</h1>
                  <li>Oncology</li>
                  <li>Dermatology</li>
                  <li>CNS</li>
                  <li>Cardiology</li>
                  <li>Contrast Media</li>
                  <li>AI/Device  <span className="threedots"> . . .</span></li>
                </ul>

                <ul>
                  <h1>Features</h1>
                  <li>CTIM</li>
                  <li>CTMS</li>
                  <li>Analytics</li>
                  <li>AI</li>
                  <li>Apps</li>
                  <li>Event Adjucation <span className="threedots"> . . .</span></li>
                </ul>
              </Box>
              <Box className="Solution_btns">
                <Button
                  size={"xs"}
                  borderRadius={"15px"}
                  p={"0px 20px 0px 20px"}
                  colorScheme="#131049"
                  bg="#131049"
                  onClick={scrollTop}
                >
                  Request Demo
                </Button>
              </Box>
            </Box>
            <Box
              w={{ base: "70%", sm: "50%" }}
              //  border={"1px solid teal"}
            >
              <a href="#">
                <img src={RSVSolution} alt="Solution" />
              </a>
            </Box>
          </Box>
        </Box>
        {/* Our services */}
        <Box data-aos="fade-up" data-aos-duration="1000" textAlign={"center"}>
          <Box
            mt={"3rem"}
            ml={{ base: "1rem", sm: "2rem", md: "3rem" }}
            textAlign={"left"}
          >
            <Text className="headings">Our Services</Text>
          </Box>
          <Box mt={"1rem"}>
            <Box
              className="Services"
              display={"flex"}
              alignItems={"center"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
                xl: "row",
                "2xl": "row",
              }}
              justifyContent={"space-evenly"}
            >
              <Box>
                <Link to={"/Solutions"}>
                  <img width={"250px"} src={Service1} alt="CORELAB SERVICES" />
                </Link>
                <Text fontSize={"md"} fontWeight={500} mt={"1rem"}>
                  <Link to={"/Solutions"}>CORELAB SERVICES</Link>
                </Text>
              </Box>
              <Box>
                <Link to={"/Solutions"}>
                  <img
                    width={"250px"}
                    src={Service2}
                    alt="TECHNICAL SERVICES"
                  />
                </Link>
                <Text fontSize={"md"} fontWeight={500} mt={"1rem"}>
                  <Link to={"/Solutions"}>TECHNICAL SERVICES</Link>
                </Text>
              </Box>
              <Box>
                <Link to={"/Solutions"}>
                  <img
                    width={"250px"}
                    src={Service3}
                    alt="DEPLOYMENT SERVICES"
                  />
                </Link>
                <Text fontSize={"md"} fontWeight={500} mt={"1rem"}>
                  <Link to={"/Solutions"}>DEPLOYMENT SERVICES</Link>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Process */}
        <Box className="Process">
          <Box className="ProcessHeading">
            <Text className="headings">Process</Text>
          </Box>
          <Box className="ProcessImg">
            <img src={ProcessFlow} alt="Processflow" />
          </Box>
        </Box>
        {/* Our Clients */}
        <Box
          mt={"4rem"}
          // data-aos="fade-up"
          //  data-aos-duration="1000"
        >
          <Box>
            <Text className="headings OurClients" textAlign={"center"}>
              Review Our Latest Use Cases as we have Delivered to Our Clients
            </Text>
          </Box>
          <Box className="slider">
            {/* Slider */}
            <Slider {...settings}>
              {ClientsImages.map((el, ind) => (
                <SliderComp {...el} key={ind} />
              ))}
            </Slider>
          </Box>
        </Box>
        {/* Career opportunities */}
        <Box
          className="careers"
          // data-aos="fade-up"
          // data-aos-duration="1000"
          // border={"1px solid red"}
        >
          <Box className="careers_img"></Box>
          <Box className="careers_heading">
            <Text className="headings">Career opportunities</Text>
            <Box mt={"2rem"}>
              <Text>
                Innovative technology driven by talented <br /> People and have
                fun along the way.
              </Text>
            </Box>
            <Box mt={"2rem"} className="career_btn_Cont">
              <Button
                size={"xs"}
                borderRadius={"15px"}
                p={"0px 20px 0px 20px"}
                colorScheme="#131049"
                bg="#131049"
              >
                <Link to={"/Career"}>Join Our Team</Link>
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Be In Touch with Us */}
        <Box
          className="beInTouch"
          // data-aos="fade-up"
          // data-aos-duration="1000"
          // border={"1px solid red"}
        >
          <Box className="beInTouch_heading">
            <Text className="headings">Be In Touch with Us</Text>
          </Box>
          <Box className="beInTouch_subText">
            <Text>
              Radiant Sage's objective is to provide a clinical image management
              technology solution that can get trials up and running within
              weeks under a sponsor. To stay updated on clinical trial imaging
              blogs and news, subscribe to us.
            </Text>
          </Box>
          <Box className="beInTouchInput_Btn">
            {/* <Input
              size={{ base: "xs", sm: "xs", md: "sm" }}
              type="text"
              border={"2px solid #131049"}
              outline={"none"}
              _focus={{ boxShadow: "none" }}
              _focusVisible={"none"}
              borderRadius={"15px"}
              placeholder="E-mail Address"
            /> */}
            <Button
              // size={{ base: "xs", sm: "xs", md: "sm" }}
              size={"xs"}
              borderRadius={"15px"}
              p={"0px 20px 0px 20px"}
              colorScheme="#131049"
              bg="#131049"
            >
              <Link to={'/ContactUs'}>
              Get In Touch
              </Link>
            </Button>
          </Box>
        </Box>
        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default Homepage;
