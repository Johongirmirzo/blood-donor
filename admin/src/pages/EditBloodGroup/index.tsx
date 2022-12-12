import React from "react";
import { RiHeartAddLine } from "react-icons/ri";
import PageLink from "../../components/PageLink";
import EditBloodGroupForm from "./EditBloodGroupForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../styles/UI/General/index.styled";

const EditBloodGroup = () => {
  return (
    <Container>
      <PageLink
        LinkIcon={RiHeartAddLine}
        routeTo="/manage-blood-groups"
        linkText="Go Back to Blood Groups"
      />

      <Header>
        <Title>Edit A Blood Group</Title>
      </Header>
      <Box>
        <EditBloodGroupForm />
      </Box>
    </Container>
  );
};

export default EditBloodGroup;
