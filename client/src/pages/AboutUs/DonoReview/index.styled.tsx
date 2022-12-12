import styled, { css } from "styled-components";
interface IDonorReviewProps {
  bgImage: string;
}

const DonorReviewSection = styled.section`
  min-height: 100vh;
  padding: 150px 0;
  ${(props: IDonorReviewProps) =>
    props.bgImage &&
    css`
      background: url(${props.bgImage});
      background-size: cover;
      background-position: center;
    `};
`;
const DonorReviewHeader = styled.header`
  text-align: center;
`;
const DonorReviewTitle = styled.h2`
  font-size: clamp(2rem, calc(5vw + 1rem), 4rem);
`;
const DonorReviewDescription = styled.p`
  margin-bottom: 20px;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;
const DonorReviewBox = styled.div`
  display: flex;
  max-width: 1160px;
  margin: 0 auto;
  margin-top: 110px;
  height: 600px;
  background: #fff;
  & > div {
    flex: 1 0 50%;
    width: 100%;
  }
  @media (min-width: 768px) {
    & > div {
      width: 50%;
    }
  }
`;
const DonorReviewImg = styled.img``;
const DonorReviewLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
`;
const DonorReviewRightBox = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    ${(props: IDonorReviewProps) =>
      props.bgImage &&
      css`
        background: url(${props.bgImage});
        background-size: cover;
        background-position: center top;
      `}
  }
`;

export {
  DonorReviewSection,
  DonorReviewHeader,
  DonorReviewTitle,
  DonorReviewDescription,
  DonorReviewBox,
  DonorReviewImg,
  DonorReviewLeftBox,
  DonorReviewRightBox,
};
