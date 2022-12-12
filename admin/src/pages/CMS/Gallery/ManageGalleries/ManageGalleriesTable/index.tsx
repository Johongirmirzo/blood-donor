import React from "react";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteImage as removeImage } from "../../../../../redux/gallery-page";
import { deleteImage } from "../../../../../api/gallery-page";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../../../styles/UI/Table/index.styled";
import {
  ManageGalleriesTableBtnBox,
  ManageGalleryTableImg,
  ManageGalleriesTableDeleteBtn,
  ManageGalleriesTableTitle,
} from "./index.styled";
import { ManageGalleriesTableProps } from "./index.types";

const ManageGalleriesTable = ({
  paginatedGalleryImages,
}: ManageGalleriesTableProps) => {
  const dispatch = useDispatch();

  const handleDeleteGalleryImageClick = async (imageId: string) => {
    try {
      await deleteImage(imageId);
      dispatch(removeImage({ imageId }));
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedGalleryImages.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>NO.</Th>
          <Th>Image</Th>
          <Th>Image Creation Date</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {paginatedGalleryImages.map((galleryImage, index) => (
          <Tr key={galleryImage._id}>
            <Td>{index + 1}</Td>
            <Td>
              <ManageGalleryTableImg
                src={galleryImage.image}
                alt="gallery image"
              />
            </Td>
            <Td>
              {moment(galleryImage.imageCreationDate).format(
                "yy-MM-DD hh:mm:ss a"
              )}
            </Td>
            <Td>
              <ManageGalleriesTableBtnBox>
                <ManageGalleriesTableDeleteBtn
                  onClick={handleDeleteGalleryImageClick.bind(
                    null,
                    galleryImage._id
                  )}
                >
                  <RiDeleteBinLine />
                </ManageGalleriesTableDeleteBtn>
              </ManageGalleriesTableBtnBox>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManageGalleriesTableTitle>
      There are not any galleries yet!
    </ManageGalleriesTableTitle>
  );
};

export default ManageGalleriesTable;
