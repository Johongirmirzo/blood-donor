import React from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteFaq } from "../../../../../redux/faq-page";
import { deleteFaq as removeFaq } from "../../../../../api/faq-page";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../../../styles/UI/Table/index.styled";
import {
  ManageFaqsTableBtnBox,
  ManageFaqsEditBtn,
  ManageFaqsTableDeleteBtn,
  ManageFaqsTableTitle,
} from "./index.styled";
import { ManageFaqsTableProps } from "./index.types";

const ManageFaqsTable = ({ paginatedFaqs }: ManageFaqsTableProps) => {
  const dispatch = useDispatch();

  const handleDeleteGalleryImageClick = async (faqId: string) => {
    try {
      await removeFaq(faqId);
      dispatch(deleteFaq({ faqId }));
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedFaqs.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>NO.</Th>
          <Th>Question</Th>
          <Th>Answer</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {paginatedFaqs.map((faqItem, index) => (
          <Tr key={faqItem._id}>
            <Td>{index + 1}</Td>
            <Td>{faqItem.question}</Td>
            <Td>{faqItem.answer}</Td>
            <Td>
              <ManageFaqsTableBtnBox>
                <ManageFaqsEditBtn>
                  <Link to={`/cms-edit-faq/${faqItem._id}`}>
                    <FiEdit />
                  </Link>
                </ManageFaqsEditBtn>
                <ManageFaqsTableDeleteBtn
                  onClick={handleDeleteGalleryImageClick.bind(
                    null,
                    faqItem._id
                  )}
                >
                  <RiDeleteBinLine />
                </ManageFaqsTableDeleteBtn>
              </ManageFaqsTableBtnBox>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <ManageFaqsTableTitle>There are not any Faqs yet!</ManageFaqsTableTitle>
  );
};

export default ManageFaqsTable;
