import styled from "styled-components";

const AboutUsHeroImage = styled.img`
  width: 100%;
  height: 450px;
`;
const AboutUsHeroImageText = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
`;
const AboutUsHeroImageBtn = styled.button`
  padding: 10px 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
const AboutUsHeroImageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
  & > * {
    flex: 1;
  }
`;
const AboutUsHeroImageEnableBtn = styled(AboutUsHeroImageBtn)`
  background: #1e56d9;
  color: #fff;
`;
const AboutUsHeroImageDisableBtn = styled(AboutUsHeroImageBtn)``;

export {
  AboutUsHeroImage,
  AboutUsHeroImageText,
  AboutUsHeroImageBox,
  AboutUsHeroImageEnableBtn,
  AboutUsHeroImageDisableBtn,
};
