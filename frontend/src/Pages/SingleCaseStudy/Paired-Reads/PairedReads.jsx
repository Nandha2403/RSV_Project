import React from "react";
import "./PairedReads.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../../Components/Menu/Menu";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const PairedReads = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerPR">
        <Box className="BannerContainerPR">
          <Navbar />
          <Box
            ml={"2rem"}
            pt={{ base: "14rem", sm: "14rem", md: "14rem", lg: "16rem" }}
            color={"white"}
          >
            <Text fontSize={{ base: "4xl", sm: "5xl" }} fontWeight={1000}>
              PAIRED READS
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              fontWeight={"bold"}
            >
              Double the Data, Double the Discovery
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
        <Box className="PRInCTICont">
          <Box className="PRInCTIHeading">
            <Text className="headings">
              Paired-End Sequencing in Clinical Trials Imaging :
            </Text>
          </Box>
          <Box className="PRInCTISubTxt">
            <Text>
              Paired reads, also known as paired-end sequencing, is a type of
              DNA sequencing method that involves sequencing both ends of a DNA
              fragment. This allows for the detection of structural variants
              such as insertions, deletions, and inversions, which are important
              in clinical trials imaging for understanding the genetic basis of
              diseases and developing personalized therapies.
            </Text>
            <Text>
              Paired-end sequencing works by fragmenting the DNA into small
              pieces, attaching adapters to the ends of each fragment, and then
              sequencing both ends of each fragment separately.
            </Text>
            <Text>
              The two reads produced by paired-end sequencing are typically
              shorter than those produced by other sequencing methods, such as
              single-end sequencing, but they provide more information about the
              structure of the DNA fragment.
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
        <Box className="smallBannerPR">{/* <img src="" alt="" /> */}</Box>
        {/* AI for Quality */}
        <Box className="BenefitsofPR">
          <Box className="BenefitsofPRHeadingCont">
            <Text className="headings">
              The benefits of using paired-end sequencing :
            </Text>
          </Box>
          <Box className="BenefitsofPRTextCont">
            <Box className="BenefitsofPRTextTitle1">
              <Text>Improved accuracy :</Text>
              <Text>
                Paired-end sequencing can help reduce sequencing errors and
                improve the accuracy of the data produced, which is important
                for making accurate clinical decisions.
              </Text>
            </Box>
            <Box className="BenefitsofPRTextTitle1">
              <Text>Increased sensitivity :</Text>
              <Text>
                Paired-end sequencing can detect rare variants that may be
                missed by other sequencing methods, which can improve the
                sensitivity of the analysis.
              </Text>
            </Box>
            <Box className="BenefitsofPRTextTitle1">
              <Text>Detection of structural variants :</Text>
              <Text>
                Paired-end sequencing can detect structural variants such as
                insertions, deletions, and inversions, which are important for
                understanding the genetic basis of diseases and developing
                personalized therapies.
              </Text>
            </Box>
            <Box className="BenefitsofPRTextTitle1">
              <Text>Cost-effective :</Text>
              <Text>
                Paired-end sequencing is a cost-effective method for producing
                high-quality sequencing data, which is important for clinical
                trials that require substantial amounts of sequencing data.
              </Text>
            </Box>
            <Box className="BenefitsofPRTextTitle1">
              <Text>Compatibility with different sample types :</Text>
              <Text>
                Paired-end sequencing can be used with a variety of sample
                types, including tissue, blood, and saliva, which makes it a
                versatile tool for clinical trials imaging.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="overallBtmContPR">
          <Text>
            Overall, paired-end sequencing is a powerful tool for clinical
            trials imaging, as it allows for the detection of structural
            variants and provides high-quality sequencing data that can be used
            to develop personalized therapies and improve clinical
            decision-making.
          </Text>
        </Box>
        <Box className="smallBannerPRBottom">
          <Box className="smallBannerPRBtmContent">
            <Link to={"/CaseStudy/Hand-Scintigraphy"} target="_top">
              <MdArrowBackIos fontSize={"40px"} cursor={"pointer"} />
            </Link>
            <Link to={"/CaseStudy/Hand-Scintigraphy"} target="_top">
              Hand Scintigraphy
            </Link>
          </Box>
          <Box className="SmallBannerPRCenterLine"></Box>
          <Box className="smallBannerPRBtmContent">
            <Link to={"/CaseStudy/AI-In-ClinicalTrial"} target="_top">
              AI In CT
            </Link>
            <Link to={"/CaseStudy/AI-In-ClinicalTrial"} target="_top">
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

export default PairedReads;
