import React from "react";
import GallerySectionForm from "./GallerySectionForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const GallerySection = () => {
  return (
    <Container>
      <Header>
        <Title>Update Gallery Section</Title>
      </Header>
      <Box>
        <GallerySectionForm />
      </Box>
    </Container>
  );
};

export default GallerySection;
