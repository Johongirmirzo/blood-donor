import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import {
  SidebarNavItem,
  SidebarNavLink,
  SidebarNavItemBox,
  SidebarNavSubList,
  SidebarNavSubItem,
  SidebarNavSubLink,
} from "./index.styled";
import { SidebarRowProps } from "./index.types";

const SidebarRow = ({
  sidebarRow: { routeTo, rowName, Icon, pages, id },
  isMobile,
  getActivePageId,
  toggleSidebar,
}: SidebarRowProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSidebarRowClick = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;

    if (isMobile && pages?.length) {
      if (element.tagName.match(/div|svg|path/i)) {
        setIsMenuOpen(!isMenuOpen);
      }
      if (toggleSidebar && element.tagName.match(/a|svg|path/i)) {
        toggleSidebar();
      }
    } else {
      if (element.tagName.match(/div|svg|path/i)) {
        setIsMenuOpen(!isMenuOpen);
      }
      if (toggleSidebar) {
        toggleSidebar();
      }
    }
    getActivePageId(id);
  };

  return (
    <SidebarNavItem onClick={handleSidebarRowClick}>
      {!pages?.length ? (
        <SidebarNavLink to={routeTo}>
          <Icon /> {rowName}
        </SidebarNavLink>
      ) : (
        <SidebarNavItemBox isMenuOpen={isMenuOpen}>
          <div>
            <Icon /> {rowName}
          </div>
          {pages?.length ? !isMenuOpen ? <BsPlusLg /> : <FaMinus /> : ""}
        </SidebarNavItemBox>
      )}

      {pages?.length && (
        <SidebarNavSubList isMenuOpen={isMenuOpen}>
          {pages.map((page) => (
            <SidebarNavSubItem key={page.id}>
              <SidebarNavSubLink to={page.routeTo}>
                {page.rowName}
              </SidebarNavSubLink>
            </SidebarNavSubItem>
          ))}
        </SidebarNavSubList>
      )}
    </SidebarNavItem>
  );
};

export default SidebarRow;
