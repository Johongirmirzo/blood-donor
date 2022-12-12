import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import DonorRequestBloodForm from "./DonorRequestBloodForm";
import HeroSection from "../../components/HeroSection";
import SlideToTopCircle from "../../components/SlideToTopCircle";
import { DonorSection } from "./index.styled";

const Donor = () => {
  const heroImage = useSelector(
    (state: RootState) => state.aboutUsPage.heroImage
  );
  return (
    <>
      <HeroSection
        routeTo="/"
        pageName="DONOR BLOOD REQUEST"
        heroImage={heroImage}
      />
      <DonorSection>
        <div>
          <header>
            <h2>Request Blood</h2>
          </header>
          <DonorRequestBloodForm />
        </div>
      </DonorSection>
      <SlideToTopCircle />
    </>
  );
};

export default Donor;
