import React, { useState } from "react";
import {
  PaginationFilterBox,
  PaginationFilterLabel,
  PaginationFilterSelect,
} from "./index.styled";
import { PaginationFilterProps } from "./index.types";

const PaginationFilter = ({
  paginationItemType,
  updateItemsPerPage,
}: PaginationFilterProps) => {
  const [itemPerPage, setItemPerPage] = useState(5);

  const handleUpdateItemPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const itemPerPageAmount = Number(e.target.value);
    setItemPerPage(itemPerPageAmount);
    updateItemsPerPage(itemPerPageAmount);
  };
  return (
    <PaginationFilterBox>
      <PaginationFilterLabel htmlFor="perPageItemAmount">
        {paginationItemType} Per Page
      </PaginationFilterLabel>
      <PaginationFilterSelect
        onChange={handleUpdateItemPerPageChange}
        value={itemPerPage}
        id="perPageItemAmount"
        name="itemPerPage"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </PaginationFilterSelect>
    </PaginationFilterBox>
  );
};

export default PaginationFilter;
