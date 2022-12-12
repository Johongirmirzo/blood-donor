import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { DonorSearchProps } from "./index.types";
import { FormInput, FormSelect } from "../../../styles/UI/Form/index.styled";
import { DonorSearchBox } from "./index.styled";

const DonorSearch = ({ getDonorInfo }: DonorSearchProps) => {
  const [donorInfo, setDonorInfo] = useState({ bloodGroup: "", city: "" });
  const bloodGroups = useSelector(
    (state: RootState) => state.bloodGroup.bloodGroups
  );
  const handleUpdateDonorInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setDonorInfo({ ...donorInfo, [e.target.name]: e.target.value });
  };
  const handleSearchDonorClick = () => {
    if (!donorInfo.bloodGroup.length) {
      alert("Blood type must be chosen!");
    } else if (!donorInfo.bloodGroup.length) {
      alert("bloodGroup can't be empty!");
    } else {
      getDonorInfo(donorInfo);
    }
  };
  const handleResetDonorInfoClick = () => {
    setDonorInfo({ bloodGroup: "", city: "" });
    getDonorInfo({ bloodGroup: "", city: "" });
  };

  return (
    <DonorSearchBox>
      <FormSelect
        name="bloodGroup"
        onChange={handleUpdateDonorInfoChange}
        value={donorInfo.bloodGroup}
      >
        <option value="">Choose Blood Group</option>
        {bloodGroups.map((bloodGroup) => (
          <option key={bloodGroup._id} value={bloodGroup.bloodType}>
            {bloodGroup.bloodType}
          </option>
        ))}
      </FormSelect>
      <FormSelect
        name="city"
        onChange={handleUpdateDonorInfoChange}
        value={donorInfo.city}
      >
        <option value="">Choose Donor City</option>
        <option value="Namangan">Namangan</option>
        <option value="Andijan">Andijan</option>
        <option value="Fergana">Fergana</option>
        <option value="Tashkent">Tashkent</option>
        <option value="Samarkand">Samarkand</option>
        <option value="Buhara">Buhara</option>
        <option value="Xorazm">Xorazm</option>
        <option value="Navoi">Navoi</option>
        <option value="Nukus">Nukus</option>
        <option value="Termez">Termez</option>
        <option value="Qarshi">Qarshi</option>
        <option value="Jizzakh">Jizzakh</option>
      </FormSelect>
      <div>
        <button onClick={handleSearchDonorClick}>Search Donor</button>
        <button onClick={handleResetDonorInfoClick}>Reset</button>
      </div>
    </DonorSearchBox>
  );
};

export default DonorSearch;
