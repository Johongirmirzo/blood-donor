import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { ISubscriberList } from "../../types/subscriber";
import Pagination from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import SubscribersTable from "./SubscribersTable";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../styles/UI/General/index.styled";

const Subscribers = () => {
  const subscribers = useSelector(
    (state: RootState) => state.subscribers.subscribers
  );
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<ISubscriberList>(subscribers);

  return (
    <Container fluid>
      <Header>
        <Title>All Subscribers</Title>
      </Header>
      <Box>
        <SubscribersTable paginatedSubscribers={paginatedData} />
      </Box>
      {subscribers.length > 5 && (
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          updateItemsPerPage={updateItemsPerPage}
          paginationItemType="Subscribers"
        />
      )}
    </Container>
  );
};

export default Subscribers;
