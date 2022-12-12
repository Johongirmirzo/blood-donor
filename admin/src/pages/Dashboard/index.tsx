import React from "react";
import { MdOutlineBloodtype } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { BiDonateBlood } from "react-icons/bi";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import DashboardCard from "./DashboardCard";
import {
  DashboardSection,
  DashboardHeader,
  DashboardTitle,
  DashboardCardGrid,
} from "./index.styled";

const Dashboard = () => {
  const bloodGroups = useSelector(
    (state: RootState) => state.bloodGroup.bloodGroups
  );
  const donors = useSelector((state: RootState) => state.donors.donors);
  const messages = useSelector((state: RootState) => state.messages.messages);
  const subscribers = useSelector(
    (state: RootState) => state.subscribers.subscribers
  );
  const bloodRequirers = useSelector(
    (state: RootState) => state.bloodRequirers.bloodRequirers
  );

  return (
    <DashboardSection>
      <DashboardHeader>
        <DashboardTitle>Dashboard</DashboardTitle>
      </DashboardHeader>
      <DashboardCardGrid>
        <DashboardCard
          DashboardIcon={MdOutlineBloodtype}
          dashboardTitle="All Blood Groups"
          dashboardItemLength={bloodGroups.length}
          dashboardRoute="/manage-blood-groups"
          dashboardLinkText="Go To Blood Groups"
        />
        <DashboardCard
          DashboardIcon={MdOutlineBloodtype}
          dashboardTitle="All Donors"
          dashboardItemLength={donors.length}
          dashboardRoute="/donors"
          dashboardLinkText="Go To Donors"
        />
        <DashboardCard
          DashboardIcon={AiOutlineMessage}
          dashboardTitle="All Messages"
          dashboardItemLength={messages.length}
          dashboardRoute="/manage-messages"
          dashboardLinkText="Go To Messages"
        />
        <DashboardCard
          DashboardIcon={HiOutlineUserGroup}
          dashboardTitle="All Blood Requirers"
          dashboardItemLength={bloodRequirers.length}
          dashboardRoute="/manage-blood-requirers"
          dashboardLinkText="Go To Blood Requirers"
        />
        <DashboardCard
          DashboardIcon={HiOutlineUserGroup}
          dashboardTitle="All Subscribers"
          dashboardItemLength={subscribers.length}
          dashboardRoute="/subscribers"
          dashboardLinkText="Go To Subscribers"
        />
      </DashboardCardGrid>
    </DashboardSection>
  );
};

export default Dashboard;
