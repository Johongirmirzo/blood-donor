import React from "react";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  DonorItemCard,
  DonorItemIconBox,
  DonorItemBody,
  DonorItemName,
  DonorItemGender,
  DonorItemBloodType,
  DonorItemBtn,
} from "./index.styled";
import { DonorItemProps } from "./index.types";

const DonorItem = ({ donor }: DonorItemProps) => {
  return !donor.isHidden ? (
    <DonorItemCard>
      <DonorItemIconBox>
        <BsPerson />
      </DonorItemIconBox>
      <DonorItemBody>
        <DonorItemName>{donor.fullname}</DonorItemName>
        <DonorItemGender>Gender: {donor.gender}</DonorItemGender>
        <DonorItemBloodType>Blood Group: {donor.bloodGroup}</DonorItemBloodType>
        <Link to={`/donors/${donor._id}`}>
          <DonorItemBtn>Reqest Blood</DonorItemBtn>
        </Link>
      </DonorItemBody>
    </DonorItemCard>
  ) : null;
};

export default DonorItem;
