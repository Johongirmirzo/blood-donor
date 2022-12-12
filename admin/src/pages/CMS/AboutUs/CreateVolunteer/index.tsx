import React from "react";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import CreateVolunteerForm from "./CreateVolunteerForm";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const CreateVolunteer = () => {
  return (
    <Container>
      <Header>
        <PageLink
          LinkIcon={MdOutlineVolunteerActivism}
          routeTo="/cms-volunteers"
          linkText="Go Back to All Volunteers"
        />
        <Title>Create A Volunteer</Title>
      </Header>
      <Box>
        <CreateVolunteerForm />
      </Box>
    </Container>
  );
};

export default CreateVolunteer;
