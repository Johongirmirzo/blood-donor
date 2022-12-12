import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { MdPassword, MdOutlineExitToApp } from "react-icons/md";
import { ImProfile } from "react-icons/im";

const NavbarCircleBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  cursor: pointer;
  &.dropdown-active ul {
    top: 80px;
    opacity: 1;
    visibility: visible;
  }
  & p {
    color: #333;
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
  color: #565656;
`;
const NavbarTextBox = styled.div`
  margin-right: 15px;
  & > *:first-child {
    font-size: 13px;
    color: #444;
  }
  & > *:last-child {
    font-weight: 500;
    color: #333;
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
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: top 0.4s ease-out;
  opacity: 0;
  z-index: 99;
  visibility: hidden;
  & li:last-child {
    padding-top: 20px;
    border-top: 1px solid #555;
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
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease-out;
  & > *:first-child {
    margin-right: 15px;
  }
  &:hover {
    color: #ef3d32;
  }
`;
const NavbarText = styled.p`
  display: flex;
  align-items: center;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease-out;
  & > *:first-child {
    margin-right: 15px;
    font-size: 20px;
  }
  &:hover {
    color: #ef3d32;
  }
`;
const NavbarProfileIcon = styled(ImProfile)``;
const NavbarChangePasswordIcon = styled(MdPassword)``;
const NavbarLogoutIcon = styled(MdOutlineExitToApp)``;

export {
  NavbarCircleBox,
  NavbarIconBox,
  NavbarTextBox,
  NavbarIcon,
  NavbarList,
  NavbarItem,
  NavbarLink,
  NavbarText,
  NavbarProfileIcon,
  NavbarChangePasswordIcon,
  NavbarLogoutIcon,
};
