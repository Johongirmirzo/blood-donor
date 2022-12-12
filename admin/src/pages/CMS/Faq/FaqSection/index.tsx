import React from "react";
import FaqSectionForm from "./FaqSectionForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const FaqSection = () => {
  return (
    <Container>
      <Header>
        <Title>Update Faq Section</Title>
      </Header>
      <Box>
        <FaqSectionForm />
      </Box>
    </Container>
  );
};

export default FaqSection;
