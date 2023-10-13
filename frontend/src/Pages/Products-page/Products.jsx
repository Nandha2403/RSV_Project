import React from "react";
import "./Products.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../Components/Menu/Menu";
import Navbar from "../../Components/Navbar/Navbar";
import IntroImg from "../../Images/ContactUsIntro.png";
import Footer from "../../Components/Footer/Footer";

const Products = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerProducts">
        <Box className="BannerContainerProducts">
          <Navbar />
          <Box ml={"2rem"} pt={"14rem"} color={"white"}>
            <Text fontSize={{ base: "4xl", sm: "5xl" }} fontWeight={1000}>
              CORELAB-IN-A-BOX <sup>TM</sup>
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              fontWeight={"bold"}
            >
              Corelab-in-a-Box<sup>TM</sup> is a unique purpose built clinical
              trial <br /> imaging management software package.
            </Text>
          </Box>
        </Box>
        <Box mt={"3rem"}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
