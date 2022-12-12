import React from "react";
import { SponsorItemImage } from "./index.styled";
import { SponsorItemProps } from "./index.types";

const SponsorItem = ({ sponsor }: SponsorItemProps) => {
  return <SponsorItemImage src={sponsor.image} alt="sponsor image" />;
};
export default SponsorItem;
