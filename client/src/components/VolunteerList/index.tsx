import React from "react";
import VolunteerItem from "./VolunteerItem";
import { VolunteerListProps } from "./index.types";

const VolunteerList = ({ volunteers }: VolunteerListProps) => {
  return (
    <>
      {volunteers.map((volunteer) => (
        <VolunteerItem key={volunteer._id} volunteer={volunteer} />
      ))}
    </>
  );
};

export default VolunteerList;
