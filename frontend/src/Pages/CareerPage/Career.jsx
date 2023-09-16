import React from "react";
import "./Career.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Menu from "../../Components/Menu/Menu";
import Navbar from "../../Components/Navbar/Navbar";
import IntroImg from "../../Images/ContactUsIntro.png";
import Footer from "../../Components/Footer/Footer";

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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec nisi a tortor posuere varius. Cras imperdiet varius ipsum
                vel blandit. Duis sagittis quis purus eget ullamcorper. Donec
                ornare molestie ligula, eu pretium sem pellentesque ac. Morbi
                gravida magna felis, non cursus nulla sodales vel. Sed sagittis
                commodo odio id cursus. Nulla mattis tristique magna ac mattis.
                Ut accumsan mi at lorem sagittis, non fringilla diam pulvinar.
                Maecenas sagittis, purus ac dapibus elementum, erat metus
                finibus diam, in sagittis nunc nulla nec tortor. Vivamus commodo
                nunc tincidunt lorem semper finibus. Etiam finibus justo vel
                porttitor ultrices. Donec id facilisis nisl, iaculis convallis
                odio. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Integer orci turpis, accumsan
                sollicitudin enim id, sollicitudin rhoncus lorem. Aliquam id
                ultricies orci, ac tincidunt nisi. Sed ac enim luctus, volutpat
                libero at, dapibus dui.
              </p>
              <Box className="OurMotoBtnCont">
                <Button
                  size={"xs"}
                  borderRadius={"15px"}
                  p={"0px 20px 0px 20px"}
                  colorScheme="#131049"
                  bg="#131049"
                >
                  Join Us
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
          <Box className="LifeAtRS-Sub">
            <Text>HINT FOR THE LIFE AT RADIANT SAGE</Text>
          </Box>
          {/* CARDS */}
          <Box className="CardsParent">
            <Box>
              <h2 className="CardHeading">Our Work-Life Balance</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                sapiente mollitia quidem. Obcaecati, officiis veniam. Tempora,
                quidem expedita harum nisi ex ad ipsa vero veritatis nihil,
                eligendi nesciunt, amet tenetur
              </p>
            </Box>
            <Box>
              <h2 className="CardHeading">Our Work-Life Balance</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                sapiente mollitia quidem. Obcaecati, officiis veniam. Tempora,
                quidem expedita harum nisi ex ad ipsa vero veritatis nihil,
                eligendi nesciunt, amet tenetur
              </p>
            </Box>
            <Box>
              <h2 className="CardHeading">Our Work-Life Balance</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                sapiente mollitia quidem. Obcaecati, officiis veniam. Tempora,
                quidem expedita harum nisi ex ad ipsa vero veritatis nihil,
                eligendi nesciunt, amet tenetur
              </p>
            </Box>
          </Box>
          {/* Contact us from */}
          <Box className="ContactUsForm">
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
                <input className="FullInput" placeholder="Reason for Inquiry" />
              </Box>
              <Box className="TopInputCont">
                <textarea
                  className="FullInputBottom"
                  placeholder="Specific Requirements (if any) :"
                />
              </Box>
            </Box>
          </Box>
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
