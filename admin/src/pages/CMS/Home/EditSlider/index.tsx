import React from "react";
import { TfiLayoutSlider } from "react-icons/tfi";
import PageLink from "../../../../components/PageLink";
import EditSliderForm from "./EditSliderForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const EditSlider = () => {
  return (
    <Container>
      <PageLink
        LinkIcon={TfiLayoutSlider}
        routeTo="/cms-manage-sliders"
        linkText="Go Back to Sliders"
      />
      <Header>
        <Title>Edit A Slider</Title>
      </Header>
      <Box>
        <EditSliderForm />
      </Box>
    </Container>
  );
};

export default EditSlider;
