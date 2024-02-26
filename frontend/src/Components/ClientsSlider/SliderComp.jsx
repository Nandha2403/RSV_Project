import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SliderComp = ({ ClientImage, title, link }) => {
  return (
    <Container className="project">
      <Link to={link}>
        <img src={ClientImage} alt="ClientImage" />
        <h3>{title}</h3>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  /* width: 90%; */
  margin: 0 0 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: small;
  text-align: center;
  img {
    width: 90%;
    object-fit: cover;
  }
`;

export default SliderComp;
