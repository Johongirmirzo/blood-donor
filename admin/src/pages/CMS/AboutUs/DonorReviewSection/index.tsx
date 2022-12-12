import React from "react";
import DonorReviewSectionForm from "./DonorReviewSectionForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const DonorReviewSection = () => {
  return (
    <Container>
      <Header>
        <Title>Update Donor Review Section</Title>
      </Header>
      <Box>
        <DonorReviewSectionForm />
      </Box>
    </Container>
  );
};

export default DonorReviewSection;
