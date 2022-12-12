import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeSlider } from "../../../../../redux/home-page";
import { deleteSlider } from "../../../../../api/home-page";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../../../styles/UI/Table/index.styled";
import {
  SliderTableImg,
  SliderTableEditBtn,
  SliderTableDeleteBtn,
  SlidersTableTitle,
} from "./index.styled";
import { ManageSlidersTableProps } from "./index.types";

const SlidersTable = ({ paginatedSliders }: ManageSlidersTableProps) => {
  const dispatch = useDispatch();

  const handleDeleteSliderGroupClick = async (sliderId: string | undefined) => {
    try {
      if (sliderId) {
        await deleteSlider(sliderId);
        dispatch(removeSlider({ sliderId }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedSliders.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Slider Image</Th>
          <Th>Slider Title</Th>
          <Th>Slider Text</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {paginatedSliders.map((slider, index) => (
          <Tr key={slider._id}>
            <Td>{index + 1}</Td>
            <Td>
              <SliderTableImg src={slider.image} alt="home page slider" />
            </Td>
            <Td>{slider.title}</Td>
            <Td>{slider.description}</Td>
            <Td>
              <SliderTableEditBtn>
                <Link to={`/cms-edit-slider/${slider._id}`}>
                  <FiEdit />
                </Link>
              </SliderTableEditBtn>
              <SliderTableDeleteBtn
                onClick={handleDeleteSliderGroupClick.bind(null, slider._id)}
              >
                <RiDeleteBinLine />
              </SliderTableDeleteBtn>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <SlidersTableTitle>There are not any sliders yet!</SlidersTableTitle>
  );
};

export default SlidersTable;
