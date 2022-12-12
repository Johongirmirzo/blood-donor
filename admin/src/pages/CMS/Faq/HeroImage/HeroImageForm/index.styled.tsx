import styled from "styled-components";

const FaqHeroImage = styled.img`
  width: 100%;
  height: 450px;
`;
const FaqHeroImageText = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
`;
const FaqHeroImageBtn = styled.button`
  padding: 10px 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
const FaqHeroImageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
  & > * {
    flex: 1;
  }
`;
const FaqHeroImageEnableBtn = styled(FaqHeroImageBtn)`
  background: #1e56d9;
  color: #fff;
`;
const FaqHeroImageDisableBtn = styled(FaqHeroImageBtn)``;

export {
  FaqHeroImage,
  FaqHeroImageText,
  FaqHeroImageBox,
  FaqHeroImageEnableBtn,
  FaqHeroImageDisableBtn,
};
