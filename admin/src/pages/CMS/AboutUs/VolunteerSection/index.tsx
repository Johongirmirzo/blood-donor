import React from "react";
import VolunteerSectionForm from "./VolunteerSectionForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const VolunteerSection = () => {
  return (
    <Container>
      <Header>
        <Title>Update Volunteer Section</Title>
      </Header>
      <Box>
        <VolunteerSectionForm />
      </Box>
    </Container>
  );
};

export default VolunteerSection;
