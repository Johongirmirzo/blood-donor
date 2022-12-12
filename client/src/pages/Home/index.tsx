import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Initiative from "./Initiative";
import Donor from "../ManageDonors/Donor";
import DonorReview from "../AboutUs/DonoReview";
import Volunteer from "../AboutUs/Volunteer";
import GalleryCampaign from "../Gallery/GalleryCampaign";
import SliderList from "../../components/SliderList";
import HelpfulInformation from "../../components/HelpfulInformation";
import WhoWeAre from "../../components/WhoWeAre";
import SlideToTopCircle from "../../components/SlideToTopCircle";

const HomePage = ({ isLoading }: { isLoading: boolean }) => {
  const homePage = useSelector((state: RootState) => state.homePage);
  const aboutPage = useSelector((state: RootState) => state.aboutUsPage);
  const galleryPage = useSelector((state: RootState) => state.galleryPage);
  const donors = useSelector((state: RootState) => state.donors.donors);

  return (
    <div>
      <>
        <SliderList sliders={homePage.sliders} />
        <WhoWeAre aboutUs={aboutPage.aboutUs} />
        <DonorReview
          donorReviews={aboutPage.donorReviews}
          image={aboutPage.aboutUs.aboutUsImage}
        />
        <HelpfulInformation
          helpfulInfo={homePage.helpfulInfo}
          achievementList={aboutPage.ourAchievements.achievementList}
        />
        <Donor donors={donors} displayAtHome={true} donorDisplayAmount={5} />
        <Volunteer volunteers={aboutPage.volunteers} />
        <GalleryCampaign gallery={galleryPage.gallery} displayImageAmount={3} />
        <Initiative initiative={homePage.initiative} />
        <SlideToTopCircle />
      </>
    </div>
  );
};

export default HomePage;
