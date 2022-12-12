import styled, { css } from "styled-components";
import { FaMinus } from "react-icons/fa";

import { NavLink } from "react-router-dom";

interface SidebarNavSublistProps {
  isMenuOpen: boolean;
  isSidebarToggled: boolean;
}

const SidebarNavItem = styled.li`
  margin-bottom: 10px;
`;
const SidebarNavTitle = styled.span`
  display: block;
  padding-left: 25px;
  margin-bottom: 20px;
  color: #a5a3a3;
  font-weight: 500;
`;
const SidebarNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px 0;
  padding-left: 15px;
  padding-right: 10px;
  width: 100%;
  color: #e6e3e3;
  font-weight: 600;
  font-size: 1.05rem;
  border-radius: 10px;
  border-left: 4px solid transparent;
  transition: color 0.3s ease-out;
  &.active {
    background: rgba(0, 0, 0, 0.5);
  }
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    color: #3f86ff;
  }
  & > *:first-child {
    margin-right: 15px;
  }
  &.in-active {
    background: transparent;
  }
`;
const SidebarNavItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  padding-left: 15px;
  padding-right: 10px;
  width: 100%;
  color: #e6e3e3;
  font-weight: 600;
  font-size: 1.05rem;
  border-radius: 10px;
  cursor: pointer;
  border-left: 4px solid transparent;
  transition: color 0.3s ease-out;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    color: #3f86ff;
  }
  & > *:first-child {
    margin-right: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  ${(props: SidebarNavSublistProps) =>
    props.isMenuOpen &&
    css`
      background: rgba(0, 0, 0, 0.5);
    `}
`;
const SidebarNavSubList = styled.ul`
  & li {
    display: none;
  }
  ${(props: SidebarNavSublistProps) =>
    props.isMenuOpen &&
    css`
      & li {
        display: block;
      }
    `}
`;
const SidebarNavSubItem = styled.li``;
const SidebarNavSubLink = styled(NavLink)`
  position: relative;
  display: block;
  padding: 10px 10px 10px 60px;
  border-radius: 10px;
  color: #e1e1e1;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #3f86ff;
    background: rgba(0, 0, 0, 0.2);
  }
  &.active::before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 25px;
    content: ">";
    font-size: 20px;
  }
`;

export {
  SidebarNavItem,
  SidebarNavTitle,
  SidebarNavLink,
  SidebarNavItemBox,
  SidebarNavSubList,
  SidebarNavSubItem,
  SidebarNavSubLink,
};
