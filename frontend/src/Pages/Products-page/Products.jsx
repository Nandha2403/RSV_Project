import React from "react";
import "./Products.css";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { HiLink, HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import Menu from "../../Components/Menu/Menu";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Service1 from "../../Images/service icons RSV-01.png";
import Service2 from "../../Images/service icons RSV-02.png";
import Service3 from "../../Images/service icons RSV-03.png";
import Service4 from "../../Images/service icons RSV-04.png";
import Service5 from "../../Images/service icons RSV-05.png";
import Service6 from "../../Images/service icons RSV-06.png";
import Service7 from "../../Images/service icons RSV-07.png";
import Service8 from "../../Images/service icons RSV-08.png";

const Products = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerProducts">
        <Box className="BannerContainerProducts">
          <Navbar />
          <Box ml={"1rem"} pt={"14rem"} color={"white"}>
            <Text fontSize={{ base: "4xl", sm: "5xl" }} fontWeight={1000}>
              CORELAB-IN-A-BOX <sup>TM</sup>
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              fontWeight={"bold"}
            >
              Corelab-in-a-Box<sup>TM</sup> is a unique purpose built clinical
              trial <br /> imaging management software package.
            </Text>
          </Box>
          <Box ml={"1rem"} mt={"2rem"} pb={"4rem"}>
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
        <Box className="below_herobannercont">
          <Text className="title_container">
            CORELAB-IN-A-BOX<sup>TM</sup> will facilitate study execution,
            regulatory compliance and exploratory research.
          </Text>
          <div className="subtext">
            <Text>
              And all this via a SaaS Delivery Model in a Secure, Regulatory
              Compliant Environment, Enabling You to Have a Trial up and Running
              Within Weeks!
            </Text>
            <Text mt={"2rem"}>
              With Corelab-in-a-Box<sup>TM</sup> You are able to Collaborate
              with Readers and Anywhere in the World without having to move
              Physical Images. The Data can be Hosted and shared in a Private
              Cloud or at Radiant Sage's Hosting Center without Compromising
              your QA/ QC Requirements.
            </Text>
          </div>
        </Box>
        <Box className="product_highlights">
          <Text className="headings prod_highlights_heading">
            Product Highlights
          </Text>
          <div className="prod_highlights_subtext">
            <Text>
              Corelab-in-a-Box<sup>TM</sup> Harnesses Progressive Technology and
              Clinical Expertise in a Powerfull Integrated Service. Our
              Customers have Experienced Dramatic Reductions in Time and have
              Gained Control and Visibility Critical to the Successful Outcomes
              of their Projects. They have Right-Sized their Resources and have
              Effectively Managed Outsourced Services.
            </Text>
          </div>
          <div className="prod_highlights_box">
            <div>
              <Text
                fontSize={"22px"}
                fontWeight={"bolder"}
                fontFamily={"poppins"}
              >
                Rapid Trial Start
              </Text>
              <Text fontSize={"16px"}>
                Without any Investment in Infrastructure
              </Text>
            </div>
            <div>
              <Text
                fontSize={"22px"}
                fontWeight={"bolder"}
                fontFamily={"poppins"}
              >
                Customised Workflows
              </Text>
              <Text fontSize={"16px"}>
                With each Trial or Standardised Workflows from Trial to Trial
              </Text>
            </div>
            <div>
              <Text
                fontSize={"22px"}
                fontWeight={"bolder"}
                fontFamily={"poppins"}
              >
                Use of Readers & Key Opinion
              </Text>
              <Text fontSize={"16px"}>Leader's anywhere in the World</Text>
            </div>
            <div>
              <Text
                fontSize={"22px"}
                fontWeight={"bolder"}
                fontFamily={"poppins"}
              >
                Individualized e-Learning
              </Text>
              <Text fontSize={"16px"}>for Sites</Text>
            </div>
            <div>
              <Text
                fontSize={"22px"}
                fontWeight={"bolder"}
                fontFamily={"poppins"}
              >
                Online
              </Text>
              <Text fontSize={"16px"}>Collaboration</Text>
            </div>
            <div>
              <Text
                fontSize={"22px"}
                fontWeight={"bolder"}
                fontFamily={"poppins"}
              >
                Secure and Regulatory
              </Text>
              <Text fontSize={"16px"}>Compliant Environment</Text>
            </div>
          </div>
        </Box>
        <Box className="product_features">
          <Text className="headings product_features_heading">
            Product Features
          </Text>
          <Text className="product_features_subtext">
            Corelab-in-a-Box <sup>TM</sup> is a fully Integrated Clinical
            Imaging Solution, built on Services Oriented Architecture (SOA) and
            Adaptable to Individual Sponsor Needs. It is a Cost Effective
            Technology Driven Approach to Clinical Trial Imaging Management
            allowing User-Defined Flexibility in the extent of Ownership and
            Control of Digital Image Data.
          </Text>
          <Box className="product_features_img_cont">
            <div className="img_div">
              <img src={Service1} alt="Service1" />
            </div>
            <div className="img_div">
              <img src={Service2} alt="Service2" />
            </div>
            <div className="img_div">
              <img src={Service3} alt="Service3" />
            </div>
            <div className="img_div">
              <img src={Service4} alt="Service4" />
            </div>
            <div className="img_div">
              <img src={Service5} alt="Service5" />
            </div>
            <div className="img_div">
              <img src={Service6} alt="Service6" />
            </div>
            <div className="img_div">
              <img src={Service7} alt="Service7" />
            </div>
            <div className="img_div">
              <img src={Service8} alt="Service8" />
            </div>
          </Box>
        </Box>
        <Box className="connect_with_us">
          <Box className="connect_with_us_heading_cont">
            <Text className="headings connect_with_us_heading">
              Connect with Us
            </Text>
            <Box className="link_icon_cont">
              <HiLink fontSize={"35px"} />
            </Box>
          </Box>
          <Box className="connect_us_inpt_cont">
            <InputGroup
              w={{ base: "95%", sm: "70%", md: "50%" }}
              alignItems={"center"}
            >
              <Input
                focusBorderColor="white"
                placeholder={"Email Address"}
                color={"white"}
                fontSize={"20px"}
                p={"30px 0 30px 20px"}
              />
              <InputRightElement w={"5rem"} mt={".7rem"} mr={"10px"}>
                <Button colorScheme="none">Sign Up</Button>
              </InputRightElement>
            </InputGroup>

            <Box className="contact_us_with_message_icon">
              <Text>
                Contact Us <span style={{ color: "orange" }}>Today</span>
              </Text>
              <Box>
                <HiOutlineChatBubbleLeftEllipsis fontSize={"40px"} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt={"3rem"}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
