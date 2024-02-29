import React from "react";
import "./Career.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../Components/Menu/Menu";
import Navbar from "../../Components/Navbar/Navbar";
import IntroImg from "../../Images/ContactUsIntro.png";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-scroll";

const Career = () => {
  return (
    <Box>
      {/* Menu */}
      <Menu />
      <Box className="bodyContainerCarrer">
        <Box className="BannerContainerCarrer">
          <Navbar />
        </Box>
        {/* Our Moto */}
        <Box className="OurMoto">
          <Text className="headings" ml={"1.5rem"}>
            Our Moto
          </Text>
          <Box className="OurMoto-Cont">
            <Box className="OurMotoText">
              <Text className="headings" mb={"1rem"}>
                Join the revolution reshaping the landscape of clinical trial
                imaging.
              </Text>
              <p>
                Explore exciting opportunities with RSV - Radiant Sage Ventures,
                a trailblazer in redefining the landscape of clinical trial
                imaging. Our motto, 'Pioneering Precision, Transforming Imaging
                in Trials,' epitomizes our dedication to pushing the frontiers
                of innovation in the healthcare sector. At RSV - Radiant Sage
                Ventures, we're on the lookout for driven individuals who share
                our fervor for propelling medical research forward through
                Clincal trial imaging. As a valued member of our team, you'll
                play a pivotal role in reshaping clinical trials, contributing
                to the creation of revolutionary therapies, and enhancing
                patient outcomes. If you're prepared to be part of a dynamic
                environment that cherishes precision, innovation, and the
                pursuit of medical breakthroughs, come join us at RSV - Radiant
                Sage Ventures. Your expertise is the key to making a lasting
                impact on the future of healthcare.
              </p>
              <Box className="OurMotoBtnCont">
                <Button
                  size={"xs"}
                  borderRadius={"15px"}
                  p={"0px 20px 0px 20px"}
                  colorScheme="#131049"
                  bg="#131049"
                >
                  <Link
                    to="ContactUsForm"
                    spy={true}
                    offset={-50}
                    smooth={true}
                    duration={500}
                  >
                    Join Us
                  </Link>
                </Button>
              </Box>
            </Box>
            <Box className="OurMotoIntroImg">
              <img src={IntroImg} alt="IntroImg" />
            </Box>
          </Box>
        </Box>
        {/* Life At Radiant Sage */}
        <Box className="LifeAtRS">
          <Box>
            <Text className="headings" ml={"1.5rem"}>
              Life At Radiant Sage
            </Text>
          </Box>
          <Box className="LifeAtRS-Sub"></Box>
          {/* CARDS */}
          <Box className="CardsParent">
            <Box>
              <h2 className="CardHeading headings">Innovation Hub</h2>
              <p>
                Life at RSV is centered around our Innovation Hub, where
                curiosity and creativity converge to drive groundbreaking
                advancements in clinical trial imaging. Our dynamic work
                environment fosters a culture of continuous learning and
                exploration, empowering our team members to contribute to
                cutting-edge solutions that redefine the industry.
              </p>
            </Box>
            <Box>
              <h2 className="CardHeading headings">Collaborative Excellence</h2>
              <p>
                At RSV, collaboration is not just a buzzword; it's the
                cornerstone of our success. Teamwork thrives in every aspect of
                life here, from cross-functional projects to knowledge sharing.
                Our collaborative approach extends beyond departmental
                boundaries, creating a vibrant community where diverse
                perspectives come together to solve complex challenges and push
                the limits of what's possible.
              </p>
            </Box>
            <Box>
              <h2 className="CardHeading headings">
                Career Development Ecosystem
              </h2>
              <p>
                Life at RSV is a journey of growth and development. We believe
                in investing in our talent, providing opportunities for skill
                enhancement, and nurturing professional aspirations. Our career
                development ecosystem includes mentorship programs, regular
                training sessions, and avenues for advancement, ensuring that
                every team member has the tools and support needed to shape
                their career trajectory within the ever-evolving landscape of
                life science technology.
              </p>
            </Box>
          </Box>
          {/* Contact us from */}
          <div className="career_form">
            <Box className="ContactUsForm" id="ContactUsForm">
              <Box className="form">
                <p className="formHeading">Join Us</p>
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
            </Box>
          </div>

          {/* SubmitBtn */}
          <Box className="SubmitBtn">
            <button>Submit Here !</button>
          </Box>
          <Box mt={"3rem"}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Career;
