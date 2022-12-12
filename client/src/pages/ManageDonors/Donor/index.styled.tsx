import styled from "styled-components";
import { Button } from "../../../styles/UI/Button/index.styled";

const DonorSection = styled.section`
  color: #333;
`;
const DonorContainer = styled.div`
  max-width: 1160px;
  margin: 150px auto;
`;
const DonorHeader = styled.header`
  text-align: center;
  margin-bottom: 50px;
`;
const DonorTitle = styled.h2`
  color: #555;
  font-size: clamp(1.8rem, calc(4vw + 1rem), 3.5rem);
`;
const DonorDescription = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #666;
`;
const DonorListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 960px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const DonorBtnBox = styled.div`
  margin-top: 50px;
  text-align: center;
`;
const DonorBtn = styled(Button)`
  background-color: #ef3d32;
  color: #fff;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: hsl(3, 85%, 50%);
  }
`;

export {
  DonorSection,
  DonorContainer,
  DonorHeader,
  DonorTitle,
  DonorDescription,
  DonorListGrid,
  DonorBtnBox,
  DonorBtn,
};
