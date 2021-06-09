import React from "react";
import home1 from "../img/home1.png";
//styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We Work to Make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come{" "}
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for ideas and photography. We have proffesionals with
          amazing skills
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

//styled components
const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  min-height: 90vh;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
