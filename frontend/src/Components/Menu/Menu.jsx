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
                          <p>Case Studies</p>
                          <ul>
                            <li>
                              <a href="">DW Mining</a>
                            </li>
                            <li>
                              <a href="">Site vs Central</a>
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
                    <a href="">About us</a>
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
                          <p>Contact Us</p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="leftLinks">
                    <a href="">Career</a>
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
                {/* Dropdown */}
              </DrawerBody>

              <DrawerFooter>
                {/* <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Submit</Button> */}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default Menu;
