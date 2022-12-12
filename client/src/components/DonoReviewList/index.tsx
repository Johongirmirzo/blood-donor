import React from "react";
import Slider from "react-slick";
import { settings } from "../../config/sliderSettings";
import DonorReviewItem from "./DonorReviewItem";
import { SliderListBox } from "./index.styled";
import { DonorReviewListProps } from "./index.types";

const DonorReviewList = ({ donorReviews }: DonorReviewListProps) => {
  return (
    <SliderListBox>
      <Slider {...settings}>
        {donorReviews.map((donorReview) => (
          <DonorReviewItem key={donorReview._id} donorReview={donorReview} />
        ))}
      </Slider>
    </SliderListBox>
  );
};

export default DonorReviewList;
