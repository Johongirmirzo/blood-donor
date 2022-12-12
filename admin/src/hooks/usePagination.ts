import React, {useState, useEffect} from 'react'

export const usePagination = <T = any>(paginationData: T[]) => {
    const [paginatedData, setpaginatedData] = useState<T []>(
        []
      );
      const [pageCount, setPageCount] = useState(0);
      const [pageOffset, setPageOffset] = useState(0);
      const [itemsPerPage, setItemPerPage] = useState(5);
    
      useEffect(() => {
        const endOffset = pageOffset + itemsPerPage;
        setpaginatedData(paginationData.slice(pageOffset, endOffset));
        setPageCount(Math.ceil(paginationData.length / itemsPerPage));
      }, [itemsPerPage, paginationData, pageOffset]);
    
      const handlePageClick = (event: { selected: number }) => {
        console.log(event, "Event");
        const newOffset = (event.selected * itemsPerPage) % paginationData.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setPageOffset(newOffset);
      };
      const updateItemsPerPage = (itemPerPageAmount: number) =>
        setItemPerPage(itemPerPageAmount);
    return {pageCount, paginatedData, handlePageClick, updateItemsPerPage};
}

 