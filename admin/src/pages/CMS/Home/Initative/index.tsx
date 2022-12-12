import React from "react";
import InitiativeForm from "./InitiativeForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const Initative = () => {
  return (
    <Container>
      <Header>
        <Title>Update Initiative</Title>
      </Header>
      <Box>
        <InitiativeForm />
      </Box>
    </Container>
  );
};

export default Initative;
