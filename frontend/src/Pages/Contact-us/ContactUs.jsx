import React from "react";
import "./ContactUs.css";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
import { Box, Button, Text } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <div>
      <Menu />
      <Box className="bodyContainerContactUs">
        <Box className="BannerContainerContactUs">
          <Navbar />
          {/* Banner area */}
        </Box>
        <Box className="ContactHeading">
          <Text className="headings">Contact Us</Text>
        </Box>
        <Box className="SubContent">
          <Text>
            Radiant Sage's objective is to Provide Clinical Image Management
            Technology Solution that can get a Trial Up and Running within weeks
            under Sponsor
          </Text>
        </Box>
        {/*Address */}
        <Box className="ContactAddress">
          <Box className="Contact">
            <Box>
              <Text fontWeight={'bold'} >United States</Text>
              <Text>+1 855-723-7243</Text>
            </Box>
            <Box>
              <Text fontWeight={'bold'}>Email</Text>
              <Text>info@radiantsage.com</Text>
            </Box>
          </Box>
          <Box className="ContactImg">
            <img
              src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </Box>
        </Box>
        {/* Location */}
        <Box className="Location">
          <Box>
            <img src="" alt="" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
