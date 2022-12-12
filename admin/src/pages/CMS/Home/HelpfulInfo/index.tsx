import React from "react";
import HelpfulInfoForm from "./HelpfulInfoForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const HelpfulInfo = () => {
  return (
    <Container>
      <Header>
        <Title>Update Helpful Info</Title>
      </Header>
      <Box>
        <HelpfulInfoForm />
      </Box>
    </Container>
  );
};

export default HelpfulInfo;
