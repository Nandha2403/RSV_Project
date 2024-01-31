import React from "react";
import "./QueryManagement.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../../Components/Menu/Menu";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const QueryManagement = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerQM">
        <Box className="BannerContainerQM">
          <Navbar />
          <Box
            ml={"2rem"}
            pt={{ base: "14rem", sm: "14rem", md: "14rem", lg: "16rem" }}
            color={"white"}
          >
            <Text fontSize={{ base: "4xl", sm: "5xl" }} fontWeight={1000}>
              QUERY MANAGEMENT
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              fontWeight={"bold"}
            >
              Optimizing Imaging Data Integrity
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
        <Box className="EDQMCont">
          <Box className="EDQMHeading">
            <Text className="headings">
              Effective Data Query Management in Clinical Trials (CT) :
            </Text>
          </Box>
          <Box className="EDQMSubTxt">
            <Text>
              Query management is a process used in clinical trials to manage
              and resolve data queries related to imaging data. It involves
              identifying, tracking, and resolving issues related to the quality
              or completeness of the data collected during the trial.
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
        <Box className="smallBannerQM">{/* <img src="" alt="" /> */}</Box>
        {/* Sub cont Txt */}
        <Box className="UnderBannerTxtQM">
          <Text className="headings" lineHeight={"30px"}>
            The query management process typically involves several steps,
            including :
          </Text>
          <Box className="BenifitsOfQM">
            <Box className="BenifitsOfQMTextTitle1">
              <Text>1. Query identification :</Text>
              <Text>
                Queries are identified based on predefined rules and criteria,
                such as missing data or inconsistent data.
              </Text>
            </Box>
            <Box className="BenifitsOfQMTextTitle1">
              <Text>2. Query generation :</Text>
              <Text>
                Once a query is identified, a query message is generated and
                sent to the appropriate party for resolution. For example, if
                the query is related to image quality, it may be sent to the
                imaging core laboratory for review.
              </Text>
            </Box>
            <Box className="BenifitsOfQMTextTitle1">
              <Text>3. Query resolution :</Text>
              <Text>
                The party responsible for resolving the query reviews the data
                and provides a response to the query message. The response may
                include additional data, explanations, or corrections to the
                data.
              </Text>
            </Box>
            <Box className="BenifitsOfQMTextTitle1">
              <Text>4. Query closure :</Text>
              <Text>
                Once the query has been resolved, the query message is closed,
                and the data is updated with the new information.
              </Text>
            </Box>
          </Box>
        </Box>
        {/* AI for Quality */}
        <Box className="UnderBannerTxtQM">
          <Box>
            <Text className="headings" lineHeight={"30px"}>
              The benefits of using query management :
            </Text>
          </Box>
          <Box className="BenifitsOfQM">
            <Box className="BenifitsOfQMTextTitle1">
              <Text>Improved data quality :</Text>
              <Text>
                Query management helps ensure that the imaging data collected
                during the trial is complete, accurate, and consistent, which
                can improve the overall quality of the data.
              </Text>
            </Box>
            <Box className="BenifitsOfQMTextTitle1">
              <Text>Timely resolution of issues :</Text>
              <Text>
                Query management allows issues related to imaging data to be
                identified and resolved quickly, which can help prevent delays,
                in the trial timeline.
              </Text>
            </Box>
            <Box className="BenifitsOfQMTextTitle1">
              <Text>Standardization :</Text>
              <Text>
                Query management helps ensure that queries are handled
                consistently and according to predefined rules and procedures,
                which can improve the reliability and validity of the data
                collected.
              </Text>
            </Box>
            <Box className="BenifitsOfQMTextTitle1">
              <Text>Audit trail :</Text>
              <Text>
                Query management provides an audit trail of all queries and
                responses, which can be useful for quality control and
                regulatory compliance purposes.
              </Text>
            </Box>
            <Box className="BenifitsOfQMTextTitle1">
              <Text>Cost savings :</Text>
              <Text>
                Query management can help reduce the costs associated with
                manual review and resolution of data issues by automating the
                process and reducing the need for manual data entry and
                tracking.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="overallBtmContQM">
          <Text>
            Overall, oncology workflow is a valuable tool for clinical trials
            imaging that can improve the accuracy and efficiency of tumor
            segmentation and response assessment, which is essential for making
            accurate clinical decisions and developing effective treatments for
            cancer patients.
          </Text>
        </Box>
        <Box className="smallBannerQMBottom">
          <Box className="smallBannerQMBtmContent">
            <Link to={"/CaseStudy/Oncology-Workflow"}>
              <MdArrowBackIos fontSize={"50px"} cursor={"pointer"} />
            </Link>
            <Link to={"/CaseStudy/Oncology-Workflow"}>Oncology Workflow</Link>
          </Box>
          <Box className="SmallBannerQMCenterLine"></Box>
          <Box className="smallBannerQMBtmContent">
            <Link to={"/CaseStudy/Electronic-Data-Capture"}>EDC</Link>
            <Link to={"/CaseStudy/Electronic-Data-Capture"}>
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

export default QueryManagement;
