import React from "react";
import {
  WhoWeAreBox,
  WhoWeAreLeftBox,
  WhoWeAreRightBox,
  WhoWeAreHeader,
  WhoWeAreTitle,
  WhoWeAreDescription,
  WhoWeAreList,
  WhoWeAreItem,
  WhoWeAreImg,
} from "./index.styled";
import { WhoWeAreProps } from "./index.types";

const WhoWeAre = ({ aboutUs }: WhoWeAreProps) => {
  return (
    <WhoWeAreBox>
      <WhoWeAreLeftBox>
        <WhoWeAreHeader>
          <WhoWeAreTitle>{aboutUs.title}</WhoWeAreTitle>
          <WhoWeAreDescription>{aboutUs.description}</WhoWeAreDescription>
        </WhoWeAreHeader>
        <WhoWeAreList>
          {aboutUs.aboutUsList.map((list, index) => (
            <WhoWeAreItem key={index}>{list}</WhoWeAreItem>
          ))}
        </WhoWeAreList>
      </WhoWeAreLeftBox>
      <WhoWeAreRightBox>
        <WhoWeAreImg src={aboutUs.aboutUsImage} alt="about us image" />
      </WhoWeAreRightBox>
    </WhoWeAreBox>
  );
};

export default WhoWeAre;
