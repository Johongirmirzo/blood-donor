import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDonor, toggleDonor } from "../../../redux/donor";
import {
  deleteDonor as removeDonor,
  toggleDonor as donorToggle,
} from "../../../api/donor";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import {
  DonorsTableTitle,
  DonorsTableToggleBtn,
  DonorsTableDeleteBtn,
} from "./index.styled";
import { DonorsTableProps } from "./index.types";

const DonorsTable = ({ paginatedDonors }: DonorsTableProps) => {
  const dispatch = useDispatch();
  const handleToggleDonorClick = async (donorId: string) => {
    try {
      await donorToggle(donorId);
      dispatch(toggleDonor({ donorId }));
    } catch (err) {
      console.error(err);
    }
  };
  const handleDeleteDonorClick = async (donorId: string) => {
    try {
      await removeDonor(donorId);
      dispatch(deleteDonor({ donorId }));
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedDonors.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Fullname</Th>
          <Th>Phone Number</Th>
          <Th>Email</Th>
          <Th>Age</Th>
          <Th>Blood Group</Th>
          <Th>City</Th>
          <Th>Status</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {paginatedDonors.map((donor, index) => (
          <Tr key={donor._id}>
            <Td>{index + 1}</Td>
            <Td>{donor.fullname}</Td>
            <Td>{donor.phoneNumber}</Td>
            <Td>{donor.email}</Td>
            <Td>{donor.age}</Td>
            <Td>{donor.bloodGroup}</Td>
            <Td>{donor.city}</Td>
            <Td>{donor.isHidden ? "Invisible" : "Visible"}</Td>
            <Td>
              <DonorsTableToggleBtn
                onClick={handleToggleDonorClick.bind(null, donor._id)}
              >
                {donor.isHidden ? <BsEyeSlash /> : <BsEye />}
              </DonorsTableToggleBtn>
              <DonorsTableDeleteBtn
                onClick={handleDeleteDonorClick.bind(null, donor._id)}
              >
                <RiDeleteBinLine />
              </DonorsTableDeleteBtn>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <DonorsTableTitle>There are not any donors yet!</DonorsTableTitle>
  );
};

export default DonorsTable;
