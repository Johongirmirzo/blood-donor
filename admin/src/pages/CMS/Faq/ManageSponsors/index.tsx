import React from "react";
import { SiGithubsponsors } from "react-icons/si";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { ISponsorList } from "../../../../types/faq-page";
import Pagination from "../../../../components/Pagination";
import { usePagination } from "../../../../hooks/usePagination";
import PageLink from "../../../../components/PageLink";
import ManageSponsorsTable from "./ManageSponsorsTable";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const ManageSponsors = () => {
  const sponsorImages = useSelector(
    (state: RootState) => state.faqPage.sponsor.images
  );
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<ISponsorList>(sponsorImages);

  return (
    <Container fluid>
      <Header>
        <PageLink
          LinkIcon={SiGithubsponsors}
          routeTo="/cms-create-sponsor"
          linkText="Create A Sponsor"
        />
        <Title>All Sponsors</Title>
      </Header>
      <Box>
        <ManageSponsorsTable paginatedSponsors={paginatedData} />
      </Box>
      {sponsorImages.length > 5 && (
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          updateItemsPerPage={updateItemsPerPage}
          paginationItemType="Sponsors"
        />
      )}
    </Container>
  );
};

export default ManageSponsors;
