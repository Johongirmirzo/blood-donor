import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Donor from "./Donor";
import DonorSearch from "./DonorSearch";
import HeroSection from "../../components/HeroSection";
import SlideToTopCircle from "../../components/SlideToTopCircle";

const Donors = () => {
  const heroImage = useSelector(
    (state: RootState) => state.aboutUsPage.heroImage
  );
  const donors = useSelector((state: RootState) => state.donors.donors);
  const [donorInfo, setDonorInfo] = useState({ bloodGroup: "", city: "" });
  const getDonorInfo = (donorInfo: { bloodGroup: string; city: string }) =>
    setDonorInfo(donorInfo);

  return (
    <>
      <HeroSection routeTo="/" pageName="DONORS" heroImage={heroImage} />
      <DonorSearch getDonorInfo={getDonorInfo} />

      <Donor
        donorInfo={donorInfo}
        donors={donors}
        donorDisplayAmount={donors.length}
      />
      <SlideToTopCircle />
    </>
  );
};

export default Donors;
