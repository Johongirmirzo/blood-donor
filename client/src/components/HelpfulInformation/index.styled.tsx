import styled from "styled-components";

const HelpfulInfoSection = styled.section`
  margin: 150px auto;
  max-width: 1160px;
  width: 90%;
  color: #111;
  & > div {
    flex: 1;
  }
  @media (min-width: 768px) {
    display: flex;
    gap: 50px;
  }
`;
const HelpfulInfoLeftBox = styled.div``;
const HelpfulInfoRightBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 50px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const HelpfulInfoHeader = styled.header``;
const HelpfulInfoTitle = styled.h2`
  color: #555;
  font-size: clamp(1.8rem, calc(4vw + 1rem), 3.5rem);
`;
const HelpfulInfoDescription = styled.p`
  font-size: clamp(1.4rem, calc(2vw + 1rem), 1.7rem);
  color: #333;
`;
const HelpfulInfoList = styled.ul`
  margin-left: 20px;
  margin-top: 50px;
  list-style-type: none;
`;
const HelpfulInfoItem = styled.li`
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

export {
  HelpfulInfoSection,
  HelpfulInfoLeftBox,
  HelpfulInfoRightBox,
  HelpfulInfoHeader,
  HelpfulInfoTitle,
  HelpfulInfoDescription,
  HelpfulInfoList,
  HelpfulInfoItem,
};
