import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../../Images/RSV-Logo.png";
import { Link } from "react-router-dom";
// import { Spin as Hamburger } from "hamburger-react";
import "./Navbar.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="ManiNavPrnt">
      <Box className="nav-parent">
        {/* Hamburger */}
        <div className="hamburger">
          <div
            id="nav-icon"
            // className={isOpenHam ? "open" : ""}
            onClick={onOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* Logo */}
        <Box className="logoContainer">
          <Link to={"/"}>
            <img src={Logo} alt="Radiant Sage" />
          </Link>
        </Box>

        <Box className="nav-content">
          <Box className="nav-input">
            <InputGroup>
              <InputLeftElement pointerEvents="none" color={"white"}>
                <Search2Icon fontSize={"sm"} color="white" mb={"6px"} />
              </InputLeftElement>
              <Input
                size={"sm"}
                type="text"
                border={"2px solid white"}
                outline={"none"}
                _focus={{ boxShadow: "none !important" }}
                _focusVisible={"none"}
                borderRadius={"15px"}
                color={"white"}
              />
            </InputGroup>
          </Box>
          <Box className="nav-ref-container">
            <Button
              size={{ base: "xs", sm: "sm" }}
              p={"0px 20px 0px 20px"}
              borderRadius={"15px"}
              colorScheme="#131049"
              bg="#131049"
            >
              RFP
            </Button>
          </Box>
          <Box className="nav-demo-container">
            <Button
              size={{ base: "xs", sm: "sm" }}
              p={"0px 15px 0px 15px"}
              borderRadius={"15px"}
              colorScheme="#131049"
              bg="#131049"
            >
              DEMO
            </Button>
          </Box>
        </Box>
        {/* SmallScreen drop */}
      </Box>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"#131049"}>
          <DrawerCloseButton fontSize={"20px"} color={"white"} />
          <DrawerBody>
            <Accordion allowMultiple>
              <Stack spacing="25px" className="linksContainer">
                {/*  */}
                <AccordionItem border={"none"}>
                  <Box>
                    <AccordionButton>
                      <Box color={"white"} className={"mainLinks"}>
                        Solutions
                        {/* <a href=""></a> */}
                      </Box>
                      <AccordionIcon
                        color={"white"}
                        fontSize={25}
                        ml={"20px"}
                      />
                    </AccordionButton>
                    <AccordionPanel pb={4} className="dropdown">
                      <Box>
                        <p>Services</p>
                      </Box>
                      <Box>
                        <p>Case Studies</p>
                      </Box>
                      <Box>
                        <p>Use Cases</p>
                      </Box>
                    </AccordionPanel>
                  </Box>
                </AccordionItem>
                {/*  */}
                <AccordionItem border={"none"}>
                  <AccordionButton>
                    <Box color={"white"} className={"mainLinks"}>
                      Products
                    </Box>
                    {/* <a href=""></a> */}
                    <AccordionIcon color={"white"} fontSize={25} ml={"20px"} />
                  </AccordionButton>
                  <AccordionPanel pb={4} className="dropdown">
                    <Box>
                      <p>RadClinicaTM</p>
                    </Box>
                    <Box>
                      <p>RadVista Viewer</p>
                    </Box>
                    <Box>
                      <p>Product Development Goals</p>
                    </Box>
                    <Box>
                      <p>Technology & Process Innovation</p>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                {/*  */}
                <AccordionItem border={"none"}>
                  <AccordionButton>
                    <Box color={"white"} className={"mainLinks"}>
                      Resources
                    </Box>
                    {/* <a href=""></a> */}
                    <AccordionIcon color={"white"} fontSize={25} ml={"10px"} />
                  </AccordionButton>
                  <AccordionPanel pb={4} className="dropdown">
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
                  </AccordionPanel>
                </AccordionItem>
                {/*  */}
                <AccordionItem border={"none"}>
                  <AccordionButton>
                    <Box color={"white"} className={"mainLinks"}>
                      <Link to={"/AboutUs"}>About us</Link>
                    </Box>
                    {/* <a href=""></a> */}
                    <AccordionIcon color={"white"} fontSize={25} ml={"20px"} />
                  </AccordionButton>
                  <AccordionPanel pb={4} className="dropdown">
                    <Box>
                      <p>Our Story</p>
                    </Box>
                    <Box>
                      <p>Industry</p>
                    </Box>
                    <Box>
                      <p>Team</p>
                    </Box>
                    <Box>
                      <Link to={"/ContactUs"}>
                        <p>Contact Us</p>
                      </Link>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                {/*  */}
                <AccordionItem border={"none"}>
                  <AccordionButton>
                    <Box color={"white"} className={"mainLinks"}>
                      <Link to={"/Career"}>Career</Link>
                    </Box>
                    {/* <a href=""></a> */}
                    {/* <AccordionIcon color={"white"} /> */}
                  </AccordionButton>
                </AccordionItem>
                {/*  */}
              </Stack>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
