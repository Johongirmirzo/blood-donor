import styled from "styled-components";
import { Button } from "../../../styles/UI/Button/index.styled";

const InitiativeSection = styled.section`
  padding: 40px 20px;
  background: #f0f0f0;
  color: #333;
`;
const InitiativeContainer = styled.div`
  max-width: 1160px;
  width: 90%;
  margin: 150px auto;
  text-align: center;
`;
const InitiativeHeader = styled.header`
  margin-bottom: 50px;
`;
const InitiativeTitle = styled.h2`
  margin-bottom: 20px;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 2rem);
`;
const InitiativeDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  margin-top: 20px;
  line-height: 1.5;
  font-size: 17px;
  color: #666;
`;
const InitiativeBtn = styled(Button)`
  background-color: #ef3d32;
  color: #fff;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: hsl(3, 85%, 50%);
  }
`;

export {
  InitiativeSection,
  InitiativeContainer,
  InitiativeHeader,
  InitiativeTitle,
  InitiativeDescription,
  InitiativeBtn,
};
