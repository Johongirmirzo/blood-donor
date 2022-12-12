export type PaginationProps = {
    pageCount: number;
    paginationItemType: string;
    handlePageClick: (event: { selected: number }) => void;
    updateItemsPerPage: (paginationAmount: number) => void;
  };