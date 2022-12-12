import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { IFaqList } from "../../../../types/faq-page";
import Pagination from "../../../../components/Pagination";
import { usePagination } from "../../../../hooks/usePagination";
import ManageFaqsTable from "./ManageFaqsTable";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const ManageFaqs = () => {
  const faqs = useSelector((state: RootState) => state.faqPage.faq.faqList);
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<IFaqList>(faqs);

  return (
    <Container fluid>
      <Header>
        <PageLink
          LinkIcon={FaQuestionCircle}
          routeTo="/cms-create-faq"
          linkText="Create A Faq"
        />
        <Title>All Faqs</Title>
      </Header>
      <Box>
        <ManageFaqsTable paginatedFaqs={paginatedData} />
      </Box>
      {faqs.length > 5 && (
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          updateItemsPerPage={updateItemsPerPage}
          paginationItemType="Faqs"
        />
      )}
    </Container>
  );
};

export default ManageFaqs;
