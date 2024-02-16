import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../Components/Menu/Menu";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CoreLabImg from "../../Images/CoreLabInaBox.png";
import TechnicalImg from "../../Images/TechnicalService.png";
import DeploymentImg from "../../Images/DeploymentService.png";

import "./Servicepage.css";

const Servicepage = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerServices">
        <Box className="BannerContainerServices">
          <Navbar />
          <Box textAlign={"left"} color={"white"}>
            <Box pt={"12rem"} >
              <Text
                fontSize={"4xl"}
                ml={"1.5rem"}
                fontWeight={"bold"}
                fontFamily={"poppins"}
              >
                SERVICES
              </Text>
            </Box>
            {/*  */}
            <Box className="BannerIntroContent">
              <Text as={"p"}>
                Comprehensive Partner for Streamlined Imaging Trials.
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

        <div className="intro_txt_cont_service">
          <p>
            At Radiant Sage, we are devoted to revolutionizing the field of
            Clinical Trial Imaging. Our Core Lab Services take the lead,
            providing a comprehensive suite of cutting-edge technology solutions
            and allied services. This positions us as your ultimate partner,
            offering a seamless and integrated approach to technology solutions
            for imaging clinical trials.
          </p>
        </div>

        {/* Subcontent */}
        <Box className="ServicesParent">
          <Box className="SingleServices">
            <Box className="SingleServicesHeading">
              <Text className="headings">1. CORE LAB SERVICES</Text>
            </Box>
            <Box className="SingleServicesImgCont">
              <img src={CoreLabImg} alt="CORE LAB SERVICES" />

              <Box className="SingleServicesTextCont">
                <Text>
                  Radiant Sage is focused on providing you with state-of-the-art
                  technology solutions and related services to make us your
                  One-Stop Technology Solutions Partner for imaging clinical
                  trials. In addition to these services we have partnered with
                  various specialists who can provide additional non-technology
                  services such as Protocol Development, Trial Planning, Reader
                  Services etc. required for clinical imaging trials.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="SingleServices">
            <Box className="SingleServicesHeading">
              <Text className="headings">2. TECHNICAL SERVICES</Text>
            </Box>
            <Box className="SingleServicesImgCont">
              <img src={TechnicalImg} alt="TECHNICAL SERVICES" />

              <Box className="SingleServicesTextCont">
                <Text>
                  Our Technical Services have been designed to provide you with
                  the support you need to have the system in place and the trial
                  up and running within weeks. Our team typically partners with
                  your IT department to ensure that the clinical trial manager's
                  objectives are met.
                </Text>
              </Box>
              <Box className="SingleServiceInclude">
                <Text>The services include:</Text>
                <ul>
                  <li>System Setup</li>
                  <li>System Integration</li>
                  <li>User Training</li>
                  <li>Application Customization</li>
                  <li>Technical Support</li>
                  <li>Custom Development</li>
                </ul>
              </Box>
            </Box>
          </Box>
          <Box className="SingleServices">
            <Box className="SingleServicesHeading">
              <Text className="headings">3. DEPLOYMENT SERVICES</Text>
            </Box>
            <Box className="SingleServicesImgCont">
              <img src={DeploymentImg} alt="DEPLOYMENT SERVICES" />

              <Box className="SingleServicesTextCont">
                <Text>
                  Our Deployment team will partner with your clinical team to
                  ensure that the trial is implemented as per the protocol and
                  any specific requirements of the organization.
                </Text>
              </Box>
              <Box className="SingleServiceInclude">
                <Text>The services include:</Text>
                <ul>
                  <li>Clinical workflow development and implementation</li>
                  <li>Trial Setup</li>
                  <li>User Training</li>
                  <li>Site Training</li>
                  <li>Testing</li>
                  <li>User Support</li>
                </ul>
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

export default Servicepage;
