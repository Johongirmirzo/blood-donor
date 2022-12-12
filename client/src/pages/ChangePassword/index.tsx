import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ChangePasswordForm from "./ChangePasswordForm";
import HeroSection from "../../components/HeroSection";
import SlideToTopCircle from "../../components/SlideToTopCircle";
import { ChangePasswordSection } from "./index.styled";

const ChangePassword = () => {
  const heroImage = useSelector(
    (state: RootState) => state.contactPage.heroImage
  );

  return (
    <>
      <HeroSection
        routeTo="/"
        pageName="CHANGE PASSWORD"
        heroImage={heroImage}
      />
      <ChangePasswordSection>
        <div>
          <header>
            <h2>Change Password</h2>
          </header>
          <ChangePasswordForm />
        </div>
      </ChangePasswordSection>
      <SlideToTopCircle />
    </>
  );
};

export default ChangePassword;
