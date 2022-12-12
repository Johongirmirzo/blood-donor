import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBloodGroup as removeBloodGroup } from "../../../redux/blood-group";
import { deleteBloodGroup } from "../../../api/blood-group";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import {
  ManageBlooGroupEditBtn,
  ManageBlooGroupDeleteBtn,
  ManageBloodGroupTableTitle,
} from "./index.styled";
import { ManageBloodGroupTableProps } from "./index.types";

const ManageBloodGroupTable = ({
  paginatedBloodGroups,
}: ManageBloodGroupTableProps) => {
  const dispatch = useDispatch();

  const handleDeleteBloodGroupClick = async (bloodGroupId: string) => {
    try {
      await deleteBloodGroup(bloodGroupId);
      dispatch(removeBloodGroup({ bloodGroupId }));
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedBloodGroups.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>NO.</Th>
          <Th>Blood Type</Th>
          <Th>Blood Creation Date</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {paginatedBloodGroups.map((bloodGroup, index) => (
          <Tr key={bloodGroup._id}>
            <Td>{index + 1}</Td>
            <Td>{bloodGroup.bloodType}</Td>
            <Td>
              {moment(bloodGroup.creationDate).format(
                "yyyy-MM-DD - hh:mm:ss a"
              )}
            </Td>
            <Td>
              <ManageBlooGroupEditBtn>
                <Link to={`/edit-blood-group/${bloodGroup._id}`}>
                  <FiEdit />
                </Link>
              </ManageBlooGroupEditBtn>
              <ManageBlooGroupDeleteBtn
                onClick={handleDeleteBloodGroupClick.bind(null, bloodGroup._id)}
              >
                <RiDeleteBinLine />
              </ManageBlooGroupDeleteBtn>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManageBloodGroupTableTitle>
      There are not any blood groups yet!
    </ManageBloodGroupTableTitle>
  );
};

export default ManageBloodGroupTable;
