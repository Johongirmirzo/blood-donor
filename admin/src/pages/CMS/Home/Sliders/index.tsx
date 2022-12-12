import React from "react";
import { TfiLayoutSlider } from "react-icons/tfi";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { ISlider } from "../../../../types/home-page";
import Pagination from "../../../../components/Pagination";
import { usePagination } from "../../../../hooks/usePagination";
import SlidersTable from "./SlidersTable";
import PageLink from "../../../../components/PageLink";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const Sliders = () => {
  const sliders = useSelector((state: RootState) => state.homePage.sliders);
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<ISlider>(sliders);

  return (
    <Container fluid>
      <Header>
        <PageLink
          LinkIcon={TfiLayoutSlider}
          routeTo="/cms-create-slider"
          linkText=" Create A New Slider"
        />
        <Title>All Sliders</Title>
      </Header>
      <Box>
        <SlidersTable paginatedSliders={paginatedData} />
      </Box>
      {sliders.length > 5 && (
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          updateItemsPerPage={updateItemsPerPage}
          paginationItemType="Sliders"
        />
      )}
    </Container>
  );
};

export default Sliders;
