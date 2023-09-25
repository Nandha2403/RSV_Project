import React from "react";
import "./Dermatology.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../../Components/Menu/Menu";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Dermatology = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerDerma">
        <Box className="BannerContainerDerma">
          <Navbar />
          <Box ml={"2rem"} pt={"14rem"} color={"white"}>
            <Text fontSize={"5xl"} fontWeight={1000}>
              AI IN DERMATOLOGY
            </Text>
            <Text fontWeight={"bold"}>
              High-speed, high-precision diagnosis along with professional
            </Text>
          </Box>
          <Box ml={"1.5rem"} pt={"6rem"} pb={"3rem"}>
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
        <Box className="NextGenContDerma">
          <Box className="NextGenHeadingDerma">
            <Text className="headings">
              The Next Frontier of Medical Innovation :
            </Text>
          </Box>
          <Box className="NextGenSubTxtDerma">
            <Text>
              Owing to its extensive clinical, dermatoscopical, and
              dermatopathological image library, dermatology has assumed the
              lead position for the implementation of AI in the medical
              industry.
            </Text>
            <Text>
              AI medical image identification and analysis is extremely helpful
              for high-speed, high-precision diagnosis along with professional
              review in those fields of medicine that rely on imaging data,
              particularly in the dermatological field.
            </Text>
            <Text>
              The coronavirus disease (COVID-19) pandemic has expedited the use
              of digital technologies and lowered the need for face-to-face
              patient interaction. It has also produced a sense of urgency for
              the implementation of AI in healthcare, with dermatology as the
              primary focus.
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
        <Box className="smallBannerDerma">{/* <img src="" alt="" /> */}</Box>
        {/* Sub cont Txt */}
        <Box className="UnderBannerTxtDerma">
          <Text>
            For instance, smartphone applications can recognize and analyse skin
            conditions. They can also upload images to a central server for
            analysis, where qualified dermatologists can accurately assess the
            progression and remission of diseases. Many of the participants in
            the clinical trial eco system gain significant, quantifiable
            benefits from the deployment of this technology.
          </Text>
        </Box>
        {/* AI for Quality */}
        <Box className="AIAdvanceDerma">
          <Box ml={"3rem"}>
            <Text className="headings">
              How Radiant Sage is Leveraging AI to <br /> Advance Dermatology
              Research and Practise :
            </Text>
          </Box>
          <Box className="AIAdvanceDermaTextCont">
            <Box className="AIAdvanceDermaTextTitle1">
              <Text>
                Image acquisition, standardization, and segmentation :
              </Text>
              <Text>
                Images are scanned, converted to a proprietary format, and then
                the segmented images are subjected to quality assurance and
                control. Due to the low contrast surrounding the skin, the fuzzy
                borders, the presence of artefacts, and the uneven structures
                that characterise lesion images, precise boundary identification
                (segmentation) is one of the most crucial and relevant topics in
                image analysis.
              </Text>
            </Box>
            <Box className="AIforQltyTextTitle1">
              <Text>Blinded reads :</Text>
              <Text>
                We usually prefer blind image evaluation methods. Sometimes
                unblinded image evaluation is used to show consistency with the
                results of fully blinded image evaluation.
              </Text>
            </Box>
            <Box className="AIforQltyTextTitle1">
              <Text>Data access and image retrieval :</Text>
              <Text>
                Throughout the course of your dermatology trial, our image
                management software provides simple access to and total
                visibility into data. Additionally, images can be retrieved
                using meta data when the regulating body requests it.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="smallBannerDermaBottom">
          <Box className="smallBannerDermaBtmContent">
            <Box>
              <MdArrowBackIos fontSize={"50px"} cursor={"pointer"} />
            </Box>
            <Link to={"/CaseStudy/AI-In-ClinicalTrial"} target="_top">
              AI IN CLINICAL TRIAL (CT)
            </Link>
          </Box>
          <Box className="SmallBannerDermaCenterLine"></Box>
          <Box className="smallBannerDermaBtmContent">
            <Link to={"/CaseStudy/Business-Intelligence"} target="_top">
              BUSINESS INTELLIGENCE IN (CT)
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

export default Dermatology;
