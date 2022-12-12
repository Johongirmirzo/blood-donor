import React from "react";
import { Link } from "react-router-dom";
import { HeroSection, HeroTextBox } from "./index.styled";
import { HeroProps } from "./index.types";

const Hero = ({ heroImage, routeTo, pageName }: HeroProps) => {
  return (
    <HeroSection bgImage={heroImage}>
      <HeroTextBox>
        <header>
          <h1>{pageName}</h1>
          <p>
            <Link to={routeTo}>HOME</Link>/ {pageName}
          </p>
        </header>
      </HeroTextBox>
    </HeroSection>
  );
};

export default Hero;
