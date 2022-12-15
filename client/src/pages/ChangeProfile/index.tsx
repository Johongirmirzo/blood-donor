import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ChangeProfileForm from "./ChangeProfileForm";
import HeroSection from "../../components/HeroSection";
import SlideToTopCircle from "../../components/SlideToTopCircle";
import { ChangeProfileSection } from "./index.styled";

const ChangeProfile = () => {
  const heroImage = useSelector(
    (state: RootState) => state.contactPage.heroImage
  );
  const navigate = useNavigate();
  const authDonor = useSelector((state: RootState) => state.authUser);

  useEffect(() => {
    if (!authDonor.fullname) {
      navigate("/login");
    }
  }, [authDonor]);

  return (
    <>
      <HeroSection
        routeTo="/"
        pageName="CHANGE PROFILE"
        heroImage={heroImage}
      />
      <ChangeProfileSection>
        <div>
          <header>
            <h2>Change Your Profile</h2>
          </header>
          <ChangeProfileForm />
        </div>
      </ChangeProfileSection>
      <SlideToTopCircle />
    </>
  );
};

export default ChangeProfile;
