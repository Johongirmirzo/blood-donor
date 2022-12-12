import React from "react";
import AchievementList from "../../../components/AchievementsList";
import {
  OurAchievementsSection,
  OurAchievementsContainer,
  OurAchievementsHeader,
  OurAchievementsTitle,
  OurAchievementsDescription,
  OurAchievementsGrid,
} from "./index.styled";
import { OurAchievementsProps } from "./index.types";

const OurAchievements = ({ ourAchievements }: OurAchievementsProps) => {
  return (
    <OurAchievementsSection>
      <OurAchievementsContainer>
        <OurAchievementsHeader>
          <OurAchievementsTitle>{ourAchievements.title}</OurAchievementsTitle>
          <OurAchievementsDescription>
            {ourAchievements.description}
          </OurAchievementsDescription>
        </OurAchievementsHeader>
        <OurAchievementsGrid>
          <AchievementList achievementList={ourAchievements.achievementList} />
        </OurAchievementsGrid>
      </OurAchievementsContainer>
    </OurAchievementsSection>
  );
};

export default OurAchievements;
