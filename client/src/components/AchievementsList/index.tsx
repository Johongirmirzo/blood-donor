import React from "react";
import AchievementItem from "./AchievementItem";
import { AchievementListProps } from "./index.types";

const AchievementList = ({ achievementList }: AchievementListProps) => {
  return (
    <>
      {achievementList.map((achievement, index) => (
        <AchievementItem
          key={achievement._id}
          achievement={achievement}
          index={index}
        />
      ))}
    </>
  );
};

export default AchievementList;
