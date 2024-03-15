import React from "react";
import { Box } from "@chakra-ui/react";
import Logo from "../../Images/RSV-Logo.png";
import Linkedin from "../../Images/linkedin.png";
import Facebook from "../../Images/facebook.png";
import Email from "../../Images/email.png";
import Instagram from "../../Images/instagram.png";
import Twitter from "../../Images/twitter.png";
import PhoneCall from "../../Images/phone-call.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer-Container"
      // data-aos="fade-up"
      // data-aos-duration="1000"
    >
      <Box className="footer-top">
        <Box className="footer-logo">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </Box>

        <Box className="footer-social-icons">
          <Box className="icons-container">
            <Box>
              <a href="#">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </Box>
            {/* <Box>
              <a href="#">
                <img src={Facebook} alt="Facebook" />
              </a>
            </Box> */}
            <Box>
              <a href="#">
                <img src={Email} alt="Email" />
              </a>
            </Box>
            <Box>
              <a href="#">
                <img src={PhoneCall} alt="PhoneCall" />
              </a>
            </Box>
          </Box>
          <Box className="emailAndPhoneNum">
            <Box>
              <p>
                <a href="">info@radiantsage.com</a>
              </p>
              <p>
                <a href="">+1 855-723-7243</a>
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="footer-links">
        <Box>
          <h2>
            <Link to={"/Solutions"}>Solutions</Link>
          </h2>
          <ul>
            <li>
              <a href="#">CT</a>
            </li>
            <li>
              <a href="#">Oncology </a>
            </li>
            <li>
              <a href="#">Derma</a>
            </li>
            <li>
              <a href="#">BI</a>
            </li>
            <li>
              <a href="#">MRI</a>
            </li>
            <li>
              <a href="#">Paired Reads</a>
            </li>
          </ul>
        </Box>
        <Box>
          <h2>
            <a href="#">Resources</a>
          </h2>
          <ul>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </Box>
        <Box>
          <h2>
            <Link to={"/Services"}>Our Services</Link>
          </h2>
          <ul>
            <li>
              <a href="#">Core Lab Services</a>
            </li>
            <li>
              <a href="#">Technical Services</a>
            </li>
            <li>
              <a href="#">Deployment Services</a>
            </li>
          </ul>
        </Box>
        <Box>
          <h2>
            <Link to={"/AboutUs"}>About Us</Link>
          </h2>
          <ul>
            <li>
              <Link to={"/Career"}>Careers</Link>
            </li>
            <li>
              <Link to={"/Contactus"}>Contact us</Link>
            </li>
          </ul>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
