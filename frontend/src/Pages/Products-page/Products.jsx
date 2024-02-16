import React, { useState } from "react";
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
import Service1 from "../../Images/ServiceImg-01.png";
import Service2 from "../../Images/ServiceImg-02.png";
import Service3 from "../../Images/ServiceImg-03.png";
import Service4 from "../../Images/ServiceImg-04.png";
import Service5 from "../../Images/ServiceImg-05.png";
import Service6 from "../../Images/ServiceImg-06.png";
import Service7 from "../../Images/ServiceImg-07.png";
import Service8 from "../../Images/ServiceImg-08.png";
import product1 from "../../Images/Data Standardization and Acquition-01.png";
import { Link as RouterLink } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
import "./Products.css";

const Products = () => {
  const [SignupEmail, setSignupEmail] = useState("");

  const handleSignup = (e) => {
    setSignupEmail(e.target.value);
  };

  const SignupBtn = () => {
    console.log(SignupEmail);
  };
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerProducts">
        <Box className="BannerContainerProducts">
          <Navbar />

          {/* Banner area */}
          <Box textAlign={"left"} color={"white"}>
            <Box pt={"12rem"}>
              <Text
                fontSize={"4xl"}
                ml={"1.5rem"}
                fontWeight={"bold"}
                fontFamily={"poppins"}
              >
                CORELAB-IN-A-BOX <sup>TM</sup>
              </Text>
            </Box>
            <Box className="BannerIntroContent">
              <Text as={"p"}>
                Corelab-in-a-Box<sup>TM</sup> is a unique purpose built clinical
                trial <br /> imaging management platforms.
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
        <Box className="below_herobannercont">
          <Text className="title_container">
            CORELAB-IN-A-BOX<sup>TM</sup> will facilitate study execution, to
            streamline reserach on regulatory compliance.
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
        {/*  */}
        <Box className="Products_container_parent">
          <Box className="Products_title headings">
            CoreLab-In-A-Box (CLIB) Modules
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadGate">
              RadGate Import/Export :
            </Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li>
                  HTML5 based import using web browsers / Easy for site users
                </li>
                <li>
                  Trial specific anonymization/blinding and DICOM header updates
                  logic and edit checks for image QC
                </li>
                <li>Automated DTF and Integrated DCT workflow</li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadVault">RadVault Repository and Portal :</Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li>Content Based Storage Model - Any file</li>
                <li>Web-based Access with RESTFUL APIs for integration</li>
                <li>Role Based Access Controls with Part 11 Compliance</li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadVista">RadVista Imaging Workstation :</Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li>Multi-Modality Workstation (DICOM/Non-DICOM)</li>
                <li>Integrated with ICP/CLIB, Customizable per study/read</li>
                <li>
                  Remote Rendering with “0” footprint HTML5 viewer/workstation
                  without image transfers
                </li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadFlow">RadFlow Workflow Engine :</Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li>Study/Modality based Workflows</li>
                <li>Blinded-Read paradigms</li>
                <li>
                  Comprehensive EDC module with Single Sign On RadFlow Workflow
                  Engine
                </li>
                <li>Multi-Trial Corelab Operations (CTMS)</li>
                <li>
                  Trial Administration / Site Management / Training / User
                  Manage
                </li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadClinica">RadClinica CTMS :</Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li>Multi-Trial Corelab Operations (CTMS)</li>
                <li>
                  Trial Administration / Site Management / Training / User
                  Management RadClinica
                </li>
                <li>Finance/Documents/Supplies etc.</li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadInSight">
              RadInSight Reporting and Analytics :
            </Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li>Analytics and Reporting (Trial/Cross Trial)</li>
                <li>Adhoc Data Exploration / Predictive modeling</li>
                <li>Dashboards / Performance Metrics</li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadEvent">
              RadEvent Event Adjudication Module :
            </Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li>
                  Customized Event Workflows (Images, Documents) with EDC
                  integration
                </li>
                <li>Dossier Management (Redaction, Translation)</li>
                <li>
                  Customizable Read Paradigms (Events Types, Consensus, Site
                  etc)
                </li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadAI">RadAI & Toolkit AI/ML Framework :</Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li> Models to support image processing in Trial workflows</li>
                <li>
                  Workflow to support development and deployment of Medical
                  Imaging AI/ML
                </li>
                <li>Annotation and Labeling tools</li>
                <li>Manual and semi-automated boundary detection</li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadDCT">
              RadDCT Decentralized Clinical Trials :
            </Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li>Upload Image data from local scan centers</li>
                <li>
                  Patient Centric logistics/negotiation for local scan centers
                </li>
                <li>Patient/Scan Center payments</li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadApp">RadApp Patient Driven Apps :</Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li> Patient based image capture via Apps</li>
                <li>Linked with RadVault, RadFlow</li>
                <li>Patient Data capture (ePRO)</li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
          <Box className="Products_container">
            <Text className="headings" id="RadChain">RadChain Proof of Concept :</Text>
            <Box className="products_text_and_img_cont">
              <ul className="under_text">
                <li>Integration of a BlockChain into CLIB RadChain</li>
                <li>
                  Access to BlockChain records to authorized users via standard
                  tools
                </li>
              </ul>
              <Box className="products_img_cont">
                <img src={product1} alt="RadGate Import/Export" />
              </Box>
            </Box>
          </Box>
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
                onChange={handleSignup}
              />
              <InputRightElement w={"5rem"} mt={".7rem"} mr={"10px"}>
                <Button colorScheme="none" onClick={SignupBtn}>
                  Sign Up
                </Button>
              </InputRightElement>
            </InputGroup>

            <Box className="contact_us_with_message_icon">
              <Text>
                <RouterLink to={"/ContactUs"}>
                  Contact Us <span style={{ color: "orange" }}>Today</span>
                </RouterLink>
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
