import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../../styles/UI/Button/index.styled";
import { INavbarProps } from "./index.types";

const NavbarHeader = styled.header`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;
const NavbarHeaderBox = styled.div`
  max-width: 1160px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavbarHeaderTop = styled.div`
  padding: 15px 0;
  background: #ef3d32;
  text-align: center;
  & div,
  address {
    display: block;
    margin-bottom: 15px;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      margin-bottom: 0;
    }
  }
  & address {
    font-style: normal;
    font-size: 18px;
    font-weight: 500;
    &:first-child {
      margin-right: 25px;
    }
    & * {
      font-size: clamp(16px, calc(2vw + 1rem), 25px);
      margin-right: 10px;
    }
  }
  ${(props: INavbarProps) =>
    props.isNavbarSlided &&
    css`
      display: none;
    `}
`;
const NavbarHeaderBottom = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  ${(props: INavbarProps) =>
    props.isNavbarSlided &&
    css`
      position: fixed;
      top: 0;
      width: 100%;
      background: #fff;
    `};
`;
const NavbarHeaderLogo = styled(Link)`
  text-decoration: none;
  font-size: 20px;
`;
const NavbarHeaderImg = styled.img`
  height: 100px;
`;
const NavbarHeaderNav = styled.nav``;
const NavbarHeaderList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;
const NavbarHeaderItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;
const NavbarHeaderLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: 18px;
  color: #333;
  font-weight: 500;
  transition: all 0.3s ease-out;
  &::before {
    position: absolute;
    left: 50%;
    content: "";
    bottom: -2px;
    width: 0;
    height: 3px;
    transform: translateX(-50%);
    transition: all 0.3s ease-out;
    background: #ef3d32;
  }
  &:hover {
    color: #ef3d32;
    &::before {
      width: 100%;
      left: 0;
      transform: translateX(0);
    }
  }
  &.active {
    color: #ef3d32;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }
`;
const NavbarLoginBtn = styled(Button)`
  margin-left: clamp(15px, calc(2vw + 1rem), 50px);
  padding: 12px 20px;
  background: #444;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease-out;
  &:hover {
    background: #333;
  }
`;
const NavbarBtn = styled(Button)`
  padding: 12px 20px;
  color: #fff;
  background: #ef3d32;
  font-size: 16px;
  transition: all 0.3s ease-out;
  &:hover {
    background: hsl(3, 85%, 50%);
  }
`;

export {
  NavbarHeader,
  NavbarHeaderBox,
  NavbarHeaderTop,
  NavbarHeaderBottom,
  NavbarHeaderLogo,
  NavbarHeaderImg,
  NavbarHeaderNav,
  NavbarHeaderList,
  NavbarHeaderItem,
  NavbarHeaderLink,
  NavbarLoginBtn,
  NavbarBtn,
};
