import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
