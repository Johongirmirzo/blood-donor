import React from "react";
import {
  AchievementCard,
  AchievementResult,
  AchievementTitle,
} from "./index.styled";
import { AchievementItemProps } from "./index.types";

const AchievementItem = ({ achievement, index }: AchievementItemProps) => {
  return (
    <AchievementCard>
      <AchievementResult>{achievement.result}</AchievementResult>
      <AchievementTitle>{achievement.title}</AchievementTitle>
    </AchievementCard>
  );
};

export default AchievementItem;
