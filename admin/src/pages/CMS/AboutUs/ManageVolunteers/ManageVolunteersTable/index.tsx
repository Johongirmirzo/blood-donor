import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteVolunteer as removeVolunteer } from "../../../../../redux/about-page";
import { deleteVolunteer } from "../../../../../api/about-page";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../../../styles/UI/Table/index.styled";
import {
  ManageVolunteerTableImage,
  ManageVolunteersTableBtnBox,
  ManageVolunteersTableEditBtn,
  ManageVolunteersTableDeleteBtn,
  ManageVolunteersTableTitle,
} from "./index.styled";
import { ManageVolunteersTableProps } from "./index.types";

const ManageVolunteersTable = ({
  paginatedVolunteers,
}: ManageVolunteersTableProps) => {
  const dispatch = useDispatch();

  const handleDeleteDonorReviewClick = async (volunteerId: string) => {
    try {
      await deleteVolunteer(volunteerId);
      dispatch(removeVolunteer({ volunteerId }));
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedVolunteers.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>NO.</Th>
          <Th>Donor Image</Th>
          <Th>Donor Name</Th>
          <Th>Donor Title</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {paginatedVolunteers.map((volunteer, index) => (
          <Tr key={volunteer._id}>
            <Td>{index + 1}</Td>
            <Td>
              <ManageVolunteerTableImage
                src={volunteer.volunteerImage}
                alt="volunteer image"
              />
            </Td>
            <Td>{volunteer.volunteerName}</Td>
            <Td>{volunteer.volunteerTitle}</Td>

            <Td>
              <ManageVolunteersTableBtnBox>
                <ManageVolunteersTableEditBtn>
                  <Link to={`/cms-edit-volunteer/${volunteer._id}`}>
                    <FiEdit />
                  </Link>
                </ManageVolunteersTableEditBtn>
                <ManageVolunteersTableDeleteBtn
                  onClick={handleDeleteDonorReviewClick.bind(
                    null,
                    volunteer._id
                  )}
                >
                  <RiDeleteBinLine />
                </ManageVolunteersTableDeleteBtn>
              </ManageVolunteersTableBtnBox>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManageVolunteersTableTitle>
      There are not any volunteers yet!
    </ManageVolunteersTableTitle>
  );
};

export default ManageVolunteersTable;
