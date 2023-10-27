import React from "react";
import "./BusinessIntelligence.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Navbar from "../../../Components/Navbar/Navbar";
import Menu from "../../../Components/Menu/Menu";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const BusinessIntelligence = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerBI">
        <Box className="BannerContainerBI">
          <Navbar />
          <Box
            ml={"2rem"}
            pt={{ base: "14rem", sm: "14rem", md: "14rem", lg: "16rem" }}
            color={"white"}
          >
            <Text fontSize={{ base: "4xl", sm: "5xl" }} fontWeight={1000}>
              BUSINESS INTELLIGENCE (BI)
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              fontWeight={"bold"}
            >
              Unlocking Insights, Enhancing Lives
            </Text>
          </Box>
          <Box ml={"1.5rem"} mt={"4rem"} pb={"3rem"}>
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
        {/* Next Gen Cont */}
        <Box className="PowerBICont">
          <Box className="PowerBIHeading">
            <Text className="headings">
              The Power of Business Intelligence in Data Analysis :
            </Text>
          </Box>
          <Box className="PowerBISubTxt">
            <Text>
              Business intelligence (BI) is a technological process that uses
              data mining, data visualisation, and business analytics to extract
              useful information from substantial amounts of data. In the
              clinical trial industry, BI is a topic that is getting increased
              attention. Huge data sets can be accessed and analysed using
              business intelligence tools, and the results can be displayed in
              summaries, reports, graphs, dashboards, and maps.
            </Text>
            <Text>
              It is a warehouse of data that provides the insights needed in
              real-time, allowing study monitors to recognise potential issues
              quickly and implement process improvements to keep studies on
              track.
            </Text>
            <Text>
              Making wise decisions at the optimal duration, regulating risks
              and changes, and fostering trust through an elevated level of
              operational data transparency are all made possible by BI in
              clinical trials.
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
        <Box className="smallBannerBI">{/* <img src="" alt="" /> */}</Box>
        {/* Sub cont Txt */}
        {/* AI for Quality */}
        <Box className="VisualizedImage">
          <Box className="VisualizedImageHeadingCont">
            <Text className="headings">
              Visualized Image Management for Enhanced Clinical Efficiency :
            </Text>
          </Box>
          <Box className="VisualizedImageTextCont">
            <Box className="VisualizedImageTextTitle1">
              <Text>Image Management :</Text>
              <Text>
                Enhancing operational efficiency includes all aspects of
                managing medical images in clinical studies, from data related
                to site initiation to those produced during independent
                radiologic reads to all data generated during image quality
                control and open query processes.
              </Text>
            </Box>
            <Box className="VisualizedImageTextTitle1">
              <Text>Data Visualization :</Text>
              <Text>
                Data visualisation tools optimise operational efficiency when
                used to deliver powerful reports that provide insights into
                quality monitoring, forecasts, and risk management.
              </Text>
            </Box>
            <Box className="VisualizedImageTextTitle1">
              <Text>Speedy Insights :</Text>
              <Text>
                They play a crucial role in reducing the time to delivery and
                facilitating quicker operational decision-making.
              </Text>
            </Box>
            <Box className="VisualizedImageTextTitle1">
              <Text>Transparent Insights :</Text>
              <Text>
                Business intelligence tools provide a huge level of transparency
                within a clinical trial by implementing data summarization and
                aggregation capabilities designed to effectively communicate the
                desired insights and support critical thinking.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="smallBannerBIBottom">
          <Box className="smallBannerBIBtmContent">
            <Link to={"/CaseStudy/AI-In-Dermatology"} target="_top">
              <MdArrowBackIos fontSize={"40px"} cursor={"pointer"} />
            </Link>
            <Link to={"/CaseStudy/AI-In-Dermatology"} target="_top">
              AI In Dermatology
            </Link>
          </Box>
          <Box className="SmallBannerBICenterLine"></Box>
          <Box className="smallBannerBIBtmContent">
            <Link to={"/CaseStudy/Oncology-Workflow"} target="_top">
              Oncology Workflow
            </Link>
            <Link to={"/CaseStudy/Oncology-Workflow"} target="_top">
              <MdArrowForwardIos fontSize={"40px"} cursor={"pointer"} />
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

export default BusinessIntelligence;
