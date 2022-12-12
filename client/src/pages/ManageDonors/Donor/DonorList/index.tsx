import React from "react";
import DonorItem from "./DonorItem";
import { DonorListProps } from "./index.types";

const DonorList = ({ donors, donorInfo }: DonorListProps) => {
  const getDonor = () => {
    return donors.filter(
      (donor) =>
        donor.bloodGroup === donorInfo?.bloodGroup &&
        donor.city === donorInfo?.city
    );
  };

  return (
    <>
      {!donorInfo?.city ? (
        donors.map((donor) => <DonorItem key={donor._id} donor={donor} />)
      ) : getDonor().length > 0 ? (
        getDonor().map((donor) => <DonorItem key={donor._id} donor={donor} />)
      ) : (
        <h2
          style={{
            textAlign: "center",
            gridColumn: "1/5",
            color: "#333",
            fontSize: "25px",
          }}
        >
          There are not any donor with current info
        </h2>
      )}
    </>
  );
};

export default DonorList;
