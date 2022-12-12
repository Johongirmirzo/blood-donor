import React from "react";
import { SiGithubsponsors } from "react-icons/si";
import PageLink from "../../../../components/PageLink";
import CreateSponsorForm from "./CreateSponsorForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const CreateSponsor = () => {
  return (
    <Container>
      <Header>
        <PageLink
          LinkIcon={SiGithubsponsors}
          routeTo="/cms-manage-sponsors"
          linkText="Go Back to All Sponsors"
        />
        <Title>Create A Sponsor</Title>
      </Header>
      <Box>
        <CreateSponsorForm />
      </Box>
    </Container>
  );
};

export default CreateSponsor;
