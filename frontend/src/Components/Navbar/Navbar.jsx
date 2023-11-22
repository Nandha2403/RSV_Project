import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Logo from "../../Images/RSV-Logo.png";
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
  FormLabel,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const form = useRef();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const DemoBtnModal = useDisclosure();
  const RFPBtnModal = useDisclosure();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e6xdugp",
        "template_ma4xe3y",
        form.current,
        "lWSh-NSL2P04TzOwk"
      )
      .then(
        (res) => {
          console.log(res.text);
          console.log("message sent");
          e.target.reset();
          toast({
            title: "Submited Successfully",
            position: "top-right",
            isClosable: true,
            status: "success",
            duration: "2000",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box className="ManiNavPrnt">
      <Box className="nav-parent">
        {/* Hamburger */}
        <div className="hamburger">
          <div id="nav-icon" onClick={onOpen}>
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
              onClick={RFPBtnModal.onOpen}
            >
              RFP
            </Button>
            <Modal
              isOpen={RFPBtnModal.isOpen}
              isCentered
              onClose={RFPBtnModal.onClose}
              size={{ base: "xs", sm: "sm", md: "md", lg: "xl", xl: "xl" }}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Text fontSize={"24px"} color={"blue"}>
                    Request for proposal
                  </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  {/* Form */}

                  <form ref={form} onSubmit={sendEmail}>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Name" name="user_name" />

                    <FormLabel mt={2}>Phone</FormLabel>
                    <Input
                      type="number"
                      placeholder="Phone"
                      name="user_phone"
                    />
                    <FormLabel mt={2}>Email</FormLabel>
                    <Input type="email" placeholder="Email" name="user_email" />
                    <FormLabel mt={2}>Company</FormLabel>
                    <Input placeholder="Company" name="user_company" />
                    <FormLabel mt={2}>Reason for Inquiry</FormLabel>
                    <Input
                      placeholder="Reason for Inquiry"
                      name="user_reason"
                    />
                    <FormLabel mt={2}>
                      Specific Requirements (if any):
                    </FormLabel>
                    <Textarea
                      placeholder="Specific Requirements"
                      name="user_specific_reason"
                    />
                    <Input
                      type="submit"
                      mt={3}
                      value={"Send"}
                      cursor={"pointer"}
                      backgroundColor={"#131049"}
                      color={"white"}
                    />
                  </form>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>

          {/* Demo Button  */}
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
                  {/* Form */}

                  <form ref={form} onSubmit={sendEmail}>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Name" name="user_name" />

                    <FormLabel mt={2}>Phone</FormLabel>
                    <Input
                      type="number"
                      placeholder="Phone"
                      name="user_phone"
                    />
                    <FormLabel mt={2}>Email</FormLabel>
                    <Input type="email" placeholder="Email" name="user_email" />
                    <FormLabel mt={2}>Company</FormLabel>
                    <Input placeholder="Company" name="user_company" />
                    <FormLabel mt={2}>Reason for Inquiry</FormLabel>
                    <Input
                      placeholder="Reason for Inquiry"
                      name="user_reason"
                    />
                    <FormLabel mt={2}>
                      Specific Requirements (if any):
                    </FormLabel>
                    <Textarea
                      placeholder="Specific Requirements"
                      name="user_specific_reason"
                    />
                    <Input
                      type="submit"
                      mt={3}
                      value={"Send"}
                      cursor={"pointer"}
                      backgroundColor={"#131049"}
                      color={"white"}
                    />
                  </form>
                </ModalBody>
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
                        <Link to={"/Solutions"} target="_top">
                          Solutions
                        </Link>
                      </Box>
                      <AccordionIcon
                        color={"white"}
                        fontSize={25}
                        ml={"20px"}
                      />
                    </AccordionButton>
                    <AccordionPanel pb={4} className="dropdown">
                      <Box>
                        <Link to={"/Services"} target="_top">
                          Services
                        </Link>
                      </Box>
                      <Box>
                        <Link to={"/CaseStudy"} target="_top">
                          Case Studies
                        </Link>
                      </Box>
                    </AccordionPanel>
                  </Box>
                </AccordionItem>
                {/*  */}
                <AccordionItem border={"none"}>
                  <AccordionButton>
                    <Box color={"white"} className={"mainLinks"}>
                      <Link to={"/Products"} target="_top">
                        Products
                      </Link>
                    </Box>
                    {/* <a href=""></a> */}
                    <AccordionIcon color={"white"} fontSize={25} ml={"20px"} />
                  </AccordionButton>
                  <AccordionPanel pb={4} className="dropdown">
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadGate
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadVault
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadVista
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadFlow
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadClinica
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadInsight
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadEvent
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadAI
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadDCT
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadApp
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/Products"} target="_top">
                        RadChain
                      </Link>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                {/*  */}
                <AccordionItem border={"none"}>
                  <AccordionButton>
                    <Box color={"white"} className={"mainLinks"}>
                      Resources
                    </Box>
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
                      <Link to={"/AboutUs"} target="_top">
                        About us
                      </Link>
                    </Box>
                    {/* <a href=""></a> */}
                    <AccordionIcon color={"white"} fontSize={25} ml={"20px"} />
                  </AccordionButton>
                  <AccordionPanel pb={4} className="dropdown">
                    <Box>
                      <p>Our Story</p>
                    </Box>
                    {/* <Box>
                      <p>Industry</p>
                    </Box>
                    <Box>
                      <p>Team</p>
                    </Box> */}
                    <Box>
                      <Link to={"/ContactUs"} target="_top">
                        Contact Us
                      </Link>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                {/*  */}
                <AccordionItem border={"none"}>
                  <AccordionButton>
                    <Box color={"white"} className={"mainLinks"}>
                      <Link to={"/Career"} target="_top">
                        Career
                      </Link>
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
