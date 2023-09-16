import React from "react";
import styled from "styled-components";

const SliderCompForAI = ({ ClientImage, title }) => {
  return (
    <Container className="project">
        <img src={ClientImage} alt="ClientImage" />
        <h3>{title}</h3>
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

export default SliderCompForAI;
