import React from "react";
import {
  DashboardCard,
  DashboardCardBody,
  DashboardCardTextBox,
  DashboardCardTitle,
  DashboardCardText,
  DashboardCardIconBox,
  DashboardCardLinkBtn,
} from "./index.styled";
import { DashboardCardSectionProps } from "./index.types";

const DashboardCardSection = ({
  DashboardIcon,
  dashboardTitle,
  dashboardItemLength,
  dashboardRoute,
  dashboardLinkText,
}: DashboardCardSectionProps) => {
  return (
    <DashboardCard>
      <DashboardCardBody>
        <DashboardCardIconBox>
          <DashboardIcon />
        </DashboardCardIconBox>
        <DashboardCardTextBox>
          <DashboardCardTitle>{dashboardTitle}</DashboardCardTitle>
          <DashboardCardText>{dashboardItemLength}</DashboardCardText>
        </DashboardCardTextBox>
      </DashboardCardBody>
      <DashboardCardLinkBtn to={dashboardRoute}>
        {dashboardLinkText}
      </DashboardCardLinkBtn>
    </DashboardCard>
  );
};

export default DashboardCardSection;
