import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../../Components/Menu/Menu";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import "./AdverseEventModule.css";

const AdverseEventModule = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerAEM">
        <Box className="BannerContainerAEM">
          <Navbar />
          <Box
            ml={"2rem"}
            pt={{ base: "14rem", sm: "14rem", md: "14rem", lg: "16rem" }}
            color={"white"}
          >
            <Text fontSize={{ base: "4xl", sm: "5xl" }} fontWeight={1000}>
              ADVERSE EVENT MODULE
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              fontWeight={"bold"}
            >
              Safety monitoring hub.
            </Text>
          </Box>
          <Box ml={"1.5rem"} mt={"4rem"} pb={"3rem"}></Box>
        </Box>
        {/* Next Gen Cont */}
        <Box className="StreamliningCont">
          <Box className="StreamliningHeading">
            <Text className="headings">
              Streamlining Adverse Event Management in Clinical Trials :
            </Text>
          </Box>
          <Box className="StreamliningSubTxt">
            <Text>
              The Adverse Event Module is a software system used in clinical
              trials to manage adverse events (AEs) reported by participants
              during the trial. It provides a centralized platform for
              collecting, tracking, and analyzing AE data, and helps ensure that
              the trial team is notified of any potential safety concerns on
              time.
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
        <Box className="smallBanner">{/* <img src="" alt="" /> */}</Box>
        {/* Sub cont Txt */}
        {/* AI for Quality */}

        <Box className="KeyFeatures">
          <Box className="KeyFeaturesHeadingCont">
            <Text className="headings">
              The Adverse Event Module typically includes several key features,
              including:
            </Text>
          </Box>
          <Box className="KeyFeaturesTextCont">
            <Box className="KeyFeaturesTextTitle1">
              <Text>Data collection :</Text>
              <Text>
                The module allows trial staff to collect information about AEs
                reported by study participants, including the type, severity,
                and timing of the event.
              </Text>
            </Box>
            <Box className="KeyFeaturesTextTitle1">
              <Text>Reporting :</Text>
              <Text>
                The module provides a standardized format for reporting AEs,
                which can help ensure that the information collected is
                consistent and can be easily analysed.
              </Text>
            </Box>
            <Box className="KeyFeaturesTextTitle1">
              <Text>Data management :</Text>
              <Text>
                The module allows trial staff to manage AE data in a centralized
                database, which can help ensure that the data is easily
                accessible and can be analysed in real-time.
              </Text>
            </Box>
            <Box className="KeyFeaturesTextTitle1">
              <Text>Safety monitoring :</Text>
              <Text>
                The module includes tools for monitoring the safety of trial
                participants, including alerts for potential safety concerns and
                tools for analysing trends in AE data.
              </Text>
            </Box>
            <Box className="KeyFeaturesTextTitle1">
              <Text>Compliance :</Text>
              <Text>
                The module helps ensure that trial staff comply with regulatory
                requirements related to the reporting of AEs, including
                requirements related to reporting timelines and data accuracy.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="KeyFeatures">
          <Box className="KeyFeaturesHeadingCont">
            <Text className="headings">
              The benefits of using an Adverse Event Module in clinical trials
              imaging include:
            </Text>
          </Box>
          <Box className="KeyFeaturesTextCont">
            <Box className="KeyFeaturesTextTitle1">
              <Text>Improved safety :</Text>
              <Text>
                The module allows trial staff to monitor the safety of trial
                participants and identify potential safety concerns in a timely
                manner, which can help prevent harm to study participants.
              </Text>
            </Box>
            <Box className="KeyFeaturesTextTitle1">
              <Text>Regulatory compliance :</Text>
              <Text>
                The module helps ensure that trial staff comply with regulatory
                requirements related to the reporting of AEs, which can help
                prevent delays and penalties related to non-compliance.
              </Text>
            </Box>
            <Box className="KeyFeaturesTextTitle1">
              <Text>Cost savings :</Text>
              <Text>
                The module can help reduce the costs associated with manual data
                entry and reporting, as well as the costs associated with
                resolving safety concerns that may arise during the trial.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="overallBtmContAEM">
          <Text>
            Overall, the Adverse Event Module is a valuable tool for managing AE
            data in clinical trials imaging and can help ensure that the trial
            team is able to monitor participant safety and comply with
            regulatory requirements related to the reporting of AEs.
          </Text>
        </Box>
        <Box className="smallBannerCTBottom">
          <Box className="smallBannerCTBtmContent">
            <Link to={"/CaseStudy/Paired-Reads"}>
              <MdArrowBackIos fontSize={"40px"} cursor={"pointer"} />
            </Link>
            <Link to={"/CaseStudy/Paired-Reads"}>Paired Reads</Link>
          </Box>
          <Box className="SmallBannerCTCenterLine"></Box>
          <Box className="smallBannerCTBtmContent">
            <Link to={"/CaseStudy/AI-In-ClinicalTrial"}>
              AI In Clinical Trials
            </Link>
            <Link to={"/CaseStudy/AI-In-ClinicalTrial"}>
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

export default AdverseEventModule;
