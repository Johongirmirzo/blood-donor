import styled from "styled-components";

const AchievementCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const Icon = styled.div``;
const AchievementIconBox = styled.div``;
const AchievementResult = styled.p`
  margin-bottom: 15px;
  font-weight: 600;
  color: #ef3d32;
  font-size: 32px;
`;
const AchievementTitle = styled.p`
  font-size: 25px;
`;

export {
  AchievementCard,
  Icon,
  AchievementIconBox,
  AchievementResult,
  AchievementTitle,
};
