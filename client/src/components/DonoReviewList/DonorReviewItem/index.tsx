import React from "react";
import {
  DonorReviewBox,
  DonorReviewTitle,
  DonorReviewDescription,
  DonorReviewFooter,
  DonorReviewAuthor,
  DonorReviewText,
} from "./index.styled";
import { DonorReviewItemProps } from "./index.types";

const DonorReviewItem = ({ donorReview }: DonorReviewItemProps) => {
  return (
    <DonorReviewBox className="ex">
      <DonorReviewTitle>Donor Opinion</DonorReviewTitle>
      <DonorReviewDescription>{donorReview.donorReview}</DonorReviewDescription>

      <DonorReviewFooter>
        <DonorReviewAuthor>{donorReview.donorName}</DonorReviewAuthor>
        <DonorReviewText>
          {donorReview.donorLocation} {donorReview.donorProfession}
        </DonorReviewText>
      </DonorReviewFooter>
    </DonorReviewBox>
  );
};

export default DonorReviewItem;
