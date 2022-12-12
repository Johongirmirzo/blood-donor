import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { IMessageList } from "../../types/message";
import Pagination from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import ManageMessagesTable from "./ManageMessagesTable";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../styles/UI/General/index.styled";

const ManageMessages = () => {
  const messages = useSelector((state: RootState) => state.messages.messages);
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<IMessageList>(messages);

  return (
    <Container fluid>
      <Header>
        <Title>All Messages</Title>
      </Header>
      <Box>
        <ManageMessagesTable paginatedMessages={paginatedData} />
      </Box>
      {messages.length > 5 && (
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

export default ManageMessages;
