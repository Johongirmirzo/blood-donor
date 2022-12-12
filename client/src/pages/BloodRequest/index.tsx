import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import HeroSection from "../../components/HeroSection";
import BloodRequestTable from "./BloodRequestTable";
import SlideToTopCircle from "../../components/SlideToTopCircle";
import { getSessionExpiredMessage } from "../../utils/localStorage";
import { BloodRequestsSection } from "./index.styled";

const BloodRequests = () => {
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
