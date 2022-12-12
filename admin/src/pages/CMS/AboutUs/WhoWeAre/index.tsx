import React from "react";
import WhoWeAreForm from "./WhoWeAreForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const WhoWeAreSection = () => {
  return (
    <Container>
      <Header>
        <Title>Update Our WhoWeAre</Title>
      </Header>
      <Box>
        <WhoWeAreForm />
      </Box>
    </Container>
  );
};

export default WhoWeAreSection;
