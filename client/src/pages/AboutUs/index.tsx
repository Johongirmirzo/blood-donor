import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Volunteer from "./Volunteer";
import DonorReview from "./DonoReview";
import OurAchievements from "./OurAchievements";
import HeroSection from "../../components/HeroSection";
import WhoWeAre from "../../components/WhoWeAre";
import SlideToTopCircle from "../../components/SlideToTopCircle";

const AboutUs = () => {
  const aboutUsPage = useSelector((state: RootState) => state.aboutUsPage);
  return (
    <>
      <HeroSection
        routeTo="/"
        pageName="ABOUT US"
        heroImage={aboutUsPage.heroImage}
      />
      <WhoWeAre aboutUs={aboutUsPage.aboutUs} />
      <Volunteer volunteers={aboutUsPage.volunteers} />
      <OurAchievements ourAchievements={aboutUsPage.ourAchievements} />
      <DonorReview
        donorReviews={aboutUsPage.donorReviews}
        image={aboutUsPage.aboutUs.aboutUsImage}
      />
      <SlideToTopCircle />
    </>
  );
};

export default AboutUs;
