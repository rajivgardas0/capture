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

export default AboutSection;
