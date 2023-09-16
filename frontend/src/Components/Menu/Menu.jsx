import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
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
            size={"xl"}
          >
            <DrawerOverlay />
            <DrawerContent bg={"#131049"}>
              <DrawerCloseButton fontSize={"20px"} color={"white"} />
              <DrawerHeader>
                <Box className="MenuBarLogo">
                  <a href="">
                    <img src={Logo} alt="Logo" />
                  </a>
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
                            <Link to={"/CaseStudy"}>Case Studies</Link>
                          </p>

                          <ul>
                            <li>
                              {/* <a href="">DW Mining</a> */}
                              <Link to={"/CaseStudy/AI-In-ClinicalTrial"}>
                                AI In Clincal Trial
                              </Link>
                            </li>
                            <li>
                              <Link to={"/CaseStudy/AI-In-Dermatology"}>
                                AI In Dermatology
                              </Link>
                              {/* <a href="">Site vs Central</a> */}
                            </li>
                            <li>
                              <a href="#">Oncology Workflow</a>
                            </li>
                            <li>
                              <a href="#">Query Management</a>
                            </li>
                            <li>
                              <a href="#">Electronic Data Capture</a>
                            </li>
                            <li>
                              <a href="#">Hand Scintigraphy</a>
                            </li>
                          </ul>
                        </Box>
                        <Box>
                          <p>Use Cases</p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/*  */}
                  <Box className="leftLinks">
                    <a href="">Resources</a>
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
                  <Box className="leftLinks">
                    <Link to={"/AboutUs"}>About us</Link>
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
                  <Box className="leftLinks">
                    <Link to={"/Career"}>Career</Link>
                  </Box>
                  <Box className="leftLinks">
                    <a href="">Products</a>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                        <Box>
                          <p>Products</p>
                          <ul>
                            <li>
                              <a href="">RadClinicaTM</a>
                            </li>
                            <li>
                              <a href="">RadVista Viewer</a>
                            </li>
                            <li>
                              <a href="">Product Development Goals</a>
                            </li>
                            <li>
                              <a href="">Technology & Process Innovation</a>
                            </li>
                          </ul>
                        </Box>
                      </Box>
                    </Box>
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
