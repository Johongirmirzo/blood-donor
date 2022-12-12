import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { IBloodRequirerList } from "../../../types/blood-requirer";
import { decodeHtml } from "../../../utils/decodeHtml";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { BloodRequirerTableTitle } from "./index.styled";

const BloodRequirerTable = () => {
  const bloodRequirers = useSelector(
    (state: RootState) => state.bloodRequirer.bloodRequirers
  );
  const { _id: donorId } = useSelector((state: RootState) => state.authUser);
  const [currentDonorBloodRequirers, setCurrentDonorBloodRequirers] = useState<
    IBloodRequirerList[]
  >([]);

  useEffect(() => {
    const currentDonorBloodRequirers = getAllDonorBloodRequirers();
    setCurrentDonorBloodRequirers(currentDonorBloodRequirers);
  }, [bloodRequirers]);

  const getAllDonorBloodRequirers = () => {
    return bloodRequirers.filter(
      (bloodRequirers) => bloodRequirers.donorId === donorId
    );
  };

  return currentDonorBloodRequirers.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Name</Th>
          <Th>Phone Number</Th>
          <Th>Email</Th>
          <Th>Blood Needed For</Th>
          <Th>Message</Th>
          <Th>Apply Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {currentDonorBloodRequirers.map((bloodRequirer, index) => (
          <Tr key={bloodRequirer._id}>
            <Td>{index + 1}</Td>
            <Td>{decodeHtml(bloodRequirer.fullname)}</Td>
            <Td>{decodeHtml(bloodRequirer.phoneNumber)}</Td>
            <Td>{decodeHtml(bloodRequirer.email)}</Td>
            <Td>{decodeHtml(bloodRequirer.bloodNeededFor)}</Td>
            <Td>{decodeHtml(bloodRequirer.message)}</Td>
            <Td>
              {moment(bloodRequirer.applyDate).format("yy-MM-DD hh:mm:ss a")}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <BloodRequirerTableTitle>
      There are not any blood requirers yet!
    </BloodRequirerTableTitle>
  );
};

export default BloodRequirerTable;
