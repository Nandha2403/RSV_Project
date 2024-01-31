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
            size={{ sm: "sm", md: "md", lg: "xl", xl: "xl", "2xl": "full" }}
          >
            <DrawerOverlay />
            <DrawerContent bg={"#131049"}>
              <DrawerCloseButton fontSize={"20px"} color={"white"} />
              <DrawerHeader>
                <Box className="MenuBarLogo">
                  <Link to={"/"}>
                    <img src={Logo} alt="Logo" />
                  </Link>
                </Box>
              </DrawerHeader>

              <DrawerBody mt={"50px"} className="MenuParentContainer">
                <Stack spacing="45px" className="MenuLinkContainer">
                  <Box className="leftLinks">
                    <Link to={"/Solutions"}>Solutions</Link>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                        <Box>
                          <p>
                            <Link to={"/Services"}>Services</Link>
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
                            <Link to={"/CaseStudy"}>Case Studies</Link>
                          </p>

                          <ul>
                            <li>
                              {/* <a href="">DW Mining</a> */}
                              <Link to={"/CaseStudy/AI-In-ClinicalTrial"}>
                                AI In Clinical Trial
                              </Link>
                            </li>
                            <li>
                              <Link to={"/CaseStudy/AI-In-Dermatology"}>
                                AI In Dermatology
                              </Link>
                            </li>
                            <li>
                              <Link to={"/CaseStudy/Business-Intelligence"}>
                                Business Intelligence
                              </Link>
                            </li>
                            <li>
                              <Link to={"/CaseStudy/Oncology-Workflow"}>
                                Oncology Workflow
                              </Link>
                            </li>
                            <li>
                              <Link to={"/CaseStudy/Query-Management"}>
                                Query Management
                              </Link>
                            </li>

                            <li>
                              <Link to={"/CaseStudy/Electronic-Data-Capture"}>
                                Electronic Data Capture
                              </Link>
                            </li>
                            <li>
                              <Link to={"/CaseStudy/Hand-Scintigraphy"}>
                                Hand Scintigraphy
                              </Link>
                            </li>
                            <li>
                              <Link to={"/CaseStudy/Paired-Reads"}>
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
                    <Link to={"/Products"}>Products</Link>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                        <Box>
                          <p>
                            <Link to={"/Products"}>Corelab-in-a-Box</Link>
                          </p>
                          <ul className="productsLinksCorelabInBox">
                            <li>
                              <a href="/ProductsRadGate">RadGate</a>
                            </li>
                            <li>
                              <Link to={"/Products"}>RadVault</Link>
                            </li>
                            <li>
                              <Link to={"/Products"}>RadVista</Link>
                            </li>
                            <li>
                              <Link to={"/Products"}>RadFlow</Link>
                            </li>
                            <li>
                              <Link to={"/Products"}>RadClinica</Link>
                            </li>
                            <li>
                              <Link to={"/Products"}>RadInSight</Link>
                            </li>
                            <li>
                              <Link to={"/Products"}>RadEvent</Link>
                            </li>
                            <li>
                              <Link to={"/Products"}>RadAI</Link>
                            </li>
                            <li>
                              <Link to={"/Products"}>RadDCT</Link>
                            </li>
                            <li>
                              <Link to={"/Products"}>RadApp</Link>
                            </li>
                            <li>
                              <Link to={"/Products"}>RadChain</Link>
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
                    <Link to={"/AboutUs"}>About us</Link>
                    <Box className="SubCategory">
                      <Box className="LinksRightContainer">
                     
                        <Box>
                          <p>
                            <Link to={"/ContactUs"}>Contact Us</Link>
                          </p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Career */}
                  <Box className="leftLinks">
                    <Link to={"/Career"}>Career</Link>
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
