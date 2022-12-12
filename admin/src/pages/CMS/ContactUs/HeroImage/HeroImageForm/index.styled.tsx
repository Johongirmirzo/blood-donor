import styled from "styled-components";

const ContactUsHeroImage = styled.img`
  width: 100%;
  height: 450px;
`;
const ContactUsHeroImageText = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
`;
const ContactUsHeroImageBtn = styled.button`
  padding: 10px 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
const ContactUsHeroImageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
  & > * {
    flex: 1;
  }
`;
const ContactUsHeroImageEnableBtn = styled(ContactUsHeroImageBtn)`
  background: #1e56d9;
  color: #fff;
`;
const ContactUsHeroImageDisableBtn = styled(ContactUsHeroImageBtn)``;

export {
  ContactUsHeroImage,
  ContactUsHeroImageText,
  ContactUsHeroImageBox,
  ContactUsHeroImageEnableBtn,
  ContactUsHeroImageDisableBtn,
};
