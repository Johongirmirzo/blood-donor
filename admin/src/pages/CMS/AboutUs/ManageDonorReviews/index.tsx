import React from "react";
import { MdOutlineRateReview } from "react-icons/md";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { IDonorList } from "../../../../types/about-us-page";
import Pagination from "../../../../components/Pagination";
import { usePagination } from "../../../../hooks/usePagination";
import ManageDonorReviewsTable from "./ManagaDonorReviewsTable";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";
const ManageDonorReviews = () => {
  const donorReviews = useSelector(
    (state: RootState) => state.aboutUsPage.donorReviews.donors
  );
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<IDonorList>(donorReviews);

  return (
    <Container fluid>
      <Header>
        <PageLink
          LinkIcon={MdOutlineRateReview}
          routeTo="/cms-create-donor-review"
          linkText="Create A Donor Review"
        />
        <Title>All Donor Reviews</Title>
      </Header>
      <Box>
        <ManageDonorReviewsTable paginatedDonorReviews={paginatedData} />
      </Box>
      {donorReviews.length > 5 && (
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

export default ManageDonorReviews;
