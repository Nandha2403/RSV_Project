import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../Components/Menu/Menu";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Solutions.css";

const Solutions = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800 });
  };
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerSolutions">
        <Box className="BannerContainerSolutions">
          <Navbar />
          <Box ml={"1rem"} pt={"14rem"} color={"white"}>
            <Text fontSize={{ base: "4xl", sm: "5xl" }} fontWeight={1000}>
              SOLUTIONS
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              fontWeight={"bold"}
            >
              Radiant Sage's solutions offer numerous benefits to <br />
              stakeholders in clinical trials.
            </Text>
          </Box>
          <Box ml={"1rem"} mt={"2rem"} pb={"4rem"}>
            <Button
              size={"xs"}
              borderRadius={"15px"}
              p={"0px 20px 0px 20px"}
              colorScheme="#131049"
              bg="#131049"
            >
              <a style={{ transition: "0.35s" }} href="#btm">
                Learn More
              </a>
            </Button>
          </Box>
        </Box>
        {/* <nav>
          <ul>
            <li>
              <Link
                to="section1"
                spy={true}
                offset={-50}
                smooth={true}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            <li>
              <Link
                to="section2"
                spy={true}
                offset={-50}
                smooth={true}
                duration={500}
              >
                Section 2
              </Link>
            </li>
          </ul>
        </nav>

        <p name="section1" className="element">
          <b>Section 1 Content</b>
        </p>

        <p name="section2" className="element">
          <b> Section 2 Content</b>
        </p> 

        <button onClick={scrollToTop}>Scroll to Top</button>
        */}
        <Box className="SolutionLinkContainer">
          <Text textAlign={"center"}>Radient Sage Solutions</Text>
          <Box className="LinksContainer">
            <Link to="DSA" spy={true} offset={-50} smooth={true} duration={500}>
              DSt & A
            </Link>
            {"-"}
            <Link to="CH" spy={true} offset={-50} smooth={true} duration={500}>
              CH
            </Link>
            {"-"}
            <Link to="BR" spy={true} offset={-50} smooth={true} duration={500}>
              BR
            </Link>
            {"-"}
            <Link to="IRM" spy={true} offset={-50} smooth={true} duration={500}>
              IRM
            </Link>
            {"-"}
            <Link to="RAR" spy={true} offset={-50} smooth={true} duration={500}>
              RAR
            </Link>
            {"-"}
            <Link to="DA" spy={true} offset={-50} smooth={true} duration={500}>
              DA
            </Link>
            {"-"}
            <Link to="CR" spy={true} offset={-50} smooth={true} duration={500}>
              CR
            </Link>
            {"-"}
            <Link to="BVR" spy={true} offset={-50} smooth={true} duration={500}>
              BVR
            </Link>
            {"-"}
            <Link
              to="DERMA"
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
            >
              DERMA
            </Link>
            {"-"}
            <Link to="EA" spy={true} offset={-50} smooth={true} duration={500}>
              EA
            </Link>
          </Box>
        </Box>
        <Box className="SolutionsContainer">
          <Box className="single_solutions_container" id="DSA">
            <Text className="headings">Data Standardization and Acquition</Text>
            <Box className="Solutions_content_container">
              <Text className="text_container">
                A clinical trial is being conducted for a new drug. An imaging
                CRO is contracted to oversee the process. They receive images
                from multiple sites. Some images are sent via FTP, others are
                sent on electronic media by mail, while yet others are sent on
                film by courier. Some of the electronic data is in DICOM, others
                are in vendor proprietary formats.
                <Box mt={"1rem"}>
                  <Button
                    size={"sm"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Learn More
                  </Button>
                </Box>
              </Text>
              <img
                src="https://www.calyx.ai/wp-content/uploads/2023/03/xray-color-reversed-2048x1510-copy-300x234.png"
                alt="demo"
              />
            </Box>
          </Box>
          <Box className="single_solutions_container" id="CH">
            <Text className="headings">Collect and Hold</Text>
            <Box className="Solutions_content_container">
              <Text className="text_container">
                RSV offers a collect and hold solution where images are
                collected, QCed and stored for future analysis and other
                uses,using a combination of RadGate, RadClinica and RadVault. A
                similar setup process is followed for site management.
                <Box mt={"1rem"}>
                  <Button
                    size={"sm"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Learn More
                  </Button>
                </Box>
              </Text>
              <img
                src="https://www.calyx.ai/wp-content/uploads/2023/03/xray-color-reversed-2048x1510-copy-300x234.png"
                alt="demo"
              />
            </Box>
          </Box>
          <Box className="single_solutions_container" id="BR">
            <Text className="headings">Blinded Reads</Text>
            <Box className="Solutions_content_container">
              <Text className="text_container">
                Post QC, RadFlow provides a unsupervised workflow engine to
                assign image datasets to be assessed by various trained
                radiologists on this trial. When a task is started, RadVista
                loads the approproiate datasets and analysis modules that are
                configured and potentially customized to the needs of the read
                paradigm. RadVista offers a semi-automated tool to segment a
                region of interest on the images with a single click to reduce
                reader time and effort.
                <Box mt={"1rem"}>
                  <Button
                    size={"sm"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Learn More
                  </Button>
                </Box>
              </Text>
              <img
                src="https://www.calyx.ai/wp-content/uploads/2023/03/xray-color-reversed-2048x1510-copy-300x234.png"
                alt="demo"
              />
            </Box>
          </Box>
          <Box className="single_solutions_container" id="IRM">
            <Text className="headings">Image Retrieval using Meta Data</Text>
            <Box className="Solutions_content_container">
              <Text className="text_container">
                A researcher has developed a new algorithm for segmenting brain
                tissue. The researcher wants to search the repository for brain
                scans with particular acquisition parameters. In particular he
                is interested in scans that have been previously segmented.
                After selecting appropriate datasets the algorithm is run on the
                data and the results are compared to the previously acquired
                results.
                <Box mt={"1rem"}>
                  <Button
                    size={"sm"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Learn More
                  </Button>
                </Box>
              </Text>
              <img
                src="https://www.calyx.ai/wp-content/uploads/2023/03/xray-color-reversed-2048x1510-copy-300x234.png"
                alt="demo"
              />
            </Box>
          </Box>
          <Box className="single_solutions_container" id="RAR">
            <Text className="headings">Regulatory Access for Review</Text>
            <Box className="Solutions_content_container">
              <Text className="text_container">
                Regulatory authorities request to view images. The requested
                images are flagged in Corelab-in-a-Box for realtime review and
                assessed using a browser. Alternatively, the tool may provide
                the opportunity for the submission to contain hyperlinks to
                images in the repository.
                <Box mt={"1rem"}>
                  <Button
                    size={"sm"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Learn More
                  </Button>
                </Box>
              </Text>
              <img
                src="https://www.calyx.ai/wp-content/uploads/2023/03/xray-color-reversed-2048x1510-copy-300x234.png"
                alt="demo"
              />
            </Box>
          </Box>
          <Box className="single_solutions_container" id="DA">
            <Text className="headings">Data Access</Text>
            <Box className="Solutions_content_container">
              <Text className="text_container">
                A particular study is being conducted out of a sponsor central
                facility. The project team needs to have quick access to the
                image data in order to monitor the study. A mirror copy of the
                study is locally available for retrieval.
                <Box mt={"1rem"}>
                  <Button
                    size={"sm"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Learn More
                  </Button>
                </Box>
              </Text>
              <img
                src="https://www.calyx.ai/wp-content/uploads/2023/03/xray-color-reversed-2048x1510-copy-300x234.png"
                alt="demo"
              />
            </Box>
          </Box>
          <Box className="single_solutions_container" id="CR">
            <Text className="headings">Oncology/Criteria Reads</Text>
            <Box className="Solutions_content_container">
              <Text className="text_container">
                RadVista' support of Oncological Assessments is unique in that
                it reduces radiologist time to perform assessements across
                timepoints through automation. RadVista ensures all lesions are
                properly tracted temporally with options so split/merge lesions,
                lesion numbering etc.
                <Box mt={"1rem"}>
                  <Button
                    size={"sm"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Learn More
                  </Button>
                </Box>
              </Text>
              <img
                src="https://www.calyx.ai/wp-content/uploads/2023/03/xray-color-reversed-2048x1510-copy-300x234.png"
                alt="demo"
              />
            </Box>
          </Box>
          <Box className="single_solutions_container" id="BVR">
            <Text className="headings">Brain Volume Reads</Text>
            <Box className="Solutions_content_container">
              <Text className="text_container">
                RSV's AI model for anatomical brain assessment processes T1
                brain scans and segments over 80 regions of the brain in less
                than 90 seconds. Volumes of each region is calculated along with
                total brain volumes to detect changes in volumes across
                timepoints.
                <Box mt={"1rem"}>
                  <Button
                    size={"sm"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Learn More
                  </Button>
                </Box>
              </Text>
              <img
                src="https://www.calyx.ai/wp-content/uploads/2023/03/xray-color-reversed-2048x1510-copy-300x234.png"
                alt="demo"
              />
            </Box>
          </Box>
          <Box className="single_solutions_container" id="DERMA">
            <Text className="headings">Dermatology</Text>
            <Box className="Solutions_content_container">
              <Text className="text_container">
                CLIB supports the upload of image files (JPG, PNG) from external
                sources and link them to subjects in a study. Uploaded images
                follow a similar process and are QCed and made available for
                assessments. Assessments can be qualitative or quatitive. RSV
                also has developed a SmartPhone App for Android as well as Apple
                phones to allow participating subjects to take images at home
                and automatically upload them to CLIB. The app supports an
                interactive help to assist subjects during image acquisition. In
                addition, the app supports image QC and analysis on the phone
                prior to upload to improve the quality of acquired images. The
                App also supports a patient centric eCRF e.g. QOL form etc to
                capture responses directly from patients. RSV is also exploring
                the use of AI to improve the patient experience.
                <Box mt={"1rem"}>
                  <Button
                    size={"sm"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Learn More
                  </Button>
                </Box>
              </Text>
              <img
                src="https://www.calyx.ai/wp-content/uploads/2023/03/xray-color-reversed-2048x1510-copy-300x234.png"
                alt="demo"
              />
            </Box>
          </Box>
          <Box className="single_solutions_container" id="EA">
            <Text className="headings">Event Adjudication</Text>
            <Box className="Solutions_content_container">
              <Text className="text_container">
                RSV offers an Event Adjudication platform that combines modules
                in CLIB to deliver an unique and customizable solution to
                adjudicate events and support safety commitees. RadEvent
                supports the upload of essential documents, files and images
                along with additional content to create a dossier for each event
                to be assessed. Uploaded content is QCed including features for
                redaction, translation, merging, splitting and concatinating of
                documents as needed. Custom workflows can be setup to process
                any of the data uploaded. Once dossiers are created, experts can
                review the dossier and respond to eCRF questions. Assessments
                can be compared and further reads can be performed. RadEvent
                also supports realtime consensus reads with multiple signatures.
                <Box mt={"1rem"}>
                  <Button
                    size={"sm"}
                    borderRadius={"15px"}
                    p={"0px 20px 0px 20px"}
                    colorScheme="#131049"
                    bg="#131049"
                  >
                    Learn More
                  </Button>
                </Box>
              </Text>
              <img
                src="https://www.calyx.ai/wp-content/uploads/2023/03/xray-color-reversed-2048x1510-copy-300x234.png"
                alt="demo"
              />
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

export default Solutions;
