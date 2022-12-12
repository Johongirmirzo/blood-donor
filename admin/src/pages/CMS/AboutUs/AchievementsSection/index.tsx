import React from "react";
import AchievementsForm from "./AchievementSectionForm";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const AchievementSection = () => {
  return (
    <Container>
      <Header>
        <Title>Update Our Achievements</Title>
      </Header>
      <Box>
        <AchievementsForm />
      </Box>
    </Container>
  );
};

export default AchievementSection;
