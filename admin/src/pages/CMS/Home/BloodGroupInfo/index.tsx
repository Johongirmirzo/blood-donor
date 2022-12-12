import React from "react";
import BloodGroupInfoForm from "./BloodGroupInfoForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const BloodGroupInfo = () => {
  return (
    <Container>
      <Header>
        <Title>Update Blood Group Info</Title>
      </Header>
      <Box>
        <BloodGroupInfoForm />
      </Box>
    </Container>
  );
};

export default BloodGroupInfo;
