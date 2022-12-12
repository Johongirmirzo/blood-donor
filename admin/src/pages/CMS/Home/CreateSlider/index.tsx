import React from "react";
import CreateSliderForm from "./CreateSliderForm";
import { TfiLayoutSlider } from "react-icons/tfi";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const CreateSlider = () => {
  return (
    <Container>
      <PageLink
        LinkIcon={TfiLayoutSlider}
        routeTo="/cms-manage-sliders"
        linkText="Go Back to Sliders"
      />
      <Header>
        <Title>Create A Slider</Title>
      </Header>
      <Box>
        <CreateSliderForm />
      </Box>
    </Container>
  );
};

export default CreateSlider;
