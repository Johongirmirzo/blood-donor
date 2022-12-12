import React from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import { SliderProps } from "./index.types";
import { settings } from "../../config/sliderSettings";
import { SliderListBox } from "./index.styled";

const SliderList = ({ sliders }: SliderProps) => {
  return (
    <SliderListBox>
      <Slider {...settings}>
        {sliders.map((slider) => (
          <SliderItem key={slider._id} slider={slider} />
        ))}
      </Slider>
    </SliderListBox>
  );
};

export default SliderList;
