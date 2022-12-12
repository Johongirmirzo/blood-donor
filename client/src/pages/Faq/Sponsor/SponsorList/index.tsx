import React from "react";
import Slider from "react-slick";
import SponsorItem from "./SponsorItem";
import { sponsorSettings } from "../../../../config/sliderSettings";
import { SponsorListBox } from "./index.styled";
import { SponsorListProps } from "./index.types";

const SponsorList = ({ sponsors }: SponsorListProps) => {
  return (
    <SponsorListBox>
      <Slider {...sponsorSettings}>
        {sponsors.map((sponsor) => (
          <SponsorItem key={sponsor._id} sponsor={sponsor} />
        ))}
      </Slider>
    </SponsorListBox>
  );
};

export default SponsorList;
