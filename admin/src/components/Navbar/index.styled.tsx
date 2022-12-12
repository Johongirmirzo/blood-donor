import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { MdPassword, MdOutlineExitToApp } from "react-icons/md";
import { ImProfile } from "react-icons/im";

const NavbarHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  background: #1a202e;
  color: #fff;
`;

const NavbarCircleBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &.dropdown-active ul {
    top: 80px;
    opacity: 1;
    visibility: visible;
  }
`;
const NavbarIconBox = styled.div`
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const NavbarIcon = styled(BsPersonCircle)`
  display: block;
  width: 100%;
  height: 100%;
  color: #3f86ff;
`;
const NavbarTextBox = styled.div`
  margin-right: 15px;
  & > *:first-child {
    font-size: 13px;
    color: #f7f7f7;
  }
  & > *:last-child {
    font-weight: 500;
  }
`;
const NavbarList = styled.ul`
  position: absolute;
  top: 150px;
  right: 0;
  padding: 15px;
  width: 200px;
  border-radius: 10px;
  list-style-type: none;
  background: #1a202e;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: top 0.4s ease-out;
  opacity: 0;
  z-index: 99;
  visibility: hidden;
  & li:last-child {
    padding-top: 20px;
    border-top: 1px solid #999;
  }
`;
const NavbarItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  transition: color 0.3s ease-out;
  & > *:first-child {
    margin-right: 15px;
  }
  &:hover {
    color: #3f86ff;
  }
`;
const NavbarText = styled.p`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  transition: color 0.3s ease-out;
  & > *:first-child {
    margin-right: 15px;
    font-size: 20px;
  }
  &:hover {
    color: #3f86ff;
  }
`;
const NavbarProfileIcon = styled(ImProfile)``;
const NavbarChangePasswordIcon = styled(MdPassword)``;
const NavbarLogoutIcon = styled(MdOutlineExitToApp)``;

export {
  NavbarHeader,
  NavbarCircleBox,
  NavbarIconBox,
  NavbarIcon,
  NavbarTextBox,
  NavbarList,
  NavbarItem,
  NavbarLink,
  NavbarText,
  NavbarProfileIcon,
  NavbarChangePasswordIcon,
  NavbarLogoutIcon,
};
