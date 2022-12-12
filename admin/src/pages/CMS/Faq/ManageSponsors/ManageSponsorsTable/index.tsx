import React from "react";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteSponsor } from "../../../../../redux/faq-page";
import { deleteSponsor as removeSponsor } from "../../../../../api/faq-page";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../../../styles/UI/Table/index.styled";
import {
  ManageSponsorsTableBtnBox,
  ManageSponsorsTableImg,
  ManageSponsorsTableDeleteBtn,
  ManageSponsorsTableTitle,
} from "./index.styled";
import { ManageSponsorsTableProps } from "./index.types";

const ManageSponsorsTable = ({
  paginatedSponsors,
}: ManageSponsorsTableProps) => {
  const dispatch = useDispatch();
  const handleDeleteGalleryImageClick = async (sponsorId: string) => {
    try {
      await removeSponsor(sponsorId);
      dispatch(deleteSponsor({ sponsorId }));
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedSponsors.length > 0 ? (
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
        {paginatedSponsors.map((sponsor, index) => (
          <Tr key={sponsor._id}>
            <Td>{index + 1}</Td>
            <Td>
              <ManageSponsorsTableImg src={sponsor.image} alt="sponsor image" />
            </Td>
            <Td>
              {moment(sponsor.imageCreationDate).format(
                "yy-MM-DD - hh:mm:ss a"
              )}
            </Td>
            <Td>
              <ManageSponsorsTableBtnBox>
                <ManageSponsorsTableDeleteBtn
                  onClick={handleDeleteGalleryImageClick.bind(
                    null,
                    sponsor._id
                  )}
                >
                  <RiDeleteBinLine />
                </ManageSponsorsTableDeleteBtn>
              </ManageSponsorsTableBtnBox>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManageSponsorsTableTitle>
      There are not any Sponsors yet!
    </ManageSponsorsTableTitle>
  );
};

export default ManageSponsorsTable;
