import React, { useRef, useState } from "react";
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
import SearchInput from "../SearchComp/SearchInput";
import SearchResultsList from "../SearchComp/SearchResultsList";
import ModalComponent from "../ModalComp/ModalButton";

// import ModalButton from "../ModalComp/ModalButton";

const Navbar = () => {
  const form = useRef();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const DemoBtnModal = useDisclosure();
  const RFPBtnModal = useDisclosure();
  const [results, setResults] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <SearchInput setResults={setResults} />
            <SearchResultsList results={results} />
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
                      maxLength={500}
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
              onClick={openModal}
            >
              DEMO
            </Button>
            <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
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
                        <Link to={"/Solutions"}>Solutions</Link>
                      </Box>
                      <AccordionIcon
                        color={"white"}
                        fontSize={25}
                        ml={"20px"}
                      />
                    </AccordionButton>
                    <AccordionPanel pb={4} className="dropdown">
                      <Box>
                        <Link to={"/Services"}>Services</Link>
                      </Box>
                      <Box>
                        <Link to={"/CaseStudy"}>Case Studies</Link>
                      </Box>
                    </AccordionPanel>
                  </Box>
                </AccordionItem>
                {/*  */}
                <AccordionItem border={"none"}>
                  <AccordionButton>
                    <Box color={"white"} className={"mainLinks"}>
                      <Link to={"/Products"}>Products</Link>
                    </Box>
                    {/* <a href=""></a> */}
                    <AccordionIcon color={"white"} fontSize={25} ml={"20px"} />
                  </AccordionButton>
                  <AccordionPanel pb={4} className="dropdown">
                    <Box>
                      <Link to={"/Products"}>Corelab-in-a-Box</Link>
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
                    {/* <Box>
                      <p>Our Story</p>
                    </Box> */}
                    {/* <Box>
                      <p>Industry</p>
                    </Box>
                    <Box>
                      <p>Team</p>
                    </Box> */}
                    <Box>
                      <Link to={"/ContactUs"}>Contact Us</Link>
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
