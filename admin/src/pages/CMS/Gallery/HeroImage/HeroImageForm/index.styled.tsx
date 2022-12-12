import styled from "styled-components";

const GalleryHeroImage = styled.img`
  width: 100%;
  height: 450px;
`;
const GalleryHeroImageText = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
`;
const GalleryHeroImageBtn = styled.button`
  padding: 10px 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
const GalleryHeroImageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
  & > * {
    flex: 1;
  }
`;
const GalleryHeroImageEnableBtn = styled(GalleryHeroImageBtn)`
  background: #1e56d9;
  color: #fff;
`;
const GalleryHeroImageDisableBtn = styled(GalleryHeroImageBtn)``;

export {
  GalleryHeroImage,
  GalleryHeroImageText,
  GalleryHeroImageBox,
  GalleryHeroImageEnableBtn,
  GalleryHeroImageDisableBtn,
};
