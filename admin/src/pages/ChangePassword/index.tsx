import React from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../styles/UI/General/index.styled";

const ChangeProfile = () => {
  return (
    <Container>
      <Header>
        <Title>Change Profile Info</Title>
      </Header>
      <Box>
        <ChangePasswordForm />
      </Box>
    </Container>
  );
};

export default ChangeProfile;
