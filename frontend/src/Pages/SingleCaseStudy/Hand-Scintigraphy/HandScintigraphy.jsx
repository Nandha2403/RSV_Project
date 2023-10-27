import React from "react";
import "./HandScintigraphy.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../../Components/Menu/Menu";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const HandScintigraphy = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerHS">
        <Box className="BannerContainerHS">
          <Navbar />
          <Box
            ml={"2rem"}
            pt={{ base: "14rem", sm: "14rem", md: "14rem", lg: "16rem" }}
            color={"white"}
          >
            <Text fontSize={{ base: "4xl", sm: "5xl" }} fontWeight={1000}>
              HAND SCINTIGRAPHY
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              fontWeight={"bold"}
            >
              Radiographic Insights into Hand Health
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
        {/* VisualHandCont */}
        <Box className="VisualHandCont">
          <Box className="VisualHandHeading">
            <Text className="headings">
              Visualizing Hand Function with Scintigraphy Technique :
            </Text>
          </Box>
          <Box className="VisualHandSubTxt">
            <Text>
              Hand scintigraphy is a medical imaging technique that is used to
              evaluate the function of the bones and joints in the hand. It
              involves injecting a small amount of radioactive material into the
              bloodstream and then taking images of the hand using a special
              camera that can detect the radiation emitted by the material.
            </Text>
            <Text>
              During the procedure, the patient is injected with a small amount
              of a radioactive tracer material, such as technetium-99m
              diphosphonate. The material travels through the bloodstream and
              accumulates in areas of increased bone activity, such as areas of
              inflammation, infection, or trauma in the hand.
            </Text>
            <Text>
              The patient's hand is then placed in front of a gamma camera,
              which detects the radiation emitted by the tracer material. The
              camera takes images of the hand from different angles, and the
              resulting images can be used to create a three-dimensional image
              of the hand.
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
        <Box className="smallBannerHS">{/* <img src="" alt="" /> */}</Box>
        {/* Benefits of HS */}
        <Box className="BenefitsHS">
          <Box className="BenefitsHSHeading">
            <Text className="headings">
              The benefits of using hand scintigraphy :
            </Text>
          </Box>
          <Box className="BenefitsHSTextCont">
            <Box className="BenefitsHSTextTitle1">
              <Text>Early detection of bone and joint diseases :</Text>
              <Text>
                Hand scintigraphy can help detect early signs of bone and joint
                diseases, such as arthritis, that may not be visible on X-rays.
              </Text>
            </Box>
            <Box className="BenefitsHSTextTitle1">
              <Text>Accurate diagnosis of bone and joint diseases :</Text>
              <Text>
                Hand scintigraphy can provide more detailed information about
                the extent and severity of bone and joint diseases, which can
                help with accurate diagnosis and treatment planning.
              </Text>
            </Box>
            <Box className="BenefitsHSTextTitle1">
              <Text>Non-invasive :</Text>
              <Text>
                Hand scintigraphy is a non-invasive procedure that does not
                require any incisions or anaesthesia, which can reduce the risk
                of complications and discomfort for the patient.
              </Text>
            </Box>
            <Box className="BenefitsHSTextTitle1">
              <Text>Safe :</Text>
              <Text>
                The amount of radiation used in hand scintigraphy is very low
                and is considered safe for most patients.
              </Text>
            </Box>
            <Box className="BenefitsHSTextTitle1">
              <Text>Objective measurement :</Text>
              <Text>
                Hand scintigraphy provides an objective measurement of bone and
                joint activity, which can be useful in clinical trials for
                evaluating the effectiveness of new treatments or interventions.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="overallBtmContHS">
          <Text>
            Overall, hand scintigraphy is a useful imaging technique that can
            provide valuable information about the function and health of bones
            and joints in the hand and can be a valuable tool in clinical trials
            for evaluating the efficacy of new treatments for bone and joint
            diseases.
          </Text>
        </Box>
        <Box className="smallBannerHSBottom">
          <Box className="smallBannerHSBtmContent">
            <Link to={"/CaseStudy/Electronic-Data-Capture"} target="_top">
              <MdArrowBackIos fontSize={"50px"} cursor={"pointer"} />
            </Link>
            <Link to={"/CaseStudy/Electronic-Data-Capture"} target="_top">
              Electronic Data Capture
            </Link>
          </Box>
          <Box className="SmallBannerHSCenterLine"></Box>
          <Box className="smallBannerHSBtmContent">
            <Link to={"/CaseStudy/Paired-Reads"} target="_top">
              Paired Reads
            </Link>
            <Link to={"/CaseStudy/Paired-Reads"} target="_top">
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

export default HandScintigraphy;
