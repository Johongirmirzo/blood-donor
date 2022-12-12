import styled from "styled-components";

const WhoWeAreBox = styled.article`
  max-width: 1160px;
  width: 90%;
  margin: 150px auto;
  @media (min-width: 768px) {
    display: flex;
    & > div {
      flex: 1;
      width: 50%;
    }
  }
`;
const WhoWeAreLeftBox = styled.div`
  padding-right: 50px;
`;
const WhoWeAreRightBox = styled.div`
  margin-top: 50px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const WhoWeAreHeader = styled.header``;
const WhoWeAreTitle = styled.h2`
  color: #555;
  font-size: clamp(1.8rem, calc(4vw + 1rem), 3.5rem);
`;
const WhoWeAreDescription = styled.p`
  color: #444;
  margin-top: 30px;
`;
const WhoWeAreList = styled.ul`
  margin-top: 30px;
  margin-left: 20px;
  list-style-type: none;
`;
const WhoWeAreItem = styled.li`
  position: relative;
  color: #333;
  font-size: 17px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &::before {
    position: absolute;
    content: "";
    top: 5px;
    left: -20px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #ef3d32;
  }
`;
const WhoWeAreImg = styled.img`
  @media (min-width: 768px) {
    height: 400px;
  }
`;

export {
  WhoWeAreBox,
  WhoWeAreLeftBox,
  WhoWeAreRightBox,
  WhoWeAreHeader,
  WhoWeAreTitle,
  WhoWeAreDescription,
  WhoWeAreList,
  WhoWeAreItem,
  WhoWeAreImg,
};
