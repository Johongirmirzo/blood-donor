import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteBloodRequirer } from "../../../redux/blood-requirer";
import { deleteBloodRequirer as removeBloodRequirer } from "../../../api/blood-requirer";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import {
  ManageBlooGroupDeleteBtn,
  ManageBloodRequirersTitle,
} from "./index.styled";
import { BloodRequirersTableProps } from "./index.type";

const ManageBloodGroupTable = ({
  paginatedBloodRequirers,
}: BloodRequirersTableProps) => {
  const dispatch = useDispatch();

  const handleDeleteBloodRequirerClick = async (bloodRequirerId: string) => {
    try {
      await removeBloodRequirer(bloodRequirerId);
      dispatch(deleteBloodRequirer({ bloodRequirerId }));
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedBloodRequirers.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Donor Name</Th>
          <Th>Donor Phone Number</Th>
          <Th>Donor Email</Th>
          <Th>Donor Blood Type</Th>
          <Th>Blood Requirer Name</Th>
          <Th>Blood Requirer Phone Number</Th>
          <Th>Blood Requirer Email</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {paginatedBloodRequirers.map((bloodRequirer, index) => (
          <Tr key={bloodRequirer._id}>
            <Td>{index + 1}</Td>
            <Td>{bloodRequirer.donorFullname}</Td>
            <Td>{bloodRequirer.donorPhoneNumber}</Td>
            <Td>{bloodRequirer.donorEmail}</Td>
            <Td>{bloodRequirer.donorBloodGroup}</Td>
            <Td>{bloodRequirer.fullname}</Td>
            <Td>{bloodRequirer.phoneNumber}</Td>
            <Td>{bloodRequirer.email}</Td>
            <Td>
              <ManageBlooGroupDeleteBtn
                onClick={handleDeleteBloodRequirerClick.bind(
                  null,
                  bloodRequirer._id
                )}
              >
                <RiDeleteBinLine />
              </ManageBlooGroupDeleteBtn>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManageBloodRequirersTitle>
      There are not any blood requirers yet!
    </ManageBloodRequirersTitle>
  );
};

export default ManageBloodGroupTable;
