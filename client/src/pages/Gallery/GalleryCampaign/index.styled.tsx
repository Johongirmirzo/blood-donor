import styled from "styled-components";
import { Button } from "../../../styles/UI/Button/index.styled";

const GalleryCampaignSection = styled.section`
  color: #333;
  text-align: center;
`;
const GalleryCampaignContainer = styled.div`
  max-width: 1160px;
  width: 90%;
  margin: 150px auto;
`;
const GalleryCampaignHeader = styled.header`
  text-align: center;
  margin-bottom: 50px;
`;
const GalleryCampaignTitle = styled.h2`
  color: #555;
  font-size: clamp(1.8rem, calc(4vw + 1rem), 2.8rem);
`;
const GalleryCampaignDescription = styled.p`
  margin-top: 30px;
  font-size: 20px;
`;
const GalleryCampaignBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryCampaignBtn = styled(Button)`
  background-color: #ef3d32;
  color: #fff;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: hsl(3, 85%, 50%);
  }
`;

export {
  GalleryCampaignSection,
  GalleryCampaignContainer,
  GalleryCampaignHeader,
  GalleryCampaignTitle,
  GalleryCampaignDescription,
  GalleryCampaignBox,
  GalleryCampaignBtn,
};
