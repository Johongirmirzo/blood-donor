import styled from "styled-components";

const FooterSection = styled.footer`
  padding-top: 100px;
  background: #1a1a1a;
`;
const FooterContainer = styled.div`
  max-width: 1160px;
  width: 90%;
  margin: 0 auto;
`;
const FooterTop = styled.div`
  padding-bottom: 50px;
  border-bottom: 1px solid #434343;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const FooterLogo = styled.img`
  width: 150px;
  margin-right: 100px;
`;
const FooterValueText = styled.p`
  line-height: 1.7;
  font-size: 18px;
`;
const FooterBottom = styled.div`
  padding: 50px 0;
  & > div:not(:last-child) {
    margin-bottom: 50px;
  }
  & > * {
    flex: 1;
  }
  & svg {
    color: #ef3d32;
  }
  & h5 {
    margin-bottom: 35px;
    font-size: 25px;
  }
  & li {
    list-style: none;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    & > div {
      margin-bottom: 0;
    }
  }
`;
const FooterContactList = styled.ul`
  & li {
    display: flex;
    gap: 15px;
    & svg {
      font-size: 18px;
    }
    & p {
      margin-bottom: 10px;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
const FooterLinkList = styled.ul`
  & li:not(:last-child) {
    margin-bottom: 20px;
  }
  & li a {
    margin-left: 15px;
    color: #fff;
    transition: all 0.3s ease-out;
    &:hover {
      color: #ef3d32;
    }
  }
`;
const FooterSubscribeBox = styled.div`
  & p {
    margin-bottom: 20px;
    font-size: 17px;
  }
`;
const FooterCopyrightBox = styled.div`
  padding: 40px 0;
  border-top: 1px solid #434343;
  text-align: center;
`;
const FooterCopyright = styled.small`
  font-size: 18px;
`;

export {
  FooterSection,
  FooterContainer,
  FooterTop,
  FooterLogo,
  FooterValueText,
  FooterBottom,
  FooterContactList,
  FooterLinkList,
  FooterSubscribeBox,
  FooterCopyrightBox,
  FooterCopyright,
};
