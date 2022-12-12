import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ChangePasswordForm from "./ChangePasswordForm";
import HeroSection from "../../components/HeroSection";
import SlideToTopCircle from "../../components/SlideToTopCircle";
import { getSessionExpiredMessage } from "../../utils/localStorage";
import { ChangePasswordSection } from "./index.styled";

const ChangePassword = () => {
  const heroImage = useSelector(
    (state: RootState) => state.contactPage.heroImage
  );
  const authUser = useSelector((state: RootState) => state.authUser);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionExpiredMessage = getSessionExpiredMessage();
    if (!authUser.fullname && sessionExpiredMessage) {
      navigate("/login");
    }
  }, [authUser.fullname]);

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
