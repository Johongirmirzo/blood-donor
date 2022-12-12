import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import EditFaqForm from "./EditFaqForm";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const ManageFaqs = () => {
  return (
    <Container>
      <Header>
        <PageLink
          LinkIcon={FaQuestionCircle}
          routeTo="/cms-manage-faqs"
          linkText="Go Back To All Faqs"
        />
        <Title>Edit A Faq</Title>
      </Header>
      <Box>
        <EditFaqForm />
      </Box>
    </Container>
  );
};

export default ManageFaqs;
