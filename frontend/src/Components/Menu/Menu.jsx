import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../../Images/RSV-Logo.png";
import React from "react";
import { useRef } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  return (
    <div>
      <Box className="MenuContainer" onClick={onOpen}>
        <Box className="Menubox">
          <button>
            <span className="menu-button-icon">
              <span></span>
              <span></span>
            </span>
          </button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            initialFocusRef={firstField}
            onClose={onClose}
            size={{ sm: "sm", md: "md", lg: "lg", xl: "xl", "2xl": "full" }}
          >
            <DrawerOverlay />
            <DrawerContent bg={"#131049"}>
              <DrawerCloseButton fontSize={"20px"} color={"white"} />
              <DrawerHeader>
                <Box className="MenuBarLogo">
                  <Link to={"/"} target="_top">
                    <img src={Logo} alt="Logo" />
                  </Link>
                </Box>
              </DrawerHeader>

              <DrawerBody mt={"50px"} className="MenuParentContainer">
                <Stack spacing="45px" className="MenuLinkContainer">
                  <Box className="leftLinks">
                    <a href="">Solutions</a>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                        <Box>
                          <p>Services</p>
                          <ul>
                            <li>
                              <a href="">Core Lab Services</a>
                            </li>
                            <li>
                              <a href="">Technical Services</a>
                            </li>
                            <li>
                              <a href="">Deployment Services</a>
                            </li>
                          </ul>
                        </Box>
                        <Box>
                          <p>
                            <Link to={"/CaseStudy"} target="_top">
                              Case Studies
                            </Link>
                          </p>

                          <ul>
                            <li>
                              {/* <a href="">DW Mining</a> */}
                              <Link
                                to={"/CaseStudy/AI-In-ClinicalTrial"}
                                target="_top"
                              >
                                AI In Clinical Trial
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/CaseStudy/AI-In-Dermatology"}
                                target="_top"
                              >
                                AI In Dermatology
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/CaseStudy/Business-Intelligence"}
                                target="_top"
                              >
                                Business Intelligence
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/CaseStudy/Oncology-Workflow"}
                                target="_top"
                              >
                                Oncology Workflow
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/CaseStudy/Query-Management"}
                                target="_top"
                              >
                                Query Management
                              </Link>
                            </li>

                            <li>
                              <Link
                                to={"/CaseStudy/Electronic-Data-Capture"}
                                target="_top"
                              >
                                Electronic Data Capture
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/CaseStudy/Hand-Scintigraphy"}
                                target="_top"
                              >
                                Hand Scintigraphy
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/CaseStudy/Paired-Reads"}
                                target="_top"
                              >
                                Paired Reads
                              </Link>
                            </li>
                          </ul>
                        </Box>
                        {/* <Box>
                          <p>Use Cases</p>
                        </Box> */}
                      </Box>
                    </Box>
                  </Box>
                  {/* Products */}
                  <Box className="leftLinks">
                    <Link to={"/Products"} target="_top">
                      Products
                    </Link>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                        <Box>
                          <p>Corelab-in-a-Box</p>
                          <ul className="productsLinksCorelabInBox">
                            <li>
                              <a href="">RadGate</a>
                            </li>
                            <li>
                              <a href="">RadVault</a>
                            </li>
                            <li>
                              <a href="">RadVista</a>
                            </li>
                            <li>
                              <a href="">RadFlow</a>
                            </li>
                            <li>
                              <a href="">RadClinica</a>
                            </li>
                            <li>
                              <a href="">RadInSight</a>
                            </li>
                            <li>
                              <a href="">RadEvent</a>
                            </li>
                            <li>
                              <a href="">RadInAI & Toolkit</a>
                            </li>
                            <li>
                              <a href="">RadDCT</a>
                            </li>
                            <li>
                              <a href="">RadApp</a>
                            </li>
                            <li>
                              <a href="">RadChain</a>
                            </li>
                            
                          </ul>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Resources */}
                  <Box className="leftLinks">
                    <a href="#">Resources</a>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                        <Box>
                          <p>Blogs</p>
                        </Box>
                        <Box>
                          <p>Podcast</p>
                        </Box>
                        <Box>
                          <p>Videos</p>
                        </Box>
                        <Box>
                          <p>News</p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* About us */}
                  <Box className="leftLinks">
                    <Link to={"/AboutUs"} target="_top">
                      About us
                    </Link>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                        <Box>
                          <p>Our Story</p>
                        </Box>
                        <Box>
                          <p>Industry</p>
                          <ul>
                            <li>
                              <a href="">Dermatology</a>
                            </li>
                            <li>
                              <a href="">Onocology</a>
                            </li>
                            <li>
                              <a href="">CT</a>
                            </li>
                            <li>
                              <a href="">BI</a>
                            </li>
                          </ul>
                        </Box>
                        <Box>
                          <p>Team</p>
                          <ul>
                            <li>
                              <a href="">Join Us</a>
                            </li>
                          </ul>
                        </Box>
                        <Box>
                          <p>
                            <Link to={"/ContactUs"} target="_top">
                              Contact Us
                            </Link>
                          </p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Career */}
                  <Box className="leftLinks">
                    <Link to={"/Career"} target="_top">
                      Career
                    </Link>
                  </Box>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default Menu;
