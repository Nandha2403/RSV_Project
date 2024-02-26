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
        {/* <Box className="ContactHeading">
          <Text className="headings">Contact Us</Text>
        </Box> */}
        {/* <Box className="SubContent">
          <Text>
            Radiant Sage's objective is to provide a clinical image management
            technology solution that can get a trial up and running within weeks
            under a sponsor.
          </Text>
        </Box> */}
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

        {/* <div className="parent_continer_contact_address">
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
        </div> */}

        {/* Location */}
        {/* <Box className="Location">
          <div className="ImgCont">
            <a
              href="https://www.google.com/maps/place/464+Common+St+%23133,+Belmont,+MA+02478,+USA/@42.381092,-71.1752208,19z/data=!3m1!4b1!4m5!3m4!1s0x89e377f1f60b2781:0xbfda4dae7f7f0b3d!8m2!3d42.381091!4d-71.1745771?entry=ttu"
              target="_blanck"
            >
              <img src={RSVLocation} alt="Location" />
            </a>
          </div>
        </Box> */}

        <div className="contactUsContainer">
          <h1 className="headings">Connect With Us</h1>
          <p>
            We would love to respond to your quires and help you succeed. Feel
            free to get in touch with us.
          </p>

          <div className="contactBox">
            <div className="contactLeft">
              <h1>Send your request</h1>

              <form>
                <div className="inputRow">
                  <div className="inputGroup">
                    <label>Name</label>
                    <input type="text" placeholder="abc" />
                  </div>
                  <div className="inputGroup">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 7890" />
                  </div>
                </div>

                <div className="inputRow">
                  <div className="inputGroup">
                    <label>Email</label>
                    <input type="email" placeholder="abc@gmail.com" />
                  </div>
                  <div className="inputGroup">
                    <label>Company</label>
                    <input type="text" placeholder="abc" />
                  </div>
                </div>
                <div className="inputRow">
                  <div className="inputGroup">
                    <label>Reason for Inquiry</label>
                    <input type="text" placeholder="abcd" />
                  </div>
                </div>

                <label>Message</label>
                <textarea rows="5" placeholder="Your Message"></textarea>

                <button type="submit">SEND</button>
              </form>
            </div>
            <div className="contactRight">
              <h1>Reach us</h1>

              <table>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>info@radiantsage.com</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>+1 855 723 7243</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>
                      <a href="https://maps.app.goo.gl/dgcidGJBot6c2A398" target="_blank">
                        464 Common St 133 Belmont, MA, 02478-2704 United States.
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mapCont">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.034321711553!2d-71.17931258925849!3d42.38441532743084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377f1f8092697%3A0x1ad2eb95e078e9aa!2s464%20Common%20St%20suite%20133%2C%20Belmont%2C%20MA%2002478%2C%20USA!5e0!3m2!1sen!2sin!4v1708941305888!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  // style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <Box mt={"3rem"}>
          <Footer />
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
