import React from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { IBloodGroup } from "../../types/blood-group";
import Pagination from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import ManageBloodGroupTable from "./ManageBloodGroupTable";
import PageLink from "../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../styles/UI/General/index.styled";

const BloodGroup = () => {
  const bloodGroups = useSelector(
    (state: RootState) => state.bloodGroup.bloodGroups
  );
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<IBloodGroup>(bloodGroups);

  return (
    <Container fluid>
      <PageLink
        LinkIcon={RiHeartAddLine}
        routeTo="/create-blood-group"
        linkText="Create A Blood Group"
      />
      <Header>
        <Title>All Blood Groups</Title>
      </Header>
      <Box>
        <ManageBloodGroupTable paginatedBloodGroups={paginatedData} />
      </Box>
      {bloodGroups.length > 5 && (
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          updateItemsPerPage={updateItemsPerPage}
          paginationItemType="Messages"
        />
      )}
    </Container>
  );
};

export default BloodGroup;
