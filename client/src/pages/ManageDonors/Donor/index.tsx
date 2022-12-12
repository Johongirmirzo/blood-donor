import React from "react";
import { Link } from "react-router-dom";
import DonorList from "./DonorList";
import {
  DonorSection,
  DonorContainer,
  DonorHeader,
  DonorTitle,
  DonorDescription,
  DonorListGrid,
  DonorBtnBox,
  DonorBtn,
} from "./index.styled";
import { DonorProps } from "./index.types";

const Donor = ({
  donors,
  donorInfo,
  displayAtHome,
  donorDisplayAmount,
}: DonorProps) => {
  return (
    <DonorSection>
      <DonorContainer>
        <DonorHeader>
          <DonorTitle>Our Donors</DonorTitle>
          <DonorDescription>
            All the donors that value human life and sacrifise part of them to
            save the lifes
          </DonorDescription>
        </DonorHeader>
        <DonorListGrid>
          <DonorList
            donorInfo={donorInfo}
            donors={donors.slice(0, donorDisplayAmount)}
          />
        </DonorListGrid>
        {displayAtHome && (
          <DonorBtnBox>
            <Link to="/donors">
              <DonorBtn>See More</DonorBtn>
            </Link>
          </DonorBtnBox>
        )}
      </DonorContainer>
    </DonorSection>
  );
};

export default Donor;
