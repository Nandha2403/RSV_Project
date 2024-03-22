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
        </Box>
        <div className="contactUsContainer">
          <h1 className="headings">Connect With Us</h1>
          <p>
            We would love to respond to your inquiries and help you succeed. Feel
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
