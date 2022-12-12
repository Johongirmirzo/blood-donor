import React from "react";
import CreateGalleryForm from "./CreateGalleryForm";
import { TfiGallery } from "react-icons/tfi";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";
const CreateGallerySection = () => {
  return (
    <Container>
      <Header>
        <PageLink
          LinkIcon={TfiGallery}
          routeTo="/cms-manage-galleries"
          linkText="Go Back To Galleries"
        />
        <Title>Create A Gallery Image</Title>
      </Header>
      <Box>
        <CreateGalleryForm />
      </Box>
    </Container>
  );
};

export default CreateGallerySection;
