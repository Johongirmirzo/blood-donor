import styled from "styled-components";

const OurAchievementsSection = styled.section``;
const OurAchievementsContainer = styled.div`
  max-width: 1160px;
  width: 90%;
  margin: 100px auto;
`;
const OurAchievementsHeader = styled.header`
  margin-bottom: 50px;
  text-align: center;
`;
const OurAchievementsTitle = styled.h2`
  margin-bottom: 20px;
  color: #555;
  font-size: clamp(1.8rem, calc(4vw + 1rem), 3rem);
`;
const OurAchievementsDescription = styled.p`
  color: #666;
  font-size: 20px;
`;
const OurAchievementsGrid = styled.div`
  color: #333;
  @media (min-width: 768px) {
    display: flex;
    gap: 30px;
    color: #111;
    & > * {
      flex: 1;
    }
  }
`;

export {
  OurAchievementsSection,
  OurAchievementsContainer,
  OurAchievementsHeader,
  OurAchievementsTitle,
  OurAchievementsDescription,
  OurAchievementsGrid,
};
