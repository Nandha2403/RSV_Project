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
import ProcessFlow from "../../Images/ProcessNewDesign.jpeg";
import { Link } from "react-router-dom";

const Homepage = () => {
  const ClientsImages = [
    { ClientImage: Client1, title: "Data Standardization and Acquisition" },
    { ClientImage: Client2, title: "Blinded Reads" },
    { ClientImage: Client3, title: "Data Storage and Migration" },
    { ClientImage: Client4, title: "Image Retrieval using Meta Data" },
    { ClientImage: Client5, title: "External Collaboration" },
    { ClientImage: Client6, title: "FDA Access for Review" },
    { ClientImage: Client7, title: "External Collaboration" },
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
              // w={{
              //   base: "100%",
              //   sm: "100%",
              //   md: "50%",
              //   lg: "40%",
              //   xl: "40%",
              // }}
              mt={"2rem"}
              w={"50%"}
            >
              <Box className="SolutionsLeft">
                <ul>
                  <li>
                    <a href="#">CT</a>
                  </li>
                  <li>
                    <a href="#">Oncology</a>
                  </li>
                  <li>
                    <a href="#">Derma</a>
                  </li>
                  <li>
                    <a href="#">BI</a>
                  </li>
                  <li>
                    <a href="#">MRI</a>
                  </li>
                  <li>
                    <a href="#">Paired Reads</a>
                  </li>
                </ul>
              </Box>
              <Box className="Solution_btns">
                <Button
                  size={"xs"}
                  borderRadius={"15px"}
                  p={"0px 20px 0px 20px"}
                  colorScheme="#131049"
                  bg="#131049"
                >
                  <Link to={"/Solutions"}>View all</Link>
                </Button>
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
            <Box w={{ base: "60%", sm: "50%" }}>
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
                <a href="">
                  <img
                    width={"250px"}
                    src={Service2}
                    alt="TECHNICAL SERVICES"
                  />
                </a>
                <Text fontSize={"md"} fontWeight={500} mt={"1rem"}>
                  <a href="#">TECHNICAL SERVICES</a>
                </Text>
              </Box>
              <Box>
                <a href="">
                  <img
                    width={"250px"}
                    src={Service3}
                    alt="DEPLOYMENT SERVICES"
                  />
                </a>
                <Text fontSize={"md"} fontWeight={500} mt={"1rem"}>
                  <a href="#">DEPLOYMENT SERVICES</a>
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
          <Box className="beInTouchImg"></Box>
          <Box className="beInTouch_heading">
            <Text className="headings">Be In Touch with Us</Text>
          </Box>
          <Box className="beInTouch_subText">
            <Text>
              Radiant Sage's objective is to provide a clinical image management
              technology solution that can get trials up and running within
              weeks under a sponsor.
            </Text>
            <Text mt={".4rem"}>
              To stay updated on clinical trial imaging blogs and news,
              subscribe to us.
            </Text>
          </Box>
          <Box className="beInTouchInput_Btn">
            <Input
              size={{ base: "xs", sm: "xs", md: "sm" }}
              type="text"
              border={"2px solid #131049"}
              outline={"none"}
              _focus={{ boxShadow: "none" }}
              _focusVisible={"none"}
              borderRadius={"15px"}
              placeholder="E-mail Address"
            />
            <Button
              size={{ base: "xs", sm: "xs", md: "sm" }}
              borderRadius={"15px"}
              p={"0px 20px 0px 20px"}
              colorScheme="#131049"
              bg="#131049"
            >
              Submit
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
