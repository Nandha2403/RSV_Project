import React from "react";
import "./ElectronicDataCapture.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../../Components/Menu/Menu";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const ElectronicDataCapture = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerEDC">
        <Box className="BannerContainerEDC">
          <Navbar />
          <Box
            ml={"2rem"}
            pt={{ base: "14rem", sm: "14rem", md: "14rem", lg: "16rem" }}
            color={"white"}
          >
            <Text fontSize={{ base: "4xl", sm: "5xl" }} fontWeight={1000}>
              ELECTRONIC DATA CAPTURE(EDC)
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              fontWeight={"bold"}
            >
              Digital Data, Efficient Trials
            </Text>
          </Box>
          <Box ml={"1.5rem"} mt={"4rem"} pb={"3rem"}>
            {/* <Button
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
            </Button> */}
          </Box>
        </Box>
        {/* Next Gen Cont */}
        <Box className="RevolutionizingEDCCont">
          <Box className="RevolutionizingEDCHeading">
            <Text className="headings">
              Revolutionizing Clinical Data Management with EDC Extensions :
            </Text>
          </Box>
          <Box className="RevolutionizingEDCSubTxt">
            <Text>
              EDC (Electronic Data Capture) extension is an application or
              software that is used in clinical trials to capture, manage, and
              analyze clinical data in electronic form instead of using paper
              forms. It simplifies the clinical trial process by eliminating the
              need for manual entry of data, reducing the risk of errors, and
              increasing the speed of data processing and management.
            </Text>
            <Text>
              The EDC extension works by allowing researchers to record and
              manage clinical data from multiple sources, including electronic
              health records, laboratory results, and imaging studies. The data
              is then stored securely in a centralized database in compliance
              with regulatory standards.
            </Text>
            <Text>
              Researchers can access the data remotely from anywhere, using
              secure login credentials, and analyse it using various statistical
              methods.
            </Text>
          </Box>
          <Box ml={"5rem"} mt={"3rem"}>
            <Button
              size={"xs"}
              borderRadius={"15px"}
              p={"0px 20px 0px 20px"}
              colorScheme="#131049"
              bg="#131049"
            >
              Request A Demo
            </Button>
          </Box>
        </Box>
        {/* Banner */}
        <Box className="smallBannerEDC">{/* <img src="" alt="" /> */}</Box>
        {/* AI for Quality */}
        <Box className="BenefitsEDC">
          <Box className="BenefitsEDCHeadingCont">
            <Text className="headings">
              The benefits of using EDC extension :
            </Text>
          </Box>
          <Box className="BenefitsEDCTextCont">
            <Box className="BenefitsEDCTextTitle1">
              <Text>1. Increased efficiency :</Text>
              <Text>
                The EDC extension streamlines the trial process by eliminating
                the need for manual data entry, reducing data transfer time, and
                increasing the speed of analysis.
              </Text>
            </Box>
            <Box className="BenefitsEDCTextTitle1">
              <Text>2. Improved data quality :</Text>
              <Text>
                EDC extension reduces the risk of errors, such as data omission,
                duplication, or transcription errors, and improves the accuracy
                of data entry.
              </Text>
            </Box>
            <Box className="BenefitsEDCTextTitle1">
              <Text>3. Enhanced data security :</Text>
              <Text>
                The EDC extension provides a secure platform for storing and
                sharing clinical data, ensuring data privacy and adherence to
                regulatory compliance and data protection laws. It can provide
                enhanced security features such as user authentication and
                access controls, data encryption, and audit trails, which can
                help protect sensitive patient information.
              </Text>
            </Box>
            <Box className="BenefitsEDCTextTitle1">
              <Text>4. Easy data management :</Text>
              <Text>
                The EDC extension allows researchers to manage data from
                multiple sources, including imaging studies, using a single
                platform, reducing the need for multiple software applications.
              </Text>
            </Box>
            <Box className="BenefitsEDCTextTitle1">
              <Text>5. Improved collaboration :</Text>
              <Text>
                The EDC extension facilitates collaboration between clinical
                trial teams, including researchers, site coordinators, and data
                managers, making it easier to share study data and monitor
                patients' progress.
              </Text>
            </Box>
            <Box className="BenefitsEDCTextTitle1">
              <Text>6. Centralized data management :</Text>
              <Text>
                The EDC extensions can help centralize imaging data management.
                making it easier to track and analyze data from multiple
                sources, and improving overall data quality and consistency.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="overallBtmContEDC">
          <Text>
            Overall, using EDC extensions in clinical trials of imaging can help
            improve data accuracy, streamline data collection, reduce costs,
            enhance data security, improve overall data management, and
            analysis.
          </Text>
        </Box>
        <Box className="smallBannerEDCBottom">
          <Box className="smallBannerEDCBtmContent">
            <Link to={"/CaseStudy/Query-Management"}>
              <MdArrowBackIos fontSize={"50px"} cursor={"pointer"} />
            </Link>
            <Link to={"/CaseStudy/Query-Management"}>Query Management</Link>
          </Box>
          <Box className="SmallBannerEDCCenterLine"></Box>
          <Box className="smallBannerEDCBtmContent">
            <Link to={"/CaseStudy/Hand-Scintigraphy"}>Hand Scintigraphy</Link>
            <Link to={"/CaseStudy/Hand-Scintigraphy"}>
              <MdArrowForwardIos fontSize={"50px"} cursor={"pointer"} />
            </Link>
          </Box>
        </Box>
        {/* Footer */}
        <Box mt={"3rem"}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default ElectronicDataCapture;
