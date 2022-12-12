import React from "react";
import HeroImageForm from "./HeroImageForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const HeroImage = () => {
  return (
    <Container>
      <Header>
        <Title>Update About Us Hero Image</Title>
      </Header>
      <Box>
        <HeroImageForm />
      </Box>
    </Container>
  );
};

export default HeroImage;
