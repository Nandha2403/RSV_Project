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
import { Link as RouterLink } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";

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
            size={{ sm: "sm", md: "md", lg: "xl", xl: "xl", "2xl": "full" }}
          >
            <DrawerOverlay />
            <DrawerContent bg={"#131049"}>
              <DrawerCloseButton fontSize={"20px"} color={"white"} />
              <DrawerHeader>
                <Box className="MenuBarLogo">
                  <RouterLink to={"/"}>
                    <img src={Logo} alt="Logo" />
                  </RouterLink>
                </Box>
              </DrawerHeader>

              <DrawerBody mt={"50px"} className="MenuParentContainer">
                <Stack spacing="45px" className="MenuLinkContainer">
                  <Box className="leftLinks">
                    <RouterLink to={"/Solutions"}>Solutions</RouterLink>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                        <Box>
                          <p>
                            <RouterLink to={"/Services"}>Services</RouterLink>
                          </p>
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
                            <RouterLink to={"/CaseStudy"}>
                              Case Studies
                            </RouterLink>
                          </p>

                          <ul>
                            <li>
                              {/* <a href="">DW Mining</a> */}
                              <RouterLink to={"/CaseStudy/AI-In-ClinicalTrial"}>
                                AI In Clinical Trial
                              </RouterLink>
                            </li>
                            <li>
                              <RouterLink to={"/CaseStudy/AI-In-Dermatology"}>
                                AI In Dermatology
                              </RouterLink>
                            </li>
                            <li>
                              <RouterLink
                                to={"/CaseStudy/Business-Intelligence"}
                              >
                                Business Intelligence
                              </RouterLink>
                            </li>
                            <li>
                              <RouterLink to={"/CaseStudy/Oncology-Workflow"}>
                                Oncology Workflow
                              </RouterLink>
                            </li>
                            <li>
                              <RouterLink to={"/CaseStudy/Query-Management"}>
                                Query Management
                              </RouterLink>
                            </li>

                            <li>
                              <RouterLink
                                to={"/CaseStudy/Electronic-Data-Capture"}
                              >
                                Electronic Data Capture
                              </RouterLink>
                            </li>
                            <li>
                              <RouterLink to={"/CaseStudy/Hand-Scintigraphy"}>
                                Hand Scintigraphy
                              </RouterLink>
                            </li>
                            <li>
                              <RouterLink to={"/CaseStudy/Paired-Reads"}>
                                Paired Reads
                              </RouterLink>
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
                    <RouterLink to={"/Products"}>Products</RouterLink>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                        <Box>
                          <p>
                            <RouterLink to={"/Products"}>
                              Corelab-in-a-Box
                            </RouterLink>
                          </p>
                          <ul className="productsLinksCorelabInBox">
                            <li>
                              <a href="#RadGate">RadGate</a>
                            </li>
                            <li>
                              <a href="#RadVault">RadVault</a>
                            </li>
                            <li>
                              <a href="#RadVista">RadVista</a>
                            </li>
                            <li>
                              <a href="#RadFlow">RadFlow</a>
                            </li>
                            <li>
                              <a href="#RadClinica">RadClinica</a>
                            </li>
                            <li>
                              <a href="#RadInSight">RadInSight</a>
                            </li>
                            <li>
                              <a href="#RadEvent">RadEvent</a>
                            </li>
                            <li>
                              <a href="#RadAI">RadAI</a>
                            </li>
                            <li>
                              <a href="#RadDCT">RadDCT</a>
                            </li>
                            <li>
                              <a href="#RadApp">RadApp</a>
                            </li>
                            <li>
                              <a href="#RadChain">RadChain</a>
                            </li>
                          </ul>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Resources */}
                  {/* <Box className="leftLinks">
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
                  </Box> */}
                  {/* About us */}
                  <Box className="leftLinks">
                    <RouterLink to={"/AboutUs"}>About us</RouterLink>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                        <Box>
                          <p>
                            <RouterLink to={"/ContactUs"}>
                              Contact Us
                            </RouterLink>
                          </p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Career */}
                  <Box className="leftLinks">
                    <RouterLink to={"/Career"}>Career</RouterLink>
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
