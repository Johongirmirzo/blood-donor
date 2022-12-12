import React from "react";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { IVolunteerList } from "../../../../types/about-us-page";
import Pagination from "../../../../components/Pagination";
import { usePagination } from "../../../../hooks/usePagination";
import ManageVolunteersTable from "./ManageVolunteersTable";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const Volunteers = () => {
  const volunteers = useSelector(
    (state: RootState) => state.aboutUsPage.volunteers.volunteers
  );
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<IVolunteerList>(volunteers);

  return (
    <Container fluid>
      <Header>
        <PageLink
          LinkIcon={MdOutlineVolunteerActivism}
          routeTo="/cms-create-volunteer"
          linkText="Create A Volunteer"
        />
        <Title>All Volunteers</Title>
      </Header>
      <Box>
        <ManageVolunteersTable paginatedVolunteers={paginatedData} />
      </Box>
      {volunteers.length > 5 && (
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

export default Volunteers;
