import React from "react";
import { Link } from "react-scroll";
import { Box, Text } from "@chakra-ui/react";
import Menu from "../../Components/Menu/Menu";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CollectAndHold from "../../Images/Collect and Hold data-01.png";
import DSA from "../../Images/DataStandardizationandAcquisition.png";
import BR from "../../Images/BlindedReads.png";
import IRM from "../../Images/ImageRetrievalUsingMetaData.png";
import RAR from "../../Images/RegulatoryAccessForReview.png";
import DA from "../../Images/DataAccess.png";
import ONCO from "../../Images/Oncology&CriteriaReads.png";
import BVR from "../../Images/BrainVolumeReads.png";
import DERMA from "../../Images/Dermatology.png";
import EA from "../../Images/EventAdjudication.png";

import BlindedReads from "../../Images/Blinded Reads-01.png";
import ImageRetrievalUsingMetaData from "../../Images/Image Retrieval using Meta Data-01.png";
import RegulatoryAccessForReview from "../../Images/Regulatory Access for Review-01.png";
import DataAccess from "../../Images/Data Access-01.png";
import OncologyAndCriteriaReads from "../../Images/Oncology Criteria Reads-01.png";
import BrainVolumeReads from "../../Images/Brain Volume Reads-01.png";
import Dermatology from "../../Images/Dermatology-01.png";
import EventAdjudication from "../../Images/Event Adjudication-01.png";

import "./Solutions.css";

const Solutions = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerSolutions">
        <Box className="BannerContainerSolutions">
          <Navbar />
          <Box textAlign={"left"} color={"white"}>
            <Box pt={"12rem"}>
              <Text
                fontSize={"4xl"}
                ml={"1.5rem"}
                fontWeight={"bold"}
                fontFamily={"poppins"}
              >
                SOLUTIONS
              </Text>
            </Box>
            {/*  */}
            <Box className="BannerIntroContent">
              <Text as={"p"}>
                Radiant Sage Imaging Solutions offers Stakeholders <br />
                Enhanced Insight and Efficiency
              </Text>
            </Box>
            <Box ml={"1.5rem"} mt={"2rem"} pb={"4rem"}>
              {/* <Button
                size={"xs"}
                borderRadius={"15px"}
                p={"0px 20px 0px 20px"}
                colorScheme="#131049"
                bg="#131049"
              >
                <Link to={"/Solutions"}>Learn More</Link>
              </Button> */}
            </Box>
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
          <Text textAlign={"center"} className="headings">
            Radiant Sage Solutions
          </Text>
          {/* <Box className="LinksContainer">
            <Link to="DSA" spy={true} offset={-50} smooth={true} duration={500}>
              DSA
            </Link>
            <Link to="BR" spy={true} offset={-50} smooth={true} duration={500}>
              BR
            </Link>
            <Link to="IRM" spy={true} offset={-50} smooth={true} duration={500}>
              IRM
            </Link>
            <Link to="RAR" spy={true} offset={-50} smooth={true} duration={500}>
              RAR
            </Link>
            <Link to="DA" spy={true} offset={-50} smooth={true} duration={500}>
              DA
            </Link>
            <Link to="CR" spy={true} offset={-50} smooth={true} duration={500}>
              CR
            </Link>
            <Link to="BVR" spy={true} offset={-50} smooth={true} duration={500}>
              BVR
            </Link>
            <Link
              to="DERMA"
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
            >
              DERMA
            </Link>
            <Link to="EA" spy={true} offset={-50} smooth={true} duration={500}>
              EA
            </Link>
          </Box> */}
        </Box>
        <Box className="SolutionsContainer">
          <Box className="single_solutions_container" id="DSA">
            <Text className="headings">
              Data Standardization and Acquisition
            </Text>
            <Box className="Solutions_content_container">
              <Box className="text_container">
                <Text>
                  RSV has an HTML5/Web-based import module referred to as
                  RadGate that sites use to upload data into the system. Site
                  users (or anyone with site-specific upload access) log in and
                  select a patient or timepoint to upload. The user selects a
                  folder or files to upload, and the upload module processes
                  these files and presents the user with a summary manifest of
                  what will be uploaded, excluding data that is extraneous
                  (e.g., ".exe" files). This form can be configured to ask for
                  additional data if necessary (not in the headers). A viewer is
                  also available that can be used to view the images prior to
                  transmittal (this step can be a requirement or optional). The
                  user is presented with a Data Transmittal Form (DTF), signs
                  the DTF, and the transfer of images starts.
                </Text>
              </Box>

              <Box className="image_container">
                <img src={DSA} alt="DSA" />
              </Box>
              <Box className="text_container">
                <Text>
                  As the images are transferred, they are blinded and anonymized
                  based on study configurations. RadGate also checks for
                  duplicates, "bad" DICOM files, etc., runs edit checks to check
                  for data issues (e.g., wrong modality, incorrect acquisition
                  parameters if configured, etc.), and can automatically create
                  Data Clarification Forms (DCFs) or Protocol Deviations (PDs)
                  that have to be addressed by the site/corelab staff. Once all
                  the images are uploaded, a copy of the DTF is sent to the site
                  for their records, and the uploaded content is added to the
                  study’s workflow (Eligibility, QC, etc.) with automated
                  notification to users that new data has arrived and needs to
                  be processed. The module also has features to import non-DICOM
                  data and hardcopy film, along with a myriad of other features.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="single_solutions_container" id="BR">
            <Text className="headings">Blinded Reads</Text>
            <Box className="Solutions_content_container">
              <Box className="text_container">
                <Text>
                  Blinded Reads Post-QC, RadFlow provides an unsupervised
                  workflow engine to assign image datasets to be assessed by
                  various trained radiologists on this trial. When a task is
                  started, RadVista loads the appropriate datasets and analyses
                  modules that are configured and potentially customized to the
                  needs of the reading paradigm. RadVista offers a
                  semi-automated tool to segment a region of interest on the
                  images with a single click to reduce reader time and effort.
                </Text>
              </Box>

              <Box className="image_container">
                <img src={BR} alt="BlindedReads" />
              </Box>
              <Box className="text_container">
                <Text>
                  RadVista covers Most of the oncological assessment criteria
                  (e.g., RECIST, mRECIST, etc.). RadVista also has many analysis
                  tools to address analysis needs for MKS, CNS, cardiovascular,
                  and other therapeutic areas. The results are stored in an
                  electronic Case Report Form (eCRF) that is customizable as
                  needed. The Measurements are also stored back on the server
                  with the audit. trails. Image data can be completely blinded
                  and randomized. for reading, if necessary. Multiple
                  radiologists are recruited to perform assessments, which
                  automatically trigger adjudications to happen based on
                  discrepancies between multiple readers. All results are stored
                  back into Corelab-in-a-BoxTM, and final reports are generated.
                  RadFlow and RadVista have been developed in many
                  configurations. options to support the diverse range of
                  requirements for blinded reads.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="single_solutions_container" id="IRM">
            <Text className="headings">Image Retrieval using Meta Data</Text>
            <Box className="Solutions_content_container">
              <Box className="text_container">
                <Text>
                  RadVault stores metadata about each and every file in the
                  vault. Searches can be executed against this metadata. Results
                  can be organized into cohorts, and these cohorts can be shared
                  with authorized users for a myriad of purposes. One such
                  purpose is to create, test, and evaluate analysis algorithms.
                </Text>
              </Box>

              <Box className="image_container">
                <img src={IRM} alt="IRM" />
              </Box>
              <Box className="text_container">
                <Text>
                  A researcher searches RadVault for brain scans with particular
                  acquisition parameters to test a new algorithm for segmenting
                  brain tissue. The focus is on scans that have been previously
                  segmented and analyzed. The algorithm is run on the data in
                  the cohort, and the results are compared to the previously
                  acquired results. Newly generated results are then written
                  back to RadVault for future use.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="single_solutions_container" id="RAR">
            <Text className="headings">Regulatory Access for Review</Text>
            <Box className="Solutions_content_container">
              {/* <Box className="image_container">
                <img
                  width={"45%"}
                  style={{ margin: "auto" }}
                  src={RegulatoryAccessForReview}
                  alt="RegulatoryAccessForReview"
                />
              </Box> */}
              <Box className="text_container">
                <Text>
                  Regulatory authorities may request to view images, and the
                  requested images are flagged in Corelab-in-a-Box for real-time
                  review, assessed using a browser.
                </Text>
              </Box>

              <Box className="image_container">
                <img src={RAR} alt="RAR" />
              </Box>
              <Box className="text_container">
                <Text>
                  Alternatively, the tool may provide the opportunity for the
                  submission to contain hyperlinks to images in the repository.
                  Reviewers will have ready access to both the original and
                  processed data.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="single_solutions_container" id="DA">
            <Text className="headings">Data Access</Text>
            <Box className="Solutions_content_container">
              {/* <Box className="image_container">
                <img
                  src={DataAccess}
                  alt="DataAccess"
                  width={"60%"}
                  style={{ margin: "auto" }}
                />
              </Box> */}
              <Box className="text_container">
                <Text>
                  The project team needs quick access to image data to monitor
                  the study. Authorized users log in to view image data, either
                  as assigned tasks or by manually navigating to the appropriate
                  patient.
                </Text>
              </Box>
              <Box className="image_container">
                <img src={DA} alt="DA" />
              </Box>
              <Box className="text_container">
                <Text>
                  Images are rendered in the browser and made available to the
                  user along with additional non-image data, such as
                  measurements, eCRF, or reports, based on permissions.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="single_solutions_container" id="CR">
            <Text className="headings">Oncology/Criteria Reads</Text>
            <Box className="Solutions_content_container">
              {/* <Box className="image_container">
                <img
                  width={"70%"}
                  style={{ margin: "auto" }}
                  src={OncologyAndCriteriaReads}
                  alt="OncologyAndCriteriaReads"
                />
              </Box> */}
              <Box className="text_container">
                <Text>
                  RadVista's support for Oncological Assessments is unique in
                  that it reduces radiologist time to perform assessments across
                  timepoints through automation. RadVista ensures all lesions
                  are properly tracked temporally, with options to split/merge
                  lesions, assign lesion numbering, etc. RadVista supports all
                  the common criteria, including RECIST, mRECIST, iRECIST, CHOI,
                  LungRads, etc. Each criterion's requirements can be configured
                  as needed.
                </Text>
              </Box>
              <Box className="image_container">
                <img src={ONCO} alt="ONCO" />
              </Box>
              <Box className="text_container">
                <Text>
                  RadVista supports all the common criteria, including RECIST,
                  mRECIST, iRECIST, CHOI, LungRads, etc. Each criterion's
                  requirements can be configured as needed.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="single_solutions_container" id="BVR">
            <Text className="headings">Brain Volume Reads</Text>
            <Box className="Solutions_content_container">
              {/* <Box className="image_container">
                <img
                  width={"40%"}
                  style={{ margin: "auto" }}
                  src={BrainVolumeReads}
                  alt="BrainVolumeReads"
                />
              </Box> */}
              <Box className="text_container">
                <Text>
                  RSV's AI model for anatomical brain assessment processes T1
                  brain scans and segments over 80 regions of the brain in less
                  than 90 seconds. Volumes of each region are calculated along
                  with total brain volumes to detect changes in volumes across
                  timepoints.
                </Text>
              </Box>
              <Box className="image_container">
                <img src={BVR} alt="BVR" />
              </Box>
            </Box>
          </Box>
          <Box className="single_solutions_container" id="DERMA">
            <Text className="headings">Dermatology</Text>
            <Box className="Solutions_content_container">
              {/* <Box className="image_container">
                <img src={Dermatology} alt="Dermatology" />
              </Box> */}
              <Box className="text_container">
                <Text>
                  CLIB supports the upload of image files (JPG, PNG) from
                  external sources and links them to subjects in a study.
                  Uploaded images follow a similar process and undergo QC before
                  being made available for assessments. Assessments can be
                  qualitative or quantitative. RSV has also developed a
                  Smartphone App for Android as well as Apple phones, enabling
                  participating subjects to take images at home and
                  automatically upload them to CLIB.
                </Text>
              </Box>
              <Box className="image_container">
                <img src={DERMA} alt="DERMA" />
              </Box>
              <Box className="text_container">
                <Text>
                  The app supports interactive help to assist subjects during
                  image acquisition. Additionally, the app facilitates image QC
                  and analysis on the phone before upload, improving the quality
                  of acquired images. The App also supports a patient-centric
                  eCRF (e.g., QOL form, etc.) to capture responses directly from
                  patients. RSV is also exploring the use of AI to enhance the
                  patient experience.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="single_solutions_container" id="EA">
            <Text className="headings">Event Adjudication</Text>
            <Box className="Solutions_content_container">
              {/* <Box className="image_container">
                <img src={EventAdjudication} alt="EventAdjudication" />
              </Box> */}
              <Box className="text_container">
                <Text>
                  RSV offers an Event Adjudication platform that combines
                  modules in CLIB to deliver a unique and customizable solution
                  to adjudicate events and support safety committees. RadEvent
                  supports the upload of essential documents, files, and images,
                  along with additional content to create a dossier for each
                  event to be assessed.
                </Text>
              </Box>
              <Box className="image_container">
                <img src={EA} alt="EA" />
              </Box>
              <Box className="text_container">
                <Text>
                  Uploaded content is QCed, including features for redaction,
                  translation, merging, splitting, and concatenating of
                  documents as needed. Custom workflows can be set up to process
                  any of the uploaded data. Once dossiers are created, experts
                  can review the dossier and respond to eCRF questions.
                  Assessments can be compared, and further reads can be
                  performed. RadEvent also supports real-time consensus reads
                  with multiple signatures.
                </Text>
              </Box>
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
