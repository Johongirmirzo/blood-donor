import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { IBloodRequirerList } from "../../types/blood-requirer";
import Pagination from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import BloodRequirersTable from "./BloodRequirersTable";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../styles/UI/General/index.styled";

const BloodRequirers = () => {
  const bloodRequirers = useSelector(
    (state: RootState) => state.bloodRequirers.bloodRequirers
  );
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<IBloodRequirerList>(bloodRequirers);
  return (
    <Container fluid>
      <Header>
        <Title>All Blood Requirers</Title>
      </Header>
      <Box>
        <BloodRequirersTable paginatedBloodRequirers={paginatedData} />
      </Box>
      {bloodRequirers.length > 5 && (
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          updateItemsPerPage={updateItemsPerPage}
          paginationItemType="Blood Requirers"
        />
      )}
    </Container>
  );
};

export default BloodRequirers;
