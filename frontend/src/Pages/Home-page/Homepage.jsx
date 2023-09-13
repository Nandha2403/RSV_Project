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
import { useRef } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homepage.css";
import CustomPrevArrow from "../../Components/CustomArrows/CustomPrevArrow";
import CustomNextArrow from "../../Components/CustomArrows/CustomNextArrow";

const Homepage = () => {
  const firstField = useRef();
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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Box>
      <Box>
        {/* Menu */}
        <Menu />
        <Box className="bodyContainer">
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
                  CLINICAL TRIAL <br />
                  IMAGING
                </Text>
              </Box>
              <Box
                className="BannerIntroContent"
                // border={"1px solid green"}
              >
                <Text as={"p"} fontSize={"sm"}>
                  Radient Sages's Solutions Exemplify, how it can be Leveraged
                  in Clinical Imaging Trails to enable the smooth Acquistion,
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
          {/* Solution */}
          <Box
            data-aos="fade-up"
            data-aos-duration="1000"
            // border={"1px solid green"}
            // w={'100%'}
          >
            <Box mt={"2rem"} textAlign={"left"} ml={"3rem"} w={"fit-content"}>
              <Text className="headings">
                Radiant Sage's Solutions Exemplify
              </Text>
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
                // border={"1px solid blue"}
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
                <Box className="Solution-btns">
                  <Button
                    size={"xs"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    View all
                  </Button>
                  <Button
                    size={"xs"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Request Demo
                  </Button>
                </Box>
              </Box>
              <Box w={"60%"}>
                <a href="#">
                  <img src={RSVSolution} alt="" />
                </a>
              </Box>
            </Box>
          </Box>
          {/* Our services */}
          <Box data-aos="fade-up" data-aos-duration="1000" textAlign={"center"}>
            <Box mt={"3rem"} ml={"3rem"} textAlign={"left"}>
              <Text className="headings">Our Services</Text>
            </Box>
            {/* Services  */}
            {/*  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px */}
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
                  <a href="">
                    <img
                      width={"250px"}
                      src={Service1}
                      alt="CORELAB SERVICES"
                    />
                  </a>
                  <Text fontSize={"sm"} fontWeight={500} mt={"1rem"}>
                    <a href="#">CORELAB SERVICES</a>
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
                  <Text fontSize={"sm"} fontWeight={500} mt={"1rem"}>
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
                  <Text fontSize={"sm"} fontWeight={500} mt={"1rem"}>
                    <a href="#">DEPLOYMENT SERVICES</a>
                  </Text>
                </Box>
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
                  Review Our Latest Use Cases as we have Delivered to Our
                  Clients
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
              <Box className="careersImg"></Box>
              <Box className="careers-heading">
                <Text className="headings">Career opportunities</Text>
                <Box mt={"2rem"}>
                  <Text>
                    Innovative technology driven by Talented <br /> People and
                    have fun along the way
                  </Text>
                </Box>
                <Box mt={"2rem"}>
                  <Button
                    size={"xs"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Join Our Team
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

              <Box className="beInTouch-heading">
                <Text className="headings">Be In Touch with Us</Text>
              </Box>
              <Box className="beInTouch-subText">
                <Text>
                  Radient Sage's objective is to provide a clinical image
                  management technology solution that can get trial up and
                  running within weeks, under sponsor.
                </Text>
              </Box>
              <Box className="beInTouchInput-Btn">
                <Input
                  size={"sm"}
                  type="text"
                  border={"2px solid #131049"}
                  outline={"none"}
                  _focus={{ boxShadow: "none" }}
                  _focusVisible={"none"}
                  borderRadius={"15px"}
                  placeholder="E-mail Address"
                />
                <Button
                  size={"sm"}
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
      </Box>
    </Box>
  );
};

export default Homepage;
