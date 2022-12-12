import React from "react";
import AchievementList from "../AchievementsList";
import {
  HelpfulInfoSection,
  HelpfulInfoLeftBox,
  HelpfulInfoRightBox,
  HelpfulInfoHeader,
  HelpfulInfoTitle,
  HelpfulInfoDescription,
  HelpfulInfoList,
  HelpfulInfoItem,
} from "./index.styled";
import { HelpfulInformationProps } from "./index.types";

const HelpfulInformation = ({
  helpfulInfo,
  achievementList,
}: HelpfulInformationProps) => {
  return (
    <HelpfulInfoSection>
      <HelpfulInfoLeftBox>
        <HelpfulInfoHeader>
          <HelpfulInfoDescription>
            {helpfulInfo.description}
          </HelpfulInfoDescription>
          <HelpfulInfoTitle>{helpfulInfo.title}</HelpfulInfoTitle>
        </HelpfulInfoHeader>
        <HelpfulInfoList>
          {helpfulInfo.infoList.map((info, index) => (
            <HelpfulInfoItem key={index}>{info}</HelpfulInfoItem>
          ))}
        </HelpfulInfoList>
      </HelpfulInfoLeftBox>
      <HelpfulInfoRightBox>
        <AchievementList achievementList={achievementList} />
      </HelpfulInfoRightBox>
    </HelpfulInfoSection>
  );
};

export default HelpfulInformation;
