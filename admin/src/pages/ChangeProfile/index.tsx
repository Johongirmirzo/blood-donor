import React from "react";
import ChangeProfileForm from "./ChangeProfileForm";
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
        <ChangeProfileForm />
      </Box>
    </Container>
  );
};

export default ChangeProfile;
