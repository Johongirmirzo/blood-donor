import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { IDonorList } from "../../types/donor";
import Pagination from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import DonorsTable from "./DonorsTable";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../styles/UI/General/index.styled";

const Donors = () => {
  const donors = useSelector((state: RootState) => state.donors.donors);
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<IDonorList>(donors);

  return (
    <Container fluid>
      <Header>
        <Title>All Donors</Title>
      </Header>
      <Box>
        <DonorsTable paginatedDonors={paginatedData} />
      </Box>
      {donors.length > 5 && (
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          updateItemsPerPage={updateItemsPerPage}
          paginationItemType="Donors"
        />
      )}
    </Container>
  );
};

export default Donors;
