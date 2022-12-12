import React from "react";
import { RiHeartAddLine } from "react-icons/ri";
import CreateBloodGroupForm from "./CreateBloodGroupForm";
import PageLink from "../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../styles/UI/General/index.styled";

const CreateBloodGroup = () => {
  return (
    <Container>
      <PageLink
        LinkIcon={RiHeartAddLine}
        routeTo="/manage-blood-groups"
        linkText="Go Back to Blood Groups"
      />

      <Header>
        <Title>Create A Blood Group</Title>
      </Header>
      <Box>
        <CreateBloodGroupForm />
      </Box>
    </Container>
  );
};

export default CreateBloodGroup;
