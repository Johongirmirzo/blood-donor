import React from "react";

import {
  SidebarLogoBox,
  SidebarLogoIcon,
  SidebarLogoTitle,
} from "./index.styled";

const SidebarLogo = () => {
  return (
    <SidebarLogoBox to="/dashboard">
      <SidebarLogoIcon />
      <SidebarLogoTitle>
        Give Blood!
        <br />
        Give LIFE!
      </SidebarLogoTitle>
    </SidebarLogoBox>
  );
};

export default SidebarLogo;
