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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../../Images/RSV-Logo.png";
import { Link } from "react-router-dom";
// import { Spin as Hamburger } from "hamburger-react";
import "./Navbar.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const DemoBtnModal = useDisclosure();
  const [demoData, setDemodata] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    reason: "",
    specific: "",
  });

  const { name, phone, email, company, reason, specific } = demoData;


  const handelDemoForm = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    // console.log(name, value);
    setDemodata({ ...demoData, [name]: value });
  };

  const handleSaveDemoData = () => {
  console.log(demoData);

    setDemodata({
      name: "",
      phone: "",
      email: "",
      company: "",
      reason: "",
      specific: "",
    });
  };
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
              onClick={DemoBtnModal.onOpen}
            >
              DEMO
            </Button>

            <Modal
              isOpen={DemoBtnModal.isOpen}
              isCentered
              onClose={DemoBtnModal.onClose}
              size={{ base: "xs", sm: "sm", md: "md", lg: "xl", xl: "xl" }}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Text fontSize={"24px"} color={"blue"}>
                    Contact a Solutions Specialist
                  </Text>
                  <Text fontSize={"16px"}>
                    Reach out today and an expert will be in touch to learn more
                    about your specific needs
                  </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      value={name}
                      placeholder="Name"
                      name="name"
                      onChange={handelDemoForm}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      value={phone}
                      placeholder="Phone"
                      name="phone"
                      onChange={handelDemoForm}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      value={email}
                      placeholder="Email"
                      name="email"
                      onChange={handelDemoForm}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Company</FormLabel>
                    <Input
                      value={company}
                      placeholder="Company"
                      name="company"
                      onChange={handelDemoForm}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Reason for Inquiry</FormLabel>
                    <Input
                      value={reason}
                      placeholder="Reason for Inquiry"
                      name="reason"
                      onChange={handelDemoForm}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Specific Requirements (if any):</FormLabel>
                    <Textarea
                      value={specific}
                      placeholder="Specific Requirements"
                      name="specific"
                      onChange={handelDemoForm}
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={handleSaveDemoData}
                  >
                    Save
                  </Button>
                  <Button onClick={DemoBtnModal.onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
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
