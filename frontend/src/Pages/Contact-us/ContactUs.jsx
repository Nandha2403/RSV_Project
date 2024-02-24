import React from "react";
import "./ContactUs.css";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
import { Box, Text } from "@chakra-ui/react";
import ContactUsIntro from "../../Images/ContactUsIntro.png";
import RSVLocation from "../../Images/RSVLocation.png";
// import MapFullImg from "../../Images/MapFullImg.png";
import Footer from "../../Components/Footer/Footer";
import { FaLocationDot } from "react-icons/fa6";

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
            Radiant Sage's objective is to provide a clinical image management
            technology solution that can get a trial up and running within weeks
            under a sponsor.
          </Text>
        </Box>
        {/*Address */}

        {/* <Box className="ContactAddress">
          <Box className="Contact">
            <Box>
              <Text fontWeight={"bold"}>United States</Text>
              <Text>+1 855-723-7243</Text>
            </Box>
            <Box>
              <Text fontWeight={"bold"}>Email</Text>
              <Text>info@radiantsage.com</Text>
            </Box>
          </Box>
           <Box className="ContactImg">
            <img src={ContactUsIntro} alt="ContactUs" />
          </Box> 
        </Box> */}

        <div className="parent_continer_contact_address">
          <div className="address_cont">
            <h1>Get in Touch with us</h1>

            <div className="address_details_cont">
              <h1>US Office</h1>
              <div className="address_details_icon_txt_cont">
                <FaLocationDot color="black" b />
                <p>464 Common St 133 Belmont, MA, 02478-2704 United States</p>
              </div>
            </div>
          </div>

          <div className="form_cont">
            <Box className="ContactUsForm">
              <Box className="form">
                <p className="formHeading">Contact Us</p>
                <Box className="TopInputCont">
                  <input className="leftInput" placeholder="Name" />
                  <input className="rightInput" placeholder="Phone" />
                </Box>
                <Box className="TopInputCont">
                  <input className="leftInput" placeholder="Email" />
                  <input className="rightInput" placeholder="Company" />
                </Box>
                <Box className="TopInputCont">
                  <input
                    className="FullInput"
                    placeholder="Reason for Inquiry"
                  />
                </Box>
                <Box className="TopInputCont">
                  <textarea
                    className="FullInputBottom"
                    placeholder="Specific Requirements (if any) :"
                  />
                </Box>
              </Box>
              <Box className="SubmitBtn">
                <button>Submit Here !</button>
              </Box>
            </Box>
          </div>
        </div>

        {/* Location */}
        <Box className="Location">
          {/* <Box className="MapImgContainer"> */}
          <div className="ImgCont">
            <a
              href="https://www.google.com/maps/place/464+Common+St+%23133,+Belmont,+MA+02478,+USA/@42.381092,-71.1752208,19z/data=!3m1!4b1!4m5!3m4!1s0x89e377f1f60b2781:0xbfda4dae7f7f0b3d!8m2!3d42.381091!4d-71.1745771?entry=ttu"
              target="_blanck"
            >
              <img src={RSVLocation} alt="Location" />
              {/* <img src={MapFullImg} alt="Map" /> */}
            </a>
          </div>
          {/* <div className="ImgArrowLocation"></div> */}
          {/* </Box> */}
        </Box>
        {/* Contact us from */}

        {/* SubmitBtn */}

        <Box mt={"3rem"}>
          <Footer />
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
