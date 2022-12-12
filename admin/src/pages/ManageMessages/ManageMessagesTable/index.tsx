import React from "react";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import { deleteMessage } from "../../../redux/message";
import { deleteMessage as removeMessage } from "../../../api/message";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import {
  ManageMessagesTableTitle,
  ManageMessagesTableDeleteBtn,
} from "./index.styled";
import { ManageMessagesTableProps } from "./index.types";

const ManageMessagesTable = ({
  paginatedMessages,
}: ManageMessagesTableProps) => {
  const dispatch = useDispatch();

  const handleDeleteDonorClick = async (messageId: string) => {
    try {
      await removeMessage(messageId);
      dispatch(deleteMessage({ messageId }));
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedMessages.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Fullname</Th>
          <Th>Phone Number</Th>
          <Th>Email</Th>
          <Th>Message</Th>
          <Th>Message Date</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {paginatedMessages.map((message, index) => (
          <Tr key={message._id}>
            <Td>{index + 1}</Td>
            <Td>{message.fullname}</Td>
            <Td>{message.phoneNumber}</Td>
            <Td>{message.email}</Td>
            <Td>{message.message}</Td>
            <Td>{moment(message.messageDate).format("yy-MM-DD hh:mm:ss a")}</Td>
            <Td>
              <ManageMessagesTableDeleteBtn
                onClick={handleDeleteDonorClick.bind(null, message._id)}
              >
                <RiDeleteBinLine />
              </ManageMessagesTableDeleteBtn>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManageMessagesTableTitle>
      There are not any messages yet!
    </ManageMessagesTableTitle>
  );
};

export default ManageMessagesTable;
