import React from "react";
import ReactPaginate from "react-paginate";
import PaginationFilter from "./PaginationFilter";
import { PaginationProps } from "./index.types";
import { PaginationBox } from "./index.styled";

const Pagintation = ({
  handlePageClick,
  updateItemsPerPage,
  pageCount,
  paginationItemType,
}: PaginationProps) => {
  return (
    <PaginationBox>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        containerClassName="pagination-list"
        pageClassName="pagination-list__item"
        activeClassName="pagination-list__active-item"
        previousClassName="pagination-list__previous-item"
        nextClassName="pagination-list__next-item"
        disabledClassName="pagination-list__disabled-item"
        disabledLinkClassName="pagination-list__disabled-link"
        breakClassName="pagination-list__ellipses-item"
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={() => {}}
      />
      <PaginationFilter
        updateItemsPerPage={updateItemsPerPage}
        paginationItemType={paginationItemType}
      />
    </PaginationBox>
  );
};

export default Pagintation;
