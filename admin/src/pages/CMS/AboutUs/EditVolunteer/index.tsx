import React from "react";
import EditVolunteerForm from "./EditVolunteerForm";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const EditVolunteer = () => {
  return (
    <Container>
      <Header>
        <PageLink
          LinkIcon={MdOutlineVolunteerActivism}
          routeTo="/cms-volunteers"
          linkText="Go Back To All Volunteers"
        />
        <Title>Edit A Volunteer</Title>
      </Header>
      <Box>
        <EditVolunteerForm />
      </Box>
    </Container>
  );
};

export default EditVolunteer;
