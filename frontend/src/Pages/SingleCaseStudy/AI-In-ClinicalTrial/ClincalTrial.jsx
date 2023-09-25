import React from "react";
import "./ClincalTrial.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../../Components/Menu/Menu";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const ClincalTrial = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerCT">
        <Box className="BannerContainerCT">
          <Navbar />
          <Box ml={"2rem"} pt={"14rem"} color={"white"}>
            <Text fontSize={"5xl"} fontWeight={1000}>
              AI IN CLINICAL TRIAL (CT)
            </Text>
            <Text fontWeight={"bold"}>From Data to Discovery</Text>
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
        <Box className="NextGenCont">
          <Box className="NextGenHeading">
            <Text className="headings">
              The Next Generation of Evidence-Based Medicine :
            </Text>
          </Box>
          <Box className="NextGenSubTxt">
            <Text>
              The ability of Artificial Intelligence (AI) to perform tasks that
              humans do, albeit more effectively, quickly, and affordably, is
              becoming increasingly sophisticated. Robotics and artificial
              intelligence are already commonplace in our daily lives, but the
              field of healthcare is where they have the most potential.
            </Text>
            <Text>
              Clinical trials are the most recent area of drug development to
              acknowledge AI's potential and to allow it to positively disrupt
              it. Medical imaging is one of the most promising fields for the
              clinical application of AI.
            </Text>
            <Text>
              Data collection, image reconstruction, analysis, and
              interpretation are just a few of the potential uses for this
              field.
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
        <Box className="UnderBannerTxt">
          <Text>
            The use of artificial intelligence (AI) in medical imaging is
            currently the subject of extensive research and has demonstrated
            remarkable sensitivity and accuracy in identifying imaging
            abnormalities.
          </Text>
          <Text>
            The quality of the received images is evaluated to make sure that
            various elements, including the images, are acquired within the
            trial's parameters and study-relevant areas. The quality assessment
            process in the imaging workflow is carried out by imaging
            technologists with training in medical imaging or associates with
            training in the pertinent modality and/or trial protocol Several
            factors are assessed during the image quality check, including the
            coverage, image characteristics, motion, artifacts, contrast, and
            noise.
          </Text>
          <Text>
            AI also aids in the identification of patients, organ segmentation,
            removal of PHI, and image inspection.
          </Text>
        </Box>
        {/* AI for Quality */}
        <Box className="AIforQuality">
          <Box ml={"3rem"}>
            <Text className="headings">
              AI for Quality Control and Data Management in Trails :
            </Text>
          </Box>
          <Box className="AIforQltyTextCont">
            <Box className="AIforQltyTextTitle1">
              <Text>QC Process :</Text>
              <Text>
                AI models to automate the QC process is that it will result in
                unmatched objectivity, scalability, and cost savings
              </Text>
            </Box>
            <Box className="AIforQltyTextTitle1">
              <Text>Instant Evaluations :</Text>
              <Text>
                AI enables instant evaluations with a turnaround time.
              </Text>
            </Box>
            <Box className="AIforQltyTextTitle1">
              <Text>Data Review :</Text>
              <Text>AI allows data review before cloud upload.</Text>
            </Box>
            <Box className="AIforQltyTextTitle1">
              <Text>Availability :</Text>
              <Text>
                AI offers round the clock availability and zero human errors.
              </Text>
            </Box>
            <Box className="AIforQltyTextTitle1">
              <Text>Data Management :</Text>
              <Text>
                AI is a logical alternative for effectively managing and mining
                data due to data volume and complexity.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="smallBannerCTBottom">
          <Box className="smallBannerCTBtmContent">
            <Box>
              <MdArrowBackIos fontSize={"50px"} cursor={"pointer"} />
            </Box>
            <Link to={"/CaseStudy/Paired-Reads"} target="_top">
              PAIRED READS
            </Link>
          </Box>
          <Box className="SmallBannerCTCenterLine"></Box>
          <Box className="smallBannerCTBtmContent">
            <Link to={"/CaseStudy/AI-In-Dermatology"} target="_top">
              AI IN DERMATOLOGY
            </Link>
            <Box>
              <MdArrowForwardIos fontSize={"50px"} cursor={"pointer"} />
            </Box>
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

export default ClincalTrial;
