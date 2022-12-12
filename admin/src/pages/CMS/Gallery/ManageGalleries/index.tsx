import React from "react";
import { TfiGallery } from "react-icons/tfi";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { IImageList } from "../../../../types/gallery-page";
import Pagination from "../../../../components/Pagination";
import { usePagination } from "../../../../hooks/usePagination";
import PageLink from "../../../../components/PageLink";
import ManageGalleriesTable from "./ManageGalleriesTable";
import {
  Container,
  Header,
  Title,
  Box,
} from "../../../../styles/UI/General/index.styled";

const ManageGalleries = () => {
  const galleryImages = useSelector(
    (state: RootState) => state.galleryPage.gallery.images
  );
  const { pageCount, paginatedData, handlePageClick, updateItemsPerPage } =
    usePagination<IImageList>(galleryImages);

  return (
    <Container fluid>
      <Header>
        <PageLink
          LinkIcon={TfiGallery}
          routeTo="/cms-create-gallery"
          linkText="Create Gallery"
        />
        <Title>All Galleries</Title>
      </Header>
      <Box>
        <ManageGalleriesTable paginatedGalleryImages={paginatedData} />
      </Box>
      {galleryImages.length > 5 && (
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

export default ManageGalleries;
