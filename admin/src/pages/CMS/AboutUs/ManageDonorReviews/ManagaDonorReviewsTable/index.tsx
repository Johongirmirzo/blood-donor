import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDonorReview as removeDonorReview } from "../../../../../redux/about-page";
import { deleteDonorReview } from "../../../../../api/about-page";
import truncateWord from "../../../../../utils/truncateWord";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../../../styles/UI/Table/index.styled";
import {
  ManageDonorReviewsTableBtnBox,
  ManageDonorReviewsTableEditBtn,
  ManageDonorReviewsTableDeleteBtn,
  ManageDonorReviewsTableTitle,
} from "./index.styled";
import { ManageDonorReviewsTableProps } from "./index.types";

const ManageDonorReviewsTable = ({
  paginatedDonorReviews,
}: ManageDonorReviewsTableProps) => {
  const dispatch = useDispatch();

  const handleDeleteDonorReviewClick = async (donorReviewId: string) => {
    try {
      await deleteDonorReview(donorReviewId);
      dispatch(removeDonorReview({ donorReviewId }));
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedDonorReviews.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>NO.</Th>
          <Th>Donor Name</Th>
          <Th>Donor Profession</Th>
          <Th>Donor Location</Th>
          <Th>Donor Review</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {paginatedDonorReviews.map((donorReview, index) => (
          <Tr key={donorReview._id}>
            <Td>{index + 1}</Td>
            <Td>{donorReview.donorName}</Td>
            <Td>{donorReview.donorProfession}</Td>
            <Td>{donorReview.donorLocation}</Td>
            <Td>{truncateWord(donorReview.donorReview)}</Td>
            <Td>
              <ManageDonorReviewsTableBtnBox>
                <ManageDonorReviewsTableEditBtn>
                  <Link to={`/cms-edit-donor-review/${donorReview._id}`}>
                    <FiEdit />
                  </Link>
                </ManageDonorReviewsTableEditBtn>
                <ManageDonorReviewsTableDeleteBtn
                  onClick={handleDeleteDonorReviewClick.bind(
                    null,
                    donorReview._id
                  )}
                >
                  <RiDeleteBinLine />
                </ManageDonorReviewsTableDeleteBtn>
              </ManageDonorReviewsTableBtnBox>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManageDonorReviewsTableTitle>
      There are not any donor reviews yet!
    </ManageDonorReviewsTableTitle>
  );
};

export default ManageDonorReviewsTable;
