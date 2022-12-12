import React from "react";
import DonorReviewList from "../../../components/DonoReviewList";
import {
  DonorReviewSection,
  DonorReviewHeader,
  DonorReviewTitle,
  DonorReviewDescription,
  DonorReviewBox,
  DonorReviewLeftBox,
  DonorReviewRightBox,
} from "./index.styled";
import { DonorReviewProps } from "./index.types";

const DonorReview = ({ donorReviews, image }: DonorReviewProps) => {
  return (
    <DonorReviewSection bgImage={donorReviews.donorReviewHeroImage}>
      <DonorReviewHeader>
        <DonorReviewDescription>
          {donorReviews.description}
        </DonorReviewDescription>
        <DonorReviewTitle>{donorReviews.title}</DonorReviewTitle>
      </DonorReviewHeader>
      <DonorReviewBox>
        <DonorReviewLeftBox>
          <DonorReviewList donorReviews={donorReviews.donors} />
        </DonorReviewLeftBox>
        <DonorReviewRightBox bgImage={image} />
      </DonorReviewBox>
    </DonorReviewSection>
  );
};

export default DonorReview;
