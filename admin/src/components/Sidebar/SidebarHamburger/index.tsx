import React from "react";
import { SidebarHamburgerBox, SidebarHamburgerLine } from "./index.styled";
import { SidebarHamburgerProps } from "./index.types";

const SidebarHamburger = ({
  isMobile,
  isSidebarToggled,
  toggleSidebar,
}: SidebarHamburgerProps) => {
  return (
    <SidebarHamburgerBox
      onClick={toggleSidebar}
      isSidebarToggled={isSidebarToggled}
    >
      <SidebarHamburgerLine></SidebarHamburgerLine>
      <SidebarHamburgerLine></SidebarHamburgerLine>
      <SidebarHamburgerLine></SidebarHamburgerLine>
    </SidebarHamburgerBox>
  );
};

export default SidebarHamburger;
