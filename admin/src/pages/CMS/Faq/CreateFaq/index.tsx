import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import CreateFaqForm from "./CreateFaqForm";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const CreateFaq = () => {
  return (
    <Container>
      <Header>
        <PageLink
          LinkIcon={FaQuestionCircle}
          routeTo="/cms-manage-faqs"
          linkText="Go Back to All Faqs"
        />
        <Title>Create A Faq</Title>
      </Header>
      <Box>
        <CreateFaqForm />
      </Box>
    </Container>
  );
};

export default CreateFaq;
