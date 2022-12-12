import React from "react";
import ContactUsInfoForm from "./ContactUsInfoForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const ContactUsInfoSection = () => {
  return (
    <Container>
      <Header>
        <Title>Update Contact Us Info</Title>
      </Header>
      <Box>
        <ContactUsInfoForm />
      </Box>
    </Container>
  );
};

export default ContactUsInfoSection;
