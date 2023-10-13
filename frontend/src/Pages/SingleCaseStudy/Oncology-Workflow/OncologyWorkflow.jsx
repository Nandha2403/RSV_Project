import React from "react";
import "./OncologyWorkflow.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../../Components/Menu/Menu";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const OncologyWorkflow = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerOnco">
        <Box className="BannerContainerOnco">
          <Navbar />
          <Box ml={"2rem"} pt={"14rem"} color={"white"}>
            <Text fontSize={{ base: "4xl", sm: "5xl" }} fontWeight={1000}>
              ONCOLOGY WORKFLOW
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              fontWeight={"bold"}
            >
              Cancer Imaging Workflow Overview
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
        <Box className="InnovationsOncoImgCont">
          <Box className="InnovationsOncoImgHeading">
            <Text className="headings">
              Innovations in Oncology Imaging Workflow :
            </Text>
          </Box>
          <Box className="InnovationsOncoImgSubTxt">
            <Text>
              Oncology workflow is a specialized process used in clinical trials
              imaging to evaluate and track the progress of cancer patients.
            </Text>
            <Text>
              The workflow involves acquiring, processing, analysing, and
              interpreting imaging data from a variety of imaging modalities,
              including CT, MRI, and PET scans.
            </Text>
            <Text>
              The oncology workflow is specifically designed to support the
              unique needs of oncology clinical trials, which often involve
              complex imaging protocols and require sophisticated analysis
              tools.
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
        <Box className="smallBannerOnco">{/* <img src="" alt="" /> */}</Box>
        {/* Sub cont Txt */}
        <Box className="UnderBannerTxtOnco">
          <Text className="headings" lineHeight={"30px"}>
            The oncology workflow typically includes the following steps :
          </Text>
          <Box className="OncoWorkTypTextCont">
            <Box className="OncoWorkTypTextTitle1">
              <Text>1. Image acquisition :</Text>
              <Text>
                Imaging data is acquired from a variety of imaging modalities,
                including CT, MRI, and PET scans.
              </Text>
            </Box>
            <Box className="OncoWorkTypTextTitle1">
              <Text>2. Image processing :</Text>
              <Text>
                The acquired imaging data is processed using automated analysis
                tools to generate quantitative measurements and detect
                abnormalities.
              </Text>
            </Box>
            <Box className="OncoWorkTypTextTitle1">
              <Text>3. Tumour segmentation :</Text>
              <Text>
                Tumours are segmented, and their boundaries are delineated using
                advanced algorithms.
              </Text>
            </Box>
            <Box className="OncoWorkTypTextTitle1">
              <Text>4. Response assessment :</Text>
              <Text>
                Response assessment is performed to evaluate the effectiveness
                of treatment based on the changes in tumour size and morphology.
              </Text>
            </Box>
            <Box className="OncoWorkTypTextTitle1">
              <Text>5. Clinical interpretation :</Text>
              <Text>
                The results of the oncology workflow are clinically interpreted
                to determine the implications for the patient's condition and
                treatment.
              </Text>
            </Box>
          </Box>
        </Box>
        {/* BenifitsOfOnco */}
        <Box className="BenifitsOfOnco">
          <Box className="BenifitsOfOncoHeadingCont">
            <Text className="headings">
              Benefits of using oncology workflow :
            </Text>
          </Box>
          <Box className="OncoWorkTypTextCont">
            <Box className="OncoWorkTypTextTitle1">
              <Text>Improved accuracy :</Text>
              <Text>
                The oncology workflow uses advanced algorithms and automated
                analysis tools to improve the accuracy of tumour segmentation
                and response assessment.
              </Text>
            </Box>
            <Box className="OncoWorkTypTextTitle1">
              <Text>Standardization :</Text>
              <Text>
                The oncology workflow provides a standardized approach to tumour
                segmentation and response assessment, reducing variability
                between different radiologists and clinicians.
              </Text>
            </Box>
            <Box className="OncoWorkTypTextTitle1">
              <Text>Early detection :</Text>
              <Text>
                The oncology workflow can detect tumours at an early stage,
                which is crucial for improving patient outcomes.
              </Text>
            </Box>
            <Box className="OncoWorkTypTextTitle1">
              <Text>Regulatory compliance :</Text>
              <Text>
                The oncology workflow can help clinical trials comply with
                regulatory requirements related to the accuracy and consistency
                of imaging data.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="overallBtmContOnco">
          <Text>
            Overall, oncology workflow is a valuable tool for clinical trials
            imaging that can improve the accuracy and efficiency of tumour
            segmentation and response assessment, which is essential for making
            accurate clinical decisions and developing effective treatments for
            cancer patients.
          </Text>
        </Box>
        <Box className="smallBannerOncoBottom">
          <Box className="smallBannerOncoBtmContent">
            <Link to={"/CaseStudy/Business-Intelligence"} target="_top">
              <MdArrowBackIos fontSize={"40px"} cursor={"pointer"} />
            </Link>
            <Link to={"/CaseStudy/Business-Intelligence"} target="_top">
              BI In Clinical Trials
            </Link>
          </Box>
          <Box className="SmallBannerOncoCenterLine"></Box>
          <Box className="smallBannerOncoBtmContent">
            <Link to={"/CaseStudy/Query-Management"} target="_top">
              Query Management
            </Link>
            <Link to={"/CaseStudy/Query-Management"} target="_top">
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

export default OncologyWorkflow;
