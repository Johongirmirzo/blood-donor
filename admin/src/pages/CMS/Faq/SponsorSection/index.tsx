import React from "react";
import SponsorSectionForm from "./SponsorSectionForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const SponsorSection = () => {
  return (
    <Container>
      <Header>
        <Title>Update Sponsor Section</Title>
      </Header>
      <Box>
        <SponsorSectionForm />
      </Box>
    </Container>
  );
};

export default SponsorSection;
