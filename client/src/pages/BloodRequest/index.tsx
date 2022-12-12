import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import HeroSection from "../../components/HeroSection";
import BloodRequestTable from "./BloodRequestTable";
import SlideToTopCircle from "../../components/SlideToTopCircle";
import { BloodRequestsSection } from "./index.styled";

const BloodRequests = () => {
  const heroImage = useSelector(
    (state: RootState) => state.contactPage.heroImage
  );

  return (
    <>
      <HeroSection
        routeTo="/"
        pageName="BLOOD REQUESTS"
        heroImage={heroImage}
      />
      <BloodRequestsSection>
        <div>
          <header>
            <h2>All The Blood Requirers</h2>
          </header>
          <BloodRequestTable />
        </div>
      </BloodRequestsSection>
      <SlideToTopCircle />
    </>
  );
};

export default BloodRequests;
