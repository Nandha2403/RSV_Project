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
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Logo from "../../Images/RSV-Logo.png";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import "./Navbar.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenHam, setOpenHam] = useState(false);
  const firstField = useRef();

  // console.log(isOpenHam);
  return (
    <Box>
      <Box className="nav-parent">
        {/* MenuIcon */}

        <Box className="MenubarIcon" onClick={onOpen}>
          <Hamburger
            color="white"
            size={24}
            rounded
            toggled={isOpenHam}
            toggle={setOpenHam}
          />
        </Box>
        {/* Logo */}
        <Box className="logoContainer">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </Box>
        <Box className="nav-content">
          <Box className="nav-input">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
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
              />
            </InputGroup>
          </Box>
          <Box className="nav-ref-container">
            <Button
              size={"sm"}
              p={"0px 20px 0px 20px"}
              borderRadius={"15px"}
              colorScheme="#131049"
              bg="#131049"
            >
              REF
            </Button>
          </Box>
          <Box className="nav-demo-container">
            <Button
              size={{base:"xs",sm:'sm',}}
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
      <Box className={isOpenHam ? "smallDrawer" : "smallDrawerNa"}>
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
                  <AccordionIcon color={"white"} fontSize={25} ml={"20px"} />
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
                  About us
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
                  <p>Contact Us</p>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            {/*  */}
            <AccordionItem border={"none"}>
              <AccordionButton>
                <Box color={"white"} className={"mainLinks"}>
                  Career
                </Box>
                {/* <a href=""></a> */}
                {/* <AccordionIcon color={"white"} /> */}
              </AccordionButton>
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
          </Stack>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Navbar;
