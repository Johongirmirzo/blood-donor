import React from "react";
import HeroSectionForm from "./HeroImageForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const HeroSection = () => {
  return (
    <Container>
      <Header>
        <Title>Update Contact Us Hero Image</Title>
      </Header>
      <Box>
        <HeroSectionForm />
      </Box>
    </Container>
  );
};

export default HeroSection;
