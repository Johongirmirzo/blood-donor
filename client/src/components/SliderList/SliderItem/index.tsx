import React from "react";
import { Link } from "react-router-dom";
import { SliderItemProps } from "./index.types";
import {
  SliderItemBox,
  SliderItemTextBox,
  SliderItemTitle,
  SliderItemDescription,
  SliderItemBecomDonrBtn,
} from "./index.styled";

const SliderItem = ({ slider }: SliderItemProps) => {
  return (
    <SliderItemBox sliderImg={slider.image}>
      <SliderItemTextBox>
        <SliderItemDescription>{slider.description}</SliderItemDescription>
        <SliderItemTitle>{slider.title}</SliderItemTitle>
        <Link to="/register">
          <SliderItemBecomDonrBtn>BECOME DONOR</SliderItemBecomDonrBtn>
        </Link>
      </SliderItemTextBox>
    </SliderItemBox>
  );
};

export default SliderItem;
