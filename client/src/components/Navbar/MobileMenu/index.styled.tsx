import styled from "styled-components";
import { NavbarHeaderLink, NavbarLoginBtn, NavbarBtn } from "../index.styled";

const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;

  background: #fff;
  z-index: 9;
`;
const MobileMenuTop = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  & div {
    justify-content: flex-end;
    margin-left: 0;
  }
`;
const MobileMenuBox = styled.div`
  width: 90%;
  margin: 50px auto;
`;
const MobileMenuHamburgerBox = styled.div`
  position: absolute;
  top: 50px;
  text-align: left;
`;
const MobileMenuNav = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const MobileMenuList = styled.ul`
  list-style: none;
  text-align: center;
`;
const MobileMenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;
const MobileMenuLink = styled(NavbarHeaderLink)``;
const MobileMenuLoginBtn = styled(NavbarLoginBtn)``;
const MobileMenuRegisterBtn = styled(NavbarBtn)``;

export {
  MobileMenuOverlay,
  MobileMenuTop,
  MobileMenuBox,
  MobileMenuHamburgerBox,
  MobileMenuNav,
  MobileMenuList,
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuLoginBtn,
  MobileMenuRegisterBtn,
};
