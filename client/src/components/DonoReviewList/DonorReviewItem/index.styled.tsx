import styled from "styled-components";

const DonorReviewBox = styled.div`
  color: #111;
  & > p {
    word-break: break-word;
  }
`;
const DonorReviewTitle = styled.h3`
  padding-bottom: 50px;
  text-align: center;
  color: #ef3d32;
  font-size: 25px;
`;
const DonorReviewFooter = styled.footer`
  margin-top: 50px;
  color: #333;
  text-transform: uppercase;
`;
const DonorReviewDescription = styled.p`
  letter-spacing: 1.7;
  font-size: 20px;
`;
const DonorReviewAuthor = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
const DonorReviewText = styled.p`
  margin-top: 20px;
`;

export {
  DonorReviewBox,
  DonorReviewTitle,
  DonorReviewDescription,
  DonorReviewFooter,
  DonorReviewAuthor,
  DonorReviewText,
};
