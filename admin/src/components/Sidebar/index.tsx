import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import SidebarLogo from "./SidebarLogo";
import SidebarRow from "./SidebarRow";
import SidebarHamburger from "./SidebarHamburger";
import {
  SidebarAside,
  SidebarNav,
  SidebarNavList,
  SidebarOverlay,
} from "./index.styled";
import { useMobile } from "../../hooks/useMobile";

import sidebarRowsData from "./sidebarRowsData";

const Sidebar = () => {
  const isMobile = useMobile();
  const adminEmail = useSelector((state: RootState) => state.admin.email);
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [activePageId, setActivePageId] = useState(0);

  useEffect(() => {
    document.body.classList.remove("active");
    if (isSidebarToggled) {
      document.body.classList.add("active");
    }
  }, [isSidebarToggled]);

  const toggleSidebar = () => setIsSidebarToggled(!isSidebarToggled);
  const getActivePageId = (pageId: number) => setActivePageId(pageId);

  const hidePagesOnAdminMode = () => {
    return sidebarRowsData.filter((row) =>
      row.rowName.includes("Page") && adminEmail === "admin.demo@gmail.com"
        ? false
        : true
    );
  };

  return (
    <SidebarAside isMobile={isMobile} isSidebarToggled={isSidebarToggled}>
      {isSidebarToggled && <SidebarOverlay />}
      {isMobile && (
        <>
          <SidebarHamburger
            isMobile={isMobile}
            isSidebarToggled={isSidebarToggled}
            toggleSidebar={toggleSidebar}
          />
        </>
      )}
      <SidebarLogo />
      <SidebarNav>
        <SidebarNavList>
          {isMobile
            ? hidePagesOnAdminMode().map((sidebarRow) => (
                <SidebarRow
                  key={sidebarRow.id}
                  sidebarRow={sidebarRow}
                  toggleSidebar={toggleSidebar}
                  getActivePageId={getActivePageId}
                  activePageId={activePageId}
                  isMobile={isMobile}
                />
              ))
            : hidePagesOnAdminMode().map((sidebarRow) => (
                <SidebarRow
                  key={sidebarRow.id}
                  sidebarRow={sidebarRow}
                  getActivePageId={getActivePageId}
                  activePageId={activePageId}
                />
              ))}
        </SidebarNavList>
      </SidebarNav>
    </SidebarAside>
  );
};

export default Sidebar;
