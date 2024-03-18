import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const ModalComponent = ({ isOpen, onClose }) => {
  const form = useRef();
  const toast = useToast();

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
    <Modal
      isOpen={isOpen}
      isCentered
      onClose={onClose}
      size={{ base: "xs", sm: "sm", md: "md", lg: "xl", xl: "xl" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={"24px"} color={"blue"}>
            Contact a Solutions Specialist
          </Text>
          <Text fontSize={"16px"}>
            Reach out today and an expert will be in touch to learn more about
            your specific needs.
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {/* Form */}
          <form ref={form} onSubmit={sendEmail}>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Name" name="user_name" />

            <FormLabel mt={2}>Phone</FormLabel>
            <Input type="number" placeholder="Phone" name="user_phone" />
            <FormLabel mt={2}>Email</FormLabel>
            <Input type="email" placeholder="Email" name="user_email" />
            <FormLabel mt={2}>Company</FormLabel>
            <Input placeholder="Company" name="user_company" />
            <FormLabel mt={2}>Reason for Inquiry</FormLabel>
            <Input placeholder="Reason for Inquiry" name="user_reason" />
            <FormLabel mt={2}>Specific Requirements (if any):</FormLabel>
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
  );
};

export default ModalComponent;

// <Button
//   size={{ base: "xs", sm: "sm" }}
//   p={"0px 15px 0px 15px"}
//   borderRadius={"15px"}
//   colorScheme="#131049"
//   bg="#131049"
//   onClick={openModal}
// >
//   {btnTxt}
// </Button>
